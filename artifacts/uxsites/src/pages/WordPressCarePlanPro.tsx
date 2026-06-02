import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { TierCards } from "@/components/blocks/TierCards";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Zap, TrendingUp, HeadphonesIcon, Clock, Cpu, Lightbulb, Target, BarChart3, Workflow, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Increased Development Capacity",
    description: "More monthly development time dedicated to your site  —  for larger feature additions, more complex integrations, and ongoing content work. Development time scales with your needs so you're never constrained by your retainer."
  },
  {
    icon: HeadphonesIcon,
    title: "Faster Priority Support",
    description: "Your requests jump to the front of the queue. We respond faster, resolve quicker, and you deal directly with a senior team member who knows your site and business thoroughly."
  },
  {
    icon: TrendingUp,
    title: "Conversion & Performance Improvements",
    description: "Active work on improving your site's conversion rate, page speed, Core Web Vitals, and overall user experience. Data-informed changes designed to grow your business  —  not just cosmetic tweaks."
  },
  {
    icon: Cpu,
    title: "Advanced Website Optimisation",
    description: "Deeper performance tuning, advanced caching configurations, database optimisation, CDN management, and technical SEO. Your site doesn't just load fast  —  it's genuinely high-performance under any traffic conditions."
  },
  {
    icon: Lightbulb,
    title: "Ongoing Technical Guidance",
    description: "Strategic input on your wider digital presence  —  tooling decisions, third-party integrations, platform choices, and technical planning. You get an experienced technical partner who helps you make informed decisions."
  },
  {
    icon: Clock,
    title: "Integrations & Digital Tools Support",
    description: "Need to connect your website with your CRM, booking system, email marketing platform, payment gateway, or analytics tools? We handle the integration work, setup, and ongoing maintenance of your digital ecosystem."
  },
  {
    icon: Target,
    title: "Growth-Focused Roadmap",
    description: "Each quarter we review your website's performance, identify opportunities, and plan the next priorities. Your site has a direction  —  not just maintenance, but meaningful improvement."
  },
  {
    icon: BarChart3,
    title: "Detailed Monthly Reporting",
    description: "Comprehensive monthly reports covering uptime, performance metrics, security status, work completed, and recommendations. You always know exactly what's happening with your website."
  },
  {
    icon: Workflow,
    title: "Business Systems Integration",
    description: "Beyond just the website  —  we help connect your digital tools into a coherent system. From form submissions flowing to your CRM to ecommerce orders syncing with your accounting software."
  }
];

const useCases = [
  {
    title: "You're Outgrowing Your Current Setup",
    description: "Your business is growing and your website needs to keep pace. More traffic, more content, more functionality  —  the standard care plan's 4 hours isn't enough anymore. Pro gives you the capacity to execute without waiting for next month."
  },
  {
    title: "Your Website Is Central to Operations",
    description: "Your website isn't just a brochure  —  it's where bookings happen, where customers manage accounts, where your team works. When it's down or slow, you lose real money. Pro gives you faster support and deeper optimisation."
  },
  {
    title: "You Need Third-Party Integrations",
    description: "Your website needs to talk to your CRM, your email platform, your booking system, your payment processor. Setting these up and keeping them working requires ongoing technical work that standard support doesn't cover."
  },
  {
    title: "You Want Strategic Technical Input",
    description: "You're making decisions about your digital presence  —  which platform to use, whether to build or buy, how to structure your tech stack. Pro gives you access to experienced technical guidance as part of your retainer."
  }
];

