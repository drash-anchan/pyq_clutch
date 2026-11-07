/**
 * PostHog Analytics Synchronizer for GitHub README — PYQ Vault
 *
 * Repository: https://github.com/drash-anchan/pyq_clutch
 *
 * Fetches verified 30-day traffic & event metrics from PostHog Query API (HogQL)
 * and updates only the section between <!-- ANALYTICS:START --> and <!-- ANALYTICS:END -->.
 */

import fs from 'node:fs';
import path from 'node:path';

async function updateReadmeAnalytics() {
  const apiKey = process.env.POSTHOG_API_KEY?.trim();
  const projectId = process.env.POSTHOG_PROJECT_ID?.trim();
  const host = (process.env.POSTHOG_HOST || 'https://eu.posthog.com').replace(/\/+$/, '');

  // 1. Validation: Fail clearly if required GitHub Secrets are missing
  if (!apiKey || !projectId) {
    console.error('❌ Notice: Missing required GitHub Secrets: POSTHOG_API_KEY or POSTHOG_PROJECT_ID.');
    console.error('');
    console.error('Please configure repository secrets:');
    console.error('  1. POSTHOG_API_KEY: Personal API Key generated in PostHog -> User Settings -> Personal API Keys');
    console.error('  2. POSTHOG_PROJECT_ID: Your PostHog Project ID found in Project Settings');
    console.error('  3. POSTHOG_HOST (optional): Default is https://us.posthog.com (or https://eu.posthog.com)');
    console.error('');
    console.error('Setup path:');
    console.error('  GitHub Repository -> Settings -> Secrets and variables -> Actions -> New repository secret');
    console.error('');
    console.error('Preserving existing README statistics table.');
    process.exit(0);
  }

  const readmePath = path.resolve('README.md');
  if (!fs.existsSync(readmePath)) {
    console.error(`❌ Error: README.md not found at ${readmePath}`);
    process.exit(1);
  }

  const readmeContent = fs.readFileSync(readmePath, 'utf-8');
  const startMarker = '<!-- ANALYTICS:START -->';
  const endMarker = '<!-- ANALYTICS:END -->';

  const startIndex = readmeContent.indexOf(startMarker);
  const endIndex = readmeContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
    console.error('❌ Error: Could not find valid <!-- ANALYTICS:START --> and <!-- ANALYTICS:END --> markers in README.md.');
    process.exit(1);
  }

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'User-Agent': 'pyq-vault-github-analytics-bot/1.0',
  };

  // Run HogQL Query to aggregate counts by event over last 30 days
  const hogqlQuery = {
    query: {
      kind: 'HogQLQuery',
      query: "SELECT event, count(), count(distinct distinct_id) FROM events WHERE timestamp >= now() - INTERVAL 30 DAY GROUP BY event",
    },
  };

  console.log(`📊 Querying PostHog project ${projectId} at ${host}...`);

  try {
    const res = await fetch(`${host}/api/projects/${projectId}/query/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(hogqlQuery),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.warn(`⚠️ PostHog Query returned status ${res.status}: ${errText}`);
      console.warn('Preserving existing README statistics intact.');
      process.exit(0);
    }

    const data = await res.json();
    const rows = data?.results || [];

    let totalPageviews = 0;
    let uniqueVisitors = 0;
    const eventCounts = {
      pdf_preview_clicked: 0,
      pdf_download_clicked: 0,
      github_contribution_clicked: 0,
      email_contribution_clicked: 0,
      subject_opened: 0,
      year_selected: 0,
    };

    for (const [eventName, total, uniques] of rows) {
      if (eventName === '$pageview') {
        totalPageviews += Number(total || 0);
        uniqueVisitors += Number(uniques || 0);
      } else if (eventName in eventCounts) {
        eventCounts[eventName] = Number(total || 0);
      }
    }

    const fmt = (n) => (n > 0 ? Number(n).toLocaleString('en-US') : '0');
    const today = new Date().toISOString().split('T')[0];

    const newTable = `${startMarker}
| Metric | Last 30 Days |
|---|---:|
| **Unique Visitors** | ${fmt(uniqueVisitors)} |
| **Total Pageviews** | ${fmt(totalPageviews)} |
| **PDF Preview Views** | ${fmt(eventCounts.pdf_preview_clicked)} |
| **PDF Downloads** | ${fmt(eventCounts.pdf_download_clicked)} |
| **GitHub Contributor Clicks** | ${fmt(eventCounts.github_contribution_clicked)} |
| **Email Submission Clicks** | ${fmt(eventCounts.email_contribution_clicked)} |
| **Subject Explorations** | ${fmt(eventCounts.subject_opened)} |

*Last synchronized via PostHog on ${today} UTC • Updated automatically by GitHub Actions daily cron.*
${endMarker}`;

    const updatedReadme =
      readmeContent.substring(0, startIndex) +
      newTable +
      readmeContent.substring(endIndex + endMarker.length);

    fs.writeFileSync(readmePath, updatedReadme, 'utf-8');
    console.log('✅ Successfully refreshed README.md analytics table from PostHog.');
  } catch (err) {
    console.error('⚠️ Could not complete PostHog sync:', err);
    console.log('Preserving existing README table.');
  }
}

updateReadmeAnalytics();
