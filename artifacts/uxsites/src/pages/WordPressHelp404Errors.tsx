import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileText, ExternalLink, Globe, Wrench, Database, Search, CheckCircle, ArrowRight } from "lucide-react";

const commonCauses = [
  {
    icon: FileText,
    title: "Deleted or Moved Pages",
    desc: "Removing or renaming a page without a redirect leaves visitors and search engines hitting a dead end. Every old URL then returns a 404."
  },
  {
    icon: ExternalLink,
    title: "Broken Internal Links",
    desc: "Typo'd URLs, changed slugs and content edited by hand create links that point nowhere. They frustrate visitors and waste Google's crawl budget."
  },
  {
    icon: Globe,
    title: "Permalink Structure Changes",
    desc: "Switching your permalink settings (for example from plain to postname) changes every URL on the site -  so all your old links 404 until redirects are in place."
  },
  {
    icon: Wrench,
    title: "Plugin or Theme Conflicts",
    desc: "A caching plugin serving stale pages, a security plugin blocking requests, or a recent update can produce 404s on pages that still exist."
  },
  {
    icon: Database,
    title: "Missing Rewrite Rules",
    desc: "WordPress depends on rewrite rules in .htaccess (Apache) or nginx config. If these are lost or corrupted, URLs quietly start returning 404."
  },
  {
    icon: Search,
    title: "Search Engine Index Issues",
    desc: "Google may still show old URLs that no longer exist. Proper redirects and a fresh sitemap tell search engines where the pages went."
  },
];

const fixSteps = [
  {
    step: "1",
    title: "Identify the 404 URLs",
    desc: "Use Google Search Console's coverage report, an online crawler or a tool like the Redirection plugin to see exactly which URLs return 404. Focus on broken internal links rather than random page-not-found errors."
  },
  {
    step: "2",
    title: "Re-Save Your Permalink Settings",
    desc: "Go to Settings > Permalinks and simply click Save. This flushes WordPress's rewrite rules and fixes the common situation where every link on the site 404s at once."
  },
  {
    step: "3",
    title: "Check Your .htaccess File",
    desc: "Make sure .htaccess contains the standard WordPress rewrite block. If it's missing or corrupted, regenerate it from a fresh WordPress install or restore it from a backup."
  },
  {
    step: "4",
    title: "Restore Missing Pages or Set Up Redirects",
    desc: "If a page now lives at a different URL, set up a 301 redirect from the old address using a plugin like Redirection. 301s tell browsers and search engines the page moved permanently -  preserving your rankings."
  },
  {
    step: "5",
    title: "Fix Internal Links",
    desc: "Update any links pointing at old URLs throughout your site -  menus, content, calls to action and footer. A broken link checker plugin finds them for you in minutes."
  },
  {
    step: "6",
    title: "Create a Useful Custom 404 Page",
    desc: "Turn the dead-end into a recovery point. A well-designed 404 page with search, popular pages and a homepage link keeps visitors on your site instead of bouncing."
  },
  {
    step: "7",
    title: "Submit a Fresh Sitemap",
    desc: "Regenerate and resubmit your sitemap in Google Search Console so search engines re-crawl your site, drop dead URLs and follow your redirects."
  },
];

const seoPoints = [
  "Broken internal links waste Google's crawl budget on dead URLs",
  "A 404 on a removed page is normal -  a 404 on a live page is a fault",
  "301 redirects pass most of an old page's ranking strength to the new URL",
  "Soft 404s (pages returning a 200 with no real content) confuse search engines",
  "Regular broken-link checks stop small problems becoming ranking problems"
];

