import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, Image, FolderCog, RefreshCw, Database, Server, Clock, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

const causes = [
  {
    icon: Server,
    title: "Poor hosting",
    desc: "Shared hosting plans often can't handle WordPress's database queries and PHP processing. Cheap hosting is the most common underlying cause of slow WordPress sites."
  },
  {
    icon: Image,
    title: "Unoptimized images",
    desc: "Images uploaded directly from a camera or phone can be 2-5MB each. Without compression, these images dramatically increase page weight and loading times."
  },
  {
    icon: FolderCog,
    title: "Too many plugins",
    desc: "Every active plugin adds code execution, database queries, and often external HTTP requests. Bloated or poorly-coded plugins are a performance killer."
  },
  {
    icon: RefreshCw,
    title: "Outdated WordPress/core",
    desc: "Running old versions of WordPress, PHP, or your theme can leave performance improvements on the table. Each major release includes speed enhancements."
  },
  {
    icon: Zap,
    title: "No caching",
    desc: "Without caching, WordPress rebuilds every page from scratch on every visit. Proper caching serves a static version, reducing load time by 50-80%."
  },
  {
    icon: Database,
    title: "Database issues",
    desc: "WordPress stores post revisions, spam comments, transients, and other overhead in your database. An unoptimised database gets slower over time."
  },
];

const steps = [
  {
    step: "1",
    title: "Test your current speed",
    desc: "Before making changes, benchmark your site. Use tools like Google PageSpeed Insights, GTmetrix, or WebPageTest to get baseline scores and identify specific issues."
  },
  {
    step: "2",
    title: "Optimize images",
    desc: "Compress all images on your site using a plugin like ShortPixel or Imagify. Enable automatic WebP conversion and lazy loading to serve smaller files without quality loss."
  },
  {
    step: "3",
    title: "Install a caching plugin",
    desc: "Install a caching plugin such as WP Rocket, W3 Total Cache, or WP Super Cache. Enable page caching, browser caching, and minification of CSS and JavaScript files."
  },
  {
    step: "4",
    title: "Update everything",
    desc: "Update WordPress core, all plugins, and your theme to the latest versions. Also check that your hosting runs PHP 8.0+  -  older PHP versions are significantly slower."
  },
  {
    step: "5",
    title: "Audit your plugins",
    desc: "Deactivate and delete any unused plugins. For remaining plugins, check if alternatives exist that are lighter or better coded. Every plugin should earn its place."
  },
  {
    step: "6",
    title: "Optimize the database",
    desc: "Use WP-Optimize or a similar tool to clean up post revisions, auto-drafts, spam comments, and expired transients. Schedule regular database maintenance going forward."
  },
  {
    step: "7",
    title: "Consider better hosting",
    desc: "If the above steps don't deliver acceptable speed, your hosting is likely the bottleneck. Consider managed WordPress hosting with server-level caching and faster infrastructure."
  },
];

const slowFaqs = [
  {
    question: "How fast should my WordPress site load?",
    answer: "Aim for under 2.5 seconds on mobile and under 1.5 seconds on desktop. Google considers 2.5 seconds or less as 'good' for Largest Contentful Paint (LCP)  -  one of the Core Web Vitals that affects search rankings."
  },
  {
    question: "Will a caching plugin alone fix my slow site?",
    answer: "Caching helps significantly, but it's not a cure-all. If the underlying issues  -  poor hosting, unoptimised images, bloated database  -  aren't addressed, caching only masks the symptoms. A comprehensive approach always works best."
  },
  {
    question: "Is shared hosting always bad for WordPress?",
    answer: "Not always, but it depends on the provider and your site's needs. Quality managed WordPress hosts like Kinsta, WP Engine, or Cloudways provide server-level caching and faster infrastructure. Budget shared hosting is usually the problem."
  },
  {
    question: "Can too many plugins really slow down my site?",
    answer: "Yes  -  each plugin adds PHP execution time, database queries, and often external CSS/JavaScript files. A site with 10-15 well-chosen, lightweight plugins can perform well, but 40+ plugins almost always causes performance issues."
  },
];

export default function WordPressHelpSlow() {
  return (
    <>
      <SEO
        title="How to Fix a Slow WordPress Website | UX Sites"
        description="Step-by-step guide to diagnose and fix a slow WordPress website. Image optimisation, caching, database cleanup, plugin audits  -  practical fixes you can apply today."
        url="https://uxsites.co.uk/wordpress-help/wordpress-slow/"
        schema={[
          serviceSchema({
            name: "How to Fix a Slow WordPress Website",
            description: "Step-by-step guide to diagnose and fix slow WordPress loading times. Covers image optimization, caching plugins, database cleanup, plugin audits, and hosting improvements.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-slow/",
            category: "WordPress Performance Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "How to Fix a Slow WordPress Website", url: "https://uxsites.co.uk/wordpress-help/wordpress-slow/" },
          ]),
          faqSchema(slowFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Speed up your WordPress site"
          headline="How to Fix a Slow WordPress Website"
          subheadline="A slow WordPress website can hurt your business. Learn how to diagnose performance issues and implement effective fixes."
          primaryCta={{ text: "Need Expert Help?", href: "/contact" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help" }}
          chips={["Performance", "10 min read", "Step-by-step", "Beginner friendly"]}
        />

        {/* Why it's slow */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Is My WordPress Website Slow?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Slow loading times rarely have a single cause. Most WordPress performance issues come from a combination of these factors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {causes.map((cause, i) => {
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

        {/* Step-by-step guide */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Speed Fix Guide</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow these steps in order. Each builds on the previous one, and you can stop once your site reaches acceptable speed.
              </p>
            </div>
            <div className="space-y-6">
              {steps.map((s, i) => (
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

        {/* When to get professional help */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 md:p-10 bg-background border border-border rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <AlertCircle size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">When to Get Professional Help</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The steps above will resolve the majority of WordPress speed issues. However, you should consider expert help if:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Your site is still slow after completing all 7 steps",
                  "You're not comfortable making changes to your WordPress files or database",
                  "The site is a client or revenue-generating site and downtime matters",
                  "You don't have time to work through the process yourself",
                  "Your hosting provider's support can't help with performance issues"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Get Performance Help
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Speed  -  Common Questions"
          faqs={slowFaqs}
        />

        <CTABanner
          title="Let us speed up your WordPress site"
          description="We handle the full performance optimisation process  -  caching, image compression, database tuning, plugin audit, and hosting recommendations  -  so your site loads fast without the hassle."
          buttonText="Get a Speed Audit"
          buttonHref="/contact"
          secondaryButtonText="View All Guides"
          secondaryButtonHref="/wordpress-help"
        />

        <RelatedPages
          title="More WordPress Help Guides"
          pages={[
            {
              title: "WordPress Maintenance Checklist",
              description: "Keep your site running fast with regular maintenance tasks.",
              href: "/wordpress-help/wordpress-maintenance",
              tag: "Guide"
            },
            {
              title: "How to Secure a WordPress Website",
              description: "Essential security measures to protect your WordPress site.",
              href: "/wordpress-help/wordpress-security",
              tag: "Guide"
            },
            {
              title: "What to Do If a WordPress Update Breaks Your Site",
              description: "Emergency recovery guide for broken WordPress sites.",
              href: "/wordpress-help/wordpress-update-issues",
              tag: "Guide"
            },
            {
              title: "Website Speed Optimisation Service",
              description: "Professional performance optimisation for your WordPress site.",
              href: "/website-speed-optimisation",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}
