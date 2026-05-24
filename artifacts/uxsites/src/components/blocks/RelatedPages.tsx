import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPage[];
}

export function RelatedPages({ title = "Related Guides & Services", pages }: RelatedPagesProps) {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-xl font-bold mb-6 text-muted-foreground">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={page.href}
                data-testid={`related-page-${i}`}
                className="group flex flex-col h-full p-5 bg-card border border-border rounded-xl hover:border-foreground/20 transition-colors"
              >
                {page.tag && (
                  <span className="text-sm font-semibold text-muted-foreground border border-border rounded-md px-2 py-0.5 mb-3 self-start">
                    {page.tag}
                  </span>
                )}
                <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {page.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  Read more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
