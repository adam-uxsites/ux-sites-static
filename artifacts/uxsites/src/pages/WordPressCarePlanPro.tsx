import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Zap, TrendingUp, HeadphonesIcon, Clock, Cpu, Lightbulb, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Increased Development Capacity",
    description: "More monthly development time dedicated to your site  -  for larger feature additions, more complex integrations, and ongoing content work. Development time scales with your needs."
  },
  {
    icon: HeadphonesIcon,
    title: "Faster Priority Support",
    description: "Your requests jump to the front of the queue. We respond faster, resolve quicker, and you deal directly with a senior team member who knows your site thoroughly."
  },
  {
    icon: TrendingUp,
    title: "Conversion & Performance Improvements",
    description: "Active work on improving your site's conversion rate, page speed, Core Web Vitals, and overall user experience. Data-informed changes designed to grow your business."
  },
  {
    icon: Cpu,
    title: "Advanced Website Optimisation",
    description: "Deeper performance tuning, advanced caching configurations, database optimisation, CDN management, and technical SEO. Your site doesn't just load fast  -  it's genuinely high-performance."
  },
  {
    icon: Lightbulb,
    title: "Ongoing Technical Guidance",
    description: "Strategic input on your wider digital presence  -  tooling decisions, third-party integrations, platform choices, and technical planning. You get an experienced technical partner, not just a maintenance service."
  },
  {
    icon: Clock,
    title: "Integrations & Digital Tools Support",
    description: "Need to connect your website with your CRM, booking system, email marketing platform, or other business tools? We handle the integration work, setup, and ongoing maintenance of your digital ecosystem."
  }
];

const proBenefits = [
  "Everything in the WordPress Care Plan (£250/month)",
  "Larger monthly development allocation for bigger projects",
  "Faster response and resolution times",
  "Active conversion rate optimisation work",
  "Advanced performance and technical SEO improvements",
  "Ongoing strategic technical guidance",
  "Support for website integrations and third-party tools",
  "Your website treated as a growth asset, not just a cost"
];

