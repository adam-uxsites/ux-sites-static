import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Clock, Shield, TrendingDown, Coffee, PoundSterling, AlertTriangle, ArrowRight, Users } from "lucide-react";

export default function MgdHostingSmallBiz() {
  return (
    <>
      <SEO
        title="Is Managed Hosting Worth It for Small Businesses? | UX Sites"
        description="Is managed WordPress hosting worth the investment for your small business? Compare costs, time saved, and peace of mind  -  plus real ROI benefits explained."
        url="https://uxsites.co.uk/managed-hosting-small-businesses/"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting for Small Businesses",
            description: "Comprehensive guide to the ROI of managed WordPress hosting for small businesses, covering time savings, risk reduction, and total cost of ownership.",
            url: "https://uxsites.co.uk/managed-hosting-small-businesses/",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "Managed Hosting for Small Businesses", url: "https://uxsites.co.uk/managed-hosting-small-businesses/" },
          ]),
          faqSchema([
            { question: "Is managed WordPress hosting worth it for small businesses?", answer: "For most small businesses, yes. When you factor in the time spent managing updates and security, the cost of separate tools for backups and security, and the risk of a hacked or broken site, managed hosting often delivers better value than a DIY approach." },
            { question: "How much time does managed hosting save?", answer: "Managing a WordPress site yourself takes 2-4 hours per month on updates, backups, security checks, and troubleshooting. Managed hosting eliminates that completely  -  saving 24-48 hours per year." },
            { question: "What if my small business site doesn't get much traffic?", answer: "Traffic volume doesn't determine security risk. Hackers target vulnerable sites regardless of size. A low-traffic business site still needs security, backups, and updates  -  managed hosting covers all of that regardless of how many visitors you get." },
            { question: "Can I try managed hosting before committing?", answer: "Our monthly plan has no long-term contract  -  30 days notice to cancel. You can start with a migration of your existing site and see how the service works before committing long-term." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="ROI analysis for small business"
          headline="Is Managed WordPress Hosting Worth It for Small Businesses?"
          subheadline="Discover if managed hosting is the right choice for your small business and learn about the ROI benefits."
          primaryCta={{ text: "Get Managed Hosting", href: "/contact/" }}
          secondaryCta={{ text: "Compare Costs", href: "#cost-comparison" }}
          chips={["ROI Analysis", "Time Savings", "Risk Reduction", "Cost Comparison", "Small Business"]}
        />

        {/* The small business perspective */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Small Business Perspective</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                As a small business owner, your website is probably one of your most important marketing assets  -  yet it's also one of the easiest things to neglect. You're busy running your business, dealing with customers, managing finances, and putting out fires. The website just sits there, working fine, until it doesn't.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The question isn't whether managed hosting is cheaper than a DIY approach. It's about what your time is worth, what the risks actually cost, and whether the peace of mind is worth the monthly fee.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                For most small businesses, the answer is a clear yes  -  and the math often surprises people once they lay out the real numbers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cost comparison table */}
        <section id="cost-comparison" className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Cost Comparison: DIY vs Managed</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The real cost of DIY website management goes far beyond the hosting bill.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold"></th>
                    <th className="text-center py-4 px-4 font-bold text-muted-foreground">DIY Approach</th>
                    <th className="text-center py-4 px-4 font-bold text-primary">Managed Hosting</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monthly hosting", "Â£10-Â£25", "Â£50"],
                    ["Security plugin (premium)", "Â£0-Â£10/month", "Included"],
                    ["Backup plugin/service", "Â£0-Â£5/month", "Included"],
                    ["SSL certificate", "Â£0-Â£70/year", "Included"],
                    ["CDN service", "Â£0-Â£20/month", "Included"],
                    ["Your time (2-4 hrs/month)", "Â£40-Â£120/month", "Â£0"],
                    ["", "", ""],
                    ["Monthly total (approx)", "Â£50-Â£180/month", "Â£50/month"],
                    ["Annual total (approx)", "Â£600-Â£2,160/year", "Â£500/year"],
                    ["Time required (annual)", "24-48 hours", "0 hours"],
                  ].map(([item, diy, managed], i) => {
                    const isTotal = i === 7 || i === 8;
                    const isBlank = i === 6;
                    return (
                      <tr key={i} className={`border-b border-border/50 ${isTotal ? 'border-t-2 border-border' : ''}`}>
                        <td className={`py-3 px-4 ${isTotal ? 'font-bold text-foreground' : 'text-foreground font-medium'}`}>
                          {isBlank ? '\u00A0' : item}
                        </td>
                        <td className={`py-3 px-4 text-center ${isTotal ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
                          {isBlank ? '\u00A0' : diy}
                        </td>
                        <td className={`py-3 px-4 text-center ${isTotal ? 'font-bold text-primary' : 'text-muted-foreground'}`}>
                          {isBlank ? '\u00A0' : managed}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              DIY costs estimated based on typical UK pricing for shared hosting and common WordPress tools. 
              Time valued at a conservative Â£20/hour  -  many business owners' time is worth significantly more.
            </p>
          </div>
        </section>

        {/* Time savings */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Clock size={28} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">The Time Savings Calculation</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Managing a WordPress site yourself takes time. Here's a realistic breakdown of what that looks like over a year:
                </p>
                <div className="space-y-4">
                  {[
                    { task: "Running WordPress updates", time: "30 mins/month" },
                    { task: "Checking and testing backups", time: "15 mins/month" },
                    { task: "Security scan review and follow-up", time: "20 mins/month" },
                    { task: "Performance checks and optimisation", time: "15 mins/month" },
                    { task: "Troubleshooting issues (average)", time: "30 mins/month" },
                    { task: "Annual total", time: "~27 hours/year" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
                      <span className={`text-sm ${i === 5 ? 'font-bold' : 'font-medium'}`}>{item.task}</span>
                      <span className={`text-sm ${i === 5 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>{item.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-6 leading-relaxed">
                  27 hours is over half a working week. If your time is worth Â£20/hour, that's Â£540 in lost time per year. At Â£50/hour (more realistic for many business owners), it's Â£1,350.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-card border border-border rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-6">What Could You Do With 27 Extra Hours?</h3>
                <div className="space-y-5">
                  {[
                    { icon: TrendingDown, text: "Focus on business development and growth" },
                    { icon: Coffee, text: "Take a proper break without worrying about the website" },
                    { icon: Users, text: "Spend more time with clients and prospects" },
                    { icon: ArrowRight, text: "Work on your business instead of in it" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-primary" />
                        </div>
                        <p className="text-sm text-foreground font-medium">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Risk reduction */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield size={28} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Risk Reduction  -  The Hidden ROI</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The cost of managed hosting isn't just about what you pay  -  it's about what you avoid paying.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: "Hacked Site Recovery",
                  cost: "Â£200-Â£500+",
                  desc: "Average cost to clean a compromised WordPress site. Managed hosting includes malware removal at no extra cost."
                },
                {
                  icon: TrendingDown,
                  title: "Lost Business During Downtime",
                  cost: "Â£100-Â£1,000+/day",
                  desc: "If your site is down for 24 hours, how much business do you lose? Managed hosting aims for 99.9% uptime."
                },
                {
                  icon: PoundSterling,
                  title: "Emergency Support",
                  cost: "Â£50-Â£150/hour",
                  desc: "Emergency developer support to fix a broken site. Managed hosting clients never need emergency support."
                },
              ].map((item, i) => {
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
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <span className="text-lg font-bold text-yellow-500">{item.cost}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 p-8 bg-background border border-border rounded-2xl text-center"
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                <strong className="text-foreground">The bottom line:</strong> One security incident or extended downtime can cost more than 
                several years of managed hosting. For most small businesses, managed hosting isn't an expense  -  it's an insurance policy 
                that pays for itself the first time something goes wrong.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final verdict */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-card border border-border rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">The Verdict for Small Businesses</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Managed hosting saves you 24-48 hours per year that you'd otherwise spend on website maintenance  -  time you can invest in your business.",
                  "The real cost of DIY hosting (including your time, separate tools, and risk) is often higher than managed hosting's fixed monthly fee.",
                  "One security incident or prolonged downtime can cost more than several years of managed hosting.",
                  "The peace of mind alone  -  knowing your site is monitored, backed up, and maintained by someone who knows what they're doing  -  is worth the monthly fee for most business owners."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-primary-foreground" strokeWidth={3} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-foreground font-bold text-lg mb-6">
                For most small businesses, managed WordPress hosting isn't just worth it  -  it's the smarter financial choice.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold hover:opacity-90 transition-opacity h-12"
              >
                Get Started With Managed Hosting
              </Link>
            </motion.div>
          </div>
        </section>

        <FAQBlock
          title="Small Business  -  Common Questions"
          faqs={[
            {
              question: "Is managed WordPress hosting worth it for small businesses?",
              answer: "For most small businesses, yes. When you factor in the time spent managing updates and security, the cost of separate tools for backups and security, and the risk of a hacked or broken site, managed hosting often delivers better value than DIY. The cost comparison table on this page shows the full breakdown."
            },
            {
              question: "How much time does managed hosting actually save?",
              answer: "Managing a WordPress site yourself takes approximately 2-4 hours per month  -  that's 24-48 hours per year. Managed hosting eliminates that completely. For a small business owner, that's the equivalent of over a working week saved annually."
            },
            {
              question: "What if my small business site doesn't get much traffic?",
              answer: "Traffic level doesn't determine security risk. Hackers use automated bots to scan all WordPress sites for vulnerabilities  -  popular and unpopular sites alike. A low-traffic business site still needs security, backups, and updates. If anything, small businesses have less capacity to deal with a security incident, making prevention more important."
            },
            {
              question: "What if I already have a website with another hosting company?",
              answer: "We handle migration from your existing host completely free. We transfer files, database, email accounts, and DNS  -  with zero downtime. You don't need to commit before we explain what's involved. Many of our clients come from GoDaddy, 1&1, SiteGround, and similar providers."
            },
            {
              question: "Is there a minimum contract or setup fee?",
              answer: "No setup fee and no minimum contract. Monthly plans run on a rolling basis with 30 days notice to cancel. Annual plans are paid upfront (saving Â£100). Either way, there's no long-term lock-in."
            }
          ]}
        />

        <CTABanner
          title="See the difference for yourself"
          description="Free migration. No long-term contract. Managed WordPress hosting from Â£50/month  -  everything included."
          buttonText="Get Started"
          buttonHref="/contact/"
          secondaryButtonText="What's Included"
          secondaryButtonHref="/whats-included-managed-wordpress-hosting/"
        />
      </main>
    </>
  );
}
