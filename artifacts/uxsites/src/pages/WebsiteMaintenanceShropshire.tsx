import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { StatsBar } from "@/components/blocks/StatsBar";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Check } from "lucide-react";

const nearbyLocations = [
  { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" },
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" },
  { name: "Telford", href: "/wordpress-hosting-shropshire/" },
  { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" },
  { name: "Market Drayton", href: "/wordpress-hosting-shropshire/" },
  { name: "Bridgnorth", href: "/wordpress-hosting-shropshire/" },
  { name: "Ludlow", href: "/wordpress-hosting-shropshire/" },
  { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
];

export default function WebsiteMaintenanceShropshire() {
  return (
    <>
      <SEO
        title="Website Maintenance Shropshire | WordPress Care & Updates | UX Sites"
        description="Professional website maintenance for Shropshire businesses â€” WordPress updates, security, backups, and support from a local expert. Keep your site secure, fast, and up to date."
        url="https://uxsites.co.uk/website-maintenance-shropshire/"
        schema={[
          serviceSchema({
            name: "Website Maintenance Shropshire",
            description: "Professional website maintenance for Shropshire businesses â€” WordPress updates, security monitoring, daily backups, performance optimisation, and expert support from a local specialist.",
            url: "https://uxsites.co.uk/website-maintenance-shropshire/",
            category: "Website Maintenance",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "WordPress Maintenance", url: "https://uxsites.co.uk/wordpress-maintenance/" },
            { name: "Website Maintenance Shropshire", url: "https://uxsites.co.uk/website-maintenance-shropshire/" },
          ]),
          faqSchema([
            { question: "Do you maintain sites you didn't originally build?", answer: "Yes. We review existing sites before taking them on to identify any issues and ensure we can maintain them properly. Most sites transfer smoothly." },
            { question: "What happens if an update breaks my site?", answer: "We take full backups before any updates. If something breaks, we restore immediately and investigate the cause before retrying. This is the benefit of professional maintenance over doing it yourself." },
            { question: "How is this different from the WordPress Care Plan?", answer: "The care plan is an all-inclusive maintenance package with managed hosting, security, backups, updates, and 30 minutes monthly development time. This page focuses specifically on the maintenance aspects for Shropshire businesses." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Stress-free website maintenance for Shropshire"
          headline="Website Maintenance for Shropshire Businesses"
          subheadline="Keep your website secure, fast, and up to date with professional maintenance from a Shropshire-based WordPress expert. No more worrying about updates, backups, or security."
          primaryCta={{ text: "Get Started", href: "/contact/" }}
          secondaryCta={{ text: "Learn About Our Process", href: "/wordpress-maintenance/" }}
          chips={["Shropshire Based", "Daily Backups", "Security Monitoring", "Updates Included", "30 Min Dev Time"]}
        />

        <StatsBar
          stats={[
            { number: "24/7", label: "Security Monitoring", sub: "Continuous active scanning" },
            { number: "30", label: "Day Backup Retention", sub: "Secure off-site storage" },
            { number: "30", label: "Min Dev Time / Month", sub: "Content changes included" },
            { number: "10+", label: "Years Experience", sub: "Supporting Shropshire sites" }
          ]}
        />

        {/* Main content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Shropshire & the Welsh Borders
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional Website Maintenance for Shropshire Businesses
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Your website needs regular maintenance to stay secure, perform well, and keep delivering results. But finding time to manage updates, check backups, and monitor security is hard when you're running a business.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We provide comprehensive website maintenance for Shropshire businesses â€” handling everything from WordPress updates and security monitoring to daily backups and performance optimisation. Your site stays in top shape without you needing to touch anything.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Based near Oswestry, we work with businesses across Shrewsbury, Telford, Oswestry, Whitchurch, and throughout the county. In-person meetings available, and we're always at the end of an email.
                </p>
                <Link
                  href="/wordpress-maintenance/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  View full maintenance details
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "What's Included in Maintenance",
                    items: ["WordPress core, plugin & theme updates", "Daily automated off-site backups", "24/7 security monitoring & scans", "Performance optimisation & caching", "SSL certificate â€” included & auto-renewed", "30 minutes monthly development time"]
                  },
                  {
                    title: "Why Professional Maintenance Matters",
                    items: ["Outdated plugins are the #1 cause of WordPress hacks", "Regular backups mean you never lose work", "Performance monitoring catches slowdowns early", "You don't need to log into WordPress at all", "Everything fixed if an update breaks something", "Peace of mind â€” your site is being looked after"]
                  }
                ].map((group, i) => (
                  <div key={i} className="p-6 bg-card border border-border rounded-2xl">
                    <h3 className="font-bold mb-4">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check size={13} className="text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Areas We Cover Across Shropshire</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We provide website maintenance services to businesses throughout Shropshire and the surrounding region.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {nearbyLocations.map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={loc.href}
                    className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    <MapPin size={14} className="text-primary shrink-0 mr-2" />
                    {loc.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Shropshire Website Maintenance Plans Include"
          subtitle="Everything your website needs to stay secure, fast, and well-maintained â€” all included in one monthly plan."
          benefits={[
            { title: "Managed WordPress Hosting", description: "High-performance hosting environment configured specifically for WordPress." },
            { title: "Daily Automated Backups", description: "Off-site cloud backups every day, retained for 30 days. Full restoration within the hour if needed." },
            { title: "Security Monitoring", description: "Continuous scanning for malware, intrusion attempts, and vulnerabilities." },
            { title: "WordPress Updates", description: "Core, theme and plugin updates applied carefully â€” reviewed for compatibility." },
            { title: "Performance Optimisation", description: "Caching, image compression, and database maintenance to keep load times fast." },
            { title: "30 Minutes Dev Time", description: "Monthly allocation for content changes, text edits, and minor adjustments." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Do you maintain WordPress sites that weren't built by you?",
              answer: "Yes. We review existing sites before taking them on â€” to check for any issues and ensure we can maintain them properly. Most sites transfer smoothly regardless of who built them."
            },
            {
              question: "What's the difference between maintenance and the care plan?",
              answer: "Website maintenance covers the technical upkeep â€” updates, backups, security, and performance. The WordPress Care Plan (£50/month) combines this with managed hosting and 30 minutes of monthly development time for content changes."
            },
            {
              question: "Can you meet in person in Shropshire?",
              answer: "Yes. For Shropshire businesses, in-person meetings are available across the county. We're based near Oswestry and can come to your premises for an initial consultation or ongoing catch-ups."
            },
            {
              question: "How quickly can you fix something if it goes wrong?",
              answer: "For maintenance clients, issues are prioritised. Urgent problems â€” sites down, security incidents â€” are dealt with immediately. Non-urgent work is handled in priority order."
            }
          ]}
        />

        <CTABanner
          title="Take the worry out of website maintenance"
          description="Get in touch and we'll review your current setup. Free initial consultation for Shropshire businesses â€” no obligation."
          buttonText="Get in Touch"
          buttonHref="/contact/"
        />

        <RelatedPages
          title="Maintenance Services & Local Pages"
          pages={[
            {
              title: "WordPress Maintenance Service",
              description: "Full details of our website maintenance services and what's included.",
              href: "/wordpress-maintenance/",
              tag: "Service"
            },
            {
              title: "WordPress Care Plan",
              description: "Ongoing development, updates & priority support from £50/month.",
              href: "/wordpress-care-plan/",
              tag: "Service"
            },
            {
              title: "Website Support & Maintenance",
              description: "Ongoing support, updates and care for existing WordPress websites.",
              href: "/website-support/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting Shropshire",
              description: "Local managed hosting from £50/month â€” keeping your Shropshire site secure and fast.",
              href: "/wordpress-hosting-shropshire/",
              tag: "Related"
            },
            {
              title: "Web Design Shropshire",
              description: "Custom WordPress websites for Shropshire businesses.",
              href: "/web-design-shropshire/",
              tag: "Related"
            },
            {
              title: "WordPress Support Shropshire",
              description: "Expert WordPress support and fixes for Shropshire businesses.",
              href: "/wordpress-support-shropshire/",
              tag: "Related"
            }
          ]}
        />
      </main>
    </>
  );
}
