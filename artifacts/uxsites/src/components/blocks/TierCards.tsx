import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export interface TierPlan {
  name: string;
  monthly: number;
  annual: number;
  description: string;
  features: string[];
  href: string;
  ctaText: string;
  highlighted?: boolean;
}

interface TierCardsProps {
  tiers: TierPlan[];
  annualNote?: string;
}

export function TierCards({ tiers, annualNote }: TierCardsProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Compare the Plans</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three levels of service  —  pick the tier that fits your business.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center bg-background border border-border rounded-full p-1 gap-0">
            <button
              onClick={() => setAnnual(false)}
              className={`relative z-10 px-6 py-2.5 text-sm font-bold rounded-full transition-colors ${!annual ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative z-10 px-6 py-2.5 text-sm font-bold rounded-full transition-colors ${annual ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Annual
            </button>
            {/* Sliding indicator */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary transition-transform duration-200 ease-out ${annual ? 'translate-x-full' : 'translate-x-0'}`}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => {
            const price = annual ? tier.annual : tier.monthly;
            const period = annual ? "year" : "month";
            const saving = annual ? (tier.monthly * 12 - tier.annual) : 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl border ${
                  tier.highlighted
                    ? 'border-primary shadow-lg shadow-primary/10 bg-background'
                    : 'border-border bg-card'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-7 pb-0">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-1">
                    <span className="text-5xl font-bold">£{price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-lg">/{period}</span>
                  </div>
                  {annual && saving > 0 && (
                    <div className="text-sm text-primary font-bold mb-1">
                      Save £{saving.toLocaleString()}
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-6">
                    {tier.description}
                  </p>
                </div>

                <div className="px-7 pb-7 flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`w-full inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold transition-colors ${
                      tier.highlighted
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                    }`}
                  >
                    {tier.ctaText}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {annual && annualNote && (
          <p className="text-center text-sm text-muted-foreground mt-6">{annualNote}</p>
        )}
      </div>
    </section>
  );
}
