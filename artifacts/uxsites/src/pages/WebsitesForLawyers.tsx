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
  { title: "Clients need confidence before they call", description: "Legal matters are often stressful and personal. Potential clients research firms online before making contact. Your website needs to communicate expertise, approachability, and the specific areas you cover." },
  { title: "Practice area clarity reduces wasted enquiries", description: "Conveyancing, family law, personal injury, commercial — each practice area serves different clients. Clear, separate pages for each area help the right enquiries reach you and filter out mismatches." },
  { title: "Trust signals are non-negotiable", description: "SRA registration, accreditations, awards, and testimonials all build the confidence someone needs to instruct you. These signals need to be prominent and verifiable throughout your site." },
  { title: "Local reputation needs online backing", description: "Legal work is often local — clients want a solicitor who knows the area. Your website should reinforce your local presence and rank for searches in the towns you serve." },
  { title: "New starters need to compete with established firms", description: "If you're setting up your own practice, a professional website helps you look established from day one and compete with longer-standing local firms." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForLawyers() {
  return (
    <>
      <SEO title="Websites for Solicitors & Law Firms | UX Sites Shropshire" description="Build trust and generate qualified legal enquiries with a professional website designed for solicitors and law firms. Showcase your practice areas across Shropshire." url="https://uxsites.co.uk/websites-for-lawyers/" schema={[
        serviceSchema({ name: "Websites for Solicitors & Law Firms", description: "Professional websites for legal practices. Practice area pages, trust signals, local SEO, and enquiry generation for solicitors and law firms.", url: "https://uxsites.co.uk/websites-for-lawyers/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Lawyers", url: "https://uxsites.co.uk/websites-for-lawyers/" }]),
        faqSchema([
          { question: "I'm a busy solicitor — who manages my website day to day?", answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site stays professional and secure while you focus on your clients." },
          { question: "My current website looks dated and doesn't generate enquiries. Can you help?", answer: "Yes. We can refresh your site with modern design, clearer practice area pages, and improved local SEO to start generating enquiries again." },
          { question: "How much does a solicitor's website cost?", answer: "New websites start from £1,500 with a fixed quote upfront. If you need a multi-practice site with several service areas, we'll scope it and give you a clear price before any work starts." },
          { question: "Is my website secure enough for a legal practice?", answer: "Yes. We include SSL certificates, security monitoring, and regular updates as standard. With our managed hosting, your site is actively protected against threats." },
          { question: "I'm setting up my own practice — is a website worth it from the start?", answer: "A professional website helps you look established and credible from day one, even while you build your client base. We can start with your core practice areas and expand as you grow." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Legal practice websites" headline="Websites for Solicitors and Law Firms" subheadline="Your website is often the first impression potential clients have of your practice. We build professional, trustworthy sites that showcase your expertise and make it easy for clients to get in touch." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Practice Areas", "Trust Signals", "Enquiry Generation", "Local SEO", "Ongoing Support"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why law firms need a website that builds trust</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Clients choose a solicitor based on trust and expertise. Your website needs to deliver both before they ever pick up the phone.</p></div>
            <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a good law firm website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">Legal websites need to balance professionalism with approachability. Your site should make potential clients feel confident in your expertise while feeling welcome to reach out.</p><p className="text-muted-foreground leading-relaxed mb-8">We build each site around your specific practice areas and target locations, structuring content to help clients find the right solicitor and take the next step.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Dedicated pages for each practice area", "SRA registration and accreditations displayed", "Solicitor profiles with experience and specialisms", "Client testimonials and case studies", "Service area pages for local SEO", "Secure enquiry forms and clear contact paths"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Law Firm Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for solicitors and law firms across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Professional Services</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Professional services firms often share similar website requirements.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Finance Advisor Websites", href: "/websites-for-finance-advisors", desc: "Websites for financial advisors and wealth management firms." },
              { name: "Estate Agent Websites", href: "/websites-for-estate-agents", desc: "Websites for estate agencies and property professionals." },
              { name: "Websites for Consultants", href: "/websites-for-consultants", desc: "Specialist websites for consultants and professional services." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Legal Practice" subtitle="Beyond the website — we keep your online presence running securely." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site stays secure and professional with zero effort from you." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed around your practice areas, locations, and target clients. Mobile-first and optimised for Google." },
          { title: "Existing Site Refreshes", description: "Your current site not generating instructions? We can redesign with clearer practice areas, better trust signals, and improved local SEO." },
          { title: "Compliant & Secure", description: "SSL certificates, security monitoring, and regular updates keep your site secure and compliant. GDPR-ready contact forms and privacy-conscious design." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm a busy solicitor — who manages my website day to day?", answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site stays professional and secure while you focus on your clients." },
          { question: "My current website looks dated and doesn't generate enquiries. Can you help?", answer: "Yes. We can refresh your site with modern design, clearer practice area pages, and improved local SEO to start generating enquiries again." },
          { question: "How much does a solicitor's website cost?", answer: "New websites start from £1,500 with a fixed quote upfront. If you need a multi-practice site with several service areas, we'll scope it and give you a clear price before any work starts." },
          { question: "Is my website secure enough for a legal practice?", answer: "Yes. We include SSL certificates, security monitoring, and regular updates as standard. With our managed hosting, your site is actively protected against threats." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your professional services website" description="Get a free, no-obligation quote. We'll talk through your practice areas, target locations, and what your site needs to achieve." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Finance Advisors", description: "Websites for financial advisors and wealth management firms.", href: "/websites-for-finance-advisors", tag: "Service" },
          { title: "Websites for Estate Agents", description: "Websites for estate agencies and property professionals.", href: "/websites-for-estate-agents", tag: "Service" },
          { title: "Managed WordPress Hosting", description: "Full details of our managed hosting plans with daily backups and expert support.", href: "/managed-wordpress-hosting", tag: "Service" },
          { title: "New Website Design & Build", description: "Our full website design and development process.", href: "/new-website", tag: "Service" },
          { title: "Small Business Websites", description: "Affordable websites for small businesses and sole traders.", href: "/small-business-websites", tag: "Service" },
          { title: "Existing Website Refreshes", description: "Modernise your existing site with improved UX, speed and mobile experience.", href: "/existing-website", tag: "Website" },
          { title: "Website Support & Maintenance", description: "Ongoing updates, security, backups, and expert support for your WordPress site.", href: "/website-support", tag: "Support" }
        ]} />
      </main>
    </>
  );
}
