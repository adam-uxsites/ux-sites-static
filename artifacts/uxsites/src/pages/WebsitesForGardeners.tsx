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
  { title: "Before-and-after photos prove your skill", description: "Gardening and grounds maintenance is visual. Before-and-after photos of your work show potential clients the transformation you can achieve." },
  { title: "Service areas define your coverage", description: "Clients need to know if you cover their area. Clear service area information helps manage expectations and generates enquiries from the right locations." },
  { title: "Seasonal offers keep work coming year-round", description: "Different seasons bring different gardening needs. Promoting seasonal services like autumn clearance, spring planting, and winter maintenance keeps your pipeline full." },
  { title: "Service listings help clients choose", description: "From lawn mowing to hedge trimming, a clear breakdown of services helps clients understand what you offer and makes it easy for them to request a quote." },
  { title: "New gardeners need to build a client base", description: "If you're starting a gardening business, a professional website helps you attract your first clients and look established from day one." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForGardeners() {
  return (
    <>
      <SEO title="Websites for Gardeners & Grounds Maintenance | UX Sites Shropshire" description="A simple, effective website for gardeners and grounds maintenance businesses. Get found locally, showcase your work, and make it easy for customers across Shropshire to get a quote." url="https://uxsites.co.uk/websites-for-gardeners/" schema={[
        serviceSchema({ name: "Websites for Gardeners", description: "Professional websites for gardeners and grounds maintenance. Service portfolios, before-and-after galleries, seasonal promotions, and local SEO.", url: "https://uxsites.co.uk/websites-for-gardeners/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Gardeners", url: "https://uxsites.co.uk/websites-for-gardeners/" }]),
        faqSchema([
          { question: "I'm busy working outdoors — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your gardens." },
          { question: "Can I show before-and-after photos of my work?", answer: "Absolutely. We build dedicated galleries so you can showcase your transformations and prove the quality of your work." },
          { question: "How much does a gardener's website cost?", answer: "New websites start from £1,500. If you need a portfolio, service list, and service areas, we'll give you a fixed quote upfront." },
          { question: "Can clients request a quote through the website?", answer: "Yes. We add a simple quote request form that captures job details, location, and contact information so you can respond quickly." },
          { question: "How do I promote seasonal services like autumn clearance?", answer: "We can add a seasonal promotions section so you can highlight time-limited services and keep your content fresh throughout the year." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Gardener websites" headline="Websites for Gardeners and Grounds Maintenance" subheadline="Your transformations speak for themselves — your website should show them. We build beautiful, mobile-friendly sites that showcase your work and help clients find you." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/case-studies/" }} chips={["Before & After", "Service Areas", "Seasonal Offers", "Mobile First", "Quote Forms"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why gardeners need a website that grows your business</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your work transforms gardens — your website should help you find more clients. Here's what makes a great gardener's website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great gardener's website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A gardener's website needs to show results, list services, and make quoting easy. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a residential gardening round or commercial grounds maintenance, we structure your site around your services and your clients.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Before-and-after portfolio of your work", "Clear breakdown of services offered", "Service area map and location coverage", "Seasonal promotions and offers", "Quote request forms for each service", "Mobile-friendly design for searching on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Gardener Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for gardeners across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Trades & Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other trade and service businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Landscaper Websites", href: "/websites-for-landscapers/", desc: "Websites for landscapers and garden designers." },
              { name: "Cleaner Websites", href: "/websites-for-cleaners/", desc: "Websites for domestic and commercial cleaners." },
              { name: "Pressure Washer Websites", href: "/websites-for-pressure-washers/", desc: "Websites for pressure washing professionals." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Gardening Business" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your gardens." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your work and attract more clients." },
          { title: "Existing Site Refreshes", description: "Your current site not winning you work? We can redesign with stronger before-and-afters and better quoting flow." },
          { title: "Seasonal Promotion Updates", description: "We can manage your seasonal offers and service updates so your site stays current throughout the year." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy working outdoors — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your gardens." },
          { question: "Can I show before-and-after photos of my work?", answer: "Absolutely. We build dedicated galleries so you can showcase your transformations and prove the quality of your work." },
          { question: "How much does a gardener's website cost?", answer: "New websites start from £1,500. If you need a portfolio, service list, and service areas, we'll give you a fixed quote upfront." },
          { question: "Can clients request a quote through the website?", answer: "Yes. We add a simple quote request form that captures job details, location, and contact information so you can respond quickly." },
          { question: "How do I promote seasonal services like autumn clearance?", answer: "We can add a seasonal promotions section so you can highlight time-limited services and keep your content fresh throughout the year." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your gardener's website" description="Get a free, no-obligation quote. We'll talk through your services and your areas." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Landscapers", description: "Websites for landscapers and garden designers.", href: "/websites-for-landscapers/", tag: "Trades" },
          { title: "Websites for Cleaners", description: "Websites for domestic and commercial cleaners.", href: "/websites-for-cleaners/", tag: "Services" },
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
