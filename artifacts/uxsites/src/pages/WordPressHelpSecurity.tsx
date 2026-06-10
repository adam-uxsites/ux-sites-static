import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, RefreshCw, Key, Database, Lock, Eye, AlertTriangle, Users, Server, FileWarning, CheckCircle, ArrowRight } from "lucide-react";

const essentialMeasures = [
  {
    icon: RefreshCw,
    step: "1",
    title: "Keep Everything Updated",
    desc: "Outdated plugins, themes, and WordPress core are the #1 cause of WordPress hacks. Enable automatic updates for minor releases and apply major updates promptly after testing.",
    items: ["Update WordPress core as soon as stable releases are available", "Update all plugins  -  especially security and compatibility patches", "Update your theme and test that customisations still work", "Check PHP version  -  run 8.0+ for latest security features", "Remove any unused plugins and themes entirely"]
  },
  {
    icon: Key,
    step: "2",
    title: "Use Strong Passwords",
    desc: "Weak or reused passwords are an open door for attackers. Strong credentials are one of the simplest and most effective security measures you can implement.",
    items: ["Use unique passwords of 16+ characters for all WordPress accounts", "Never reuse passwords across different services or websites", "Implement two-factor authentication (2FA) for all admin users", "Remove or rename the default 'admin' username", "Regularly audit user accounts and remove inactive ones"]
  },
  {
    icon: Shield,
    step: "3",
    title: "Install a Security Plugin",
    desc: "A good security plugin provides multiple layers of protection  -  firewall, malware scanning, login protection, and file integrity monitoring  -  in a single solution.",
    items: ["Choose a reputable plugin like Wordfence, Sucuri, or Solid Security", "Enable the web application firewall (WAF) to block malicious traffic", "Set up real-time malware scanning and file change detection", "Configure login throttling to block brute force attacks", "Enable security email alerts for suspicious activity"]
  },
  {
    icon: Database,
    step: "4",
    title: "Regular Backups",
    desc: "A good backup is your last line of defence. If everything else fails, you restore from a clean backup and get back online quickly  -  often within hours.",
    items: ["Automate daily backups to a remote location (cloud storage)", "Keep at least 30 days of backup history", "Test backups monthly  -  verify files can be restored", "Use both database-only and full-site backup types", "Store backups off-site, not on your hosting server"]
  },
];

const advancedMeasures = [
  {
    icon: Lock,
    title: "Change the Login URL",
    desc: "Move wp-admin to a custom URL to instantly eliminate 99% of automated brute force attacks targeting the default login page."
  },
  {
    icon: Eye,
    title: "Disable XML-RPC",
    desc: "XML-RPC is a legacy WordPress feature that's commonly exploited for brute force and DDoS attacks. Disable it unless you specifically need it."
  },
  {
    icon: Shield,
    title: "Security Headers",
    desc: "Implement HTTP security headers (Content-Security-Policy, X-Frame-Options, HSTS, Referrer-Policy) to close browser-level attack vectors."
  },
  {
    icon: Users,
    title: "Limit Login Attempts",
    desc: "Configure login throttling to lock out IP addresses after a defined number of failed attempts  -  preventing brute force attacks from succeeding."
  },
  {
    icon: Server,
    title: "Hosting Security",
    desc: "Choose a host that provides server-level WAF, DDoS protection, malware scanning, and automated backups. Security starts at the server level."
  },
  {
    icon: FileWarning,
    title: "File Permissions",
    desc: "Review and harden WordPress file permissions. Directories should be 755, files should be 644, and wp-config.php should be 600 or 440."
  },
];

const securityFaqs = [
  {
    question: "Is a security plugin enough to protect my WordPress site?",
    answer: "A security plugin is an important component, but it's not sufficient on its own. Updates, strong passwords, backups, and good hosting are equally important. Security works best as a layered approach  -  no single measure provides complete protection."
  },
  {
    question: "How often should I update WordPress?",
    answer: "Minor security updates should be applied as soon as they're released  -  ideally automatically. Major updates can wait a few days for compatibility testing with your plugins and theme. Never skip a security update."
  },
  {
    question: "Do I need two-factor authentication for my WordPress site?",
    answer: "Highly recommended, especially if multiple users have admin access. 2FA adds a second layer of verification that renders stolen passwords useless. For e-commerce or membership sites handling user data, it should be considered essential."
  },
  {
    question: "Can I secure my WordPress site myself, or should I hire a professional?",
    answer: "You can implement the essential measures in this guide yourself  -  updating software, using strong passwords, and installing a security plugin. However, if your site handles sensitive data, generates significant revenue, or you simply don't have time, professional security management provides peace of mind and more comprehensive protection."
  },
];

