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
  { title: "Your developments are your portfolio", description: "Whether it's a terrace renovation, a small cul-de-sac of three homes, or a whole housing estate, every completed development proves your capability. A website with project pages and photos shows landowners, investors, and buyers what you can deliver." },
  { title: "Buyers research online before they buy off-plan", description: "Homebuyers researching new homes start online. Your website needs to showcase floor plans, specifications, CGI renders, and location details that help them imagine living in your development and get in touch." },
  { title: "Landowners and investors need to trust you", description: "Securing land or investment often depends on your track record. A professional site with completed projects, testimonials, and your company background gives confidence to the people who can make your next development happen." },
  { title: "Local knowledge is your selling point", description: "Property development is hyper-local — knowing the area, the planning authority, and the local market is a huge advantage. Your website should reinforce that you're a local developer who understands the community." },
  { title: "From small builds to large estates — one site can cover it all", description: "Whether you're a sole developer doing one project at a time or a company with multiple sites, your website needs to scale. We build sites that grow with your portfolio, from a single project page to a full development showcase." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForDevelopers() {
  return (
    <>
      <SEO title="Websites for Property Developers | UX Sites Shropshire" description="Sell your developments faster with a website built for property developers. Showcase completed projects, attract buyers and investors from Shropshire and beyond." url="https://uxsites.co.uk/websites-for-developers/" schema={[
        serviceSchema({ name: "Websites for Property Developers", description: "Professional websites for property developers. Development portfolios, off-plan sales pages, CGI renders, floor plans, and local SEO for developers of all scales.", url: "https://uxsites.co.uk/websites-for-developers/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Developers", url: "https://uxsites.co.uk/websites-for-developers/" }]),
        faqSchema([
          { question: "I'm a small developer doing one project at a time — is a website worth it?", answer: "Absolutely. A professional site showcasing your completed projects helps you secure your next plot of land, attract buyers before you've broken ground, and look established when negotiating with investors." },
          { question: "We're building a whole housing estate — can the site handle multiple developments?", answer: "Yes. We build sites that scale from a single project to multiple concurrent developments, with individual pages per site featuring floor plans, CGI renders, specs, and contact details." },
          { question: "Can I use the site to sell homes off-plan before they're built?", answer: "Yes. We can create dedicated development pages with CGI visuals, floor plans, specifications, and enquiry forms to generate interest and reservations before completion." },
          { question: "How much does a property developer's website cost?", answer: "New websites start from £1,500. If you have multiple developments or need CGI-heavy presentations, we'll scope it and give you a fixed upfront quote." },
          { question: "I'm starting my own development company — is a website a priority?", answer: "A professional website helps you look credible when approaching landowners, investors, and buyers. We can start with your first project and expand as your portfolio grows." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Property development websites" headline="Websites for Property Developers" subheadline="Whether you're renovating a single terrace or building a whole housing estate, your website proves what you can deliver. We build professional sites that showcase your developments and attract buyers, landowners, and investors." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/case-studies/" }} chips={["Development Portfolio", "Off-Plan Sales", "CGI & Floor Plans", "Local Expertise", "Scalable"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why property developers need a website at any scale</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">From small-scale renovations to large housing estates, your website is how you prove your track record and attract the next opportunity.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a good property developer website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">Whether you're selling to homebuyers, pitching to landowners, or attracting investment, your website needs to present your developments in the best possible light.</p><p className="text-muted-foreground leading-relaxed mb-8">We build each site around your scale — from a single-project landing page to a multi-development portal with individual microsites for each estate.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Development portfolio with photos and project details", "Individual development pages with floor plans & CGI", "About page telling your company story and track record", "Testimonials from buyers, partners, and investors", "Local area pages showing your knowledge of the region", "Enquiry forms for buyers, landowners, and investors"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Property Developer Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for property developers across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Property & Construction Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Property developers work alongside builders, estate agents, and other construction professionals.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Builder Websites", href: "/websites-for-builders/", desc: "Websites for builders and construction companies." },
              { name: "Estate Agent Websites", href: "/websites-for-estate-agents/", desc: "Websites for estate agencies and property professionals." },
              { name: "Architect & Design Websites", href: "/websites-for-consultants/", desc: "Specialist websites for design and consultancy professionals." },
              { name: "Landscaper Websites", href: "/websites-for-landscapers/", desc: "Websites for landscaping and grounds improvement businesses." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Development Business" subtitle="Beyond the website — we keep your online presence working for you." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your next development." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your developments and attract buyers, landowners, and investors." },
          { title: "Existing Site Refreshes", description: "Your current site not doing justice to your work? We can redesign with better visuals, clearer project pages, and stronger lead generation." },
          { title: "Scalable Development Portfolios", description: "Start with one project and add more as your portfolio grows. We build sites that scale from a single renovation to multiple concurrent housing estates." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm a small developer doing one project at a time — is a website worth it?", answer: "Absolutely. A professional site showcasing your completed projects helps you secure your next plot of land, attract buyers before you've broken ground, and look established when negotiating with investors." },
          { question: "We're building a whole housing estate — can the site handle multiple developments?", answer: "Yes. We build sites that scale from a single project to multiple concurrent developments, with individual pages per site featuring floor plans, CGI renders, specs, and contact details." },
          { question: "Can I use the site to sell homes off-plan before they're built?", answer: "Yes. We can create dedicated development pages with CGI visuals, floor plans, specifications, and enquiry forms to generate interest and reservations before completion." },
          { question: "How much does a property developer's website cost?", answer: "New websites start from £1,500. If you have multiple developments or need CGI-heavy presentations, we'll scope it and give you a fixed upfront quote." },
          { question: "I'm starting my own development company — is a website a priority?", answer: "A professional website helps you look credible when approaching landowners, investors, and buyers. We can start with your first project and expand as your portfolio grows." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your property development website" description="Get a free, no-obligation quote. We'll talk through your developments, your target buyers, and what your site needs to achieve." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Builders", description: "Professional websites for builders and construction companies.", href: "/websites-for-builders/", tag: "Trade" },
          { title: "Websites for Estate Agents", description: "Websites for estate agencies and property professionals.", href: "/websites-for-estate-agents/", tag: "Service" },
          { title: "Managed WordPress Hosting", description: "Full details of our managed hosting plans.", href: "/managed-wordpress-hosting/", tag: "Service" },
          { title: "New Website Design & Build", description: "Our full website design and development process.", href: "/new-website/", tag: "Service" },
          { title: "Small Business Websites", description: "Affordable websites for small businesses.", href: "/small-business-websites/", tag: "Service" },
          { title: "Existing Website Refreshes", description: "Modernise your existing site with improved UX, speed and mobile experience.", href: "/existing-website/", tag: "Website" },
          { title: "Website Support & Maintenance", description: "Ongoing updates, security, backups, and expert support for your WordPress site.", href: "/website-support/", tag: "Support" }
        ]} />
      </main>
    </>
  );
}
