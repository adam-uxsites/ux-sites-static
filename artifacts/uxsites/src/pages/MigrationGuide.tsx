import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { MessageSquare, Server, ShieldCheck, SearchCheck, Globe, Bell, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "We Discuss Your Requirements & Current Setup",
    description: "We start by learning about your website — what platform it's on, how it's currently hosted, what plugins and themes you use, and what you'd like to improve. This helps us plan a smooth migration and identify anything that needs attention before we move.",
    detail: "We'll ask about your hosting provider, backup practices, any known issues, and your goals for managed hosting."
  },
  {
    number: "02",
    icon: Server,
    title: "We Migrate Your Theme, Plugins & Database",
    description: "Your entire WordPress site is transferred to our managed hosting environment — all theme files, plugins, uploads, and the full database. Nothing is left behind. We replicate your site exactly, then configure the server for optimal performance.",
    detail: "Migration is free and handled entirely by us. You don't need to touch any files or settings."
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Security Issues & Bugs Are Addressed",
    description: "We audit your site for known vulnerabilities, outdated plugins, security holes, and existing malware. Critical issues are fixed before go-live. Some larger updates for older sites may take additional time, but we'll flag anything significant and agree a plan with you first.",
    detail: "Outdated PHP versions, vulnerable plugins, weak permissions, and missing SSL are all identified and resolved."
  },
  {
    number: "04",
    icon: SearchCheck,
    title: "We Check & Test Everything Before Go-Live",
    description: "Your migrated site is thoroughly tested in a staging environment — every page, form, link, and function. We check performance, mobile responsiveness, page speed, and that all integrations are working. Nothing goes live until we're confident it's solid.",
    detail: "Testing covers all devices, page load speeds, form submissions, contact forms, and any third-party integrations."
  },
  {
    number: "05",
    icon: Globe,
    title: "Your Domain Switches Over With Zero Downtime",
    description: "We point your domain to the new server once everything is confirmed working. Your old site stays live throughout — visitors see no interruption as the DNS change propagates. We monitor the transition closely and are on hand immediately if anything needs attention.",
    detail: "No maintenance mode. No 'site under construction' page. Your site remains accessible the entire time."
  },
  {
    number: "06",
    icon: Bell,
    title: "Your Site Goes Live — Monitored, Updated & Supported",
    description: "Once you're on our managed hosting, we take over completely. Daily backups, 24/7 security monitoring, WordPress updates, performance optimisation, and 30 minutes of monthly development time for content changes and tweaks — just email us what you need changing.",
    detail: "30 minutes rolls over each month for content updates, text changes, image swaps, or minor adjustments."
  }
];

const includedAfterMigration = [
  "Daily automated backups with 30-day retention",
  "24/7 security monitoring & malware protection",
  "WordPress core, plugin & theme updates",
  "Performance optimisation & CDN",
  "SSL certificate management",
  "Uptime monitoring with 99.9% commitment",
  "30 minutes monthly development time for changes",
  "Priority email support — no ticket systems"
];

