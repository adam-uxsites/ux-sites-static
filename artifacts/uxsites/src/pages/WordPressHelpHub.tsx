import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { StatsBar } from "@/components/blocks/StatsBar";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, Shield, Wrench, AlertTriangle, CheckCircle, Zap, BookOpen } from "lucide-react";

const guides = [
  {
    title: "How to Fix a Slow WordPress Website",
    description: "Step-by-step guide to diagnose and fix slow WordPress loading times. Includes image optimization, caching, and database cleanup.",
    href: "/wordpress-help/wordpress-slow/",
    tag: "Performance",
    readTime: "10 min read",
    icon: Zap,
  },
  {
    title: "What to Do If a WordPress Update Breaks Your Site",
    description: "Emergency recovery guide for when WordPress updates break your site. Rollback, backup restoration, and conflict resolution steps.",
    href: "/wordpress-help/wordpress-update-issues/",
    tag: "Troubleshooting",
    readTime: "8 min read",
    icon: Wrench,
  },
  {
    title: "How to Secure a WordPress Website",
    description: "Essential WordPress security measures  -  strong passwords, updates, security plugins, and more. Protect your site from hackers.",
    href: "/wordpress-help/wordpress-security/",
    tag: "Security",
    readTime: "12 min read",
    icon: Shield,
  },
  {
    title: "Why WordPress Websites Get Hacked",
    description: "Understanding common WordPress attack vectors including outdated software, weak passwords, and vulnerable plugins. Learn prevention methods.",
    href: "/wordpress-help/wordpress-hacked/",
    tag: "Prevention",
    readTime: "15 min read",
    icon: AlertTriangle,
  },
  {
    title: "WordPress Maintenance Checklist",
    description: "Complete WordPress maintenance checklist for small businesses. Daily, weekly, monthly, quarterly, and annual tasks to keep your site healthy.",
    href: "/wordpress-help/wordpress-maintenance/",
    tag: "Maintenance",
    readTime: "18 min read",
    icon: CheckCircle,
  },
  {
    title: "WordPress Backup Guide",
    description: "How to back up a WordPress website -  plugins, hosting backups, off-site storage, and how to test a restore properly.",
    href: "/wordpress-help/wordpress-backup-guide/",
    tag: "Backups",
    readTime: "10 min read",
    icon: Shield,
  },
  {
    title: "WordPress Site Not Loading",
    description: "Your WordPress site is down or not loading -  how to diagnose and fix the cause quickly, from DNS to plugin errors.",
    href: "/wordpress-help/wordpress-not-loading/",
    tag: "Troubleshooting",
    readTime: "9 min read",
    icon: Wrench,
  },
  {
    title: "Fix WordPress 404 Errors",
    description: "Why WordPress shows 404 errors and how to fix broken pages and links -  permalinks, redirects, and deleted content.",
    href: "/wordpress-help/wordpress-404-errors/",
    tag: "Troubleshooting",
    readTime: "8 min read",
    icon: AlertTriangle,
  },
  {
    title: "WordPress Malware Removal",
    description: "How to detect and remove WordPress malware -  signs of infection, cleaning steps, and when to call in professionals.",
    href: "/wordpress-help/wordpress-malware-removal/",
    tag: "Security",
    readTime: "14 min read",
    icon: Shield,
  },
];

const helpFaqs = [
  {
    question: "What kind of WordPress help do you offer?",
    answer: "We provide expert WordPress guidance across performance optimization, security hardening, troubleshooting update issues, maintenance planning, and hack prevention. Our guides are written by experienced WordPress developers who work with the platform daily."
  },
  {
    question: "Are these guides suitable for beginners?",
    answer: "Yes  -  our guides are written to be accessible to WordPress site owners of all skill levels. Technical steps are explained clearly, and we always recommend professional assistance for anything beyond comfortable capability."
  },
  {
    question: "Do you offer hands-on WordPress help as a service?",
    answer: "Absolutely. Beyond these guides, we provide hands-on WordPress maintenance, security monitoring, performance optimization, and emergency recovery services. Get in touch if you'd rather have an expert handle it."
  },
  {
    question: "How often is this help content updated?",
    answer: "We review and update our guides regularly to reflect the latest WordPress versions, plugin ecosystems, and security best practices. The WordPress landscape evolves quickly  -  our advice stays current."
  },
];

