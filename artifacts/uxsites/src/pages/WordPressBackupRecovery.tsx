import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { HardDrive, AlertTriangle, Check } from "lucide-react";

export default function WordPressBackupRecovery() {
  return (
    <>
      <SEO
        title="WordPress Backup & Recovery Service | UX Sites"
        description="Automated daily WordPress backups with 30-day retention and rapid restoration. Off-site cloud storage, full-site recovery within the hour. Included in all managed hosting plans."
      />
      <main>
        <HeroBlock
          tagline="Your last line of defence"
          headline="WordPress Backup & Recovery — Done Properly"
          subheadline="A reliable, tested backup is the difference between a serious incident and a minor inconvenience. We run automated daily backups to secure off-site cloud storage — so if the worst happens, we can restore your site within the hour."
          primaryCta={{ text: "Get Backup Coverage", href: "/contact" }}
          secondaryCta={{ text: "View Managed Hosting", href: "/managed-wordpress-hosting" }}
          chips={["Daily Automated", "Off-Site Storage", "30-Day Retention", "Full Site Recovery", "Within the Hour"]}
        />

        {/* The risk without proper backups */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Most WordPress Backups Fail When You Need Them</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Many businesses believe they have backups — until something goes wrong and they discover those backups don't actually work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  problem: "Backups stored on the same server",
                  consequence: "If your server is compromised, corrupted, or fails, you lose both your site and your backups simultaneously. Off-site storage is non-negotiable."
                },
                {
                  problem: "Hosting provider 'backups' that aren't tested",
                  consequence: "Many cheap hosts offer daily backups but don't verify they're working. Silent failures mean you discover your backup is corrupt exactly when you most need it."
                },
                {
                  problem: "Infrequent backups (weekly or monthly)",
                  consequence: "A weekly backup means potentially losing 7 days of content, orders, or customer data. Daily backups minimise what you'd lose in a worst-case scenario."
                },
                {
                  problem: "Short retention windows",
                  consequence: "Some infections are dormant for weeks before activating. A 7-day retention window means you can't restore to a clean state before the infection — a 30-day window gives you options."
                },
                {
                  problem: "No restoration process ever tested",
                  consequence: "A backup that's never been used for a restoration is just an assumption. We test our backup and restoration process so you know it actually works."
                },
                {
                  problem: "Backing up only files (not the database)",
                  consequence: "WordPress sites consist of both files and a database. A files-only backup can't be used to restore a working site — you need both, in a consistent state."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-6 bg-background border border-border rounded-2xl"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                    <span className="font-bold text-sm">{item.problem}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-7">{item.consequence}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How ours works */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">How Our Backup System Works</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Every site on our managed hosting runs automated daily backups — both WordPress files and the complete database, captured together in a consistent state.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Backups are stored in secure cloud storage entirely separate from your hosting environment. 30 days of backups are retained — so even if an infection is dormant for weeks before activating, we can restore to a clean, pre-infection state.
                </p>
                <div className="space-y-3">
                  {[
                    "Full WordPress files + complete database",
                    "Stored in secure off-site cloud storage",
                    "30 days of backup history retained",
                    "Backup integrity verified automatically",
                    "Restoration process documented and tested",
                    "Restoration typically completed within one hour"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <Check size={14} className="text-primary shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">What Triggers a Restoration?</h3>
                {[
                  { trigger: "Plugin update breaks the site", resolution: "Restore to pre-update backup — typically within 30 minutes of detection." },
                  { trigger: "Security incident / malware infection", resolution: "Restore to a clean pre-infection backup, then apply security hardening to prevent recurrence." },
                  { trigger: "Accidental content deletion", resolution: "Restore the database to recover deleted posts, pages, products, or orders." },
                  { trigger: "Server failure or corruption", resolution: "Full site migration to new infrastructure from backup — hosting environment failure doesn't mean data loss." },
                  { trigger: "Theme or customisation error", resolution: "Restore to the last known-good state and investigate the issue in a staging environment." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="p-5 bg-card border border-border rounded-xl"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <HardDrive size={14} className="text-primary shrink-0 mt-0.5" />
                      <span className="font-bold text-sm">{item.trigger}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-5">{item.resolution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="What's Covered in Our Backup Service"
          benefits={[
            { title: "Daily Automated Backups", description: "No manual triggering required — backups run automatically every 24 hours, capturing the full state of your WordPress site and database." },
            { title: "Off-Site Cloud Storage", description: "Backups are stored in geographically separate cloud infrastructure from your hosting — so a hosting failure doesn't compromise your backup." },
            { title: "30-Day Retention", description: "A month of backup history gives you the flexibility to restore to a state before infections, bad updates, or accidental deletions — even if the problem was subtle and slow-developing." },
            { title: "Full-Site Backup", description: "WordPress files, themes, plugins, uploads, and the complete MySQL database — captured in a consistent state so restoration produces a working site." },
            { title: "Rapid Restoration", description: "In the event of an incident, restoration is prioritised immediately. For most scenarios, your site is back online and working within one hour." },
            { title: "Pre-Update Backups", description: "Before any significant update is applied, a fresh backup is taken — giving us an instant rollback point if the update causes problems." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Is a backup included in managed hosting?",
              answer: "Yes — daily off-site backups with 30-day retention are included in every managed hosting plan at no additional cost."
            },
            {
              question: "How long does restoration take?",
              answer: "For most scenarios, full site restoration takes 30–60 minutes from the decision to restore. We prioritise restoration immediately and keep you updated throughout."
            },
            {
              question: "What if I accidentally delete some content?",
              answer: "We can perform a database-only restoration to recover deleted posts, pages, orders, or other data — without overwriting more recent changes to other parts of the site."
            },
            {
              question: "Can I request a backup restoration at any time?",
              answer: "Yes — if you've made changes that broke something, or need to recover older content, just get in touch and we'll arrange the restoration. For managed hosting clients, this is included in the plan."
            },
            {
              question: "Do you backup email as well?",
              answer: "Our backup service covers the WordPress site (files and database). Email hosting backup depends on your email provider — we can advise on email backup solutions separately."
            }
          ]}
        />

        <CTABanner
          title="Make sure you have a backup you can actually use"
          description="Backup coverage is included in all our managed hosting and care plans. Get in touch to discuss your current backup situation."
          buttonText="Get Proper Backup Coverage"
          buttonHref="/contact"
          secondaryButtonText="View Managed Hosting"
          secondaryButtonHref="/managed-wordpress-hosting"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Managed WordPress Hosting",
              description: "Backups + security + hosting + support — everything included from £50/month.",
              href: "/managed-wordpress-hosting",
              tag: "Pillar Page"
            },
            {
              title: "WordPress Security Monitoring",
              description: "Active security monitoring — catching incidents before they require a restoration.",
              href: "/wordpress-security",
              tag: "Related"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Regular maintenance including pre-update backups and database optimisation.",
              href: "/wordpress-maintenance",
              tag: "Related"
            },
            {
              title: "Website Support & Care Plans",
              description: "Full care plan details — backup coverage included as standard.",
              href: "/website-support",
              tag: "Service"
            },
            {
              title: "Managed Hosting Shropshire",
              description: "Local managed hosting with backup coverage for Shropshire businesses.",
              href: "/wordpress-hosting-shropshire",
              tag: "Related"
            },
            {
              title: "WordPress Security Essentials",
              description: "What every business website owner needs to know about keeping their site protected.",
              href: "/blog/wordpress-security-essentials",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
