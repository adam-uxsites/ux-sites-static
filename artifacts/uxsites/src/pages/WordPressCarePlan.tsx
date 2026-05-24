import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Users, Briefcase, Building2 } from "lucide-react";

const carePlanFeatures = [
  "Managed WordPress hosting on high-performance servers",
  "Daily automated off-site backups (30-day retention)",
  "Security monitoring & malware protection  -  24/7",
  "WordPress core, plugin & theme updates (tested first)",
  "Performance monitoring & optimisation",
  "SSL certificate  -  included, monitored, auto-renewed",
  "Uptime monitoring  -  every minute, from multiple locations",
  "Content update requests by email",
  "Priority expert support  -  no ticketing system",
  "Monthly site health report"
];

const whoShouldChoose = [
  {
    icon: Users,
    title: "Small Business Owners",
    description: "You need your website to work reliably, generate enquiries, and stay secure  -  without spending your limited time on technical maintenance."
  },
  {
    icon: Briefcase,
    title: "Solo Practitioners & Freelancers",
    description: "Your website is often your primary marketing tool. A care plan ensures it's always professional, secure, and performing well  -  so you can focus on client work."
  },
  {
    icon: Building2,
    title: "Organisations Without In-House Tech",
    description: "You rely on your website but don't have internal WordPress expertise. A care plan gives you a dedicated expert who knows your site and handles everything."
  }
];

