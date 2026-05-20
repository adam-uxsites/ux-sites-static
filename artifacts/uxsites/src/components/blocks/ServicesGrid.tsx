import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Server, Wrench, Globe, RefreshCcw, Code } from "lucide-react";

const services = [
  {
    title: "Managed WordPress Hosting",
    description: "Enterprise-grade hosting with daily backups, security monitoring, performance optimisation, and expert support — all included from £50/month.",
    icon: Server,
    href: "/managed-wordpress-hosting",
    primary: true,
    tag: "From £50/month"
  },
  {
    title: "Website Support & Care",
    description: "Ongoing maintenance, updates, content changes, and technical support to keep your site secure and performing well.",
    icon: Wrench,
    href: "/website-support"
  },
  {
    title: "New Websites",
    description: "Custom-designed, high-performance websites built for conversion. Bespoke to your brand, optimised for search, and built to last.",
    icon: Globe,
    href: "/new-website"
  },
  {
    title: "Website Refreshes",
    description: "Modernise your existing site with improved UX, faster load times, better mobile experience, and stronger conversion rates.",
    icon: RefreshCcw,
    href: "/existing-website"
  },
  {
    title: "Custom WordPress Development",
    description: "Ad-hoc development, custom functionality, plugin builds, API integrations, and complex WordPress work when you need it.",
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
            className={`group flex flex-col p-8 rounded-2xl border transition-colors relative overflow-hidden
              ${service.primary
                ? 'border-primary/40 bg-card hover:border-primary/70'
                : 'border-border bg-card hover:border-foreground/20'
              }`}
          >
            {service.primary && service.tag && (
              <div className="absolute top-4 right-4">
                <div className="text-xs font-bold px-2 py-1 bg-primary text-primary-foreground rounded-full">
                  {service.tag}
                </div>
              </div>
            )}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.primary ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-bold mb-3 pr-20">{service.title}</h3>
            <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">{service.description}</p>
            <Link href={service.href} className="inline-flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-auto">
              Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
