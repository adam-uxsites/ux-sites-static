import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { webPageSchema, breadcrumbSchema, personSchema, organizationSchema } from "@/lib/schemas";
import { Code, LineChart, ShieldCheck, Lightbulb, Server, HeartHandshake, TrendingUp, Search, MapPin } from "lucide-react";

const journey = [
  {
    era: "2014 — 2017",
    title: "Website Designer",
    description: "Started building websites for small businesses, learning the craft of front-end development, design systems, and what makes a site that actually works for its owner."
  },
  {
    era: "2017 — 2020",
    title: "UX Analyst",
    description: "Moved into UX, working with GA4, Google Tag Manager, conversion tracking, and third-party integrations. Ran user testing sessions, analysed behaviour data, and optimised funnels to improve real business outcomes."
  },
  {
    era: "2020 — Present",
    title: "Full-Stack & DevOps",
    description: "Expanded into back-end development, app development, CRM integrations, Google Merchant Centre, SEO, Google Business Profile, and paid advertising. Built and managed high-performance server infrastructure for WordPress."
  }
];

const values = [
  {
    icon: HeartHandshake,
    title: "Honest & Upfront",
    description: "Clear pricing, no hidden fees, no jargon. You'll always know exactly what you're getting and what it costs before any work starts."
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving First",
    description: "We never recommend something unless we genuinely believe it's the right course of action for your website and your business. If you don't need it, we'll tell you."
  },
  {
    icon: TrendingUp,
    title: "Cost-Conscious",
    description: "We work hard to minimise costs without cutting corners where it matters. The goal is to get you the most value for your money, not the biggest invoice."
  },
  {
    icon: Search,
    title: "Data-Driven",
    description: "Every recommendation is backed by data, analytics, and real user behaviour. No guesswork, no trends for the sake of it — just what works."
  }
];

const infrastructure = [
  "Enterprise-grade server infrastructure with server-level caching and CDN",
  "Server-level caching & CDN for fast global page loads",
  "Automated daily backups with 30-day retention",
  "24/7 security monitoring, firewall, and malware scanning",
  "Automated WordPress core, plugin, and theme updates",
  "Free SSL certificates with automatic renewal",
  "Staging environments for testing before go-live",
  "PHP 8.x with latest performance optimisations"
];

