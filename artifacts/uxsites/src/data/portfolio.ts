export type ServiceType = "Managed Hosting" | "New Build" | "Redesign" | "Hosting + Support";

export interface PortfolioItem {
  id: string;
  name: string;
  domain: string;
  url?: string;
  industry: string;
  service: ServiceType;
  description: string;
  screenshot?: string;
  accentColor?: string;
  featured?: boolean;
  caseStudySlug?: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "kingman-law",
    name: "Kingman Law",
    domain: "kingman-law.co.uk",
    url: "https://kingman-law.co.uk",
    industry: "Legal Services",
    service: "New Build",
    description: "Professional legal services website for a property law and conveyancing firm covering Devon and Somerset.",
    screenshot: "/kingman-law.webp",
    accentColor: "#2563eb",
    featured: true,
    caseStudySlug: "kingman-property-law",
  },
  {
    id: "conveyancing-fairy",
    name: "Conveyancing Fairy",
    domain: "conveyancingfairy.co.uk",
    url: "https://conveyancingfairy.co.uk",
    industry: "Legal Services",
    service: "New Build",
    description: "Clean, conversion-focused website for a specialist residential conveyancing service, built to generate enquiries.",
    screenshot: "/conveyancing-fairy.webp",
    accentColor: "#7c3aed",
    featured: true,
    caseStudySlug: "conveyancing-fairy",
  },
  {
    id: "rhind-speech-therapy",
    name: "Rhind Speech Therapy",
    domain: "rhindspeechtherapy.co.uk",
    url: "https://rhindspeechtherapy.co.uk",
    industry: "Healthcare",
    service: "Managed Hosting",
    description: "Managed WordPress hosting for a PROMPT-certified speech and language therapist with clinics in Shrewsbury and London.",
    screenshot: "/rhind-speech-therapy.webp",
    accentColor: "#0ea5e9",
    featured: true,
    caseStudySlug: "rhind-speech-therapy",
  },
];

export const FEATURED_PORTFOLIO = PORTFOLIO.filter(p => p.featured);
