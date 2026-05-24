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
  { name: "St. Martins", href: "/wordpress-hosting-st-martins" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" },
  { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" },
  { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" },
  { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
];

const trades = [
  { name: "Builders", href: "/websites-for-builders" },
  { name: "Electricians", href: "/websites-for-electricians" },
  { name: "Plumbers", href: "/websites-for-plumbers" },
  { name: "Decorators", href: "/websites-for-decorators" },
  { name: "Joiners", href: "/websites-for-joiners" },
  { name: "Scaffolders", href: "/websites-for-scaffolders" },
  { name: "Roofers", href: "/websites-for-roofers" },
  { name: "Air Conditioning", href: "/websites-for-air-conditioning-fitters" },
  { name: "Solar Panel Fitters", href: "/websites-for-solar-panel-fitters" },
  { name: "Pressure Washers", href: "/websites-for-pressure-washers" },
  { name: "Solicitors", href: "/websites-for-lawyers" },
  { name: "Finance Advisors", href: "/websites-for-finance-advisors" },
  { name: "Estate Agents", href: "/websites-for-estate-agents" },
  { name: "Consultants", href: "/websites-for-consultants" },
  { name: "Hairdressers", href: "/websites-for-hairdressers" },
  { name: "Facial Aesthetics", href: "/websites-for-facial-aesthetics" },
  { name: "Tanning Studios", href: "/websites-for-tanning-studios" },
  { name: "Nail Studios", href: "/websites-for-nail-studios" },
  { name: "Tattoo Studios", href: "/websites-for-tattoo-studios" },
  { name: "Restaurants", href: "/websites-for-restaurants" },
  { name: "Takeaways", href: "/websites-for-takeaways" },
  { name: "Coffee Shops", href: "/websites-for-coffee-shops" },
  { name: "Cafes", href: "/websites-for-cafes" },
  { name: "Butchers", href: "/websites-for-butchers" },
  { name: "Retail Shops", href: "/websites-for-retail-shops" },
  { name: "Jewellers", href: "/websites-for-jewellers" },
  { name: "Gardeners", href: "/websites-for-gardeners" },
  { name: "Landscapers", href: "/websites-for-landscapers" },
  { name: "Cleaners", href: "/websites-for-cleaners" },
  { name: "Schools", href: "/websites-for-schools" },
  { name: "Tutors", href: "/websites-for-tutors" },
  { name: "Charities", href: "/websites-for-charities" },
  { name: "Local Groups", href: "/websites-for-local-groups" },
  { name: "Nursing Homes", href: "/websites-for-nursing-homes" },
  { name: "Developers", href: "/websites-for-developers" },
  { name: "SMEs", href: "/websites-for-smes" },
  { name: "Medium Businesses", href: "/websites-for-medium-businesses" },
  { name: "Manufacturers", href: "/websites-for-manufacturers" },
  { name: "Small Businesses", href: "/small-business-websites" }
];
export default function WordPressHostingOswestry() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting Oswestry | From £50/month | UX Sites"
        description="Stress-free managed WordPress hosting for Oswestry businesses from £50/month. Daily backups, security monitoring, expert support and 99.9% uptime. Serving Oswestry, St. Martins, Gobowen and across North Shropshire."
        url="https://uxsites.co.uk/wordpress-hosting-oswestry"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting Oswestry",
            description: "Managed WordPress hosting for Oswestry businesses from £50/month. Daily backups, malware scanning, plugin updates, performance optimisation, SSL, and local expert support serving Oswestry and surrounding areas.",
            url: "https://uxsites.co.uk/wordpress-hosting-oswestry",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting" },
            { name: "WordPress Hosting Oswestry", url: "https://uxsites.co.uk/wordpress-hosting-oswestry" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Border town hosting expertise"
          headline="Managed WordPress Hosting for Oswestry Businesses"
          subheadline="Reliable managed WordPress hosting from a Shropshire-based expert serving Oswestry and the Welsh borders. Security, backups, updates, performance monitoring and support all included from £50/month. Keep your Oswestry business website fast, secure and hassle-free."
          primaryCta={{ text: "Get Started from £50/month", href: "/contact?plan=monthly" }}
          secondaryCta={{ text: "Full Hosting Details", href: "/managed-wordpress-hosting" }}
          chips={["Oswestry Based", "£50/month", "Daily Backups", "99.9% Uptime", "Expert Support"]}
        />

        <StatsBar
          stats={[
            { number: "£50", label: "Per Month", sub: "Or £500/year — save £100" },
            { number: "99.9%", label: "Uptime Commitment", sub: "Monitored every minute" },
            { number: "30", label: "Day Backup Retention", sub: "Secure off-site storage" },
            { number: "10+", label: "Years Regional Experience", sub: "Serving the border region" }


          ]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Oswestry & the Welsh Borders
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Oswestry Businesses Choose Managed Hosting
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Oswestry has a rich history as a border market town and today supports a diverse business community — from professional services and retail along Willow Street and Cross Street to agricultural and manufacturing businesses around the A5/A483 corridors and out towards Park Hall. Your website is often the first point of contact for new customers.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Budget hosting from large providers puts you in a shared environment where performance suffers and you're responsible for maintenance. When your website slows down or stops working, you lose enquiries — and dealing with generic support can take days.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  With UX Sites managed hosting, you get a dedicated expert who knows the Oswestry area, responds quickly, and handles everything from security monitoring to daily backups. Your website runs smoothly while you focus on running your business.
                </p>
                <Link
                  href="/managed-wordpress-hosting"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  View full hosting details
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Everything managed for you",
                    items: ["WordPress core, plugin & theme updates", "Daily automated off-site backups", "Security monitoring & malware protection", "Performance optimisation & caching", "SSL certificate — included & auto-renewed", "Content update requests by email"]
                  },
                  {
                    title: "Expert support, locally",
                    items: ["Direct email access to the person who manages your site", "Quick responses — not a generic helpdesk ticket", "In-person support available across Shropshire", "99.9% uptime commitment"]
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
                Based in Shropshire, we provide managed hosting and website services to businesses across Oswestry and surrounding towns and villages.
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
            { title: "Managed WordPress Hosting", description: "High-performance hosting environment configured specifically for WordPress — not shared with hundreds of unrelated sites." },
            { title: "Daily Automated Backups", description: "Off-site cloud backups every day, retained for 30 days. Full restoration possible within the hour if needed." },
            { title: "Security Monitoring", description: "Continuous scanning for malware, intrusion attempts, and vulnerabilities. Caught and dealt with before you're aware." },
            { title: "WordPress Updates", description: "Core, theme and plugin updates applied carefully — reviewed for compatibility, not just clicked through." },
            { title: "SSL Certificate", description: "HTTPS secured and auto-renewing. Your visitors will never see a 'Not Secure' warning." },
            { title: "Performance Optimisation", description: "Caching, image compression, and database maintenance to keep load times fast as your site grows." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Do you host sites for Oswestry businesses that weren't built by you?",
              answer: "Yes. We review existing WordPress sites before taking them on — to identify any immediate issues and ensure we can support them properly. Most sites transfer smoothly regardless of who built them."
            },
            {
              question: "Can I meet with you in person in the Oswestry area?",
              answer: "Yes. For businesses in and around Oswestry, St. Martins, Gobowen and across North Shropshire, in-person meetings are available. We can discuss your hosting needs or review your current setup face-to-face."
            },
            {
              question: "How do I migrate from my current host to managed hosting?",
              answer: "We handle the complete migration process — WordPress files, database, email accounts, and DNS. Migration is always free regardless of which plan you're on. Zero downtime during the transfer."
            },
            {
              question: "What if I also need a new website or design work?",
              answer: "We build custom WordPress websites too, from £1,500. Many Oswestry clients start with a new site and move to managed hosting afterwards. We also support existing sites with refreshes, speed optimisation and ongoing maintenance."
            }


          ]}
        />

        <CTABanner
          title="Let's get your Oswestry website on managed hosting"
          description="Get in touch to discuss your current setup. We'll tell you exactly what's involved and give you a clear recommendation — no obligation."
          buttonText="Get in Touch"
          buttonHref="/contact"
        />

        <RelatedPages
          title="Nearby Locations & Related Services"
          pages={[
            {
              title: "Managed WordPress Hosting St. Martins",
              description: "Managed hosting for businesses in St. Martins and surrounding areas.",
              href: "/wordpress-hosting-st-martins",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting Gobowen",
              description: "Reliable managed hosting for Gobowen businesses.",
              href: "/wordpress-hosting-gobowen",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting Chirk",
              description: "Expert managed hosting for Chirk border businesses.",
              href: "/wordpress-hosting-chirk",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting — Full Details",
              description: "Everything included in our managed hosting plans, pricing, and full feature comparison.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Full details of our new website process — from discovery to launch.",
              href: "/new-website",
              tag: "Service"
            },
            {
              title: "Website Support & Maintenance",
              description: "Ongoing support, updates and care for existing WordPress websites.",
              href: "/website-support",
              tag: "Service"
            }


          ]}
        />
      </main>
    </>
  );
}
