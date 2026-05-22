import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { PricingBlock } from "@/components/blocks/PricingBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { StatsBar } from "@/components/blocks/StatsBar";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { SiteDashboardMockup } from "@/components/blocks/SiteDashboardMockup";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Shield, Zap, HardDrive, HeadphonesIcon, BarChart3, Globe, RefreshCw, Lock } from "lucide-react";

const included = [
  {
    icon: HardDrive,
    title: "Daily Automated Backups",
    description: "Your site is backed up every day to secure off-site cloud storage. Backups are retained for 30 days. If anything goes wrong — a bad update, an accidental deletion, a hack — we can restore your site to a clean working state within the hour."
  },
  {
    icon: Shield,
    title: "Security Monitoring & Malware Protection",
    description: "We actively monitor your site for malware, suspicious file changes, brute-force login attempts, and known vulnerabilities. Threats are identified and dealt with before they become problems. Your site is scanned continuously, not just once a week."
  },
  {
    icon: RefreshCw,
    title: "WordPress Core, Plugin & Theme Updates",
    description: "Outdated software is the number one cause of WordPress hacks. We apply updates carefully and promptly — reviewing compatibility before pushing them live. You never need to log into your dashboard to run updates."
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description: "Fast websites rank better and convert more visitors. We implement server-level caching, image optimisation, CSS and JS minification, and database maintenance to keep your site loading quickly — and we monitor performance over time."
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Email & Plugin Support",
    description: "When something looks wrong or you have a question, you're talking to someone who actually knows your website — not a generic support ticket. We respond quickly and give you straight answers, not copy-pasted documentation."
  },
  {
    icon: Globe,
    title: "SSL Certificate & HTTPS",
    description: "SSL certificates are provisioned, renewed automatically, and monitored. Your site will never show the 'Not Secure' warning in browsers, and your visitors' data is encrypted in transit."
  },
  {
    icon: BarChart3,
    title: "Google Analytics 4 Setup",
    description: "We set up Google Analytics 4 properly — with goals, conversion tracking, and a clear view of how your visitors behave. You'll have actual data to make decisions with, not just a page view counter."
  },
  {
    icon: Lock,
    title: "Uptime Monitoring & 99.9% Commitment",
    description: "We monitor your site every minute from multiple locations. If your site goes down, we know before you do — and we're already working on it. We commit to 99.9% uptime, which means less than 9 hours downtime per year."
  }
];

const whyManaged = [
  {
    title: "Your time is worth more than this",
    description: "Managing WordPress updates, security, and backups yourself takes 2–4 hours every month. At any realistic hourly rate, that's more than the cost of managed hosting — and it's time you could spend on your business."
  },
  {
    title: "One bad update can break your site",
    description: "Plugin conflicts are the most common cause of WordPress sites going down. We test updates carefully and can restore instantly from backup if something goes wrong. You don't have that safety net on your own."
  },
  {
    title: "43% of WordPress sites get hacked",
    description: "The vast majority of WordPress compromises are preventable with proper maintenance. An infected site costs far more to clean than a managed hosting plan — and the reputational damage can be significant."
  },
  {
    title: "Speed directly affects your revenue",
    description: "A 1-second improvement in load time increases conversions by up to 7%. Our managed environment includes active performance monitoring — your site doesn't just stay up, it stays fast."
  }
];

