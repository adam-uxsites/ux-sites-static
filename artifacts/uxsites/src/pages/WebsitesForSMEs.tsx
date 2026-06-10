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
  { title: "Your website needs to scale with your business", description: "As your business grows, your website needs to keep up. A scalable site built on a solid foundation saves you from expensive rebuilds down the line." },
  { title: "Professional design builds credibility", description: "In a competitive market, a professional website signals that you're established and trustworthy. First impressions matter, especially for SMEs competing with larger firms." },
  { title: "Core services must be clearly communicated", description: "Potential clients need to understand what you offer quickly. Clear, well-structured service pages help them identify how you can help and take the next step." },
  { title: "Lead generation is the primary goal", description: "Your website should work for you 24/7. Clear calls to action, enquiry forms, and contact information turn visitors into leads while you focus on running your business." },
  { title: "Managed support frees your team", description: "As a growing business, your team has better things to do than manage a website. Ongoing support and maintenance keep your site secure and up to date without distracting your staff." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForSMEs() {
  return (
    <>
      <SEO title="Websites for SMEs | UX Sites Shropshire" description="A professional website that grows with your business. Built for SMEs in Shropshire  -  scalable, modern, and designed to generate real enquiries." url="https://uxsites.co.uk/websites-for-smes/" schema={[
        serviceSchema({ name: "Websites for SMEs", description: "Professional websites for small and medium enterprises. Scalable design, core service pages, lead generation, managed hosting, and local SEO.", url: "https://uxsites.co.uk/websites-for-smes/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for SMEs", url: "https://uxsites.co.uk/websites-for-smes/" }]),
        faqSchema([
          { question: "Our team is focused on growth â€” who manages our website?", answer: "We do. Our managed hosting service (Â£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your business." },
          { question: "Can our website grow as our business expands?", answer: "Yes. We build on a flexible platform that scales with you â€” adding new services, team members, or even e-commerce capabilities as you grow." },
          { question: "How much does an SME website cost?", answer: "New websites start from Â£1,500. If you need service pages, lead generation, and professional design, we'll give you a fixed quote upfront." },
          { question: "How do we capture leads from our website?", answer: "We build clear calls to action, enquiry forms, and contact information into every page. Your site will work as a 24/7 lead generation tool." },
          { question: "What happens when we need to add new services or team members?", answer: "We build your site to be easily expandable. Adding new pages or team profiles is straightforward, and we can handle updates as part of your hosting plan." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="SME websites" headline="Websites for Small and Medium Enterprises" subheadline="Your business is growing â€” your website should grow with it. We build professional, scalable websites that generate leads and build credibility." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/work/" }} chips={["Scalable Design", "Lead Generation", "Professional", "Mobile First", "Managed Support"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why SMEs need a website that works as hard as you do</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your business runs on hard work â€” your website should match that effort. Here's what makes a great SME website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great SME website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">An SME website needs to generate leads, build credibility, and scale with your business. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you're a service business, a product company, or a professional firm, we structure your site around your services and your clients.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Professional service pages with clear offerings", "Lead generation forms and clear CTAs", "About page with your story and team", "Client testimonials and case studies", "Scalable platform for future growth", "Mobile-friendly design for customers on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site â€” I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for SME Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for SMEs across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Business Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other business services with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Medium Business Websites", href: "/websites-for-medium-businesses/", desc: "Websites for established mid-sized companies." },
              { name: "Small Business Websites", href: "/small-business-websites/", desc: "Affordable websites for small businesses." },
              { name: "Consultant Websites", href: "/websites-for-consultants/", desc: "Websites for business consultants and advisors." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your SME" subtitle="Beyond the website â€” we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "Â£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while your team focuses on your business." },
          { title: "New Website Builds", description: "From Â£1,500. A fully custom website designed to generate leads and build credibility for your business." },
          { title: "Existing Site Refreshes", description: "Your current site not keeping up with your growth? We can redesign with a scalable platform and better lead generation." },
          { title: "Ongoing Support & Updates", description: "As your business evolves, we handle site updates, new pages, and feature additions so you can focus on growth." }
        ]} />
        <FAQBlock faqs={[
          { question: "Our team is focused on growth â€” who manages our website?", answer: "We do. Our managed hosting service (Â£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your business." },
          { question: "Can our website grow as our business expands?", answer: "Yes. We build on a flexible platform that scales with you â€” adding new services, team members, or even e-commerce capabilities as you grow." },
          { question: "How much does an SME website cost?", answer: "New websites start from Â£1,500. If you need service pages, lead generation, and professional design, we'll give you a fixed quote upfront." },
          { question: "How do we capture leads from our website?", answer: "We build clear calls to action, enquiry forms, and contact information into every page. Your site will work as a 24/7 lead generation tool." },
          { question: "What happens when we need to add new services or team members?", answer: "We build your site to be easily expandable. Adding new pages or team profiles is straightforward, and we can handle updates as part of your hosting plan." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "Â£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your SME website" description="Get a free, no-obligation quote. We'll talk through your business and your goals." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Medium Businesses", description: "Websites for established mid-sized companies.", href: "/websites-for-medium-businesses/", tag: "Business" },
          { title: "Small Business Websites", description: "Affordable websites for small businesses.", href: "/small-business-websites/", tag: "Business" },
          { title: "Managed WordPress Hosting", description: "Full details of our managed hosting plans.", href: "/managed-wordpress-hosting/", tag: "Service" },
          { title: "New Website Design & Build", description: "Our full website design and development process.", href: "/new-website/", tag: "Service" },
           { title: "Consultant Websites", description: "Websites for business consultants and advisors.", href: "/websites-for-consultants/", tag: "Business" },
           { title: "Existing Website Refreshes", description: "Modernise your existing site with improved UX, speed and mobile experience.", href: "/existing-website/", tag: "Website" },
           { title: "Website Support & Maintenance", description: "Ongoing updates, security, backups, and expert support for your WordPress site.", href: "/website-support/", tag: "Support" }
        ]} />
      </main>
    </>
  );
}
