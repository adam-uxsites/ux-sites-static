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
  { title: "Your work is art — your website should show it", description: "Jewellery is visual and detailed. A high-quality gallery of your pieces helps potential customers appreciate your craftsmanship and choose you over mass-market retailers." },
  { title: "Bespoke commissions need clear communication", description: "Customers seeking custom jewellery want to understand your process. A clear commissioning page helps manage expectations and attract bespoke work." },
  { title: "Repair and valuation services generate steady business", description: "Many jewellers offer repairs and valuations. Highlighting these services on your website brings in regular work beyond new sales." },
  { title: "Trust and credentials matter for high-value purchases", description: "Customers spending significant money on jewellery need to trust you. Qualifications, memberships, and testimonials build that confidence." },
  { title: "Local search connects you with nearby customers", description: "People search for 'jewellery repair near me' or 'bespoke jeweller in [town]'. Local SEO helps you appear in those searches." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForJewellers() {
  return (
    <>
      <SEO title="Websites for Jewellers & Jewellery Designers | UX Sites Shropshire" description="A beautiful website for jewellers, makers, and designers. Showcase your craftsmanship, tell your brand story, and attract more customers across Shropshire." url="https://uxsites.co.uk/websites-for-jewellers" schema={[
        serviceSchema({ name: "Websites for Jewellers", description: "Professional websites for jewellers and jewellery designers. Portfolio galleries, bespoke commission pages, repair services, and local SEO.", url: "https://uxsites.co.uk/websites-for-jewellers", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Jewellers", url: "https://uxsites.co.uk/websites-for-jewellers" }]),
        faqSchema([
          { question: "I'm busy making and selling — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your craft." },
          { question: "Can I showcase my jewellery with high-quality images?", answer: "Absolutely. We build dedicated portfolio galleries with high-resolution images so customers can see the detail and quality of your work." },
          { question: "How much does a jeweller's website cost?", answer: "New websites start from £1,500. If you need a portfolio, commission page, and repair services, we'll give you a fixed quote upfront." },
          { question: "Can customers enquire about bespoke commissions online?", answer: "Yes. We can add a commission enquiry form that captures all the details customers need to provide for a custom piece." },
          { question: "Do you include an online shop for selling jewellery?", answer: "Yes. We can set up an e-commerce system so customers can browse and purchase your pieces directly from your website." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Jeweller websites" headline="Websites for Jewellers, Makers, and Designers" subheadline="Your craftsmanship deserves a showcase as beautiful as your pieces. We build stunning, mobile-friendly sites that display your work and attract customers." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Portfolio Gallery", "Bespoke Commissions", "E-commerce", "Mobile First", "Local SEO"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why jewellers need a website that showcases craftsmanship</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your work is detailed and beautiful — your website should reflect that. Here's what makes a great jeweller's website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great jeweller's website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A jeweller's website needs to dazzle, inform, and build trust. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a high street jewellery shop, a design studio, or a workshop, we structure your site around your pieces and your customers.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["High-resolution portfolio gallery of your work", "Bespoke commission enquiry page", "Repair and valuation services information", "About page telling your story and credentials", "Customer testimonials and reviews", "Mobile-friendly design for browsing on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Jeweller Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for jewellers across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Retail & Trade</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other retail and trade businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Retail Shop Websites", href: "/websites-for-retail-shops", desc: "Websites for independent retail shops and boutiques." },
              { name: "Tattoo Studio Websites", href: "/websites-for-tattoo-studios", desc: "Websites for tattoo artists and studios." },
              { name: "Manufacturer Websites", href: "/websites-for-manufacturers", desc: "Websites for manufacturing companies and factories." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Jewellery Business" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your craft." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your jewellery and attract more customers." },
          { title: "Existing Site Refreshes", description: "Your current site not reflecting your quality? We can redesign with a stronger visual focus." },
          { title: "E-commerce Integration", description: "Sell your pieces online with a fully integrated e-commerce system that matches the quality of your brand." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy making and selling — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your craft." },
          { question: "Can I showcase my jewellery with high-quality images?", answer: "Absolutely. We build dedicated portfolio galleries with high-resolution images so customers can see the detail and quality of your work." },
          { question: "How much does a jeweller's website cost?", answer: "New websites start from £1,500. If you need a portfolio, commission page, and repair services, we'll give you a fixed quote upfront." },
          { question: "Can customers enquire about bespoke commissions online?", answer: "Yes. We can add a commission enquiry form that captures all the details customers need to provide for a custom piece." },
          { question: "Do you include an online shop for selling jewellery?", answer: "Yes. We can set up an e-commerce system so customers can browse and purchase your pieces directly from your website." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your jewellery website" description="Get a free, no-obligation quote. We'll talk through your work and your brand." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Retail Shops", description: "Websites for independent retail shops and boutiques.", href: "/websites-for-retail-shops", tag: "Retail" },
          { title: "Websites for Tattoo Studios", description: "Websites for tattoo artists and studios.", href: "/websites-for-tattoo-studios", tag: "Beauty" },
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
