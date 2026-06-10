import { SEO } from "@/components/seo/SEO";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { breadcrumbSchema, webPageSchema } from "@/lib/schemas";

const pageLinks = [
  { name: "Home", href: "/" },
  { name: "Managed WordPress Hosting", href: "/managed-wordpress-hosting" },
  { name: "Fully Managed WordPress Hosting", href: "/fully-managed-wordpress-hosting" },
  { name: "Managed WordPress Hosting Cost UK", href: "/managed-wordpress-hosting-cost-uk-2026" },
  { name: "What Is Managed WordPress Hosting?", href: "/what-is-managed-wordpress-hosting" },
  { name: "What's Included in Managed WordPress Hosting", href: "/whats-included-managed-wordpress-hosting" },
  { name: "Managed Hosting vs Shared Hosting", href: "/managed-wordpress-hosting-vs-shared-hosting" },
  { name: "Is Managed Hosting Worth It for Small Businesses?", href: "/managed-hosting-small-businesses" },
  { name: "New Website", href: "/new-website" },
  { name: "Existing Website Improvements", href: "/existing-website" },
  { name: "Website Support", href: "/website-support" },
  { name: "Websites for Consultants", href: "/websites-for-consultants" },
  { name: "Websites for Legal Consultants", href: "/websites-for-legal-consultants" },
  { name: "Websites for Business Consultants", href: "/websites-for-business-consultants" },
  { name: "Websites for Marketing Consultants", href: "/websites-for-marketing-consultants" },
  { name: "WordPress Help & Guides", href: "/wordpress-help" },
  { name: "Fix a Slow WordPress Site", href: "/wordpress-help/wordpress-slow" },
  { name: "WordPress Update Issues", href: "/wordpress-help/wordpress-update-issues" },
  { name: "Secure a WordPress Website", href: "/wordpress-help/wordpress-security" },
  { name: "Why WordPress Websites Get Hacked", href: "/wordpress-help/wordpress-hacked" },
  { name: "WordPress Maintenance Checklist", href: "/wordpress-help/wordpress-maintenance" },
  { name: "WordPress Maintenance Cost UK", href: "/wordpress-maintenance-cost-uk" },
  { name: "WordPress Care Plan", href: "/wordpress-care-plan" },
  { name: "WordPress Migration to Managed Hosting", href: "/wordpress-migration-to-managed-hosting" },
  { name: "Common WordPress Errors", href: "/common-wordpress-errors" },
  { name: "Instant Site Quote", href: "/instant-site-quote" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  // Location pages
  { name: "WordPress Hosting Oswestry", href: "/wordpress-hosting-oswestry" },
  { name: "WordPress Hosting St. Martins", href: "/wordpress-hosting-st-martins" },
  { name: "WordPress Hosting Chirk", href: "/wordpress-hosting-chirk" },
  { name: "WordPress Hosting Gobowen", href: "/wordpress-hosting-gobowen" },
  { name: "WordPress Hosting Shrewsbury", href: "/wordpress-hosting-shrewsbury" },
  { name: "WordPress Hosting Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "WordPress Hosting Ruabon", href: "/wordpress-hosting-ruabon" },
  { name: "WordPress Hosting Ellesmere", href: "/wordpress-hosting-ellesmere" },
  { name: "WordPress Hosting Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "WordPress Hosting Whitchurch", href: "/wordpress-hosting-whitchurch" },
  { name: "WordPress Hosting Welshpool", href: "/wordpress-hosting-welshpool" },
  // Trades & Construction
  { name: "Websites for Builders", href: "/websites-for-builders" },
  { name: "Websites for Electricians", href: "/websites-for-electricians" },
  { name: "Websites for Plumbers", href: "/websites-for-plumbers" },
  { name: "Websites for Decorators", href: "/websites-for-decorators" },
  { name: "Websites for Joiners", href: "/websites-for-joiners" },
  { name: "Websites for Scaffolders", href: "/websites-for-scaffolders" },
  { name: "Websites for Roofers", href: "/websites-for-roofers" },
  { name: "Websites for Air Conditioning Fitters", href: "/websites-for-air-conditioning-fitters" },
  { name: "Websites for Solar Panel Fitters", href: "/websites-for-solar-panel-fitters" },
  { name: "Websites for Pressure Washers", href: "/websites-for-pressure-washers" },
  { name: "Websites for Gardeners", href: "/websites-for-gardeners" },
  { name: "Websites for Landscapers", href: "/websites-for-landscapers" },
  { name: "Websites for Cleaners", href: "/websites-for-cleaners" },
  // Professional Services
  { name: "Websites for Lawyers", href: "/websites-for-lawyers" },
  { name: "Websites for Finance Advisors", href: "/websites-for-finance-advisors" },
  { name: "Websites for Estate Agents", href: "/websites-for-estate-agents" },
  // Beauty & Personal Care
  { name: "Websites for Hairdressers", href: "/websites-for-hairdressers" },
  { name: "Websites for Facial Aesthetics", href: "/websites-for-facial-aesthetics" },
  { name: "Websites for Tanning Studios", href: "/websites-for-tanning-studios" },
  { name: "Websites for Nail Studios", href: "/websites-for-nail-studios" },
  { name: "Websites for Tattoo Studios", href: "/websites-for-tattoo-studios" },
  // Food & Drink
  { name: "Websites for Restaurants", href: "/websites-for-restaurants" },
  { name: "Websites for Takeaways", href: "/websites-for-takeaways" },
  { name: "Websites for Coffee Shops", href: "/websites-for-coffee-shops" },
  { name: "Websites for Cafes", href: "/websites-for-cafes" },
  { name: "Websites for Butchers", href: "/websites-for-butchers" },
  // Retail & Home
  { name: "Websites for Retail Shops", href: "/websites-for-retail-shops" },
  { name: "Websites for Jewellers", href: "/websites-for-jewellers" },
  { name: "Websites for Manufacturers", href: "/websites-for-manufacturers" },
  { name: "Websites for Property Developers", href: "/websites-for-developers" },
  // Community & Education
  { name: "Websites for Charities", href: "/websites-for-charities" },
  { name: "Websites for Schools", href: "/websites-for-schools" },
  { name: "Websites for Tutors", href: "/websites-for-tutors" },
  { name: "Websites for Nursing Homes", href: "/websites-for-nursing-homes" },
  { name: "Websites for Local Groups", href: "/websites-for-local-groups" },
  // Business & Tech
  { name: "Websites for SMEs", href: "/websites-for-smes" },
  { name: "Websites for Medium Businesses", href: "/websites-for-medium-businesses" },
  { name: "Sitemap", href: "/sitemap" },
];

const blogLinks = [
  { name: "Why Your WordPress Website Keeps Breaking", href: "/blog/why-your-wordpress-website-keeps-breaking" },
  { name: "Managed WordPress Hosting Shropshire & Wrexham", href: "/blog/managed-wordpress-hosting-shropshire-wrexham-local-support-2026" },
  { name: "Managed WordPress Hosting Small Business 2026", href: "/blog/managed-wordpress-hosting-small-business-2026" },
  { name: "Magento to Shopify Migration 2025", href: "/blog/magento-to-shopify-migration-2025" },
  { name: "Web Design Services in Shropshire & Chester", href: "/blog/web-design-shropshire-chester" },
  { name: "DIY Websites vs Professional in 2025", href: "/blog/diy-websites-vs-professional-in-2025" },
  { name: "Website Redesign UK", href: "/blog/website-redesign-uk" },
  { name: "How Much Does a WordPress Website Cost in 2025?", href: "/blog/how-much-does-a-wordpress-website-cost-in-2025" },
  { name: "Why Managed WordPress Hosting is Essential", href: "/blog/why-managed-wordpress-hosting" },
  { name: "5 Signs Your Website Needs a Rebuild", href: "/blog/5-signs-your-website-needs-a-rebuild" },
  { name: "Core Web Vitals: Speed & Conversion", href: "/blog/core-web-vitals-speed-conversion" },
  { name: "Local SEO for Shropshire Businesses", href: "/blog/local-seo-shropshire-businesses" },
  { name: "WordPress Security Essentials", href: "/blog/wordpress-security-essentials" },
];

export default function SitemapPage() {
  return (
    <>
      <SEO
        noindex
        title="Sitemap | UX Sites"
        description="Complete sitemap for UX Sites  -  find all pages, blog posts, and guides about managed WordPress hosting, web design, and website support."
        url="https://uxsites.co.uk/sitemap/"
        schema={[
          webPageSchema({ name: "Sitemap", description: "Complete sitemap for UX Sites  -  find all pages, blog posts, and guides.", url: "https://uxsites.co.uk/sitemap/" }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Sitemap", url: "https://uxsites.co.uk/sitemap/" },
          ]),
        ]}
      />
      <main>
        <section className="pt-32 pb-20 md:pt-44">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Sitemap</h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold mb-6">Pages</h2>
                <ul className="space-y-2">
                  {pageLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-6">Blog Posts</h2>
                <ul className="space-y-2">
                  {blogLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
