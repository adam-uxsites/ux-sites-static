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
    <section className="section-padding-lg bg-background">
      <div className="section-wrap">
        <div className="section-header">
          <h2 className="heading-section mb-4">{title}</h2>
          {subtitle && <p className="subhead-section">{subtitle}</p>}
        </div>

        <div className="grid-cards-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex p-6 rounded-xl bg-card border border-border card-hover"
            >
              <div className="mr-4 mt-0.5 shrink-0">
                <div className="check-bullet">
                  <Check size={14} className="text-primary-foreground" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="heading-card mb-2">{benefit.title}</h3>
                <p className="body-card">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
