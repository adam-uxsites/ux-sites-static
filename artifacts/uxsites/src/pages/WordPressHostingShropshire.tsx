import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { StatsBar } from "@/components/blocks/StatsBar";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Check } from "lucide-react";

export default function WordPressHostingShropshire() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting Shropshire | From £50/month | UX Sites"
        description="Managed WordPress hosting for Shropshire businesses from £50/month. Daily backups, security monitoring, expert support and 99.9% uptime. Based in Shrewsbury, serving businesses across Shropshire."
      />
      <main>
        <HeroBlock
          tagline="Local hosting expertise, enterprise reliability"
          headline="Managed WordPress Hosting for Shropshire Businesses"
          subheadline="Professional managed WordPress hosting from a Shropshire-based expert — security, backups, updates, performance monitoring, and support all included from £50/month. You focus on your business; we keep your website running."
          primaryCta={{ text: "Get Started from £50/month", href: "/contact?plan=monthly" }}
          secondaryCta={{ text: "Full Hosting Details", href: "/managed-wordpress-hosting" }}
          chips={["Shropshire Based", "£50/month", "Daily Backups", "99.9% Uptime", "Expert Support"]}
        />

        <StatsBar
          stats={[
            { number: "£50", label: "Per Month", sub: "Or £500/year — save £100" },
            { number: "99.9%", label: "Uptime Commitment", sub: "Monitored every minute" },
            { number: "30", label: "Day Backup Retention", sub: "Secure off-site storage" },
            { number: "10+", label: "Years Local Experience", sub: "Shropshire-based since day one" }
          ]}
        />

        {/* Why local matters for hosting */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Shropshire & surrounding areas
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Shropshire Businesses Choose Managed Hosting
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Most Shropshire businesses are using their website to generate enquiries, build credibility, or sell products. A slow, insecure, or unreliable website directly costs them business — often without them realising it.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Standard hosting from large providers (GoDaddy, Bluehost, SiteGround) puts the maintenance burden on you. Updates, security, backups — your responsibility. When something breaks, you're dealing with generic support tickets and waiting.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  With UX Sites managed hosting, you have a Shropshire-based expert who knows your website personally, responds quickly, and handles everything — so you never have to worry about the technical side of your site again.
                </p>
                <Link
                  href="/managed-wordpress-hosting"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  View full hosting details
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Everything managed for you",
                    items: ["WordPress core, plugin & theme updates", "Daily automated off-site backups", "Security monitoring & malware protection", "Performance optimisation & caching", "SSL certificate — included & auto-renewed", "Content update requests by email"]
                  },
                  {
                    title: "Expert support, locally",
                    items: ["Direct email access to the person who manages your site", "Quick responses — not a generic helpdesk ticket", "In-person support available in Shropshire", "99.9% uptime commitment"]
                  }
                ].map((group, i) => (
                  <div key={i} className="p-6 bg-card border border-border rounded-2xl">
                    <h3 className="font-bold mb-4">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check size={13} className="text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who this is for in Shropshire */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">The Right Choice for Shropshire Business Owners</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Managed hosting is designed for business owners whose time is too valuable to spend managing a website — and whose website is too important to leave unattended.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  type: "Professional Services",
                  examples: "Solicitors, accountants, consultants, architects",
                  why: "Your website is often the first impression a client has of your firm. Downtime or security issues damage credibility in a market where trust is everything."
                },
                {
                  type: "Healthcare & Wellness",
                  examples: "Dentists, physios, therapists, clinics",
                  why: "Patients book appointments online. A slow or broken site means lost bookings — and in regulated sectors, security and compliance are non-negotiable."
                },
                {
                  type: "Trades & Construction",
                  examples: "Builders, electricians, plumbers, landscapers",
                  why: "Your website works while you're on the job. It generates enquiries, builds trust, and is often the only online presence you have — it needs to be reliable."
                },
                {
                  type: "Hospitality & Tourism",
                  examples: "Restaurants, B&Bs, event venues, attractions",
                  why: "Shropshire's tourism economy depends on visitors finding and booking businesses online. Speed, mobile experience, and uptime directly affect bookings."
                },
                {
                  type: "Retail & Ecommerce",
                  examples: "Online shops, local retailers, craftspeople",
                  why: "Every minute of downtime on an ecommerce site is lost revenue. Security is critical — customer payment data and personal information must be protected."
                },
                {
                  type: "Any Business That Values Their Time",
                  examples: "Any sector — if you're busy running your business",
                  why: "The simple reality: if you don't have the time or inclination to manage WordPress maintenance yourself, managed hosting pays for itself immediately."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-7 bg-background border border-border rounded-2xl"
                >
                  <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{item.type}</div>
                  <div className="text-xs text-muted-foreground mb-4 italic">{item.examples}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.why}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="What's Included in Every Plan"
          subtitle="No hidden charges, no add-ons you should have had from the start."
          benefits={[
            { title: "Managed WordPress Hosting", description: "High-performance hosting environment configured specifically for WordPress — not shared with hundreds of unrelated sites." },
            { title: "Daily Automated Backups", description: "Off-site cloud backups every day, retained for 30 days. Full restoration possible within the hour if needed." },
            { title: "Security Monitoring", description: "Continuous scanning for malware, intrusion attempts, and vulnerabilities. Most issues caught and dealt with before you're even aware of them." },
            { title: "WordPress Updates", description: "Core, theme and plugin updates applied carefully — reviewed for compatibility, not just clicked through." },
            { title: "SSL Certificate", description: "HTTPS secured and auto-renewing. Your visitors will never see a 'Not Secure' warning." },
            { title: "Performance Optimisation", description: "Caching, image compression, and database maintenance to keep load times fast as your site grows." }
          ]}
        />

        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Pricing</h2>
            <p className="text-muted-foreground mb-10">Simple, transparent pricing — everything included.</p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { title: "Monthly", price: "£50/month", note: "Cancel with 30 days notice", highlight: false },
                { title: "Annual", price: "£500/year", note: "Save £100 — equivalent to 2 months free", highlight: true }
              ].map((plan, i) => (
                <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'border-primary' : 'border-border'} bg-background`}>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-4xl font-black mb-2">{plan.price}</div>
                  <div className="text-sm text-muted-foreground mb-6">{plan.note}</div>
                  <Link
                    href={`/contact?plan=${plan.title.toLowerCase()}`}
                    className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-bold transition-opacity ${plan.highlight ? 'bg-primary text-primary-foreground hover:opacity-90' : 'border border-border hover:border-foreground/30'}`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              Both plans include everything listed above. <Link href="/managed-wordpress-hosting" className="text-primary hover:underline">See the full feature comparison →</Link>
            </p>
          </div>
        </section>

        <FAQBlock
          faqs={[
            {
              question: "Do you physically host servers in Shropshire?",
              answer: "No — our hosting infrastructure runs on enterprise-grade UK-based servers. What's local is our expertise and support. You're getting the benefit of enterprise hosting with a local expert who knows your site personally."
            },
            {
              question: "Can you host a site that wasn't built by you?",
              answer: "Yes. We review existing WordPress sites before taking them on — to identify any immediate issues and ensure we can support them properly. Most sites transfer smoothly."
            },
            {
              question: "Can I meet with you in person in Shropshire?",
              answer: "Yes — for clients in and around Shrewsbury, Telford, and the surrounding area, in-person meetings are available. We can discuss your hosting needs, review your current setup, or just answer questions face-to-face."
            },
            {
              question: "How do I migrate from my current host?",
              answer: "We handle the complete migration process — WordPress files, database, email accounts, and DNS. Migration is free with annual plans; there's a one-off fee for monthly plan migrations. Zero downtime during the transfer."
            }
          ]}
        />

        <CTABanner
          title="Let's get your Shropshire website on managed hosting"
          description="Get in touch to discuss your current setup. We'll tell you exactly what's involved and give you a clear recommendation — no obligation."
          buttonText="Get in Touch"
          buttonHref="/contact"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Managed WordPress Hosting — Full Details",
              description: "Everything included in our managed hosting plans, pricing, and the full feature comparison.",
              href: "/managed-wordpress-hosting",
              tag: "Pillar Page"
            },
            {
              title: "WordPress Security Monitoring",
              description: "How we protect your site from hacks, malware, and vulnerabilities — continuously.",
              href: "/wordpress-security",
              tag: "Related"
            },
            {
              title: "WordPress Backup & Recovery",
              description: "Daily off-site backups and rapid restoration — what's covered and how it works.",
              href: "/wordpress-backup-recovery",
              tag: "Related"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Ongoing plugin updates, health monitoring, and care for your WordPress site.",
              href: "/wordpress-maintenance",
              tag: "Related"
            },
            {
              title: "Web Design Shropshire",
              description: "Need a new website for your Shropshire business? Start here.",
              href: "/web-design-shropshire",
              tag: "Related"
            },
            {
              title: "Why Managed Hosting Matters",
              description: "The hidden costs of cheap hosting — and why managed is worth it.",
              href: "/blog/why-managed-wordpress-hosting",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
