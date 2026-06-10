import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { StatsBar } from "@/components/blocks/StatsBar";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, AlertTriangle, Key, Lock, FileWarning, Bug, Server, DollarSign, BadgeAlert, Users, Gavel, Database } from "lucide-react";

const attackVectors = [
  {
    icon: FileWarning,
    title: "Outdated Software Vulnerabilities",
    stat: "60% of hacks",
    desc: "Unpatched plugins, themes, and WordPress core are the #1 entry point for attackers. Developers release security patches when vulnerabilities are discovered  -  but only sites that apply these updates are protected.",
    risk: "Any plugin or theme that hasn't been updated in the last 6 months is a potential security risk."
  },
  {
    icon: Key,
    title: "Weak Passwords & Brute Force",
    stat: "30% of breaches",
    desc: "Automated bots try thousands of username and password combinations per second against WordPress login pages. Weak passwords like 'admin123' or 'password' can be cracked in seconds.",
    risk: "Default admin usernames and reused passwords from other services dramatically increase risk."
  },
  {
    icon: Shield,
    title: "Malware-Infected Plugins & Themes",
    stat: "Common vector",
    desc: "Attackers compromise popular plugins or themes and inject malicious code into legitimate-looking updates. Free nulled themes from untrusted sources are particularly dangerous.",
    risk: "Even well-known plugins have been compromised in supply chain attacks  -  file integrity monitoring is essential."
  },
  {
    icon: Database,
    title: "SQL Injection",
    stat: "23% of web attacks",
    desc: "Attackers inject malicious SQL queries through input fields (forms, search bars, URL parameters) to access, modify, or delete database contents  -  including user data and passwords.",
    risk: "Vulnerable plugins with poor input sanitisation are the most common vector for SQLi attacks on WordPress."
  },
  {
    icon: Bug,
    title: "Cross-Site Scripting (XSS)",
    stat: "Widespread risk",
    desc: "Attackers inject malicious JavaScript into your site's pages. When visitors load the page, the script executes  -  potentially stealing session cookies, redirecting users, or defacing content.",
    risk: "XSS vulnerabilities in plugins and themes are among the most commonly reported WordPress security issues."
  },
  {
    icon: Server,
    title: "DDoS Attacks",
    stat: "Growing threat",
    desc: "Distributed denial-of-service attacks flood your server with traffic, making your site unavailable to legitimate visitors. While often not targeted at small sites, weak hosting infrastructure amplifies the impact.",
    risk: "Without proper server-level protection, even a moderate DDoS can take a small business site offline for hours."
  },
];

const contributingFactors = [
  "Shared hosting environments where other sites on the same server are compromised",
  "Outdated PHP versions that no longer receive security patches",
  "Overly permissive file permissions (e.g., 777) set by poorly coded plugins",
  "Unused plugins and themes left installed and inactive but still present on the server",
  "XML-RPC protocol enabled, allowing brute force attacks to bypass login protection",
  "Contact forms and comment sections without proper spam protection or input validation"
];

const breachCosts = [
  {
    icon: DollarSign,
    title: "Financial Costs",
    items: ["Emergency cleanup fees (Â£200-Â£2,000+)", "Lost revenue during downtime", "Potential ransom payments for ransomware", "SSL certificate reissuance costs", "SEO recovery campaigns to regain rankings"]
  },
  {
    icon: BadgeAlert,
    title: "Reputation Damage",
    items: ["Google blacklisting & 'Deceptive site' warnings", "Customer trust erosion", "Negative SEO from injected spam content", "Email blacklisting if used for spam relay", "Social media account compromises"]
  },
  {
    icon: Gavel,
    title: "Legal & Compliance",
    items: ["GDPR breach notification requirements", "Potential ICO fines for data breaches", "Legal liability for compromised customer data", "PCI DSS non-compliance for e-commerce sites", "Contractual penalties for service agreements"]
  },
];

const hackedFaqs = [
  {
    question: "Do hackers target small WordPress sites?",
    answer: "Yes  -  but not in the way you might think. Automated bots scan every WordPress site on the internet for known vulnerabilities, regardless of size. Your site gets attacked not because of who you are, but because it runs WordPress. Small sites are often easier targets because they tend to have weaker security."
  },
  {
    question: "How would I know if my site has been hacked?",
    answer: "Signs include: visitors redirected to unfamiliar websites, Google showing 'Deceptive site ahead' warnings, new admin user accounts you didn't create, unexplained spam content appearing in search results, unusually slow loading, or your hosting provider suspending your account. Some infections run silently for months."
  },
  {
    question: "Can a hacked WordPress site be recovered?",
    answer: "In most cases, yes. Recovery involves identifying the breach method, removing malicious code, restoring clean files, patching vulnerabilities, and resetting credentials. Professional cleanup services can restore most sites within 24-48 hours, provided a clean backup exists."
  },
  {
    question: "Can I prevent my WordPress site from being hacked?",
    answer: "You can dramatically reduce the risk  -  97% of WordPress hacks are preventable with proper maintenance. Regular updates, strong passwords, security plugins, and good hosting eliminate the vast majority of attack vectors. No site is 100% unhackable, but proper security makes you a much harder target."
  },
];

