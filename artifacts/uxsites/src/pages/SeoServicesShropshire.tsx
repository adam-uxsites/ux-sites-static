import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { StatsBar } from "@/components/blocks/StatsBar";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Search, LineChart, Target, FileText, Wrench, TrendingUp, User, Download } from "lucide-react";

const areas = [
  "Shrewsbury", "Telford", "Oswestry", "Bridgnorth",
  "Market Drayton", "Whitchurch", "Ludlow", "Newport",
  "Church Stretton", "Much Wenlock", "Wem", "Shrewsbury Town Centre"
];

export default function SeoServicesShropshire() {
  return (
    <>
      <SEO
        title="SEO Services Shropshire | Search Engine Optimisation | UX Sites"
        description="SEO services for Shropshire businesses -  audits, local SEO, technical fixes and ongoing optimisation, all handled for you so you can focus on running your business."
        url="https://uxsites.co.uk/seo-services-shropshire/"
        schema={[
          serviceSchema({
            name: "SEO Services Shropshire",
            description: "Search engine optimisation for Shropshire businesses. SEO audits, local SEO, technical SEO, keyword strategy, and ongoing optimisation -  delivered alongside managed hosting and care plans so SEO is handled for you.",
            url: "https://uxsites.co.uk/seo-services-shropshire/",
            category: "SEO Services",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Website Support", url: "https://uxsites.co.uk/website-support/" },
            { name: "SEO Services Shropshire", url: "https://uxsites.co.uk/seo-services-shropshire/" },
          ]),
          faqSchema([
            { question: "How much do SEO services cost in Shropshire?", answer: "We scope SEO work around your business and goals. A one-off SEO audit starts from around £350; ongoing monthly SEO is typically part of a care plan, so you get results without managing anything yourself." },
            { question: "How long until I see SEO results?", answer: "Meaningful movement usually takes 3-6 months. Search engines need time to crawl, index, and re-evaluate your pages after changes. We'll be honest about timelines up front and report on progress each month." },
            { question: "Do you work with businesses that already have a website?", answer: "Yes -  most of our SEO clients already have a site. We audit what exists, fix the technical issues holding it back, and build an ongoing plan. If you're also on our managed hosting, we handle the fixes as part of the service." },
            { question: "Is SEO bundled with your hosting or care plan?", answer: "SEO work is available as a standalone project, but it works best alongside our care plan -  the same team that keeps your site secure, fast, and online also manages your search visibility. No juggling multiple suppliers." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Local SEO, handled for you"
          headline="SEO Services for Shropshire Businesses"
          subheadline="Get found by customers searching for what you do -  in Shrewsbury, Telford, Oswestry, and across the county. We handle the audits, the technical fixes, and the ongoing optimisation, so you don't have to become an SEO expert."
          primaryCta={{ text: "Talk to Us About SEO", href: "/contact/" }}
          secondaryCta={{ text: "View Our Care Plans", href: "/wordpress-care-plan/" }}
          chips={["SEO Audits", "Local SEO", "Technical SEO", "Keyword Strategy", "Ongoing Optimisation"]}
        />

        <StatsBar
          stats={[
            { number: "Many", label: "Shropshire Searches", sub: "For 'near me' & local services daily" },
            { number: "7", label: "Times Ad-Free", sub: "Users pick organic results above ads" },
            { number: "3-6", label: "Months to Momentum", sub: "Realistic timeline for movement" },
            { number: "100%", label: "Of SEO Handled", sub: "By us -  you never touch the tech" }
          ]}
        />

        {/* Why SEO matters locally */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Shropshire & the Welsh Borders
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Shropshire Businesses Need SEO
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  When someone in Shrewsbury searches for a "solicitor near me" or a Telford business searches for a local tradesperson, Google shows businesses that have done the SEO work. If you're not there, your competitors take the enquiry.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  SEO for a local business is about being found for the searches your customers actually make  -  service + town + intent. It's not about ranking for huge national keywords you'll never win.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  The catch: SEO is continuous. Google's algorithms change, competitors improve, and content goes stale. That's exactly why our model pairs SEO with ongoing care  -  so nothing drifts while you're busy running your business.
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  New to the basics? Read our{" "}
                  <a href="/blog/local-seo-shropshire-businesses/" className="text-primary font-bold hover:underline">local SEO guide for Shropshire businesses</a>.
                </p>
                <Link
                  href="/website-support/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  See how support & care works
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {areas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center justify-center p-3 bg-card border border-border rounded-xl text-sm font-medium text-center"
                  >
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">SEO Services We Deliver</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything below can run as a one-off project or as ongoing monthly work -  either way, we do it all for you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "SEO Audits",
                  description: "A full teardown of your site: technical issues, content gaps, and keyword opportunities -  with a clear, prioritised fix list we then implement."
                },
                {
                  icon: MapPin,
                  title: "Local SEO",
                  description: "Google Business Profile optimisation, local keyword targeting, consistent citations, and location-based content so you appear for 'near me' and town + service searches."
                },
                {
                  icon: Wrench,
                  title: "Technical SEO",
                  description: "Speed, mobile friendliness, indexing, schema, internal linking, and site structure -  the invisible fixes that hold your rankings back if ignored."
                },
                {
                  icon: Target,
                  title: "Keyword & Content Strategy",
                  description: "The searches that actually send you customers, mapped to pages you already have or content we create. No generic keyword lists -  just what matters locally."
                },
                {
                  icon: LineChart,
                  title: "Ranking & Traffic Reporting",
                  description: "Plain-English monthly reports showing how you're moving and what we did. You'll know the value you're getting, in words you understand."
                },
                {
                  icon: TrendingUp,
                  title: "Ongoing Optimisation",
                  description: "SEO doesn't stop. We keep improving content, building links, and monitoring changes so your position keeps moving forward -  without any effort from you."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-7 bg-background border border-border rounded-2xl"
                  >
                    <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works with the care plan */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO That Runs Itself</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The businesses that win at SEO don't do the SEO. They have a team quietly doing it for them. That's the model we offer Shropshire businesses.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "We Audit", desc: "We find exactly what's holding your site back in search -  no jargon, just a clear fix list." },
                { step: "2", title: "We Fix", desc: "Technical issues, content, and local optimisation are implemented by us -  you don't touch a thing." },
                { step: "3", title: "We Maintain", desc: "Ongoing monthly work keeps rankings moving while we keep your site secure, updated, and fast." }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl"
                >
                  <div className="text-3xl font-black text-primary/40 mb-3">{s.step}</div>
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 p-7 bg-card border border-primary/30 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">Add SEO to Your Care Plan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                SEO work is easiest when it's part of the same relationship that keeps your website online. On a care plan, the same team handles your hosting, updates, security, small changes, and your search visibility -  one supplier, one invoice, no third parties to chase.
              </p>
              <Link
                href="/wordpress-care-plan/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                View WordPress Care Plans
              </Link>
            </div>
          </div>
        </section>

        <FAQBlock
          title="SEO Services - Common Questions"
          faqs={[
            {
              question: "How is this different from a big SEO agency?",
              answer: "You get one person who knows your website and your market, not account managers and junior specialists. And because we also run your hosting and care plan, SEO fixes are implemented by the same team -  no back-and-forth between suppliers."
            },
            {
              question: "Do I need to do anything once you take over?",
              answer: "No. We'll ask for context and any business news, but the audit, technical fixes, content work, and reporting are all handled by us. That's the point of the service."
            },
            {
              question: "Can you help if my site was recently penalised or dropped?",
              answer: "Yes. A technical audit usually reveals the cause -  a crawl issue, duplicate content, speed problems, or a penalty. We fix what we can, advise on the rest, and get you moving again."
            },
            {
              question: "What areas of Shropshire do you cover?",
              answer: "We work with businesses across the whole county and the borders -  Shrewsbury, Telford, Oswestry, Bridgnorth, Ludlow, Market Drayton, Whitchurch, Much Wenlock, and surrounding villages. We're based in St. Martins, Oswestry."
            }
          ]}
        />

        <BenefitsGrid
          title="Why Local Businesses Choose Us for SEO"
          benefits={[
            { title: "One Team, Every Task", description: "Hosting, updates, security, small changes, and SEO from a single provider -  no juggling suppliers." },
            { title: "Plain-English Reporting", description: "Monthly reports you can actually understand. No vanity metrics, no jargon." },
            { title: "Google-Insider Knowledge", description: "We're a Google UX Certified designer with 10+ years of analytics and SEO experience." },
            { title: "Honest Timelines", description: "SEO takes months, not days. We set realistic expectations and hit them." },
            { title: "Local Market Understanding", description: "We know the Shropshire search landscape -  your customers, your competitors, your towns." },
            { title: "Fixes That Actually Happen", description: "We implement the fixes in our audits, not just hand you a report and disappear." }
          ]}
        />

        <CTABanner
          title="Get your website found by Shropshire customers"
          description="Talk to us about an SEO audit or adding ongoing optimisation to your care plan. Free initial consultation -  no obligation, no hard sell."
          buttonText="Get in Touch"
          buttonHref="/contact/"
          secondaryButtonText="View Care Plans"
          secondaryButtonHref="/wordpress-care-plan/"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "Website Support & Care Plans",
              description: "Full care plan details -  hosting, updates, security, and small changes handled for you.",
              href: "/website-support/",
              tag: "Service"
            },
            {
              title: "WordPress Care Plan",
              description: "Managed hosting plus 4 hours monthly development and proactive improvements from £250/month.",
              href: "/wordpress-care-plan/",
              tag: "Service"
            },
            {
              title: "Managed WordPress Hosting",
              description: "A secure, fast, maintained WordPress site from £50/month -  the foundation of good SEO.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
            {
              title: "Conversion Tracking Setup",
              description: "See which SEO traffic actually turns into enquiries -  proper conversion tracking installed for you.",
              href: "/conversion-tracking-setup/",
              tag: "Service"
            },
            {
              title: "Web Design Shropshire",
              description: "Custom WordPress websites built to convert from day one.",
              href: "/web-design-shropshire/",
              tag: "Related"
            },
            {
              title: "Local SEO for Shropshire Businesses",
              description: "A practical guide to improving your local search visibility.",
              href: "/blog/local-seo-shropshire-businesses/",
              tag: "Blog"
            },
            {
              title: "Small Business SEO Guide",
              description: "How small businesses can win at search without an agency budget.",
              href: "/blog/small-business-seo-guide/",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}