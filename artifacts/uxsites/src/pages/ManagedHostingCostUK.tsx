import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Clock, Shield, RefreshCw, HeadphonesIcon, User, Search, BarChart3, TrendingUp } from "lucide-react";

const costFactors = [
  {
    icon: Shield,
    title: "Security & Backups",
    description: "Real security monitoring isn't a checkbox feature  -  it requires active scanning, threat detection, and prompt response to incidents. Combined with daily off-site backups, this is one of the most valuable components of a managed plan."
  },
  {
    icon: RefreshCw,
    title: "WordPress Updates",
    description: "Updates must be reviewed, tested, and applied carefully. A blind 'update all' is how sites break. The cost reflects the human attention each update receives  -  checking changelogs, testing compatibility, and verifying the site post-update."
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "When you email a question, you're talking to someone who knows your site  -  not a first-line support agent reading from a script. That expertise costs more, but it also means problems get solved faster and more reliably."
  },
  {
    icon: Clock,
    title: "Ongoing Maintenance Time",
    description: "The monthly fee covers the ongoing work: monitoring, backups, performance checks, reporting, and being available when you need something. It's not just a product  -  it's an ongoing service."
  }
];

const valueTips = [
  {
    icon: Search,
    title: "Count your hidden time",
    description: "If you're managing WordPress yourself, track how many hours you spend per month on updates, security checks, backups, and dealing with issues. At your hourly rate, that time has a real cost. Most business owners find they're effectively paying more in time than a managed plan costs."
  },
  {
    icon: BarChart3,
    title: "Factor in risk, not just features",
    description: "A hacked site costs far more than a year of managed hosting  -  emergency cleanup fees, reputational damage, lost sales, and SEO recovery. A broken update might cost you a weekend of lost trading. Managed hosting isn't just paying for features; it's buying insurance against problems that are expensive to fix."
  },
  {
    icon: TrendingUp,
    title: "Speed has a measurable value",
    description: "A fast website converts more visitors into customers. Studies consistently show that a 1-second improvement in load time increases conversions by up to 7%. Managed hosting includes ongoing performance optimisation  -  so you're not just preventing problems, you're actively improving results."
  }
];

export default function ManagedHostingCostUK() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting Cost UK 2026 | UX Sites"
        description="What does managed WordPress hosting cost in the UK in 2026? Transparent pricing breakdown, what's included at each level, and why value beats cheap hosting every time."
        url="https://uxsites.co.uk/managed-wordpress-hosting-cost-uk-2026"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting Cost UK",
            description: "See what managed WordPress hosting costs in the UK. Compare pricing, what's included, and why the real value is in time saved and issues avoided.",
            url: "https://uxsites.co.uk/managed-wordpress-hosting-cost-uk-2026",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting" },
            { name: "Managed WordPress Hosting Cost UK", url: "https://uxsites.co.uk/managed-wordpress-hosting-cost-uk-2026" },
          ]),
          faqSchema([
            { question: "How much does managed WordPress hosting cost in the UK?", answer: "Managed WordPress hosting in the UK typically ranges from £30-£150 per month depending on what's included. Our plans start at £50/month for a comprehensive managed service." },
            { question: "Is managed WordPress hosting worth the cost?", answer: "For most businesses, yes. When you factor in the time spent on maintenance (2-4 hours/month), the cost of a potential hack (often £200-£500 to clean), and the revenue impact of downtime or slow performance, managed hosting typically pays for itself." },
            { question: "What's the difference between £5 hosting and £50 managed hosting?", answer: "£5 hosting gives you server space and nothing else. You handle updates, security, backups, and performance yourself. £50 managed hosting includes all of that plus expert support, monitoring, and peace of mind." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Transparent pricing"
          headline="Managed WordPress Hosting Cost UK"
          subheadline="See what managed hosting costs, what is included, and why the real value is in time saved and issues avoided."
          primaryCta={{ text: "See Our Pricing", href: "/managed-wordpress-hosting#pricing" }}
          secondaryCta={{ text: "Get in Touch", href: "/contact" }}
          chips={["£50/month", "No Setup Fee", "Cancel Any Time", "Everything Included"]}
        />

        {/* Cost comparison table */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You Actually Get for Your Money</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The headline price is one thing. What's included  -  and what's not  -  makes all the difference.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Budget Shared</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">VPS / DIY</th>
                    <th className="text-center py-4 px-4 font-bold">
                      <span className="text-primary">Managed (UX Sites)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monthly fee", "£3-£10", "£10-£30", "£50"],
                    ["Daily automated backups", false, "Manual", true],
                    ["Security monitoring", false, false, true],
                    ["Plugin & core updates", false, "Manual", true],
                    ["Performance optimisation", false, false, true],
                    ["Expert support", false, false, true],
                    ["Content update requests", false, false, true],
                    ["SSL certificate", "Extra", "Manual", "Included"],
                    ["Your time per month", "2-4 hrs", "3-6 hrs", "0 hrs"],
                    ["Emergency fix costs", "£100+ each", "£100+ each", "Included"]
                  ].map(([feature, budget, vps, managed], i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{feature as string}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">
                        {budget === false ? "✕" : budget as string}
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">
                        {vps === false ? "✕" : vps as string}
                      </td>
                      <td className="py-3 px-4 text-center">
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

        {/* What you are paying for */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Are Paying For</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Managed hosting costs more than cheap shared hosting because it includes real services  -  not just server space.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {costFactors.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-5 p-7 bg-card border border-border rounded-2xl"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <Icon size={22} className="text-primary" />
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

        {/* How to judge the real value */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">How to Judge the Real Value</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The cheapest option is rarely the most cost-effective. Here are three ways to think about whether managed hosting represents good value for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {valueTips.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-7 bg-background border border-border rounded-2xl"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <FAQBlock
          title="Cost & Value FAQs"
          faqs={[
            {
              question: "How much does managed WordPress hosting cost in the UK?",
              answer: "Managed WordPress hosting in the UK typically ranges from £30-£150 per month depending on what's included. Basic managed plans start around £30 but often exclude things like backups or content updates. Our plans start at £50/month and include everything  -  hosting, security, backups, updates, support, and simple content changes."
            },
            {
              question: "Is managed WordPress hosting worth the extra cost?",
              answer: "For most businesses, yes. When you factor in the time you'd spend on maintenance (typically 2-4 hours per month at your hourly rate), the potential cost of a hack (often £200-£500 to clean), and the revenue impact of downtime or slow performance, managed hosting usually pays for itself several times over."
            },
            {
              question: "Why does managed hosting cost more than regular hosting?",
              answer: "Regular hosting is just server space  -  you provide everything else yourself. Managed hosting includes active services: security monitoring, backups, updates, performance optimisation, and expert support. You're paying for human expertise and ongoing attention, not just server infrastructure."
            },
            {
              question: "Can I start with a monthly plan and switch to annual later?",
              answer: "Yes. You can start on a monthly plan (cancel anytime with 30 days notice) and switch to annual billing at any point to save £100  -  equivalent to two months free."
            }
          ]}
        />

        <CTABanner
          title="Ready to see what managed hosting should cost?"
          description="Get transparent pricing with everything included  -  no hidden fees, no surprise charges. Just reliable managed hosting from people who know WordPress."
          buttonText="Get Started from £50/month"
          buttonHref="/contact"
          secondaryButtonText="Full Feature Breakdown"
          secondaryButtonHref="/managed-wordpress-hosting"
        />
      </main>
    </>
  );
}
