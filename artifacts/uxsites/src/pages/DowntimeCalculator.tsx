import { useState, useMemo } from "react";
import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { breadcrumbSchema, serviceSchema } from "@/lib/schemas";
import { Calculator, TriangleAlert, TrendingDown, ShieldCheck, Info } from "lucide-react";

function formatCurrency(n: number): string {
  return "Â£" + n.toLocaleString("en-GB", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function DowntimeCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(5000);
  const [downtimeHours, setDowntimeHours] = useState(9);
  const [hackCost, setHackCost] = useState(1500);

  const hourlyRevenue = monthlyRevenue / 730;

  const annualDowntimeLoss = useMemo(
    () => Math.round(hourlyRevenue * downtimeHours),
    [hourlyRevenue, downtimeHours]
  );

  const annualHackRisk = useMemo(
    () => Math.round(hackCost * 0.33),
    [hackCost]
  );

  const totalAnnualRisk = annualDowntimeLoss + annualHackRisk;

  const managedHostingCost = 600;

  const potentialSavings = totalAnnualRisk - managedHostingCost;

  return (
    <>
      <SEO
        title="Downtime & Hack Cost Calculator | UX Sites"
        description="How much is website downtime really costing your business? Use our tool to calculate the financial impact of outages and security breaches  -  then compare with managed hosting."
        url="https://uxsites.co.uk/downtime-hack-calculator/"
        schema={[
          serviceSchema({
            name: "Website Downtime Cost Calculator",
            description: "Interactive calculator that shows the potential financial impact of website downtime and security breaches, compared with managed hosting costs.",
            url: "https://uxsites.co.uk/downtime-hack-calculator/",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Downtime & Hack Cost Calculator", url: "https://uxsites.co.uk/downtime-hack-calculator/" },
          ]),
        ]}
      />
      <main>
        <section className="pt-32 pb-16 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground mb-8">
                <Calculator size={14} className="mr-2" />
                See your real risk
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                How Much Could Downtime Cost You?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Enter your numbers below to see the potential financial impact of website downtime and security issues  -  and compare it with the cost of managed hosting.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Inputs */}
              <div className="md:col-span-2 space-y-8">
                <div className="card-base p-7">
                  <h2 className="text-lg font-bold mb-6">Your Numbers</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium mb-2">
                        <span>Average monthly website revenue</span>
                        <span className="text-primary font-bold">{formatCurrency(monthlyRevenue)}</span>
                      </label>
                      <input
                        type="range"
                        min={500}
                        max={100000}
                        step={500}
                        value={monthlyRevenue}
                        onChange={e => setMonthlyRevenue(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>Â£500</span>
                        <span>Â£100k</span>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center justify-between text-sm font-medium mb-2">
                        <span>Likely downtime per year (hours)</span>
                        <span className="text-primary font-bold">{downtimeHours}h</span>
                      </label>
                      <input
                        type="range"
                        min={1}
                        max={168}
                        step={1}
                        value={downtimeHours}
                        onChange={e => setDowntimeHours(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>1 hour</span>
                        <span>168 hours (7 days)</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 flex items-start gap-1.5">
                        <Info size={12} className="shrink-0 mt-0.5" />
                        99.9% uptime = 9 hours downtime per year. Standard hosts often achieve 99.5-99.9%.
                      </p>
                    </div>

                    <div>
                      <label className="flex items-center justify-between text-sm font-medium mb-2">
                        <span>Estimated hack recovery cost</span>
                        <span className="text-primary font-bold">{formatCurrency(hackCost)}</span>
                      </label>
                      <input
                        type="range"
                        min={250}
                        max={10000}
                        step={250}
                        value={hackCost}
                        onChange={e => setHackCost(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>Â£250</span>
                        <span>Â£10k</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 flex items-start gap-1.5">
                        <Info size={12} className="shrink-0 mt-0.5" />
                        Typical cleanup and recovery ranges from Â£500 to Â£3,000 depending on severity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="md:col-span-3 space-y-4">
                <div className="card-base p-7">
                  <h2 className="text-lg font-bold mb-6">Your Annual Risk Breakdown</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                        <TrendingDown size={20} className="text-red-400" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Lost revenue from downtime</div>
                        <div className="text-2xl font-bold text-red-400">{formatCurrency(annualDowntimeLoss)}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Based on {hourlyRevenue.toFixed(0)}/hour for {downtimeHours} hours
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                        <TriangleAlert size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Expected annual hack recovery cost</div>
                        <div className="text-2xl font-bold text-orange-400">{formatCurrency(annualHackRisk)}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Based on ~33% annual probability for SMBs not on managed hosting
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <TriangleAlert size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Total estimated annual risk</div>
                        <div className="text-2xl font-bold text-primary">{formatCurrency(totalAnnualRisk)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-base p-7 border-primary/30 bg-primary/[0.03]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Managed Hosting: {formatCurrency(managedHostingCost)}/year</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        That's {formatCurrency(50)}/month for security monitoring, daily backups, performance optimisation, expert support, and content updates.
                      </p>
                      {potentialSavings > 0 ? (
                        <div className="text-sm">
                          <span className="text-primary font-bold">Potential annual saving: {formatCurrency(potentialSavings)}</span>
                          <span className="text-muted-foreground"> vs the cost of fixing problems after they happen.</span>
                        </div>
                      ) : (
                        <div className="text-sm text-muted-foreground">
                          Your risk is relatively low with your current numbers, but managed hosting also saves you time and gives you peace of mind.
                        </div>
                      )}
                      <Link
                        href="/contact/"
                        className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-bold shadow hover:opacity-90 transition-opacity mt-4"
                      >
                        Talk to Us About Managed Hosting
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card border-y border-border">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">What the Numbers Mean</h2>
              <p className="subhead-section">
                Even conservative estimates show why reactive website management is rarely cheaper than managed hosting.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Downtime Costs Real Revenue",
                  description: "Every hour your site is down, you lose potential sales, enquiries, and credibility. For an e-commerce site generating Â£10k/month, 24 hours of downtime could cost over Â£300 in immediate lost revenue  -  not including future lost business from frustrated visitors."
                },
                {
                  title: "Hack Recovery Is Expensive",
                  description: "Cleaning a hacked WordPress site costs Â£500-Â£3,000 on average, with many small businesses forced to rebuild entirely. Managed hosting prevents the vast majority of attacks and includes cleanup if the worst happens."
                },
                {
                  title: "Prevention Beats Cure Every Time",
                  description: "At Â£50/month, managed hosting costs less than a single hour of emergency development time. You're not just paying for server space  -  you're buying protection, performance, and someone who knows your site."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-base p-7 card-hover"
                >
                  <h3 className="font-bold mb-3">{item.title}</h3>
                  <p className="body-card">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to Stop Worrying About Your Website?"
          description="Get managed hosting that includes security, backups, updates, performance, and support  -  all for one fixed monthly price. No surprises, no hidden costs."
          buttonText="Get Started"
          buttonHref="/contact/"
        />
      </main>
    </>
  );
}
