import { motion } from "framer-motion";

interface StatsBarProps {
  stats: {
    number: string;
    label: string;
  }[];
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="border-y border-border bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
