import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AlertTriangle, Wifi, Server, Globe, Terminal, MonitorOff, Database, Ban, ShieldAlert, CheckCircle, Check } from "lucide-react";

const errors = [
  {
    code: "ERR_CONNECTION_TIMED_OUT",
    icon: Wifi,
    what: "Your browser tried to connect to the website server, but the server didn't respond in time. The connection attempt timed out after waiting for a response.",
    causes: "Overloaded hosting server sharing resources with too many other sites, a traffic spike overwhelming the server, faulty network configuration, or the server being down for maintenance.",
    fixes: "Check if other sites on the same hosting account are also down  -  if so, contact your hosting provider. If it's just your site, try restarting your server from your hosting control panel. A temporary traffic spike might resolve on its own. For recurring timeouts, upgrade to a plan with dedicated resources."
  },
  {
    code: "500 Internal Server Error",
    icon: Server,
    what: "A generic error message indicating something went wrong on the server side, but the server couldn't be more specific about what.",
    causes: "A corrupt .htaccess file, a PHP memory limit that's too low, a plugin or theme conflict after an update, or corrupted WordPress core files.",
    fixes: "Rename your .htaccess file (via FTP or cPanel) to disable it  -  WordPress will generate a fresh one. If that doesn't work, temporarily disable all plugins by renaming the plugins folder. Switch to a default WordPress theme (Twenty Twenty-Four) via FTP. If none of these work, increase PHP memory limit in wp-config.php."
  },
  {
    code: "DNS_PROBE_FINISHED_NXDOMAIN",
    icon: Globe,
    what: "The domain name you're trying to reach cannot be found in the DNS system. It's like dialling a phone number that isn't assigned to anyone.",
    causes: "The domain has expired, DNS records were changed recently and haven't propagated, the domain is misconfigured in your hosting control panel, or the nameservers are pointing to the wrong place.",
    fixes: "Check your domain registration status immediately  -  an expired domain is the most common cause. Use a DNS propagation checker to see if recent changes are still spreading. Verify nameserver settings are correct in your domain registrar. If you've recently changed hosts, DNS can take up to 48 hours to fully propagate."
  },
  {
    code: "Critical WordPress Error",
    icon: Terminal,
    what: "A fatal PHP error has occurred that prevented WordPress from loading. WordPress 5.2+ shows this message instead of the old white screen, with an email sent to the admin address with more detail.",
    causes: "A plugin or theme update that introduced incompatible PHP code, a PHP version upgrade that broke older code, or memory exhaustion caused by a misbehaving plugin.",
    fixes: "Check the email WordPress sent to your admin address  -  it will tell you which plugin or theme caused the error. Access your site via FTP and either rename the offending plugin folder or switch to a default theme. Enable WP_DEBUG in wp-config.php to see the actual PHP error message."
  },
  {
    code: "White Screen of Death",
    icon: MonitorOff,
    what: "A completely blank white page with no error message or content. The page loads but nothing is displayed  -  no header, no footer, nothing at all.",
    causes: "PHP memory exhaustion (most common), a PHP error that crashes output before anything is rendered, a corrupted plugin or theme, or a fatal PHP error with error reporting disabled.",
    fixes: "Increase PHP memory limit in wp-config.php by adding define('WP_MEMORY_LIMIT', '256M');. Disable all plugins by renaming the /wp-content/plugins/ folder via FTP. Switch to a default theme by renaming your active theme folder. Clear your browser and server cache."
  },
  {
    code: "Error Establishing Database Connection",
    icon: Database,
    what: "WordPress cannot connect to the MySQL database that stores all your content, settings, and user data. Without the database, WordPress cannot function.",
    causes: "Incorrect database credentials in wp-config.php, the database server is down or overloaded, the database has been corrupted, or your hosting account's database user permissions were changed.",
    fixes: "Double-check database name, username, password, and host in wp-config.php. Log into your hosting control panel and verify the database exists. Repair the database by adding define('WP_ALLOW_REPAIR', true); to wp-config.php and visiting /wp-admin/maint/repair.php. Contact your host if the database server itself is down."
  },
  {
    code: "429 Too Many Requests",
    icon: Ban,
    what: "Your IP address has been temporarily blocked because it sent too many requests to the server in a short period. This is a rate-limiting measure to prevent abuse.",
    causes: "A plugin or security tool with overly aggressive rate limiting configured, a misconfigured caching plugin, repeated login attempts triggering brute force protection, or a web application firewall blocking legitimate traffic.",
    fixes: "Wait 5-10 minutes and try again  -  most rate limits reset automatically. If you're locked out of wp-admin, access your site via FTP and temporarily disable security plugins. Check your security plugin settings and increase rate limit thresholds. Whitelist your IP address in your security plugin or WAF if needed."
  },
  {
    code: "403 Forbidden Error",
    icon: ShieldAlert,
    what: "The server understood your request but is refusing to fulfil it. You don't have permission to access the requested resource.",
    causes: "Incorrect file permissions set on WordPress files or folders, a security plugin blocking access too aggressively, a corrupted .htaccess file with restrictive rules, or the server's index file is missing.",
    fixes: "Check file permissions  -  folders should be 755, files should be 644 (use FTP to verify and correct). Rename .htaccess to disable it temporarily. Deactivate security plugins via FTP and check if access is restored. Verify an index.php or index.html file exists in the directory."
  }
];

