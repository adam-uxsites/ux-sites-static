import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { breadcrumbSchema, webPageSchema } from "@/lib/schemas";

function StudyCard({ study, index }: { study: typeof CASE_STUDIES[0]; index: number }) {
  const challengeSnippet = study.challenge.length > 200
    ? study.challenge.slice(0, 200).replace(/\s+\S*$/, "") + "…"
    : study.challenge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="grid md:grid-cols-5">
        {/* Screenshot column */}
        <div className="md:col-span-2 flex flex-col">
          <div className="bg-[#1a1a1a] border-b border-border px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 bg-[#111] rounded-md px-3 py-1 flex items-center gap-2 min-w-0">
              <span className="text-xs text-muted-foreground truncate">{new URL(study.liveUrl).hostname}</span>
            </div>
            <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-foreground transition-colors" aria-label={`Visit ${study.client}`}>
              <ExternalLink size={11} />
            </a>
          </div>
          <div className="flex-1 overflow-hidden bg-[#111]">
            <img
              src={study.screenshot}
              alt={`${study.client} website`}
              className="w-full h-full object-cover object-top min-h-[200px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content column */}
        <div className="md:col-span-3 p-6 md:p-8 flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border bg-primary/10 text-primary border-primary/20">
                  {study.service}
                </span>
                <span className="text-xs text-muted-foreground">{study.industry}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={11} /> {study.duration}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold leading-tight">{study.client}</h2>
              <p className="text-sm text-muted-foreground mt-1">{study.tagline}</p>
            </div>
          </div>

          {/* Overview */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {study.overview}
          </p>

          {/* Challenge excerpt */}
          <div className="p-3.5 bg-background border border-border rounded-xl">
            <p className="text-xs font-semibold text-foreground mb-1">The challenge</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{challengeSnippet}</p>
          </div>

          {/* Key deliverables as pills */}
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">Key deliverables</p>
            <div className="flex flex-wrap gap-1.5">
              {study.deliverables.slice(0, 5).map((d, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-background border border-border px-2.5 py-1 rounded-full"
                >
                  <CheckCircle size={10} className="text-primary" />
                  {d}
                </span>
              ))}
              {study.deliverables.length > 5 && (
                <span className="text-xs text-muted-foreground px-2 py-1">
                  +{study.deliverables.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {study.techStack.map((t, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
          >
            Read full case study <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | UX Sites Shropshire"
        description="Real projects we've delivered — new builds, managed hosting migrations, and ongoing website support for businesses across the UK."
        url="https://uxsites.co.uk/case-studies"
        schema={[
          webPageSchema({
            name: "Case Studies | UX Sites",
            description: "Real web design and hosting projects delivered for businesses across the UK.",
            url: "https://uxsites.co.uk/case-studies",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Case Studies", url: "https://uxsites.co.uk/case-studies" },
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
                New builds, hosting migrations, ongoing care plans — real work for real businesses. Each project
                came with its own challenges and our approach was tailored accordingly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case study cards — expanded layout */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-5xl space-y-8">
            {CASE_STUDIES.map((study, i) => (
              <StudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </section>

        <CTABanner
          title="Want to see your project here?"
          description="Whether you need a new website, managed hosting, or ongoing support — we'd love to talk about your business."
          buttonText="Start a conversation"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
