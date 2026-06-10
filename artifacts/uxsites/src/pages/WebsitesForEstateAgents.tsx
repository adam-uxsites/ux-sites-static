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
  { title: "Your property listings are your product", description: "For estate agents, the website is your shop window. Property listings with high-quality photos, floor plans, and key details are the core of what you do â€” they need to look professional and be easy to browse." },
  { title: "Buyers and sellers need different journeys", description: "Vendors want to know you can sell their property. Buyers want to find their next home. Your site needs clear paths for both audiences with the right information and calls to action." },
  { title: "Local knowledge is your differentiator", description: "Estate agency is hyper-local. Your website should demonstrate your knowledge of the area â€” school catchments, transport links, local amenities â€” and rank for local property searches." },
  { title: "Trust signals convert vendors", description: "Selling a home is one of the biggest decisions someone makes. Testimonials, sold properties, and your track record in the area all build the confidence a vendor needs to choose you." },
  { title: "New agencies need to compete instantly", description: "If you're starting your own agency, a professional website helps you look established and competitive from day one against longer-standing local agents." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForEstateAgents() {
  return (
    <>
      <SEO title="Websites for Estate Agents | UX Sites Shropshire" description="Dominate local property search with a website built for estate agents. Showcase listings, attract vendors, and generate more instructions across Shropshire." url="https://uxsites.co.uk/websites-for-estate-agents/" schema={[
        serviceSchema({ name: "Websites for Estate Agents", description: "Professional websites for estate agents and letting agencies. Property listings, vendor attraction, local SEO, and mobile-first design.", url: "https://uxsites.co.uk/websites-for-estate-agents/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Estate Agents", url: "https://uxsites.co.uk/websites-for-estate-agents/" }]),
        faqSchema([
          { question: "Who manages my website while I'm out on viewings?", answer: "We do. Our managed hosting service (Â£50/month) covers updates, security, backups, and performance. Your site stays live and professional while you focus on selling." },
          { question: "Can I easily add new property listings myself?", answer: "Yes. We build on WordPress so you can add new listings, photos, and details yourself. We'll show you how during handover, and we're here if you need support." },
          { question: "How much does an estate agent website cost?", answer: "New websites start from Â£1,500. If you need property listing functionality, multiple branches, and area guides, we'll scope it and give you a fixed quote upfront." },
          { question: "Will my site rank when people search for properties in my area?", answer: "We optimise every site for local search with area pages, property listings, and local content to help you rank for property searches in your target towns." },
          { question: "I'm setting up my own agency â€” can I get a professional website quickly?", answer: "Yes. We can create a professional site with your branding, area coverage, and initial listings to help you launch looking established and ready to compete." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Estate agency websites" headline="Websites for Estate Agents and Letting Agencies" subheadline="Your website is your most important branch. We build professional sites that showcase properties, attract vendors, and help you dominate local property searches." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/work/" }} chips={["Property Listings", "Vendor Attraction", "Local SEO", "Mobile First", "Ongoing Support"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why estate agents need a standout website</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">In a competitive market, your website is where buyers browse and vendors decide. Here's what makes the difference.</p></div>
            <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a good estate agent website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">Estate agent websites serve two audiences â€” buyers browsing properties and vendors choosing an agent. The best sites serve both exceptionally well.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you focus on sales, lettings, or both, we structure your site to attract the right audience and convert them into enquiries.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Professional property listings with photos and floor plans", "Buyer and seller focused navigation paths", "Area guides showing local knowledge", "Sold properties and track record", "Testimonials from recent vendors and buyers", "Mobile-optimised browsing and enquiry forms"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site â€” I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Estate Agent Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for estate agents across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Property and professional services businesses share similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Solicitor Websites", href: "/websites-for-lawyers/", desc: "Websites for solicitors handling conveyancing and property law." },
              { name: "Finance Advisor Websites", href: "/websites-for-finance-advisors/", desc: "Websites for mortgage advisors and financial planners." },
              { name: "Websites for Builders", href: "/websites-for-builders/", desc: "Websites for builders and property developers." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Agency" subtitle="Beyond the website â€” we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "Â£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site stays live while you focus on sales." },
          { title: "New Website Builds", description: "From Â£1,500. A fully custom website designed to showcase properties, attract vendors, and dominate local search." },
          { title: "Existing Site Refreshes", description: "Your current site not performing? We can redesign with better property showcases, clearer audience paths, and improved local SEO." },
          { title: "Local SEO Optimisation", description: "Area pages, local content, and Google Business integration so you show up when buyers and vendors search in your area." }
        ]} />
        <FAQBlock faqs={[
          { question: "Who manages my website while I'm out on viewings?", answer: "We do. Our managed hosting service (Â£50/month) covers updates, security, backups, and performance. Your site stays live and professional while you focus on selling." },
          { question: "Can I easily add new property listings myself?", answer: "Yes. We build on WordPress so you can add new listings, photos, and details yourself. We'll show you how during handover, and we're here if you need support." },
          { question: "How much does an estate agent website cost?", answer: "New websites start from Â£1,500. If you need property listing functionality, multiple branches, and area guides, we'll scope it and give you a fixed quote upfront." },
          { question: "Will my site rank when people search for properties in my area?", answer: "We optimise every site for local search with area pages, property listings, and local content to help you rank for property searches in your target towns." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "Â£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your estate agency website" description="Get a free, no-obligation quote. We'll talk through your coverage areas, property portfolio, and what your site needs to achieve." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Solicitors", description: "Professional websites for solicitors and law firms.", href: "/websites-for-lawyers/", tag: "Service" },
          { title: "Websites for Finance Advisors", description: "Websites for financial advisors and wealth managers.", href: "/websites-for-finance-advisors/", tag: "Service" },
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