export default function WordPressHelpHacked() {
  return (
    <>
      <SEO
        title="Why WordPress Websites Get Hacked | UX Sites"
        description="Why do WordPress sites get hacked? Learn common attack vectors - outdated software, weak passwords, vulnerable plugins - and how to protect your site."
        url="https://uxsites.co.uk/wordpress-help/wordpress-hacked/"
        schema={[
          serviceSchema({
            name: "Why WordPress Websites Get Hacked",
            description: "Detailed guide on common WordPress attack vectors  -  outdated software, weak passwords, vulnerable plugins, SQL injection, XSS, and DDoS attacks  -  with prevention strategies.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-hacked/",
            category: "WordPress Security Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "Why WordPress Websites Get Hacked", url: "https://uxsites.co.uk/wordpress-help/wordpress-hacked/" },
          ]),
          faqSchema(hackedFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Understanding the threats"
          headline="Why WordPress Websites Get Hacked"
          subheadline="WordPress powers 40% of websites, making it a prime target. Understanding the common attack vectors helps you protect your site."
          primaryCta={{ text: "Get Security Help", href: "/contact/" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help/" }}
          chips={["Security", "Prevention", "Attack Vectors", "Risk Assessment"]}
        />

        <StatsBar
          stats={[
            { number: "60%", label: "From outdated software", sub: "Unpatched vulnerabilities" },
            { number: "90K+", label: "Attacks per minute", sub: "Targeting WordPress" },
            { number: "97%", label: "Are preventable", sub: "With proper maintenance" },
            { number: "30K+", label: "New threats daily", sub: "Emerging attack methods" },
          ]}
        />

        {/* Most common attack vectors */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Most Common WordPress Attack Vectors</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding how WordPress sites get hacked is the first step to preventing it. These are the most common methods attackers use.
              </p>
            </div>
            <div className="space-y-6">
              {attackVectors.map((vector, i) => {
                const Icon = vector.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-6 md:p-8 bg-card border border-border rounded-2xl"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold">{vector.title}</h3>
                          <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 border border-yellow-600/30 dark:border-yellow-400/30 rounded-md px-2 py-0.5">
                            {vector.stat}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{vector.desc}</p>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground bg-background p-3 rounded-lg border border-border/50">
                          <AlertTriangle size={12} className="text-yellow-500 shrink-0 mt-0.5" />
                          {vector.risk}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contributing factors */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contributing Factors</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Beyond specific attack vectors, these environmental factors significantly increase your WordPress site's vulnerability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {contributingFactors.map((factor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-background border border-border rounded-xl"
                >
                  <AlertTriangle size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{factor}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost of security breaches */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Cost of Security Breaches</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A WordPress hack isn't just a technical problem  -  it has real business consequences that extend far beyond the initial cleanup.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {breachCosts.map((category, i) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-card border border-border rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">â€¢</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Prevention summary */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 md:p-10 bg-background border border-border rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">The Good News: 97% of Hacks Are Preventable</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Almost every WordPress hack can be prevented with a combination of:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {[
                  "Regular WordPress core, plugin, and theme updates",
                  "Strong, unique passwords with two-factor authentication",
                  "A reputable security plugin with firewall and malware scanning",
                  "Daily automated backups stored off-site",
                  "Quality managed WordPress hosting with server-level security",
                  "Regular user account audits and permission reviews",
                  "Removal of unused plugins and themes",
                  "Security monitoring and file integrity checks"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold mt-0.5">âœ“</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Security isn't a one-time setup  -  it's an ongoing practice. Prevention is always cheaper, faster, and less stressful than dealing with a compromised site.
              </p>
              <Link
                href="/wordpress-help/wordpress-security/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Read Our WordPress Security Guide â†’
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Security  -  Common Questions"
          faqs={hackedFaqs}
        />

        <CTABanner
          title="Worried about your WordPress site's security?"
          description="We provide active security monitoring, vulnerability patching, and malware protection  -  so you don't have to worry about being hacked."
          buttonText="Get Protected"
          buttonHref="/contact/"
          secondaryButtonText="View All Guides"
          secondaryButtonHref="/wordpress-help/"
        />

        <RelatedPages
          title="More WordPress Help Guides"
          pages={[
            {
              title: "How to Secure a WordPress Website",
              description: "Essential security measures to protect your site from hackers.",
              href: "/wordpress-help/wordpress-security/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Checklist",
              description: "Keep your site secure with regular maintenance tasks.",
              href: "/wordpress-help/wordpress-maintenance/",
              tag: "Guide"
            },
            {
              title: "WordPress Security Monitoring",
              description: "Active protection against hacks, malware, and vulnerabilities.",
              href: "/wordpress-security/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Secure hosting with built-in security monitoring.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}
