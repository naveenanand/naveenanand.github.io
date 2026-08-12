/**
 * Privacy-conscious analytics abstraction.
 *
 * Provider is replaceable: set NEXT_PUBLIC_ANALYTICS_PROVIDER at build time.
 *   - "none" (default): no-op, nothing loads, nothing is sent.
 *   - "plausible": expects the Plausible script to be added in layout.tsx;
 *     events are forwarded to window.plausible when present.
 *
 * Tracked events (page views come from the provider itself):
 *   resume_click, linkedin_click, contact_click, project_view
 */

type EventName =
  | "resume_click"
  | "linkedin_click"
  | "contact_click"
  | "project_view";

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  }
}

const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "none";

export function track(event: EventName, props?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  if (provider === "plausible" && typeof window.plausible === "function") {
    window.plausible(event, props ? { props } : undefined);
  }
  // "none": deliberately silent.
}
