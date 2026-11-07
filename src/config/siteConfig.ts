/**
 * Centralized Site & GitHub Configuration — PYQ Vault
 *
 * Official Repository: https://github.com/drash-anchan/pyq_clutch
 * Maintained by: drash-anchan
 */

export const siteConfig = {
  name: "PYQ Vault",
  githubProfileUrl: "https://github.com/drash-anchan",
  githubRepositoryUrl: "https://github.com/drash-anchan/pyq_clutch",
  githubRepoUrl: "https://github.com/drash-anchan/pyq_clutch",
  githubForkUrl: "https://github.com/drash-anchan/pyq_clutch/fork",
  githubPullRequestsUrl: "https://github.com/drash-anchan/pyq_clutch/pulls",
  githubIssuesUrl: "https://github.com/drash-anchan/pyq_clutch/issues",
  contributionEmail: "hasraadknowsyou@gmail.com",
  contributionMailto:
    "mailto:hasraadknowsyou@gmail.com?subject=PYQ%20Contribution&body=Hi%2C%0A%0AI%20would%20like%20to%20contribute%20previous%20year%20question%20papers.%0A%0ASubject%3A%0AExamination%20Year%3A%0APaper%20Variant%3A%0A%0AI%20have%20attached%20the%20PDF%20file.%0A%0AThank%20you.",
  
  // PostHog Silent Background Tracking (Free Tier: 1M events/month)
  posthogKey: (import.meta.env.VITE_POSTHOG_KEY as string) || "",
  posthogHost: (import.meta.env.VITE_POSTHOG_HOST as string) || "https://eu.i.posthog.com",
};

// Aliased export for backwards-compatibility
export const SITE_CONFIG = siteConfig;

/**
 * Returns the active GitHub Repository URL.
 */
export function getActiveGithubUrl(): string {
  return siteConfig.githubRepositoryUrl;
}

/**
 * Returns whether Umami tracking is active.
 */
export function isPosthogConfigured(): boolean {
  return Boolean(siteConfig.posthogKey && siteConfig.posthogKey.trim().length > 0);
}

export const isUmamiConfigured = isPosthogConfigured;
