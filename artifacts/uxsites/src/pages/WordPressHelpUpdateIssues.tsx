import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AlertTriangle, CheckCircle, ArrowRight, Wrench, Database, Shield, RefreshCw, Eye, Terminal, RotateCcw, HardDrive } from "lucide-react";

const recoverySteps = [
  {
    icon: Eye,
    step: "1",
    title: "Check if it's really broken",
    desc: "Before panicking, check if the issue is real or temporary. Clear your browser cache, try a different browser or device, check your hosting status page for outages, and try accessing wp-admin directly by adding /wp-admin to your URL."
  },
  {
    icon: Terminal,
    step: "2",
    title: "Try accessing wp-admin",
    desc: "If wp-admin still works but your site looks wrong, you may be able to resolve the issue from the dashboard. Deactivate your recently updated plugins one by one, or switch to a default theme (like Twenty Twenty-Four) to isolate the problem."
  },
  {
    icon: Wrench,
    step: "3",
    title: "Enable WordPress debug mode",
    desc: "Add the following to your wp-config.php file to see detailed error messages: define('WP_DEBUG', true); define('WP_DEBUG_DISPLAY', true); This will show exactly which file or function is causing the error."
  },
];

const recoveryOptions = [
  {
    icon: RotateCcw,
    title: "Option A: Rollback (Safest)",
    scenario: "If you can access wp-admin or have FTP/file manager access",
    desc: "The quickest fix. Use a plugin like WP Rollback to revert the specific plugin or theme update that caused the issue. This restores the previous version and gets your site working immediately.",
    when: "Best when: A single plugin or theme update caused the breakage and the previous version was working fine."
  },
  {
    icon: HardDrive,
    title: "Option B: Restore from Backup",
    scenario: "If you can't access wp-admin but have regular backups",
    desc: "Most hosting providers keep daily backups. Restore your site to the most recent backup from before the update. This is a complete rollback  -  everything returns to how it was before the update.",
    when: "Best when: Multiple updates were applied at once, or you can't identify which update caused the issue. Also best if you're not comfortable with manual fixes."
  },
  {
    icon: Terminal,
    title: "Option C: Manual Fixes (Advanced)",
    scenario: "If no backup is available or both options above failed",
    desc: "Access your site via FTP or your hosting file manager. Rename the wp-content/plugins folder to deactivate all plugins simultaneously. If that fixes it, rename it back and reactivate plugins one by one to find the culprit.",
    when: "Best when: You have technical experience, or as a last resort. Manual fixes carry risk of further breakage if done incorrectly."
  },
];

const safeUpdateTips = [
  {
    icon: Database,
    title: "Always backup first",
    desc: "Take a full backup (files and database) before applying any update. Most problems are trivial to fix when you have a clean restore point to go back to."
  },
  {
    icon: Shield,
    title: "Use a staging environment",
    desc: "Test updates on a staging copy of your site first  -  especially for major WordPress core updates, significant plugin version jumps, or e-commerce sites. Most quality hosts offer one-click staging."
  },
  {
    icon: Eye,
    title: "Read changelogs",
    desc: "Before updating a plugin, check its changelog for breaking changes, major feature overhauls, or compatibility notes. If an update mentions 'significant changes' or 'database changes', proceed with extra caution."
  },
  {
    icon: RefreshCw,
    title: "Update one at a time",
    desc: "When multiple updates are available, apply them one at a time and test after each. If something breaks, you'll know exactly which update caused it  -  saving hours of troubleshooting."
  },
  {
    icon: CheckCircle,
    title: "Schedule updates during low traffic",
    desc: "Apply updates during your site's quietest period. Even with a backup in place, an unexpected issue is less impactful at 2am than at 2pm on a Tuesday."
  },
];

