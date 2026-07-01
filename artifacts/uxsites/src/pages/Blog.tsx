import { useState, useMemo } from "react";
import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { breadcrumbSchema, webPageSchema, blogSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BLOG_POSTS, CATEGORY_COLORS } from "@/data/blogPosts";

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

function getColor(cat: string): string {
  return CATEGORY_COLORS[cat] || "#40ED88";
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(
    () => activeCategory === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <SEO
        title="Blog & Insights | UX Sites Shropshire"
        description="Expert insights on WordPress hosting, web design, SEO, and digital strategy for UK small businesses. Practical advice from a Google UX Certified developer based in Shropshire."
        url="https://uxsites.co.uk/blog/"
        schema={[
          webPageSchema({
            name: "Blog & Insights | UX Sites",
            description: "Expert insights on WordPress hosting, web design, SEO, and digital strategy for small and medium businesses in Shropshire and across the UK.",
            url: "https://uxsites.co.uk/blog/",
          }),
          blogSchema(),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Blog", url: "https://uxsites.co.uk/blog/" },
          ]),
        ]}
      />
      <main>
        <section className="pt-10 pb-12 md:pt-14 md:pb-16">
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
              Practical guides and honest perspectives on web performance, user experience, WordPress, SEO, and running a better business online  -  written for Shropshire businesses and beyond.
            </p>

            <div className="flex flex-wrap gap-2 mt-10">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? "text-black shadow-sm"
                      : "bg-card border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                  style={activeCategory === cat ? { backgroundColor: getColor(cat) } : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            {filteredPosts.length === 0 ? (
              <p className="text-muted-foreground text-center py-16">No articles in this category yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
              {filteredPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  data-testid={`article-card-${post.slug}`}
                  className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/20 transition-colors h-full"
                  >
                    <div
                      className="aspect-[16/10] overflow-hidden flex items-center justify-center p-6"
                      style={{
                        background: `linear-gradient(135deg, ${getColor(post.category)}44 0%, ${getColor(post.category)}18 50%, transparent 100%)`
                      }}
                    >
                      <h3 className="text-lg md:text-xl font-bold text-white text-center leading-snug drop-shadow-sm">
                        {post.title}
                      </h3>
                    </div>
                    <div className="p-7">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span
                          className="px-2.5 py-0.5 rounded-md text-sm font-semibold"
                          style={{
                            backgroundColor: `${getColor(post.category)}20`,
                            color: getColor(post.category),
                            border: `1px solid ${getColor(post.category)}40`,
                          }}
                        >
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
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-4">
                        Read article
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          )}
          </div>
        </section>

        <CTABanner
          title="Have a question about your website?"
          description="Every article here is based on real problems real businesses face. If something resonates, let's talk  -  there's no obligation, just a straight conversation."
          buttonText="Get in Touch"
          buttonHref="/contact/"
        />
      </main>
    </>
  );
}
