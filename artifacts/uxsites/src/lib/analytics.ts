declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "uxsites-cookie-consent";

export type ConsentChoice = "accepted" | "rejected" | null;

export function getConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentChoice;
}

export function setConsent(choice: "accepted" | "rejected"): void {
  localStorage.setItem(CONSENT_KEY, choice);
}

const GTAG_ID = "AW-18192197831";

export function loadGtag(): void {
  if (typeof window === "undefined") return;
  const s = document.createElement("script");
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  s.async = true;
  document.head.appendChild(s);
  window.gtag?.("js", new Date());
  window.gtag?.("config", GTAG_ID);
}

export { GTAG_ID };
