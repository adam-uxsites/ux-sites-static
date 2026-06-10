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

export default function WordPressSupportShropshire() {
  return (
    <>
      <SEO
        title="WordPress Support Shropshire | Expert Help & Maintenance | UX Sites"
        description="Professional WordPress support for Shropshire businesses â€” updates, security, fixes, and ongoing care from a local expert. Based near Oswestry, serving the whole county."
        url="https://uxsites.co.uk/wordpress-support-shropshire/"
        schema={[
          serviceSchema({
            name: "WordPress Support Shropshire",
            description: "Expert WordPress support for Shropshire businesses â€” updates, security monitoring, bug fixes, performance optimisation, and ongoing care from a local WordPress specialist.",
            url: "https://uxsites.co.uk/wordpress-support-shropshire/",
            category: "WordPress Support",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Website Support", url: "https://uxsites.co.uk/website-support/" },
            { name: "WordPress Support Shropshire", url: "https://uxsites.co.uk/wordpress-support-shropshire/" },
          ]),
          faqSchema([
            { question: "Do you support WordPress sites that weren't built by you?", answer: "Yes. We review existing sites before taking them on to identify any issues and ensure we can support them properly. Most sites transfer smoothly regardless of who built them." },
            { question: "How quickly do you respond to support requests?", answer: "We aim to respond within a few hours during business hours. Urgent issues â€” sites down, security incidents â€” are prioritised and dealt with immediately." },
            { question: "Can you meet in person in Shropshire?", answer: "Yes. For Shropshire businesses, in-person meetings are available across the county. We're based near Oswestry and can come to you." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Local WordPress support, when you need it"
          headline="WordPress Support for Shropshire Businesses"
          subheadline="Reliable WordPress support from a Shropshire-based expert â€” updates, security, fixes, and ongoing care. No generic helpdesk, no waiting days for a response, no hidden charges."
          primaryCta={{ text: "Get Support", href: "/contact/" }}
          secondaryCta={{ text: "View Our Care Plans", href: "/wordpress-care-plan/" }}
          chips={["Shropshire Based", "Quick Response", "Security Monitoring", "Updates Included", "Local Expert"]}
        />

        <StatsBar
          stats={[
            { number: "4+", label: "Hour Response Time", sub: "Typically much faster" },
            { number: "99.9%", label: "Uptime for Hosted Sites", sub: "Monitored every minute" },
            { number: "10+", label: "Years WordPress Experience", sub: "Supporting Shropshire businesses" },
            { number: "30", label: "Min Dev Time / Month", sub: "Content changes included" }
          ]}
        />

        {/* Main content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  WordPress Support Across Shropshire
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  WordPress Support That Actually Helps
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Most WordPress support options are either expensive agencies or generic helpdesks that don't know your site. We're a Shropshire-based WordPress specialist who can support your site regardless of who built it â€” handling everything from routine updates to urgent fixes.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Whether your site has broken after an update, you need security issues fixed, or you just want someone keeping an eye on things â€” we provide straightforward WordPress support for Shropshire businesses.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Based near Oswestry, we can offer in-person meetings for Shropshire clients as well as remote support. You're dealing with a real person who knows WordPress inside out, not a ticket system.
                </p>
                <Link
                  href="/website-support/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  View full support details
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "What We Can Help With",
                    items: ["WordPress core, plugin & theme updates", "Security monitoring & malware removal", "Broken site repair & bug fixes", "Performance optimisation & speed fixes", "Content updates & text changes", "SSL & certificate management"]
                  },
                  {
                    title: "How Support Works",
                    items: ["Email us with what you need changing", "Urgent issues prioritised immediately", "Non-urgent work handled in priority order", "Monthly development time included on plans", "No ticket systems â€” direct contact", "Free migration if moving from another host"]
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve Across Shropshire</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We provide WordPress support to businesses throughout Shropshire and the surrounding border region.
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
          title="What's Included in Our WordPress Support"
          subtitle="Everything your Shropshire site needs to stay secure, fast, and well-maintained."
          benefits={[
            { title: "WordPress Updates", description: "Core, theme and plugin updates applied carefully â€” reviewed for compatibility, not just clicked through." },
            { title: "Security Monitoring", description: "Continuous scanning for malware, intrusion attempts, and vulnerabilities." },
            { title: "Bug Fixes & Repairs", description: "Something broken? We'll diagnose and fix it, whether it's a plugin conflict or a theme issue." },
            { title: "Performance Optimisation", description: "Caching, image compression, and database maintenance to keep load times fast." },
            { title: "30 Minutes Dev Time", description: "Included monthly for content changes, text edits, image swaps, and minor adjustments." },
            { title: "Expert Support", description: "Direct access to a Shropshire-based WordPress specialist â€” no ticket systems, no waiting." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Can you support a WordPress site that someone else built?",
              answer: "Yes. We review existing sites before taking them on â€” to check for any issues and ensure we can support them properly. Most sites transfer smoothly regardless of who built them."
            },
            {
              question: "What if my site goes down or gets hacked?",
              answer: "For supported sites, we monitor uptime and security continuously. If something goes wrong, we're on it. Emergency fixes and malware removal are included for managed hosting clients."
            },
            {
              question: "How is this different from just updating things myself?",
              answer: "You can update plugins yourself, but if something breaks, you're dealing with it. We handle updates carefully, review compatibility, maintain backups, and fix anything that goes wrong â€” so you don't have to worry about it."
            },
            {
              question: "Do you offer ongoing support or one-off fixes?",
              answer: "Both. Most clients prefer an ongoing care plan for peace of mind, but we also handle one-off fixes and emergency repairs for non-plan clients."
            }
          ]}
        />

        <CTABanner
          title="Need WordPress support in Shropshire?"
          description="Get in touch and we'll take a look at your site. Free initial review for Shropshire businesses â€” no obligation."
          buttonText="Get Support"
          buttonHref="/contact/"
        />

        <RelatedPages
          title="Support Services & Local Pages"
          pages={[
            {
              title: "Website Support & Maintenance",
              description: "Full details of our website support and maintenance services.",
              href: "/website-support/",
              tag: "Service"
            },
            {
              title: "WordPress Care Plan",
              description: "Ongoing development, updates & priority support from £50/month.",
              href: "/wordpress-care-plan/",
              tag: "Service"
            },
            {
              title: "Common WordPress Errors",
              description: "Troubleshoot common WordPress issues before contacting support.",
              href: "/common-wordpress-errors/",
              tag: "Guide"
            },
            {
              title: "Managed WordPress Hosting Shropshire",
              description: "Local managed hosting from £50/month â€” keeping your site secure and fast.",
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
              title: "WordPress Maintenance",
              description: "Ongoing maintenance to keep your website secure, updated, and performing well.",
              href: "/wordpress-maintenance/",
              tag: "Related"
            }
          ]}
        />
      </main>
    </>
  );
}
