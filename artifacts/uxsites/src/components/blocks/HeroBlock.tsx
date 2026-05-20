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
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center flex flex-col items-center">
          {tagline && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
            >
              {tagline}
            </motion.div>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
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
              <Link href={primaryCta.href} className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold shadow hover:bg-primary/90 transition-colors h-12">
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="inline-flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground px-8 py-3.5 text-sm font-bold shadow hover:bg-secondary/90 transition-colors h-12">
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
                <div key={i} className="px-3 py-1.5 rounded-md bg-card border border-border text-xs text-muted-foreground font-medium flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 opacity-70"></span>
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