export default function About() {
  return (
    <>
      <SEO
        title="About UX Sites — 10+ Years of WordPress Expertise in Shropshire"
        description="UX Sites was founded by Adam, a Google-certified UX professional with over a decade of experience in web design, development, and digital strategy. Honest, upfront, and built for small to medium businesses."
        url="https://uxsites.co.uk/about"
        schema={[
          webPageSchema({
            name: "About UX Sites",
            description: "UX Sites provides managed WordPress hosting, web design, and ongoing support for small to medium businesses in Shropshire and across the UK.",
            url: "https://uxsites.co.uk/about",
          }),
          personSchema(),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "About", url: "https://uxsites.co.uk/about" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="About UX Sites"
          headline="10+ Years of WordPress & Digital Expertise"
          subheadline="UX Sites was founded to provide honest, reliable, and affordable web services to small and medium businesses. No jargon, no hidden fees — just straightforward expertise from someone who's been doing this professionally for over a decade."
          primaryCta={{ text: "Get in Touch", href: "/contact" }}
          secondaryCta={{ text: "View Our Work", href: "/case-studies" }}
          chips={["10+ Years Experience", "Google Certified", "Honest Pricing", "WordPress Specialists"]}
        />

        {/* The journey */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">The Journey</h2>
              <p className="subhead-section">
                From designing websites to running a managed hosting platform — here's how the experience stacks up.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {journey.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-base card-hover p-7 flex gap-5"
                >
                  <div className="shrink-0 w-28 pt-1">
                    <span className="text-xs font-bold text-muted-foreground/50 tracking-wider">{item.era}</span>
                  </div>
                  <div>
                    <h3 className="heading-card mb-2">{item.title}</h3>
                    <p className="body-card">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & expertise */}
        <section className="section-padding section-alt">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">Skills & Expertise</h2>
              <p className="subhead-section">
                A broad skill set built across design, development, analytics, and infrastructure.
              </p>
            </div>
            <div className="grid-cards-3">
              {[
                { icon: Code, title: "Front-End & Back-End", items: ["HTML, CSS, JavaScript, React", "PHP & WordPress development", "REST APIs & third-party integrations", "App development & CRM integrations"] },
                { icon: LineChart, title: "Analytics & Tracking", items: ["Google Analytics 4 (GA4)", "Google Tag Manager", "Conversion tracking & goals", "User testing & data analysis"] },
                { icon: ShieldCheck, title: "Infrastructure & DevOps", items: ["Server management & optimisation", "CDN & caching configuration", "Security monitoring & hardening", "Automated backup systems"] },
                { icon: TrendingUp, title: "Marketing & SEO", items: ["Search engine optimisation (SEO)", "Google Merchant Centre", "Google Business Profile", "Google Ads & social media ads"] },
              ].map((group, i) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="card-base card-hover p-7"
                  >
                    <div className="card-icon-box mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="heading-card mb-3">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="body-card flex items-start gap-2">
                          <span className="text-primary mt-0.5 shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ethos & values */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">How We Work</h2>
              <p className="subhead-section">
                The principles that guide every decision — from the hosting we recommend to the advice we give.
              </p>
            </div>
            <div className="grid-cards">
              {values.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="card-base card-hover flex gap-5 p-7"
                  >
                    <div className="card-icon-box">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-card mb-2">{item.title}</h3>
                      <p className="body-card">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="section-padding section-alt">
          <div className="section-wrap">
            <div className="grid-split">
              <div>
                <div className="tag-pill mb-4">
                  <Server size={12} /> Enterprise-Grade Infrastructure
                </div>
                <h2 className="heading-section mb-6">High-Quality Server Infrastructure</h2>
                <p className="body-lg mb-6">
                  We invest in premium hosting infrastructure that delivers the performance, security, and reliability that small and medium businesses deserve. Our platform includes features you'd typically only find on enterprise-level WordPress hosts — server-level caching, CDN, automated backups, and 24/7 security monitoring.
                </p>
                <p className="body-lg mb-8">
                  Our platform is built on premium infrastructure that delivers the performance, security, and reliability that small and medium businesses deserve.
                </p>
              </div>
              <div>
                <div className="card-base p-7">
                  <h3 className="heading-card mb-4">Platform Features</h3>
                  <ul className="space-y-3">
                    {infrastructure.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="grid-split">
              <div>
                <div className="tag-pill mb-4">
                  <MapPin size={12} /> Based in St. Martins, Shropshire
                </div>
                <h2 className="heading-section mb-6">Serving Local Businesses Across Shropshire & Beyond</h2>
                <p className="body-lg mb-6">
                  We're based in <strong className="text-foreground">St. Martins, near Oswestry</strong> in North Shropshire — right on the border with Wales. This central location means we can easily meet clients across Shropshire, Cheshire, Wrexham, and the wider Welsh borders.
                </p>
                <p className="body-lg mb-6">
                  Prefer to meet in person? We're happy to come to you for an initial consultation, site visit, or ongoing catch-up. No video call required if you'd rather sit down and talk through your project face to face.
                </p>
                <p className="body-lg mb-8">
                  We also work with companies nationwide via online meetings — so don't worry if you're outside our area. Most of our client relationships are managed remotely, and that works just fine.
                </p>
              </div>
              <div>
                <div className="card-base p-7">
                  <h3 className="heading-card mb-4">Nearby Areas We Cover</h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {[
                      { name: "Oswestry", href: "/wordpress-hosting-oswestry" },
                      { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" },
                      { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
                      { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" },
                      { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" },
                      { name: "Chirk", href: "/wordpress-hosting-chirk" },
                      { name: "Gobowen", href: "/wordpress-hosting-gobowen" },
                      { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
                      { name: "Welshpool", href: "/wordpress-hosting-welshpool" },
                      { name: "Ruabon", href: "/wordpress-hosting-ruabon" },
                    ].map((area, i) => (
                      <Link key={i} href={area.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Let's Talk About Your Website"
          description="Whether you need a new site, managed hosting, or just some honest advice — get in touch and we'll take it from there."
          buttonText="Get in Touch"
          buttonHref="/contact"
        />

        <RelatedPages
          pages={[
            { title: "Managed WordPress Hosting", href: "/managed-wordpress-hosting", description: "Everything included in our managed hosting plans" },
            { title: "WordPress Care Plan", href: "/wordpress-care-plan", description: "Ongoing development, updates & priority support" },
            { title: "New Website", href: "/new-website", description: "Custom WordPress websites built for your business" },
            { title: "Case Studies", href: "/case-studies", description: "Recent projects and client results" },
          ]}
        />
      </main>
    </>
  );
}
