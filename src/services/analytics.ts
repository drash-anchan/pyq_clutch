import posthog from 'posthog-js';
import { SITE_CONFIG, isPosthogConfigured } from '../config/siteConfig';

let isInitialized = false;

/**
 * Initializes PostHog silent analytics if configured.
 * Operates purely in the background with zero visible UI or visitor tracking cookies.
 */
export function initAnalytics(): void {
  if (isInitialized || typeof window === 'undefined') return;

  if (!isPosthogConfigured()) {
    return;
  }

  try {
    posthog.init(SITE_CONFIG.posthogKey, {
      api_host: SITE_CONFIG.posthogHost,
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
      loaded: () => {
        isInitialized = true;
      },
    });
    isInitialized = true;
  } catch {
    // Fail silently without blocking application
  }
}

/**
 * Universal safe custom event tracker.
 * Ensures tracking never throws, never blocks calling code, and never sends PII.
 */
export function trackEvent(
  eventName: string,
  eventData?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;

  try {
    if (isPosthogConfigured()) {
      posthog.capture(eventName, eventData);
    }
  } catch {
    // Suppress analytics errors so core academic workflows are uninterrupted
  }
}

// ========================================================
// STRONGLY-TYPED ANALYTICS EVENT HELPERS
// ========================================================

/**
 * Track when a user navigates into a specific academic subject archive
 */
export function trackSubjectOpened(subjectName: string, subjectId: string): void {
  trackEvent('subject_opened', {
    subject: subjectName,
    subject_id: subjectId,
  });
}

/**
 * Track when a user filters by an examination year timeline
 */
export function trackYearSelected(subjectName: string, year: number | 'all'): void {
  trackEvent('year_selected', {
    subject: subjectName,
    year: String(year),
  });
}

/**
 * Track when a user clicks the Preview Modal for a specific paper
 */
export function trackPdfPreviewClicked(paperMeta: {
  title: string;
  subjectName: string;
  year: number;
  variant: string;
}): void {
  trackEvent('pdf_preview_clicked', {
    paper_title: paperMeta.title,
    subject: paperMeta.subjectName,
    year: paperMeta.year,
    variant: paperMeta.variant,
  });
}

/**
 * Track when a user initiates a verified PDF paper download
 */
export function trackPdfDownloadClicked(paperMeta: {
  title: string;
  subjectName: string;
  year: number;
  variant: string;
}): void {
  trackEvent('pdf_download_clicked', {
    paper_title: paperMeta.title,
    subject: paperMeta.subjectName,
    year: paperMeta.year,
    variant: paperMeta.variant,
  });
}

/**
 * Track when a user clicks to explore the GitHub repository or contribute
 */
export function trackGithubContributionClicked(sourceLocation: string = 'contribution_hub'): void {
  trackEvent('github_contribution_clicked', {
    source: sourceLocation,
    action: 'visit_github_repo',
    destination: SITE_CONFIG.githubRepositoryUrl,
  });
}

/**
 * Track when a user clicks the direct email submission link
 */
export function trackEmailContributionClicked(subjectCode?: string): void {
  trackEvent('email_contribution_clicked', {
    target_email: SITE_CONFIG.contributionEmail,
    suggested_subject: subjectCode || 'general_3rd_sem',
  });
}
