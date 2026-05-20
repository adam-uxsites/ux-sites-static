import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsGridProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

export function BenefitsGrid({ title, subtitle, benefits }: BenefitsGridProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex p-6 rounded-xl bg-card border border-border hover:border-foreground/15 transition-colors"
            >
              <div className="mr-4 mt-0.5 shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check size={14} className="text-primary-foreground" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
