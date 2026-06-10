import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { StatsBar } from "@/components/blocks/StatsBar";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Zap, BarChart2, Smartphone } from "lucide-react";

export default function WebsiteSpeedOptimisation() {
  return (
    <>
      <SEO
        title="Website Speed Optimisation | WordPress Performance | UX Sites"
        description="Speed up your WordPress site and stop losing visitors. Improve Core Web Vitals, reduce load times, and boost search rankings. Expert performance optimisation for UK businesses."
        url="https://uxsites.co.uk/website-speed-optimisation/"
        schema={[
          serviceSchema({
            name: "Website Speed Optimisation",
            description: "Professional WordPress speed optimisation to improve Core Web Vitals, reduce page load times, and boost Google search rankings. Image optimisation, caching, database cleanup, and CDN setup included.",
            url: "https://uxsites.co.uk/website-speed-optimisation/",
            category: "Website Performance Optimisation",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Existing Website", url: "https://uxsites.co.uk/existing-website/" },
            { name: "Website Speed Optimisation", url: "https://uxsites.co.uk/website-speed-optimisation/" },
          ]),
          faqSchema([
            { question: "How much does website speed optimisation cost?", answer: "Speed optimisation projects are quoted individually after a site audit. Typical projects range from £200-£500 depending on the size of the site and the work required." },
            { question: "How quickly will I see results?", answer: "Most optimisation improvements are visible immediately after implementation. Google's Core Web Vitals scores typically update within 28 days as the crawl data refreshes." },
            { question: "Will it affect my website's appearance?", answer: "No. Speed optimisation is entirely technical  -  it improves how your site loads without changing how it looks to visitors." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Faster websites rank better and convert more"
          headline="WordPress Speed Optimisation  -  Real, Measurable Results"
          subheadline="A slow website costs you visitors, rankings, and revenue. We diagnose the root causes of poor WordPress performance and fix them properly  -  reducing load times, improving Core Web Vitals scores, and delivering a noticeably faster site."
          primaryCta={{ text: "Get a Free Speed Audit", href: "/contact" }}
          secondaryCta={{ text: "View Managed Hosting", href: "/managed-wordpress-hosting" }}
          chips={["Core Web Vitals", "LCP & CLS", "Image Optimisation", "Caching", "Mobile Speed"]}
        />

        <StatsBar
          stats={[
            { number: "32%", label: "More Abandonment", sub: "When load time goes from 1s to 3s" },
            { number: "7%", label: "More Conversions", sub: "For every 1-second improvement" },
            { number: "60-70%", label: "Load Time Reduction", sub: "Typical result after our optimisation" },
            { number: "90+", label: "PageSpeed Target", sub: "What we aim for post-optimisation" }
          ]}
        />

        {/* What we fix */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Slows WordPress Sites Down</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Poor performance almost always has identifiable, fixable causes. Here are the most common culprits  -  and how we address them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Unoptimised Images",
                  problem: "The single biggest cause of slow WordPress sites. Photos from modern phones are 3-8MB. Uncompressed, a page with 4-5 images can be 30MB+ to download.",
                  fix: "We compress all images, convert to WebP format, and implement lazy loading for below-fold content. Images served at their actual display size rather than scaled in the browser."
                },
                {
                  icon: Zap,
                  title: "Render-Blocking Resources",
                  problem: "CSS and JavaScript that load in the page head block the browser from displaying anything  -  causing a blank white screen for 2-4 seconds even when the server responds quickly.",
                  fix: "Critical CSS is inlined; non-critical CSS deferred. JavaScript is deferred or loaded asynchronously where possible, and unnecessary scripts removed entirely."
                },
                {
                  icon: BarChart2,
                  title: "No Caching Implementation",
                  problem: "Without caching, every visitor causes WordPress to query the database, run PHP, and build the page from scratch  -  every time. On shared hosting this creates serious bottlenecks.",
                  fix: "Server-level page caching, object caching, and browser caching are all configured. Pre-built pages served to visitors in milliseconds rather than rebuilt each request."
                },
                {
                  icon: Zap,
                  title: "Plugin Bloat",
                  problem: "Many WordPress sites accumulate 30-50 plugins over time, with many doing similar jobs or adding JavaScript to every page regardless of whether it's needed.",
                  fix: "Plugin audit to identify redundant, conflicting, and unnecessary plugins. Consolidation where possible; removal of plugins that add JavaScript globally for use on only one page."
                },
                {
                  icon: BarChart2,
                  title: "Database Bloat",
                  problem: "WordPress accumulates thousands of post revisions, spam comments, expired transients, and orphaned metadata over time  -  slowing database queries progressively.",
                  fix: "Database cleanup: post revisions capped and cleared, spam removed, transients expired, orphaned data cleaned. Regular automated maintenance prevents re-accumulation."
                },
                {
                  icon: Smartphone,
                  title: "Hosting Limitations",
                  problem: "Cheap shared hosting limits your site to minimal CPU and memory. Even a well-optimised WordPress site will be slow on resource-constrained shared hosting.",
                  fix: "Where hosting is a fundamental constraint, we discuss migrating to our managed hosting environment  -  configured specifically for WordPress with no resource throttling."
                }
              ].map((item, i) => {
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
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">The problem</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.problem}</p>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="text-sm font-bold text-primary uppercase tracking-wider mb-1">What we do</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.fix}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Web Vitals explained */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Core Web Vitals  -  Google's Performance Signals</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Since 2021, Google uses Core Web Vitals as a ranking factor. Poor scores don't just create a bad experience  -  they actively suppress your search rankings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  metric: "LCP",
                  name: "Largest Contentful Paint",
                  what: "How long until the main content of the page is visible to the user.",
                  good: "Under 2.5 seconds",
                  typical: "4-8 seconds on unoptimised sites",
                  howWeHelp: "Image optimisation, server caching, and eliminating render-blocking resources are the primary LCP fixes."
                },
                {
                  metric: "INP",
                  name: "Interaction to Next Paint",
                  what: "How quickly the page responds when a user clicks or taps something.",
                  good: "Under 200ms",
                  typical: "500ms+ on plugin-heavy sites",
                  howWeHelp: "JavaScript audit, removing unnecessary event listeners, and deferring non-critical scripts."
                },
                {
                  metric: "CLS",
                  name: "Cumulative Layout Shift",
                  what: "Whether page elements jump around as the page loads  -  frustrating for users.",
                  good: "Under 0.1",
                  typical: "High on sites with late-loading ads, images without dimensions, or web fonts",
                  howWeHelp: "Explicit image and video dimensions, font preloading with font-display: swap, and ad slot space reservation."
                }
              ].map((vital, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-7 bg-background border border-border rounded-2xl"
                >
                  <div className="text-3xl font-black text-primary mb-1">{vital.metric}</div>
                  <div className="font-bold text-sm mb-4">{vital.name}</div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-sm text-muted-foreground font-semibold mb-1">Measures</div>
                      <p className="text-muted-foreground">{vital.what}</p>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-semibold mb-1">Good score</div>
                      <p className="text-primary font-semibold">{vital.good}</p>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-semibold mb-1">Typical problem</div>
                      <p className="text-muted-foreground">{vital.typical}</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="text-sm text-muted-foreground font-semibold mb-1">How we fix it</div>
                      <p className="text-muted-foreground">{vital.howWeHelp}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-muted-foreground text-sm mb-3">Check your current scores free:</p>
              <a
                href="https://pagespeed.web.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Google PageSpeed Insights  -  pagespeed.web.dev � - 
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                For a complete walkthrough of speed optimisation techniques, read our{" "}
                <a href="/blog/website-speed-optimisation-guide" className="text-primary font-bold hover:underline">website speed optimisation guide</a>.
              </p>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Our Speed Optimisation Process"
          benefits={[
            { title: "Free Baseline Audit", description: "We start by running your site through PageSpeed Insights, GTmetrix, and WebPageTest to get a clear baseline  -  and identify the specific issues causing slowness." },
            { title: "Prioritised Recommendations", description: "Not all speed improvements are equal. We identify the interventions with the highest impact and address those first, so you see meaningful improvement quickly." },
            { title: "Image Compression & WebP", description: "Bulk compression of existing images, WebP conversion, and implementation of automatic compression for future uploads." },
            { title: "Caching Implementation", description: "Server-level and application-level caching configured properly  -  not just activated with default settings." },
            { title: "CSS & JavaScript Optimisation", description: "Minification, deferral, and removal of unnecessary code  -  reducing the amount of data loaded and the time to first interaction." },
            { title: "Ongoing Performance Monitoring", description: "For clients on managed hosting or care plans, Core Web Vitals are monitored continuously  -  so performance regressions are caught and addressed before they become problems." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "How much improvement can I realistically expect?",
              answer: "On most WordPress sites with unaddressed performance issues, load time reductions of 50-70% are achievable. Sites moving from cheap shared hosting to our managed environment alongside performance optimisation typically see the most dramatic improvement. We'll give you a realistic assessment after the initial audit."
            },
            {
              question: "Will speed optimisation affect my website's appearance?",
              answer: "No. Speed optimisation is purely technical  -  optimising how assets are delivered, not the content itself. Your site will look identical to visitors but load significantly faster."
            },
            {
              question: "Can you work on a site hosted elsewhere?",
              answer: "Yes, for most optimisations. Some server-level caching and configuration improvements require access to the hosting environment  -  if your current host doesn't support what's needed, we'll let you know and discuss options."
            },
            {
              question: "Is speed optimisation a one-time job?",
              answer: "The initial work is a one-time project, but performance requires ongoing attention  -  new images added without compression, plugins changing, content growing. Clients on our managed hosting have performance monitoring and ongoing optimisation included."
            },
            {
              question: "How much does website speed optimisation cost?",
              answer: "Speed optimisation projects are scoped based on the site's current state and the work involved. We start with a free audit to understand the situation, then provide a clear quote before any paid work begins."
            }
          ]}
        />

        <CTABanner
          title="Let's find out what's slowing your site down"
          description="Request a free speed audit  -  we'll run your site through professional performance tools and give you an honest report on what's causing slowness and what it would take to fix it."
          buttonText="Request Free Speed Audit"
          buttonHref="/contact"
          secondaryButtonText="View Managed Hosting"
          secondaryButtonHref="/managed-wordpress-hosting"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Website Refreshes & Rebuilds",
              description: "Sometimes performance issues require more than optimisation  -  a full rebuild delivers speed from the ground up.",
              href: "/existing-website",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Performance-optimised hosting with ongoing monitoring included  -  from £50/month.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Ongoing maintenance that includes regular performance checks and database optimisation.",
              href: "/wordpress-maintenance",
              tag: "Related"
            },
            {
              title: "WordPress Security Monitoring",
              description: "Security and performance go hand-in-hand  -  a compromised site is often also a slow site.",
              href: "/wordpress-security",
              tag: "Related"
            },
            {
              title: "Core Web Vitals & Speed",
              description: "How loading speed directly impacts your revenue  -  with practical improvement tips.",
              href: "/blog/core-web-vitals-speed-conversion",
              tag: "Blog"
            },
            {
              title: "5 Signs Your Website Needs a Rebuild",
              description: "When slow load times are a symptom of deeper problems that optimisation alone can't fix.",
              href: "/blog/5-signs-your-website-needs-a-rebuild",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
