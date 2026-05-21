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
    id: "shropshire-accountants",
    name: "Shropshire Accountants",
    domain: "shropshireaccountants.co.uk",
    industry: "Professional Services",
    service: "New Build",
    description: "Custom WordPress site designed to generate enquiries and position the firm as the go-to accountancy practice across Shropshire.",
    accentColor: "#2563eb",
    featured: true,
  },
  {
    id: "telford-plumbing",
    name: "Telford Plumbing & Heating",
    domain: "telfordplumbingandheating.co.uk",
    industry: "Trades",
    service: "Managed Hosting",
    description: "Fully managed hosting for a busy local plumber. Zero downtime, daily backups, and fast page speeds — letting them focus on the jobs, not the website.",
    accentColor: "#0891b2",
    featured: true,
  },
  {
    id: "shrewsbury-salon",
    name: "The Shrewsbury Salon",
    domain: "shrewsburysalon.co.uk",
    industry: "Beauty & Wellness",
    service: "Redesign",
    description: "Complete visual overhaul and mobile-first rebuild for an established hair salon. Bounce rate dropped significantly after launch.",
    accentColor: "#db2777",
    featured: true,
  },
  {
    id: "oswestry-dental",
    name: "Oswestry Dental Practice",
    domain: "oswestrydental.co.uk",
    industry: "Healthcare",
    service: "Hosting + Support",
    description: "Managed hosting and ongoing maintenance for a busy dental practice. Regular updates handled, patient-facing content kept current.",
    accentColor: "#059669",
    featured: false,
  },
  {
    id: "shropshire-landscaping",
    name: "Shropshire Landscaping Co.",
    domain: "shropshirelandscaping.co.uk",
    industry: "Garden & Landscape",
    service: "New Build",
    description: "Portfolio-led website built to showcase garden design projects and convert enquiries from high-intent local searchers.",
    accentColor: "#65a30d",
    featured: false,
  },
  {
    id: "bridgnorth-cafe",
    name: "The Old Bridge Café",
    domain: "theoldbridgecafe.co.uk",
    industry: "Hospitality",
    service: "Managed Hosting",
    description: "Fast, reliable hosting for a popular Bridgnorth café. Menu and events kept live and loading instantly on mobile.",
    accentColor: "#d97706",
    featured: false,
  },
];

export const FEATURED_PORTFOLIO = PORTFOLIO.filter(p => p.featured);
