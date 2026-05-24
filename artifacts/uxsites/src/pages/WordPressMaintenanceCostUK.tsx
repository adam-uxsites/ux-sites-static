import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check, Wrench, HeadphonesIcon, Server, Building2, TrendingUp, Shield, Clock } from "lucide-react";

const costDrivers = [
  {
    icon: Wrench,
    title: "DIY Upkeep",
    description: "You handle updates, backups, and security yourself. It costs nothing upfront but takes 2-4 hours per month. If something goes wrong  -  a plugin conflict, a hack, a failed backup  -  you're fixing it in your own time or paying for emergency help.",
    cost: "Free (your time)"
  },
  {
    icon: HeadphonesIcon,
    title: "Freelance Support",
    description: "A freelancer handles updates and maintenance on an ad-hoc basis. Typically charged hourly (£30-£60/hr) or as a retainer. Good for specific tasks, but response times can be slow and there's no guaranteed cover if they're unavailable.",
    cost: "£30-£100/month"
  },
  {
    icon: Server,
    title: "Managed Maintenance Plans",
    description: "A dedicated provider handles everything  -  updates, security, backups, monitoring, and support  -  for a fixed monthly fee. Includes expert cover and guaranteed response times. You know what you're paying and what's covered.",
    cost: "£50-£150/month"
  },
  {
    icon: Building2,
    title: "Agency Care Plan",
    description: "A full-service agency manages your hosting, maintenance, support, and ongoing improvements. Often includes strategy, reporting, and priority access. The most comprehensive option, suited to businesses where the website is central to operations.",
    cost: "£200-£500+/month"
  }
];

const costRanges = [
  { option: "DIY (your own time)", monthly: "£0", time: "2-4 hrs/month", risk: "High", support: "None" },
  { option: "Basic care plan", monthly: "£30-£60", time: "0 hrs", risk: "Low", support: "Email" },
  { option: "Managed hosting + maintenance", monthly: "£50-£150", time: "0 hrs", risk: "Minimal", support: "Priority email" },
];

const valueReasons = [
  {
    icon: Clock,
    title: "Your time has a cost",
    description: "If you value your time at even £30/hour and spend 3 hours per month on WordPress upkeep, that's £90/month  -  more than most managed plans. You're not saving money by doing it yourself; you're just paying with time instead of cash."
  },
  {
    icon: Shield,
    title: "Emergency fixes are expensive",
    description: "A hacked site typically costs £200-£500 to clean up. A broken update that takes your site offline on a weekend could mean lost sales. Managed maintenance prevents emergencies  -  and when rare issues do occur, they're covered by your plan."
  },
  {
    icon: TrendingUp,
    title: "Performance has a direct ROI",
    description: "A slow site costs you conversions. Managed maintenance includes ongoing performance monitoring and optimisation  -  keeping your site fast as it grows. That directly impacts your bottom line in a way DIY maintenance rarely addresses."
  }
];

