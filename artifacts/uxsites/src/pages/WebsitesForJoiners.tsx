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
    title: "Your craftsmanship needs to be seen",
    description: "Joinery is about precision and quality. A website with high-quality photos of your work — kitchens, staircases, built-in furniture, windows, doors — lets potential customers judge your skill before they call."
  },
  {
    title: "Customers pay for quality — your site should reflect that",
    description: "Joinery customers are often investing in high-end work for their home. Your website needs to feel as premium as the work you produce. A template site won't do justice to your craft."
  },
  {
    title: "Gallery variety shows your range",
    description: "From kitchen fitting to bespoke furniture, staircases to garden structures — showing the breadth of your work helps customers understand everything you can do for them."
  },
  {
    title: "Local reputation needs online backing",
    description: "Word of mouth brings recommendations, but people still check online before making contact. A professional site with photos and testimonials converts interest into enquiries."
  },
  {
    title: "Clear services prevent misunderstandings",
    description: "Do you do fitting only, or make and install? Do you work with specific materials? Clear service pages help customers understand exactly what you offer and reduce time wasted on mismatched enquiries."
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

export default function WebsitesForJoiners() {
  return (
    <>
      <SEO
        title="Websites for Joiners & Carpenters | UX Sites Shropshire"
        description="Showcase your craftsmanship and win more bespoke joinery projects. A portfolio website built for your trade, designed to impress clients across Shropshire and the Welsh borders."
        url="https://uxsites.co.uk/websites-for-joiners/"
        schema={[
          serviceSchema({
            name: "Websites for Joiners & Carpenters",
            description: "Professional websites for joiners and carpenters. Portfolio-driven design, craftsmanship showcases, local SEO, and mobile-first approach to help you win more work.",
            url: "https://uxsites.co.uk/websites-for-joiners/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Joiners", url: "https://uxsites.co.uk/websites-for-joiners/" },
          ]),
          faqSchema([
            {
              question: "I spend my days in the workshop — who manages my website?",
              answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site runs itself while you focus on making and fitting."
            },
            {
              question: "Do you build sites that work well for showing joinery work?",
              answer: "Yes. We focus on portfolio-driven design with high-quality image galleries, project descriptions, and before-and-after views. Your craftsmanship should be the hero of the site."
            },
            {
              question: "How much does a joiner's website cost?",
              answer: "New websites start from £1,500. If you need a portfolio site with galleries and service pages, we'll give you a fixed quote upfront with no hidden extras."
            },
            {
              question: "Can I update my own portfolio when I finish new projects?",
              answer: "Yes. We build on WordPress so you can easily add new photos and project descriptions. We'll show you how during handover, and we're always here if you need a hand."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Joinery trade websites"
          headline="Websites for Joiners and Carpenters"
          subheadline="Your work is built on quality and precision — your website should reflect the same standard. We build beautiful portfolio sites that showcase your craftsmanship and help you win bespoke projects."
          primaryCta={{ text: "Start Your Project", href: "/contact/" }}
          secondaryCta={{ text: "See Our Work", href: "/case-studies/" }}
          chips={["Portfolio Driven", "Craftsmanship Focus", "Mobile First", "Local SEO", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why joiners need a craftsmanship-led website</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Joinery customers are investing in quality. Your website needs to communicate your skill, your range, and your reliability before they even pick up the phone.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a great joiner website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Joinery customers want to see the quality of your work before they commit. A well-organised portfolio with project photography and clear descriptions is your most powerful sales tool.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you specialise in kitchens, staircases, furniture, or bespoke joinery, we structure your site to show your work at its best and make it easy for customers to enquire.
                </p>
                <Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Project gallery with high-quality photography",
                  "Service pages for each type of joinery work",
                  "About page telling your story and approach",
                  "Customer testimonials linked to specific projects",
                  "Service area pages for local SEO",
                  "Contact and enquiry forms — simple and mobile-friendly"
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Joiner Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for joiners and carpenters across Shropshire, Wrexham, and the Welsh borders.
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
                Joiners and carpenters work alongside many other trades on refurbishment and new build projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Builder Websites", href: "/websites-for-builders/", desc: "Professional websites for builders and construction companies." },
                { name: "Decorator Websites", href: "/websites-for-decorators/", desc: "Painting and decorating websites that showcase your finish." },
                { name: "Electrician Websites", href: "/websites-for-electricians/", desc: "Websites for electrical contractors and businesses." },
                { name: "Plumber Websites", href: "/websites-for-plumbers/", desc: "Websites for plumbing and heating engineers." },
                { name: "Roofer Websites", href: "/websites-for-roofers/", desc: "Professional roofing company websites." }
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
          title="How We Help Your Joinery Business"
          subtitle="Beyond the website — we keep your online presence running smoothly."
          benefits={[
            { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your portfolio site stays up to date with zero effort from you." },
            { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your craftsmanship and help you win more bespoke projects." },
            { title: "Existing Site Refreshes", description: "Your current site not reflecting your quality? We can redesign with better galleries, modern layout, and improved local SEO." },
            { title: "Portfolio Content Updates", description: "We can add new project photos and descriptions as you complete work — keeping your portfolio fresh without you touching the website." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "I spend my days in the workshop — who manages my website?",
              answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site runs itself while you focus on making and fitting."
            },
            {
              question: "Do you build sites that work well for showing joinery work?",
              answer: "Yes. We focus on portfolio-driven design with high-quality image galleries, project descriptions, and before-and-after views. Your craftsmanship should be the hero of the site."
            },
            {
              question: "How much does a joiner's website cost?",
              answer: "New websites start from £1,500. If you need a portfolio site with galleries and service pages, we'll give you a fixed quote upfront with no hidden extras."
            },
            {
              question: "Can I update my own portfolio when I finish new projects?",
              answer: "Yes. We build on WordPress so you can easily add new photos and project descriptions. We'll show you how during handover, and we're always here if you need a hand."
            },
            {
              question: "I'm starting my own joinery business — is a website worth it?",
              answer: "A professional website helps you look established and credible from day one. Even a focused site with a few project photos helps win your first customers and builds confidence in your work."
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
          buttonHref="/contact/"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website/"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Builders",
              description: "Professional websites for builders and construction companies.",
              href: "/websites-for-builders/",
              tag: "Trade"
            },
            {
              title: "Websites for Decorators",
              description: "Painting and decorating websites that showcase your finish.",
              href: "/websites-for-decorators/",
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
              description: "Our full website design and development process — from first conversation to launch.",
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
