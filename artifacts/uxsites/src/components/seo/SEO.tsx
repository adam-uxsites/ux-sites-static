import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  schema?: object | object[];
  noindex?: boolean;
}

const MAX_TITLE_LENGTH = 55;

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  // Try to cut at a natural boundary (space, punctuation)
  const truncated = str.slice(0, max);
  const lastSpace = truncated.lastIndexOf(" ");
  const breakAt = lastSpace > max * 0.8 ? lastSpace : max;
  return str.slice(0, breakAt).replace(/[\s,;-]+$/, "") + "…";
}

export function SEO({
  title = "UX Sites | Managed WordPress Hosting Shropshire",
  description = "Managed WordPress hosting and website support for UK businesses from £50/month. Based in St. Martins, Oswestry, Shropshire, serving businesses nationwide.",
  url = "https://uxsites.co.uk",
  ogImage = "/og-image.png",
  schema,
  noindex = false,
}: SEOProps) {
  const truncatedTitle = truncate(title, MAX_TITLE_LENGTH);
  const schemas = schema
    ? Array.isArray(schema) ? schema : [schema]
    : [];

  return (
    <Helmet>
      <title>{truncatedTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={truncatedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="UX Sites" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={truncatedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
