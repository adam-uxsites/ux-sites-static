import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { StatsBar } from "@/components/blocks/StatsBar";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { PoundSterling, MailCheck, ShieldCheck, ArrowRight } from "lucide-react";

const carePlanAdvantages = [
  {
    icon: PoundSterling,
    title: "One Predictable Price",
    description: "Everything included in one monthly fee  -  no per-hour bills, no surprise invoices, no juggling different providers."
  },
  {
    icon: MailCheck,
    title: "One Point of Contact",
    description: "Email one team that knows your site and your business. You get plain-English replies, not jargon or call centres."
  },
  {
    icon: ShieldCheck,
    title: "No Technical Work for You",
    description: "Updates, security, backups, and monitoring are done by people who do this all day  -  so you can forget about it."
  }
];

const faqs = [
  {
    question: "What's included in a website care plan?",
    answer: "Hosting, WordPress and plugin updates, security monitoring, daily backups, uptime and performance monitoring, small content changes, and direct help from an expert who knows your site -  all included in one monthly price. The higher tiers add more development time and proactive improvements, with full details on the care plan page."
  },
  {
    question: "What if I only need updates?",
    answer: "If you're happy with your current host and only need the updates taken care of, our website maintenance service is the lighter option. If you'd rather move everything onto our hosting too, managed hosting includes updates automatically from £50/month -  and you can upgrade to a care plan whenever you need more."
  },
  {
    question: "Can I start small and upgrade later?",
    answer: "Yes. The tiers are designed as a natural progression. Start on managed hosting (£50/month), then move to a care plan (£250/month) or care plan pro (£500/month) when your needs grow -  no lock-in and no penalty for upgrading."
  },
  {
    question: "What counts as small content changes?",
    answer: "Text updates, image swaps, price changes, menu and contact detail edits, and similar quick jobs you can email over. Anything bigger -  new functionality, design work, or full page builds -  is agreed in advance, so there are never surprises."
  },
  {
    question: "Is there a contract or minimum term?",
    answer: "No. All plans are month to month with no minimum term. You can cancel, pause, or change tier whenever you like -  we just ask for a little notice so the handover is smooth."
  },
  {
    question: "Do you look after websites you didn't build?",
    answer: "Yes. We regularly take on existing sites. We start with a full review of your current setup, sort any urgent issues, and then look after your site as if we'd built it ourselves."
  }
];

