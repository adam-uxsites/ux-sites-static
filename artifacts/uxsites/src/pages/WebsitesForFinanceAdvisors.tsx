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
  { title: "Trust is your most valuable asset", description: "Financial advice is built on trust. Your website needs to communicate your qualifications, regulatory status, and experience before a potential client is willing to share their financial situation." },
  { title: "Regulatory compliance must be visible", description: "FCA registration, complaints procedures, and regulatory disclosures need to be clearly presented. We ensure your site meets compliance requirements while remaining user-friendly and approachable." },
  { title: "Different clients need different messages", description: "Retirement planning, investments, mortgages, protection — each service area speaks to a different need. Clear, dedicated pages help potential clients self-identify and reach out with confidence." },
  { title: "Local presence builds local confidence", description: "Clients often prefer a financial advisor they can meet face to face. Your site should reinforce your local presence and rank for searches in the towns you serve." },
  { title: "New advisers need to establish credibility fast", description: "If you're setting up your own advisory practice, a professional website helps you look established and trusted from day one, competing with longer-established firms." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForFinanceAdvisors() {
  return (
    <>
      <SEO title="Websites for Financial Advisors & IFAs | UX Sites Shropshire" description="Build trust and generate IFA enquiries with a compliant, professional website. Showcase your services, demonstrate expertise, and attract clients across Shropshire." url="https://uxsites.co.uk/websites-for-finance-advisors" schema={[
        serviceSchema({ name: "Websites for Financial Advisors", description: "Professional websites for financial advisors and wealth managers. Compliance-ready design, service pages, trust signals, and local SEO.", url: "https://uxsites.co.uk/websites-for-finance-advisors", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Finance Advisors", url: "https://uxsites.co.uk/websites-for-finance-advisors" }]),
        faqSchema([
          { question: "Who manages my website while I'm with clients?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site stays professional and compliant while you focus on your clients." },
          { question: "Does the website include FCA compliance and regulatory disclosures?", answer: "Yes. We ensure your site includes the necessary regulatory information, complaints procedures, and compliance statements your business needs." },
          { question: "How much does a financial advisor's website cost?", answer: "New websites start from £1,500 with a fixed quote upfront. If you need multiple service areas, adviser profiles, and compliance content, we'll scope it and give you a clear price." },
          { question: "My current site isn't generating enquiries. Can you improve it?", answer: "Yes. We can refresh your site with clearer service pages, better trust signals, and improved local SEO to generate more qualified enquiries." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Financial services websites" headline="Websites for Financial Advisors and Wealth Managers" subheadline="Your clients need to trust you before they share their financial future. We build professional, compliant websites that communicate expertise and make it easy for clients to get in touch." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["FCA Compliant", "Service Clarity", "Trust Signals", "Local SEO", "Ongoing Support"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why financial advisors need a trust-first website</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Financial advice is one of the most trust-intensive services. Your website needs to build confidence before a client ever books a consultation.</p></div>
            <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a good financial advisor website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">Financial websites need to balance regulatory compliance with approachability — showing you're qualified, trusted, and easy to talk to.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you offer independent advice, wealth management, or specialist mortgage guidance, we structure your site to build trust and generate quality enquiries.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Service pages for each advice area", "Adviser profiles with credentials and experience", "FCA registration and compliance information", "Client testimonials and case studies", "Service area pages for local SEO", "Clear, compliant enquiry pathways"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Financial Advisor Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for financial advisors across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Professional Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Professional services firms share similar website requirements.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Solicitor Websites", href: "/websites-for-lawyers", desc: "Professional websites for solicitors and law firms." },
              { name: "Estate Agent Websites", href: "/websites-for-estate-agents", desc: "Websites for estate agencies and property professionals." },
              { name: "Websites for Consultants", href: "/websites-for-consultants", desc: "Specialist websites for consultants and professional services." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Advisory Practice" subtitle="Beyond the website — we keep your online presence running securely." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site stays professional and compliant while you focus on clients." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed around your services, credentials, and target locations. Mobile-first and optimised for Google." },
          { title: "Existing Site Refreshes", description: "Your current site not generating enquiries? We can redesign with clearer services, better trust signals, and improved local SEO." },
          { title: "Compliant & Secure", description: "SSL certificates, security monitoring, and regular updates keep your site secure. Compliant contact forms and privacy-conscious design." }
        ]} />
        <FAQBlock faqs={[
          { question: "Who manages my website while I'm with clients?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site stays professional and compliant while you focus on your clients." },
          { question: "Does the website include FCA compliance and regulatory disclosures?", answer: "Yes. We ensure your site includes the necessary regulatory information, complaints procedures, and compliance statements your business needs." },
          { question: "How much does a financial advisor's website cost?", answer: "New websites start from £1,500 with a fixed quote upfront. If you need multiple service areas, adviser profiles, and compliance content, we'll scope it and give you a clear price." },
          { question: "My current site isn't generating enquiries. Can you improve it?", answer: "Yes. We can refresh your site with clearer service pages, better trust signals, and improved local SEO to generate more qualified enquiries." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your professional services website" description="Get a free, no-obligation quote. We'll talk through your services and what your site needs to achieve." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Solicitors", description: "Professional websites for solicitors and law firms.", href: "/websites-for-lawyers", tag: "Service" },
          { title: "Websites for Estate Agents", description: "Websites for estate agencies and property professionals.", href: "/websites-for-estate-agents", tag: "Service" },
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