const stats = [
  { number: "43%", label: "of all websites", sub: "Run on WordPress" },
  { number: "500M+", label: "WordPress sites", sub: "Across the web" },
  { number: "30K+", label: "Plugins available", sub: "In the repository" },
  { number: "10K+", label: "Themes to choose", sub: "Free & premium" },
];

export default function WordPressHelpHub() {
  return (
    <>
      <SEO
        title="WordPress Help & Guides | UX Sites Shropshire"
        description="Practical WordPress guides to maintain, secure, speed up, and troubleshoot your website. Expert advice from Shropshire-based WordPress specialists."
        url="https://uxsites.co.uk/wordpress-help/"
        schema={[
          serviceSchema({
            name: "WordPress Help & Guides",
            description: "Expert WordPress tutorials and guides covering performance, security, maintenance, troubleshooting, and hack prevention for small business websites.",
            url: "https://uxsites.co.uk/wordpress-help/",
            category: "WordPress Guides",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Help & Guides", url: "https://uxsites.co.uk/wordpress-help/" },
          ]),
          faqSchema(helpFaqs),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Expert WordPress help"
          headline="WordPress Help & Guides"
          subheadline="Expert WordPress tutorials and guides to help you maintain, secure, and optimize your website."
          chips={["Performance", "Security", "Maintenance", "Troubleshooting", "Prevention"]}
        />

        <StatsBar stats={stats} />

        {/* Guide cards */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All WordPress Help Guides</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Practical, expert-written guides covering the most common WordPress issues small business owners face.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, i) => {
                const Icon = guide.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={guide.href}
                      className="group flex flex-col h-full p-6 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center mb-4">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-semibold text-muted-foreground border border-border rounded-md px-2 py-0.5">
                          {guide.tag}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={11} />
                          {guide.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-3">
                        {guide.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                        Read guide
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why these guides exist */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why We Created These WordPress Guides</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We work with WordPress every day  -  maintaining, securing, and optimising sites for small businesses. These guides share the practical knowledge we've gained from real-world experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Real Experience",
                  desc: "These guides aren't theoretical. They're based on actual fixes, recoveries, and optimisations we've performed for clients."
                },
                {
                  icon: Clock,
                  title: "Practical & Actionable",
                  desc: "Every guide gives you clear, step-by-step instructions you can follow immediately  -  no fluff, no filler."
                },
                {
                  icon: Shield,
                  title: "Regularly Updated",
                  desc: "WordPress changes fast. We keep our guides current with the latest versions, plugins, and security practices."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-background border border-border rounded-2xl text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <FAQBlock
          title="WordPress Help  -  Common Questions"
          faqs={helpFaqs}
        />

        <CTABanner
          title="Need hands-on WordPress help?"
          description="Not sure where to start? We provide professional WordPress support, maintenance, and security services  -  so you don't have to figure it all out alone."
          buttonText="Get WordPress Support"
          buttonHref="/contact/"
          secondaryButtonText="View Our Services"
          secondaryButtonHref="/website-support/"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Website Support & Care Plans",
              description: "Ongoing WordPress support, maintenance, and monitoring  -  handled for you.",
              href: "/website-support/",
              tag: "Service"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Regular updates, backups, security scans, and performance optimisation.",
              href: "/wordpress-maintenance/",
              tag: "Service"
            },
            {
              title: "WordPress Security Monitoring",
              description: "Active protection against hacks, malware, and vulnerabilities.",
              href: "/wordpress-security/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Hosting with built-in maintenance, security, and expert support.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
          ]}
        />
      </main>
    </>
  );
}
