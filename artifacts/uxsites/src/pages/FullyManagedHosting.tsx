import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Link } from "wouter";
import { Check, Zap, Shield, RefreshCw, Activity, HeadphonesIcon, Clock, Users, Briefcase, TrendingUp } from "lucide-react";

const careItems = [
  { icon: Zap, title: "Lightning-fast performance", description: "Server-level caching, image optimisation, and database tuning keep your site loading in under 2 seconds  -  improving both rankings and conversions." },
  { icon: Shield, title: "Security & backups", description: "Continuous malware scanning, firewall protection, and daily off-site backups with 30-day retention. If something goes wrong, we restore within the hour." },
  { icon: RefreshCw, title: "WordPress & plugin updates", description: "Core, theme, and plugin updates are reviewed for compatibility, applied carefully, and tested  -  not just clicked through blindly." },
  { icon: Activity, title: "Uptime monitoring", description: "Your site is checked from multiple locations every 60 seconds. If it goes down, we know before you do  -  and we're already working on it." },
  { icon: Clock, title: "30 minutes development (monthly allocation)", description: "Simple content changes, image swaps, text updates, or small tweaks  -  just email us what you need and we handle it as part of your plan." },
  { icon: HeadphonesIcon, title: "Expert support", description: "Questions answered by someone who actually knows your site  -  not a generic helpdesk ticket system. Quick, clear, and straight-talking." }
];

const whoItsFor = [
  { icon: Users, title: "Small Business Owners", description: "You're busy running your business. You don't have time to learn WordPress maintenance, and you'd rather pay an expert than worry about updates and security." },
  { icon: Briefcase, title: "Non-Technical Owners", description: "You know your website matters, but the technical side feels overwhelming. Managed hosting means you never need to log into the WordPress admin area." },
  { icon: TrendingUp, title: "Growing Medium Businesses", description: "Your website is a key part of your operations  -  generating leads, processing enquiries, or selling online. Downtime or security issues directly cost you revenue." }
];

