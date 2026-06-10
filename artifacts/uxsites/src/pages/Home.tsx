import { lazy, Suspense } from "react";
import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { StatsBar } from "@/components/blocks/StatsBar";
import { SiteDashboardMockup } from "@/components/blocks/SiteDashboardMockup";
import { webSiteSchema, organizationSchema } from "@/lib/schemas";
import { motion } from "framer-motion";

const HomeBelowFold = lazy(() => import("./HomeBelowFold"));

export default function Home() {
  return (
    <>
      <SEO
        title="UX Sites | Managed WordPress Hosting & Web Design Shropshire"
        description="Managed WordPress hosting & care plans from £50–£500/month. Daily backups, real-time security, expert support — no technical headaches. Google UX Certified."
        url="https://uxsites.co.uk/"
        schema={[webSiteSchema(), organizationSchema()]}
      />
      <main>
        <HeroBlock 
          tagline="Perfect for small/medium businesses"
          headline="Managed Hosting, Care Plans & WordPress Support for UK Businesses"
          subheadline="From £50/month managed hosting to full-service care plans at £250 or £500/month  —  hosting, updates, security, development, and expert support included. Focus on running your business while we handle your website."
          primaryCta={{ text: "Managed Hosting", href: "/managed-wordpress-hosting/" }}
          secondaryCta={{ text: "View Care Plans", href: "/wordpress-care-plan/" }}
          chips={["Managed Hosting £50/mo", "Care Plan £250/mo", "Care Plan Pro £500/mo", "Security & Backups", "Expert Support", "Content Updates", "Performance Optimised", "Uptime Monitoring"]}
        />
        
        <StatsBar 
          stats={[
            { number: "15+", label: "Industries Served" },
            { number: "10+", label: "Years Experience" },
            { number: "228+", label: "Sites worked on" },
            { number: "47,479", label: "Emails Received" }
          ]}
        />

        {/* Hosting dashboard visual */}
        <section className="py-24 bg-muted/20 border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                  Managed Hosting
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                  Your site monitored, maintained &amp; secure  -  around the clock
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  From daily off-site backups to real-time malware scanning, our managed WordPress hosting handles everything so you never have to think about it.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  You'll always have a live dashboard view of your site health, and we'll reach out proactively if anything needs attention.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["99.9% uptime", "Daily backups", "Real-time security", "Instant support"].map(tag => (
                    <span key={tag} className="text-sm px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SiteDashboardMockup />
              </motion.div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[120vh]" />}>
          <HomeBelowFold />
        </Suspense>
      </main>
    </>
  );
}
