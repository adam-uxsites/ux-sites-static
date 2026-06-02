export interface CaseStudy {
  slug: string;
  portfolioId: string;
  client: string;
  tagline: string;
  industry: string;
  service: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  testimony?: { quote: string; author: string; role: string };
  screenshot: string;
  liveUrl: string;
  accentColor: string;
  techStack: string[];
  duration: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "kingman-property-law",
    portfolioId: "kingman-law",
    client: "Kingman Property Law",
    tagline: "Building a conveyancing practice from the ground up",
    industry: "Legal Services",
    service: "New Build",
    overview:
      "Terese Kingman was setting up as a Nexa Law consultant and needed everything — a professional website, brand identity, social media presence, and analytics infrastructure. We built the complete digital foundation for her new conveyancing practice covering Devon, Somerset, and the wider South West.",
    challenge:
      "Starting a law consultancy from scratch means there is no existing brand, no online presence, and no client base to draw from. Terese needed a website that would establish immediate credibility with potential clients, rank for local conveyancing searches, and generate enquiries from day one. Beyond the site itself, she needed a cohesive visual identity, Google My Business setup, social media profiles, and analytics tracking — all coordinated before launch.",
    solution:
      "We began with logo design and brand direction, then built a clean, trust-focused WordPress site with clear service pages for each conveyancing area. Local landing pages were created for North Devon, Somerset, and Mid Devon to capture geographic search traffic. Google My Business was set up and optimised, GA4 and Microsoft Clarity were installed for analytics, and social media profiles were created with branded graphics. The site was launched on our managed WordPress hosting with daily backups, security monitoring, and ongoing support.",
    deliverables: [
      "Logo design and brand identity",
      "Full WordPress website build",
      "Local landing pages for North Devon, Somerset, and Mid Devon",
      "Social media page graphics and setup (Facebook, LinkedIn)",
      "Google My Business setup and optimisation",
      "Google Analytics 4 and Microsoft Clarity setup",
      "Ongoing managed WordPress hosting",
      "SSL certificate and security hardening",
    ],
    screenshot: "/kingman-law.png",
    liveUrl: "https://kingman-law.co.uk",
    accentColor: "#2563eb",
    techStack: ["WordPress", "Custom Theme", "Managed Hosting", "GA4", "Clarity", "Google My Business"],
    duration: "3 weeks",
  },
  {
    slug: "conveyancing-fairy",
    portfolioId: "conveyancing-fairy",
    client: "Conveyancing Fairy",
    tagline: "A complete rebuild after a frustrating first attempt",
    industry: "Legal Services",
    service: "New Build",
    overview:
      "Zahrah had already paid someone else to build a website for her conveyancing business, but the result was not what she needed. We started fresh and built a website that truly represented her brand, showcased her expertise, and gave clients access to the guides, videos, and resources that set her service apart.",
    challenge:
      "The previous website was built on a platform that made it difficult to update content, didn't reflect Zahrah's personality or client-focused approach, and lacked the content architecture needed to present her extensive library of guides, podcasts, and resources. Zahrah needed a site that was easy to manage herself, looked professional and trustworthy, and made it simple for potential clients to understand her services and get in touch.",
    solution:
      "We created a brand new WordPress site using Zahrah's existing branding and logo, but rebuilt everything else from scratch. The site architecture was designed around her key content types — services, podcasts, downloads, resources, and testimonials — with clear navigation and strong calls to action throughout. Each service area has detailed information, and the resources section gives clients access to helpful guides and videos. The site is built on a custom WordPress theme that Zahrah can update easily, hosted on our managed platform with full security and backup coverage.",
    deliverables: [
      "Full WordPress website rebuild from scratch",
      "Content architecture for services, guides, videos, and resources",
      "Podcast integration and episode library",
      "Downloadable resource centre",
      "Testimonials section with client reviews",
      "Conversion-optimised contact flows",
      "Managed WordPress hosting with daily backups",
      "Ongoing security monitoring and updates",
    ],
    testimony: {
      quote:
        "Adam did a fantastic job upgrading an existing site  -  I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues.",
      author: "Zahrah Aullybocus",
      role: "Solicitor & Founder, Conveyancing Fairy",
    },
    screenshot: "/conveyancing-fairy.png",
    liveUrl: "https://conveyancingfairy.co.uk",
    accentColor: "#7c3aed",
    techStack: ["WordPress", "Custom Theme", "Managed Hosting", "Podcast Integration", "Resource Library"],
    duration: "4 weeks",
  },
  {
    slug: "rhind-speech-therapy",
    portfolioId: "rhind-speech-therapy",
    client: "Rhind Speech Therapy",
    tagline: "Securing and improving an established therapy practice website",
    industry: "Healthcare",
    service: "Managed Hosting",
    overview:
      "Justine Rhind runs a well-established speech therapy practice with clinics in Shrewsbury and London. Her existing website had been built years ago and was in need of attention — outdated plugins, security concerns, and performance issues. We migrated the site to our managed hosting and are now steadily improving it month by month.",
    challenge:
      "The existing website was running on an older theme and plugin set that had fallen out of date. There were security vulnerabilities from outdated plugins, the site was slower than it should be, and the content — while comprehensive — needed reorganising to better serve parents looking for therapy support. Justine needed the site secured urgently, then wanted a gradual improvement plan rather than a disruptive full rebuild.",
    solution:
      "We migrated the site to our managed hosting platform as part of our free migration process. During the migration, we updated all plugins to secure versions, replaced unsupported plugins where necessary, and hardened the site's security. Performance was improved through caching and image optimisation. Now, as part of her managed hosting plan, Justine uses her 30 minutes of monthly development time to steadily improve the site — updating content, refining pages, and gradually making the site perform better for both parents and search engines.",
    deliverables: [
      "Free site migration to managed WordPress hosting",
      "Plugin security audit and updates",
      "Replacement of unsupported or vulnerable plugins",
      "Security hardening and malware scanning",
      "Performance optimisation (caching, image optimisation)",
      "SSL certificate management",
      "Monthly development time for gradual improvements",
      "Ongoing daily backups and uptime monitoring",
    ],
    screenshot: "/rhind-speech-therapy.png",
    liveUrl: "https://rhindspeechtherapy.co.uk",
    accentColor: "#0ea5e9",
    techStack: ["WordPress", "Managed Hosting", "Security Hardening", "Performance Optimisation"],
    duration: "Ongoing — monthly improvements",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find(cs => cs.slug === slug) ?? null;
}

export function getRelatedCaseStudies(slug: string, count = 2) {
  return CASE_STUDIES.filter(cs => cs.slug !== slug).slice(0, count);
}