const proBenefits = [
  "Everything in the WordPress Care Plan (£250/month)",
  "Larger monthly development allocation for bigger projects",
  "Faster response and resolution times",
  "Active conversion rate optimisation work",
  "Advanced performance and technical SEO improvements",
  "Quarterly growth roadmap reviews",
  "Detailed monthly performance reporting",
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
          secondaryCta={{ text: "See Pricing", href: "#pricing" }}
          chips={["Increased Capacity", "Faster Support", "Conversion Optimisation", "Advanced Performance", "Integrations Support", "Quarterly Roadmap"]}
        />

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Care Plan Pro Includes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything in the standard Care Plan, plus additional capacity and deeper capabilities for businesses that want their website to drive real growth.
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

        {/* Who needs Pro */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Is Care Plan Pro Right for You?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pro isn't for everyone  —  it's designed for specific situations where a standard care plan doesn't go far enough.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-7 bg-background border border-border rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Includes Everything From Care Plan */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Includes Everything in the Standard Care Plan</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pro is a superset of the standard Care Plan. You get everything below, plus the additional capacity and advanced features above.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {proBenefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TierCards */}
        <TierCards
          tiers={[
            {
              name: "Managed WordPress Hosting",
              monthly: 50,
              annual: 500,
              description: "Fully managed hosting, maintenance, security, and backups  —  everything your WordPress site needs to stay secure, fast, and online.",
              features: [
                "Managed WordPress hosting on high-performance servers",
                "Daily automated off-site backups (30-day retention)",
                "Security monitoring & malware protection",
                "WordPress core, plugin & theme updates",
                "Performance monitoring & optimisation",
                "SSL certificate  —  included, auto-renewed",
                "Uptime monitoring every minute",
                "30 minutes monthly development time",
                "Expert email & plugin support"
              ],
              href: "/managed-wordpress-hosting",
              ctaText: "View Managed Hosting"
            },
            {
              name: "WordPress Care Plan",
              monthly: 250,
              annual: 2500,
              description: "Everything in managed hosting plus 4 hours monthly development, proactive improvements, priority support, and technical consultation.",
              features: [
                "Everything in Managed Hosting",
                "4 hours development & support monthly",
                "Proactive website improvements",
                "Priority support  —  faster response",
                "Technical consultation included",
                "Ongoing website optimisation"
              ],
              href: "/wordpress-care-plan",
              ctaText: "View Care Plan"
            },
            {
              name: "WordPress Care Plan Pro",
              monthly: 500,
              annual: 5000,
              description: "Increased development capacity, conversion optimisation, advanced performance tuning, integration support, and strategic technical guidance.",
              features: [
                "Everything in WordPress Care Plan",
                "Increased development capacity",
                "Faster priority support",
                "Conversion & performance improvements",
                "Advanced website optimisation",
                "Integrations & digital tools support",
                "Quarterly growth roadmap reviews",
                "Detailed monthly performance reporting",
                "Ongoing strategic technical guidance"
              ],
              href: "/wordpress-care-plan-pro",
              ctaText: "View Care Plan Pro",
              highlighted: true
            }
          ]}
          annualNote="Annual plans are paid upfront and equivalent to 10 months  —  save 2 months per year."
        />

        <FAQBlock
          faqs={[
            {
              question: "What is the WordPress Care Plan Pro?",
              answer: "Care Plan Pro is our top-tier monthly retainer for businesses that rely heavily on their website. It includes everything in the standard Care Plan plus increased development capacity, faster support, advanced optimisation, conversion improvements, integration support, and strategic technical guidance."
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
              answer: "Yes  —  at any time with no penalties. We'll adjust your monthly development allocation, support priority, and billing from the next cycle. Downgrading also works the same way."
            },
            {
              question: "What does a quarterly growth roadmap involve?",
              answer: "Every three months we review your website's performance data, identify opportunities for improvement, and agree on priorities for the coming quarter. This ensures your site has a clear direction aligned with your business goals."
            },
            {
              question: "Is there a minimum commitment for Care Plan Pro?",
              answer: "No  —  like all our plans, Care Plan Pro runs month-to-month with 30 days notice. We believe you stay with us because you value the service, not because you're locked in."
            }
          ]}
        />

        <CTABanner
          title="Ready to treat your website as a growth asset?"
          description="Get increased development capacity, advanced optimisation, conversion improvements, integration support, and strategic guidance from £500/month."
          buttonText="Get Care Plan Pro"
          buttonHref="/contact"
          secondaryButtonText="View Care Plan"
          secondaryButtonHref="/wordpress-care-plan"
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
              description: "Everything included  —  hosting, updates, security, backups, and 30 min development time.",
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
