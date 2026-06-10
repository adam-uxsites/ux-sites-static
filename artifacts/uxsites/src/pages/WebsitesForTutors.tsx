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
  { title: "Subjects and qualifications need clear listing", description: "Parents and students need to see at a glance what subjects and exam boards you cover. A clear subject listing helps them choose the right tutor for their needs." },
  { title: "Qualifications and experience build confidence", description: "Tutoring is about trust in expertise. Displaying your qualifications, teaching experience, and success stories helps parents feel confident in choosing you." },
  { title: "Pricing transparency helps families decide", description: "Hourly rates, package deals, and lesson durations should be clear. Transparent pricing helps families understand the investment and compare options." },
  { title: "Online and in-person options need to be clear", description: "Many tutors now offer both online and in-person lessons. Clearly explaining your options helps families choose the format that works for them." },
  { title: "New tutors need to attract their first students", description: "If you're starting as a tutor, a professional website helps you attract your first students and build your reputation." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins/" }, { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForTutors() {
  return (
    <>
      <SEO title="Websites for Tutors & Tuition Centres | UX Sites Shropshire" description="Attract more students with a website that showcases your subjects, qualifications, and results. Built for tutors and tuition centres across Shropshire." url="https://uxsites.co.uk/websites-for-tutors/" schema={[
        serviceSchema({ name: "Websites for Tutors", description: "Professional websites for tutors and tuition centres. Subject listings, qualifications, pricing, online booking, and local SEO.", url: "https://uxsites.co.uk/websites-for-tutors/", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Tutors", url: "https://uxsites.co.uk/websites-for-tutors/" }]),
        faqSchema([
          { question: "I'm busy teaching â€” who manages my website?", answer: "We do. Our managed hosting service (Â£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your students." },
          { question: "Can students book lessons through the website?", answer: "Yes. We can integrate a booking system so students can check availability and book lessons directly online." },
          { question: "How much does a tutor's website cost?", answer: "New websites start from Â£1,500. If you need subject listings, pricing, and booking, we'll give you a fixed quote upfront." },
          { question: "Can I list my qualifications and experience?", answer: "Absolutely. We build tutor profile pages where you can showcase your qualifications, teaching experience, and student success stories." },
          { question: "Can I offer both online and in-person tutoring options?", answer: "Yes. We can clearly present both options with their own booking flows so students can choose their preferred format." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Tutor websites" headline="Websites for Tutors and Tuition Centres" subheadline="Your expertise changes lives â€” your website should show it. We build professional, mobile-friendly sites that help you attract more students and grow your tutoring business." primaryCta={{ text: "Start Your Project", href: "/contact/" }} secondaryCta={{ text: "See Our Work", href: "/work/" }} chips={["Subject Listings", "Online Booking", "Pricing", "Mobile First", "Local SEO"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why tutors need a website that attracts students</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your teaching speaks for itself â€” but only if students can find you. Here's what makes a great tutor website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great tutor website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A tutor website needs to inform, build trust, and make booking easy. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you're a single subject tutor or run a tuition centre, we structure your site around your subjects and your students.</p><Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Subject and exam board listings", "Tutor qualifications and experience", "Clear pricing and package options", "Online booking or lesson enquiry forms", "Student testimonials and success stories", "Mobile-friendly design for parents on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site â€” I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Tutor Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for tutors across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Education & Community</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other education and community organisations with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "School Websites", href: "/websites-for-schools/", desc: "Websites for schools, nurseries, and education." },
              { name: "Charity Websites", href: "/websites-for-charities/", desc: "Websites for charities and community groups." },
              { name: "Developer Websites", href: "/websites-for-developers/", desc: "Websites for software developers and agencies." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Tutoring Business" subtitle="Beyond the website â€” we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "Â£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while you focus on your students." },
          { title: "New Website Builds", description: "From Â£1,500. A fully custom website designed to showcase your subjects and attract more students." },
          { title: "Existing Site Refreshes", description: "Your current site not attracting students? We can redesign with clearer subject pages and better booking flow." },
          { title: "Online Booking Integration", description: "We can integrate a booking system so students can view availability and book lessons directly through your website." }
        ]} />
        <FAQBlock faqs={[
          { question: "I'm busy teaching â€” who manages my website?", answer: "We do. Our managed hosting service (Â£50/month) covers updates, security, backups, and performance. Your site runs itself while you focus on your students." },
          { question: "Can students book lessons through the website?", answer: "Yes. We can integrate a booking system so students can check availability and book lessons directly online." },
          { question: "How much does a tutor's website cost?", answer: "New websites start from Â£1,500. If you need subject listings, pricing, and booking, we'll give you a fixed quote upfront." },
          { question: "Can I list my qualifications and experience?", answer: "Absolutely. We build tutor profile pages where you can showcase your qualifications, teaching experience, and student success stories." },
          { question: "Can I offer both online and in-person tutoring options?", answer: "Yes. We can clearly present both options with their own booking flows so students can choose their preferred format." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "Â£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your tutor website" description="Get a free, no-obligation quote. We'll talk through your subjects and your teaching." buttonText="Get a Free Quote" buttonHref="/contact/" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website/" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Schools", description: "Websites for schools, nurseries, and education.", href: "/websites-for-schools/", tag: "Education" },
          { title: "Websites for Developers", description: "Websites for software developers and agencies.", href: "/websites-for-developers/", tag: "Business" },
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
