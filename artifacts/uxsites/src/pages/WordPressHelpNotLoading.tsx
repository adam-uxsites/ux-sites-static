import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Wifi, Server, Globe, Database, Wrench, Terminal, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const commonCauses = [
  {
    icon: Wifi,
    title: "DNS Issues",
    desc: "If your domain no longer resolves to the right server, the site won't load for anyone. Common causes include expired domains, changed nameservers and recent DNS edits -  and propagation can take hours."
  },
  {
    icon: Server,
    title: "Server Outage",
    desc: "Your host's servers may be down, overloaded or suspended -  often due to exceeding resources, unpaid invoices or a compromised account. Check your hosting status page and control panel."
  },
  {
    icon: Globe,
    title: "SSL Certificate Problems",
    desc: "An expired or misconfigured SSL certificate makes browsers block your site with a security warning. This is a surprisingly common reason a site suddenly stops loading."
  },
  {
    icon: Database,
    title: "Database Connection Errors",
    desc: "If WordPress can't reach its database you'll see 'Error establishing a database connection' -  caused by wrong credentials, a crashed database, or the server running out of resources."
  },
  {
    icon: Wrench,
    title: "Plugin or Theme Conflict",
    desc: "A recent plugin or theme update can clash with another and cause a fatal error or a white screen. Plugin conflicts are one of the most common reasons sites stop loading after an update."
  },
  {
    icon: Terminal,
    title: "PHP Fatal Error",
    desc: "A coding error in a plugin or theme, or a PHP version mismatch, throws a fatal error that stops the page rendering. WordPress debug mode reveals exactly what's failing."
  },
];

const firstSteps = [
  "Load the site in a private or incognito window to bypass your own cache",
  "Try it on another device, or on mobile data rather than your Wi-Fi",
  "Visit the site with both https:// and http:// to isolate an SSL problem",
  "Check your hosting provider's status page and your account emails",
  "Look at the error logs in your hosting control panel",
  "Search the exact error message online -  someone has fixed it before"
];

const fixSteps = [
  {
    step: "1",
    title: "Confirm Whether the Site Is Down for Everyone",
    desc: "Test in a private browser window and ask someone on a different network to try. If it loads for them, the problem is local to you -  try clearing your DNS cache and restarting your router."
  },
  {
    step: "2",
    title: "Check Your Hosting Control Panel",
    desc: "Log in to your hosting account and look for suspension notices, resource limits, overdue invoices or server status messages. A suspended account needs resolving with your host before anything else."
  },
  {
    step: "3",
    title: "Check DNS and SSL",
    desc: "Verify your domain still points at your host's nameservers and that your SSL certificate hasn't expired. Renew an expired certificate or fix the DNS records and allow time for propagation."
  },
  {
    step: "4",
    title: "Enable WordPress Debug Mode",
    desc: "Add WP_DEBUG to wp-config.php so errors are displayed instead of a blank screen. The message usually names the plugin, theme or file causing the problem."
  },
  {
    step: "5",
    title: "Disable Plugins That Might Conflict",
    desc: "If a recent update broke things, rename the plugins folder to plugins-backup via FTP to disable everything. If the site loads, reactivate plugins one by one to find the culprit."
  },
  {
    step: "6",
    title: "Switch to a Default Theme Temporarily",
    desc: "Rename your theme folder in wp-content/themes so WordPress falls back to a default theme. If the site comes back, your theme is the problem and needs an update or a fix."
  },
  {
    step: "7",
    title: "Restore From a Backup",
    desc: "If you can't find the cause quickly, restoring a recent backup gets you back online in minutes. Regular backups with a tested restore are the only guarantee against long downtime."
  },
];

const notLoadingFaqs = [
  {
    question: "How do I know if my WordPress site is down for everyone or just me?",
    answer: "Load the site in a private or incognito window, try it on mobile data rather than Wi-Fi, and ask a friend on a different network. If it loads there, the problem is likely your connection, DNS cache or device -  not the site itself."
  },
  {
    question: "What is the white screen of death in WordPress?",
    answer: "A blank white page with no error message, usually caused by a PHP fatal error from a plugin, theme or memory limit. Enable WP_DEBUG in wp-config.php to reveal the error, or disable plugins and switch themes to isolate the culprit."
  },
  {
    question: "Why does my site say 'Error establishing a database connection'?",
    answer: "WordPress can't reach its database -  usually because the credentials in wp-config.php are wrong, the database has crashed, or the server is out of resources. Check with your host first, then verify the database details in your config file."
  },
  {
    question: "Can an expired SSL certificate stop my site from loading?",
    answer: "Yes. Browsers block pages with invalid or expired certificates, showing a warning or refusing to load instead of your site. Renew the certificate through your host or control panel and the site starts working again immediately."
  },
  {
    question: "How long should a WordPress site stay down before I worry?",
    answer: "If it's a business site, minutes count. Every hour offline costs you enquiries, sales and search trust. If standard troubleshooting hasn't restored the site within an hour or two, get professional help or restore a backup."
  },
];