export default function WordPressCarePlanPro() {
  return (
    <>
      <SEO
        title="WordPress Care Plan Pro | From £500/month | UX Sites"
        description="Growth-focused WordPress care plan with increased development capacity, advanced optimisation, conversion improvements, and integration support. From £500/month."
        url="https://uxsites.co.uk/wordpress-care-plan-pro"
        schema={[
          serviceSchema({
            name: "WordPress Care Plan Pro",
            description: "Growth-focused WordPress care plan with increased development capacity, advanced performance optimisation, conversion improvements, and integration support from £500/month.",
            url: "https://uxsites.co.uk/wordpress-care-plan-pro",
            category: "WordPress Care Plan",
            price: "500",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Care Plan Pro", url: "https://uxsites.co.uk/wordpress-care-plan-pro" },
          ]),
          faqSchema([
            { question: "What is the WordPress Care Plan Pro?", answer: "Care Plan Pro is our top-tier monthly retainer for businesses that rely heavily on their website. It includes everything in the standard Care Plan plus increased development capacity, faster support, advanced optimisation, conversion improvements, and integration support." },
            { question: "Who needs Care Plan Pro over the standard Care Plan?", answer: "Growing businesses that need more development capacity each month, want active conversion and performance improvements, require integration work with third-party tools, and value having strategic technical guidance as part of their retainer." },
            { question: "Can I upgrade from the standard Care Plan?", answer: "Yes  -  upgrade at any time with no penalties. We'll adjust your monthly allocation and support priority from the next billing cycle." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Growth-focused website partnership"
          headline="WordPress Care Plan Pro from £500/month"
          subheadline="Everything in the standard Care Plan, amplified. More development capacity, faster support, advanced optimisation, conversion improvements, and integration support for businesses that rely heavily on their website."
          primaryCta={{ text: "Get Care Plan Pro", href: "/contact" }}
          secondaryCta={{ text: "Compare All Tiers", href: "/wordpress-care-plan#comparison" }}
          chips={["Increased Capacity", "Faster Support", "Conversion Optimisation", "Advanced Performance", "Integrations Support"]}
        />

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Care Plan Pro Includes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything in the standard Care Plan, plus additional capacity and deeper optimisation for businesses that want their website to drive real growth.
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

        {/* Includes Everything From Care Plan */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Includes Everything in the Standard Care Plan</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pro is a superset of the standard Care Plan. You get everything below, plus the additional capacity and advanced features above.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {proBenefits.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-background border border-border rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tier ladder */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Choose Your Level</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three tiers that scale with your business. No lock-in. Upgrade or downgrade when you need to.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Managed Hosting",
                  price: "£50/month",
                  desc: "Professional hosting, maintenance, security, and backups.",
                  href: "/managed-wordpress-hosting",
                },
                {
                  title: "WordPress Care Plan",
                  price: "£250/month",
                  desc: "Hosting plus ongoing development, proactive improvements, and priority support.",
                  href: "/wordpress-care-plan",
                },
                {
                  title: "Care Plan Pro",
                  price: "£500/month",
                  desc: "Increased capacity, advanced optimisation, conversion improvements, and integrations.",
                  href: "/wordpress-care-plan-pro",
                }
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative p-7 rounded-2xl border ${i === 2 ? 'border-primary shadow-lg shadow-primary/10 bg-card' : 'border-border bg-card'}`}
                >
                  {i === 2 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Top Tier</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tier.desc}</p>
                  <Link
                    href={tier.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${i === 2 ? 'text-primary' : 'text-foreground hover:text-primary'} transition-colors`}
                  >
                    {i === 2 ? "This Plan" : "View Plan"}
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
              question: "What is the WordPress Care Plan Pro?",
              answer: "Care Plan Pro is our top-tier monthly retainer for businesses that rely heavily on their website. It includes everything in the standard Care Plan plus increased development capacity, faster support, advanced optimisation, conversion improvements, and integration support."
            },
            {
              question: "Who needs Care Plan Pro over the standard Care Plan?",
              answer: "Growing businesses that consistently need more than 4 hours of monthly development, want active conversion rate optimisation and advanced performance work, require integration support for business tools, and value having strategic technical input as part of their retainer."
            },
            {
              question: "What kind of integration work is covered?",
              answer: "Connecting your website with CRM systems, booking and scheduling platforms, email marketing tools, payment gateways, analytics platforms, and other third-party services. If your business tools need to talk to your website, we handle the integration and ongoing maintenance."
            },
            {
              question: "Can I upgrade from the standard Care Plan to Pro?",
              answer: "Yes  -  at any time with no penalties. We'll adjust your monthly development allocation, support priority, and billing from the next cycle. Downgrading also works the same way."
            },
            {
              question: "Is there a minimum commitment for Care Plan Pro?",
              answer: "No  -  like all our plans, Care Plan Pro runs month-to-month with 30 days notice. We believe you stay with us because you value the service, not because you're locked in."
            }
          ]}
        />

        <CTABanner
          title="Ready to treat your website as a growth asset?"
          description="Get increased development capacity, advanced optimisation, conversion improvements, and integration support from £500/month."
          buttonText="Get Care Plan Pro"
          buttonHref="/contact"
          secondaryButtonText="Compare All Tiers"
          secondaryButtonHref="/wordpress-care-plan#comparison"
        />

        <RelatedPages
          title="Explore the Service Tiers"
          pages={[
            {
              title: "Managed WordPress Hosting",
              description: "Hosting, maintenance, security, and backups from £50/month. The foundation tier.",
              href: "/managed-wordpress-hosting",
              tag: "From £50"
            },
            {
              title: "WordPress Care Plan",
              description: "Ongoing development, proactive improvements, and priority support from £250/month.",
              href: "/wordpress-care-plan",
              tag: "From £250"
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
