import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

interface PricingPlan {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
}

interface PricingBlockProps {
  plans: PricingPlan[];
}

export function PricingBlock({ plans }: PricingBlockProps) {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'} bg-background`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <CheckCircle2 className="text-primary mr-3 shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.ctaHref} className={`w-full inline-flex items-center justify-center rounded-lg px-6 py-4 text-sm font-bold transition-colors ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'}`}>
                {plan.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
