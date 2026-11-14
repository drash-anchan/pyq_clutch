/**
 * Smart Resource & PDF Prefetcher — PYQ Vault
 *
 * Speculatively pre-caches question paper PDFs into the browser's HTTP cache
 * during hover / touch intent so opening a paper feels instantaneous (0ms latency).
 */

const prefetchedUrls = new Set<string>();

/**
 * Speculatively fetches a question paper PDF at low network priority.
 * Fails silently without blocking the UI or throwing errors.
 */
export function prefetchPaperPdf(url?: string): void {
  if (!url || typeof window === 'undefined') return;
  if (prefetchedUrls.has(url)) return;

  prefetchedUrls.add(url);

  try {
    if ('fetch' in window) {
      const fetchOpts: RequestInit & { priority?: string } = {
        method: 'GET',
        priority: 'low',
        cache: 'force-cache',
      };

      fetch(url, fetchOpts as RequestInit).catch(() => {
        // Silently ignore aborted or restricted requests
      });
      return;
    }

    // Fallback: standard link prefetch element
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'fetch';
    document.head.appendChild(link);
  } catch {
    // Non-blocking fallback
  }
}
