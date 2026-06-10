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
  { title: "Service pages help clients understand what you offer", description: "Domestic and commercial cleaning cover different services. Clear service pages help potential clients understand exactly what you offer and choose the right option." },
  { title: "Service areas define where you work", description: "Clients need to know if you cover their area. Clear service area information helps manage expectations and generates enquiries from the right locations." },
  { title: "Client testimonials build trust for home access", description: "Letting a cleaner into your home requires trust. Testimonials and reviews from real clients help new customers feel confident in hiring you." },
  { title: "Quote forms make it easy to get new business", description: "An easy-to-use online quote form saves you time on the phone and captures all the information you need to provide an accurate price." },
  { title: "Regular contract clients need clear terms", description: "Weekly, bi-weekly, or monthly cleaning clients want clear information about what's included. Transparent service descriptions help convert one-off cleans into regular contracts." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForCleaners() {
  return (
    <>
      <SEO title="Websites for Cleaners | UX Sites Shropshire" description="Attract more domestic and commercial cleaning clients with a website that sells your reliability. Showcase your services, service areas, and get found across Shropshire." url="https://uxsites.co.uk/websites-for-cleaners/" schema={[
        serviceSchema({ name: "Websites for Cleaners", description: "Professional websites for domestic and commercial cleaners. Service pages, area coverage, quote forms, testimonials, and local SEO.", url: "https://uxsites.co.uk/websites-for-cleaners/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Cleaners", url: "https://uxsites.co.uk/websites-for-cleaners/" }]),
        faqSchema([
          { question: "I'm busy cleaning — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your clients." },
          { question: "Can clients request a quote through the website?", answer: "Yes. We add an easy quote request form that captures job details, location, and contact information so you can respond quickly." },
          { question: "How much does a cleaning business website cost?", answer: "New websites start from £1,500. If you need service pages, area coverage, and quote forms, we'll give you a fixed quote upfront." },
          { question: "Can I list different services like end-of-tenancy and regular cleaning?", answer: "Absolutely. We can create dedicated pages for each service type with descriptions, pricing, and their own booking or quote forms." },
          { question: "How do I show I'm reliable and trustworthy?", answer: "Testimonials, reviews, and any accreditations or insurance details help build trust. We can feature these prominently on your site." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Cleaning business websites" headline="Websites for Domestic and Commercial Cleaners" subheadline="Your reputation is everything — your website should reflect it. We build professional, mobile-friendly sites that showcase your services and help you win new clients." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/case-studies/" }} chips={["Service Pages", "Quote Forms", "Area Coverage", "Mobile First", "Client Reviews"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why cleaners need a website that wins trust</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Cleaning is about trust and reliability — your website should prove both. Here's what makes a great cleaning business website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great cleaning website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A cleaning website needs to inform, reassure, and make hiring easy. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you offer domestic cleaning, commercial cleaning, or specialist services, we structure your site around your services and your clients.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Dedicated pages for each cleaning service", "Service area map and location coverage", "Online quote request forms", "Client testimonials and reviews", "About page with your story and values", "Mobile-friendly design for browsing on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Cleaning Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for cleaners across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Service Businesses</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other service businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Gardener Websites", href: "/websites-for-gardeners/", desc: "Websites for gardeners and grounds maintenance." },
              { name: "Pressure Washer Websites", href: "/websites-for-pressure-washers/", desc: "Websites for pressure washing professionals." },
              { name: "Nursing Home Websites", href: "/websites-for-nursing-homes/", desc: "Websites for care homes and assisted living." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Cleaning Business" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your clients." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your services and help you win new clients." },
          { title: "Existing Site Refreshes", description: "Your current site not winning you work? We can redesign with clearer service pages and better lead generation." },
          { title: "Online Booking Integration", description: "We can add a simple booking system so regular clients can schedule their cleans directly through your website." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy cleaning — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your clients." },
          { question: "Can clients request a quote through the website?", answer: "Yes. We add an easy quote request form that captures job details, location, and contact information so you can respond quickly." },
          { question: "How much does a cleaning business website cost?", answer: "New websites start from £1,500. If you need service pages, area coverage, and quote forms, we'll give you a fixed quote upfront." },
          { question: "Can I list different services like end-of-tenancy and regular cleaning?", answer: "Absolutely. We can create dedicated pages for each service type with descriptions, pricing, and their own booking or quote forms." },
          { question: "How do I show I'm reliable and trustworthy?", answer: "Testimonials, reviews, and any accreditations or insurance details help build trust. We can feature these prominently on your site." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your cleaning website" description="Get a free, no-obligation quote. We'll talk through your services and your areas." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Gardeners", description: "Websites for gardeners and grounds maintenance.", href: "/websites-for-gardeners/", tag: "Services" },
          { title: "Websites for Pressure Washers", description: "Websites for pressure washing professionals.", href: "/websites-for-pressure-washers/", tag: "Services" },
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
