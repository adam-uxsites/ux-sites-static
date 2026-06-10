import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Server, TrendingUp, Shield, HeadphonesIcon, ArrowRight, Download, Activity, Globe } from "lucide-react";
import { Link } from "wouter";

const migrationReasons = [
  {
    icon: Server,
    title: "Outgrown your current host",
    description: "Your cheap shared hosting plan worked when you first launched, but as your site has grown it's become slower and less reliable. You're seeing performance warnings, resource limits, or just a gradual decline in speed."
  },
  {
    icon: TrendingUp,
    title: "You want better performance",
    description: "Your site loads too slowly and you know it's costing you visitors and conversions. Managed hosting includes server-level caching, CDN integration, and performance tuning that standard hosting can't match."
  },
  {
    icon: Shield,
    title: "You're worried about security",
    description: "Your current host doesn't offer active security monitoring, or you've had a scare with a hack or malware. You want proper protection  -  continuous scanning, firewall, and someone who'll deal with threats before they cause damage."
  },
  {
    icon: HeadphonesIcon,
    title: "You need proper support",
    description: "When something goes wrong with your current host, you're dealing with a generic support ticket system and waiting days for a response. You want direct access to someone who knows WordPress and can actually help."
  }
];

const migrationSteps = [
  {
    icon: Download,
    title: "We Review & Prepare",
    description: "We start by reviewing your current site  -  its setup, plugins, hosting environment, and any potential issues. We take a full backup of everything and create a migration plan tailored to your site. You'll know exactly what's involved before we do anything."
  },
  {
    icon: Activity,
    title: "We Migrate Your Site",
    description: "We transfer your WordPress files, database, and media library to our managed hosting environment. We configure the server, apply optimisation settings, and test everything thoroughly in a staging environment before it goes live."
  },
  {
    icon: Globe,
    title: "We Go Live & Monitor",
    description: "We update your DNS to point to your new hosting, with zero planned downtime  -  your old site stays live until the DNS propagates. We monitor the switchover closely, verify everything is working, and stay on hand to address any issues immediately."
  }
];

