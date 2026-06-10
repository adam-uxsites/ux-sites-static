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
  { title: "Families research care homes extensively online", description: "Choosing a care home is a major decision. Families research extensively online before visiting. Your website needs to provide the reassurance and information they need." },
  { title: "Facilities and care types must be clearly explained", description: "From residential care to dementia and nursing care, families need to understand exactly what you offer. Clear care type pages help them make informed decisions." },
  { title: "Virtual tours help families from afar", description: "Many families live outside the local area. Virtual tours or extensive photo galleries of your facilities help them get açœŸå®ž sense of your home before visiting." },
  { title: "Admissions information reduces enquiry friction", description: "Clear admissions information, fee guidance, and funding advice help families understand the process and take the next step with confidence." },
  { title: "New homes need to build referrals quickly", description: "If you're opening a new care home, a professional website helps you attract residents and establish trust with families from day one." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForNursingHomes() {
  return (
    <>
      <SEO title="Websites for Care Homes & Nursing Homes | UX Sites Shropshire" description="A warm, reassuring website for care homes and nursing homes. Help families make informed decisions and attract residents across Shropshire." url="https://uxsites.co.uk/websites-for-nursing-homes/" schema={[
        serviceSchema({ name: "Websites for Nursing Homes", description: "Professional websites for care homes, nursing homes, and assisted living facilities. Care type pages, virtual tours, admissions info, and local SEO.", url: "https://uxsites.co.uk/websites-for-nursing-homes/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Nursing Homes", url: "https://uxsites.co.uk/websites-for-nursing-homes/" }]),
        faqSchema([
          { question: "Our care team is focused on residents — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your residents." },
          { question: "Can families take a virtual tour before visiting?", answer: "Yes. We can create a virtual tour or extensive photo gallery so families can explore your facilities from anywhere." },
          { question: "How much does a care home website cost?", answer: "New websites start from £1,500. If you need care type pages, facilities gallery, and admissions info, we'll give you a fixed quote upfront." },
          { question: "Do you include a CQC rating or inspection results section?", answer: "Absolutely. We can prominently feature your CQC rating and link to your latest inspection report to build trust with families." },
          { question: "Can families enquire about availability and fees online?", answer: "Yes. We can add a discreet enquiry form that captures their needs so you can respond with the right information." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Care home websites" headline="Websites for Nursing Homes and Care Homes" subheadline="Choosing a home is a big decision — your website should help families feel confident. We build professional, compassionate websites that inform and reassure." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/case-studies/" }} chips={["Care Types", "Virtual Tours", "Facilities Gallery", "Mobile First", "CQC Info"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why care homes need a website that reassures families</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your care speaks for itself — but families need to see it. Here's what makes a great care home website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great care home website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A care home website needs to inform, reassure, and make contact easy. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a small residential home or a large nursing facility, we structure your site around your residents and their families.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Care type pages with detailed descriptions", "Facilities gallery or virtual tour", "Admissions and fee guidance information", "CQC rating and inspection results", "Testimonials from residents and families", "Mobile-friendly design for families on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Care Home Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for care homes across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Care & Community</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other care and community organisations with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Cleaner Websites", href: "/websites-for-cleaners/", desc: "Websites for domestic and commercial cleaners." },
              { name: "Charity Websites", href: "/websites-for-charities/", desc: "Websites for charities and community groups." },
              { name: "School Websites", href: "/websites-for-schools/", desc: "Websites for schools, nurseries, and education." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Care Home" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while your team focuses on your residents." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to reassure families and attract residents." },
          { title: "Existing Site Refreshes", description: "Your current site not helping families feel confident? We can redesign with better information and a warmer tone." },
          { title: "CQC Integration", description: "We can integrate your CQC rating and inspection reports so families can see your quality ratings directly on your site." }
        ]} />
        <FAQBlock faqs={[
          { question: "Our care team is focused on residents — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your residents." },
          { question: "Can families take a virtual tour before visiting?", answer: "Yes. We can create a virtual tour or extensive photo gallery so families can explore your facilities from anywhere." },
          { question: "How much does a care home website cost?", answer: "New websites start from £1,500. If you need care type pages, facilities gallery, and admissions info, we'll give you a fixed quote upfront." },
          { question: "Do you include a CQC rating or inspection results section?", answer: "Absolutely. We can prominently feature your CQC rating and link to your latest inspection report to build trust with families." },
          { question: "Can families enquire about availability and fees online?", answer: "Yes. We can add a discreet enquiry form that captures their needs so you can respond with the right information." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your care home website" description="Get a free, no-obligation quote. We'll talk through your home and your values." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Cleaners", description: "Websites for domestic and commercial cleaners.", href: "/websites-for-cleaners/", tag: "Services" },
          { title: "Websites for Charities", description: "Websites for charities and community groups.", href: "/websites-for-charities/", tag: "Community" },
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
