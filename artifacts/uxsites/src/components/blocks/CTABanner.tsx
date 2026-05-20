import { motion } from "framer-motion";
import { Link } from "wouter";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({ title, description, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
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
        >
          <Link href={buttonHref} className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-bold shadow-lg hover:bg-primary/90 transition-all hover:scale-105 h-14">
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
