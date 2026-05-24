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
  { title: "Your menu is your main attraction", description: "Cafe-goers want to see your menu before they visit. A well-presented online menu with prices and descriptions helps them decide where to go for their breakfast or lunch." },
  { title: "Opening hours need to be instantly available", description: "Nothing frustrates customers more than arriving to find you're closed. Your opening hours should be clear and easy to find on every page." },
  { title: "Location drives foot traffic", description: "Customers need to find you easily. A clear address, map, and parking information help drive foot traffic from people searching for a nearby cafe." },
  { title: "Catering services can grow your business", description: "Many cafes offer catering for events and offices. Your website should showcase your catering options and make it easy for corporate clients to enquire." },
  { title: "New cafes need to build regular customers", description: "If you're opening a new cafe, a professional website helps you attract your first customers and build a loyal following." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForCafes() {
  return (
    <>
      <SEO title="Websites for Cafes & Tearooms | UX Sites Shropshire" description="Bring more customers through your door with a website that showcases your menu, atmosphere, and location. Built for cafes and tearooms across Shropshire." url="https://uxsites.co.uk/websites-for-cafes" schema={[
        serviceSchema({ name: "Websites for Cafes", description: "Professional websites for cafes, tearooms, and delis. Menu displays, location info, catering services, and local SEO.", url: "https://uxsites.co.uk/websites-for-cafes", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Cafes", url: "https://uxsites.co.uk/websites-for-cafes" }]),
        faqSchema([
          { question: "I'm busy running the cafe — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your customers." },
          { question: "Can customers see my menu and prices online?", answer: "Yes. We build a clear, mobile-friendly menu page that shows your food, drinks, and prices. You can update it yourself or we can do it for you." },
          { question: "How much does a cafe website cost?", answer: "New websites start from £1,500. If you need a menu, location info, and contact details, we'll give you a fixed quote upfront." },
          { question: "Can I promote my catering services on the site?", answer: "Absolutely. We can add a dedicated catering page showcasing your offerings and a simple enquiry form for corporate clients." },
          { question: "Do you include online ordering for takeaway customers?", answer: "Yes. We can add a takeaway ordering system or link to your preferred delivery platform so customers can order ahead." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Cafe websites" headline="Websites for Cafes, Tearooms, and Delis" subheadline="Your food and atmosphere make people want to visit — your website just needs to show them. We build beautiful, mobile-friendly sites that bring customers to your door." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Menu Display", "Location Map", "Opening Hours", "Mobile First", "Local SEO"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why cafes need a website that brings customers in</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your cafe's warmth and food speak for themselves — but only if people can find you. Here's what makes a great cafe website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great cafe website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A cafe website needs to welcome, inform, and bring people through your door. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a traditional tearoom, a modern deli, or a neighbourhood cafe, we structure your site around your menu and your customers.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Menu page with food and drink offerings", "Location map with parking information", "Clear opening hours and contact details", "Catering services page with enquiry form", "Atmosphere gallery of your interior", "Mobile-friendly design for searching on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Cafe Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for cafes across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Food & Hospitality</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other food and hospitality businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Coffee Shop Websites", href: "/websites-for-coffee-shops", desc: "Websites for coffee shops and artisan cafes." },
              { name: "Restaurant Websites", href: "/websites-for-restaurants", desc: "Websites for restaurants, bistros, and gastropubs." },
              { name: "Takeaway Websites", href: "/websites-for-takeaways", desc: "Websites for takeaways, delivery, and fast food." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Cafe" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your customers." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your menu and bring customers to your door." },
          { title: "Existing Site Refreshes", description: "Your current site not bringing people in? We can redesign with a stronger visual focus and better local presence." },
          { title: "Menu Update Service", description: "We can manage your menu updates for you — seasonal changes, specials, and price updates handled as part of your hosting plan." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy running the cafe — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your customers." },
          { question: "Can customers see my menu and prices online?", answer: "Yes. We build a clear, mobile-friendly menu page that shows your food, drinks, and prices. You can update it yourself or we can do it for you." },
          { question: "How much does a cafe website cost?", answer: "New websites start from £1,500. If you need a menu, location info, and contact details, we'll give you a fixed quote upfront." },
          { question: "Can I promote my catering services on the site?", answer: "Absolutely. We can add a dedicated catering page showcasing your offerings and a simple enquiry form for corporate clients." },
          { question: "Do you include online ordering for takeaway customers?", answer: "Yes. We can add a takeaway ordering system or link to your preferred delivery platform so customers can order ahead." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your cafe website" description="Get a free, no-obligation quote. We'll talk through your menu and your brand." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Coffee Shops", description: "Websites for coffee shops and artisan cafes.", href: "/websites-for-coffee-shops", tag: "Food" },
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
