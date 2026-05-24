const SITE_URL = "https://uxsites.co.uk";
const BRAND_NAME = "UX Sites";

const provider = {
  "@type": "LocalBusiness",
  name: BRAND_NAME,
  url: SITE_URL,
};

const areaServed = [
  { "@type": "City", name: "Shrewsbury" },
  { "@type": "City", name: "Oswestry" },
  { "@type": "City", name: "Wrexham" },
  { "@type": "AdministrativeArea", name: "Shropshire" },
  { "@type": "Country", name: "United Kingdom" },
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: BRAND_NAME,
    url: SITE_URL,
    description:
      "Managed WordPress hosting, web design, and ongoing support for small and medium businesses in Shropshire and across the UK. Google UX Certified. 10+ years experience.",
    email: "hello@uxsites.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Martins",
      addressRegion: "Shropshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.9167,
      longitude: -3.0167,
    },
    areaServed,
    knowsAbout: [
      "WordPress",
      "Web Design",
      "Managed Hosting",
      "Search Engine Optimisation",
      "Website Security",
      "UX Design",
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Bank Transfer, Credit Card",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design & Managed Hosting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed WordPress Hosting",
            url: `${SITE_URL}/managed-wordpress-hosting`,
          },
          price: "50",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "50",
            priceCurrency: "GBP",
            unitText: "month",
          },
        },
      ],
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND_NAME,
    url: SITE_URL,
    description:
      "Managed WordPress hosting and web design for businesses in Shropshire and across the UK.",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: "en-GB",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.png`,
    },
    email: "hello@uxsites.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Martins",
      addressRegion: "Shropshire",
      addressCountry: "GB",
    },
    areaServed,
  };
}

export function serviceSchema({
  name,
  description,
  url,
  category,
  price,
  priceCurrency = "GBP",
  priceUnit,
}: {
  name: string;
  description: string;
  url: string;
  category?: string;
  price?: string;
  priceCurrency?: string;
  priceUnit?: string;
}) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider,
    areaServed,
    inLanguage: "en-GB",
  };

  if (category) base.serviceType = category;

  if (price) {
    base.offers = {
      "@type": "Offer",
      price,
      priceCurrency,
      ...(priceUnit
        ? {
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price,
              priceCurrency,
              unitText: priceUnit,
            },
          }
        : {}),
    };
  }

  return base;
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Adam",
  category,
  image,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  category?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-GB",
    ...(image ? { image: { "@type": "ImageObject", url: image } } : {}),
    author: {
      "@type": "Person",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
    },
    ...(category ? { articleSection: category } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Adam",
    jobTitle: "Owner & Web Designer",
    url: SITE_URL,
    email: "hello@uxsites.co.uk",
    knowsAbout: [
      "WordPress",
      "Web Design",
      "Managed Hosting",
      "Search Engine Optimisation",
      "User Experience Design",
      "Website Security",
      "Google Analytics",
    ],
    sameAs: [
      "https://uxsites.co.uk",
    ],
  };
}

export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog`,
    name: "Blog & Insights | UX Sites Shropshire",
    description:
      "Expert insights on WordPress hosting, web design, SEO, and digital strategy for small and medium businesses in Shropshire and across the UK.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-GB",
  };
}

export function webPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: "en-GB",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };
}
