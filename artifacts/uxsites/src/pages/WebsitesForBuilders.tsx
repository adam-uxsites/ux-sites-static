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
    title: "Customers search online first",
    description: "When someone needs an extension, loft conversion, or new build, their first stop is Google. If they can't find your completed projects and services online, they'll call a builder who's already showing up."
  },
  {
    title: "Your portfolio is your best sales tool",
    description: "Photos of completed projects do more selling than any brochure. A well-organised gallery with project details, before-and-after shots, and customer testimonials builds confidence before you've even spoken to a prospect."
  },
  {
    title: "Local search gets you local work",
    description: "Builders work within a radius. We structure your site so you rank for local searches like 'builders near me', 'extensions in Oswestry', or 'new build contractors Shropshire'."
  },
  {
    title: "Mobile-friendly wins the call",
    description: "Homeowners searching for builders are often on their phone. If your site loads slowly or looks broken, they tap the next result. We build mobile-first so it's one tap to call you."
  },
  {
    title: "Word of mouth needs a digital home",
    description: "Even when you're recommended by word of mouth, people look you up online before calling. A professional website confirms you're legitimate and gives them confidence to pick up the phone."
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

export default function WebsitesForBuilders() {
  return (
    <>
      <SEO
        title="Websites for Builders & Construction | UX Sites Shropshire"
        description="Get more local leads with a website built for builders and construction companies. Showcase your projects, demonstrate quality, and make it easy for customers in Shropshire to hire you."
        url="https://uxsites.co.uk/websites-for-builders"
        schema={[
          serviceSchema({
            name: "Websites for Builders & Construction",
            description: "Professional websites for builders and construction companies. Portfolio showcases, service pages, local SEO, and mobile-first design to help you win more work.",
            url: "https://uxsites.co.uk/websites-for-builders",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Builders", url: "https://uxsites.co.uk/websites-for-builders" },
          ]),
          faqSchema([
            {
              question: "I'm a busy builder — will I have time to manage a website?",
              answer: "You won't need to. We handle everything from setup to ongoing maintenance. With our managed hosting service, we take care of updates, security, backups, and performance. Your site stays live and up to date while you focus on the build."
            },
            {
              question: "I already have a website but it's old and not getting enquiries. Can you help?",
              answer: "Yes. We can refresh your existing site with a modern design, better project galleries, and improved local SEO. We also audit what's working and what isn't, so you get a clear plan to start generating leads again."
            },
            {
              question: "How much does a professional builder website cost?",
              answer: "New websites start from £1,500, depending on the number of pages and features. Existing site refreshes start from less. We give you a fixed quote upfront with no hidden charges."
            },
            {
              question: "Will my site show up on Google when local customers search for builders?",
              answer: "We optimise every site for local search, including service area pages, Google Business integration, and structured data. Combined with your reviews and word of mouth, this helps you rank for searches in your target areas."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Construction trade websites"
          headline="Websites for Builders and Construction Companies"
          subheadline="Your website should be one of your best tools for winning new work. We build professional, mobile-friendly sites that showcase your projects and make it easy for local customers to get in touch."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Project Portfolio", "Mobile First", "Local SEO", "Trust & Credibility", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why builders need a professional website</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Your reputation is built on the quality of your work — but these days your website is how most customers first discover it. Here's what matters.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a good builder website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Every builder we work with has a different specialism — extensions, renovations, new builds, or commercial work — but the best sites share a common approach.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We build each page around your specific services and the areas you cover, helping potential customers understand exactly what you do and whether you're the right fit for their project.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Portfolio or project gallery with detailed case studies",
                  "Service pages for each type of work you offer",
                  "About page with credentials, experience, and your team",
                  "Customer testimonials and review highlights",
                  "Clear service area information for local SEO",
                  "Click-to-call and enquiry forms designed for mobile"
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Builder Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for builders and construction companies across Shropshire, Wrexham, and the Welsh borders.
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
                Builders often work alongside other trades. If you offer complementary services or work with specialists, these pages cover related trade websites.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Electrician Websites", href: "/websites-for-electricians", desc: "Specialist sites for electrical contractors and businesses." },
                { name: "Plumber Websites", href: "/websites-for-plumbers", desc: "Websites designed for plumbing and heating engineers." },
                { name: "Roofer Websites", href: "/websites-for-roofers", desc: "Professional roofing company websites with project galleries." },
                { name: "Decorator Websites", href: "/websites-for-decorators", desc: "Painting and decorating websites that showcase your finish." },
                { name: "Joiner Websites", href: "/websites-for-joiners", desc: "Websites for joinery and carpentry businesses." },
                { name: "Scaffolder Websites", href: "/websites-for-scaffolders", desc: "Scaffolding company websites for local and regional work." }
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
          title="How We Help Your Building Business"
          subtitle="Beyond the website — we keep your online presence running smoothly so you can focus on the build."
          benefits={[
            { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your website takes care of itself while you work on site." },
            { title: "New Website Builds", description: "From £1,500. A fully custom website designed and built around your services, portfolio, and target areas. Mobile-first, fast, and optimised for Google." },
            { title: "Existing Site Refreshes", description: "Your current site not performing? We can redesign, restructure, and re-optimise it to generate enquiries again — often without starting from scratch." },
            { title: "Local SEO Optimisation", description: "Service area pages, Google Business integration, and structured markup so you show up when local customers search for builders in your area." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "I'm a busy builder — will I have time to manage a website?",
              answer: "You won't need to. We handle everything from setup to ongoing maintenance. With our managed hosting service, we take care of updates, security, backups, and performance. Your site stays live and up to date while you focus on the build."
            },
            {
              question: "I already have a website but it's old and not getting enquiries. Can you help?",
              answer: "Yes. We can refresh your existing site with a modern design, better project galleries, and improved local SEO. We also audit what's working and what isn't, so you get a clear plan to start generating leads again."
            },
            {
              question: "How much does a professional builder website cost?",
              answer: "New websites start from £1,500, depending on the number of pages and features. Existing site refreshes start from less. We give you a fixed quote upfront with no hidden charges."
            },
            {
              question: "Will my site show up on Google when local customers search for builders?",
              answer: "We optimise every site for local search, including service area pages, Google Business integration, and structured data. Combined with your reviews and word of mouth, this helps you rank for searches in your target areas."
            },
            {
              question: "What if I'm just starting my building business and need a website from scratch?",
              answer: "We build sites for new businesses too. A professional website from day one helps you look established and credible, even when you're building your portfolio. We can start with a focused site and expand as you grow."
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
              title: "Websites for Plumbers",
              description: "Websites designed for plumbing and heating engineers.",
              href: "/websites-for-plumbers",
              tag: "Trade"
            },
            {
              title: "Websites for Roofers",
              description: "Professional roofing company websites.",
              href: "/websites-for-roofers",
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
