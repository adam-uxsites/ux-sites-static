import { Link, useLocation } from "wouter";

const labelMap: Record<string, string> = {
  "/": "Home",
  "/managed-wordpress-hosting": "Managed WordPress Hosting",
  "/website-support": "Website Support",
  "/new-website": "New Website",
  "/existing-website": "Existing Website Improvements",
  "/contact": "Contact",
  "/blog": "Blog & Insights",
  "/fully-managed-wordpress-hosting": "Fully Managed WordPress Hosting",
  "/managed-wordpress-hosting-cost-uk-2026": "Managed Hosting Cost UK",
  "/what-is-managed-wordpress-hosting": "What Is Managed WordPress Hosting?",
  "/whats-included-managed-wordpress-hosting": "What's Included",
  "/managed-wordpress-hosting-vs-shared-hosting": "Managed vs Shared Hosting",
  "/managed-hosting-small-businesses": "Managed Hosting for Small Businesses",
  "/wordpress-maintenance-cost-uk-2026": "WordPress Maintenance Cost UK",
  "/wordpress-care-plan": "WordPress Care Plan",
  "/wordpress-migration": "WordPress Migration",
  "/common-wordpress-errors": "Common WordPress Errors",
  "/small-business-websites": "Small Business Websites",
  "/wordpress-help": "WordPress Help & Guides",
  "/work": "Our Work",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
  "/sitemap": "Sitemap",
  "/downtime-calculator": "Downtime Calculator",
};

export function Breadcrumbs() {
  const [location] = useLocation();

  if (location === "/") return null;

  const segments = location.split("/").filter(Boolean);
  const crumbs: { name: string; path: string }[] = [{ name: "Home", path: "/" }];
  let acc = "";

  for (const seg of segments) {
    acc += "/" + seg;
    const name = labelMap[acc] || seg
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name, path: acc });
  }

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 max-w-5xl pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {i > 0 && <span className="opacity-30 select-none">/</span>}
              {isLast ? (
                <span className="text-foreground font-medium" itemProp="name">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="hover:text-foreground transition-colors" itemProp="item">
                  <span itemProp="name">{crumb.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
