import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, X, ArrowRight, Server, Timer, Shield, HeadphonesIcon, DollarSign, RefreshCw } from "lucide-react";

const comparisonData = [
  {
    feature: "WordPress Updates",
    shared: "You manually run updates via the dashboard. Forgetting to update is the most common vulnerability.",
    managed: "Updates are tested, reviewed, and applied automatically. You never need to touch them.",
    verdict: "Managed wins  -  updates happen regardless of whether you remember."
  },
  {
    feature: "Security Monitoring",
    shared: "No built-in security monitoring. You'd need a separate plugin (and to configure it properly).",
    managed: "Continuous malware scanning, file integrity checks, and brute force protection  -  all included.",
    verdict: "Managed wins  -  security is active, not dependent on you."
  },
  {
    feature: "Backups",
    shared: "Backups are your responsibility. If they exist, you set them up and check they're working.",
    managed: "Daily automated backups to secure off-site storage with 30-day retention.",
    verdict: "Managed wins  -  backups happen automatically and are tested."
  },
  {
    feature: "Performance Optimisation",
    shared: "Server-level caching is minimal or non-existent. Performance depends entirely on your hosting tier.",
    managed: "Server-level caching, CDN integration, database optimisation, and image compression  -  all configured for you.",
    verdict: "Managed wins  -  speed is built into the infrastructure."
  },
  {
    feature: "Support",
    shared: "Generic support team handling thousands of customers. They don't know your site or WordPress specifically.",
    managed: "A person who knows your site and WordPress specifically. No scripted responses, no ticket ping-pong.",
    verdict: "Managed wins  -  expert support that actually helps."
  },
  {
    feature: "Cost",
    shared: "£3-£15/month introductory, then £10-£25/month on renewal. Extras quickly add up.",
    managed: "£50/month fixed. Backups, security, updates, support  -  all included with no upsells.",
    verdict: "Depends  -  shared is cheaper upfront, managed is better value overall."
  }
];

const whyItMatters = [
  {
    icon: Timer,
    title: "Your Time Has Real Value",
    description: "Managing WordPress yourself takes 2-4 hours per month on updates, checks, and maintenance. At a realistic hourly rate, that's £40-£120/month of your time  -  more than the cost of managed hosting."
  },
  {
    icon: Shield,
    title: "Risk Has a Cost Too",
    description: "A hacked site costs an average of £200-£500 to clean. Lost business during downtime can be significantly more. Managed hosting reduces these risks dramatically."
  },
  {
    icon: DollarSign,
    title: "The Real Total Cost of Ownership",
    description: "Shared hosting + security plugin + backup service + any support calls often adds up to more than a managed plan. When you factor in your time and risk, managed hosting is frequently the cheaper option overall."
  }
];

