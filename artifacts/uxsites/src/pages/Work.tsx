import { SEO } from "@/components/seo/SEO";
import { WorkShowcase } from "@/components/blocks/WorkShowcase";
import { CTABanner } from "@/components/blocks/CTABanner";
import { breadcrumbSchema, webPageSchema } from "@/lib/schemas";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";

const industries = [...new Set(PORTFOLIO.map(p => p.industry))].length;

export default function Work() {
  return (
    <>
      <SEO
        title="Our Work | Recent Projects & Hosting Clients | UX Sites Shropshire"
        description="Real websites we've designed, built, and manage for businesses across Shropshire and the UK. See our portfolio of new builds, redesigns, and managed hosting clients."
        url="https://uxsites.co.uk/work"
        schema={[
          webPageSchema({
            name: "Our Work | UX Sites",
            description: "Recent web design projects and managed hosting clients across Shropshire and the UK.",
            url: "https://uxsites.co.uk/work",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Our Work", url: "https://uxsites.co.uk/work" },
          ]),
        ]}
      />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Our Work
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Projects & Hosting Clients
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A selection of the websites we've built, redesigned, and manage on behalf of businesses across Shropshire and the UK.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              {[
                { value: PORTFOLIO.length.toString(), label: "Featured Projects" },
                { value: `${industries}`, label: "Industries" },
                { value: "228+", label: "Sites Delivered" },
                { value: "10+", label: "Years Experience" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 px-6 py-4 bg-card border border-border rounded-xl">
                  <span className="text-3xl font-bold text-primary">{value}</span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Grid  -  all items */}
        <WorkShowcase showAll />

        {/* Note about more */}
        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-3">Read the full case studies</h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto mb-6">
                Get the full story behind each project — the challenges, our approach, and what was delivered.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to be our next project?"
          description="Whether you need a new website, a hosting upgrade, or ongoing support  -  we'd love to hear about your business."
          buttonText="Start the conversation"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
