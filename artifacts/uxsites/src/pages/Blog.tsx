import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

// Static placeholder posts
const POSTS = [
  {
    id: 1,
    title: "Why Managed WordPress Hosting is Essential for UK Businesses",
    excerpt: "Discover the hidden costs of cheap hosting and why a managed solution is the best investment for your online presence.",
    date: "Feb 12, 2026",
    category: "Hosting",
  },
  {
    id: 2,
    title: "5 Signs Your Website Needs a Rebuild",
    excerpt: "Is your site driving customers away? Learn the key indicators that it's time for a modern redesign.",
    date: "Jan 28, 2026",
    category: "Design",
  },
  {
    id: 3,
    title: "Core Web Vitals: Speed and Conversion",
    excerpt: "How loading speed directly impacts your bottom line, and practical ways to improve it.",
    date: "Jan 10, 2026",
    category: "Performance",
  }
];

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog & Insights | UX Sites Shropshire" 
        description="Expert insights on web design, WordPress hosting, UX, and digital strategy for businesses."
      />
      <main>
        <HeroBlock 
          headline="Insights & Thoughts"
          subheadline="Expert perspectives on web performance, user experience, and digital strategy for modern businesses."
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-8">
              {POSTS.map((post, i) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center text-sm text-muted-foreground mb-4 gap-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href="/blog" className="text-primary font-bold text-sm inline-flex items-center hover:underline">
                    Read Article
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTABanner 
          title="Ready to upgrade your web presence?"
          description="Let's apply these strategies to your business."
          buttonText="Start a Project"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
