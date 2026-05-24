import { motion } from "framer-motion";
import { Link } from "wouter";

interface HeroBlockProps {
  tagline?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  chips?: string[];
}

export function HeroBlock({ tagline, headline, subheadline, primaryCta, secondaryCta, chips }: HeroBlockProps) {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Floating triangles */}
      <div className="absolute -top-20 -right-10 w-64 h-64 bg-primary/10 rotate-[180deg] animate-[float-2_12s_ease-in-out_infinite] pointer-events-none" style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}></div>
      <div className="absolute top-44 -right-32 w-44 h-44 bg-primary/10 rotate-[135deg] animate-[float-1_10s_ease-in-out_infinite] pointer-events-none hidden md:block" style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}></div>
      <div className="absolute bottom-0 -right-14 w-56 h-56 bg-primary/10 rotate-[180deg] animate-[float-1_10s_ease-in-out_infinite] pointer-events-none" style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}></div>
      <div className="absolute bottom-44 right-16 w-48 h-48 bg-primary/10 rotate-[225deg] animate-[float-2_12s_ease-in-out_infinite] pointer-events-none hidden md:block" style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-3xl opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center flex flex-col items-center">
          {tagline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
              {tagline}
            </motion.div>
          )}

            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-hero mb-6 max-w-4xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                data-testid="hero-primary-cta"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold shadow hover:opacity-90 transition-opacity h-12"
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                data-testid="hero-secondary-cta"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card text-foreground px-8 py-3.5 text-sm font-bold hover:border-foreground/30 transition-colors h-12"
              >
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>

          {chips && chips.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-2 max-w-3xl"
            >
              {chips.map((chip, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-card border border-border text-sm text-muted-foreground font-medium"
                >
                  {chip}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
