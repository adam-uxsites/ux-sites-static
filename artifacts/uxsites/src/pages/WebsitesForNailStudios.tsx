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
  { title: "Your nail art is your best marketing asset", description: "Nail art is visual and intricate. A dedicated portfolio gallery showcasing your best work helps potential clients see your skill and choose you over other studios." },
  { title: "Clear pricing helps clients decide", description: "Nail services vary widely in price. A clear, easy-to-find price list helps clients understand what they're paying for and reduces basic enquiries." },
  { title: "Online booking is now standard", description: "Most nail studio clients expect to book online. Your website needs an easy booking system that works on mobile so clients can book anytime." },
  { title: "Local search brings walk-in and booked clients", description: "People search for 'nail salon near me' or 'nail art in [town]' when they need a treatment. Local SEO helps your studio appear in those searches." },
  { title: "Your brand sets expectations before they visit", description: "Your website is the first impression of your studio. The colours, imagery, and feel of your site should reflect your studio's atmosphere and style." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForNailStudios() {
  return (
    <>
      <SEO title="Websites for Nail Studios | UX Sites Shropshire" description="Showcase your nail art and attract more bookings with a beautiful portfolio website. Built for nail technicians and studios across Shropshire and the Welsh borders." url="https://uxsites.co.uk/websites-for-nail-studios/" schema={[
        serviceSchema({ name: "Websites for Nail Studios", description: "Professional websites for nail technicians and nail art studios. Portfolio galleries, price lists, online booking, and local SEO.", url: "https://uxsites.co.uk/websites-for-nail-studios/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Nail Studios", url: "https://uxsites.co.uk/websites-for-nail-studios/" }]),
        faqSchema([
          { question: "I'm busy with clients — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your clients." },
          { question: "Can clients book appointments through the website?", answer: "Yes. We can integrate online booking or link to your existing booking system so clients can check availability and book without picking up the phone." },
          { question: "How much does a nail studio website cost?", answer: "New websites start from £1,500. If you need a portfolio, price list, and online booking, we'll give you a fixed quote upfront." },
          { question: "Can you create a gallery for my nail art work?", answer: "Absolutely. We build dedicated portfolio galleries so you can showcase your nail art with high-quality images and categorise by style or service." },
          { question: "Do you offer gift voucher functionality for treatments?", answer: "Yes. We can add a digital gift voucher system so clients can purchase and send vouchers directly through your website." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Nail studio websites" headline="Websites for Nail Studios and Nail Technicians" subheadline="Your nail art deserves a showcase as polished as your work. We build beautiful, mobile-friendly sites that display your portfolio and make booking easy." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Portfolio Gallery", "Price Lists", "Online Booking", "Mobile First", "Local SEO"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why nail studios need a website that shows your skill</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your nail art speaks for itself — but only if potential clients can see it. Here's what makes a great nail studio website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great nail studio website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A nail studio website needs to showcase your art, inform clients, and make booking effortless. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a high street nail bar or a home-based studio, we structure your site around your services and your clients.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Portfolio gallery of your nail art work", "Clear price list and service menu", "Online booking or appointment request forms", "Hygiene and safety information", "Client testimonials and reviews", "Mobile-friendly design for booking on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Nail Studio Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for nail studios across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Beauty & Personal Care</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other beauty and personal care businesses with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Hairdresser Websites", href: "/websites-for-hairdressers", desc: "Websites for hairdressers, barbers, and salons." },
              { name: "Tanning Studio Websites", href: "/websites-for-tanning-studios", desc: "Websites for spray tanning and beauty studios." },
              { name: "Tattoo Studio Websites", href: "/websites-for-tattoo-studios", desc: "Websites for tattoo artists and studios." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Nail Studio" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your clients." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your nail art and attract more bookings." },
          { title: "Existing Site Refreshes", description: "Your current site not reflecting your quality? We can redesign with a stronger visual focus and better booking flow." },
          { title: "Gift Voucher Integration", description: "Let clients purchase and send gift vouchers directly through your website — a great way to attract new customers." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy with clients — who manages my website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your clients." },
          { question: "Can clients book appointments through the website?", answer: "Yes. We can integrate online booking or link to your existing booking system so clients can check availability and book without picking up the phone." },
          { question: "How much does a nail studio website cost?", answer: "New websites start from £1,500. If you need a portfolio, price list, and online booking, we'll give you a fixed quote upfront." },
          { question: "Can you create a gallery for my nail art work?", answer: "Absolutely. We build dedicated portfolio galleries so you can showcase your nail art with high-quality images and categorise by style or service." },
          { question: "Do you offer gift voucher functionality for treatments?", answer: "Yes. We can add a digital gift voucher system so clients can purchase and send vouchers directly through your website." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your nail studio website" description="Get a free, no-obligation quote. We'll talk through your services and your brand." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Tattoo Studios", description: "Websites for tattoo artists and studios.", href: "/websites-for-tattoo-studios", tag: "Beauty" },
          { title: "Websites for Hairdressers", description: "Websites for hairdressers, barbers, and salons.", href: "/websites-for-hairdressers", tag: "Beauty" },
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
