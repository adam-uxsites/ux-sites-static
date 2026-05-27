import { SEO } from "@/components/seo/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You | UX Sites"
        description="Thanks for reaching out. We've received your message and will be in touch within 24 hours."
        noindex
        url="https://uxsites.co.uk/thank-you"
      />
      <main>
        <section className="pt-40 pb-32">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 size={48} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Thanks for Reaching Out
              </h1>
              <p className="text-lg text-muted-foreground mb-3 max-w-md mx-auto">
                We've received your message and will be in touch within 24 hours.
              </p>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                In the meantime, feel free to browse our services or check the blog.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Back to Home
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-bold hover:bg-muted transition-colors"
                >
                  Read the Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