export default function FullyManagedHosting() {
  return (
    <>
      <SEO
        title="Fully Managed WordPress Hosting | £50/month | UX Sites"
        description="Everything-included managed WordPress hosting from £50/month. Updates, security, backups, performance, expert support, and 30 mins development time."
        url="https://uxsites.co.uk/fully-managed-wordpress-hosting/"
        schema={[
          serviceSchema({
            name: "Fully Managed WordPress Hosting",
            description: "Fully managed WordPress hosting for businesses from £50/month. Includes hosting, updates, security, backups, performance, and expert support.",
            url: "https://uxsites.co.uk/fully-managed-wordpress-hosting/",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Fully Managed WordPress Hosting", url: "https://uxsites.co.uk/fully-managed-wordpress-hosting/" },
          ]),
          faqSchema([
            { question: "What is fully managed WordPress hosting?", answer: "Fully managed WordPress hosting means we take care of everything  -  the hosting infrastructure, security, backups, updates, performance optimisation, and ongoing support. You just run your business." },
            { question: "How much does fully managed hosting cost?", answer: "Managed WordPress hosting starts from £50/month on a rolling monthly plan, with no setup fees or minimum contract." },
            { question: "What is the 30 minutes development time?", answer: "Each month includes up to 30 minutes for simple content changes  -  text updates, image swaps, contact details, opening hours, or small tweaks. It covers the routine changes most websites need." },
            { question: "Can you migrate my existing site?", answer: "Yes  -  we handle the complete migration process including files, database, email accounts, and DNS. Migration is always included free with no downtime during the transfer." },
            { question: "What happens if my site breaks after an update?", answer: "We take a backup before every update. If anything goes wrong, we restore from that backup and investigate the conflict before trying again  -  usually within the hour." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Worry-free Managed WordPress hosting"
          headline="Fully Managed WordPress Hosting for Businesses (UK)"
          subheadline="Managed WordPress hosting with ongoing support, updates, monitoring, fixes, and small website changes from £50/month so you never have to worry about your website again."
          primaryCta={{ text: "Get Started", href: "/contact/" }}
          secondaryCta={{ text: "View Pricing", href: "/managed-wordpress-hosting/" }}
          chips={["Daily Backups", "Security Monitoring", "Performance Optimised", "Updates Included", "Expert Support", "30 Min Dev Time"]}
        />

        {/* What we take care of */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Take Care Of</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything your WordPress site needs to stay secure, fast, and online  -  handled by us so you never have to think about it. The same core plan is summarised on our{" "}
                <Link href="/managed-wordpress-hosting/" className="text-primary font-bold hover:underline">managed WordPress hosting page</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
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

        {/* Who is it for */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Who Is Fully Managed Hosting For?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Managed hosting is designed for business owners who want their website to just work  -  without needing to understand the technical side.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whoItsFor.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-7 bg-background border border-border rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Managed Hosting vs Shared Hosting</h2>
              <p className="text-muted-foreground">The honest comparison between cheap shared hosting and fully managed hosting.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Shared Hosting</th>
                    <th className="text-center py-4 px-4 font-bold">
                      <span className="text-primary">UX Sites Managed</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["WordPress updates applied for you", false, true],
                    ["Security monitoring & malware scanning", false, true],
                    ["Daily off-site backups with 30-day retention", false, true],
                    ["Performance optimisation & caching", false, true],
                    ["Expert support (real person, not a ticket)", false, true],
                    ["SSL certificate included & auto-renewed", "Extra cost", "Included"],
                    ["Content update requests by email", false, true],
                    ["Uptime monitoring (every minute)", false, true],
                    ["10+ years WordPress expertise", false, true],
                    ["Your time required (hours/month)", "2-4 hrs", "0 hrs"]
                  ].map(([feature, shared, managed], i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-4 px-4 text-foreground font-medium">{feature as string}</td>
                      <td className="py-4 px-4 text-center">
                        {shared === false
                          ? <span className="text-muted-foreground">✕</span>
                          : <span className="text-muted-foreground">{shared as string}</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {managed === true
                          ? <span className="text-primary font-bold">✓</span>
                          : <span className="text-primary font-bold">{managed as string}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FAQBlock
          faqs={[
            {
              question: "What exactly is fully managed WordPress hosting?",
              answer: "Standard hosting gives you server space and leaves everything else to you  -  updates, security, backups, performance. Fully managed hosting means we take care of all of that. Your site is monitored, maintained, and kept secure continuously."
            },
            {
              question: "How is this different from my current hosting provider?",
              answer: "Most hosting providers (GoDaddy, Bluehost, SiteGround basic plans) leave you responsible for managing WordPress updates, security, and backups. If your site gets hacked or breaks, you're dealing with it yourself. Our managed plan means none of that is your problem."
            },
            {
              question: "What does the 30 minutes of development time cover?",
              answer: "Simple content changes like text edits, image swaps, updating contact details, changing opening hours, or adding team members. It covers the routine updates most websites need. Larger changes or new functionality would be quoted separately."
            },
            {
              question: "Is there a setup fee or minimum contract?",
              answer: "No setup fee. Monthly plans can be cancelled with 30 days notice. There's no long-term lock-in  -  you own your site and can leave whenever you want with a full export."
            },
            {
              question: "What happens if my site gets hacked?",
              answer: "We monitor for threats continuously and catch the vast majority before they cause damage. In the unlikely event a site is compromised, malware removal and full restoration from a clean backup is included at no additional cost."
            }
          ]}
        />

        <CTABanner
          title="Ready for worry-free WordPress hosting?"
          description="Get fully managed hosting with expert support, security, backups, and performance optimisation  -  all from £50/month."
          buttonText="Get Started"
          buttonHref="/contact/"
          secondaryButtonText="Ask a Question"
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
              title: "Managed Hosting Cost UK 2026",
              description: "See what managed WordPress hosting costs in the UK and why the real value is in time saved.",
              href: "/managed-wordpress-hosting-cost-uk-2026/",
              tag: "Pricing"
            },
            {
              title: "WordPress Security Monitoring",
              description: "How we actively protect your site from hacks, malware, and vulnerabilities  -  24/7.",
              href: "/wordpress-security/",
              tag: "Security"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Careful plugin and core updates, database optimisation, and ongoing site health.",
              href: "/wordpress-maintenance/",
              tag: "Maintenance"
            },
            {
              title: "WordPress Migration to Managed Hosting",
              description: "How moving your site to managed hosting works  -  simple, safe, and stress-free.",
              href: "/wordpress-migration-to-managed-hosting/",
              tag: "Migration"
            },
            {
              title: "Why Managed Hosting Matters",
              description: "The real cost comparison between cheap hosting and managed  -  the numbers might surprise you.",
              href: "/blog/why-managed-wordpress-hosting/",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
