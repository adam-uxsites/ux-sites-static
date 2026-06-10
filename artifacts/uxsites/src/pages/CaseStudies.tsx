import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Clock } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { breadcrumbSchema, webPageSchema } from "@/lib/schemas";

function StudyCard({ study, index }: { study: typeof CASE_STUDIES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <Link
        href={`/case-studies/${study.slug}/`}
        className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      >
        {/* Browser chrome */}
        <div className="bg-[#1a1a1a] border-b border-border px-4 py-3 flex items-center gap-3 shrink-0">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 bg-[#111] rounded-md px-3 py-1 flex items-center gap-2 min-w-0">
            <span className="text-xs text-muted-foreground truncate">{new URL(study.liveUrl).hostname}</span>
          </div>
          <span className="text-muted-foreground/40 group-hover:text-foreground transition-colors">
            <ExternalLink size={11} />
          </span>
        </div>

        {/* Screenshot - 16:9 */}
        <div className="aspect-video overflow-hidden bg-[#111]">
          <img
            src={study.screenshot}
            alt={`${study.client} website`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Card body */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border bg-primary/10 text-primary border-primary/20">
              {study.service}
            </span>
            <span className="text-xs text-muted-foreground">{study.industry}</span>
            <span className="text-xs text-muted-foreground">Â·</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={11} /> {study.duration}
            </span>
          </div>
          <h2 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">{study.client}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{study.overview}</p>
          <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-auto">
            Read case study <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | UX Sites Shropshire"
        description="Real projects we've delivered â€” new builds, managed hosting migrations, and ongoing website support for businesses across the UK."
        url="https://uxsites.co.uk/case-studies/"
        schema={[
          webPageSchema({
            name: "Case Studies | UX Sites",
            description: "Real web design and hosting projects delivered for businesses across the UK.",
            url: "https://uxsites.co.uk/case-studies/",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Case Studies", url: "https://uxsites.co.uk/case-studies/" },
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
                Case Studies
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Projects We've Delivered
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                New builds, hosting migrations, ongoing care plans â€” real work for real businesses. Each project
                came with its own challenges and our approach was tailored accordingly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case study cards â€” expanded layout */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-5xl space-y-8">
            {CASE_STUDIES.map((study, i) => (
              <StudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </section>

        <CTABanner
          title="Want to see your project here?"
          description="Whether you need a new website, managed hosting, or ongoing support â€” we'd love to talk about your business."
          buttonText="Start a conversation"
          buttonHref="/contact/"
        />
      </main>
    </>
  );
}
