import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AlertTriangle, Check } from "lucide-react";

const maintenanceTasks = [
  { task: "WordPress core updates", frequency: "As released", detail: "Tested before applying to live site" },
  { task: "Plugin updates", frequency: "As released", detail: "Compatibility checked first" },
  { task: "Theme updates", frequency: "As released", detail: "With staging review" },
  { task: "Database optimisation", frequency: "Monthly", detail: "Cleanup of post revisions, transients" },
  { task: "Security scan", frequency: "Continuous", detail: "Malware and file change detection" },
  { task: "Uptime monitoring", frequency: "Every minute", detail: "Multi-location checks" },
  { task: "Off-site backup", frequency: "Daily", detail: "30-day retention" },
  { task: "Performance check", frequency: "Monthly", detail: "Core Web Vitals monitoring" },
  { task: "Broken link scan", frequency: "Monthly", detail: "Internal and external links" },
  { task: "SSL monitoring", frequency: "Continuous", detail: "Auto-renewal before expiry" },
];

export default function WordPressMaintenance() {
  return (
    <>
      <SEO
        title="WordPress Maintenance Service | UX Sites — Monthly WordPress Care"
        description="Professional WordPress maintenance service for UK businesses. Monthly plugin updates, security scanning, daily backups, uptime monitoring and expert support. From £50/month."
        url="https://uxsites.co.uk/wordpress-maintenance"
        schema={[
          serviceSchema({
            name: "WordPress Maintenance Service",
            description: "Monthly WordPress maintenance covering plugin and core updates, security scanning, daily automated backups, uptime monitoring, and expert email support. From £50/month.",
            url: "https://uxsites.co.uk/wordpress-maintenance",
            category: "WordPress Maintenance",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Website Support", url: "https://uxsites.co.uk/website-support" },
            { name: "WordPress Maintenance", url: "https://uxsites.co.uk/wordpress-maintenance" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="WordPress maintenance done properly"
          headline="WordPress Maintenance Service — Done for You"
          subheadline="WordPress requires regular, careful maintenance to stay secure, current, and performing well. Our maintenance service handles all of it — updates, backups, security, performance monitoring — so you can focus entirely on your business."
          primaryCta={{ text: "Get Maintenance Coverage", href: "/contact" }}
          secondaryCta={{ text: "Full Hosting & Support", href: "/website-support" }}
          chips={["Plugin Updates", "Security Scanning", "Daily Backups", "Uptime Monitoring", "Expert Support"]}
        />

        {/* The problem with no maintenance */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">What Happens to an Unmaintained WordPress Site</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  WordPress isn't a "set it and forget it" platform. Without regular maintenance, sites gradually deteriorate — and the consequences range from embarrassing to business-critical.
                </p>
                <div className="space-y-4">
                  {[
                    { risk: "Security vulnerabilities accumulate", consequence: "Outdated plugins are the #1 cause of WordPress hacks. Each update that doesn't get applied is a potential entry point for attackers." },
                    { risk: "Plugin conflicts cause breakages", consequence: "Multiple plugins updating at different times without compatibility testing is a recipe for a broken site — often discovered by a customer, not you." },
                    { risk: "Performance degrades over time", consequence: "Database bloat, uncompressed images, and accumulated redundant data slow your site down — which hurts both rankings and conversions." },
                    { risk: "Backup failures go unnoticed", consequence: "Many cheap hosting backups fail silently. You only find out when you need to restore and there's nothing there." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="p-5 bg-background border border-border rounded-xl"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                        <span className="font-bold text-sm">{item.risk}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-7">{item.consequence}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">What Our Maintenance Covers</h2>
                <div className="space-y-2">
                  {maintenanceTasks.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between p-4 bg-card border border-border rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Check size={14} className="text-primary shrink-0" />
                        <span className="text-sm font-medium">{item.task}</span>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="text-xs font-semibold text-primary">{item.frequency}</div>
                        <div className="text-xs text-muted-foreground">{item.detail}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How updates are done safely */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">How We Apply Updates Safely</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                "Just clicking update" is how sites break. Our process is methodical — ensuring updates are applied safely, with an instant rollback path if anything goes wrong.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Backup first", desc: "A fresh backup is taken immediately before any update is applied — giving us an instant restore point." },
                { step: "2", title: "Review the update", desc: "We check plugin changelogs for major changes, known conflicts, and compatibility with your WordPress version." },
                { step: "3", title: "Apply & test", desc: "Updates are applied and the site is tested — key pages, forms, checkout if applicable — to confirm nothing has broken." },
                { step: "4", title: "Monitor", desc: "Post-update monitoring continues for 24 hours. If any issues surface, we restore from the pre-update backup immediately." }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl"
                >
                  <div className="text-3xl font-black text-primary/40 mb-3">{s.step}</div>
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Beyond Updates — What Maintenance Really Covers"
          benefits={[
            {
              title: "Security Hardening",
              description: "Login protection, file permission checks, and configuration hardening — reducing attack surface beyond just keeping software current."
            },
            {
              title: "Database Maintenance",
              description: "Regular cleanup of post revisions, spam comments, expired transients, and orphaned metadata — keeping the database lean and queries fast."
            },
            {
              title: "Image Optimisation",
              description: "New images uploaded to WordPress are automatically compressed and converted to WebP — preventing the gradual performance degradation that comes with unoptimised media."
            },
            {
              title: "Plugin Audit",
              description: "Quarterly review of all installed plugins — removing unused ones, identifying redundant or conflicting ones, and flagging any that have become abandoned by their developers."
            },
            {
              title: "Monthly Reporting",
              description: "A clear monthly summary of everything done: updates applied, security scan results, uptime, backup status, and performance scores — in plain language."
            },
            {
              title: "Content Update Requests",
              description: "Simple content changes (text, images, contact details, prices) handled by email — no need to log into WordPress yourself."
            }
          ]}
        />

        {/* Maintenance vs managed hosting */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Maintenance Service vs Managed Hosting</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our managed hosting includes all maintenance services plus the hosting infrastructure itself. Here's how they compare.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Maintenance Only</th>
                    <th className="text-center py-4 px-4 font-bold text-primary">Managed Hosting</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["WordPress updates", true, true],
                    ["Security monitoring", true, true],
                    ["Daily backups", true, true],
                    ["Performance monitoring", true, true],
                    ["Content update requests", true, true],
                    ["Hosting infrastructure", false, true],
                    ["SSL certificate", false, true],
                    ["Uptime guarantee", false, true],
                    ["Site migration included", true, true],
                  ].map(([feature, maint, managed], i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{feature as string}</td>
                      <td className="py-3 px-4 text-center">{maint ? <span className="text-primary">✓</span> : <span className="text-muted-foreground">—</span>}</td>
                      <td className="py-3 px-4 text-center">{managed ? <span className="text-primary font-bold">✓</span> : <span className="text-muted-foreground">—</span>}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Works with your current host</td>
                    <td className="py-3 px-4 text-center text-primary">✓</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">Migrates to ours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm mb-4">Most clients find managed hosting better value — it replaces their existing hosting cost entirely.</p>
              <Link href="/managed-wordpress-hosting" className="text-primary text-sm font-bold hover:underline">
                View managed hosting plans from £50/month →
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          faqs={[
            {
              question: "Can you maintain a site that's on a different host?",
              answer: "Yes. Our maintenance service works with WordPress sites on any host where we have admin access. We'll review the site first to understand its current state and flag any immediate concerns."
            },
            {
              question: "Do you apply updates automatically?",
              answer: "Not blindly. We review updates before applying them, take a backup first, then apply and test. Minor security patches may be applied promptly, but significant updates go through our full review process."
            },
            {
              question: "What if an update breaks my site?",
              answer: "We take a backup immediately before every update. If anything breaks, we restore from that backup and investigate the conflict before trying again — usually within the hour."
            },
            {
              question: "How is this different from my hosting provider's 'auto-updates'?",
              answer: "Hosting provider auto-updates just apply updates without any testing or compatibility checking. Ours involves a review, backup, application, and testing process — plus someone who actually looks at your site and will notice if something looks wrong."
            },
            {
              question: "Do I need a maintenance service if I'm on your managed hosting?",
              answer: "No — managed hosting includes all maintenance tasks automatically. If you're on our managed hosting plan, you're already covered."
            }
          ]}
        />

        <CTABanner
          title="Stop worrying about your WordPress site"
          description="Get ongoing maintenance coverage and know your site is being looked after — properly, by someone who understands it."
          buttonText="Get in Touch"
          buttonHref="/contact"
          secondaryButtonText="View Managed Hosting"
          secondaryButtonHref="/managed-wordpress-hosting"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Website Support & Care Plans",
              description: "Full care plan details — what's covered and why it matters for your business.",
              href: "/website-support",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Hosting + maintenance in one plan — the most complete solution from £50/month.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "WordPress Security Monitoring",
              description: "How we actively protect your site from hacks, malware, and vulnerabilities.",
              href: "/wordpress-security",
              tag: "Related"
            },
            {
              title: "WordPress Backup & Recovery",
              description: "Daily off-site backups and how rapid restoration works if the worst happens.",
              href: "/wordpress-backup-recovery",
              tag: "Related"
            },
            {
              title: "Website Speed Optimisation",
              description: "How we keep your site loading fast — and why speed matters for rankings.",
              href: "/website-speed-optimisation",
              tag: "Related"
            },
            {
              title: "WordPress Security Essentials",
              description: "What every WordPress site owner needs to know about keeping their site secure.",
              href: "/blog/wordpress-security-essentials",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
