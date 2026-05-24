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
  {
    title: "Customers are making a green investment",
    description: "Solar panel buyers are investing in their property and the environment. Your website needs to communicate the financial benefits, the installation process, and your credentials clearly and persuasively."
  },
  {
    title: "Accreditations unlock customer trust",
    description: "MCS certification, RECC registration, and manufacturer accreditations are essential — they're often required for grants and Smart Export Guarantee payments. Your site must display these prominently."
  },
  {
    title: "Financial case studies sell solar",
    description: "Real examples showing installation costs, energy savings, and payback periods are powerful. Case studies with actual figures help customers understand the investment and make a decision."
  },
  {
    title: "Battery storage and EV charging expand your offer",
    description: "Many solar customers also want battery storage and EV charging. Your website should present these as complementary services, increasing the value of each installation."
  },
  {
    title: "Local installers win local trust",
    description: "Customers prefer local solar installers they can meet and trust. Local SEO helps you rank for 'solar panel installers in [town]' and builds confidence that you'll be there for aftercare."
  }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry" },
  { name: "St. Martins", href: "/wordpress-hosting-st-martins" },
  { name: "Chirk", href: "/wordpress-hosting-chirk" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen" },
  { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury" },
  { name: "Wrexham", href: "/wordpress-hosting-wrexham" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere" },
  { name: "Whitchurch", href: "/wordpress-hosting-whitchurch" },
  { name: "Llangollen", href: "/wordpress-hosting-llangollen" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool" },
  { name: "Ruabon", href: "/wordpress-hosting-ruabon" }
];

export default function WebsitesForSolarPanelFitters() {
  return (
    <>
      <SEO
        title="Websites for Solar Panel Installers | UX Sites Shropshire"
        description="Showcase your solar installations, demonstrate savings, and build trust with MCS-certified credentials. Get found by homeowners and businesses across Shropshire."
        url="https://uxsites.co.uk/websites-for-solar-panel-fitters"
        schema={[
          serviceSchema({
            name: "Websites for Solar Panel Installers",
            description: "Professional websites for solar panel and renewable energy installers. MCS accreditation showcases, savings case studies, battery storage promotion, and local SEO.",
            url: "https://uxsites.co.uk/websites-for-solar-panel-fitters",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Solar Panel Fitters", url: "https://uxsites.co.uk/websites-for-solar-panel-fitters" },
          ]),
          faqSchema([
            {
              question: "Who handles the website while I'm out on installations?",
              answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site stays live and up to date while you focus on installations."
            },
            {
              question: "I need to show MCS accreditation and savings calculations — can your sites handle that?",
              answer: "Yes. We display your accreditations prominently and can present savings data in clear, persuasive formats that help customers understand the financial case for solar."
            },
            {
              question: "How much does a solar installer's website cost?",
              answer: "New websites start from £1,500. If you need case studies, savings calculators, and pages for battery storage and EV charging, we'll give you a fixed quote upfront."
            },
            {
              question: "Can the site help me generate service and maintenance enquiries too?",
              answer: "Yes. Ongoing panel cleaning, monitoring, and maintenance services can be promoted through your site, creating recurring income alongside new installations."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Renewable energy websites"
          headline="Websites for Solar Panel Installers"
          subheadline="Help customers understand the investment, trust your credentials, and choose you for their installation. We build professional sites for solar and renewable energy contractors."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["MCS Accreditation", "Savings Case Studies", "Battery & EV", "Local SEO", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why solar panel installers need a persuasive website</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Solar is a considered purchase. Your website needs to educate, build trust, and make the financial case — all while showing why you're the right installer for the job.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 bg-background border border-border rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Check size={16} className="text-primary" strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a good solar installer website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Solar customers are making a significant investment. Your website needs to educate them about the technology, demonstrate your expertise, and present a clear financial picture.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We build each site around your specific services — whether that's solar PV, battery storage, EV charging, or all three — and the areas you cover.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "MCS certification and accreditations prominently displayed",
                  "Case studies with installation photos and savings data",
                  "Service pages for solar PV, battery storage, and EV charging",
                  "Clear explanation of the installation process",
                  "Finance and grant information where applicable",
                  "Service area pages for local SEO"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                    </div>
                    <span className="font-semibold text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TestimonialBlock
          quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Small Business Owner"
        />

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Service Areas
              </div>
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Solar Installer Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for solar panel installers across Shropshire, Wrexham, and the Welsh borders.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {serviceAreas.map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={loc.href}
                    className="flex items-center justify-center p-4 bg-background border border-border rounded-xl text-sm font-medium text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    <MapPin size={14} className="text-primary shrink-0 mr-2" />
                    {loc.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Trades & Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Solar installers work alongside electricians, roofers, and air conditioning fitters on many projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Electrician Websites", href: "/websites-for-electricians", desc: "Websites for electrical contractors and businesses." },
                { name: "Roofer Websites", href: "/websites-for-roofers", desc: "Professional roofing company websites with project galleries." },
                { name: "Air Conditioning Fitter Websites", href: "/websites-for-air-conditioning-fitters", desc: "Websites for HVAC and air conditioning contractors." },
                { name: "Builder Websites", href: "/websites-for-builders", desc: "Professional websites for builders and construction companies." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    aria-label={`Learn more about ${item.name}`}
                    className="group flex flex-col h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="How We Help Your Solar Business"
          subtitle="Beyond the website — we keep your online presence running smoothly."
          benefits={[
            { title: "Managed WordPress Hosting", description: "£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your site takes care of itself while you're on installations." },
            { title: "New Website Builds", description: "From £1,500. A fully custom website designed to showcase your accreditations, present savings data, and generate installation enquiries." },
            { title: "Existing Site Refreshes", description: "Your current site not converting? We can redesign with stronger trust signals, better case studies, and improved local SEO." },
            { title: "Content That Educates and Sells", description: "Blog posts, guides, and case studies that explain solar technology, financial benefits, and your installation process — helping customers feel confident choosing you." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "Who handles the website while I'm out on installations?",
              answer: "We do. Our managed hosting service (£50/month) covers all updates, security, backups, and performance. Your site stays live and up to date while you focus on installations."
            },
            {
              question: "I need to show MCS accreditation and savings calculations — can your sites handle that?",
              answer: "Yes. We display your accreditations prominently and can present savings data in clear, persuasive formats that help customers understand the financial case for solar."
            },
            {
              question: "How much does a solar installer's website cost?",
              answer: "New websites start from £1,500. If you need case studies, savings calculators, and pages for battery storage and EV charging, we'll give you a fixed quote upfront."
            },
            {
              question: "Can the site help me generate service and maintenance enquiries too?",
              answer: "Yes. Ongoing panel cleaning, monitoring, and maintenance services can be promoted through your site, creating recurring income alongside new installations."
            },
            {
              question: "I'm starting a solar installation business — should I get a website first?",
              answer: "A professional website helps you look established when competing for installations. We can create a focused site with your accreditations and service areas and expand as your business grows."
            }


          ]}
        />

        <StatsBar
          stats={[
            { number: "15+", label: "Industries Served" },
            { number: "228+", label: "Sites Worked On" },
            { number: "10+", label: "Years Experience" },
            { number: "£50", label: "Per Month Managed Hosting" }


          ]}
        />

        <CTABanner
          title="Let's build your trade website"
          description="Get a free, no-obligation quote. We'll talk through your services, your target areas, and what your site needs to achieve — no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Electricians",
              description: "Specialist websites for electrical contractors and businesses.",
              href: "/websites-for-electricians",
              tag: "Trade"
            },
            {
              title: "Websites for Roofers",
              description: "Professional roofing company websites.",
              href: "/websites-for-roofers",
              tag: "Trade"
            },
            {
              title: "Websites for Air Conditioning Fitters",
              description: "Websites for HVAC and air conditioning contractors.",
              href: "/websites-for-air-conditioning-fitters",
              tag: "Trade"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Full details of our managed hosting plans with daily backups and expert support.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Our full website design and development process — from first conversation to launch.",
              href: "/new-website",
              tag: "Service"
            },
            {
              title: "Small Business Websites",
              description: "Affordable websites for small businesses and sole traders.",
              href: "/small-business-websites",
              tag: "Service"
            },
            {
              title: "Existing Website Refreshes",
              description: "Modernise your existing site with improved UX, speed and mobile experience.",
              href: "/existing-website",
              tag: "Website"
            },
            {
              title: "Website Support & Maintenance",
              description: "Ongoing updates, security, backups, and expert support for your WordPress site.",
              href: "/website-support",
              tag: "Support"
            }          ]}
        />
      </main>
    </>
  );
}
