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
  { title: "Multi-department sites need clear information architecture", description: "Medium businesses often have multiple departments, services, or locations. Your website needs clear navigation and structure so visitors can find what they need quickly." },
  { title: "Corporate design signals professionalism", description: "Established companies need a website that reflects their maturity and professionalism. A polished, corporate design builds confidence with clients, partners, and investors." },
  { title: "Team pages build trust with stakeholders", description: "Clients want to know who they'll be working with. Team profiles with bios, experience, and contact details help humanise your company and build relationships." },
  { title: "Case studies prove your capability", description: "Medium businesses win work through demonstrated results. Detailed case studies with metrics and testimonials prove your capability and help convert prospects." },
  { title: "Scalable infrastructure supports growth", description: "As your company grows, your website needs to handle increased traffic, content, and functionality. A scalable platform avoids costly migrations down the line." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForMediumBusinesses() {
  return (
    <>
      <SEO title="Websites for Medium-Sized Businesses | UX Sites Shropshire" description="A corporate website that matches your ambition. Multi-department sites with professional design, built for established mid-sized companies across Shropshire." url="https://uxsites.co.uk/websites-for-medium-businesses" schema={[
        serviceSchema({ name: "Websites for Medium Businesses", description: "Professional websites for established mid-sized companies. Multi-department pages, team profiles, case studies, corporate design, and scalable infrastructure.", url: "https://uxsites.co.uk/websites-for-medium-businesses", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Medium Businesses", url: "https://uxsites.co.uk/websites-for-medium-businesses" }]),
        faqSchema([
          { question: "Our team is busy running the business — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your business." },
          { question: "Can our website support multiple departments or locations?", answer: "Absolutely. We design information architecture that supports multiple departments, locations, or service lines with clear navigation." },
          { question: "How much does a medium business website cost?", answer: "New websites start from £1,500. For multi-department sites with team pages and case studies, we'll give you a fixed quote based on your scope." },
          { question: "Can we display team member profiles and bios?", answer: "Yes. We build team pages with individual profiles, photos, bios, and contact details to help clients connect with the right people." },
          { question: "What if we need to add new departments or services later?", answer: "We build on a flexible platform designed for growth. Adding new departments or service pages is straightforward." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Medium business websites" headline="Websites for Medium Businesses and Established Companies" subheadline="Your business has grown — your website should reflect your success. We build professional, multi-department sites that showcase your company's strengths." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Multi-Department", "Corporate Design", "Team Profiles", "Mobile First", "Case Studies"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why medium businesses need a website that reflects their scale</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your business has achieved real scale — your website should show it. Here's what makes a great medium business website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great medium business website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A medium business website needs to inform, impress, and generate qualified leads. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you operate across multiple locations or serve diverse client segments, we structure your site around your business and your stakeholders.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Multi-department or multi-location pages", "Team profiles with bios and contact details", "Case studies with metrics and results", "Corporate design and brand consistency", "Client logos and testimonials", "Mobile-friendly design for stakeholders on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Medium Business Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for medium businesses across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Business Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other business services with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "SME Websites", href: "/websites-for-smes", desc: "Websites for small and medium enterprises." },
              { name: "Manufacturer Websites", href: "/websites-for-manufacturers", desc: "Websites for manufacturing companies and factories." },
              { name: "Developer Websites", href: "/websites-for-developers", desc: "Websites for software developers and agencies." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Medium Business" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while your team focuses on your business." },
          { title: "New Website Builds", description: "Competitive pricing for multi-department sites. We'll scope your needs and give you a fixed quote upfront." },
          { title: "Existing Site Refreshes", description: "Your current site not keeping pace with your growth? We can redesign with a more scalable architecture and professional polish." },
          { title: "Ongoing Support & Growth", description: "As you add departments, locations, or services, we handle the site updates so your online presence grows with you." }
        ]} />
        <FAQBlock faqs={[
          { question: "Our team is busy running the business — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your business." },
          { question: "Can our website support multiple departments or locations?", answer: "Absolutely. We design information architecture that supports multiple departments, locations, or service lines with clear navigation." },
          { question: "How much does a medium business website cost?", answer: "New websites start from £1,500. For multi-department sites with team pages and case studies, we'll give you a fixed quote based on your scope." },
          { question: "Can we display team member profiles and bios?", answer: "Yes. We build team pages with individual profiles, photos, bios, and contact details to help clients connect with the right people." },
          { question: "What if we need to add new departments or services later?", answer: "We build on a flexible platform designed for growth. Adding new departments or service pages is straightforward." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your company website" description="Get a free, no-obligation quote. We'll talk through your business and your goals." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for SMEs", description: "Websites for small and medium enterprises.", href: "/websites-for-smes", tag: "Business" },
          { title: "Websites for Manufacturers", description: "Websites for manufacturing companies and factories.", href: "/websites-for-manufacturers", tag: "Industry" },
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