export default function ManagedHosting() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting | From £50/month | UX Sites Shropshire"
        description="Fully managed WordPress hosting from £50/month. Daily backups, security monitoring, performance optimisation, updates, and expert support — all included. Based in Shropshire."
        url="https://uxsites.co.uk/managed-wordpress-hosting"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting",
            description: "Fully managed WordPress hosting from £50/month. Daily automated backups, security monitoring, plugin and core updates, performance optimisation, SSL certificate, and expert support — all included.",
            url: "https://uxsites.co.uk/managed-wordpress-hosting",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting" },
          ]),
          faqSchema([
            { question: "What exactly is managed WordPress hosting?", answer: "Standard hosting gives you server space and leaves everything else to you — updates, security, backups, performance. Managed hosting means we take care of all of that. Your site is monitored, maintained, and kept secure continuously." },
            { question: "How much does managed WordPress hosting cost?", answer: "Managed WordPress hosting starts from £50/month on a rolling monthly plan, or £500/year on an annual plan (saving £100 — equivalent to two months free)." },
            { question: "Can you migrate my existing site?", answer: "Yes. We handle the complete migration process — WordPress files, database, any email accounts, and DNS management. Migration is always included free." },
            { question: "Is there a setup fee or minimum contract?", answer: "No setup fee. Monthly plans can be cancelled with 30 days notice. Annual plans are paid upfront for 12 months." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Everything included, nothing to worry about"
          headline="Managed WordPress Hosting from £50/month"
          subheadline="We handle the hosting, security, backups, performance, and updates — so you can focus entirely on running your business. No technical knowledge required. No nasty surprises."
          primaryCta={{ text: "Get Started", href: "/contact" }}
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          chips={["Daily Backups", "Security Monitoring", "99.9% Uptime", "Expert Support", "SSL Included", "Performance Optimised"]}
        />

        <StatsBar
          stats={[
            { number: "99.9%", label: "Uptime Commitment", sub: "Less than 9hrs downtime/year" },
            { number: "30", label: "Days Backup Retention", sub: "Off-site cloud storage" },
            { number: "24/7", label: "Security Monitoring", sub: "Continuous active scanning" },
            { number: "£50", label: "Per Month", sub: "Or £500/year — save £100" }
          ]}
        />

        {/* What's included */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Included — No Hidden Extras</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Unlike standard hosting that charges extra for backups, security, and support, our managed plan includes everything your WordPress site needs to stay secure, fast, and online.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item, i) => {
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

        {/* Content updates section */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Update Requests Included</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Both plans include simple content update requests — text changes, image swaps, opening hours, contact details, adding new team members, updating a product or service description.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Just email us what needs changing. We'll turn it around promptly — no need to log into WordPress, no worrying about breaking the design.
                </p>
                <ul className="space-y-3">
                  {["Text and copy changes", "Image updates and additions", "Contact details and business info", "Opening hours and pricing", "Team profiles and bios", "Service descriptions"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-background border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-muted-foreground ml-2">Email to hello@uxsites.co.uk</span>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">From: client@mybusiness.co.uk</div>
                      <div className="text-muted-foreground mb-1">Subject: Quick update needed</div>
                    </div>
                    <div className="border-t border-border pt-4 text-muted-foreground leading-relaxed">
                      "Hi Adam, can you update our phone number on the contact page? It's changed to 01743 000 111. Also, can you swap the team photo on the About page? I've attached the new one."
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="text-primary font-semibold text-xs mb-1">Reply — same day</div>
                      <div className="text-muted-foreground leading-relaxed">
                        "Done — phone number updated and new team photo live. Let me know if anything else needs changing."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why managed section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Managed Hosting Makes Sense</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Standard hosting gives you server space and leaves the rest to you. Here's why that's a problem.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Reasons */}
              <div className="space-y-5">
                {whyManaged.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 p-6 bg-card border border-border rounded-2xl"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Dashboard mockup */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SiteDashboardMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Managed vs Standard Hosting</h2>
              <p className="text-muted-foreground">The honest comparison nobody in the hosting industry wants you to see.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Cheap Hosting</th>
                    <th className="text-center py-4 px-4 font-bold">
                      <span className="text-primary">UX Sites Managed</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Updates applied for you", false, true],
                    ["Security monitoring", false, true],
                    ["Daily off-site backups", false, true],
                    ["Malware removal included", false, true],
                    ["Performance optimisation", false, true],
                    ["Content updates on request", false, true],
                    ["Expert support (real person)", false, true],
                    ["99.9% uptime commitment", false, true],
                    ["SSL certificate", "Extra cost", "Included"],
                    ["Your time required (hrs/month)", "2–4 hrs", "0 hrs"],
                  ].map(([feature, cheap, managed], i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-4 px-4 text-foreground font-medium">{feature as string}</td>
                      <td className="py-4 px-4 text-center">
                        {cheap === false
                          ? <span className="text-muted-foreground">✕</span>
                          : <span className="text-muted-foreground">{cheap as string}</span>}
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

        {/* Pricing */}
        <section id="pricing">
          <PricingBlock
            plans={[
              {
                title: "Monthly",
                price: "£50",
                period: "month",
                description: "Flexible rolling plan — cancel any time with 30 days notice.",
                features: [
                  "Professional managed WordPress hosting",
                  "Daily automated off-site backups (30-day retention)",
                  "Security monitoring & malware protection",
                  "WordPress, plugin & theme updates",
                  "Performance optimisation & caching",
                  "SSL certificate included",
                  "Google Analytics 4 setup",
                  "Content update requests",
                  "Uptime monitoring — 99.9% commitment",
                  "Email & plugin support"
                ],
                ctaText: "Get Started — Monthly",
                ctaHref: "/contact?plan=monthly"
              },
              {
                title: "Annual",
                price: "£500",
                period: "year",
                description: "Pay annually and save £100 — equivalent to two months free.",
                features: [
                  "Everything in Monthly, plus:",
                  "Free site migration from existing host",
                  "Priority support queue",
                  "Annual performance & SEO review",
                  "Speed optimisation guarantee",
                  "Quarterly plugin audit & cleanup",
                  "Google Search Console setup & monitoring",
                  "Year-end traffic & performance report"
                ],
                ctaText: "Get Started — Annual",
                ctaHref: "/contact?plan=annual",
                popular: true
              }
            ]}
          />
        </section>

        {/* Migration info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Moving Your Existing Site</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Already have a WordPress site with another host? We handle the full migration process — files, database, email, DNS — with zero downtime for your visitors.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Migration is always included free — whatever plan you're on. We'll handle everything and let you know what's involved before you commit to anything.
                </p>
                <ul className="space-y-3">
                  {[
                    "Full site files and database transfer",
                    "DNS and domain management",
                    "Email account migration where needed",
                    "Post-migration testing and verification",
                    "Zero downtime — your old site stays live until the new one is confirmed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-6">What to Expect</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Get in touch", desc: "Tell us about your current site and hosting situation." },
                    { step: "2", title: "We review your site", desc: "We assess what's involved in the migration and give you a clear picture." },
                    { step: "3", title: "You confirm", desc: "If you're happy to proceed, you share access credentials securely." },
                    { step: "4", title: "We migrate", desc: "We transfer everything, test thoroughly, then flip the DNS switch." },
                    { step: "5", title: "You're live", desc: "Your site is now on managed hosting. We monitor the switchover." }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-1">{s.title}</div>
                        <div className="text-muted-foreground text-sm">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQBlock
          faqs={[
            {
              question: "What exactly is managed WordPress hosting?",
              answer: "Standard hosting gives you server space and leaves everything else to you — updates, security, backups, performance. Managed hosting means we take care of all of that. Your site is monitored, maintained, and kept secure continuously. You don't need to log into WordPress to run updates or worry about whether your backups are working."
            },
            {
              question: "How is it different from what I currently have?",
              answer: "Most standard hosting (GoDaddy, Bluehost, SiteGround basic) requires you to manage your own WordPress updates, security, and backups. If your site gets hacked or breaks, you're dealing with it yourself — or paying for emergency support. Our managed plan means none of that is your problem."
            },
            {
              question: "Can you migrate my existing site?",
              answer: "Yes. We handle the complete migration process — WordPress files, database, any email accounts, and DNS management. Migration is always free — there's no charge regardless of which plan you're on. We maintain zero downtime during the transfer."
            },
            {
              question: "What counts as a 'content update request'?",
              answer: "Text changes, image swaps, updating contact details, changing opening hours, adding team members, updating service descriptions — the kind of things that should be straightforward to change. We're not talking about adding new sections or functionality; those would be quoted separately. But most routine content changes are covered."
            },
            {
              question: "What if my site gets hacked while I'm on managed hosting?",
              answer: "We monitor for security threats continuously and deal with the vast majority before they cause any damage. In the very unlikely event a site on our managed hosting is compromised, malware removal and full restoration from a clean backup is included at no additional cost."
            },
            {
              question: "Do you only host WordPress sites?",
              answer: "Yes — we specialise exclusively in WordPress. This lets us be genuinely expert at what we do rather than spreading thin across dozens of platforms. If your site isn't on WordPress, we'd likely recommend migrating it as part of any onboarding."
            },
            {
              question: "Is there a setup fee or minimum contract?",
              answer: "No setup fee. Monthly plans can be cancelled with 30 days notice. Annual plans are paid upfront for 12 months (and save you £100). There's no long-term lock-in beyond that."
            },
            {
              question: "What happens to my site if I decide to leave?",
              answer: "You own your site completely. If you decide to move on, we'll provide you with a full export of your WordPress files and database to migrate wherever you like. We don't hold your site hostage."
            }
          ]}
        />

        <CTABanner
          title="Ready for hassle-free hosting?"
          description="Join businesses across Shropshire and the UK who trust UX Sites to keep their websites secure, fast, and online. Get in touch and we'll talk through what makes sense for your situation."
          buttonText="Get Started"
          buttonHref="/contact"
          secondaryButtonText="Ask a Question"
          secondaryButtonHref="/contact"
        />

        <RelatedPages
          title="Explore the Managed Hosting Cluster"
          pages={[
            {
              title: "Managed Hosting for Shropshire Businesses",
              description: "Local expertise with enterprise reliability — tailored specifically for Shropshire businesses.",
              href: "/wordpress-hosting-shropshire",
              tag: "Local"
            },
            {
              title: "WordPress Security Monitoring",
              description: "How we actively protect your site from hacks, malware, and vulnerabilities — 24/7.",
              href: "/wordpress-security",
              tag: "Security"
            },
            {
              title: "WordPress Backup & Recovery",
              description: "Daily off-site backups with 30-day retention — and rapid restoration when needed.",
              href: "/wordpress-backup-recovery",
              tag: "Backups"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Careful plugin and core updates, database optimisation, and ongoing site health.",
              href: "/wordpress-maintenance",
              tag: "Maintenance"
            },
            {
              title: "Why Managed Hosting Matters",
              description: "The real cost comparison between cheap hosting and managed — the numbers might surprise you.",
              href: "/blog/why-managed-wordpress-hosting",
              tag: "Blog"
            },
            {
              title: "WordPress Security Essentials",
              description: "What every WordPress site owner needs to know about keeping their site secure.",
              href: "/blog/wordpress-security-essentials",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
