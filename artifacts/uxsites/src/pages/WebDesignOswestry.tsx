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
  "Oswestry", "St. Martins", "Gobowen", "Chirk",
  "Ellesmere", "Llangollen", "Welshpool", "Whitchurch",
  "Shrewsbury", "Wrexham", "Ruabon", "North Shropshire"
];

export default function WebDesignOswestry() {
  return (
    <>
      <SEO
        title="Web Design Oswestry | UX Sites â€” WordPress Websites for Local Businesses"
        description="Professional web design for Oswestry businesses from a Google UX Certified designer. Custom WordPress websites serving North Shropshire."
        url="https://uxsites.co.uk/web-design-oswestry/"
        schema={[
          serviceSchema({
            name: "Web Design Oswestry",
            description: "Custom WordPress web design for Oswestry businesses. Based near Oswestry, serving St. Martins, Gobowen, Chirk and beyond. Google UX Certified with 10+ years experience.",
            url: "https://uxsites.co.uk/web-design-oswestry/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "New Website", url: "https://uxsites.co.uk/new-website/" },
            { name: "Web Design Oswestry", url: "https://uxsites.co.uk/web-design-oswestry/" },
          ]),
          faqSchema([
            { question: "Do you only design websites for Oswestry businesses?", answer: "We're based near Oswestry but work with businesses across the UK. Being local is a bonus for face-to-face meetings, but most projects are handled remotely." },
            { question: "How much does web design cost in Oswestry?", answer: "Most small business websites start from around £1,500. We provide a fixed quote after understanding your requirements â€” no surprises." },
            { question: "How long does an Oswestry web design project take?", answer: "Most projects take 4â€“6 weeks from briefing to launch. We'll give you a realistic timeline before starting." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Local web design for Oswestry businesses"
          headline="Web Design for Oswestry & the Welsh Borders"
          subheadline="Based near Oswestry, we build custom WordPress websites for businesses across North Shropshire and the Welsh borders. A genuine local expert with 10+ years experience and Google UX certification."
          primaryCta={{ text: "Discuss Your Project", href: "/contact/" }}
          secondaryCta={{ text: "View Our Work", href: "/case-studies/" }}
          chips={["Oswestry Area", "Custom WordPress", "Google UX Certified", "10+ Years Experience"]}
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
                  Serving Oswestry & North Shropshire
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A Local Web Designer Who Knows the Oswestry Area
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Working with a local web designer means you get someone who understands the Oswestry business community â€” the mix of town centre retail, agricultural businesses across the border region, and professional services serving North Shropshire and Wrexham.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We've worked with businesses across Oswestry, St. Martins, Gobowen, Chirk, and throughout the border region. That local experience shapes how we approach every new project.
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
              <h2 className="text-3xl font-bold mb-4">What Working with a Local Oswestry Web Designer Gets You</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Beyond just proximity â€” there are genuine advantages to working with someone based in your area.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "In-Person Meetings Available",
                  description: "For clients in and around Oswestry and across North Shropshire, we're available for face-to-face meetings at your premises. Remote working also fully supported."
                },
                {
                  title: "Local SEO That Actually Works",
                  description: "We understand which local keywords your Oswestry and North Shropshire customers are searching for, and build that into your site from day one."
                },
                {
                  title: "Understanding of Local Competition",
                  description: "Having worked with businesses across the Oswestry area, we know your competitive landscape and design with that context in mind."
                },
                {
                  title: "No Agency Overheads",
                  description: "You're working directly with the person building your site â€” not a project manager relaying messages offshore. Faster communication, better results."
                },
                {
                  title: "Real Business Understanding",
                  description: "10+ years working with Oswestry and border region businesses means we understand what matters to your customers."
                },
                {
                  title: "Long-Term Partnership",
                  description: "Our managed hosting and support clients have been with us for years. We build relationships, not just websites."
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

        {/* Industries */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Industries We've Served Across the Oswestry Area</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Oswestry and the border region has a diverse business economy â€” from town centre professional services to agricultural businesses, hospitality, and manufacturing. We've built websites across all of these.
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
                  <h3 className="font-bold text-lg mb-3">Recent Local Projects</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Kingman Law", type: "Legal Services", desc: "Professional legal services website â€” December 2025" },
                      { name: "Conveyancing Fairy", type: "Property Services", desc: "Residential conveyancing specialists â€” January 2026" }
                    ].map((project, i) => (
                      <div key={i} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <div className="font-bold mb-1">{project.name}</div>
                        <div className="text-xs text-primary font-semibold mb-1">{project.type}</div>
                        <div className="text-sm text-muted-foreground">{project.desc}</div>
                      </div>
                    ))}
                    <div className="pt-2">
                      <Link href="/contact/" className="text-sm font-bold text-primary hover:underline">
                        Your business could be next â†’
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-7 bg-card border border-primary/30 rounded-2xl">
                  <h3 className="font-bold text-lg mb-3">Free Website Consultation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Not sure what you need? We offer a free initial consultation â€” call, video, or in-person for Oswestry area clients.
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
          quote="Adam did a fantastic job upgrading an existing site â€” I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Client, Shropshire"
        />

        <BenefitsGrid
          title="Every Oswestry Website We Build Includes"
          benefits={[
            { title: "Custom Design", description: "No templates â€” every site is designed specifically for your business and brand." },
            { title: "Local SEO Foundations", description: "Built to rank for your location â€” Oswestry search terms, Google Business Profile guidance, and local schema markup." },
            { title: "Mobile-First", description: "Over 60% of your customers are on phones. Your site will work perfectly on every device." },
            { title: "Google Analytics 4", description: "Proper tracking setup so you can see what's working and make informed decisions." },
            { title: "Technical SEO", description: "Sitemap, meta data, schema, Search Console â€” the technical foundations that help Google understand your site." },
            { title: "WordPress Training", description: "You'll feel confident updating your own content after we hand it over." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Do you only work with Oswestry businesses?",
              answer: "No â€” we work with businesses across the UK. However, for Oswestry and North Shropshire clients we offer the option of in-person meetings, which many local businesses prefer for the initial brief and design review stages."
            },
            {
              question: "Can you help with local SEO as well as the website?",
              answer: "Yes. Every website we build includes technical SEO foundations. For ongoing local SEO â€” Google Business Profile optimisation, local content strategy, and link building â€” this can be discussed as a separate ongoing service."
            },
            {
              question: "How much does a website cost for an Oswestry business?",
              answer: "Websites are quoted based on scope â€” the number of pages, complexity of design, and any custom functionality. Most small business sites start from around £1,500. We always provide a detailed quote before any work begins."
            },
            {
              question: "What happens after my site launches?",
              answer: "We offer managed WordPress hosting from £50/month, which covers hosting, security, backups, updates and support. Most Oswestry clients find this the most convenient option rather than managing hosting themselves."
            }
          ]}
        />

        <CTABanner
          title="Ready to talk about your Oswestry business website?"
          description="Get in touch for a free initial conversation. In-person meetings available across Oswestry and North Shropshire â€” or video call if you prefer."
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
              description: "Full details of our new website process â€” from discovery to launch.",
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
              title: "Managed WordPress Hosting Oswestry",
              description: "Local managed hosting from £50/month for Oswestry businesses.",
              href: "/wordpress-hosting-oswestry/",
              tag: "Related"
            },
            {
              title: "Small Business Websites",
              description: "Specifically tailored website solutions for small and growing businesses.",
              href: "/small-business-websites/",
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
            }
          ]}
        />
      </main>
    </>
  );
}