export default function MigrationGuide() {
  return (
    <>
      <SEO
        title="WordPress Migration Guide — How Onboarding Works | UX Sites"
        description="Step-by-step guide to migrating your WordPress site to UX Sites managed hosting. Requirements, migration, security fixes, testing, zero-downtime domain switch, and ongoing support."
        url="https://uxsites.co.uk/migration-guide/"
        schema={[
          serviceSchema({
            name: "WordPress Migration to Managed Hosting",
            description: "Step-by-step migration guide for moving your WordPress site to UX Sites managed hosting — from requirements discussion through to go-live and ongoing support.",
            url: "https://uxsites.co.uk/migration-guide/",
            category: "WordPress Migration",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "Migration Guide", url: "https://uxsites.co.uk/migration-guide/" },
          ]),
          faqSchema([
            { question: "How long does the migration process take?", answer: "Most standard WordPress sites are migrated within 24-48 hours. More complex sites — those with custom integrations, large media libraries, or specific security requirements — may take slightly longer. We'll give you a realistic timeline during the initial discussion." },
            { question: "Is there any downtime during the migration?", answer: "No. Your existing site stays live on your current host throughout the entire process. We only switch your domain over once the new site is fully tested and confirmed working. There's no interruption for your visitors." },
            { question: "What if something goes wrong during migration?", answer: "We take a full backup of your site before doing anything. If any issue arises, we can restore your site to its original state immediately. Nothing is ever modified on your live site without your knowledge." },
            { question: "What information do you need from me to get started?", answer: "We'll need your current hosting login details (cPanel, dashboard, or SFTP), your WordPress admin credentials, and a brief overview of any plugins or integrations your site relies on. We'll guide you through exactly what's needed during the initial call." },
            { question: "Will my site look different after migration?", answer: "No — we migrate your existing theme, content, and settings exactly as they are. The only changes will be improvements to performance and security. If your site needs a design refresh, we can discuss that separately." },
            { question: "What's the 30 minutes of monthly development time for?", answer: "It covers routine content changes — text updates, image swaps, adding team members, updating pricing or opening hours, service descriptions, and similar tweaks. Just email us what you need changed and we'll handle it. Larger feature additions or new page builds would be quoted separately." },
            { question: "Am I locked into a contract?", answer: "No. All plans run month-to-month with 30 days notice. There's no setup fee and no long-term commitment. You're free to leave at any time — and we'll provide a full export of your site if you do." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Simple, safe, stress-free"
          headline="Your WordPress Migration Guide — How Onboarding Works"
          subheadline="Moving to managed hosting doesn't have to be complicated. Here's exactly what happens when you come on board with UX Sites — from our first conversation to your site going live and beyond."
          primaryCta={{ text: "Start Your Migration", href: "/contact" }}
          secondaryCta={{ text: "Why Migrate?", href: "/wordpress-migration-to-managed-hosting" }}
          chips={["Free Migration", "Zero Downtime", "Security Audit", "30 Min Dev Time", "We Handle Everything"]}
        />

        {/* Migration steps */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">The Onboarding Process — Step by Step</h2>
              <p className="subhead-section">
                From our first conversation to your site going live on managed hosting, here's exactly what happens.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card-base card-hover p-8 flex gap-6"
                  >
                    <div className="hidden md:flex flex-col items-center">
                      <div className="card-icon-box">
                        <Icon size={20} className="text-primary" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-3" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-muted-foreground/50 tracking-wider">{step.number}</span>
                        <h3 className="heading-card">{step.title}</h3>
                      </div>
                      <p className="body-card mb-3">{step.description}</p>
                      {step.detail && (
                        <p className="text-xs text-muted-foreground/60 italic flex items-start gap-1.5">
                          <span className="mt-0.5 shrink-0">—</span>
                          <span>{step.detail}</span>
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's included after migration */}
        <section className="section-padding section-alt">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">What's Included After Migration</h2>
              <p className="subhead-section">
                Once your site is live on our managed hosting, everything below is included in your plan.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {includedAfterMigration.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-base card-hover p-5 flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to make the move?"
          description="Free migration, zero downtime, and ongoing support included. Tell us about your site and we'll handle the rest."
          buttonText="Get Started"
          buttonHref="/contact"
        />

        {/* Related pages */}
        <RelatedPages
          pages={[
            { title: "Managed WordPress Hosting", href: "/managed-wordpress-hosting", description: "Everything included in our managed hosting plan" },
            { title: "WordPress Care Plan", href: "/wordpress-care-plan", description: "Ongoing development & priority support" },
            { title: "WordPress Support Shropshire", href: "/wordpress-support-shropshire", description: "Expert WordPress support for Shropshire businesses" },
            { title: "Common WordPress Errors", href: "/common-wordpress-errors", description: "Troubleshoot issues before migration" },
          ]}
        />
      </main>
    </>
  );
}
