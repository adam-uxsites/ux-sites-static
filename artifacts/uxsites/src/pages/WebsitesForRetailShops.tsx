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
  { title: "Your products need to shine online", description: "Independent retail is about unique products and personal curation. A well-designed product showcase helps customers discover what makes your shop special." },
  { title: "Opening hours matter more than you think", description: "Customers need to know when you're open. Clear, prominent opening hours on your website reduce frustration and prevent wasted trips." },
  { title: "Location and parking information drives foot traffic", description: "Helping customers find you easily with a map, address, and parking info encourages more people to visit your physical shop." },
  { title: "Your shop's story builds customer loyalty", description: "Independent shops have character and history. Sharing your story — why you opened, what you sell, your values — builds connection with customers." },
  { title: "New shops need to build awareness fast", description: "If you're opening a new retail shop, a professional website helps you attract your first customers and establish your presence in the community." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForRetailShops() {
  return (
    <>
      <SEO title="Websites for Independent Retail Shops | UX Sites Shropshire" description="Bring more footfall to your independent shop or boutique. Showcase your products, tell your story, and attract more customers across Shropshire." url="https://uxsites.co.uk/websites-for-retail-shops/" schema={[
        serviceSchema({ name: "Websites for Retail Shops", description: "Professional websites for independent retail shops and boutiques. Product showcases, location info, shop stories, and local SEO.", url: "https://uxsites.co.uk/websites-for-retail-shops/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Retail Shops", url: "https://uxsites.co.uk/websites-for-retail-shops/" }]),
        faqSchema([
          { question: "I'm busy running my shop — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your customers." },
          { question: "Can I showcase my products and update them myself?", answer: "Yes. We build your site so you can easily add and update products, prices, and promotions yourself. Or we can manage it for you." },
          { question: "How much does a retail shop website cost?", answer: "New websites start from £1,500. If you need a product showcase, location info, and contact details, we'll give you a fixed quote upfront." },
          { question: "Can customers buy products directly from my website?", answer: "Yes. We can set up an e-commerce system so you can sell products online as well as in-store." },
          { question: "How do I attract more local customers to my physical shop?", answer: "Local SEO optimisation, Google Maps integration, and clear location information help you appear in local searches and drive foot traffic." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Retail shop websites" headline="Websites for Independent Retail Shops and Boutiques" subheadline="Your shop is unique — your website should be too. We build beautiful, mobile-friendly sites that showcase your products and bring customers through your door." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/case-studies/" }} chips={["Product Showcase", "Location Map", "Opening Hours", "Mobile First", "Local SEO"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why retail shops need a website that drives foot traffic</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your shop has character — your website should reflect it. Here's what makes a great independent retail website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great retail shop website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A retail website needs to showcase products, tell your story, and drive foot traffic. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a boutique, a gift shop, or a specialist store, we structure your site around your products and your customers.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Product showcase with categories and descriptions", "Location map with parking information", "Clear opening hours and contact details", "About page telling your shop's story", "Customer testimonials and reviews", "Mobile-friendly design for browsing on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Retail Shop Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for retail shops across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Retail & Trade</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other retail and trade businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Jeweller Websites", href: "/websites-for-jewellers/", desc: "Websites for jewellery shops, makers, and designers." },
              { name: "Butcher Websites", href: "/websites-for-butchers/", desc: "Websites for butchers, farm shops, and meat retailers." },
              { name: "Local Group Websites", href: "/websites-for-local-groups/", desc: "Websites for community groups, clubs, and societies." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Retail Shop" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your customers." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your products and attract more customers." },
          { title: "Existing Site Refreshes", description: "Your current site not reflecting your shop's character? We can redesign with a stronger visual identity." },
          { title: "E-commerce Integration", description: "Want to sell online as well as in-store? We can set up an e-commerce system that works alongside your physical shop." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy running my shop — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your customers." },
          { question: "Can I showcase my products and update them myself?", answer: "Yes. We build your site so you can easily add and update products, prices, and promotions yourself. Or we can manage it for you." },
          { question: "How much does a retail shop website cost?", answer: "New websites start from £1,500. If you need a product showcase, location info, and contact details, we'll give you a fixed quote upfront." },
          { question: "Can customers buy products directly from my website?", answer: "Yes. We can set up an e-commerce system so you can sell products online as well as in-store." },
          { question: "How do I attract more local customers to my physical shop?", answer: "Local SEO optimisation, Google Maps integration, and clear location information help you appear in local searches and drive foot traffic." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your retail shop website" description="Get a free, no-obligation quote. We'll talk through your products and your brand." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Jewellers", description: "Websites for jewellery shops, makers, and designers.", href: "/websites-for-jewellers/", tag: "Retail" },
          { title: "Websites for Butchers", description: "Websites for butchers, farm shops, and meat retailers.", href: "/websites-for-butchers/", tag: "Food" },
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
