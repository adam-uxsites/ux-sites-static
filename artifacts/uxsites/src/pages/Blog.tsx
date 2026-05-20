import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog & Insights | UX Sites Shropshire"
        description="Expert insights on WordPress hosting, web design, SEO, and digital strategy for small and medium businesses in Shropshire and across the UK."
      />
      <main>
        <section className="pt-32 pb-16 md:pt-44 md:pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                Insights & thinking
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
              WordPress, Web Design & Digital Strategy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Practical guides and honest perspectives on web performance, user experience, WordPress, SEO, and running a better business online — written for Shropshire businesses and beyond.
            </p>
          </div>
        </section>

        <section className="pb-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-6">
              {BLOG_POSTS.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  data-testid={`article-card-${post.slug}`}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="border border-border text-foreground px-2.5 py-0.5 rounded-md text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    data-testid={`read-article-${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors"
                  >
                    Read article
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Have a question about your website?"
          description="Every article here is based on real problems real businesses face. If something resonates, let's talk — there's no obligation, just a straight conversation."
          buttonText="Get in Touch"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