export default function WordPressMaintenanceCostUK() {
  return (
    <>
      <SEO
        title="WordPress Maintenance Cost UK | UX Sites"
        description="What does WordPress maintenance cost in the UK? A practical guide to pricing, what affects the cost, and how to judge real value  -  from DIY to fully managed care plans."
        url="https://uxsites.co.uk/wordpress-maintenance-cost-uk"
        schema={[
          serviceSchema({
            name: "WordPress Maintenance Cost UK",
            description: "A practical guide to what WordPress maintenance costs in the UK, what affects the price, and how to judge value.",
            url: "https://uxsites.co.uk/wordpress-maintenance-cost-uk",
            category: "WordPress Maintenance",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Maintenance", url: "https://uxsites.co.uk/wordpress-maintenance" },
            { name: "WordPress Maintenance Cost UK", url: "https://uxsites.co.uk/wordpress-maintenance-cost-uk" },
          ]),
          faqSchema([
            { question: "How much does WordPress maintenance cost in the UK?", answer: "WordPress maintenance costs in the UK range from £0 (DIY) to £500+/month for full-service agency care plans. Most small businesses pay between £50-£150/month for a comprehensive managed maintenance plan." },
            { question: "Is WordPress maintenance worth paying for?", answer: "For most businesses, yes. When you factor in the time cost of DIY maintenance (2-4 hours/month), the risk of security issues, and the value of having expert support available when things go wrong, paid maintenance is typically excellent value." },
            { question: "What's included in a typical WordPress maintenance plan?", answer: "A good maintenance plan includes WordPress core and plugin updates, security monitoring, daily backups, uptime monitoring, performance checks, and expert support. Some plans also include content update requests." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Maintenance pricing explained"
          headline="WordPress Maintenance Cost UK"
          subheadline="A practical guide to what WordPress maintenance costs, what affects the price, and how to judge value."
          primaryCta={{ text: "See Our Maintenance Plan", href: "/wordpress-maintenance" }}
          secondaryCta={{ text: "Get in Touch", href: "/contact" }}
          chips={["£0-£500+/month", "DIY to Full Service", "Value Depends on Context"]}
        />

        {/* What drives WordPress maintenance cost */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives WordPress Maintenance Cost</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The cost depends entirely on how you approach it  -  and the cheapest option usually isn't the most cost-effective.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {costDrivers.map((item, i) => {
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
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <span className="text-sm font-bold text-primary whitespace-nowrap shrink-0">{item.cost}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost ranges table */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Maintenance Cost Ranges at a Glance</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A quick comparison of the main options available to UK businesses.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold">Option</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Monthly Cost</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Your Time</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Risk Level</th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">Support</th>
                  </tr>
                </thead>
                <tbody>
                  {costRanges.map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-4 px-4 font-medium">{row.option}</td>
                      <td className="py-4 px-4 text-center">{row.monthly}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.time}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${
                          row.risk === "High" ? "bg-red-500/10 text-red-500" :
                          row.risk === "Low" ? "bg-yellow-500/10 text-yellow-500" :
                          "bg-green-500/10 text-green-500"
                        }`}>
                          {row.risk}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When maintenance becomes good value */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">When Maintenance Becomes Good Value</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The real question isn't "how much does maintenance cost?"  -  it's "when does paying for maintenance become the smart choice?"
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {valueReasons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-7 bg-card border border-border rounded-2xl"
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
            <div className="mt-12 p-8 bg-card border border-border rounded-2xl max-w-3xl mx-auto">
              <h3 className="font-bold text-lg mb-4">Maintenance is good value if...</h3>
              <ul className="space-y-3">
                {[
                  "Your website generates enquiries, leads, or sales for your business",
                  "You don't have in-house WordPress expertise",
                  "You've experienced a security issue or downtime before (even once)",
                  "Your time is worth more than the monthly cost of a maintenance plan",
                  "You want the peace of mind that comes with knowing your site is being looked after"
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
          title="Maintenance Cost FAQs"
          faqs={[
            {
              question: "How much does WordPress maintenance cost in the UK?",
              answer: "WordPress maintenance in the UK ranges from free (DIY) to £500+/month for full-service agency plans. Most small and medium businesses pay between £50-£150/month for a managed plan that covers updates, security, backups, monitoring, and support."
            },
            {
              question: "Is it cheaper to maintain WordPress myself?",
              answer: "It depends on how you value your time. If you spend 3 hours per month on WordPress maintenance and your time is worth £30/hour, that's £90/month  -  more than most managed plans. And that doesn't include the cost of emergency fixes when something goes wrong."
            },
            {
              question: "What affects the price of a WordPress maintenance plan?",
              answer: "The main factors are: what's included (updates only vs full security, backups, and support), how many sites are covered, response time commitments, whether content updates are included, and the level of expertise provided. A comprehensive plan with real support costs more than a basic update service."
            },
            {
              question: "Do I need maintenance if my site rarely changes?",
              answer: "Yes  -  WordPress still needs updates, security monitoring, and backups even if the content never changes. Outdated software is the most common way sites get hacked, and that risk doesn't decrease just because your site is static."
            }
          ]}
        />

        <CTABanner
          title="Get professional maintenance from £50/month"
          description="A comprehensive WordPress maintenance plan costs less than you might think  -  and saves far more than it costs. Get in touch to discuss what makes sense for your site."
          buttonText="Discuss Maintenance"
          buttonHref="/contact"
          secondaryButtonText="See What's Included"
          secondaryButtonHref="/wordpress-maintenance"
        />
      </main>
    </>
  );
}
