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
  { title: "Membership information needs to be easy to find", description: "Potential members need to know who you are, what you do, and how to join. Clear membership pages help grow your group and reduce repeated enquiries." },
  { title: "Events and activities drive engagement", description: "Regular events keep your group active and engaging. An events calendar or listings page helps members know what's happening and when." },
  { title: "Photo galleries showcase your community", description: "Photos of your events, activities, and members help show what your group is about and encourage new people to get involved." },
  { title: "Contact information needs to be straightforward", description: "People should be able to find your contact details, meeting location, and social media links quickly and easily from any page." },
  { title: "New groups need to attract their first members", description: "If you're starting a new club or society, a professional website helps you attract your first members and establish your presence." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForLocalGroups() {
  return (
    <>
      <SEO title="Websites for Community Groups & Clubs | UX Sites Shropshire" description="Attract new members and share your activities with a simple, effective website. Built for community groups, clubs, and societies across Shropshire." url="https://uxsites.co.uk/websites-for-local-groups" schema={[
        serviceSchema({ name: "Websites for Local Groups", description: "Professional websites for community groups, clubs, and societies. Membership info, events calendars, photo galleries, and local SEO.", url: "https://uxsites.co.uk/websites-for-local-groups", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Local Groups", url: "https://uxsites.co.uk/websites-for-local-groups" }]),
        faqSchema([
          { question: "Our committee is all volunteer — who manages the website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your group." },
          { question: "Can we add events and photo galleries ourselves?", answer: "Yes. We build easy-to-use content management so you can add events, upload photos, and update information without technical skills." },
          { question: "How much does a community group website cost?", answer: "New websites start from £1,500. If you need membership info, events, and contact details, we'll give you a fixed quote upfront." },
          { question: "Can people join or become members through the website?", answer: "Absolutely. We can add a membership enquiry form or online sign-up so potential members can get in touch directly." },
          { question: "Do you offer discounted rates for community groups?", answer: "Yes. We offer reduced pricing for non-profit community groups and societies. Get in touch to discuss your needs." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Local group websites" headline="Websites for Community Groups, Clubs, and Societies" subheadline="Your group brings people together — your website should help you grow. We build professional, mobile-friendly sites that attract members and showcase your activities." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Membership Info", "Events Calendar", "Photo Gallery", "Mobile First", "Contact"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why local groups need a website that brings people together</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your group builds community — your website should help people find you. Here's what makes a great local group website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great local group website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A local group website needs to welcome, inform, and help people get involved. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you run a sports club, a hobby group, or a community association, we structure your site around your members and your activities.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["About page explaining who you are", "Membership information and joining details", "Events calendar or listings page", "Photo gallery of activities and events", "Contact information and social media links", "Mobile-friendly design for browsing on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Local Group Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for community groups across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Community & Education</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other community and education organisations with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "Charity Websites", href: "/websites-for-charities", desc: "Websites for charities and community groups." },
              { name: "School Websites", href: "/websites-for-schools", desc: "Websites for schools, nurseries, and education." },
              { name: "Tutor Websites", href: "/websites-for-tutors", desc: "Websites for tutors and tuition centres." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} aria-label={`Learn more about ${item.name}`} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Community Group" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while your team focuses on your group." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to attract members and showcase your activities." },
          { title: "Existing Site Refreshes", description: "Your current site not engaging members? We can redesign with better events and membership information." },
          { title: "Discounted Group Rates", description: "We offer reduced pricing for non-profit community groups and societies. Get in touch to discuss your needs." }
        ]} />
        <FAQBlock faqs={[
          { question: "Our committee is all volunteer — who manages the website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your group." },
          { question: "Can we add events and photo galleries ourselves?", answer: "Yes. We build easy-to-use content management so you can add events, upload photos, and update information without technical skills." },
          { question: "How much does a community group website cost?", answer: "New websites start from £1,500. If you need membership info, events, and contact details, we'll give you a fixed quote upfront." },
          { question: "Can people join or become members through the website?", answer: "Absolutely. We can add a membership enquiry form or online sign-up so potential members can get in touch directly." },
          { question: "Do you offer discounted rates for community groups?", answer: "Yes. We offer reduced pricing for non-profit community groups and societies. Get in touch to discuss your needs." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your community group website" description="Get a free, no-obligation quote. We'll talk through your group and your goals." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Charities", description: "Websites for charities and community groups.", href: "/websites-for-charities", tag: "Community" },
          { title: "Websites for Schools", description: "Websites for schools, nurseries, and education.", href: "/websites-for-schools", tag: "Education" },
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