export default function WordPressMigration() {
  return (
    <>
      <SEO
        title="WordPress Migration to Managed Hosting | UX Sites"
        description="Moving your WordPress site to managed hosting  -  simple, safe, and stress-free. Learn how migration works, what to expect, and how we handle the entire process for you."
        url="https://uxsites.co.uk/wordpress-migration-to-managed-hosting/"
        schema={[
          serviceSchema({
            name: "WordPress Migration to Managed Hosting",
            description: "Moving your WordPress site to managed hosting should be simple, safe, and low stress. Learn about the migration process.",
            url: "https://uxsites.co.uk/wordpress-migration-to-managed-hosting/",
            category: "WordPress Migration",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "WordPress Migration to Managed Hosting", url: "https://uxsites.co.uk/wordpress-migration-to-managed-hosting/" },
          ]),
          faqSchema([
            { question: "Will there be downtime during the migration?", answer: "No  -  we manage the migration with zero planned downtime. Your old site stays live until the new one is confirmed working and DNS has propagated. Visitors won't notice any interruption." },
            { question: "What about my email accounts?", answer: "We handle email migration as part of the process  -  transferring existing mailboxes, settings, and ensuring continuity. If you're using email through your current host, we'll make sure nothing is lost." },
            { question: "Can you migrate an existing WordPress site to managed hosting?", answer: "Yes  -  we handle the complete migration process for existing WordPress sites. We review your current setup, transfer everything over, and test thoroughly before going live." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Simple, safe migration"
          headline="WordPress Migration to Managed Hosting"
          subheadline="Moving your WordPress site should be simple, safe, and low stress. This page explains the migration process."
          primaryCta={{ text: "Start Your Migration", href: "/contact/" }}
          secondaryCta={{ text: "View the Step-by-Step Guide", href: "/migration-guide/" }}
          chips={["Free Migration", "Zero Downtime", "We Handle Everything", "Stress-Free Process"]}
        />

        {/* When does migration make sense */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">When Does Migration Make Sense?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                If any of these situations sound familiar, moving to managed hosting is worth considering.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {migrationReasons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-5 p-7 bg-card border border-border rounded-2xl hover:border-foreground/15 transition-colors"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How the migration works */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">How the Migration Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A straightforward, three-step process designed to make moving your site as stress-free as possible.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {migrationSteps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="relative p-8 bg-background border border-border rounded-2xl"
                  >
                    <div className="text-5xl font-black text-primary/10 absolute top-4 right-6 leading-none">
                      0{i + 1}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 p-6 bg-background border border-border rounded-2xl max-w-3xl mx-auto text-center"
            >
              <p className="text-muted-foreground text-sm">
                The entire process typically takes 24-48 hours from start to finish, with most of that being DNS propagation time. We handle everything  -  you just confirm you're happy to proceed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What people worry about most */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">What People Worry About Most</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three concerns come up in almost every migration conversation. Here's the honest answer to each.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="p-7 bg-card border border-border rounded-2xl"
              >
                <h3 className="font-bold text-lg mb-3">Downtime</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Most people's biggest concern. The answer: we manage the migration with zero planned downtime. Your existing site stays fully live on your current host until the new site on our servers is confirmed working and DNS has propagated. Your visitors never see a "site under maintenance" message.
                </p>
                <div className="flex items-center gap-3 text-sm font-bold text-primary">
                  <Check size={14} />
                  Zero planned downtime
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-7 bg-card border border-border rounded-2xl"
              >
                <h3 className="font-bold text-lg mb-3">Data Loss</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Will I lose any files or content? No  -  we take a full backup of your entire site before we do anything. Your original site stays untouched on your current host throughout the entire process. If anything went wrong (it won't), we can restore everything instantly.
                </p>
                <div className="flex items-center gap-3 text-sm font-bold text-primary">
                  <Check size={14} />
                  Full backup before anything
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-7 bg-card border border-border rounded-2xl"
              >
                <h3 className="font-bold text-lg mb-3">Existing Sites</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Yes  -  we migrate existing WordPress sites all the time. We start with a thorough review of your current site to understand its setup, identify any potential issues, and ensure everything transfers cleanly. Most sites migrate without any problems.
                </p>
                <div className="flex items-center gap-3 text-sm font-bold text-primary">
                  <Check size={14} />
                  Existing sites welcome
                </div>
              </motion.div>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold hover:opacity-90 transition-opacity h-12"
              >
                Start Your Migration <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="Migration FAQs"
          faqs={[
            {
              question: "Will there be any downtime during the migration?",
              answer: "No. We manage the migration so your current site stays live until the new site on our servers is confirmed working. DNS propagation means there's a brief period where some visitors may still reach your old host, but there's no point where your site is intentionally offline."
            },
{
              question: "Can you migrate an existing WordPress site I've had for years?",
              answer: "Yes  -  we migrate existing WordPress sites of all ages and sizes. We start with a full review to understand your site's setup and identify any potential issues. Most sites transfer smoothly regardless of age."
            },
            {
              question: "What do I need to provide for the migration?",
              answer: "We'll need access to your current WordPress admin area and hosting control panel (or FTP credentials). We handle everything from there. Credentials are shared securely and only accessed during active migration work."
            },
            {
              question: "How long does the migration take?",
              answer: "The technical migration itself typically takes a few hours. The overall process takes 24-48 hours because DNS propagation  -  the time it takes for your domain to point everywhere  -  can take up to 48 hours. Your site is accessible throughout."
            },
            {
              question: "Is migration really free?",
              answer: "Yes  -  migration is always included at no additional cost, regardless of which plan you choose. There are no hidden fees or setup charges."
            }
          ]}
        />

        <CTABanner
          title="Ready to move your site to managed hosting?"
          description="Free migration, zero downtime, and a dedicated expert who handles everything. Get in touch to start the process."
          buttonText="Start Your Migration"
          buttonHref="/contact/"
          secondaryButtonText="Ask a Question First"
          secondaryButtonHref="/contact/"
        />

        <RelatedPages
          title="Explore the Managed Hosting Cluster"
          pages={[
            {
              title: "Managed WordPress Hosting  -  Full Details",
              description: "Everything included in our managed hosting plans, pricing, and the full feature comparison.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
            {
              title: "Fully Managed WordPress Hosting",
              description: "Hosting with updates, security, backups, and 30 minutes monthly development time.",
              href: "/fully-managed-wordpress-hosting/",
              tag: "Hosting"
            },
            {
              title: "WordPress Security Monitoring",
              description: "How we actively protect your site from hacks, malware, and vulnerabilities  -  24/7.",
              href: "/wordpress-security/",
              tag: "Security"
            },
            {
              title: "WordPress Backup & Recovery",
              description: "Daily off-site backups with 30-day retention  -  and rapid restoration when needed.",
              href: "/wordpress-backup-recovery/",
              tag: "Backups"
            },
            {
              title: "WordPress Support Shropshire",
              description: "Expert WordPress support for Shropshire businesses — local, reliable, responsive.",
              href: "/wordpress-support-shropshire/",
              tag: "Local"
            },
            {
              title: "Managed Hosting Cost UK",
              description: "See what managed hosting costs and how to judge the real value for your business.",
              href: "/managed-wordpress-hosting-cost-uk-2026/",
              tag: "Pricing"
            },
            {
              title: "What Is a WordPress Care Plan?",
              description: "A simple guide to care plans and how they compare to managed hosting and support.",
              href: "/wordpress-care-plan/",
              tag: "Guide"
            }
          ]}
        />
      </main>
    </>
  );
}
