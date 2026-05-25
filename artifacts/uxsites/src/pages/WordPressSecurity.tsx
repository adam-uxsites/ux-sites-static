import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { StatsBar } from "@/components/blocks/StatsBar";
import { serviceSchema, breadcrumbSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, AlertTriangle, Lock, Eye } from "lucide-react";

export default function WordPressSecurity() {
  return (
    <>
      <SEO
        title="WordPress Security Monitoring & Protection | UX Sites"
        description="Keep your WordPress site safe with active security monitoring, malware protection, and vulnerability management. Continuous protection for UK businesses by security-aware experts."
        url="https://uxsites.co.uk/wordpress-security"
        schema={[
          serviceSchema({
            name: "WordPress Security Monitoring & Protection",
            description: "Active WordPress security monitoring including malware scanning, vulnerability patching, firewall configuration, login protection, and SSL management. Included in all managed hosting plans.",
            url: "https://uxsites.co.uk/wordpress-security",
            category: "WordPress Security",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting" },
            { name: "WordPress Security", url: "https://uxsites.co.uk/wordpress-security" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Your website is a target  -  let's protect it properly"
          headline="WordPress Security Monitoring & Malware Protection"
          subheadline="WordPress powers 43% of the web, which makes it the most targeted CMS on the internet. We provide continuous security monitoring, vulnerability management, and rapid malware response  -  so your site stays protected around the clock."
          primaryCta={{ text: "Get Security Coverage", href: "/contact" }}
          secondaryCta={{ text: "View Managed Hosting", href: "/managed-wordpress-hosting" }}
          chips={["24/7 Monitoring", "Malware Scanning", "Brute Force Protection", "Vulnerability Management", "Rapid Response"]}
        />

        <StatsBar
          stats={[
            { number: "43%", label: "Of All Websites", sub: "Run on WordPress globally" },
            { number: "90,000+", label: "Attacks Per Minute", sub: "Targeting WordPress sites" },
            { number: "97%", label: "Preventable Hacks", sub: "With proper maintenance" },
            { number: "24/7", label: "Our Monitoring", sub: "Continuous active scanning" }
          ]}
        />

        {/* Threat landscape */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The WordPress Security Reality</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  WordPress's popularity is precisely what makes it a target. Automated bots scan the entire internet continuously, looking for known vulnerabilities in specific plugin versions, outdated WordPress installs, and weak login credentials.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The threat isn't theoretical  -  it's happening to real small business websites every day. The consequences range from spam injections that destroy search rankings, to customer data breaches, to ransomware that encrypts your files.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  The good news: the vast majority of successful attacks are entirely preventable with proper, ongoing security practices. The key word is <em>ongoing</em>  -  security isn't a one-time setup job.
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  For a step-by-step guide to securing your site, read our{" "}
                  <a href="/blog/wordpress-security-guide" className="text-primary font-bold hover:underline">WordPress security guide for small businesses</a>.
                </p>
                <Link
                  href="/wordpress-maintenance"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  See our WordPress maintenance service →
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: Lock,
                    title: "Outdated Plugins  -  #1 Attack Vector",
                    desc: "Plugin vulnerabilities are the most exploited entry point. Developers release security patches regularly  -  but only if you apply them. Each update you skip is a known, public vulnerability."
                  },
                  {
                    icon: Eye,
                    title: "Brute Force Login Attacks",
                    desc: "Automated bots attempt thousands of username/password combinations per hour against WordPress login pages. Without protection, it's only a matter of time before they succeed."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Supply Chain Attacks",
                    desc: "Malicious actors compromise popular plugins and inject malware into updates. This affects sites running 'legitimate' plugins  -  making plugin monitoring and file integrity checking essential."
                  },
                  {
                    icon: Shield,
                    title: "Credential Stuffing",
                    desc: "Passwords compromised in data breaches elsewhere are tested against WordPress admin accounts. Password reuse across services is a major risk vector for business website accounts."
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4 p-6 bg-card border border-border rounded-2xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Our Security Approach  -  Active, Not Passive</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Most "security" for WordPress sites is reactive  -  you find out about a problem when something breaks or Google flags it. We operate proactively: monitoring, hardening, and responding before damage occurs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Continuous Malware Scanning",
                  description: "Automated scanning of WordPress files against known malware signatures  -  running continuously, not weekly. File changes are detected within minutes."
                },
                {
                  title: "Login Security Hardening",
                  description: "Brute force protection with IP lockout after failed attempts, two-factor authentication recommendation, custom login URL to eliminate automated attack traffic."
                },
                {
                  title: "Vulnerability Monitoring",
                  description: "We track newly discovered vulnerabilities in WordPress plugins and themes via security databases  -  and apply patches before attackers can exploit them."
                },
                {
                  title: "File Integrity Monitoring",
                  description: "Core WordPress files are monitored against known-good checksums. Any unauthorised modification to system files triggers an immediate alert."
                },
                {
                  title: "Web Application Firewall",
                  description: "A WAF filters malicious traffic before it reaches your WordPress install  -  blocking exploit attempts, SQL injection, and cross-site scripting attacks."
                },
                {
                  title: "Security Headers Configuration",
                  description: "HTTP security headers (CSP, X-Frame-Options, HSTS, Referrer-Policy) properly configured  -  closing browser-level attack vectors."
                },
                {
                  title: "SSL Certificate Monitoring",
                  description: "SSL certificates monitored and auto-renewed well before expiry. Certificate transparency logs monitored for unauthorised certificate issuance."
                },
                {
                  title: "Spam & Content Injection",
                  description: "Monitoring for injected spam content in pages and posts  -  a common result of low-level infections that can devastate search rankings without visible symptoms."
                },
                {
                  title: "Malware Removal  -  Included",
                  description: "If our monitoring identifies a security incident on a managed site, cleanup and restoration is included. No emergency call-out fees."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-6 bg-background border border-border rounded-2xl"
                >
                  <h3 className="font-bold mb-3 text-base">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* If you've been hacked */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-10 bg-card border border-border rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Signs Your Site May Already Be Compromised</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Many WordPress infections run silently for months  -  affecting your search rankings and potentially spreading to visitors without obvious visible symptoms. Watch for:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {[
                  "Visitors redirected to unfamiliar or adult websites",
                  "Google Search Console security warnings",
                  "Browser 'Deceptive site ahead' warnings",
                  "Unexpected admin user accounts in WordPress",
                  "Google showing spam content for your site in search results",
                  "Hosting provider suspending your account",
                  "Unusual outbound email from your domain",
                  "Site loading significantly slower than usual",
                  "Unfamiliar files appearing in your WordPress installation",
                  "Customers reporting spam emails appearing to be from you"
                ].map((sign, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertTriangle size={13} className="text-yellow-500 shrink-0 mt-0.5" />
                    {sign}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                If you're seeing any of these, treat it as urgent. A compromised site can be cleaned, but speed matters  -  the longer an infection runs, the more damage it causes to your search presence and reputation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Get Emergency Security Help
              </Link>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Security as Part of Managed Hosting"
          subtitle="Security monitoring is included in every managed hosting and care plan  -  not sold as a separate add-on."
          benefits={[
            { title: "No Extra Security Charges", description: "Everything described here is included in our managed hosting and care plans. Security isn't an optional extra  -  it's built into the service." },
            { title: "Malware Removal Included", description: "If your site on our managed hosting is ever compromised, cleanup and restoration is included. No surprise invoices for security incidents." },
            { title: "Rapid Response", description: "Security alerts are responded to immediately  -  not on a 48-hour support ticket cycle. You're dealing with someone who knows your site." },
            { title: "Documented Security Posture", description: "Monthly reports include security scan results and any incidents detected  -  giving you a clear record of your site's security health over time." },
            { title: "Proactive Hardening", description: "New clients' sites are security-reviewed and hardened on onboarding  -  not just monitored but actively improved from day one." },
            { title: "GDPR Considerations", description: "For businesses handling customer data, we discuss appropriate security measures and can help with documentation of technical security controls." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "My site is small  -  do hackers really care about it?",
              answer: "Yes  -  but not in the way you might think. Hackers rarely target small businesses specifically. Automated bots scan every WordPress site on the internet for known vulnerabilities, regardless of size. Your site gets attacked not because of who you are, but because it runs WordPress."
            },
            {
              question: "I have a security plugin installed  -  am I covered?",
              answer: "Security plugins provide some protection, but they require proper configuration and ongoing attention. A poorly configured security plugin, or one that hasn't been updated, provides false confidence. Real security requires monitoring, updates, and active management."
            },
            {
              question: "What if my site gets hacked while on your managed hosting?",
              answer: "Malware cleanup and restoration from a clean backup is included at no additional cost for managed hosting clients. We deal with it immediately and restore your site to a clean state."
            },
            {
              question: "Can you review the security of an existing site?",
              answer: "Yes  -  we offer a security audit as part of our onboarding process for new clients. We review the current security posture, identify vulnerabilities, and provide a clear remediation plan."
            },
            {
              question: "Do I need to do anything differently once you're monitoring my site?",
              answer: "Not for security specifically  -  that's our job. We'd advise you to use strong, unique passwords for your WordPress admin account and any email accounts, and enable two-factor authentication where possible. Beyond that, leave the rest to us."
            }
          ]}
        />

        <CTABanner
          title="Get your WordPress site properly protected"
          description="Security monitoring, malware protection, and vulnerability management  -  all included in our managed hosting and care plans."
          buttonText="Get Protected"
          buttonHref="/contact"
          secondaryButtonText="View Managed Hosting"
          secondaryButtonHref="/managed-wordpress-hosting"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Managed WordPress Hosting",
              description: "Security monitoring included  -  plus hosting, backups, updates, and support from £50/month.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "WordPress Backup & Recovery",
              description: "Daily off-site backups  -  your last line of defence if a security incident damages your site.",
              href: "/wordpress-backup-recovery",
              tag: "Related"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Keeping plugins and WordPress core updated  -  the primary defence against vulnerabilities.",
              href: "/wordpress-maintenance",
              tag: "Related"
            },
            {
              title: "Website Support & Care Plans",
              description: "Comprehensive ongoing care including security, updates, monitoring, and support.",
              href: "/website-support",
              tag: "Service"
            },
            {
              title: "WordPress Security Essentials",
              description: "What every business website owner needs to know about WordPress security.",
              href: "/blog/wordpress-security-essentials",
              tag: "Blog"
            },
            {
              title: "Managed Hosting Shropshire",
              description: "Local expert security monitoring for Shropshire businesses.",
              href: "/wordpress-hosting-shropshire",
              tag: "Related"
            }
          ]}
        />
      </main>
    </>
  );
}
