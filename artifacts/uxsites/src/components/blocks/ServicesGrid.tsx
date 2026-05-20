import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Server, Wrench, Globe, RefreshCcw, Code } from "lucide-react";

const services = [
  {
    title: "Managed WordPress Hosting",
    description: "Enterprise-grade hosting with daily backups, security monitoring, and expert support included.",
    icon: Server,
    href: "/managed-wordpress-hosting",
    primary: true
  },
  {
    title: "Website Support & Care",
    description: "Ongoing maintenance, content updates, and technical support to keep your site running smoothly.",
    icon: Wrench,
    href: "/website-support"
  },
  {
    title: "New Websites",
    description: "Custom-designed, high-performance websites built to convert visitors into customers.",
    icon: Globe,
    href: "/new-website"
  },
  {
    title: "Website Refreshes",
    description: "Modernize your existing site with improved UX, faster load times, and better conversion rates.",
    icon: RefreshCcw,
    href: "/existing-website"
  },
  {
    title: "Custom Development",
    description: "Ad-hoc WordPress development, custom functionality, and complex integrations.",
    icon: Code,
    href: "/contact"
  }
];

export function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group flex flex-col p-8 rounded-2xl border ${service.primary ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'} hover:border-primary/50 transition-colors relative overflow-hidden`}
          >
            {service.primary && (
              <div className="absolute top-0 right-0 p-4">
                <div className="text-xs font-bold px-2 py-1 bg-primary text-primary-foreground rounded-full">Primary Service</div>
              </div>
            )}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.primary ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground flex-grow mb-6">{service.description}</p>
            <Link href={service.href} className="inline-flex items-center text-sm font-bold text-primary group-hover:underline mt-auto">
              Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