export default function WordPressHelpSecurity() {
  return (
    <>
      <SEO
        title="How to Secure a WordPress Website | UX Sites"
        description="Essential WordPress security guide covering strong passwords, regular updates, and security plugins. Practical steps to protect your site from hackers."
        url="https://uxsites.co.uk/wordpress-help/wordpress-security/"
        schema={[
          serviceSchema({
            name: "How to Secure a WordPress Website",
            description: "Essential WordPress security guide covering updates, strong passwords, security plugins, backups, and advanced measures to protect your site from hackers.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-security/",
            category: "WordPress Security Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "How to Secure a WordPress Website", url: "https://uxsites.co.uk/wordpress-help/wordpress-security/" },
          ]),
          faqSchema(securityFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Protect your WordPress site"
          headline="How to Secure a WordPress Website"
          subheadline="WordPress powers 40% of websites, making it a prime target. Learn essential security measures to protect your site."
          primaryCta={{ text: "Get Security Coverage", href: "/contact" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help" }}
          chips={["Security", "12 min read", "Step-by-step", "Proven methods"]}
        />

        {/* Essential security measures */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Security Measures</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These four measures form the foundation of WordPress security. Implement all of them to protect against 97% of common attacks.
              </p>
            </div>
            <div className="space-y-10">
              {essentialMeasures.map((measure, i) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 md:p-8 bg-card border border-border rounded-2xl"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-primary shrink-0 flex items-center justify-center">
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-muted-foreground">Step {measure.step}</span>
                          <h3 className="text-lg font-bold">{measure.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{measure.desc}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {measure.items.map((item, j) => (
                            <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle size={12} className="text-primary shrink-0 mt-0.5" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advanced security measures */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Security Measures</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Once the essentials are in place, these additional measures provide deeper protection for sites with higher security requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedMeasures.map((measure, i) => {
                const Icon = measure.icon;
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
                    <h3 className="font-bold text-sm mb-2">{measure.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{measure.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What to do if hacked */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 md:p-10 bg-card border border-border rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <AlertTriangle size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">What to Do If Your Site Gets Hacked</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you discover your WordPress site has been compromised, follow these steps in order:
                  </p>
                </div>
              </div>
              <ol className="space-y-4 mb-8">
                {[
                  { title: "Don't panic  -  and don't ignore it", desc: "Most hacked sites can be recovered. The faster you act, the less damage is done." },
                  { title: "Take your site offline", desc: "Replace your index page with a maintenance page to prevent further damage to visitors and your search reputation." },
                  { title: "Change all passwords immediately", desc: "Change passwords for WordPress admin accounts, database access, FTP/SFTP, and your hosting control panel." },
                  { title: "Restore from a clean backup", desc: "If you have a backup from before the compromise, restore from it. Verify it's clean before going live." },
                  { title: "Scan and clean if no backup exists", desc: "Use a security plugin to scan for malware, or hire a professional cleanup service. Manual cleanup is complex and error-prone." },
                  { title: "Patch the vulnerability", desc: "Identify how the attacker got in  -  usually an outdated plugin or weak password  -  and fix it before restoring the site." },
                  { title: "Contact your hosting provider", desc: "They may be able to help with server-level cleanup and should be informed of any compromise affecting their infrastructure." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-bold text-sm">{item.title}</span>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                If you're on a managed hosting or maintenance plan with us, skip steps 1-6 and contact us immediately. We handle emergency cleanup and restoration as part of the service.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Get Emergency Help
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Security  -  Common Questions"
          faqs={securityFaqs}
        />

        <CTABanner
          title="Get comprehensive WordPress security"
          description="Security monitoring, malware protection, vulnerability management, and rapid incident response  -  all included in our managed hosting and care plans."
          buttonText="Get Protected"
          buttonHref="/contact"
          secondaryButtonText="View All Guides"
          secondaryButtonHref="/wordpress-help"
        />

        <RelatedPages
          title="More WordPress Help Guides"
          pages={[
            {
              title: "Why WordPress Websites Get Hacked",
              description: "Understanding common attack vectors and how to prevent them.",
              href: "/wordpress-help/wordpress-hacked",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Checklist",
              description: "Keep your site secure with regular maintenance tasks.",
              href: "/wordpress-help/wordpress-maintenance",
              tag: "Guide"
            },
            {
              title: "WordPress Security Monitoring",
              description: "Active protection against hacks, malware, and vulnerabilities.",
              href: "/wordpress-security",
              tag: "Service"
            },
            {
              title: "What to Do If a WordPress Update Breaks Your Site",
              description: "Emergency recovery guide for broken sites.",
              href: "/wordpress-help/wordpress-update-issues",
              tag: "Guide"
            },
          ]}
        />
      </main>
    </>
  );
}
