import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Shield, RefreshCw, Zap, Globe, HeadphonesIcon, BarChart3, Monitor, Database, Cloud, Lock, Truck, ArrowRight } from "lucide-react";

const inclusions = [
  {
    icon: Database,
    title: "Daily Automated Backups",
    description: "Your entire WordPress site  -  files and database  -  is backed up automatically every day. Backups are stored in secure off-site cloud storage with 30-day retention. If anything goes wrong, we restore your site to a clean working state within the hour.",
    detail: "Backups are tested regularly to ensure they can actually be restored. A backup you can't restore isn't a backup."
  },
  {
    icon: Shield,
    title: "Security Monitoring & Malware Protection",
    description: "Continuous security scanning monitors your site for malware, suspicious file changes, brute-force login attempts, and known plugin vulnerabilities. Threats are identified and dealt with proactively.",
    detail: "Includes file integrity monitoring, firewall configuration, and login attempt rate limiting. Malware removal is included at no extra cost if an infection occurs."
  },
  {
    icon: RefreshCw,
    title: "WordPress Core, Plugin & Theme Updates",
    description: "We apply WordPress core, plugin, and theme updates carefully  -  reviewing compatibility before pushing them live. You never need to log into your WordPress dashboard to run updates.",
    detail: "Outdated software is the #1 cause of WordPress security incidents. Our process ensures updates are never missed but never applied blindly."
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description: "Server-level caching, database query optimisation, image compression, and minification of CSS and JavaScript are all configured and maintained. Your site loads fast for visitors.",
    detail: "We monitor page load times and Core Web Vitals. If performance degrades, we investigate and fix the root cause."
  },
  {
    icon: Lock,
    title: "SSL Certificates",
    description: "SSL certificates are provisioned, automatically renewed, and monitored. Your site will never show the 'Not Secure' browser warning. Visitor data is encrypted in transit.",
    detail: "Includes automatic redirect from HTTP to HTTPS and monitoring for certificate expiry. We handle the entire SSL lifecycle."
  },
  {
    icon: Globe,
    title: "Content Delivery Network (CDN)",
    description: "A CDN distributes your site's static assets across multiple global servers, delivering them from the location nearest to each visitor. This dramatically improves load times for visitors outside your local area.",
    detail: "CDN is configured and managed for you. Images, CSS, and JavaScript files are served from edge locations worldwide."
  },
  {
    icon: BarChart3,
    title: "Uptime Monitoring  -  99.9% Commitment",
    description: "Your site is checked every minute from multiple monitoring locations worldwide. If your site goes down, we know before you do  -  and we start working on it immediately.",
    detail: "We commit to 99.9% uptime. That's less than 9 hours of unplanned downtime per year. Any extended downtime is credited back."
  },
  {
    icon: HeadphonesIcon,
    title: "Expert WordPress Support",
    description: "When something looks wrong or you have a question, you talk to someone who knows your site. Not a generic support ticketing system  -  a real person who understands WordPress and your specific setup.",
    detail: "Support covers WordPress-specific issues, plugin questions, and site troubleshooting. No scripted responses, no transfer to another department."
  },
  {
    icon: Monitor,
    title: "Staging Environments",
    description: "A staging copy of your site lets you test design changes, plugin updates, or new features in a private environment before pushing them live. Zero risk to your live site.",
    detail: "Staging environments are one-click to create and one-click to push live. Safe testing without technical complexity."
  },
  {
    icon: Truck,
    title: "Free Site Migration",
    description: "Moving from your current host? We handle the complete migration process  -  files, database, email accounts, and DNS  -  with zero downtime. Migration is always included free.",
    detail: "We assess your current setup, plan the migration to avoid any disruption, and verify everything works before switching DNS."
  }
];

