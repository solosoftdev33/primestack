export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

// ─── Type Augmentation ─────────────────────────────────────────────────────────

interface GtagEventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// ─── Google Analytics Helpers ──────────────────────────────────────────────────

/**
 * Send a custom event to Google Analytics.
 */
export function gtagEvent({ action, category, label, value }: GtagEventParams): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

/**
 * Track a pageview in Google Analytics.
 */
export function pageview(url: string): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}