const updateFaqs = [
  {
    question: "Why did a WordPress update break my site?",
    answer: "Updates can break sites due to compatibility conflicts between the updated component and other plugins or your theme. PHP version changes, deprecated function removals, and database schema changes in major updates are common causes. Most breaks are caused by outdated plugins that haven't kept pace with WordPress core changes."
  },
  {
    question: "Can I prevent updates from breaking my site?",
    answer: "You can't eliminate the risk entirely, but you can dramatically reduce it. Use a staging site to test updates before applying them to your live site. Always take a backup before updating. Apply updates one at a time rather than in bulk. And keep all your plugins and themes reasonably current  -  the bigger the version gap, the higher the risk of conflicts."
  },
  {
    question: "Should I turn off automatic WordPress updates?",
    answer: "Not entirely. Automatic updates for minor security patches are generally safe and important for security. Consider disabling automatic major updates and handling those manually with prior testing  -  especially if your site uses custom code, premium plugins, or e-commerce functionality."
  },
  {
    question: "How do I roll back a WordPress update?",
    answer: "The easiest method is using a rollback plugin like WP Rollback, which lets you revert a plugin or theme to any previous version with one click. If you don't have a rollback plugin, restore your site from the backup you took before updating (you did take a backup, right?). Your hosting provider may also be able to restore from a recent server-level backup."
  },
];

export default function WordPressHelpUpdateIssues() {
  return (
    <>
      <SEO
        title="WordPress Update Issues  -  Recovery Guide | UX Sites"
        description="Emergency recovery guide for when WordPress updates break your site. Step-by-step rollback, backup restoration, and conflict resolution  -  get your site back online fast."
        url="https://uxsites.co.uk/wordpress-help/wordpress-update-issues/"
        schema={[
          serviceSchema({
            name: "WordPress Update Issues  -  Recovery Guide",
            description: "Emergency recovery guide for when WordPress updates break your site. Covers rollback procedures, backup restoration, manual fixes, and safe update practices.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-update-issues/",
            category: "WordPress Troubleshooting Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "WordPress Update Issues", url: "https://uxsites.co.uk/wordpress-help/wordpress-update-issues/" },
          ]),
          faqSchema(updateFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Emergency recovery guide"
          headline="What to Do If a WordPress Update Breaks Your Site"
          subheadline="WordPress updates can sometimes cause issues. Don't panic  -  most problems can be fixed with the right approach."
          primaryCta={{ text: "Need Emergency Help?", href: "/contact/" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help/" }}
          chips={["Troubleshooting", "8 min read", "Step-by-step", "Emergency"]}
        />

        {/* Emergency recovery steps */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Recovery Steps</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow these steps in order. In most cases, you'll resolve the issue before reaching step three.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recoverySteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-card border border-border rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-sm font-bold text-primary-foreground">{step.step}</span>
                      </div>
                      <Icon size={16} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-base mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recovery strategies */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recovery Strategies</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                If the basic steps don't resolve the issue, choose the recovery approach that best matches your situation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recoveryOptions.map((option, i) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-background border border-border rounded-2xl flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <h3 className="font-bold">{option.title}</h3>
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">{option.scenario}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{option.desc}</p>
                    <div className="text-sm text-muted-foreground bg-card p-3 rounded-lg border border-border/50">
                      <span className="font-semibold text-foreground">â†’ </span>{option.when}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prevention: How to Update Safely</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The best recovery is the one you never need. Follow these practices to minimise the risk of update-related issues.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safeUpdateTips.map((tip, i) => {
                const Icon = tip.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="p-6 bg-card border border-border rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-sm mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency help CTA */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-6 md:p-8 bg-background border border-border rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <AlertTriangle size={22} className="text-yellow-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">Still stuck? We can help.</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you've tried everything and your site is still broken, we provide emergency WordPress recovery services. Most issues resolved within 24 hours.
                </p>
              </div>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity shrink-0"
              >
                Get Emergency Help
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Updates  -  Common Questions"
          faqs={updateFaqs}
        />

        <CTABanner
          title="Worried about your next WordPress update?"
          description="Our maintenance service handles updates safely  -  with backups, staging testing, and expert oversight  -  so you never have to deal with a broken site again."
          buttonText="Get Maintenance Coverage"
          buttonHref="/contact/"
          secondaryButtonText="View All Guides"
          secondaryButtonHref="/wordpress-help/"
        />

        <RelatedPages
          title="More WordPress Help Guides"
          pages={[
            {
              title: "How to Fix a Slow WordPress Website",
              description: "Diagnose and fix performance issues on your WordPress site.",
              href: "/wordpress-help/wordpress-slow/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Checklist",
              description: "Prevent update issues with regular maintenance.",
              href: "/wordpress-help/wordpress-maintenance/",
              tag: "Guide"
            },
            {
              title: "How to Secure a WordPress Website",
              description: "Essential security measures to protect your site.",
              href: "/wordpress-help/wordpress-security/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Professional updates and maintenance handled for you.",
              href: "/wordpress-maintenance/",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}
