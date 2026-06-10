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
    title: "Before-and-after photos are your best sales tool",
    description: "Pressure washing is visual work. A gallery of transformations â€” driveways, patios, block paving, decking, commercial premises â€” shows potential customers the dramatic difference you can make."
  },
  {
    title: "Domestic and commercial are different markets",
    description: "Homeowners want their driveways and patios cleaned. Businesses need regular maintenance for car parks, walkways, and building exteriors. Your site needs to speak to both audiences."
  },
  {
    title: "Local service areas matter",
    description: "Pressure washing is hyper-local. Customers search for 'driveway cleaning near me' or 'patio pressure washing [town]'. We optimise your site to rank in the areas you cover."
  },
  {
    title: "Regular maintenance contracts build recurring income",
    description: "Commercial customers often need regular cleaning schedules. Your website should promote maintenance contracts alongside one-off jobs to build recurring revenue."
  },
  {
    title: "Insurance and professionalism build trust",
    description: "Customers are letting you work on their property â€” public liability insurance and a professional presentation give them confidence to book. Your website is where they check before calling."
  }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" },
  { name: "St. Martins", href: "/wordpress-hosting-st-martins/" },
  { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" },
  { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" },
  { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" },
  { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" },
  { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" },
  { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForPressureWashers() {
  return (
    <>
      <SEO
        title="Websites for Pressure Washing Businesses | UX Sites Shropshire"
        description="Before and after photos that sell your service. A website built for pressure washing businesses to showcase transformations and win more local work across Shropshire."
        url="https://uxsites.co.uk/websites-for-pressure-washers/"
        schema={[
          serviceSchema({
            name: "Websites for Pressure Washing Businesses",
            description: "Professional websites for pressure washers and cleaning contractors. Before-and-after galleries, domestic and commercial services, local SEO, and mobile-first design.",
            url: "https://uxsites.co.uk/websites-for-pressure-washers/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Pressure Washers", url: "https://uxsites.co.uk/websites-for-pressure-washers/" },
          ]),
          faqSchema([
            {
              question: "Who looks after the website while I'm out cleaning?",
              answer: "We do. Our managed hosting service (Â£50/month) covers all updates, security, backups, and performance. Your site works hard for you while you're out on the job."
            },
            {
              question: "I need a site that shows my before-and-after work well. Can you help?",
              answer: "Yes. We build portfolio-driven sites with strong gallery features, perfect for showcasing pressure washing transformations and helping customers see the value of your service."
            },
            {
              question: "How much does a pressure washing website cost?",
              answer: "New websites start from Â£1,500. If you need a focused site with gallery, service pages, and contact features, we'll give you a fixed quote upfront."
            },
            {
              question: "Can I promote regular cleaning contracts through the site?",
              answer: "Yes. We can include commercial maintenance pages, service plan sign-ups, and recurring booking options to help you build regular income alongside one-off jobs."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Cleaning trade websites"
          headline="Websites for Pressure Washing and Cleaning Businesses"
          subheadline="Your transformations sell themselves â€” but only if customers can see them. We build professional websites with stunning before-and-after galleries that help you win more cleaning work."
          primaryCta={{ text: "Start Your Project", href: "/contact/" }}
          secondaryCta={{ text: "See Our Work", href: "/work/" }}
          chips={["Before & After", "Domestic & Commercial", "Mobile First", "Local SEO", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why pressure washers need a visual website</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Your work is dramatic and visual. A website with strong before-and-after photography is the most powerful tool for winning new cleaning customers.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a good pressure washing website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Whether you focus on domestic driveways and patios or commercial contracts, your website needs to showcase your work and make it easy for customers to book you.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We build each site around your specific services â€” from one-off driveway cleans to regular commercial maintenance contracts â€” and the areas you cover.
                </p>
                <Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Before-and-after gallery with project descriptions",
                  "Service pages for domestic and commercial work",
                  "Clear pricing or quote request options",
                  "Maintenance contract information for regular customers",
                  "Service area pages for local SEO",
                  "Insurance and professionalism signals"
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
          quote="Adam did a fantastic job upgrading an existing site â€” I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Pressure Washing Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for pressure washing businesses across Shropshire, Wrexham, and the Welsh borders.
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
                Pressure washing and cleaning businesses often work alongside other property maintenance trades.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Cleaner Websites", href: "/websites-for-cleaners/", desc: "Websites for cleaning and maintenance businesses." },
                { name: "Gardener Websites", href: "/websites-for-gardeners/", desc: "Websites for gardening and landscaping businesses." },
                { name: "Builder Websites", href: "/websites-for-builders/", desc: "Professional websites for builders and construction companies." },
                { name: "Plumber Websites", href: "/websites-for-plumbers/", desc: "Websites for plumbing and heating engineers." }
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
          title="How We Help Your Cleaning Business"
          subtitle="Beyond the website â€” we keep your online presence running smoothly."
          benefits={[
            { title: "Managed WordPress Hosting", description: "Â£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site takes care of itself while you're out cleaning." },
            { title: "New Website Builds", description: "From Â£1,500. A fully custom website designed to showcase your transformations and generate local cleaning enquiries." },
            { title: "Existing Site Refreshes", description: "Your current site not winning work? We can redesign with a strong gallery focus, better local SEO, and clearer calls to action." },
            { title: "Recurring Revenue Pages", description: "Pages designed to promote regular cleaning contracts and commercial maintenance schedules, helping you build predictable income." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Who looks after the website while I'm out cleaning?",
              answer: "We do. Our managed hosting service (Â£50/month) covers all updates, security, backups, and performance. Your site works hard for you while you're out on the job."
            },
            {
              question: "I need a site that shows my before-and-after work well. Can you help?",
              answer: "Yes. We build portfolio-driven sites with strong gallery features, perfect for showcasing pressure washing transformations and helping customers see the value of your service."
            },
            {
              question: "How much does a pressure washing website cost?",
              answer: "New websites start from Â£1,500. If you need a focused site with gallery, service pages, and contact features, we'll give you a fixed quote upfront."
            },
            {
              question: "Can I promote regular cleaning contracts through the site?",
              answer: "Yes. We can include commercial maintenance pages, service plan sign-ups, and recurring booking options to help you build regular income alongside one-off jobs."
            },
            {
              question: "I'm starting a pressure washing business â€” do I need a website from day one?",
              answer: "A professional website helps you look established from the start. Even with a few before-and-after photos, a well-built site helps you win your first customers and build a reputation."
            }


          ]}
        />

        <StatsBar
          stats={[
            { number: "15+", label: "Industries Served" },
            { number: "228+", label: "Sites Worked On" },
            { number: "10+", label: "Years Experience" },
            { number: "Â£50", label: "Per Month Managed Hosting" }


          ]}
        />

        <CTABanner
          title="Let's build your trade website"
          description="Get a free, no-obligation quote. We'll talk through your services, your target areas, and what your site needs to achieve â€” no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact/"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website/"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Cleaners",
              description: "Websites for cleaning and maintenance businesses.",
              href: "/websites-for-cleaners/",
              tag: "Trade"
            },
            {
              title: "Websites for Gardeners",
              description: "Websites for gardening and landscaping businesses.",
              href: "/websites-for-gardeners/",
              tag: "Trade"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Full details of our managed hosting plans with daily backups and expert support.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Our full website design and development process â€” from first conversation to launch.",
              href: "/new-website/",
              tag: "Service"
            },
            {
              title: "Small Business Websites",
              description: "Affordable websites for small businesses and sole traders.",
              href: "/small-business-websites/",
              tag: "Service"
            },
            {
              title: "Existing Website Refreshes",
              description: "Modernise your existing site with improved UX, speed and mobile experience.",
              href: "/existing-website/",
              tag: "Website"
            },
            {
              title: "Website Support & Maintenance",
              description: "Ongoing updates, security, backups, and expert support for your WordPress site.",
              href: "/website-support/",
              tag: "Support"
            }          ]}
        />
      </main>
    </>
  );
}