export default function WordPressHelpNotLoading() {
  return (
    <>
      <SEO
        title="WordPress Site Not Loading? How to Fix It | UX Sites"
        description="Your WordPress site is down or not loading -  here's how to diagnose and fix the cause quickly, from DNS and server issues to plugin errors."
        url="https://uxsites.co.uk/wordpress-help/wordpress-not-loading/"
        schema={[
          serviceSchema({
            name: "WordPress Site Not Loading? How to Fix It",
            description: "A troubleshooting guide for when a WordPress site is down or not loading -  covering DNS issues, server outages, SSL problems, plugin conflicts, and restoration.",
            url: "https://uxsites.co.uk/wordpress-help/wordpress-not-loading/",
            category: "WordPress Maintenance Guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
            { name: "WordPress Site Not Loading? How to Fix It", url: "https://uxsites.co.uk/wordpress-help/wordpress-not-loading/" },
          ]),
          faqSchema(notLoadingFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Get your site back online"
          headline="WordPress Site Not Loading? How to Fix It"
          subheadline="A WordPress site that won't load is costing you business right now. This guide walks you through diagnosing the cause and getting back online -  fast."
          primaryCta={{ text: "Managed Hosting", href: "/managed-wordpress-hosting/" }}
          secondaryCta={{ text: "View All Guides", href: "/wordpress-help/" }}
          chips={["Troubleshooting", "12 min read", "Emergency", "Step-by-step"]}
        />

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Is My WordPress Site Not Loading?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Most downtime has one of a handful of causes. Start by understanding which category your problem falls into.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonCauses.map((cause, i) => {
                const Icon = cause.icon;
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
                    <h3 className="font-bold mb-2 text-sm">{cause.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cause.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">First Steps: Find Out What's Wrong</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Before changing anything, run through these checks. They rule out simple causes in a couple of minutes.
              </p>
            </div>
            <div className="space-y-3">
              {firstSteps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
                >
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Fix a WordPress Site That Won't Load</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow these steps in order. Start with the least invasive approach and work your way down.
              </p>
            </div>
            <div className="space-y-6">
              {fixSteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-5 p-6 bg-background border border-border rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary shrink-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 md:p-10 bg-card border border-border rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <AlertTriangle size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Every Hour Offline Costs You Money</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The steps above will resolve most downtime. Consider professional help if:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "You've worked through the steps and the site still won't load",
                  "You don't have FTP or hosting control panel access",
                  "You're not comfortable editing files or configuration",
                  "Your hosting provider can't explain what's wrong",
                  "You don't have a backup to restore from"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/managed-wordpress-hosting/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Move to Managed Hosting With Uptime Monitoring <ArrowRight size={16} className="ml-2" />
              </Link>
              <span className="mx-2 text-muted-foreground">·</span>
              <Link href="/wordpress-maintenance/" className="text-primary text-sm font-bold hover:underline">
                Or let our maintenance plan watch your site for you
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Site Down  -  Common Questions"
          faqs={notLoadingFaqs}
        />

        <CTABanner
          title="Keep your WordPress site online"
          description="Managed hosting includes uptime monitoring, fast server infrastructure and rapid support -  so when something breaks, someone's already fixing it."
          buttonText="View Managed Hosting"
          buttonHref="/managed-wordpress-hosting/"
          secondaryButtonText="Maintenance Service"
          secondaryButtonHref="/wordpress-maintenance/"
        />

        <RelatedPages
          title="More WordPress Help Guides"
          pages={[
            {
              title: "What to Do If a WordPress Update Breaks Your Site",
              description: "Emergency recovery guide for broken sites.",
              href: "/wordpress-help/wordpress-update-issues/",
              tag: "Guide"
            },
            {
              title: "WordPress Maintenance Checklist",
              description: "Keep your site secure with regular maintenance tasks.",
              href: "/wordpress-help/wordpress-maintenance/",
              tag: "Guide"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Hosting with built-in uptime monitoring and support.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Professional monitoring and care, handled for you.",
              href: "/wordpress-maintenance/",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}