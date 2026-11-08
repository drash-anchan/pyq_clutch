/**
 * PostHog Analytics Synchronizer for GitHub README — PYQ Vault
 *
 * Repository: https://github.com/drash-anchan/pyq_clutch
 *
 * Fetches verified all-time traffic & event metrics from PostHog Query API (HogQL)
 * and updates only the section between <!-- ANALYTICS:START --> and <!-- ANALYTICS:END -->.
 *
 * Permanent Monotonic Guarantee:
 * - Queries cumulative all-time metrics across the entire lifecycle of the project.
 * - Extracts and compares against existing numbers in README.md.
 * - Enforces Math.max(existing, fetched) so numbers NEVER reset, decrease, or show 0.
 */

import fs from 'node:fs';
import path from 'node:path';

function parseCurrentMetrics(content) {
  const current = {
    uniqueVisitors: 0,
    totalPageviews: 0,
    pdf_preview_clicked: 0,
    pdf_download_clicked: 0,
    github_contribution_clicked: 0,
    email_contribution_clicked: 0,
    subject_opened: 0,
  };

  const lines = content.split('\n');
  for (const line of lines) {
    const match = line.match(/\|\s*\*\*([^*]+)\*\*\s*\|\s*([\d,]+)\s*\|/);
    if (!match) continue;
    const label = match[1].trim();
    const val = parseInt(match[2].replace(/,/g, ''), 10) || 0;

    if (label.includes('Unique Visitors')) current.uniqueVisitors = val;
    else if (label.includes('Total Pageviews')) current.totalPageviews = val;
    else if (label.includes('PDF Preview Views')) current.pdf_preview_clicked = val;
    else if (label.includes('PDF Downloads')) current.pdf_download_clicked = val;
    else if (label.includes('GitHub Contributor Clicks')) current.github_contribution_clicked = val;
    else if (label.includes('Email Submission Clicks')) current.email_contribution_clicked = val;
    else if (label.includes('Subject Explorations')) current.subject_opened = val;
  }
  return current;
}

async function updateReadmeAnalytics() {
  const apiKey = process.env.POSTHOG_API_KEY?.trim();
  const projectId = process.env.POSTHOG_PROJECT_ID?.trim();
  const host = (process.env.POSTHOG_HOST || 'https://eu.posthog.com').replace(/\/+$/, '');

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

  // Parse existing metrics from README to guarantee numbers never decrease or reset
  const currentSection = readmeContent.substring(startIndex, endIndex);
  const existingMetrics = parseCurrentMetrics(currentSection);

  // 1. Validation: Fail clearly if required GitHub Secrets are missing
  if (!apiKey || !projectId) {
    console.error('❌ Notice: Missing required GitHub Secrets: POSTHOG_API_KEY or POSTHOG_PROJECT_ID.');
    console.error('Preserving existing README statistics table intact.');
    process.exit(0);
  }

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'User-Agent': 'pyq-vault-github-analytics-bot/1.0',
  };

  // Run HogQL Query to aggregate counts by event (ALL-TIME cumulative)
  const hogqlQuery = {
    query: {
      kind: 'HogQLQuery',
      query: "SELECT event, count(), count(distinct distinct_id) FROM events GROUP BY event",
    },
  };

  console.log(`📊 Querying all-time cumulative metrics from PostHog project ${projectId} at ${host}...`);

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

    let fetchedPageviews = 0;
    let fetchedVisitors = 0;
    const fetchedEvents = {
      pdf_preview_clicked: 0,
      pdf_download_clicked: 0,
      github_contribution_clicked: 0,
      email_contribution_clicked: 0,
      subject_opened: 0,
      year_selected: 0,
    };

    for (const [eventName, total, uniques] of rows) {
      if (eventName === '$pageview') {
        fetchedPageviews += Number(total || 0);
        fetchedVisitors += Number(uniques || 0);
      } else if (eventName in fetchedEvents) {
        fetchedEvents[eventName] = Number(total || 0);
      }
    }

    // Monotonic Guarantee: Metrics strictly never decrease or reset to 0
    const totalPageviews = Math.max(existingMetrics.totalPageviews, fetchedPageviews);
    const uniqueVisitors = Math.max(existingMetrics.uniqueVisitors, fetchedVisitors);
    const eventCounts = {
      pdf_preview_clicked: Math.max(existingMetrics.pdf_preview_clicked, fetchedEvents.pdf_preview_clicked),
      pdf_download_clicked: Math.max(existingMetrics.pdf_download_clicked, fetchedEvents.pdf_download_clicked),
      github_contribution_clicked: Math.max(existingMetrics.github_contribution_clicked, fetchedEvents.github_contribution_clicked),
      email_contribution_clicked: Math.max(existingMetrics.email_contribution_clicked, fetchedEvents.email_contribution_clicked),
      subject_opened: Math.max(existingMetrics.subject_opened, fetchedEvents.subject_opened),
    };

    const fmt = (n) => (n > 0 ? Number(n).toLocaleString('en-US') : '0');
    const today = new Date().toISOString().split('T')[0];

    const newTable = `${startMarker}
| Metric | All-Time Total |
|---|---:|
| **Unique Visitors** | ${fmt(uniqueVisitors)} |
| **Total Pageviews** | ${fmt(totalPageviews)} |
| **PDF Preview Views** | ${fmt(eventCounts.pdf_preview_clicked)} |
| **PDF Downloads** | ${fmt(eventCounts.pdf_download_clicked)} |
| **GitHub Contributor Clicks** | ${fmt(eventCounts.github_contribution_clicked)} |
| **Email Submission Clicks** | ${fmt(eventCounts.email_contribution_clicked)} |
| **Subject Explorations** | ${fmt(eventCounts.subject_opened)} |

*Last synchronized via PostHog on ${today} UTC • All-time cumulative telemetry • Updated daily by GitHub Actions.*
${endMarker}`;

    const updatedReadme =
      readmeContent.substring(0, startIndex) +
      newTable +
      readmeContent.substring(endIndex + endMarker.length);

    fs.writeFileSync(readmePath, updatedReadme, 'utf-8');
    console.log('✅ Successfully refreshed README.md all-time analytics table.');
  } catch (err) {
    console.error('⚠️ Could not complete PostHog sync:', err);
    console.log('Preserving existing README table.');
  }
}

updateReadmeAnalytics();
