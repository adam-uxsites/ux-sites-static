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
    title: "Emergency work needs instant access",
    description: "When someone loses power or has an electrical fault, they search for an electrician who can come now — not a big company with a call centre. Your site needs to be findable and make it one tap to call."
  },
  {
    title: "Credentials and certifications matter online",
    description: "Customers want to know you're qualified before they call. Part P registration, NICEIC or NAPIT accreditation, and insurance details all build trust. Your website is where they check before picking up the phone."
  },
  {
    title: "Service clarity prevents wasted calls",
    description: "Domestic, commercial, industrial — customers need to know you cover their type of work. Clear service pages help the right enquiries reach you and filter out jobs you don't take."
  },
  {
    title: "Local search drives local work",
    description: "Most electricians work within a radius. We structure your site to rank for 'electrician near me', 'emergency electrician in [town]', and other local searches that bring in the right calls."
  },
  {
    title: "Gallery builds confidence in your work",
    description: "Before-and-after photos of consumer units, rewires, lighting installations, and outdoor work show your quality. A portfolio turns a website from a listing into a reason to hire you."
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

export default function WebsitesForElectricians() {
  return (
    <>
      <SEO
        title="Websites for Electricians & Electrical Contractors | UX Sites Shropshire"
        description="Get found for local electrical work with a website that showcases your credentials and NICEIC registration. Make it easy for customers across Shropshire to call you."
        url="https://uxsites.co.uk/websites-for-electricians"
        schema={[
          serviceSchema({
            name: "Websites for Electricians & Electrical Contractors",
            description: "Professional websites for electricians and electrical contractors. Local SEO, service pages, certification showcases, and mobile-first design to help you win more work.",
            url: "https://uxsites.co.uk/websites-for-electricians",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Electricians", url: "https://uxsites.co.uk/websites-for-electricians" },
          ]),
          faqSchema([
            {
              question: "I don't have time to manage a website — who looks after it?",
              answer: "We do. With our managed hosting service (£50/month), we handle all updates, security monitoring, backups, and performance. You don't need to touch it — just focus on your electrical work."
            },
            {
              question: "My current website is very basic and not getting calls. Can you improve it?",
              answer: "Yes. We can refresh your existing site with better service pages, local SEO, and mobile optimisation to start generating enquiries again. We'll audit what's happening and give you a clear plan."
            },
            {
              question: "How much does a website for an electrician cost?",
              answer: "New websites start from £1,500 with a fixed quote upfront. If you need a simple service-page site, it may cost less. We'll discuss your needs and give you a price before any work starts."
            },
            {
              question: "Will my site show up when people search for electricians in my area?",
              answer: "We optimise every site for local search with service area pages, Google Business integration, and structured data. Combined with your existing reputation, this helps you rank for local searches."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Electrical trade websites"
          headline="Websites for Electricians and Electrical Contractors"
          subheadline="Your website should help customers find you, trust you, and call you. We build professional, mobile-friendly sites that showcase your credentials and make it easy for local customers to get in touch."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Certification Showcase", "Mobile First", "Local SEO", "Emergency Call to Action", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why electricians need a proper website</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Whether you're a sole trader or running a team, your website is how new customers find and choose you. Here's what makes the difference.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a good electrician website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  From domestic call-outs to commercial contracts, an electrician's website needs to serve different customers in different ways. The best sites make it obvious who you are, what you cover, and how to get hold of you.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We build each site around your specific mix of work — whether that's emergency repairs, new builds, testing and inspection, or EV charger installation.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Service pages for domestic, commercial, and specialist work",
                  "Certifications and accreditations prominently displayed",
                  "Service area pages for local SEO",
                  "Emergency contact information — prominent and mobile-friendly",
                  "Project gallery or case studies of recent work",
                  "Testimonials and review highlights from real customers"
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Electrician Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for electricians across Shropshire, Wrexham, and the Welsh borders.
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
                Electricians often work alongside other construction trades. These pages cover related trade websites.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Plumber Websites", href: "/websites-for-plumbers", desc: "Websites for plumbing and heating engineers." },
                { name: "Builder Websites", href: "/websites-for-builders", desc: "Professional websites for builders and construction companies." },
                { name: "Solar Panel Fitter Websites", href: "/websites-for-solar-panel-fitters", desc: "Websites for solar installation and renewable energy businesses." },
                { name: "Air Conditioning Fitter Websites", href: "/websites-for-air-conditioning-fitters", desc: "Websites for HVAC and air conditioning contractors." },
                { name: "Decorator Websites", href: "/websites-for-decorators", desc: "Painting and decorating websites that showcase your finish." }
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
          title="How We Help Your Electrical Business"
          subtitle="Beyond the website — we keep your online presence running smoothly so you can focus on the job."
          benefits={[
            { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your website takes care of itself while you're out on call-outs." },
            { title: "New Website Builds", description: "From £1,500. A fully custom website designed around your services, certifications, and service areas. Mobile-first, fast, and optimised for Google." },
            { title: "Existing Site Refreshes", description: "Your current site not bringing in calls? We can redesign, restructure, and re-optimise to generate enquiries again — often without starting from scratch." },
            { title: "Local SEO Optimisation", description: "Service area pages and Google Business integration so you show up when local customers search for electricians in your area." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "I don't have time to manage a website — who looks after it?",
              answer: "We do. With our managed hosting service (£50/month), we handle all updates, security monitoring, backups, and performance. You don't need to touch it — just focus on your electrical work."
            },
            {
              question: "My current website is very basic and not getting calls. Can you improve it?",
              answer: "Yes. We can refresh your existing site with better service pages, local SEO, and mobile optimisation to start generating enquiries again. We'll audit what's happening and give you a clear plan."
            },
            {
              question: "How much does a website for an electrician cost?",
              answer: "New websites start from £1,500 with a fixed quote upfront. If you need a simple service-page site, it may cost less. We'll discuss your needs and give you a price before any work starts."
            },
            {
              question: "Will my site show up when people search for electricians in my area?",
              answer: "We optimise every site for local search with service area pages, Google Business integration, and structured data. Combined with your existing reputation, this helps you rank for local searches."
            },
            {
              question: "I'm starting my own electrical business — do I need a website from day one?",
              answer: "A professional website helps you look established from the start, even when you're building your client base. We can create a focused site with your services and area and expand as you grow."
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
              title: "Websites for Plumbers",
              description: "Websites designed for plumbing and heating engineers.",
              href: "/websites-for-plumbers",
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
