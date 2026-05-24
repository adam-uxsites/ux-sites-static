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
    title: "B2B and domestic customers need different approaches",
    description: "Air conditioning fitters serve both commercial clients (offices, retail, hospitality) and homeowners. Your website needs to speak clearly to both audiences and help each find what they need."
  },
  {
    title: "Accreditations and certifications win contracts",
    description: "F-Gas certification, manufacturers' accreditations, and insurance are essential trust signals — especially for commercial clients. These need to be prominent and verified on your site."
  },
  {
    title: "Case studies demonstrate your capability",
    description: "Commercial and residential air conditioning projects vary widely. Case studies with photos, system details, and client feedback prove you can handle projects of different scales and types."
  },
  {
    title: "Service and maintenance is recurring revenue",
    description: "Air conditioning systems need regular servicing. Your website should promote maintenance contracts alongside installation — creating ongoing relationships and recurring income."
  },
  {
    title: "Local businesses search for local installers",
    description: "Office managers and business owners search for 'air conditioning installers near me'. Local SEO helps you show up when commercial customers in your area need a reliable fitter."
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

export default function WebsitesForAirConditioningFitters() {
  return (
    <>
      <SEO
        title="Websites for Air Conditioning Installers | UX Sites Shropshire"
        description="Win commercial and domestic HVAC contracts with a website that showcases your expertise, certifications, and completed installations. Built for contractors serving Shropshire."
        url="https://uxsites.co.uk/websites-for-air-conditioning-fitters"
        schema={[
          serviceSchema({
            name: "Websites for Air Conditioning Installers",
            description: "Professional websites for air conditioning and HVAC contractors. Dual audience design for commercial and domestic clients, certification showcases, case studies, and local SEO.",
            url: "https://uxsites.co.uk/websites-for-air-conditioning-fitters",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Air Conditioning Fitters", url: "https://uxsites.co.uk/websites-for-air-conditioning-fitters" },
          ]),
          faqSchema([
            {
              question: "Who manages the website while I'm out installing systems?",
              answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site takes care of itself while you focus on installations."
            },
            {
              question: "I need to target both businesses and homeowners — can one site do both?",
              answer: "Yes. We structure your site with clear paths for commercial and domestic customers, so each audience finds the relevant services, case studies, and contact information."
            },
            {
              question: "How much does a website for an air conditioning business cost?",
              answer: "New websites start from £1,500. If you need separate sections for commercial and domestic work, plus case studies and maintenance promotions, we'll give you a fixed quote upfront."
            },
            {
              question: "Can I promote maintenance contracts through the site?",
              answer: "Yes. We can include service plan pages, maintenance booking forms, and reminder systems to help you generate recurring servicing income alongside installation work."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="HVAC trade websites"
          headline="Websites for Air Conditioning Installers"
          subheadline="Whether you're installing for businesses or homeowners, your website needs to communicate your expertise and make it easy to request a quote. We build professional sites for HVAC contractors."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Commercial & Domestic", "Certifications", "Case Studies", "Local SEO", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why air conditioning fitters need a strong website</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                From office cooling to home climate control, your customers need to know you're qualified, experienced, and reliable. Here's what your site needs to deliver.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a good HVAC website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Air conditioning businesses serve a wide range of customers. Your website needs to guide each type of visitor to the right information and make it easy for them to take the next step.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We structure your site around your specific mix of work — whether that's commercial installations, residential systems, maintenance contracts, or a combination of all three.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Separate paths for commercial and domestic customers",
                  "F-Gas and manufacturer certifications prominently displayed",
                  "Case studies with photos and project details",
                  "Maintenance contract and service plan pages",
                  "Service area pages for local SEO",
                  "Quote request forms tailored to project type"
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for HVAC Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for air conditioning installers across Shropshire, Wrexham, and the Welsh borders.
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
                HVAC and air conditioning businesses work alongside electricians, solar installers, and builders.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Electrician Websites", href: "/websites-for-electricians", desc: "Websites for electrical contractors and businesses." },
                { name: "Solar Panel Fitter Websites", href: "/websites-for-solar-panel-fitters", desc: "Websites for solar installation and renewable energy businesses." },
                { name: "Plumber Websites", href: "/websites-for-plumbers", desc: "Websites for plumbing and heating engineers." },
                { name: "Builder Websites", href: "/websites-for-builders", desc: "Professional websites for builders and construction companies." }
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
          title="How We Help Your HVAC Business"
          subtitle="Beyond the website — we keep your online presence running smoothly."
          benefits={[
            { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site takes care of itself while you're on installations." },
            { title: "New Website Builds", description: "From £1,500. A fully custom website designed to serve both commercial and domestic customers with clear paths, certifications, and case studies." },
            { title: "Existing Site Refreshes", description: "Your current site not generating enquiries? We can redesign with better audience targeting, stronger trust signals, and improved local SEO." },
            { title: "Lead Generation Optimisation", description: "Quote request forms and contact flows designed to capture qualified leads — whether from office managers or homeowners." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Who manages the website while I'm out installing systems?",
              answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site takes care of itself while you focus on installations."
            },
            {
              question: "I need to target both businesses and homeowners — can one site do both?",
              answer: "Yes. We structure your site with clear paths for commercial and domestic customers, so each audience finds the relevant services, case studies, and contact information."
            },
            {
              question: "How much does a website for an air conditioning business cost?",
              answer: "New websites start from £1,500. If you need separate sections for commercial and domestic work, plus case studies and maintenance promotions, we'll give you a fixed quote upfront."
            },
            {
              question: "Can I promote maintenance contracts through the site?",
              answer: "Yes. We can include service plan pages, maintenance booking forms, and reminder systems to help you generate recurring servicing income alongside installation work."
            },
            {
              question: "I'm starting my own HVAC business — is a website worth it from day one?",
              answer: "A professional website helps you look established when bidding for commercial contracts or domestic work. We can start with a focused site and expand as your business grows."
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
              title: "Websites for Electricians",
              description: "Specialist websites for electrical contractors and businesses.",
              href: "/websites-for-electricians",
              tag: "Trade"
            },
            {
              title: "Websites for Solar Panel Fitters",
              description: "Solar installation and renewable energy websites.",
              href: "/websites-for-solar-panel-fitters",
              tag: "Trade"
            },
            {
              title: "Websites for Plumbers",
              description: "Websites designed for plumbing and heating engineers.",
              href: "/websites-for-plumbers",
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
