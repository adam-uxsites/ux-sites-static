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
  { title: "Project portfolios win high-value clients", description: "Landscaping projects are significant investments. A portfolio of completed projects with descriptions and photos helps potential clients envision what you could create for them." },
  { title: "Before-and-after shots prove your value", description: "The transformation from a muddy garden to a stunning outdoor space is your best selling point. Before-and-after photos demonstrate the impact of your work." },
  { title: "Design process clarity builds confidence", description: "Landscaping projects involve planning and design. Explaining your process from consultation to completion helps clients understand what to expect and feel confident hiring you." },
  { title: "Service areas define your coverage", description: "Clients need to know if you cover their area. Clear service area information helps manage expectations and generates enquiries from the right locations." },
  { title: "New landscapers need to build credibility", description: "If you're starting a landscaping business, a professional portfolio website helps you look established and attract your first major projects." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForLandscapers() {
  return (
    <>
      <SEO title="Websites for Landscapers & Garden Designers | UX Sites Shropshire" description="Transform browsers into leads with a portfolio website that showcases your garden transformations. Attract more landscaping clients across Shropshire and the Welsh borders." url="https://uxsites.co.uk/websites-for-landscapers/" schema={[
        serviceSchema({ name: "Websites for Landscapers", description: "Professional websites for landscapers and garden designers. Project portfolios, design process pages, before-and-after galleries, and local SEO.", url: "https://uxsites.co.uk/websites-for-landscapers/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Landscapers", url: "https://uxsites.co.uk/websites-for-landscapers/" }]),
        faqSchema([
          { question: "I'm busy on site — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your projects." },
          { question: "Can I showcase my completed landscaping projects?", answer: "Absolutely. We build dedicated project portfolio pages with photos, descriptions, and before-and-after comparisons." },
          { question: "How much does a landscaper's website cost?", answer: "New websites start from £1,500. If you need a portfolio, design process page, and service areas, we'll give you a fixed quote upfront." },
          { question: "Can clients request a quote through the website?", answer: "Yes. We add a quote request form that captures project details, location, and contact information so you can respond quickly." },
          { question: "How do I explain my design and build process?", answer: "We can create a clear 'how it works' page that walks potential clients through your process from initial consultation to final planting." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Landscaper websites" headline="Websites for Landscapers and Garden Designers" subheadline="Your projects speak for themselves — your website should show them off. We build beautiful, mobile-friendly sites that showcase your portfolio and attract high-value clients." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Project Portfolios", "Before & After", "Design Process", "Mobile First", "Quote Forms"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why landscapers need a website that showcases your work</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your projects are your best marketing — your website should make them shine. Here's what makes a great landscaper's website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great landscaper's website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A landscaper's website needs to impress, inform, and generate leads. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you specialise in residential gardens or commercial landscaping, we structure your site around your projects and your clients.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Project portfolio with detailed case studies", "Before-and-after transformation galleries", "Design and build process explanation", "Clear breakdown of services offered", "Service area map and location coverage", "Mobile-friendly design for browsing on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Landscaper Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for landscapers across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Trades & Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other trade and service businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Gardener Websites", href: "/websites-for-gardeners", desc: "Websites for gardeners and grounds maintenance." },
              { name: "Builder Websites", href: "/websites-for-builders", desc: "Websites for builders and construction companies." },
              { name: "Joiner Websites", href: "/websites-for-joiners", desc: "Websites for joiners and woodworking professionals." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Landscaping Business" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your projects." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your portfolio and attract high-value clients." },
          { title: "Existing Site Refreshes", description: "Your current site not winning you projects? We can redesign with stronger portfolios and better lead generation." },
          { title: "Project Case Studies", description: "We can help you write and present detailed project case studies that demonstrate your expertise and results." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy on site — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your projects." },
          { question: "Can I showcase my completed landscaping projects?", answer: "Absolutely. We build dedicated project portfolio pages with photos, descriptions, and before-and-after comparisons." },
          { question: "How much does a landscaper's website cost?", answer: "New websites start from £1,500. If you need a portfolio, design process page, and service areas, we'll give you a fixed quote upfront." },
          { question: "Can clients request a quote through the website?", answer: "Yes. We add a quote request form that captures project details, location, and contact information so you can respond quickly." },
          { question: "How do I explain my design and build process?", answer: "We can create a clear 'how it works' page that walks potential clients through your process from initial consultation to final planting." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your landscaping website" description="Get a free, no-obligation quote. We'll talk through your projects and your services." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Gardeners", description: "Websites for gardeners and grounds maintenance.", href: "/websites-for-gardeners", tag: "Trades" },
          { title: "Websites for Builders", description: "Websites for builders and construction companies.", href: "/websites-for-builders", tag: "Trades" },
          { title: "Managed WordPress Hosting", description: "Full details of our managed hosting plans.", href: "/managed-wordpress-hosting", tag: "Service" },
          { title: "New Website Design & Build", description: "Our full website design and development process.", href: "/new-website", tag: "Service" },
          { title: "Small Business Websites", description: "Affordable websites for small businesses.", href: "/small-business-websites", tag: "Service" },
          { title: "Existing Website Refreshes", description: "Modernise your existing site with improved UX, speed and mobile experience.", href: "/existing-website", tag: "Website" },
          { title: "Website Support & Maintenance", description: "Ongoing updates, security, backups, and expert support for your WordPress site.", href: "/website-support", tag: "Support" }
        ]} />
      </main>
    </>
  );
}
