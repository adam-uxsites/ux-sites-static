import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, Shield, RefreshCw, Database, Search, Monitor, Users, FileText, Calendar, Activity } from "lucide-react";

const tasks = {
  daily: [
    { title: "Check site availability", desc: "Verify your site loads from multiple locations. A quick visit to the homepage and one or two key interior pages confirms basic uptime." },
    { title: "Monitor loading speed", desc: "Run a quick speed check. If your site feels noticeably slower than usual, investigate  -  it could indicate a plugin conflict or resource issue." },
    { title: "Check for errors", desc: "Look for broken layouts, missing images, or error messages on key pages. A quick visual scan of your homepage, contact page, and any product pages." },
    { title: "Review security alerts", desc: "Check your security plugin dashboard or hosting control panel for any security notifications, failed login attempts, or file change alerts." },
  ],
  weekly: [
    { title: "Moderate comments", desc: "Approve, reply to, or delete pending comments. Spam comments left unchecked can accumulate and slow down your database." },
    { title: "Check plugin updates", desc: "Review available plugin updates in your WordPress dashboard. Read changelogs for major updates before applying." },
    { title: "Review analytics", desc: "Check Google Analytics or your analytics tool for traffic patterns, top pages, and any unusual drops or spikes that could indicate issues." },
    { title: "Test contact forms", desc: "Submit a test message through your contact forms to confirm they're working and delivering emails correctly." },
  ],
  monthly: [
    { title: "Update WordPress core", desc: "Apply the latest WordPress core update. Always take a full backup first and check compatibility with your active plugins and theme." },
    { title: "Update plugins & themes", desc: "Apply all pending plugin and theme updates. Test key pages and functionality after updating  -  especially forms, e-commerce, and membership areas." },
    { title: "Run a security scan", desc: "Perform a full malware scan using your security plugin. Check for suspicious files, modified core files, and unknown admin users." },
    { title: "Check user accounts", desc: "Audit all user accounts on your site. Remove unused accounts, verify roles and permissions, and ensure former team members no longer have access." },
    { title: "Optimise the database", desc: "Clean up post revisions, auto-drafts, spam comments, and expired transients. Use a plugin like WP-Optimize or WP-Sweep." },
    { title: "Test backups", desc: "Download a backup file and verify it's not corrupted. A backup you can't restore is worse than no backup at all." },
  ],
  quarterly: [
    { title: "Full security audit", desc: "Review all security settings, check file permissions, audit user accounts, review login protection settings, and check SSL certificate validity." },
    { title: "Performance review", desc: "Run Google PageSpeed Insights, check Core Web Vitals, review hosting resource usage, and check for performance regressions." },
    { title: "Plugin audit", desc: "Review all installed plugins. Remove any that are inactive, replace abandoned plugins, and check if any can be consolidated." },
    { title: "Content review", desc: "Review website content for accuracy. Update team pages, check for broken links, refresh case studies, and remove outdated information." },
  ],
  annual: [
    { title: "Site redesign review", desc: "Assess whether your site's design still represents your brand effectively. Consider whether a refresh, redesign, or rebrand is needed." },
    { title: "Hosting review", desc: "Evaluate whether your current hosting plan still meets your needs. Review resource usage, renewal pricing, and whether managed WordPress hosting would be better." },
    { title: "Compliance check", desc: "Review privacy policy, cookie consent, terms of service, and any regulatory compliance requirements (GDPR, accessibility). Update as needed." },
  ],
};

const maintenanceFaqs = [
  {
    question: "Do I really need to do daily maintenance?",
    answer: "Not all daily tasks are necessary for every site. A low-traffic brochure site might only need weekly checks. However, monitoring site availability and speed takes 30 seconds  -  it's quick insurance against problems going unnoticed."
  },
  {
    question: "Can I automate WordPress maintenance?",
    answer: "Some tasks can be automated  -  scheduled backups, security scans, and update notifications. However, automated updates can break sites, and tasks like content review, plugin audits, and analytics review need human judgment. A mix of automation and manual checks works best."
  },
  {
    question: "What happens if I don't maintain my WordPress site?",
    answer: "Unmaintained sites gradually accumulate security vulnerabilities, performance degradation, plugin conflicts, and outdated content. The risk of being hacked increases significantly, and search rankings often suffer from slow loading and broken features."
  },
  {
    question: "Should I hire someone to maintain my WordPress site?",
    answer: "If you'd rather focus on running your business than maintaining your website, yes. A professional WordPress maintenance service handles all these tasks for you  -  updates, security scans, backups, and monitoring  -  plus expert support when issues arise. It's typically far more cost-effective than dealing with a hacked or broken site."
  },
];

