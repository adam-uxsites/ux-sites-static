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
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" },
  { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" },
  { name: "Telford", href: null },
  { name: "Church Stretton", href: null },
  { name: "Market Drayton", href: null },
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
export default function WordPressHostingShrewsbury() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting Shrewsbury | From Â£50/month | UX Sites"
        description="Managed WordPress hosting for Shrewsbury businesses from Â£50/month. Daily backups, security, performance optimisation, and expert support included."
        url="https://uxsites.co.uk/wordpress-hosting-shrewsbury/"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting Shrewsbury",
            description: "Managed WordPress hosting for Shrewsbury businesses from Â£50/month. Daily backups, malware scanning, plugin updates, performance optimisation, SSL, and expert support serving Shrewsbury businesses.",
            url: "https://uxsites.co.uk/wordpress-hosting-shrewsbury/",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "WordPress Hosting Shrewsbury", url: "https://uxsites.co.uk/wordpress-hosting-shrewsbury/" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Expert hosting for Shrewsbury businesses"
          headline="Managed WordPress Hosting for Shrewsbury Businesses"
          subheadline="Professional managed WordPress hosting for Shrewsbury businesses. Security, backups, updates, performance monitoring and support all included from Â£50/month. Keep your Shrewsbury business website fast, secure and hassle-free â€” with local support when you need it."
          primaryCta={{ text: "Get Started from Â£50/month", href: "/contact?plan=monthly/" }}
          secondaryCta={{ text: "Full Hosting Details", href: "/managed-wordpress-hosting/" }}
          chips={["Trusted in Shrewsbury", "Â£50/month", "Daily Backups", "99.9% Uptime", "Expert Support"]}
        />

        <StatsBar
          stats={[
            { number: "Â£50", label: "Per Month", sub: "Or Â£500/year â€” save Â£100" },
            { number: "99.9%", label: "Uptime Commitment", sub: "Monitored every minute" },
            { number: "30", label: "Day Backup Retention", sub: "Secure off-site storage" },
            { number: "10+", label: "Years Serving Shrewsbury", sub: "Deep local knowledge" }


            ]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Shrewsbury & Shropshire
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Shrewsbury Businesses Trust Managed Hosting
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  As Shropshire's county town, Shrewsbury is home to thousands of businesses â€” from professional services firms around Pride Hill and The Square to manufacturing and logistics along the A5 and A49 corridors at Battlefield and Harlescott, and a thriving independent retail and hospitality sector across the town centre and The Quarry. Your website is how most customers will find and judge your business.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Budget hosting from companies like GoDaddy or 123-Reg puts the maintenance burden entirely on you. You're responsible for updates, security, backups â€” and if something goes wrong, you're waiting on a generic support desk. For a busy Shrewsbury business owner, that's time you don't have.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We know the Shrewsbury business landscape inside out. Managed hosting gives you enterprise-grade reliability with a local expert who responds quickly, knows your site personally, and handles everything â€” so your website performs at its best while you focus on what matters.
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
                    title: "Expert support in Shrewsbury",
                    items: ["Direct email access to the person who manages your site", "Quick responses â€” not a generic helpdesk ticket", "In-person meetings available in Shrewsbury", "99.9% uptime commitment"]
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
                We provide managed hosting and website services to businesses across Shrewsbury and the wider Shropshire region.
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
                  {loc.href ? (
                    <Link
                      href={loc.href}
                      className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    >
                      <MapPin size={14} className="text-primary shrink-0 mr-2" />
                      {loc.name}
                    </Link>
                  ) : (
                    <div className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center">
                      <MapPin size={14} className="text-primary shrink-0 mr-2" />
                      {loc.name}
                    </div>
                  )}
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
              question: "Do you serve businesses in Shrewsbury?",
              answer: "Yes â€” we've served Shrewsbury businesses across the town and wider Shropshire for over 10 years. In-person meetings are available in Shrewsbury for local clients who prefer face-to-face discussions."
            },
            {
              question: "Can you host a site built by someone else?",
              answer: "Absolutely. We review existing WordPress sites before taking them on, fix any issues we find, and migrate you across smoothly with no downtime. Whether your site was built by an agency, freelancer, or yourself, we can host it."
            },
            {
              question: "Do you offer web design as well as hosting?",
              answer: "Yes â€” we build custom WordPress websites for Shrewsbury businesses from Â£1,500. Many clients start with a new site and move to managed hosting, or we take over an existing site and improve it over time."
            },
            {
              question: "What makes managed hosting better than standard hosting?",
              answer: "Managed hosting covers everything your budget host doesn't: daily backups, security monitoring, plugin updates, performance tuning, and real support from someone who knows your site. It's hands-off for you and professional for your customers."
            }


            ]}
        />

        <CTABanner
          title="Let's get your Shrewsbury website on managed hosting"
          description="Get in touch to discuss your current setup. We'll tell you exactly what's involved and give you a clear recommendation â€” no obligation."
          buttonText="Get in Touch"
          buttonHref="/contact/"
        />

        <RelatedPages
          title="Nearby Locations & Related Services"
          pages={[
            {
              title: "Managed WordPress Hosting Oswestry",
              description: "Managed hosting for Oswestry and border region businesses.",
              href: "/wordpress-hosting-oswestry/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting Welshpool",
              description: "Managed hosting for Welshpool and mid-Wales businesses.",
              href: "/wordpress-hosting-welshpool/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting Whitchurch",
              description: "Expert managed hosting for Whitchurch businesses.",
              href: "/wordpress-hosting-whitchurch/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting â€” Full Details",
              description: "Everything included in our managed hosting plans, pricing, and full feature comparison.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
            {
              title: "Web Design Shropshire",
              description: "Custom WordPress web design for Shropshire businesses.",
              href: "/web-design-shropshire/",
              tag: "Service"
            },
            {
              title: "WordPress Hosting Shropshire",
              description: "Managed WordPress hosting across the whole of Shropshire.",
              href: "/wordpress-hosting-shropshire/",
              tag: "Related"
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
