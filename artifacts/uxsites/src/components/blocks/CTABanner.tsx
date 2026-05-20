import { motion } from "framer-motion";
import { Link } from "wouter";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CTABanner({ title, description, buttonText, buttonHref, secondaryButtonText, secondaryButtonHref }: CTABannerProps) {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={buttonHref}
            data-testid="cta-primary-button"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:opacity-90 transition-opacity h-14"
          >
            {buttonText}
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              data-testid="cta-secondary-button"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-8 py-4 text-lg font-bold hover:border-foreground/30 transition-colors h-14"
            >
              {secondaryButtonText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
