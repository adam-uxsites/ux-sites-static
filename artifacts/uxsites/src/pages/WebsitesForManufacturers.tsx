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
  { title: "Your capabilities need to be clearly showcased", description: "Manufacturing clients want to know what you can make. Clear capability pages with equipment lists, materials, and production processes help them evaluate your fit." },
  { title: "Product lines need organised presentation", description: "From standard products to custom fabrication, your product lines need clear organisation. Well-structured product pages help customers find what they need." },
  { title: "Quality certifications build B2B trust", description: "ISO certifications and quality standards matter in manufacturing. Displaying your certifications prominently builds trust with potential B2B clients." },
  { title: "B2B enquiry processes need to be straightforward", description: "Manufacturing clients need to request quotes, discuss specifications, and place orders. Clear B2B enquiry forms streamline the process and capture key details." },
  { title: "New manufacturers need to establish credibility fast", description: "If you're launching a new manufacturing operation, a professional website helps you establish credibility with potential clients and suppliers." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForManufacturers() {
  return (
    <>
      <SEO title="Websites for Manufacturing Companies | UX Sites Shropshire" description="Attract B2B clients with a website that showcases your manufacturing capabilities, quality standards, and capacity. Built for factories and manufacturers across Shropshire." url="https://uxsites.co.uk/websites-for-manufacturers" schema={[
        serviceSchema({ name: "Websites for Manufacturers", description: "Professional websites for manufacturing companies and factories. Capability pages, product lines, quality certifications, B2B enquiry, and local SEO.", url: "https://uxsites.co.uk/websites-for-manufacturers", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Manufacturers", url: "https://uxsites.co.uk/websites-for-manufacturers" }]),
        faqSchema([
          { question: "Our team is busy on the factory floor — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on production." },
          { question: "Can we showcase our manufacturing capabilities and equipment?", answer: "Absolutely. We build dedicated capability pages with equipment lists, materials, processes, and production photos." },
          { question: "How much does a manufacturing website cost?", answer: "New websites start from £1,500. If you need capability pages, product lines, and B2B enquiry forms, we'll give you a fixed quote upfront." },
          { question: "Can we display our ISO certifications and quality standards?", answer: "Yes. We can prominently feature your certifications and quality accreditations to build trust with B2B clients." },
          { question: "Do you include B2B enquiry and quote request forms?", answer: "Yes. We build detailed enquiry forms that capture specifications, quantities, and requirements so you can respond with accurate quotes." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Manufacturer websites" headline="Websites for Manufacturing Companies and Factories" subheadline="Your capabilities speak for themselves — your website should prove them. We build professional, B2B-focused websites that showcase your manufacturing expertise." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Capability Pages", "Product Lines", "ISO Certifications", "Mobile First", "B2B Enquiry"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why manufacturers need a website that wins B2B clients</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your factory produces quality — your website should prove it. Here's what makes a great manufacturing website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great manufacturing website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A manufacturing website needs to demonstrate capability, build trust, and generate B2B enquiries. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you're a precision engineering firm or a large-scale manufacturer, we structure your site around your capabilities and your clients.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Capability pages with equipment and processes", "Product line showcase with specifications", "Quality certifications and standards", "B2B enquiry and quote request forms", "Case studies and client testimonials", "Mobile-friendly design for buyers on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Manufacturer Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for manufacturers across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Industry & Business</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other industry and business services with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "SME Websites", href: "/websites-for-smes", desc: "Websites for small and medium enterprises." },
              { name: "Medium Business Websites", href: "/websites-for-medium-businesses", desc: "Websites for established mid-sized companies." },
              { name: "Butcher Websites", href: "/websites-for-butchers", desc: "Websites for butchers, farm shops, and meat retailers." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Manufacturing Business" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while your team focuses on production." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your capabilities and attract B2B clients." },
          { title: "Existing Site Refreshes", description: "Your current site not generating B2B enquiries? We can redesign with better capability pages and enquiry flows." },
          { title: "B2B Enquiry System", description: "We build detailed enquiry forms that capture specifications, quantities, and requirements so you can respond with accurate quotes." }
        ]} />
        <FAQBlock faqs={[
          { question: "Our team is busy on the factory floor — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on production." },
          { question: "Can we showcase our manufacturing capabilities and equipment?", answer: "Absolutely. We build dedicated capability pages with equipment lists, materials, processes, and production photos." },
          { question: "How much does a manufacturing website cost?", answer: "New websites start from £1,500. If you need capability pages, product lines, and B2B enquiry forms, we'll give you a fixed quote upfront." },
          { question: "Can we display our ISO certifications and quality standards?", answer: "Yes. We can prominently feature your certifications and quality accreditations to build trust with B2B clients." },
          { question: "Do you include B2B enquiry and quote request forms?", answer: "Yes. We build detailed enquiry forms that capture specifications, quantities, and requirements so you can respond with accurate quotes." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your manufacturing website" description="Get a free, no-obligation quote. We'll talk through your capabilities and your goals." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for SMEs", description: "Websites for small and medium enterprises.", href: "/websites-for-smes", tag: "Business" },
          { title: "Websites for Medium Businesses", description: "Websites for established mid-sized companies.", href: "/websites-for-medium-businesses", tag: "Business" },
          { title: "Managed WordPress Hosting", description: "Full details of our managed hosting plans.", href: "/managed-wordpress-hosting", tag: "Service" },
          { title: "New Website Design & Build", description: "Our full website design and development process.", href: "/new-website", tag: "Service" },
          { title: "Small Business Websites", description: "Affordable websites for small businesses.", href: "/small-business-websites", tag: "Business" },
          { title: "Existing Website Refreshes", description: "Modernise your existing site with improved UX, speed and mobile experience.", href: "/existing-website", tag: "Website" },
          { title: "Website Support & Maintenance", description: "Ongoing updates, security, backups, and expert support for your WordPress site.", href: "/website-support", tag: "Support" }
        ]} />
      </main>
    </>
  );
}
