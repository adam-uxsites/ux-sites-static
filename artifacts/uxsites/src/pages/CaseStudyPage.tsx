import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, CheckCircle, Clock, Globe, Layers, Quote } from "lucide-react";
import { getCaseStudyBySlug, getRelatedCaseStudies, CASE_STUDIES } from "@/data/caseStudies";
import { breadcrumbSchema } from "@/lib/schemas";

export default function CaseStudyPage() {
  const [, params] = useRoute<{ slug: string }>("/case-studies/:slug");
  const slug = params?.slug;
  const study = slug ? getCaseStudyBySlug(slug) : null;

  if (!study) {
    return (
      <>
        <SEO title="Case Study Not Found | UX Sites" noindex />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="text-3xl font-bold mb-4">Case study not found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist or has been moved.</p>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft size={16} /> Back to case studies
            </Link>
          </div>
        </main>
      </>
    );
  }

  const related = getRelatedCaseStudies(study.slug, 2);

  return (
    <>
      <SEO
        title={`${study.client} Case Study | UX Sites Shropshire`}
        description={study.tagline}
        url={`https://uxsites.co.uk/case-studies/${study.slug}/`}
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Case Studies", url: "https://uxsites.co.uk/case-studies/" },
            { name: study.client, url: `https://uxsites.co.uk/case-studies/${study.slug}/` },
          ]),
        ]}
      />
      <main>
        {/* Back link */}
        <section className="pt-28 pb-0">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back to case studies
            </Link>
          </div>
        </section>

        {/* Hero */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-3 space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {study.service}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                      {study.industry}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{study.client}</h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{study.tagline}</p>
                </motion.div>

                {/* Info bar */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-wrap gap-x-8 gap-y-4 pt-2"
                >
                  <div className="flex items-center gap-2.5">
                    <Clock size={16} className="text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="text-sm font-medium">{study.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Layers size={16} className="text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Service</div>
                      <div className="text-sm font-medium">{study.service}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe size={16} className="text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Industry</div>
                      <div className="text-sm font-medium">{study.industry}</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Screenshot */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden" style={{ borderColor: `${study.accentColor}30` }}>
                  <div className="bg-[#1a1a1a] border-b border-border px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 bg-[#111] rounded-md px-3 py-1 text-xs text-muted-foreground truncate">
                      {new URL(study.liveUrl).hostname}
                    </div>
                    <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <img src={study.screenshot} alt={`${study.client} website`} className="w-full aspect-[16/10] object-cover object-top" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{study.overview}</p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <div className="p-6 bg-background border border-border rounded-2xl">
                  <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <div className="p-6 bg-background border border-border rounded-2xl">
                  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What We Delivered</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {study.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-background border border-border rounded-xl"
                    >
                      <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        {study.testimony && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 bg-card border border-border rounded-3xl"
              >
                <Quote size={32} className="text-primary/20 absolute top-6 left-6" />
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 relative z-10">
                  "{study.testimony.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: study.accentColor }}
                  >
                    {study.testimony.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{study.testimony.author}</div>
                    <div className="text-sm text-muted-foreground">{study.testimony.role}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <CTABanner
          title={`Visit ${study.client}`}
          description="See the live site and explore the full range of services they offer."
          buttonText="Visit Website"
          buttonHref={study.liveUrl}
        />

        {/* Related case studies */}
        {related.length > 0 && (
          <section className="py-16 bg-card border-y border-border">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">More Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((cs, i) => (
                  <motion.div
                    key={cs.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="group flex flex-col bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="bg-[#1a1a1a] border-b border-border px-4 py-2.5 flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/60" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <span className="w-2 h-2 rounded-full bg-green-500/60" />
                        </div>
                        <div className="flex-1 bg-[#111] rounded px-2.5 py-0.5 text-xs text-muted-foreground truncate">
                          {new URL(cs.liveUrl).hostname}
                        </div>
                      </div>
                      <img src={cs.screenshot} alt={cs.client} className="w-full aspect-[16/9] object-cover object-top" />
                      <div className="p-5">
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{cs.client}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{cs.tagline}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABanner
          title="Ready to start your own project?"
          description="Whether you need a new website, hosting, or ongoing support — we'd love to hear about your business."
          buttonText="Get in touch"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