export default function WhatsIncludedMgdHosting() {
  return (
    <>
      <SEO
        title="What's Included in Managed WordPress Hosting | UX Sites"
        description="Full breakdown of managed WordPress hosting features. Daily backups, security, updates, performance, SSL, and expert support - explained in plain English."
        url="https://uxsites.co.uk/whats-included-managed-wordpress-hosting/"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting  -  What's Included",
            description: "Full breakdown of managed WordPress hosting inclusions: daily backups, security monitoring, updates, performance optimisation, SSL, CDN, uptime monitoring, expert support, staging, and migration.",
            url: "https://uxsites.co.uk/whats-included-managed-wordpress-hosting/",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "What's Included", url: "https://uxsites.co.uk/whats-included-managed-wordpress-hosting/" },
          ]),
          faqSchema([
            { question: "What's included in managed WordPress hosting?", answer: "Managed WordPress hosting includes daily automated backups, security monitoring, WordPress core/plugin/theme updates, performance optimisation, SSL certificates, CDN, uptime monitoring, expert WordPress support, staging environments, and free site migration  -  all for one monthly price." },
            { question: "What is not included?", answer: "Major site rebuilds, custom development work, and third-party plugin customisation are not included in standard managed hosting. Content update requests are included for simple changes like text edits, image swaps, and contact detail updates." },
            { question: "Do I need to pay extra for security or backups?", answer: "No. Security monitoring, malware protection, and daily off-site backups are all included in the managed hosting plan. There are no upsells or add-on charges for essential protections." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Everything you need to know"
          headline="What's Included in Managed WordPress Hosting"
          subheadline="Get the full breakdown of what services and features are typically included in managed WordPress hosting plans."
          primaryCta={{ text: "View Hosting Plans", href: "/managed-wordpress-hosting/#pricing" }}
          secondaryCta={{ text: "View Pricing", href: "/managed-wordpress-hosting/#pricing" }}
          chips={["Backups", "Security", "Updates", "Performance", "SSL & CDN", "Support", "Staging", "Migration"]}
        />

        {/* What's included */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Get With Managed Hosting</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                One monthly price. No hidden extras. No upsells for essential features.
              </p>
            </div>
            <div className="space-y-6">
              {inclusions.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-card border border-border rounded-2xl p-8"
                  >
                    <div className="grid md:grid-cols-[auto_1fr] gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
                        <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-4">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's not included */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What's Not Included</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Transparent about what our plans cover  -  and what they don't.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Major site rebuilds or redesigns", desc: "A full visual redesign or structural rebuild is a separate project, quoted per scope." },
                { title: "Custom development work", desc: "New custom functionality, integrations, or bespoke plugin development are quoted separately." },
                { title: "Third-party plugin customisation", desc: "We support standard plugin functionality. Custom development on specific plugins is scoped per request." },
                { title: "Content creation", desc: "Writing blog posts, creating images, or producing video content is not included. We can recommend content partners." },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-background border border-border rounded-2xl">
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQBlock
          faqs={[
            {
              question: "What's included in managed WordPress hosting?",
              answer: "Managed WordPress hosting includes daily automated backups, security monitoring, WordPress core/plugin/theme updates, performance optimisation, SSL certificates, CDN, uptime monitoring with 99.9% commitment, expert WordPress support, staging environments, and free site migration  -  all for one monthly price."
            },
            {
              question: "What is not included in the managed hosting plan?",
              answer: "Major site redesigns, custom development work, and content creation are not included. Simple content update requests (text changes, image swaps, contact detail updates) are included. Anything beyond routine maintenance or content tweaks would be quoted separately."
            },
            {
              question: "Do I need to pay extra for security or backups?",
              answer: "No. Security monitoring, malware scanning, file integrity checks, and daily off-site backups are all included in the managed hosting plan. There are no upsells or add-on charges for essential security features."
            },
            {
              question: "How are WordPress updates handled?",
              answer: "We monitor for available updates to WordPress core, plugins, and themes. Updates are reviewed for compatibility, then applied during low-traffic periods. If an update causes an issue, we restore from the most recent backup immediately. You never need to run updates yourself."
            }
          ]}
        />

        <CTABanner
          title="One price. Everything included."
          description="Managed WordPress hosting from £50/month  -  with no hidden extras or surprise charges."
          buttonText="Get Started"
          buttonHref="/contact/"
          secondaryButtonText="Compare Plans"
          secondaryButtonHref="/managed-wordpress-hosting-vs-shared-hosting/"
        />
      </main>
    </>
  );
}