export default function WordPressHelpMaintenance() {
  return (
    <>
      <SEO
        title="What Is WordPress Maintenance? Full Checklist | UX Sites"
        description="What WordPress maintenance involves and a complete checklist -  daily, weekly, monthly, quarterly and annual tasks to keep your site secure, fast and reliable."
        url="https://uxsites.co.uk/wordpress-help/wordpress-maintenance/"
        schema={[
          serviceSchema({
            name: "What Is WordPress Maintenance? A Complete Checklist",
            description: "An informational guide explaining what WordPress maintenance involves, covering daily, weekly, monthly, quarterly, and annual tasks to keep a WordPress website healthy, secure, and performing well.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-maintenance/",
            category: "WordPress Maintenance Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "What Is WordPress Maintenance", url: "https://uxsites.co.uk/wordpress-help/wordpress-maintenance/" },
          ]),
          faqSchema(maintenanceFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Free DIY maintenance guide"
          headline="What Is WordPress Maintenance? A Complete Checklist"
          subheadline="WordPress needs regular attention to stay secure, fast and reliable. This guide explains what maintenance involves and gives you a complete daily-to-annual checklist you can follow yourself."
          primaryCta={{ text: "Our Maintenance Service", href: "/wordpress-maintenance/" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help/" }}
          chips={["Daily", "Weekly", "Monthly", "Quarterly", "Annual"]}
        />

        {/* Section: Why maintenance matters */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">What Is WordPress Maintenance?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                WordPress maintenance is the regular work required to keep a WordPress site secure, up to date, and performing well -  updating core, plugins and themes, backing up your data, scanning for security threats, and checking for things going wrong.
              </p>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                It matters because WordPress is the most targeted CMS on the internet, powering 43% of all websites. Left unmaintained, sites accumulate security holes and slow down -  which hurts both your business and your rankings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Security", desc: "Outdated plugins and core files are the #1 cause of WordPress hacks. Regular updates close known vulnerabilities before attackers can exploit them." },
                { icon: Activity, title: "Performance", desc: "Database bloat, unoptimised images, and outdated code gradually slow your site. Monthly maintenance keeps loading times fast." },
                { icon: Clock, title: "Reliability", desc: "Broken forms, missing images, and plugin conflicts erode visitor trust. Regular checks catch issues before your customers do." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-background border border-border rounded-2xl text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Daily tasks */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Calendar size={18} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Daily Tasks</h2>
              <span className="text-sm text-muted-foreground border border-border rounded-md px-2 py-0.5">5 minutes</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.daily.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-card border border-border rounded-xl"
                >
                  <h3 className="font-bold text-sm mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{task.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly tasks */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Calendar size={18} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Weekly Tasks</h2>
              <span className="text-sm text-muted-foreground border border-border rounded-md px-2 py-0.5">10-15 minutes</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.weekly.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-background border border-border rounded-xl"
                >
                  <h3 className="font-bold text-sm mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{task.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly tasks */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Calendar size={18} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Monthly Tasks</h2>
              <span className="text-sm text-muted-foreground border border-border rounded-md px-2 py-0.5">30-45 minutes</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.monthly.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="p-5 bg-card border border-border rounded-xl"
                >
                  <h3 className="font-bold text-sm mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{task.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quarterly tasks */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Calendar size={18} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Quarterly Tasks</h2>
              <span className="text-sm text-muted-foreground border border-border rounded-md px-2 py-0.5">1-2 hours</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.quarterly.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-background border border-border rounded-xl"
                >
                  <h3 className="font-bold text-sm mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{task.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Annual tasks */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Calendar size={18} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Annual Tasks</h2>
              <span className="text-sm text-muted-foreground border border-border rounded-md px-2 py-0.5">2-3 hours</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.annual.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-card border border-border rounded-xl"
                >
                  <h3 className="font-bold text-sm mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{task.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIY or done for you */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">Too Busy to Handle All This Yourself?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our WordPress maintenance service covers every task on this checklist  -  updates, security scans, daily backups, uptime and performance monitoring, plus expert support -  from £50/month.
            </p>
            <Link
              href="/wordpress-maintenance/"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold hover:opacity-90 transition-opacity h-12"
            >
              View the WordPress Maintenance Service
            </Link>
            <div className="mt-10 grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div className="p-6 bg-background border border-border rounded-xl">
                <h3 className="font-bold mb-2">Maintenance Service vs Care Plan</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our maintenance service handles updates, security, backups and monitoring. Our care plans go further -  adding priority support, content changes and SEO work.
                </p>
                <Link href="/wordpress-maintenance/" className="text-primary text-sm font-bold hover:underline">
                  Maintenance service from £50/month →
                </Link>
                <span className="mx-2 text-muted-foreground">·</span>
                <Link href="/wordpress-care-plan/" className="text-primary text-sm font-bold hover:underline">
                  Compare WordPress care plans
                </Link>
              </div>
              <div className="p-6 bg-background border border-border rounded-xl">
                <h3 className="font-bold mb-2">Prefer to Do It Yourself?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Follow the checklist above. Automate what you can  -  backups and security scans -  and set a recurring calendar reminder for the manual tasks.
                </p>
                <Link href="/wordpress-help/wordpress-slow/" className="text-primary text-sm font-bold hover:underline">
                  Speed guide: fix a slow site →
                </Link>
                <span className="mx-2 text-muted-foreground">·</span>
                <Link href="/wordpress-help/wordpress-security/" className="text-primary text-sm font-bold hover:underline">
                  Secure your WordPress site
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Maintenance  -  Common Questions"
          faqs={maintenanceFaqs}
        />

        <CTABanner
          title="Let us handle your WordPress maintenance"
          description="Full-service WordPress maintenance covering updates, security, backups, and performance  -  so you can focus on your business, not your website."
          buttonText="Get Started"
          buttonHref="/contact/"
          secondaryButtonText="View All Guides"
          secondaryButtonHref="/wordpress-help/"
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
              title: "How to Secure a WordPress Website",
              description: "Essential security measures to protect your site.",
              href: "/wordpress-help/wordpress-security/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Professional maintenance handled for you.",
              href: "/wordpress-maintenance/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Hosting with built-in maintenance and support.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}
