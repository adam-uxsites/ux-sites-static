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
  { title: "Your cause needs to connect emotionally", description: "Charity websites need to tell your story and connect with visitors emotionally. Compelling copy, imagery, and video help people understand your mission and care about your cause." },
  { title: "Donations need to be frictionless", description: "Making a donation should be easy. A clear, simple donation page with multiple payment options removes barriers and helps you raise more funds." },
  { title: "Volunteers need clear paths to get involved", description: "Many supporters want to volunteer. Clear volunteer pages with roles, time commitments, and sign-up forms make it easy for people to offer their time." },
  { title: "News and impact stories keep supporters engaged", description: "Regular updates about your work, impact stories, and fundraising achievements keep supporters engaged and show the difference their contributions make." },
  { title: "New charities need to build awareness fast", description: "If you're launching a new charity, a professional website helps you establish your presence, attract supporters, and start making an impact." }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" }, { name: "St. Martins", href: "/wordpress-hosting-st-martins" }, { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" }, { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" }, { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" }, { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" }, { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" }, { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForCharities() {
  return (
    <>
      <SEO title="Websites for Charities & Non-Profits | UX Sites Shropshire" description="Tell your story, attract donors, and grow your impact. A website built for charities and non-profits across Shropshire and the Welsh borders." url="https://uxsites.co.uk/websites-for-charities" schema={[
        serviceSchema({ name: "Websites for Charities", description: "Professional websites for charities and community groups. Donation pages, volunteer sign-up, impact stories, news and events, and local SEO.", url: "https://uxsites.co.uk/websites-for-charities", category: "Web Design" }),
        breadcrumbSchema([{ name: "Home", url: "https://uxsites.co.uk/" }, { name: "Websites for Charities", url: "https://uxsites.co.uk/websites-for-charities" }]),
        faqSchema([
          { question: "Our charity team is small — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your cause." },
          { question: "Can supporters donate directly through the website?", answer: "Yes. We can integrate a donation system with multiple payment options so supporters can contribute easily and securely." },
          { question: "How much does a charity website cost?", answer: "New websites start from £1,500. If you need donation pages, volunteer sign-up, and news sections, we'll give you a fixed quote upfront." },
          { question: "Can people sign up to volunteer online?", answer: "Absolutely. We can create a volunteer page with role descriptions and a sign-up form that captures their details and availability." },
          { question: "Do you offer discounted pricing for charities?", answer: "Yes. We offer a reduced rate for registered charities. Get in touch to discuss your specific needs and budget." }
        ])
      ]} />
      <main>
        <HeroBlock tagline="Charity websites" headline="Websites for Charities and Community Groups" subheadline="Your cause matters — your website should make people care. We build professional, mobile-friendly sites that tell your story and inspire support." primaryCta={{ text: "Start Your Project", href: "/contact" }} secondaryCta={{ text: "See Our Work", href: "/work" }} chips={["Donation Pages", "Volunteer Sign-up", "Impact Stories", "Mobile First", "News & Events"]} />
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why charities need a website that inspires action</h2><p className="text-muted-foreground text-lg max-w-3xl mx-auto">Your cause changes lives — your website should help people join you. Here's what makes a great charity website.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{painPoints.map((card, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 bg-background border border-border rounded-2xl"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Check size={16} className="text-primary" strokeWidth={3} /></div><h3 className="text-xl font-bold mb-3">{card.title}</h3><p className="text-muted-foreground leading-relaxed">{card.description}</p></motion.div>))}</div></div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div><h2 className="text-3xl md:text-4xl font-bold mb-6">What a great charity website includes</h2><p className="text-muted-foreground text-lg leading-relaxed mb-6">A charity website needs to connect, inspire, and make giving easy. We build sites that do all three.</p><p className="text-muted-foreground leading-relaxed mb-8">Whether you're a local community group or a registered charity, we structure your site around your cause and your supporters.</p><Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">See our full website process</Link></div>
              <div className="grid gap-3">{["Compelling about page telling your story", "Donation page with multiple payment options", "Volunteer sign-up with role descriptions", "News and impact stories section", "Events calendar and fundraising pages", "Mobile-friendly design for browsing on the go"].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"><div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0"><Check size={12} className="text-primary-foreground" strokeWidth={3} /></div><span className="font-semibold text-sm">{item}</span></motion.div>))}</div>
            </div>
          </div>
        </section>
        <TestimonialBlock quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues." name="Zahrah Aullybocus" date="January 2026" role="Small Business Owner" />
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"><span className="flex h-2 w-2 rounded-full bg-primary mr-2" />Service Areas</div><h2 className="text-3xl font-bold mb-4">Areas We Serve for Charity Websites</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">We build and support websites for charities across Shropshire, Wrexham, and the Welsh borders.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{serviceAreas.map((loc, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><Link href={loc.href} className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"><MapPin size={14} className="text-primary shrink-0 mr-2" />{loc.name}</Link></motion.div>))}</div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold mb-4">Related Community & Education</h2><p className="text-muted-foreground text-lg max-w-2xl mx-auto">Other community and education organisations with similar website needs.</p></div>
            <div className="grid md:grid-cols-3 gap-6">{[
              { name: "School Websites", href: "/websites-for-schools", desc: "Websites for schools, nurseries, and education." },
              { name: "Local Group Websites", href: "/websites-for-local-groups", desc: "Websites for community groups, clubs, and societies." },
              { name: "Nursing Home Websites", href: "/websites-for-nursing-homes", desc: "Websites for care homes and assisted living." }
            ].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link href={item.href} className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3><p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more <ArrowRight size={14} /></span></Link></motion.div>))}</div>
          </div>
        </section>
        <BenefitsGrid title="How We Help Your Charity" subtitle="Beyond the website — we keep your online presence running smoothly." benefits={[
          { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site runs itself while your team focuses on your cause." },
          { title: "New Website Builds", description: "From £1,500. A fully custom website designed to tell your story and inspire support." },
          { title: "Existing Site Refreshes", description: "Your current site not engaging supporters? We can redesign with stronger storytelling and better donation flow." },
          { title: "Discounted Charity Rates", description: "We offer reduced pricing for registered charities. Get in touch to discuss your needs and budget." }
        ]} />
        <FAQBlock faqs={[
          { question: "Our charity team is small — who manages our website?", answer: "We do. Our managed hosting service (£50/month) covers updates, security, backups, and performance. Your site runs itself while your team focuses on your cause." },
          { question: "Can supporters donate directly through the website?", answer: "Yes. We can integrate a donation system with multiple payment options so supporters can contribute easily and securely." },
          { question: "How much does a charity website cost?", answer: "New websites start from £1,500. If you need donation pages, volunteer sign-up, and news sections, we'll give you a fixed quote upfront." },
          { question: "Can people sign up to volunteer online?", answer: "Absolutely. We can create a volunteer page with role descriptions and a sign-up form that captures their details and availability." },
          { question: "Do you offer discounted pricing for charities?", answer: "Yes. We offer a reduced rate for registered charities. Get in touch to discuss your specific needs and budget." }
        ]} />
        <StatsBar stats={[{ number: "15+", label: "Industries Served" }, { number: "228+", label: "Sites Worked On" }, { number: "10+", label: "Years Experience" }, { number: "£50", label: "Per Month Managed Hosting" }]} />
        <CTABanner title="Let's build your charity website" description="Get a free, no-obligation quote. We'll talk through your cause and your goals." buttonText="Get a Free Quote" buttonHref="/contact" secondaryButtonText="See Our Process" secondaryButtonHref="/new-website" />
        <RelatedPages title="Related Services" pages={[
          { title: "Websites for Schools", description: "Websites for schools, nurseries, and education.", href: "/websites-for-schools", tag: "Education" },
          { title: "Websites for Local Groups", description: "Websites for community groups, clubs, and societies.", href: "/websites-for-local-groups", tag: "Community" },
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
