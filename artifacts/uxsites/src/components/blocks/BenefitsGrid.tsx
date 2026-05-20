import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsGridProps {
  title: string;
  benefits: Benefit[];
}

export function BenefitsGrid({ title, benefits }: BenefitsGridProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex p-6 rounded-xl bg-card border border-border"
            >
              <div className="mr-4 mt-1">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
