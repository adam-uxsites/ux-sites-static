import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { breadcrumbSchema, webPageSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const resources = [
  {
    slug: "website-stats-quiz",
    title: "How Well Do You Know Your Website Stats?",
    excerpt: "Answer 15 questions about your analytics and find out how well you really know your website stats. A fun, 2-minute quiz that reveals blind spots and opportunities.",
    category: "Quiz",
    color: "#48C9B0",
  },
];

function getColor(cat: string): string {
  return "#48C9B0";
}

export default function Resources() {
  return (
    <>
      <SEO
        title="Free Resources & Tools | UX Sites"
        description="Free tools, quizzes, and resources to help you understand your website better. Analytics health checks, calculators, and interactive guides for UK businesses."
        url="https://uxsites.co.uk/resources/"
        schema={[
          webPageSchema({
            name: "Free Resources & Tools | UX Sites",
            description: "Free tools, quizzes, and resources to help you understand your website better.",
            url: "https://uxsites.co.uk/resources/",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Resources", url: "https://uxsites.co.uk/resources/" },
          ]),
        ]}
      />
      <main>
        <section className="pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48C9B0] mr-2"></span>
                Free tools & resources
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
              Resources to Help You Build a Better Website
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Free interactive tools, quizzes, and guides designed to help you understand your website,
              identify opportunities, and make smarter decisions  -  no sales pitch required.
            </p>
          </div>
        </section>

        <section className="pb-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            {resources.length === 0 ? (
              <p className="text-muted-foreground text-center py-16">More resources coming soon.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {resources.map((resource, i) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}/`}
                    className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/20 transition-colors h-full"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-background">
                        <img
                          src={`/resources/${resource.slug}.svg`}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-7">
                        <span
                          className="inline-flex px-2.5 py-0.5 rounded-md text-sm font-semibold mb-3"
                          style={{
                            backgroundColor: `${getColor(resource.category)}20`,
                            color: getColor(resource.category),
                            border: `1px solid ${getColor(resource.category)}40`,
                          }}
                        >
                          {resource.category}
                        </span>
                        <h3 className="text-lg font-bold leading-snug mt-4">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mt-2">
                          {resource.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-4">
                          Take the quiz
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
          title="Want to Go Deeper?"
          description="If the quiz revealed blind spots in your analytics, we can help you set up proper tracking and start making data-driven decisions."
          buttonText="Get in Touch"
          buttonHref="/contact/"
        />
      </main>
    </>
  );
}