const preflight = [
  "Clear your browser cache and cookies  -  this solves more issues than you'd think",
  "Try accessing your site from a different browser or device",
  "Try accessing your site from a different internet connection (mobile data vs WiFi)",
  "Check your hosting provider's status page for known outages",
  "Check your domain registration hasn't expired",
  "Verify your SSL certificate hasn't expired",
  "Restart your router if you suspect a local network issue"
];

export default function CommonWordPressErrors() {
  return (
    <>
      <SEO
        title="Common WordPress Errors and How to Fix Them | UX Sites"
        description="Common WordPress errors explained in plain English with step-by-step fixes. From white screen of death to database connection issues  -  solve them yourself or let us handle it."
        url="https://uxsites.co.uk/common-wordpress-errors"
        schema={[
          serviceSchema({
            name: "Common WordPress Errors Guide",
            description: "A comprehensive guide to diagnosing and fixing the most common WordPress errors, including white screen of death, database connection errors, and internal server errors.",
            url: "https://uxsites.co.uk/common-wordpress-errors",
            category: "WordPress Support",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Common WordPress Errors", url: "https://uxsites.co.uk/common-wordpress-errors" },
          ]),
          faqSchema(errors.map(e => ({
            question: `How to fix ${e.code}`,
            answer: `${e.what} ${e.fixes}`
          }))),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Quick fixes for common issues"
          headline="Common WordPress Errors and How to Fix Them"
          subheadline="When a WordPress site breaks, it can be stressful. The good news is most issues fall into common categories. This guide explains the most common WordPress errors in plain English."
          primaryCta={{ text: "Need Help Right Now?", href: "/contact" }}
          secondaryCta={{ text: "View Managed Hosting", href: "/managed-wordpress-hosting" }}
          chips={["Troubleshooting", "DIY Fixes", "Error Codes", "WordPress Help", "Server Issues"]}
        />

        {/* Before You Start */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 bg-background border border-border rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={24} className="text-primary" />
                <h2 className="text-2xl font-bold">Before You Start Troubleshooting</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Before diving into specific error fixes, run through these basic checks. They take two minutes and resolve a surprising number of issues:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {preflight.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" strokeWidth={3} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Error cards */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The 8 Most Common WordPress Errors</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Each error explained with what it actually means, what causes it, and the exact steps to fix it.
              </p>
            </div>
            <div className="space-y-8">
              {errors.map((error, i) => {
                const Icon = error.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden"
                  >
                    <div className="border-b border-border bg-muted/30 px-8 py-5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <code className="text-sm font-mono font-bold text-foreground">{error.code}</code>
                      </div>
                    </div>
                    <div className="p-8 grid md:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle size={15} className="text-yellow-500" />
                          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">What It Means</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{error.what}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Server size={15} className="text-muted-foreground" />
                          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Common Causes</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{error.causes}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle size={15} className="text-green-500" />
                          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Fix Steps</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{error.fixes}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* When to call for help */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">When DIY Fixes Aren't Enough</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                If you've tried the steps above and the error persists, or if you're not comfortable making these changes yourself, that's what we're here for. Managed hosting clients never deal with this stuff alone  -  we handle it.
              </p>
              <Link
                href="/managed-wordpress-hosting"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold hover:opacity-90 transition-opacity h-12"
              >
                Learn About Managed Hosting
              </Link>
            </div>
          </div>
        </section>

        <CTABanner
          title="Get WordPress support without the stress"
          description="Managed hosting clients never deal with these errors alone. We monitor, maintain, and fix issues before you even know they exist."
          buttonText="Get Managed Hosting"
          buttonHref="/managed-wordpress-hosting"
          secondaryButtonText="Contact Us"
          secondaryButtonHref="/contact"
        />

        <RelatedPages
          title="More WordPress Help & Guides"
          pages={[
            {
              title: "Managed WordPress Hosting",
              description: "Never deal with server errors alone  -  we handle everything from monitoring to fixes.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Regular updates and maintenance to prevent errors before they happen.",
              href: "/wordpress-maintenance",
              tag: "Service"
            },
            {
              title: "Website Support & Care Plans",
              description: "Ongoing support and maintenance to keep your WordPress site healthy.",
              href: "/website-support",
              tag: "Service"
            },
            {
              title: "WordPress Backup & Recovery",
              description: "Daily backups mean you can always restore to a working state.",
              href: "/wordpress-backup-recovery",
              tag: "Related"
            },
            {
              title: "WordPress Security Monitoring",
              description: "Proactive security to prevent errors caused by compromised sites.",
              href: "/wordpress-security",
              tag: "Related"
            },
            {
              title: "WordPress Hosting Shropshire",
              description: "Local managed hosting with expert support for Shropshire businesses.",
              href: "/wordpress-hosting-shropshire",
              tag: "Local"
            }
          ]}
        />
      </main>
    </>
  );
}
