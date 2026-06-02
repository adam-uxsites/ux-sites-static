import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { PricingBlock } from "@/components/blocks/PricingBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Clock, HeadphonesIcon, TrendingUp, Lightbulb, Zap, Shield, RefreshCw, Users, Briefcase, Building2, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Everything in Managed Hosting",
    description: "Your site runs on our high-performance managed hosting with daily backups, security monitoring, WordPress updates, SSL, and 30 minutes of monthly development time for content changes."
  },
  {
    icon: Clock,
    title: "4 Hours Development & Support",
    description: "Four hours of dedicated development time each month for content updates, feature additions, page builds, design tweaks, or any other website work you need."
  },
  {
    icon: Lightbulb,
    title: "Proactive Website Improvements",
    description: "We don't wait for things to break. We actively identify opportunities to improve your site's performance, user experience, security posture, and search visibility."
  },
  {
    icon: HeadphonesIcon,
    title: "Priority Support",
    description: "Skip the queue. Care plan clients get fast, direct access to your dedicated website team. No ticket systems, no hold music  -  just email us and we get on it."
  },
  {
    icon: TrendingUp,
    title: "Ongoing Website Optimisation",
    description: "Continuous performance tuning, SEO adjustments, and user experience refinements. Your site keeps getting better month after month rather than slowly degrading."
  },
  {
    icon: Zap,
    title: "Technical Consultation",
    description: "Need advice on a new feature, a plugin decision, or a wider digital strategy? Your care plan includes access to technical guidance from someone who knows your site inside out."
  }
];

const whoItsFor = [
  {
    icon: Users,
    title: "Established Small Businesses",
    description: "Your website is central to how you generate leads and revenue. You need it to be more than just 'working'  -  you need it actively improved, maintained, and supported as part of your wider operations."
  },
  {
    icon: Briefcase,
    title: "Service Providers & Agencies",
    description: "You rely on your website to showcase your work, win new clients, and communicate your expertise. A care plan gives you a partner who keeps your digital presence sharp and professional."
  },
  {
    icon: Building2,
    title: " Growing Organisations",
    description: "As your business expands, your website needs to keep pace. Ongoing development capacity, proactive improvements, and consultative support mean your site evolves with you."
  }
];

const tierComparison = [
  { feature: "Managed WordPress Hosting", hosting: true, care: true, pro: true },
  { feature: "WordPress & Plugin Updates", hosting: true, care: true, pro: true },
  { feature: "Security Monitoring & Malware Protection", hosting: true, care: true, pro: true },
  { feature: "Daily Automated Backups (30-day retention)", hosting: true, care: true, pro: true },
  { feature: "Uptime Monitoring (every minute)", hosting: true, care: true, pro: true },
  { feature: "SSL Certificate (auto-renewed)", hosting: true, care: true, pro: true },
  { feature: "Free Website Migration", hosting: true, care: true, pro: true },
  { feature: "30 Min Monthly Development Time", hosting: true, care: true, pro: true },
  { feature: "Monthly Development Time", hosting: "30 min", care: "4 hours", pro: "8 hours" },
  { feature: "Proactive Website Improvements", hosting: false, care: true, pro: true },
  { feature: "Priority Support", hosting: false, care: true, pro: "Faster" },
  { feature: "Technical Consultation", hosting: false, care: true, pro: true },
  { feature: "Ongoing Website Optimisation", hosting: false, care: true, pro: "Advanced" },
  { feature: "Conversion & Performance Improvements", hosting: false, care: false, pro: true },
  { feature: "Integrations & Digital Tools Support", hosting: false, care: false, pro: true },
  { feature: "Monthly Cost", hosting: "£50", care: "£250", pro: "£500" }
];

function checkIcon(value: boolean | string): string {
  if (value === true) return "✓";
  if (value === false) return "—";
  return value as string;
}

function isValue(val: boolean | string): boolean {
  return val !== false;
}

