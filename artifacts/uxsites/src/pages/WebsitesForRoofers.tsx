import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { StatsBar } from "@/components/blocks/StatsBar";
import { TestimonialBlock } from "@/components/blocks/TestimonialBlock";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowRight, MapPin } from "lucide-react";

const painPoints = [
  {
    title: "Roofing work is high-stakes for homeowners",
    description: "A new roof is one of the most expensive home improvements. Customers need to trust you before they commit. Your website is where they verify your credentials, see your work, and decide you're the right roofer."
  },
  {
    title: "Before-and-after photos prove your quality",
    description: "Roofing transformations are dramatic. A gallery of completed work — new roofs, repairs, chimney work, flat roofs, fascias and guttering — shows potential customers the standard they can expect."
  },
  {
    title: "Emergency repairs need instant contact",
    description: "When a roof is leaking or storm damage has struck, customers search urgently. Your site needs to be findable and make it one tap to call you — day or night."
  },
  {
    title: "Local reputation is everything in roofing",
    description: "Most roofing work is local, and customers often ask for recommendations. Your website backs up word of mouth with testimonials, project photos, and proof of your track record in the area."
  },
  {
    title: "Insurance and accreditation build confidence",
    description: "Public liability insurance, manufacturer accreditations, and guarantees give customers the confidence to proceed. These need to be prominent and easy to find on your site."
  }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" },
  { name: "St. Martins", href: "/wordpress-hosting-st-martins" },
  { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" },
  { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" },
  { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" },
  { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" },
  { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" },
  { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForRoofers() {
  return (
    <>
      <SEO
        title="Websites for Roofing Contractors | UX Sites Shropshire"
        description="Win more roofing contracts with a website that shows your best work. Build trust with before/after photos, showcase certifications, and generate local leads across Shropshire."
        url="https://uxsites.co.uk/websites-for-roofers"
        schema={[
          serviceSchema({
            name: "Websites for Roofing Contractors",
            description: "Professional websites for roofing contractors. Project galleries, trust signals, emergency contact, local SEO, and mobile-first design to help you win more work.",
            url: "https://uxsites.co.uk/websites-for-roofers",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Roofers", url: "https://uxsites.co.uk/websites-for-roofers" },
          ]),
          faqSchema([
            {
              question: "I'm always up on roofs — who manages the website?",
              answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site looks after itself while you focus on the roofing work."
            },
            {
              question: "I've got an old site but it doesn't generate enquiries. Can you help?",
              answer: "Yes. We can refresh your existing site with modern design, a proper project gallery, and improved local SEO to start generating leads again."
            },
            {
              question: "How much does a roofer's website cost?",
              answer: "New websites start from £1,500. If you need a focused site with project gallery, service pages, and contact features, we'll give you a fixed quote upfront."
            },
            {
              question: "Will my site rank when people search for roofers in my area?",
              answer: "We optimise every site for local search with service area pages, Google Business integration, and structured data. This helps you show up when local customers search for roofing contractors."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Roofing trade websites"
          headline="Websites for Roofing Contractors"
          subheadline="A new roof is a big investment. Your website needs to build the trust that turns a search into a quote. We build professional sites that showcase your work and help local customers choose you."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Project Gallery", "Trust Signals", "Emergency Contact", "Local SEO", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why roofers need a website that builds trust</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Roofing customers are making a major decision. Your website needs to give them confidence before they call. Here's what matters.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 bg-background border border-border rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Check size={16} className="text-primary" strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a good roofing website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Roofing customers need reassurance before they commit to a significant investment. Your website should showcase your experience, prove your quality, and make it easy to request a quote.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you specialise in pitched roofs, flat roofs, slating, tiling, or commercial roofing, we structure your site to communicate your expertise and win local work.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Project gallery with before-and-after photos",
                  "Service pages for each type of roofing work",
                  "Insurance and accreditation information displayed prominently",
                  "Customer testimonials and reviews",
                  "Emergency contact details for urgent repairs",
                  "Service area pages for local SEO"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                    </div>
                    <span className="font-semibold text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TestimonialBlock
          quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Small Business Owner"
        />

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Service Areas
              </div>
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Roofer Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for roofing contractors across Shropshire, Wrexham, and the Welsh borders.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {serviceAreas.map((loc, i) => (
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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Trades & Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Roofers work alongside builders, scaffolders, and solar panel installers on many projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Builder Websites", href: "/websites-for-builders", desc: "Professional websites for builders and construction companies." },
                { name: "Scaffolder Websites", href: "/websites-for-scaffolders", desc: "Scaffolding company websites for local and regional work." },
                { name: "Solar Panel Fitter Websites", href: "/websites-for-solar-panel-fitters", desc: "Websites for solar installation and renewable energy businesses." },
                { name: "Plumber Websites", href: "/websites-for-plumbers", desc: "Websites for plumbing and heating engineers." },
                { name: "Pressure Washer Websites", href: "/websites-for-pressure-washers", desc: "Websites for pressure washing and cleaning businesses." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    aria-label={`Learn more about ${item.name}`}
                    className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="How We Help Your Roofing Business"
          subtitle="Beyond the website — we keep your online presence working for you."
          benefits={[
            { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site takes care of itself while you're on the job." },
            { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your work, build trust, and generate local leads." },
            { title: "Existing Site Refreshes", description: "Your current site not performing? We can redesign with better galleries, stronger trust signals, and improved local SEO." },
            { title: "Local SEO Optimisation", description: "Service area pages, Google Business integration, and structured markup so you show up when local customers search for roofers." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "I'm always up on roofs — who manages the website?",
              answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site looks after itself while you focus on the roofing work."
            },
            {
              question: "I've got an old site but it doesn't generate enquiries. Can you help?",
              answer: "Yes. We can refresh your existing site with modern design, a proper project gallery, and improved local SEO to start generating leads again."
            },
            {
              question: "How much does a roofer's website cost?",
              answer: "New websites start from £1,500. If you need a focused site with project gallery, service pages, and contact features, we'll give you a fixed quote upfront."
            },
            {
              question: "Will my site rank when people search for roofers in my area?",
              answer: "We optimise every site for local search with service area pages, Google Business integration, and structured data. This helps you show up when local customers search for roofing contractors."
            },
            {
              question: "I'm a sole trader roofer — is a website worth the investment?",
              answer: "Absolutely. Even sole traders benefit from a professional site that backs up word of mouth, shows your work, and makes it easy for customers to get in touch. We can start focused and grow as you do."
            }


          ]}
        />

        <StatsBar
          stats={[
            { number: "15+", label: "Industries Served" },
            { number: "228+", label: "Sites Worked On" },
            { number: "10+", label: "Years Experience" },
            { number: "£50", label: "Per Month Managed Hosting" }


          ]}
        />

        <CTABanner
          title="Let's build your trade website"
          description="Get a free, no-obligation quote. We'll talk through your services, your target areas, and what your site needs to achieve — no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Builders",
              description: "Professional websites for builders and construction companies.",
              href: "/websites-for-builders",
              tag: "Trade"
            },
            {
              title: "Websites for Scaffolders",
              description: "Scaffolding company websites for local and regional work.",
              href: "/websites-for-scaffolders",
              tag: "Trade"
            },
            {
              title: "Websites for Solar Panel Fitters",
              description: "Solar installation and renewable energy websites.",
              href: "/websites-for-solar-panel-fitters",
              tag: "Trade"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Full details of our managed hosting plans with daily backups and expert support.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Our full website design and development process — from first conversation to launch.",
              href: "/new-website",
              tag: "Service"
            },
            {
              title: "Small Business Websites",
              description: "Affordable websites for small businesses and sole traders.",
              href: "/small-business-websites",
              tag: "Service"
            },
            {
              title: "Existing Website Refreshes",
              description: "Modernise your existing site with improved UX, speed and mobile experience.",
              href: "/existing-website",
              tag: "Website"
            },
            {
              title: "Website Support & Maintenance",
              description: "Ongoing updates, security, backups, and expert support for your WordPress site.",
              href: "/website-support",
              tag: "Support"
            }          ]}
        />
      </main>
    </>
  );
}
