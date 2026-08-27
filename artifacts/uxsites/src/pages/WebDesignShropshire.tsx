import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { StatsBar } from "@/components/blocks/StatsBar";
import { TestimonialBlock } from "@/components/blocks/TestimonialBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Check } from "lucide-react";

const areas = [
  "Shrewsbury", "Telford", "Oswestry", "Bridgnorth",
  "Market Drayton", "Whitchurch", "Ludlow", "Newport",
  "Church Stretton", "Much Wenlock", "Shropshire Hills", "West Midlands"
];

export default function WebDesignShropshire() {
  return (
    <>
      <SEO
        title="Web Design Shropshire | UX Sites — WordPress Websites for Local Businesses"
        description="Professional web design for Shropshire businesses — custom WordPress websites from a Google UX Certified designer based in St. Martins, Oswestry. Serving Shropshire and the UK."
        url="https://uxsites.co.uk/web-design-shropshire/"
        schema={[
          serviceSchema({
            name: "Web Design Shropshire",
            description: "Custom WordPress web design for Shropshire businesses. Based in Shrewsbury, serving Telford, Oswestry, Bridgnorth and beyond. Google UX Certified with 10+ years experience.",
            url: "https://uxsites.co.uk/web-design-shropshire/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "New Website", url: "https://uxsites.co.uk/new-website/" },
            { name: "Web Design Shropshire", url: "https://uxsites.co.uk/web-design-shropshire/" },
          ]),
          faqSchema([
            { question: "Do you only design websites for Shropshire businesses?", answer: "We're based in Shropshire but work with businesses across the UK. Being local is a bonus for face-to-face meetings, but most projects are handled remotely." },
            { question: "How much does web design cost in Shropshire?", answer: "Most small business websites start from around £1,500. We provide a fixed quote after understanding your requirements — no surprises." },
            { question: "How long does a Shropshire web design project take?", answer: "Most projects take 4–6 weeks from briefing to launch. We'll give you a realistic timeline before starting." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Local web design — national quality"
          headline="Web Design for Shropshire Businesses"
          subheadline="Based in Shropshire, we build custom WordPress websites for local businesses across Shrewsbury, Telford, Oswestry, Bridgnorth and beyond. A genuine local expert with 10+ years experience and Google UX certification."
          primaryCta={{ text: "Discuss Your Project", href: "/contact/" }}
          secondaryCta={{ text: "View Our Work", href: "/new-website/" }}
          chips={["Shrewsbury Based", "Custom WordPress", "Google UX Certified", "10+ Years Experience"]}
        />

        <StatsBar
          stats={[
            { number: "10+", label: "Years in Shropshire", sub: "Local knowledge, proven track record" },
            { number: "228+", label: "Sites Delivered", sub: "For businesses across the UK" },
            { number: "15+", label: "Industries Served", sub: "From legal to construction" },
            { number: "100%", label: "Client Satisfaction", sub: "Across all local projects" }
          ]}
        />

        {/* Local advantage */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Shropshire & West Midlands
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A Local Web Designer Who Understands Your Market
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Working with a local web designer means you get someone who understands the Shropshire business landscape — the mix of rural and urban markets, the industries that dominate the county, and the audience you're trying to reach.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We've worked with businesses across Shrewsbury, Telford, Oswestry, and throughout the county — from professional services and tradespeople to healthcare and hospitality. That breadth of local experience shapes how we approach every new project.
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  Learn why responsive design matters for local businesses in our{" "}
                  <a href="/blog/responsive-web-design-uk/" className="text-primary font-bold hover:underline">responsive web design guide</a>.
                </p>
                <Link
                  href="/new-website/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  View our website process
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

        {/* What you get locally */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">What Working with a Local Shropshire Web Designer Gets You</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Beyond just proximity — there are genuine advantages to working with someone based in your county.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "In-Person Meetings Available",
                  description: "For clients in and around Shrewsbury, Telford, and across Shropshire, we're available for face-to-face meetings at your premises or a local location. Remote working also fully supported."
                },
                {
                  title: "Local SEO That Actually Works",
                  description: "We understand which local keywords your Shropshire customers are searching for, and build that into your site from day one — helping you appear in local and map-based searches."
                },
                {
                  title: "Understanding of Local Competition",
                  description: "Having worked with businesses across the county, we know your competitive landscape. We design with that context in mind — positioning your business effectively against local alternatives."
                },
                {
                  title: "No Agency Overheads",
                  description: "You're working directly with the person building your site — not a project manager relaying messages to an offshore developer. Faster communication, clearer accountability, better results."
                },
                {
                  title: "Real Business Understanding",
                  description: "10+ years working with Shropshire businesses means we understand what matters to your customers — whether you're a Shrewsbury solicitor, a Telford manufacturer, or a Bridgnorth hospitality business."
                },
                {
                  title: "Long-Term Partnership",
                  description: "We're not going anywhere. Our managed hosting and support clients have been with us for years. We build relationships, not just websites — and we're here when you need us."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-7 bg-background border border-border rounded-2xl"
                >
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries in Shropshire */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Industries We Work With Across Shropshire</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Shropshire has a diverse business economy — from professional services in Shrewsbury to manufacturing in Telford, agricultural businesses across the rural county, and a thriving hospitality and tourism sector. Whatever sector you're in, your website should reflect the way your Shropshire customers search and buy.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Legal & Conveyancing", "Healthcare & Dentistry",
                    "Construction & Trades", "Property & Estate Agents",
                    "Hospitality & Food", "Agriculture & Rural",
                    "Manufacturing & B2B", "Professional Services",
                    "Retail & Ecommerce", "Education & Training",
                    "Events & Weddings", "Charities & Associations"
                  ].map((industry, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0" />
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-7 bg-card border border-border rounded-2xl">
                  <h3 className="font-bold text-lg mb-3">Recent Shropshire Projects</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Rhind Speech Therapy", type: "Healthcare & Therapy", url: "rhindspeechtherapy.co.uk", desc: "Shropshire speech & language therapy practice with a Shrewsbury clinic (Swan Hill) and a South London clinic" },
                      { name: "Conveyancing Fairy", type: "Conveyancing", url: "conveyancingfairy.co.uk", desc: "Residential conveyancing specialists based in Oswestry" }
                    ].map((project, i) => (
                      <div key={i} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <div className="font-bold mb-1">{project.name}</div>
                        <div className="text-xs text-primary font-semibold mb-1">{project.type}</div>
                        <div className="text-sm text-muted-foreground">{project.desc}</div>
                      </div>
                    ))}
                    <div className="pt-2">
                      <Link href="/contact/" className="text-sm font-bold text-primary hover:underline">
                        Your business could be next →
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-7 bg-card border border-primary/30 rounded-2xl">
                  <h3 className="font-bold text-lg mb-3">Free Website Consultation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Not sure what you need, or want to understand what's involved before committing? We offer a free initial consultation — call, video, or in-person for Shropshire clients.
                  </p>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity w-full"
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialBlock
          quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Solicitor & Founder, Conveyancing Fairy"
        />

        <BenefitsGrid
          title="Every Shropshire Website We Build Includes"
          benefits={[
            { title: "Custom Design", description: "No templates — every site is designed specifically for your business and brand." },
            { title: "Local SEO Foundations", description: "Built to rank for your location — Shropshire search terms, Google Business Profile guidance, and local schema markup." },
            { title: "Mobile-First", description: "Over 60% of your customers are on phones. Your site will work perfectly on every device." },
            { title: "Google Analytics 4", description: "Proper tracking setup so you can see what's working and make informed decisions." },
            { title: "Technical SEO", description: "Sitemap, meta data, schema, Search Console — the technical foundations that help Google understand your site." },
            { title: "WordPress Training", description: "You'll feel confident updating your own content after we hand it over." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Do you only work with Shropshire businesses?",
              answer: "No — we work with businesses across the UK. However, for Shropshire clients we offer the option of in-person meetings, which many local businesses prefer for the initial brief and design review stages."
            },
            {
              question: "Can you help with local SEO as well as the website?",
              answer: "Yes. Every website we build includes technical SEO foundations. For ongoing local SEO — Google Business Profile optimisation, local content strategy, and link building — this can be discussed as a separate ongoing service."
            },
            {
              question: "How much does a website cost for a Shropshire business?",
              answer: "Websites are quoted based on scope — the number of pages, complexity of design, and any custom functionality. Most small business sites start from around £1,500. We always provide a detailed quote before any work begins."
            },
            {
              question: "What happens after my site launches?",
              answer: "We offer managed WordPress hosting from £50/month, which covers hosting, security, backups, updates and support. Most Shropshire clients find this the most convenient option rather than managing hosting themselves."
            }
          ]}
        />

        <CTABanner
          title="Ready to talk about your Shropshire business website?"
          description="Get in touch for a free initial conversation. In-person meetings available across Shropshire — or video call if you prefer."
          buttonText="Get in Touch"
          buttonHref="/contact/"
          secondaryButtonText="View Our Process"
          secondaryButtonHref="/new-website/"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "New Website Design & Build",
              description: "Full details of our new website process — from discovery to launch.",
              href: "/new-website/",
              tag: "Service"
            },
            {
              title: "Small Business Websites",
              description: "Specifically tailored website solutions for small and growing businesses.",
              href: "/small-business-websites/",
              tag: "Related"
            },
            {
              title: "Managed WordPress Hosting Shropshire",
              description: "Local managed hosting from £50/month — keeping your Shropshire site secure and fast.",
              href: "/wordpress-hosting-shropshire/",
              tag: "Related"
            },
            {
              title: "Website Refreshes & Rebuilds",
              description: "Already have a site? We modernise existing websites for better performance and conversions.",
              href: "/existing-website/",
              tag: "Service"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Ongoing maintenance to keep your website secure, updated, and performing well.",
              href: "/wordpress-maintenance/",
              tag: "Related"
            },
            {
              title: "Web Design Oswestry",
              description: "Custom WordPress websites for Oswestry and the Welsh borders.",
              href: "/web-design-oswestry/",
              tag: "Local"
            },
            {
              title: "WordPress Support Shropshire",
              description: "Expert WordPress support and fixes for Shropshire businesses.",
              href: "/wordpress-support-shropshire/",
              tag: "Local"
            },
            {
              title: "Local SEO for Shropshire Businesses",
              description: "How to improve your local search visibility — a practical guide.",
              href: "/blog/local-seo-shropshire-businesses/",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
