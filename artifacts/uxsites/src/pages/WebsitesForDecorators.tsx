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
    title: "Your work is visual — your site should show it",
    description: "Decorating is about finish and detail. A website with a strong gallery of completed projects — rooms, feature walls, exterior work, commercial spaces — shows potential customers exactly what you can achieve."
  },
  {
    title: "Before-and-after photos sell your skill",
    description: "Nothing demonstrates your value like a transformation. Before-and-after galleries with project descriptions give customers confidence in your work and help them imagine what you could do for their space."
  },
  {
    title: "Customers search locally for decorators",
    description: "Most decorating work comes from within a reasonable radius. We optimise your site to rank for 'decorator near me', 'painter and decorator [town]', and 'interior painting [area]'."
  },
  {
    title: "Trust is built before you walk through the door",
    description: "Customers are inviting you into their home. Reviews, testimonials, photos of your work, and a professional website all build the confidence they need to book you in."
  },
  {
    title: "Word of mouth needs a place to land",
    description: "Even when you come recommended, people search for you online before making contact. A professional site confirms you're the right choice and makes it easy for them to get in touch."
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

export default function WebsitesForDecorators() {
  return (
    <>
      <SEO
        title="Websites for Painters & Decorators | UX Sites Shropshire"
        description="A stunning portfolio website that sells your finish before you pick up a brush. Showcase your best work and attract more decorating clients across Shropshire."
        url="https://uxsites.co.uk/websites-for-decorators"
        schema={[
          serviceSchema({
            name: "Websites for Painters & Decorators",
            description: "Professional websites for painters and decorators. Portfolio galleries, before-and-after showcases, local SEO, and mobile-first design to help you win more work.",
            url: "https://uxsites.co.uk/websites-for-decorators",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Decorators", url: "https://uxsites.co.uk/websites-for-decorators" },
          ]),
          faqSchema([
            {
              question: "I'm busy on site — who manages the website for me?",
              answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on the decorating."
            },
            {
              question: "I've got a basic website that doesn't show my work well. Can you improve it?",
              answer: "Yes. We can redesign your site with a strong portfolio focus — galleries, before-and-after shots, and project descriptions that show off your finish and help you win more enquiries."
            },
            {
              question: "How much does a decorator's website cost?",
              answer: "New websites start from £1,500. If you mainly need a portfolio site with a few service pages, it may cost less. We give fixed quotes upfront with no hidden charges."
            },
            {
              question: "Will I be able to add new photos myself?",
              answer: "Yes — we build on WordPress so you can add photos and update your portfolio whenever you complete a project. We'll show you how, and we're here if you need help."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Decorating trade websites"
          headline="Websites for Painters and Decorators"
          subheadline="Your work is visual — your website should show it off. We build professional sites with stunning project galleries that help you win more decorating and painting work."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Portfolio Focused", "Before & After", "Mobile First", "Local SEO", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why decorators need a strong online portfolio</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Painting and decorating is about the quality of your finish. Your website needs to show rather than tell. Here's what makes the difference.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a great decorator website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Decorating customers want to see your work before they book. A well-structured portfolio with project photos, descriptions, and customer feedback is the most powerful tool for winning new clients.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We build each site around your style of work — whether that's interior decorating, exterior painting, wallpapering, or commercial projects.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Photo gallery with project categories and descriptions",
                  "Before-and-after transformations",
                  "Service pages for interior, exterior, and specialist work",
                  "Customer testimonials linked to specific projects",
                  "Clear service area information for local SEO",
                  "Easy contact flow — quote requests and click-to-call"
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Decorator Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for painters and decorators across Shropshire, Wrexham, and the Welsh borders.
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
                Decorators often work alongside other trades on renovation and refurbishment projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Builder Websites", href: "/websites-for-builders", desc: "Professional websites for builders and construction companies." },
                { name: "Joiner Websites", href: "/websites-for-joiners", desc: "Websites for joinery and carpentry businesses." },
                { name: "Electrician Websites", href: "/websites-for-electricians", desc: "Websites for electrical contractors and businesses." },
                { name: "Plumber Websites", href: "/websites-for-plumbers", desc: "Websites for plumbing and heating engineers." },
                { name: "Cleaner Websites", href: "/websites-for-cleaners", desc: "Websites for cleaning and maintenance businesses." }
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
          title="How We Help Your Decorating Business"
          subtitle="Beyond the website — we keep your online presence running smoothly."
          benefits={[
            { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your portfolio site stays up to date with zero effort from you." },
            { title: "New Website Builds", description: "From £1,500. A fully custom website with a strong portfolio focus, designed to showcase your work and help you win more decorating projects." },
            { title: "Existing Site Refreshes", description: "Your current site not doing your work justice? We can redesign with better galleries, modern layout, and improved local SEO." },
            { title: "Portfolio Content Updates", description: "We can add new photos and project descriptions to your site as you complete work — keeping your portfolio fresh without you needing to touch the website." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "I'm busy on site — who manages the website for me?",
              answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on the decorating."
            },
            {
              question: "I've got a basic website that doesn't show my work well. Can you improve it?",
              answer: "Yes. We can redesign your site with a strong portfolio focus — galleries, before-and-after shots, and project descriptions that show off your finish and help you win more enquiries."
            },
            {
              question: "How much does a decorator's website cost?",
              answer: "New websites start from £1,500. If you mainly need a portfolio site with a few service pages, it may cost less. We give fixed quotes upfront with no hidden charges."
            },
            {
              question: "Will I be able to add new photos myself?",
              answer: "Yes — we build on WordPress so you can add photos and update your portfolio whenever you complete a project. We'll show you how, and we're here if you need help."
            },
            {
              question: "I'm starting out as a decorator — is a website worth it?",
              answer: "A professional website helps you look established from day one. Even with a small portfolio, a well-built site with a few strong project photos helps build trust and win your first clients."
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
              title: "Websites for Joiners",
              description: "Websites for joinery and carpentry businesses.",
              href: "/websites-for-joiners",
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
