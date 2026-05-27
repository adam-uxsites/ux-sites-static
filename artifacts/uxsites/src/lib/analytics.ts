declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTAG_ID = "AW-18192197831";
const CONSENT_KEY = "uxsites-cookie-consent";

export type ConsentChoice = "accepted" | "rejected" | null;

export function getConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentChoice;
}

export function setConsent(choice: "accepted" | "rejected"): void {
  localStorage.setItem(CONSENT_KEY, choice);
}

export function loadGtag(): void {
  if (typeof window === "undefined") return;
  if (window.dataLayer) return;

  const s = document.createElement("script");
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  s.async = true;
  document.head.appendChild(s);

  window.dataLayer = [];
  window.gtag = function (...args: unknown[]) { window.dataLayer!.push(args); };
  window.gtag("js", new Date());
  window.gtag("config", GTAG_ID);
}