const notFoundFaqs = [
  {
    question: "Why is my entire WordPress site showing 404 errors?",
    answer: "Usually your permalink settings got reset or your rewrite rules were lost -  often after a migration or update. Re-saving Settings > Permalinks usually restores everything in seconds."
  },
  {
    question: "Do 404 errors hurt my SEO?",
    answer: "A genuine 404 for a removed page is fine. The problem is broken internal links and soft 404s, which waste crawl budget and dilute signals. Fix internal links and 301 redirect any pages that still have traffic or backlinks."
  },
  {
    question: "Should I redirect 404 pages or leave them?",
    answer: "Redirect if the page has search traffic, backlinks or value -  a 301 passes most of its ranking strength to the new URL. For pages with no value, leave a proper 404 rather than redirecting everything to the homepage."
  },
  {
    question: "How do I set up a 301 redirect in WordPress?",
    answer: "The simplest way is the free Redirection plugin -  it logs 404s, lets you add redirects in minutes and supports regex rules. You can also edit .htaccess directly, but the plugin is far safer for non-developers."
  },
  {
    question: "Why did all my permalinks break after a WordPress update?",
    answer: "Updates and plugin changes can overwrite .htaccess or reset the rewrite rules. Re-save your permalinks to regenerate them, then confirm .htaccess contains the standard WordPress block. Restoring a backup sorts it if nothing else works."
  },
];

export default function WordPressHelp404Errors() {
  return (
    <>
      <SEO
        title="WordPress 404 Errors: Fix Broken Pages & Links | UX Sites"
        description="Why WordPress shows 404 errors and how to fix them -  broken links, permalink issues, deleted pages and redirects. A practical troubleshooting guide."
        url="https://uxsites.co.uk/wordpress-help/wordpress-404-errors/"
        schema={[
          serviceSchema({
            name: "WordPress 404 Errors: Fix Broken Pages & Links",
            description: "A practical guide to understanding and fixing WordPress 404 errors -  broken links, permalink issues, deleted pages, redirects, and how to protect your search rankings.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-404-errors/",
            category: "WordPress Maintenance Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "WordPress 404 Errors: Fix Broken Pages & Links", url: "https://uxsites.co.uk/wordpress-help/wordpress-404-errors/" },
          ]),
          faqSchema(notFoundFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Fix page not found errors"
          headline="WordPress 404 Errors: Fix Broken Pages & Links"
          subheadline="A 404 error means a page wasn't found -  and every one costs you a visitor. Here's how to find the cause and fix it, without losing your search rankings."
          primaryCta={{ text: "Our Maintenance Service", href: "/wordpress-maintenance/" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help/" }}
          chips={["Troubleshooting", "10 min read", "Step-by-step", "Beginner friendly"]}
        />

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Do WordPress 404 Errors Happen?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A 404 happens when a visitor or search engine asks for a URL that no longer exists. These are the usual reasons.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonCauses.map((cause, i) => {
                const Icon = cause.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="p-6 bg-background border border-border rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-bold mb-2 text-sm">{cause.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cause.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Fix 404 Errors in WordPress</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow these steps in order. Most 404 problems are resolved by the time you reach step four.
              </p>
            </div>
            <div className="space-y-6">
              {fixSteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-5 p-6 bg-card border border-border rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary shrink-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 md:p-10 bg-background border border-border rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Search size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Do 404 Errors Affect Your Search Rankings?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Handled properly, a 404 is a normal part of the web. Handled badly, it silently erodes your rankings:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {seoPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Regular broken-link and redirect checks are part of our WordPress maintenance service -  so 404s are caught and fixed before they cost you visitors.
              </p>
              <Link
                href="/wordpress-maintenance/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                See How Our Maintenance Service Handles It <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress 404 Errors  -  Common Questions"
          faqs={notFoundFaqs}
        />

        <CTABanner
          title="Never chase broken links again"
          description="Our maintenance service includes broken-link checks and redirect management -  plus on-call experts to fix any 404 problem before it costs you visitors."
          buttonText="View Maintenance Service"
          buttonHref="/wordpress-maintenance/"
          secondaryButtonText="Managed Hosting"
          secondaryButtonHref="/managed-wordpress-hosting/"
        />

        <RelatedPages
          title="More WordPress Help Guides"
          pages={[
            {
              title: "How to Fix a Slow WordPress Website",
              description: "Diagnose and fix slow WordPress loading times.",
              href: "/wordpress-help/wordpress-slow/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Checklist",
              description: "Keep your site running fast with regular tasks.",
              href: "/wordpress-help/wordpress-maintenance/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Broken-link checks and redirects handled for you.",
              href: "/wordpress-maintenance/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Reliable hosting with monitoring and support.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}