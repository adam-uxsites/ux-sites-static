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
  "Shrewsbury", "Shrewsbury Town Centre", "Telford", "Oswestry",
  "Welshpool", "Market Drayton", "Wem", "Whitchurch",
  "Bridgnorth", "Ludlow", "Ellesmere", "North Shropshire"
];

export default function WebDesignShrewsbury() {
  return (
    <>
      <SEO
        title="Web Design Shrewsbury | WordPress Websites | UX Sites"
        description="Professional web design for Shrewsbury businesses -  custom WordPress websites, local SEO and ongoing managed hosting from a Shropshire UX Certified designer."
        url="https://uxsites.co.uk/web-design-shrewsbury/"
        schema={[
          serviceSchema({
            name: "Web Design Shrewsbury",
            description: "Custom WordPress web design for Shrewsbury businesses. Serving Shrewsbury, Telford, Oswestry, Bridgnorth and beyond. Google UX Certified with 10+ years experience.",
            url: "https://uxsites.co.uk/web-design-shrewsbury/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "New Website", url: "https://uxsites.co.uk/new-website/" },
            { name: "Web Design Shrewsbury", url: "https://uxsites.co.uk/web-design-shrewsbury/" },
          ]),
          faqSchema([
            { question: "Do you only serve Shrewsbury businesses?", answer: "We're based in Shropshire but work with businesses across the UK. Being local is a bonus for face-to-face meetings, but most projects are handled remotely." },
            { question: "How much does web design cost in Shrewsbury?", answer: "Most small business websites start from around £1,500. We provide a fixed quote after understanding your requirements - no surprises." },
            { question: "How long does a Shrewsbury web design project take?", answer: "Most projects take 4-6 weeks from briefing to launch. We'll give you a realistic timeline before starting." },
            { question: "What happens after my Shrewsbury website launches?", answer: "We offer managed hosting and care from £50/month, which covers hosting, security, backups, updates and support. Most Shrewsbury clients prefer this so their site is looked after after launch." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Local web design for Shrewsbury businesses"
          headline="Web Design for Shrewsbury Businesses"
          subheadline="Based in Shropshire, we build custom WordPress websites for businesses across Shrewsbury and the surrounding area. A genuine local expert with 10+ years experience and Google UX certification - local SEO and ongoing managed hosting included."
          primaryCta={{ text: "Discuss Your Project", href: "/contact/" }}
          secondaryCta={{ text: "View Our Work", href: "/case-studies/" }}
          chips={["Shrewsbury Area", "Custom WordPress", "Google UX Certified", "10+ Years Experience"]}
        />

        <StatsBar
          stats={[
            { number: "10+", label: "Years in Shropshire", sub: "Local knowledge, proven track record" },
            { number: "228+", label: "Sites Delivered", sub: "For businesses across the UK" },
            { number: "15+", label: "Industries Served", sub: "From legal to construction" },
            { number: "100%", label: "Client Satisfaction", sub: "Across all local projects" }
          ]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
                  <MapPin size={14} className="text-primary" />
                  Serving Shrewsbury & North Shropshire
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A Local Web Designer Who Knows the Shrewsbury Area
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Working with a local web designer means you get someone who understands the Shrewsbury business community - the mix of town centre retail and professional services, the independent high street traders, and businesses across the surrounding villages.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We've worked with businesses across Shrewsbury, Telford, Oswestry, Bridgnorth and throughout the county. That local experience shapes how we approach every new project.
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

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">What Working with a Local Shrewsbury Web Designer Gets You</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Beyond just proximity - there are genuine advantages to working with someone based in your area.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "In-Person Meetings Available",
                  description: "For clients in and around Shrewsbury and across North Shropshire, we're available for face-to-face meetings in the town. Remote working also fully supported."
                },
                {
                  title: "Local SEO That Actually Works",
                  description: "We understand which local keywords your Shrewsbury customers are searching for, and build that into your site from day one."
                },
                {
                  title: "Understanding of Local Competition",
                  description: "Having worked with businesses across the Shrewsbury area, we know your competitive landscape and design with that context in mind."
                },
                {
                  title: "No Agency Overheads",
                  description: "You're working directly with the person building your site - not a project manager relaying messages offshore. Faster communication, better results."
                },
                {
                  title: "Real Business Understanding",
                  description: "10+ years working with Shrewsbury and Shropshire businesses means we understand what matters to your customers."
                },
                {
                  title: "Long-Term Partnership",
                  description: "Our managed hosting and care clients have been with us for years. We build relationships, not just websites."
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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Industries We Work With Across the Shrewsbury Area</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Shrewsbury has a diverse business economy - from town centre professional services and independent retail to healthcare, hospitality and manufacturing across the surrounding area. Whatever sector you're in, your website should reflect the way your Shrewsbury customers search and buy.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Legal & Conveyancing", "Healthcare & Dentistry",
                    "Construction & Trades", "Property & Estate Agents",
                    "Hospitality & Food", "Retail & Ecommerce",
                    "Manufacturing & B2B", "Professional Services",
                    "Education & Training", "Agriculture & Rural",
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
                  <h3 className="font-bold text-lg mb-3">Recent Local Projects</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Rhind Speech Therapy", type: "Healthcare & Therapy", desc: "Shropshire speech & language therapy practice with a Shrewsbury clinic (Swan Hill)" }
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
                    Not sure what you need? We offer a free initial consultation - call, video, or in-person for Shrewsbury area clients.
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
          quote="Adam did a fantastic job upgrading an existing site - I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Solicitor & Founder, Conveyancing Fairy"
        />

        <BenefitsGrid
          title="Every Shrewsbury Website We Build Includes"
          benefits={[
            { title: "Custom Design", description: "No templates - every site is designed specifically for your business and brand." },
            { title: "Local SEO Foundations", description: "Built to rank for your location - Shrewsbury search terms, Google Business Profile guidance, and local schema markup." },
            { title: "Mobile-First", description: "Over 60% of your customers are on phones. Your site will work perfectly on every device." },
            { title: "Google Analytics 4", description: "Proper tracking setup so you can see what's working and make informed decisions." },
            { title: "Technical SEO", description: "Sitemap, meta data, schema, Search Console - the technical foundations that help Google understand your site." },
            { title: "WordPress Training", description: "You'll feel confident updating your own content after we hand it over." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Do you only serve Shrewsbury businesses?",
              answer: "No - we work with businesses across the UK. However, for Shrewsbury and North Shropshire clients we offer the option of in-person meetings, which many local businesses prefer for the initial brief and design review stages."
            },
            {
              question: "Can you help with local SEO as well as the website?",
              answer: "Yes. Every website we build includes technical SEO foundations. For ongoing local SEO - Google Business Profile optimisation, local content strategy, and link building - this can be discussed as a separate ongoing service."
            },
            {
              question: "How much does a website cost for a Shrewsbury business?",
              answer: "Websites are quoted based on scope - the number of pages, complexity of design, and any custom functionality. Most small business sites start from around £1,500. We always provide a detailed quote before any work begins."
            },
            {
              question: "What happens after my Shrewsbury website launches?",
              answer: "We offer managed hosting and care from £50/month, which covers hosting, security, backups, updates and support. Most Shrewsbury clients find this the most convenient option so their site is looked after after launch, rather than managing hosting themselves."
            }
          ]}
        />

        <CTABanner
          title="Ready to talk about your Shrewsbury business website?"
          description="Get in touch for a free initial conversation. In-person meetings available across Shrewsbury and North Shropshire - or video call if you prefer."
          buttonText="Get in Touch"
          buttonHref="/contact/"
          secondaryButtonText="View Our Process"
          secondaryButtonHref="/new-website/"
        />

        <RelatedPages
          title="Related Services & Local Pages"
          pages={[
            {
              title: "New Website Design & Build",
              description: "Full details of our new website process - from discovery to launch.",
              href: "/new-website/",
              tag: "Service"
            },
            {
              title: "Web Design Shropshire",
              description: "Professional web design for businesses across Shropshire.",
              href: "/web-design-shropshire/",
              tag: "Service"
            },
            {
              title: "Web Design Oswestry",
              description: "Custom WordPress websites for Oswestry and the Welsh borders.",
              href: "/web-design-oswestry/",
              tag: "Local"
            },
            {
              title: "Managed WordPress Hosting Shrewsbury",
              description: "Local managed hosting and care from £50/month for Shrewsbury businesses.",
              href: "/wordpress-hosting-shrewsbury/",
              tag: "Related"
            },
            {
              title: "Small Business Websites",
              description: "Specifically tailored website solutions for small and growing businesses.",
              href: "/small-business-websites/",
              tag: "Related"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Ongoing maintenance to keep your website secure, updated, and performing well.",
              href: "/wordpress-maintenance/",
              tag: "Related"
            },
            {
              title: "Website Support",
              description: "Expert WordPress support and fixes whenever you need a hand.",
              href: "/website-support/",
              tag: "Related"
            }
          ]}
        />
      </main>
    </>
  );
}
