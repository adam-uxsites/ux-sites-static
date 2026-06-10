import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { StatsBar } from "@/components/blocks/StatsBar";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Check } from "lucide-react";

const nearbyLocations = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" },
  { name: "St. Martins", href: "/wordpress-hosting-st-martins/" },
  { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" },
  { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
];

const trades = [
  { name: "Builders", href: "/websites-for-builders/" },
  { name: "Electricians", href: "/websites-for-electricians/" },
  { name: "Plumbers", href: "/websites-for-plumbers/" },
  { name: "Decorators", href: "/websites-for-decorators/" },
  { name: "Joiners", href: "/websites-for-joiners/" },
  { name: "Scaffolders", href: "/websites-for-scaffolders/" },
  { name: "Roofers", href: "/websites-for-roofers/" },
  { name: "Air Conditioning", href: "/websites-for-air-conditioning-fitters/" },
  { name: "Solar Panel Fitters", href: "/websites-for-solar-panel-fitters/" },
  { name: "Pressure Washers", href: "/websites-for-pressure-washers/" },
  { name: "Solicitors", href: "/websites-for-lawyers/" },
  { name: "Finance Advisors", href: "/websites-for-finance-advisors/" },
  { name: "Estate Agents", href: "/websites-for-estate-agents/" },
  { name: "Consultants", href: "/websites-for-consultants/" },
  { name: "Hairdressers", href: "/websites-for-hairdressers/" },
  { name: "Facial Aesthetics", href: "/websites-for-facial-aesthetics/" },
  { name: "Tanning Studios", href: "/websites-for-tanning-studios/" },
  { name: "Nail Studios", href: "/websites-for-nail-studios/" },
  { name: "Tattoo Studios", href: "/websites-for-tattoo-studios/" },
  { name: "Restaurants", href: "/websites-for-restaurants/" },
  { name: "Takeaways", href: "/websites-for-takeaways/" },
  { name: "Coffee Shops", href: "/websites-for-coffee-shops/" },
  { name: "Cafes", href: "/websites-for-cafes/" },
  { name: "Butchers", href: "/websites-for-butchers/" },
  { name: "Retail Shops", href: "/websites-for-retail-shops/" },
  { name: "Jewellers", href: "/websites-for-jewellers/" },
  { name: "Gardeners", href: "/websites-for-gardeners/" },
  { name: "Landscapers", href: "/websites-for-landscapers/" },
  { name: "Cleaners", href: "/websites-for-cleaners/" },
  { name: "Schools", href: "/websites-for-schools/" },
  { name: "Tutors", href: "/websites-for-tutors/" },
  { name: "Charities", href: "/websites-for-charities/" },
  { name: "Local Groups", href: "/websites-for-local-groups/" },
  { name: "Nursing Homes", href: "/websites-for-nursing-homes/" },
  { name: "Developers", href: "/websites-for-developers/" },
  { name: "SMEs", href: "/websites-for-smes/" },
  { name: "Medium Businesses", href: "/websites-for-medium-businesses/" },
  { name: "Manufacturers", href: "/websites-for-manufacturers/" },
  { name: "Small Businesses", href: "/small-business-websites/" }
];
export default function WordPressHostingGobowen() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting Gobowen | From Â£50/month | UX Sites"
        description="Managed WordPress hosting for Gobowen businesses from Â£50/month. Daily backups, security, performance optimisation, and expert support included."
        url="https://uxsites.co.uk/wordpress-hosting-gobowen/"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting Gobowen",
            description: "Managed WordPress hosting for Gobowen businesses from Â£50/month. Daily backups, malware scanning, plugin updates, performance optimisation, SSL, and local expert support serving Gobowen and surrounding areas.",
            url: "https://uxsites.co.uk/wordpress-hosting-gobowen/",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "WordPress Hosting Gobowen", url: "https://uxsites.co.uk/wordpress-hosting-gobowen/" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Reliable hosting for Gobowen businesses"
          headline="Managed WordPress Hosting for Gobowen Businesses"
          subheadline="Professional managed WordPress hosting from a Shropshire-based expert serving Gobowen, Oswestry and North Shropshire. Security, backups, updates, performance monitoring and support all included from Â£50/month. Your Gobowen business website kept secure and running smoothly."
          primaryCta={{ text: "Get Started from Â£50/month", href: "/contact?plan=monthly/" }}
          secondaryCta={{ text: "Full Hosting Details", href: "/managed-wordpress-hosting/" }}
          chips={["Â£50/month", "Daily Backups", "99.9% Uptime", "Expert Support", "Free Migration"]}
        />

        <StatsBar
          stats={[
            { number: "Â£50", label: "Per Month", sub: "Or Â£500/year â€” save Â£100" },
            { number: "99.9%", label: "Uptime Commitment", sub: "Monitored every minute" },
            { number: "30", label: "Day Backup Retention", sub: "Secure off-site storage" },
            { number: "10+", label: "Years Local Experience", sub: "Serving North Shropshire" }


          ]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Gobowen & North Shropshire
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Gobowen Businesses Choose Managed Hosting
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Gobowen is a growing village community just north of Oswestry along the A5, home to a range of local businesses from independent retailers and tradespeople to professional services and the renowned Robert Jones and Agnes Hunt Orthopaedic Hospital near Whittington Road. For many Gobowen businesses, their website is the primary way customers find and evaluate them.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  With budget hosting, you get slow performance during peak traffic, no proactive security monitoring, and the burden of managing updates yourself. When something breaks â€” and it will â€” you waste valuable time fixing issues or waiting for generic support to respond.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  UX Sites managed hosting changes that. We handle everything â€” daily backups, security scanning, plugin updates, performance optimisation, and round-the-clock monitoring. You get a real person who knows Gobowen and the area, with quick responses and a commitment to keeping your site running at its best.
                </p>
                <Link
                  href="/managed-wordpress-hosting/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  View full hosting details
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Everything managed for you",
                    items: ["WordPress core, plugin & theme updates", "Daily automated off-site backups", "Security monitoring & malware protection", "Performance optimisation & caching", "SSL certificate â€” included & auto-renewed", "Content update requests by email"]
                  },
                  {
                    title: "Expert support, locally",
                    items: ["Direct email access to the person who manages your site", "Quick responses â€” not a generic helpdesk ticket", "In-person support available across Shropshire", "99.9% uptime commitment"]
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

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Nearby Areas We Serve</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We provide managed hosting and website services to businesses across Gobowen and the surrounding North Shropshire towns and villages.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Business Types
              </div>
              <h2 className="text-3xl font-bold mb-4">Business Types We Serve</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for construction and trade businesses across the area. Click through to see how we help each trade.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {trades.map((trade, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={trade.href}
                    className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    <MapPin size={14} className="text-primary shrink-0 mr-2" />
                    {trade.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="What's Included in Every Plan"
          subtitle="No hidden charges, no add-ons you should have had from the start."
          benefits={[
            { title: "Managed WordPress Hosting", description: "High-performance hosting environment configured specifically for WordPress â€” not shared with hundreds of unrelated sites." },
            { title: "Daily Automated Backups", description: "Off-site cloud backups every day, retained for 30 days. Full restoration possible within the hour if needed." },
            { title: "Security Monitoring", description: "Continuous scanning for malware, intrusion attempts, and vulnerabilities. Caught and dealt with before you're aware." },
            { title: "WordPress Updates", description: "Core, theme and plugin updates applied carefully â€” reviewed for compatibility, not just clicked through." },
            { title: "SSL Certificate", description: "HTTPS secured and auto-renewing. Your visitors will never see a 'Not Secure' warning." },
            { title: "Performance Optimisation", description: "Caching, image compression, and database maintenance to keep load times fast as your site grows." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Do you only host WordPress sites built by you?",
              answer: "No â€” we host any properly built WordPress site. We review the site first, fix any underlying issues, and migrate it to our environment. Most existing sites transfer smoothly with zero downtime."
            },
            {
              question: "Can you redesign my existing Gobowen business website too?",
              answer: "Yes. We offer full website redesigns for existing sites â€” from visual refreshes to complete rebuilds. Many clients start with a redesign and then move to managed hosting for ongoing peace of mind."
            },
            {
              question: "How quickly do you respond to support requests?",
              answer: "We aim to respond within a few hours during business days â€” often much sooner. Because we manage your site directly, there's no ticketing system or waiting in a queue. You email the person who runs your site."
            },
            {
              question: "What happens if my site goes down?",
              answer: "We monitor uptime continuously and are usually aware of issues before you notice them. If your site does go down, we investigate immediately and aim to restore service within the hour. Daily backups ensure your data is never lost."
            }


          ]}
        />

        <CTABanner
          title="Let's get your Gobowen website on managed hosting"
          description="Get in touch to discuss your current setup. We'll tell you exactly what's involved and give you a clear recommendation â€” no obligation."
          buttonText="Get in Touch"
          buttonHref="/contact/"
        />

        <RelatedPages
          title="Nearby Locations & Related Services"
          pages={[
            {
              title: "Managed WordPress Hosting Oswestry",
              description: "Managed hosting for businesses in Oswestry and the border region.",
              href: "/wordpress-hosting-oswestry/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting St. Martins",
              description: "Managed hosting for businesses in St. Martins and surrounding areas.",
              href: "/wordpress-hosting-st-martins/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting Chirk",
              description: "Expert managed hosting for Chirk border businesses.",
              href: "/wordpress-hosting-chirk/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting â€” Full Details",
              description: "Everything included in our managed hosting plans, pricing, and full feature comparison.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
            {
              title: "Website Support & Maintenance",
              description: "Ongoing support, updates and care for existing WordPress websites.",
              href: "/website-support/",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Full details of our new website process â€” from discovery to launch.",
              href: "/new-website/",
              tag: "Service"
            }


          ]}
        />
      </main>
    </>
  );
}
