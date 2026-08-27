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
  { title: "Conveyancing clients act on trust first", description: "House buyers and sellers are often under pressure and short on time. They research firms online before phoning, so your website needs to communicate competence and confidence within seconds." },
  { title: "Practice area clarity cuts wasted enquiries", description: "Conveyancing, family law, wills and probate, employment - each practice area serves different clients. Clear, separate pages help the right enquiries reach you and filter out mismatches." },
  { title: "SRA and regulatory trust signals matter", description: "The Solicitors Regulation Authority number, accreditations, and professional memberships all build the confidence someone needs to instruct you. These need to be visible throughout your site." },
  { title: "Local reputation needs online backing", description: "Solicitors are often chosen for their local knowledge and reputation. Your website should reinforce both and rank for searches in the towns you serve." },
  { title: "Enquiry generation fills the diary", description: "A website that sits there looks like a risk to a firm that needs a steady flow of instructions. We build sites designed around converting visitors into clients." }
];

const serviceAreas = [
  { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" }, { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }
];

export default function WebsitesForSolicitors() {
  return (
    <>
      <SEO title="Websites for Solicitors | Law Firm Web Design | UX Sites" description="Specialist websites for solicitors and law firms - practice area pages, trust signals and local SEO that turn visitors into instructions. Managed for you." url="https://uxsites.co.uk/websites-for-solicitors/" schema={[
        serviceSchema({ name: "Websites for Solicitors and Law Firms", description: "Professional websites for solicitors and law firms. Practice area pages, trust signals, local SEO, and enquiry generation, with managed care after launch.", url: "https://uxsites.co.uk/websites-for-solicitors/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Solicitors", url: "https://uxsites.co.uk/websites-for-solicitors/" }]),
        faqSchema([
          { question: "I'm a busy solicitor - who manages my website day to day?", answer: "We do. Once your site is live we hand the running of it over to our managed care, so updates, security, backups, and small changes are handled for you while you focus on your clients." },
          { question: "My current website doesn't generate enquiries. Can you help?", answer: "Yes. We can refresh your site with clearer practice area pages, better trust signals, and improved local SEO so it starts turning visitors into instructions again." },
          { question: "How much does a website for a solicitor cost?", answer: "New websites start from £1,500 with a fixed quote upfront. If you need several service areas and locations, we'll scope it properly and give you a clear price before any work starts." },
          { question: "Is my website secure enough for a legal practice?", answer: "Yes. We include SSL certificates, security monitoring, and regular updates as standard. With our managed hosting, your site is actively protected against threats and kept compliant." },
          { question: "Can you design a conveyancing-focused website?", answer: "Absolutely. We can structure your site around conveyancing and the service areas you offer, with trust signals, service area pages, and enquiry forms designed to win instructions." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Solicitor and law firm websites" headline="Websites for Solicitors and Law Firms" subheadline="Your website often has seconds to convince a potential client you're the right firm. We design enquiry-driven sites for solicitors and law firms, then hand over the day to day care so everything stays fast, secure, and current while you focus on your clients." primaryCta={{ text: "Get a Free Quote", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/case-studies/" }} chips={["Practice Areas", "Trust Signals", "Enquiry Generation", "Local SEO", "Managed Care"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why solicitors need a website that wins instructions</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Clients choose a solicitor based on trust and expertise. Your website needs to deliver both before they ever pick up the phone.</p></div>
            <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a good solicitor's website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">Legal websites need to balance professionalism with approachability. Your site should make potential clients feel confident in your expertise while feeling welcome to reach out.</p><p className="text-muted-foreground leading-relaxed mb-8">We build each site around your practice areas and target locations, structuring content to help clients find the right solicitor and take the next step.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{[{ name: "Dedicated pages for each service area", note: "Clear, focused pages that help the right clients find the right work." }, { name: "A clear conveyancing focus", note: "Conveyancing structured for buyers and sellers under time pressure." }, { name: "Client testimonials and case studies", note: "Verifiable social proof that builds confidence before first contact." }, { name: "Enquiry forms and clear contact paths", note: "Simple ways to request a callback or a quote, with no friction." }, { name: "Mobile-first design", note: "Most research happens on a phone - your site must look right there." }, { name: "Service area pages for local SEO", note: "Ranking for the towns you serve, not just your practice name." }].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><div className="flex flex-col"><span className="font-semibold text-sm">{item.name}</span><span className="text-muted-foreground text-xs mt-1">{item.note}</span></div></motion.div>))}</div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">We also have a dedicated legal page that covers Shropshire and Wrexham legal work in depth, including profiles, practice structures, and approach guides - <Link href="/websites-for-lawyers/" className="text-primary font-medium hover:underline">see our websites for lawyers page</Link>.</p>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Solicitor Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for solicitors and law firms across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Legal Practice" subtitle="Beyond the website - we keep your online presence running securely." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site stays secure and professional with zero effort from you." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed around your practice areas, locations, and target clients. Mobile-first and optimised for Google." },
          { title: "Existing Site Refreshes", description: "Your current site not generating instructions? We can redesign with clearer practice areas, better trust signals, and improved local SEO." },
          { title: "Secure & Compliant", description: "SSL certificates, security monitoring, and regular updates keep your site secure and compliant. GDPR-ready enquiry forms and privacy-conscious design." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm a busy solicitor - who manages my website day to day?", answer: "We do. Once your site is live we hand the running of it over to our managed care, so updates, security, backups, and small changes are handled for you while you focus on your clients." },
          { question: "My current website doesn't generate enquiries. Can you help?", answer: "Yes. We can refresh your site with clearer practice area pages, better trust signals, and improved local SEO so it starts turning visitors into instructions again." },
          { question: "How much does a website for a solicitor cost?", answer: "New websites start from £1,500 with a fixed quote upfront. If you need several service areas and locations, we'll scope it properly and give you a clear price before any work starts." },
          { question: "Is my website secure enough for a legal practice?", answer: "Yes. We include SSL certificates, security monitoring, and regular updates as standard. With our managed hosting, your site is actively protected against threats and kept compliant." },
          { question: "Can you design a conveyancing-focused website?", answer: "Absolutely. We can structure your site around conveyancing and the service areas you offer, with trust signals, service area pages, and enquiry forms designed to win instructions." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your solicitor's website" description="Get a free, no-obligation quote. We'll talk through your practice areas, target locations, and what your site needs to generate instructions." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Lawyers", description: "Our dedicated legal page covering Shropshire and Wrexham legal work in depth.", href: "/websites-for-lawyers/", tag: "Service" },
          { title: "Websites for Estate Agents", description: "Websites for estate agencies and property professionals.", href: "/websites-for-estate-agents/", tag: "Service" },
          { title: "Managed WordPress Hosting", description: "Full details of our managed hosting plans with daily backups and expert support.", href: "/managed-wordpress-hosting/", tag: "Service" },
          { title: "Website Support & Maintenance", description: "Ongoing updates, security, backups, and expert support for your WordPress site.", href: "/website-support/", tag: "Support" },
          { title: "SEO Services Shropshire", description: "Local SEO services to help your practice rank in the towns you serve.", href: "/seo-services-shropshire/", tag: "Service" },
          { title: "Local SEO for Shropshire Businesses", description: "A practical guide to ranking locally and winning enquiries in Shropshire.", href: "/blog/local-seo-shropshire-businesses/", tag: "Blog" }
        ]} />
      </main>
    </>
  );
}