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

export function SEO({
  title = "UX Sites | Managed WordPress Hosting Shropshire",
  description = "Managed WordPress hosting and website support for UK businesses from £50/month. Based in St. Martins, Oswestry, Shropshire, serving businesses nationwide.",
  url = "https://uxsites.co.uk",
  ogImage = "/og-image.png",
  schema,
  noindex = false,
}: SEOProps) {
  const schemas = schema
    ? Array.isArray(schema) ? schema : [schema]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="UX Sites" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
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
