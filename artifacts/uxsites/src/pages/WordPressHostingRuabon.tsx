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
  { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" },
  { name: "Ruthin", href: null },
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
export default function WordPressHostingRuabon() {
  return (
    <>
      <SEO
        title="Managed WordPress Hosting Ruabon | From £50/month | UX Sites"
        description="Managed WordPress hosting for Ruabon businesses from £50/month. Daily backups, security, performance optimisation, and expert support included."
        url="https://uxsites.co.uk/wordpress-hosting-ruabon/"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting Ruabon",
            description: "Managed WordPress hosting for Ruabon businesses from £50/month. Daily backups, malware scanning, plugin updates, performance optimisation, SSL, and local expert support serving Ruabon and surrounding areas.",
            url: "https://uxsites.co.uk/wordpress-hosting-ruabon/",
            category: "Managed WordPress Hosting",
            price: "50",
            priceCurrency: "GBP",
            priceUnit: "month",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "WordPress Hosting Ruabon", url: "https://uxsites.co.uk/wordpress-hosting-ruabon/" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Reliable hosting for the Ceiriog Valley"
          headline="Managed WordPress Hosting for Ruabon Businesses"
          subheadline="Professional managed WordPress hosting from a border-region expert serving Ruabon and the Ceiriog Valley. Security, backups, updates, performance monitoring and support all included from £50/month. Your Ruabon business website kept secure, fast and professionally managed."
          primaryCta={{ text: "Get Started from £50/month", href: "/contact/?plan=monthly" }}
          secondaryCta={{ text: "Full Hosting Details", href: "/managed-wordpress-hosting/" }}
          chips={["£50/month", "Daily Backups", "99.9% Uptime", "Expert Support", "Free Migration"]}
        />

        <StatsBar
          stats={[
            { number: "£50", label: "Per Month", sub: "Or £500/year â€” save £100" },
            { number: "99.9%", label: "Uptime Commitment", sub: "Monitored every minute" },
            { number: "30", label: "Day Backup Retention", sub: "Secure off-site storage" },
            { number: "10+", label: "Years Border Experience", sub: "Serving Wales & Shropshire" }


          ]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Ruabon & North Wales
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Ruabon Businesses Choose Managed Hosting
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Ruabon is a historic village in Wrexham County Borough, sitting at the gateway to the beautiful Ceiriog Valley along the A539. Local businesses here range from rural enterprises and agricultural suppliers around Church Street and Ruabon Mountain to professional services near the railway station and hospitality in the Cefn Mawr area, many serving customers across North Wales and the border region.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Most budget hosting plans leave you to manage WordPress updates, security patches, and backups yourself. When your site has problems â€” slow loading times, security vulnerabilities, or worse, a hack â€” you're on your own trying to fix it or waiting for generic support that doesn't know your business.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  With managed hosting from UX Sites, all of that is handled for you. Daily backups, continuous security monitoring, automatic plugin and core updates, and performance optimisation â€” all included. Plus, you get direct access to a real person who knows the area and responds quickly to any request.
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
                    title: "Expert support for Ruabon businesses",
                    items: ["Direct email access to the person who manages your site", "Quick responses â€” not a generic helpdesk ticket", "In-person support available across the region", "99.9% uptime commitment"]
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
                We provide managed hosting and website services to businesses across Ruabon and the wider Wrexham and North Wales area.
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
              question: "Do you host websites for Ruabon businesses that weren't built by you?",
              answer: "Yes. We regularly take over hosting of existing WordPress sites. We conduct a full review, address any security or performance issues, and migrate your site to our managed environment with zero downtime."
            },
            {
              question: "What happens if my Ruabon business needs a completely new website?",
              answer: "We design and build custom WordPress websites from £1,500. Many clients start with a new website and then move onto our managed hosting plan for ongoing care and support."
            },
            {
              question: "Is the hosting infrastructure UK-based?",
              answer: "Yes. Our enterprise-grade hosting uses UK-based servers with fast connectivity throughout Wales and England. Your Ruabon website will load quickly for local customers across North Wales and the border region."
            },
            {
              question: "How do annual payments work?",
              answer: "Annual plans are £500/year â€” saving you £100 compared to monthly billing at £50/month. The service is identical: hosting, backups, security, updates, SSL and support are all included in both plans."
            }


          ]}
        />

        <CTABanner
          title="Let's get your Ruabon website on managed hosting"
          description="Get in touch to discuss your current setup. We'll tell you exactly what's involved and give you a clear recommendation â€” no obligation."
          buttonText="Get in Touch"
          buttonHref="/contact/"
        />

        <RelatedPages
          title="Nearby Locations & Related Services"
          pages={[
            {
              title: "Managed WordPress Hosting Wrexham",
              description: "Managed hosting for businesses in Wrexham and North Wales.",
              href: "/wordpress-hosting-wrexham/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting Llangollen",
              description: "Expert managed hosting for Llangollen businesses.",
              href: "/wordpress-hosting-llangollen/",
              tag: "Nearby"
            },
            {
              title: "Managed WordPress Hosting Chirk",
              description: "Reliable managed hosting for Chirk border businesses.",
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
              title: "Existing Website Improvements",
              description: "Already have a website? We can refresh, speed up or redesign your existing site.",
              href: "/existing-website/",
              tag: "Service"
            },
            {
              title: "Website Speed Optimisation",
              description: "Improve your website's loading speed and user experience.",
              href: "/website-speed-optimisation/",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Full details of our new website process - from discovery to launch.",
              href: "/new-website/",
              tag: "Service"
            }
          ]}
        />
      </main>
    </>
  );
}