export default function WordPressCarePlan() {
  return (
    <>
      <SEO
        title="WordPress Care Plan | UX Sites"
        description="What's a WordPress care plan and does your business need one? A simple guide comparing care plans, managed hosting, and website support to help you find the right fit."
        url="https://uxsites.co.uk/wordpress-care-plan"
        schema={[
          serviceSchema({
            name: "WordPress Care Plan",
            description: "A simple guide to what a WordPress care plan includes and how it compares to managed hosting and website support.",
            url: "https://uxsites.co.uk/wordpress-care-plan",
            category: "WordPress Care Plan",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Website Support", url: "https://uxsites.co.uk/website-support" },
            { name: "WordPress Care Plan", url: "https://uxsites.co.uk/wordpress-care-plan" },
          ]),
          faqSchema([
            { question: "What is a WordPress care plan?", answer: "A WordPress care plan is an all-in-one service that combines hosting, maintenance, security, backups, and support into a single monthly fee. It's designed for business owners who want their website to just work without needing to manage the technical side." },
            { question: "What's the difference between a care plan and managed hosting?", answer: "Managed hosting focuses primarily on the hosting infrastructure plus maintenance. A care plan typically bundles hosting, maintenance, support, and content updates together as a complete package. In practice, many providers use the terms interchangeably." },
            { question: "How much does a WordPress care plan cost?", answer: "WordPress care plans in the UK typically range from £50-£200/month depending on what's included. Our managed hosting plan at £50/month covers what most people mean by a care plan  -  hosting, maintenance, support, and content updates." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Simple, all-in-one care"
          headline="What Is a WordPress Care Plan?"
          subheadline="A simple guide to the term many businesses use when they want hosting, maintenance, and support wrapped together."
          primaryCta={{ text: "Get a Care Plan", href: "/contact" }}
          secondaryCta={{ text: "Full Service Details", href: "/website-support" }}
          chips={["All-Inclusive", "£50/month", "No Surprises", "Expert Support"]}
        />

        {/* What people mean by a care plan */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What People Usually Mean by a Care Plan</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  "Care plan" isn't an official industry term  -  it's what many businesses call it when they want someone to just handle everything so their website works without them having to think about it.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  At its core, a care plan typically bundles together: the hosting your site runs on, the maintenance that keeps it secure and current, the backups that protect your data, and the support you need when something needs attention.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Some providers include content updates, performance monitoring, and reporting. Others offer a more basic package. The key is understanding what's actually covered  -  because the term itself doesn't guarantee anything.
                </p>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-6">What a Good Care Plan Includes</h3>
                <ul className="space-y-3">
                  {carePlanFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Care Plan vs Managed Hosting vs Website Support</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These terms overlap significantly. Here's how they typically compare.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Care Plan</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Managed Hosting</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Website Support</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hosting infrastructure", true, true, false],
                    ["WordPress updates", true, true, true],
                    ["Security monitoring", true, true, true],
                    ["Daily backups", true, true, true],
                    ["Performance optimisation", true, true, true],
                    ["SSL certificate", true, true, false],
                    ["Content update requests", "Often", false, true],
                    ["Expert support", true, true, true],
                    ["Works with your current host", false, false, true],
                    ["All-in-one monthly fee", true, true, false]
                  ].map(([feature, care, managed, support], i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{feature as string}</td>
                      <td className="py-3 px-4 text-center">
                        {care === true ? <span className="text-primary font-bold">✓</span> : <span className="text-muted-foreground">{care as string}</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {managed === true ? <span className="text-primary font-bold">✓</span> : <span className="text-muted-foreground">{managed as string}</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {support === true ? <span className="text-primary font-bold">✓</span> : <span className="text-muted-foreground">{support as string}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm">
                Our managed hosting plan at £50/month covers everything most businesses mean by a "care plan"  -  and more.
              </p>
            </div>
          </div>
        </section>

        {/* Who should choose */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Who Should Choose a Care Plan?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A care plan makes sense when your website matters to your business but the technical side isn't something you want to deal with.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whoShouldChoose.map((item, i) => {
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
            <div className="mt-12 p-8 bg-card border border-border rounded-2xl max-w-3xl mx-auto">
              <h3 className="font-bold text-lg mb-4">You might also benefit from a care plan if...</h3>
              <ul className="space-y-3">
                {[
                  "You've ever had your site hacked or broken by an update",
                  "You're currently paying for hosting, a maintenance service, and occasional support separately",
                  "You want one predictable monthly cost instead of surprise bills",
                  "You value knowing there's someone who understands your site and can fix things quickly"
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
          </div>
        </section>

        <FAQBlock
          title="Care Plan FAQs"
          faqs={[
            {
              question: "What is a WordPress care plan?",
              answer: "A WordPress care plan is an all-in-one service that wraps hosting, maintenance, security, backups, and support into a single monthly fee. It's not a standardised industry term  -  different providers include different things  -  but the core idea is that you pay one predictable amount and your website is fully looked after."
            },
            {
              question: "What's the difference between a care plan and managed hosting?",
              answer: "Managed hosting focuses primarily on providing optimised hosting infrastructure plus maintenance, security, and backups. A care plan typically means the same thing but with more emphasis on ongoing support and content updates. At UX Sites, our managed hosting plan includes everything most people expect from a care plan."
            },
            {
              question: "Do I need a care plan if I already have hosting?",
              answer: "Standard hosting doesn't include maintenance, security monitoring, or support. If you have a basic hosting plan somewhere else, a care plan adds everything that's missing  -  updates, security, backups, and support. Alternatively, migrating to managed hosting replaces your hosting entirely and includes everything in one plan."
            },
            {
              question: "Can I get a care plan for an existing site I built elsewhere?",
              answer: "Yes. We review existing WordPress sites before taking them on to understand their setup and flag any immediate concerns. Once on a care plan, we handle everything  -  updates, security, backups, monitoring, and support."
            }
          ]}
        />

        <CTABanner
          title="Get the peace of mind a proper care plan brings"
          description="One predictable monthly cost. Everything covered. No technical knowledge required. Get in touch to discuss what a care plan would look like for your website."
          buttonText="Start Your Care Plan"
          buttonHref="/contact"
          secondaryButtonText="View Managed Hosting"
          secondaryButtonHref="/managed-wordpress-hosting"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Website Support & Care Plans",
              description: "Full details on our website support services  -  what's covered and why it matters.",
              href: "/website-support",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Hosting + maintenance + support in a single plan from £50/month.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Careful plugin and core updates, database optimisation, and ongoing site health.",
              href: "/wordpress-maintenance",
              tag: "Maintenance"
            },
            {
              title: "Fully Managed Hosting",
              description: "Everything included  -  hosting, updates, security, backups, and 30 min development time.",
              href: "/fully-managed-wordpress-hosting",
              tag: "Hosting"
            },
            {
              title: "WordPress Security Monitoring",
              description: "How we actively protect your site from hacks, malware, and vulnerabilities.",
              href: "/wordpress-security",
              tag: "Security"
            },
            {
              title: "Managed Hosting Cost UK",
              description: "See what managed hosting costs and how to judge the real value.",
              href: "/managed-wordpress-hosting-cost-uk-2026",
              tag: "Pricing"
            }
          ]}
        />
      </main>
    </>
  );
}
