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
  { title: "Parents research schools online before visiting", description: "Most parents start their school search online. A professional website with prospectus information, photos, and virtual tours helps you make a strong first impression." },
  { title: "Admissions information needs to be clear and accessible", description: "Parents need to know how to apply, key dates, and what's required. Clear admissions pages reduce enquiries and help parents take the next step." },
  { title: "News and events keep your community engaged", description: "Regular updates about school news, events, and achievements keep parents and the wider community engaged and show your school is active and thriving." },
  { title: "Parent information reduces admin burden", description: "Term dates, uniform information, meal menus, and policies — putting all parent resources online reduces phone calls and admin time for your staff." },
  { title: "New schools and nurseries need to build enrolment", description: "If you're opening a new school or nursery, a professional website helps you attract your first families and establish your presence in the community." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForSchools() {
  return (
    <>
      <SEO title="Websites for Schools & Nurseries | UX Sites Shropshire" description="A welcoming website for schools and nurseries that parents trust. Prospectus, admissions, news, and events  -  built for education settings across Shropshire." url="https://uxsites.co.uk/websites-for-schools/" schema={[
        serviceSchema({ name: "Websites for Schools", description: "Professional websites for schools, nurseries, and education settings. Prospectus information, admissions pages, news and events, parent resources, and local SEO.", url: "https://uxsites.co.uk/websites-for-schools/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Schools", url: "https://uxsites.co.uk/websites-for-schools/" }]),
        faqSchema([
          { question: "Our school admin team is stretched — who manages the website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your students." },
          { question: "Can parents access prospectus and admissions info online?", answer: "Yes. We build dedicated pages for your prospectus, admissions process, key dates, and virtual tours so parents can find everything they need." },
          { question: "How much does a school website cost?", answer: "New websites start from £1,500. If you need prospectus pages, admissions info, and news sections, we'll give you a fixed quote upfront." },
          { question: "Can I publish news and events myself?", answer: "Yes. We build easy-to-use content management so you can add news posts, event listings, and photo galleries without technical skills." },
          { question: "Do you include parent resources like term dates and policies?", answer: "Absolutely. We can create a parent hub with term dates, uniform info, meal menus, policies, and forms — all in one place." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="School websites" headline="Websites for Schools, Nurseries, and Education" subheadline="Your school has a story to tell — your website should tell it well. We build professional, mobile-friendly sites that engage parents and showcase your school community." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/case-studies/" }} chips={["Prospectus", "Admissions", "News & Events", "Mobile First", "Parent Hub"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why schools need a website that engages parents</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your school community starts online — your website should welcome them. Here's what makes a great school website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great school website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A school website needs to inform, engage, and reduce admin burden. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a primary school, secondary school, or nursery, we structure your site around your families and your community.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Prospectus and admissions information", "News and events section with photo galleries", "Parent hub with term dates and policies", "Staff directory and contact information", "Virtual tour or photo gallery of facilities", "Mobile-friendly design for parents on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for School Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for schools across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Education & Community</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other education and community organisations with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Tutor Websites", href: "/websites-for-tutors/", desc: "Websites for tutors and tuition centres." },
              { name: "Charity Websites", href: "/websites-for-charities/", desc: "Websites for charities and community groups." },
              { name: "Local Group Websites", href: "/websites-for-local-groups/", desc: "Websites for community groups, clubs, and societies." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your School" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while your team focuses on your students." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your school and engage parents." },
          { title: "Existing Site Refreshes", description: "Your current site not reflecting your school? We can redesign with a stronger community focus and better parent resources." },
          { title: "Staff Training", description: "We provide training so your team can update news, events, and resources without needing technical skills." }
        ]} />
        <FAQBlock faqs={[
          { question: "Our school admin team is stretched — who manages the website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your students." },
          { question: "Can parents access prospectus and admissions info online?", answer: "Yes. We build dedicated pages for your prospectus, admissions process, key dates, and virtual tours so parents can find everything they need." },
          { question: "How much does a school website cost?", answer: "New websites start from £1,500. If you need prospectus pages, admissions info, and news sections, we'll give you a fixed quote upfront." },
          { question: "Can I publish news and events myself?", answer: "Yes. We build easy-to-use content management so you can add news posts, event listings, and photo galleries without technical skills." },
          { question: "Do you include parent resources like term dates and policies?", answer: "Absolutely. We can create a parent hub with term dates, uniform info, meal menus, policies, and forms — all in one place." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your school website" description="Get a free, no-obligation quote. We'll talk through your school and your community." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Tutors", description: "Websites for tutors and tuition centres.", href: "/websites-for-tutors/", tag: "Education" },
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
