import { SITE_CONFIG, isUmamiConfigured } from '../config/siteConfig';

/**
 * Window augmentation for Umami tracking API
 */
declare global {
  interface Window {
    umami?: {
      track: {
        (eventName: string, eventData?: Record<string, string | number | boolean>): void;
        (customFunction: (props: Record<string, any>) => Record<string, any>): void;
      };
    };
  }
}

let isInitialized = false;

/**
 * Initializes the official Umami tracking script dynamically if configured.
 * Does not block application loading and fails silently if blocked by adblockers.
 */
export function initAnalytics(): void {
  if (isInitialized || typeof window === 'undefined') return;

  if (!isUmamiConfigured()) {
    // Umami website ID not configured; tracking is disabled.
    return;
  }

  try {
    const existingScript = document.querySelector(`script[data-website-id="${SITE_CONFIG.umamiWebsiteId}"]`);
    if (existingScript) {
      isInitialized = true;
      return;
    }

    const script = document.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = SITE_CONFIG.umamiScriptUrl;
    script.setAttribute('data-website-id', SITE_CONFIG.umamiWebsiteId);
    script.setAttribute('data-auto-track', 'true');

    script.onload = () => {
      isInitialized = true;
    };

    script.onerror = () => {
      // Script blocked or network error - fail silently without impacting user UX
      isInitialized = false;
    };

    document.head.appendChild(script);
  } catch {
    // Fail-safe catch
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
    if (window.umami && typeof window.umami.track === 'function') {
      if (eventData) {
        window.umami.track(eventName, eventData);
      } else {
        window.umami.track(eventName);
      }
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
    year: typeof year === 'number' ? year : 'all_years',
  });
}

/**
 * Track when a user clicks to view an ephemeral PDF preview modal
 */
export function trackPdfPreviewClicked(paper: {
  title: string;
  subjectName: string;
  year: number;
  variant: string;
}): void {
  trackEvent('pdf_preview_clicked', {
    subject: paper.subjectName,
    year: paper.year,
    paper: paper.title,
    variant: paper.variant,
  });
}

/**
 * Track when a user clicks the download action
 * (Accurately documented as a click action, not confirmed file delivery)
 */
export function trackPdfDownloadClicked(paper: {
  title: string;
  subjectName: string;
  year: number;
  variant: string;
}): void {
  trackEvent('pdf_download_clicked', {
    subject: paper.subjectName,
    year: paper.year,
    paper: paper.title,
    variant: paper.variant,
  });
}

/**
 * Track when a user clicks to explore the GitHub contribution way
 */
export function trackGithubContributionClicked(): void {
  trackEvent('github_contribution_clicked', {
    target: 'repository',
  });
}

/**
 * Track when a user clicks to launch their email client for email contribution
 */
export function trackEmailContributionClicked(): void {
  trackEvent('email_contribution_clicked', {
    destination: 'mailto',
  });
}