export default function WebsiteCarePlans() {
  return (
    <>
      <SEO
        title="Website Care Plans | Ongoing WordPress Support | UX Sites"
        description="Website care plans from UX Sites -  hosting, updates, security, backups, small changes and support in one monthly plan. Your website looked after by experts."
        url="https://uxsites.co.uk/website-care-plans/"
        schema={[
          serviceSchema({
            name: "Website Care Plans",
            description: "Monthly website care plans covering hosting, updates, security monitoring, daily backups, uptime and performance monitoring, small content changes, and expert support -  everything handled in one monthly plan.",
            url: "https://uxsites.co.uk/website-care-plans/",
            category: "Website Care Plans",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Website Support", url: "https://uxsites.co.uk/website-support/" },
            { name: "Website Care Plans", url: "https://uxsites.co.uk/website-care-plans/" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Your website, handled for you"
          headline="Website Care Plans -  Everything in One Monthly Plan"
          subheadline="We host, update, secure, back up, monitor, and maintain your website so you don't have to. Send over a change whenever you like  -  the technical side is our job, and your site is someone's responsibility."
          primaryCta={{ text: "Get Your Website Care Plan", href: "/contact/" }}
          secondaryCta={{ text: "Compare Plans", href: "#pricing" }}
          chips={["Hosting", "Updates", "Security", "Daily Backups", "Monitoring", "Small Changes", "Expert Support"]}
        />

        <StatsBar
          stats={[
            { number: "24/7", label: "Monitoring", sub: "Uptime, security & performance" },
            { number: "Daily", label: "Backups", sub: "Automated & stored off-site" },
            { number: "1", label: "Monthly Plan", sub: "Everything included" },
            { number: "0", label: "Tech Headaches", sub: "Left to us, not you" }
          ]}
        />

        {/* What is a website care plan */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Is a Website Care Plan?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A website care plan is a monthly subscription that moves every technical task to a team that looks after it for you  -  hosting, updates, security, backups, uptime monitoring, small content changes, and support are all included in one predictable monthly price. No logging into WordPress, no scroll of update warnings, and no lying awake wondering if your site is safe, fast, and online.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {carePlanAdvantages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-7 bg-card border border-border rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="What's Included in Your Care Plan"
          subtitle="All of this is handled for you every month  -  so you never have to think about the technical side of your website again."
          benefits={[
            {
              title: "Managed Hosting",
              description: "Fast, reliable hosting configured and maintained by our team. Your site runs on infrastructure we control, monitor, and keep updated."
            },
            {
              title: "WordPress Updates",
              description: "Core, plugin, and theme updates reviewed and tested before they're applied  -  no broken site surprises or compatibility disasters."
            },
            {
              title: "Security Monitoring",
              description: "Round-the-clock scanning for malware and attacks, plus proactive hardening of your site against common threats."
            },
            {
              title: "Daily Backups",
              description: "Automated off-site backups taken every day, so your site can be restored quickly and completely if anything ever goes wrong."
            },
            {
              title: "Uptime Monitoring",
              description: "Your site is checked around the clock. If it goes down, we know before your customers do  -  and we fix it fast."
            },
            {
              title: "Small Content Changes",
              description: "Text updates, image swaps, price changes, and page edits  -  just email them over and we handle them for you."
            },
            {
              title: "Performance Monitoring",
              description: "We track site speed and core metrics, and optimise things before they slow your site down for visitors or search engines."
            },
            {
              title: "Expert Support",
              description: "Help from a real person who knows your site, in plain English, whenever you need it  -  not a ticket system with no name."
            }
          ]}
        />

        {/* Care plan vs DIY vs freelancer */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Care Plan vs Doing It Yourself vs Ad-Hoc Freelancer</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                You can run a website yourself if you have the time and the technical confidence. The honest question is what your time is worth -  and what happens when something goes wrong.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-primary">Website Care Plan</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Doing It Yourself</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Ad-Hoc Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Security & updates", "Managed for you", "Only if you remember", "Billed per job"],
                    ["Backups & recovery", "Automated daily", "Easily forgotten", "Not usually included"],
                    ["Monitoring", "24/7 and proactive", "Manual checks", "Rarely provided"],
                    ["Small content changes", "Included monthly", "Your time to do", "Each change billed separately"],
                    ["Speed of help", "Fast, dedicated team", "Yourself, when you find time", "Depends on availability"],
                    ["Cost", "One predictable monthly price", "Free, but costs your time", "Hourly and open-ended"],
                    ["Accountability", "A partner who knows your site", "Just you", "One-off engagements"]
                  ].map(([feature, plan, diy, freelancer], i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{feature as string}</td>
                      <td className="py-3 px-4 text-center font-semibold text-primary">{plan as string}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{diy as string}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{freelancer as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm mb-4 max-w-2xl mx-auto">
                Doing it yourself is free but it's real work, and things slip unless you're disciplined with security and backups. Freelancers are great for projects, but every request is billed separately and re-timed. A care plan trades a predictable monthly fee for something that stays done -  with someone accountable for your site every day.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing / upgrade note */}
        <section id="pricing" className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Start Simple, Upgrade When You Need More</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three tiers  -  one team, one host, no lock-in. Start on managed hosting and move up as your website needs more from you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Managed Hosting",
                  price: "£50/month",
                  desc: "Hosting, updates, security, daily backups, and monitoring with 30 minutes of monthly content changes. The foundation tier.",
                  href: "/managed-wordpress-hosting/",
                  tag: "Foundation"
                },
                {
                  title: "WordPress Care Plan",
                  price: "£250/month",
                  desc: "Everything in hosting plus 4 hours of monthly development, proactive improvements, and priority support. The sweet spot.",
                  href: "/wordpress-care-plan/",
                  tag: "Recommended"
                },
                {
                  title: "Care Plan Pro",
                  price: "£500/month",
                  desc: "Everything in the care plan with increased capacity, advanced optimisation, and conversion support. For sites that drive real revenue.",
                  href: "/wordpress-care-plan-pro/",
                  tag: "Growth"
                }
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative p-7 rounded-2xl border ${i === 1 ? 'border-primary shadow-lg shadow-primary/10 bg-card' : 'border-border bg-card'}`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Sweet Spot</span>
                    </div>
                  )}
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block">{tier.tag}</span>
                  <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tier.desc}</p>
                  <Link
                    href={tier.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${i === 1 ? 'text-primary' : 'text-foreground hover:text-primary'} transition-colors`}
                  >
                    View Plan
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-8 text-center">
              Not sure which tier fits? Tell us about your website and we'll recommend one  -  you'll only ever pay for what you need.
            </p>
          </div>
        </section>

        <FAQBlock faqs={faqs} />

        <CTABanner
          title="Wouldn't it be good to never worry about your website again?"
          description="Hand it over. One monthly plan covers hosting, updates, security, backups, monitoring, small changes, and expert support  -  from a team that actually knows your site."
          buttonText="Talk to Us About a Care Plan"
          buttonHref="/contact/"
          secondaryButtonText="Managed Hosting £50"
          secondaryButtonHref="/managed-wordpress-hosting/"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Website Support & Care Plans",
              description: "Our full website support services and how the tiers compare with each other.",
              href: "/website-support/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Hosting, updates, security, and backups from £50/month  -  the foundation tier.",
              href: "/managed-wordpress-hosting/",
              tag: "From £50"
            },
            {
              title: "WordPress Care Plan",
              description: "Managed hosting plus 4 hours of monthly development, proactive improvements, and priority support.",
              href: "/wordpress-care-plan/",
              tag: "From £250"
            },
            {
              title: "WordPress Maintenance",
              description: "Careful plugin and core updates plus ongoing site health  -  without changing host.",
              href: "/wordpress-maintenance/",
              tag: "Maintenance"
            },
            {
              title: "WordPress Security",
              description: "How we actively protect your site from malware, hacks, and vulnerabilities.",
              href: "/wordpress-security/",
              tag: "Security"
            },
            {
              title: "Website Maintenance Shropshire",
              description: "Professional website maintenance for Shropshire businesses, locally supported.",
              href: "/website-maintenance-shropshire/",
              tag: "Local"
            },
            {
              title: "SEO Services Shropshire",
              description: "Search engine optimisation that grows organic traffic for local businesses.",
              href: "/seo-services-shropshire/",
              tag: "SEO"
            },
            {
              title: "WordPress Care Plan Pro",
              description: "Increased development capacity, advanced optimisation, and conversion support from £500/month.",
              href: "/wordpress-care-plan-pro/",
              tag: "From £500"
            }
          ]}
        />

        <RelatedPages
          title="Website Care Plans for Your Industry"
          pages={[
            {
              title: "Websites for Scaffolders",
              description: "Care plans for scaffolding contractors and access specialists.",
              href: "/websites-for-scaffolders/",
              tag: "Trades"
            },
            {
              title: "Websites for Air Conditioning Fitters",
              description: "Care plans for air conditioning and refrigeration installers.",
              href: "/websites-for-air-conditioning-fitters/",
              tag: "Trades"
            },
            {
              title: "Websites for Solar Panel Fitters",
              description: "Care plans for solar panel installers and renewable energy firms.",
              href: "/websites-for-solar-panel-fitters/",
              tag: "Trades"
            },
            {
              title: "Websites for Pressure Washers",
              description: "Care plans for pressure washing and cleaning contractors.",
              href: "/websites-for-pressure-washers/",
              tag: "Trades"
            },
            {
              title: "Websites for Landscapers",
              description: "Care plans for landscapers and garden designers.",
              href: "/websites-for-landscapers/",
              tag: "Outdoor"
            },
            {
              title: "Websites for Gardeners",
              description: "Care plans for gardeners and grounds maintenance teams.",
              href: "/websites-for-gardeners/",
              tag: "Outdoor"
            },
            {
              title: "Websites for Tanning Studios",
              description: "Care plans for tanning studios and beauty salons.",
              href: "/websites-for-tanning-studios/",
              tag: "Beauty"
            },
            {
              title: "Websites for Nail Studios",
              description: "Care plans for nail technicians and nail art studios.",
              href: "/websites-for-nail-studios/",
              tag: "Beauty"
            },
            {
              title: "Websites for Tattoo Studios",
              description: "Care plans for tattoo artists and piercing studios.",
              href: "/websites-for-tattoo-studios/",
              tag: "Beauty"
            },
            {
              title: "Websites for Cleaners",
              description: "Care plans for domestic and commercial cleaning businesses.",
              href: "/websites-for-cleaners/",
              tag: "Services"
            },
            {
              title: "Websites for Schools",
              description: "Care plans for schools, nurseries, and education settings.",
              href: "/websites-for-schools/",
              tag: "Community"
            },
            {
              title: "Websites for Local Groups",
              description: "Care plans for community groups, clubs, and societies.",
              href: "/websites-for-local-groups/",
              tag: "Community"
            }
          ]}
        />
      </main>
    </>
  );
}