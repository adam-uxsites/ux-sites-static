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
  { title: "Your atmosphere is part of the experience", description: "Coffee shops are about more than coffee — they're about the vibe. Photos of your interior, outdoor seating, and latte art help customers imagine themselves there." },
  { title: "Your menu should highlight what makes you special", description: "Specialty coffee, artisan pastries, and unique drinks deserve a well-presented menu. Help customers discover what sets you apart from high street chains." },
  { title: "Location is everything for coffee shops", description: "Customers need to find you easily. Clear location info, a map, and nearby landmarks help drive foot traffic from people searching for coffee nearby." },
  { title: "Free WiFi and workspaces attract regulars", description: "Many coffee shop customers work remotely or study. Highlighting your free WiFi, power outlets, and comfortable seating can attract a loyal daytime crowd." },
  { title: "New coffee shops need to build a following fast", description: "If you're opening a new coffee shop, a professional website helps you attract your first customers and build a community from day one." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForCoffeeShops() {
  return (
    <>
      <SEO title="Websites for Coffee Shops | UX Sites Shropshire" description="Showcase your coffee, your atmosphere, and your story. A website built for independent coffee shops and artisan cafes across Shropshire to attract more customers." url="https://uxsites.co.uk/websites-for-coffee-shops/" schema={[
        serviceSchema({ name: "Websites for Coffee Shops", description: "Professional websites for coffee shops and artisan cafes. Menu displays, atmosphere galleries, location info, and local SEO.", url: "https://uxsites.co.uk/websites-for-coffee-shops/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Coffee Shops", url: "https://uxsites.co.uk/websites-for-coffee-shops/" }]),
        faqSchema([
          { question: "I'm busy serving customers — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your customers." },
          { question: "Can customers see my menu online?", answer: "Yes. We build a clear, mobile-friendly menu page that shows your drinks, food, and prices. You can update it yourself or we can do it for you." },
          { question: "How much does a coffee shop website cost?", answer: "New websites start from £1,500. If you need a menu, gallery, and location info, we'll give you a fixed quote upfront." },
          { question: "Can I promote events and live music on the site?", answer: "Absolutely. We can add an events section so you can promote open mic nights, live music, tasting events, and other special occasions." },
          { question: "Do you include social media integration?", answer: "Yes. We can embed your Instagram feed so your latest posts and photos automatically appear on your site, showcasing your coffee and atmosphere." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Coffee shop websites" headline="Websites for Coffee Shops and Artisan Cafes" subheadline="Your coffee and atmosphere deserve to be seen. We build beautiful, mobile-friendly sites that showcase your space and bring customers through your door." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Menu Display", "Atmosphere Gallery", "Location Map", "Mobile First", "Local SEO"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why coffee shops need a website that brings people in</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your coffee and atmosphere sell the experience — your website just needs to show it. Here's what makes a great coffee shop website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great coffee shop website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A coffee shop website needs to look inviting, inform customers, and drive foot traffic. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a specialty coffee bar or a neighbourhood cafe, we structure your site around your atmosphere and your customers.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Menu page with drinks and food offerings", "Atmosphere gallery of your interior space", "Location map with nearby landmarks", "Opening hours and contact information", "Free WiFi and workspace information", "Mobile-friendly design for searching on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Coffee Shop Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for coffee shops across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Food & Hospitality</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other food and hospitality businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Cafe Websites", href: "/websites-for-cafes", desc: "Websites for cafes, tearooms, and delis." },
              { name: "Restaurant Websites", href: "/websites-for-restaurants", desc: "Websites for restaurants, bistros, and gastropubs." },
              { name: "Takeaway Websites", href: "/websites-for-takeaways", desc: "Websites for takeaways, delivery, and fast food." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Coffee Shop" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your customers." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your atmosphere and attract more customers." },
          { title: "Existing Site Refreshes", description: "Your current site not bringing people in? We can redesign with a stronger visual focus and better local presence." },
          { title: "Social Media Integration", description: "Embed your Instagram feed so your latest coffee photos and posts automatically appear on your site." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy serving customers — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your customers." },
          { question: "Can customers see my menu online?", answer: "Yes. We build a clear, mobile-friendly menu page that shows your drinks, food, and prices. You can update it yourself or we can do it for you." },
          { question: "How much does a coffee shop website cost?", answer: "New websites start from £1,500. If you need a menu, gallery, and location info, we'll give you a fixed quote upfront." },
          { question: "Can I promote events and live music on the site?", answer: "Absolutely. We can add an events section so you can promote open mic nights, live music, tasting events, and other special occasions." },
          { question: "Do you include social media integration?", answer: "Yes. We can embed your Instagram feed so your latest posts and photos automatically appear on your site, showcasing your coffee and atmosphere." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your coffee shop website" description="Get a free, no-obligation quote. We'll talk through your space and your brand." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Cafes", description: "Websites for cafes, tearooms, and delis.", href: "/websites-for-cafes", tag: "Food" },
          { title: "Websites for Restaurants", description: "Websites for restaurants, bistros, and gastropubs.", href: "/websites-for-restaurants", tag: "Food" },
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
