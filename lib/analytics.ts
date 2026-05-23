declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = "G-2GD9EHCEZM";

const isDev = process.env.NODE_ENV === "development";

function log(eventName: string, params?: Record<string, unknown>) {
  if (isDev) {
    console.log("[GA EVENT]", eventName, params ?? "");
  }
}

function send(command: string, ...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag(command, ...args);
}

export function pageview(path: string) {
  log("pageview", { path });
  send("config", GA_MEASUREMENT_ID, { page_path: path });
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;
  log(eventName, params);
  send("event", eventName, params);
}

export function trackCTA(label: string, location: string) {
  trackEvent("cta_click", {
    cta_name: label,
    location,
    page: "home",
  });
}

export function trackNavigation(label: string) {
  trackEvent("nav_click", {
    nav_item: label,
    location: "header",
  });
}

export function trackSectionView(sectionName: string) {
  trackEvent("section_view", {
    section_name: sectionName,
    page: "home",
  });
}
