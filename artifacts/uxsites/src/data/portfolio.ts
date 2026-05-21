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
    screenshot: "https://uxsites.co.uk/wp-content/uploads/2026/02/Screenshot-2026-02-10-at-10-57-09-Kingman-Property-Law-Conveyancing-Devon-Somerset-scaled.png",
    accentColor: "#2563eb",
    featured: true,
  },
  {
    id: "conveyancing-fairy",
    name: "Conveyancing Fairy",
    domain: "conveyancingfairy.co.uk",
    url: "https://conveyancingfairy.co.uk",
    industry: "Legal Services",
    service: "New Build",
    description: "Clean, conversion-focused website for a specialist residential conveyancing service, built to generate enquiries.",
    screenshot: "https://uxsites.co.uk/wp-content/uploads/2026/02/Screenshot-2026-02-10-at-10-56-58-Expert-Conveyancing-Services-Conveyancing-Fairy-scaled.png",
    accentColor: "#7c3aed",
    featured: true,
  },
];

export const FEATURED_PORTFOLIO = PORTFOLIO.filter(p => p.featured);
