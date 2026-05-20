import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialBlockProps {
  quote: string;
  name: string;
  date: string;
  role?: string;
}

export function TestimonialBlock({ quote, name, date, role }: TestimonialBlockProps) {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8"
        >
          <Quote size={32} className="text-primary" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-10"
        >
          "{quote}"
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-bold text-lg">{name}</div>
          {role && <div className="text-muted-foreground">{role}</div>}
          <div className="text-sm text-muted-foreground mt-1">{date}</div>
        </motion.div>
      </div>
    </section>
  );
}