export default function MgdHostingVsShared() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting vs Shared Hosting | UX Sites"
        description="Managed hosting vs shared hosting  -  the real differences in speed, security, support, and total cost. See what you're actually paying for and which is right for your business."
        url="https://uxsites.co.uk/managed-wordpress-hosting-vs-shared-hosting/"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting vs Shared Hosting Comparison",
            description: "Detailed comparison of managed WordPress hosting versus traditional shared hosting, covering performance, security, support, backups, updates, and total cost of ownership.",
            url: "https://uxsites.co.uk/managed-wordpress-hosting-vs-shared-hosting/",
            category: "WordPress Hosting",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "Managed vs Shared Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting-vs-shared-hosting/" },
          ]),
          faqSchema([
            { question: "Is managed WordPress hosting worth the extra cost compared to shared hosting?", answer: "For most business websites, yes. Shared hosting is cheaper upfront, but when you factor in your time managing updates and security, the cost of backup tools and security plugins, and the risk of a hacked or broken site, managed hosting is frequently the better value overall." },
            { question: "Can I upgrade from shared to managed hosting later?", answer: "Yes  -  and we handle free migration from any existing host. There's no lock-in, and you don't need to commit before we explain what's involved." },
            { question: "What if I only have one small website?", answer: "Even a single-site business needs security, backups, and updates. Managed hosting covers all of that for one predictable monthly cost. It's not about the size of the site  -  it's about whether you want to manage it yourself or focus on your business." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Making the right choice"
          headline="Managed WordPress Hosting vs Shared Hosting"
          subheadline="Compare the benefits and drawbacks of managed hosting versus traditional shared hosting for your WordPress site."
          primaryCta={{ text: "Get Managed Hosting", href: "/contact/" }}
          secondaryCta={{ text: "Learn About Shared Hosting", href: "#comparison" }}
          chips={["Feature Comparison", "Cost Analysis", "Performance", "Security", "Support"]}
        />

        {/* Comparison table */}
        <section id="comparison" className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Side-by-Side Comparison</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                How shared hosting and managed WordPress hosting stack up across the features that actually matter.
              </p>
            </div>

            <div className="space-y-4">
              {comparisonData.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="p-6 bg-muted/20">
                      <h3 className="font-bold text-base text-primary">{row.feature}</h3>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <X size={14} className="text-muted-foreground" />
                        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Shared Hosting</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{row.shared}</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Check size={14} className="text-primary" strokeWidth={3} />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Managed Hosting</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{row.managed}</p>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-muted/10 border-t border-border text-sm text-muted-foreground">
                    <span className="font-semibold">The difference:</span> {row.verdict}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why the difference matters */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why the Difference Matters</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The feature list tells part of the story. Here's what those differences actually mean for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whyItMatters.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-background border border-border rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick cost calculator */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-10 bg-card border border-border rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">The Real Cost Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-bold"></th>
                      <th className="text-center py-3 px-4 font-bold text-muted-foreground">Shared Hosting</th>
                      <th className="text-center py-3 px-4 font-bold text-primary">Managed Hosting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Monthly hosting fee", "£10-£25", "£50"],
                      ["Security plugin (e.g. Wordfence)", "£0-£10/month", "Included"],
                      ["Backup service (e.g. UpdraftPlus)", "£0-£5/month", "Included"],
                      ["SSL certificate", "£0-£70/year", "Included"],
                      ["Your time (2-4 hrs/month @ £25/hr)", "£50-£100/month", "£0"],
                      ["Total monthly cost", "£60-£140/month", "£50/month"],
                    ].map(([item, shared, managed], i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground font-medium">{item as string}</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{shared as string}</td>
                        <td className={`py-3 px-4 text-center ${i === 5 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>{managed as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Shared hosting costs are estimates based on typical UK market prices. Your actual costs will vary. 
                The time cost uses a conservative £25/hour  -  if your time is worth more, the managed option makes even more financial sense.
              </p>
            </div>
          </div>
        </section>

        <FAQBlock
          title="Managed vs Shared  -  Common Questions"
          faqs={[
            {
              question: "Is managed WordPress hosting worth the extra cost compared to shared hosting?",
              answer: "For most business websites, yes. Shared hosting is cheaper upfront, but when you factor in your time managing updates and security, the cost of backup tools and security plugins, and the risk of a hacked or broken site, managed hosting is frequently the better value overall. The real cost comparison above shows the full picture."
            },
            {
              question: "What if I'm comfortable managing my own site?",
              answer: "If you genuinely enjoy managing WordPress and know what you're doing, shared hosting can work. But ask yourself honestly: do you check for updates weekly? Are your backups actually working? Would you know if your site had malware? Most business owners who say they 'manage their own site' are actually just hoping nothing goes wrong."
            },
            {
              question: "Can I upgrade from shared to managed hosting later?",
              answer: "Yes  -  and we handle the migration from your existing host free of charge. There's no obligation to commit before we explain what's involved. The process is designed to be zero-downtime."
            },
            {
              question: "Do you only host WordPress sites?",
              answer: "Yes  -  we specialise exclusively in WordPress. This means we're genuinely expert at it, rather than being a generalist host that supports dozens of platforms. If your site isn't on WordPress, we can discuss migrating it as part of onboarding."
            }
          ]}
        />

        <CTABanner
          title="Ready for the managed difference?"
          description="Stop managing your hosting and start focusing on your business. Managed WordPress hosting from £50/month  -  everything included."
          buttonText="Get Started"
          buttonHref="/contact/"
          secondaryButtonText="See Full Details"
          secondaryButtonHref="/managed-wordpress-hosting/"
        />
      </main>
    </>
  );
}