export default function WordPressCarePlan() {
  return (
    <>
      <SEO
        title="WordPress Care Plan | From £250/month | UX Sites"
        description="Ongoing WordPress care plan with managed hosting, 4 hours monthly development, proactive improvements, priority support, and technical consultation. From £250/month."
        url="https://uxsites.co.uk/wordpress-care-plan"
        schema={[
          serviceSchema({
            name: "WordPress Care Plan",
            description: "Ongoing WordPress care plan with managed hosting, 4 hours monthly development, proactive improvements, priority support, and technical consultation from £250/month.",
            url: "https://uxsites.co.uk/wordpress-care-plan",
            category: "WordPress Care Plan",
            price: "250",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Care Plan", url: "https://uxsites.co.uk/wordpress-care-plan" },
          ]),
          faqSchema([
            { question: "What is a WordPress care plan?", answer: "A WordPress care plan is a monthly retainer that combines managed hosting with ongoing development time, proactive improvements, and priority support. It's designed for businesses that want a reliable long-term partner looking after their website rather than just hosting it." },
            { question: "How is a care plan different from managed hosting?", answer: "Managed hosting (£50/month) keeps your site secure, fast, and online. A care plan (£250/month) adds 4 hours of monthly development time, proactive improvements, priority support, and technical consultation. Think of it as managed hosting plus a dedicated website team." },
            { question: "What kind of work does the 4 hours cover?", answer: "Content updates, new pages, design tweaks, feature additions, performance improvements, SEO adjustments, plugin configurations, and any other website changes you need. If it can reasonably be done within the monthly allocation, it's covered." },
            { question: "Can I upgrade from managed hosting to a care plan?", answer: "Yes  -  at any time. You're not locked in. The tiers are designed as a natural progression: start with managed hosting and upgrade to a care plan when you need more ongoing support and development time." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Ongoing website support & improvement"
          headline="WordPress Care Plan from £250/month"
          subheadline="Managed hosting, 4 hours of monthly development time, proactive improvements, priority support, and technical consultation  -  everything your website needs to keep getting better."
          primaryCta={{ text: "Get Your Care Plan", href: "/contact" }}
          secondaryCta={{ text: "Compare Plans", href: "#comparison" }}
          chips={["4 Hours Dev/Month", "Priority Support", "Proactive Improvements", "Technical Consultation", "Managed Hosting Included"]}
        />

        {/* Features grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What a Care Plan Includes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything in managed hosting, plus the ongoing development and support your business needs to keep growing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => {
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

        {/* Tier comparison */}
        <section id="comparison" className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compare the Tiers</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From essential hosting to full-service partnership  -  pick the level that fits your business.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Managed Hosting<br /><span className="text-foreground">£50/mo</span></th>
                    <th className="text-center py-4 px-4 font-bold text-primary">Care Plan<br /><span className="text-foreground">£250/mo</span></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Care Plan Pro<br /><span className="text-foreground">£500/mo</span></th>
                  </tr>
                </thead>
                <tbody>
                  {tierComparison.map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className={`py-3 px-4 font-medium ${row.feature === "Monthly Cost" ? "font-bold text-foreground" : ""}`}>{row.feature}</td>
                      <td className={`py-3 px-4 text-center ${row.feature === "Monthly Cost" ? "font-bold" : ""}`}>{checkIcon(row.hosting)}</td>
                      <td className={`py-3 px-4 text-center font-medium text-primary ${row.feature === "Monthly Cost" ? "font-bold" : ""}`}>{checkIcon(row.care)}</td>
                      <td className={`py-3 px-4 text-center ${row.feature === "Monthly Cost" ? "font-bold" : ""}`}>{checkIcon(row.pro)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center gap-4 mt-10">
              <Link
                href="/managed-wordpress-hosting"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                Managed Hosting £50
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/wordpress-care-plan-pro"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                Care Plan Pro £500
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Who Is a Care Plan For?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A care plan makes sense when your website is too important to just host  —  you need active development, support, and strategic input.
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
                    className="p-7 bg-card border border-border rounded-2xl"
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

        {/* How the ladder works */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">A Clear Path to Scale</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Start where you are. Upgrade when you need more. No lock-in, no friction.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Managed Hosting",
                  price: "£50/month",
                  desc: "Hosting, maintenance, security, backups, and basic content changes. For businesses that want their site professionally managed.",
                  href: "/managed-wordpress-hosting",
                  tag: "Essential"
                },
                {
                  title: "WordPress Care Plan",
                  price: "£250/month",
                  desc: "Everything in hosting plus ongoing development, proactive improvements, and priority support. For businesses that want a website partner.",
                  href: "/wordpress-care-plan",
                  tag: "Recommended"
                },
                {
                  title: "Care Plan Pro",
                  price: "£500/month",
                  desc: "Everything in the care plan with increased capacity, advanced optimisation, and growth-focused support. For businesses that rely heavily on their website.",
                  href: "/wordpress-care-plan-pro",
                  tag: "Growth"
                }
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative p-7 rounded-2xl border ${i === 1 ? 'border-primary shadow-lg shadow-primary/10 bg-background' : 'border-border bg-card'}`}
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
                    {i === 1 ? "This Plan" : "View Plan"}
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FAQBlock
          faqs={[
            {
              question: "What is a WordPress care plan?",
              answer: "A WordPress care plan is a monthly retainer that bundles managed hosting with ongoing development time, proactive improvements, priority support, and technical consultation. It's designed for businesses that want a long-term partner proactively looking after their website."
            },
            {
              question: "How is a care plan different from managed hosting?",
              answer: "Managed hosting (£50/month) keeps your site secure, fast, and online with daily backups, updates, security monitoring, and 30 minutes of monthly content changes. A care plan (£250/month) adds 4 hours of monthly development time, proactive improvements, priority support, and technical consultation  -  it's a significantly deeper level of ongoing support."
            },
            {
              question: "What can I use the development hours for?",
              answer: "Content updates, new pages, design improvements, performance tuning, SEO adjustments, plugin configurations, form additions, integration work, and most other website changes. If you're unsure whether something is covered, just ask  -  if it fits within the monthly allocation, we'll handle it."
            },
            {
              question: "Can I start on managed hosting and upgrade later?",
              answer: "Yes. The three tiers are designed as a natural progression. Start with managed hosting (£50/month) and upgrade to a care plan (£250/month) or care plan pro (£500/month) whenever your needs grow  -  no lock-in, no penalties."
            },
            {
              question: "What if I need more than 4 hours in a month?",
              answer: "Additional development time is charged at our standard hourly rate. We'll always confirm before any work that exceeds your monthly allocation, so there are never surprise bills."
            },
            {
              question: "Do you work with existing sites or only sites you build?",
              answer: "Both. We review existing WordPress sites before taking them on to understand their setup and address any immediate issues. Once on a care plan, we handle everything."
            }
          ]}
        />

        <CTABanner
          title="Ready for a proper website partner?"
          description="Get managed hosting, 4 hours of monthly development, proactive improvements, and priority support from £250/month. No lock-in. No hassle."
          buttonText="Start Your Care Plan"
          buttonHref="/contact"
          secondaryButtonText="Managed Hosting £50"
          secondaryButtonHref="/managed-wordpress-hosting"
        />

        <RelatedPages
          title="Explore the Service Tiers"
          pages={[
            {
              title: "Managed WordPress Hosting",
              description: "Hosting, maintenance, security, and backups from £50/month. The foundation tier for businesses that want professional hosting.",
              href: "/managed-wordpress-hosting",
              tag: "From £50"
            },
            {
              title: "WordPress Care Plan Pro",
              description: "Increased development capacity, advanced optimisation, conversion improvements, and integration support from £500/month.",
              href: "/wordpress-care-plan-pro",
              tag: "From £500"
            },
            {
              title: "Website Support & Care Plans",
              description: "Full details on our website support services and how they compare with managed hosting.",
              href: "/website-support",
              tag: "Service"
            },
            {
              title: "Managed Hosting Cost UK",
              description: "See what managed hosting costs and how to judge the real value for your business.",
              href: "/managed-wordpress-hosting-cost-uk-2026",
              tag: "Pricing"
            },
            {
              title: "Fully Managed Hosting",
              description: "Everything included  -  hosting, updates, security, backups, and 30 min development time.",
              href: "/fully-managed-wordpress-hosting",
              tag: "Hosting"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Careful plugin and core updates, database optimisation, and ongoing site health.",
              href: "/wordpress-maintenance",
              tag: "Maintenance"
            }
          ]}
        />
      </main>
    </>
  );
}
