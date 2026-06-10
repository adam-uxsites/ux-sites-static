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
    title: "Emergency plumbing needs instant results",
    description: "When a pipe bursts at 2am or a boiler fails in winter, customers don't browse â€” they search and call the first plumber they find. Your site needs to be visible, fast, and make it one tap to dial."
  },
  {
    title: "Trust is everything in this trade",
    description: "Customers are letting you into their homes. Gas Safe registration, insurance details, and customer reviews on your site build the confidence they need to pick up the phone and book you in."
  },
  {
    title: "Service clarity saves you time",
    description: "Do you do central heating, bathroom fitting, emergency call-outs, or all three? Clear service pages help the right customers find you and reduce time spent on enquiries that aren't a good fit."
  },
  {
    title: "Local coverage matters more than national",
    description: "Plumbers work within a radius. We structure your site to rank for 'plumber near me', 'emergency plumber in [town]', and 'heating engineer [area]' so calls come from customers within reach."
  },
  {
    title: "Your reputation needs to travel online too",
    description: "Word of mouth is powerful, but people still look you up before calling. A professional site with reviews and a gallery of completed work confirms word of mouth and turns interest into bookings."
  }
];

const serviceAreas = [
  { name: "Oswestry", href: "/wordpress-hosting-oswestry/" },
  { name: "St. Martins", href: "/wordpress-hosting-st-martins/" },
  { name: "Chirk", href: "/wordpress-hosting-chirk/" },
  { name: "Gobowen", href: "/wordpress-hosting-gobowen/" },
  { name: "Shrewsbury", href: "/wordpress-hosting-shrewsbury/" },
  { name: "Wrexham", href: "/wordpress-hosting-wrexham/" },
  { name: "Ellesmere", href: "/wordpress-hosting-ellesmere/" },
  { name: "Whitchurch", href: "/wordpress-hosting-whitchurch/" },
  { name: "Llangollen", href: "/wordpress-hosting-llangollen/" },
  { name: "Welshpool", href: "/wordpress-hosting-welshpool/" },
  { name: "Ruabon", href: "/wordpress-hosting-ruabon/" }
];

export default function WebsitesForPlumbers() {
  return (
    <>
      <SEO
        title="Websites for Plumbers & Heating Engineers | UX Sites Shropshire"
        description="Get found for emergency and local plumbing jobs with a website built for your trade. Gas safe registered, service areas clearly shown, and optimised for local search in Shropshire."
        url="https://uxsites.co.uk/websites-for-plumbers/"
        schema={[
          serviceSchema({
            name: "Websites for Plumbers & Heating Engineers",
            description: "Professional websites for plumbers and heating engineers. Emergency contact focus, Gas Safe credentials, local SEO, and mobile-first design to generate more bookings.",
            url: "https://uxsites.co.uk/websites-for-plumbers/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Plumbers", url: "https://uxsites.co.uk/websites-for-plumbers/" },
          ]),
          faqSchema([
            {
              question: "I'm always on the road â€” who manages the website for me?",
              answer: "We do. Our managed hosting service (Â£50/month) includes all updates, security, backups, and performance monitoring. You don't need to log in or touch anything â€” your site just works."
            },
            {
              question: "I've got an old website that doesn't bring in calls. Can you fix it?",
              answer: "Yes. We can refresh your existing site with modern design, better local SEO, and clear calls to action. We'll audit it first so you know exactly what needs to change."
            },
            {
              question: "How much does a plumber's website cost?",
              answer: "New websites start from Â£1,500. If you need a straightforward site with service pages and contact details, it may cost less. We quote fixed prices upfront with no surprises."
            },
            {
              question: "Will my Gas Safe registration and insurance details be on the site?",
              answer: "Yes. We make sure your credentials are clearly displayed â€” it's one of the first things customers look for. We also add trust signals like reviews and guarantees throughout the site."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Plumbing trade websites"
          headline="Websites for Plumbers and Heating Engineers"
          subheadline="When customers need a plumber, they search online first â€” often in a hurry. We build professional, mobile-friendly sites that help you get found, build trust instantly, and make it easy for customers to call."
          primaryCta={{ text: "Start Your Project", href: "/contact/" }}
          secondaryCta={{ text: "See Our Work", href: "/work/" }}
          chips={["Gas Safe Credentials", "Emergency Contact", "Mobile First", "Local SEO", "Ongoing Support"]}
        />

        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why plumbers need a proper online presence</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Whether you're a sole trader or running a team, your website is how new customers decide to call you. Here's what matters for plumbing and heating businesses.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a good plumbing website includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Plumbing and heating customers often need help urgently. Your website needs to make it as easy as possible for them to find you, trust you, and get in touch â€” ideally in under ten seconds.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We build each site around your specific services â€” whether that's emergency repairs, bathroom installations, central heating, or commercial work â€” and the areas you cover.
                </p>
                <Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  "Prominent emergency contact number â€” one tap on mobile",
                  "Gas Safe and other credentials clearly displayed",
                  "Service pages for each type of work you offer",
                  "Service area pages for local SEO",
                  "Customer reviews and testimonials with photos where possible",
                  "Gallery of completed bathroom and heating installations"
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
          quote="Adam did a fantastic job upgrading an existing site â€” I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
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
              <h2 className="text-3xl font-bold mb-4">Areas We Serve for Plumber Websites</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build and support websites for plumbers and heating engineers across Shropshire, Wrexham, and the Welsh borders.
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
                Plumbers and heating engineers often work alongside other trades. These pages cover related trade websites.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Electrician Websites", href: "/websites-for-electricians/", desc: "Websites for electrical contractors and businesses." },
                { name: "Builder Websites", href: "/websites-for-builders/", desc: "Professional websites for builders and construction companies." },
                { name: "Roofer Websites", href: "/websites-for-roofers/", desc: "Professional roofing company websites with project galleries." },
                { name: "Pressure Washer Websites", href: "/websites-for-pressure-washers/", desc: "Websites for pressure washing and cleaning businesses." },
                { name: "Solar Panel Fitter Websites", href: "/websites-for-solar-panel-fitters/", desc: "Websites for solar installation and renewable energy businesses." }
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
          title="How We Help Your Plumbing Business"
          subtitle="Beyond the website â€” we keep your online presence running smoothly so you can focus on the job."
          benefits={[
            { title: "Managed WordPress Hosting", description: "Â£50/month covers hosting, daily backups, security monitoring, updates, and ongoing support. Your website takes care of itself while you're out on call-outs." },
            { title: "New Website Builds", description: "From Â£1,500. A fully custom website designed around your services, accreditations, and service areas. Mobile-first, fast, and optimised for Google." },
            { title: "Existing Site Refreshes", description: "Your current site not bringing in calls? We can redesign and re-optimise to generate enquiries again â€” often without starting from scratch." },
            { title: "Local SEO Optimisation", description: "Service area pages and Google Business integration so you show up when local customers search for plumbers in your area." }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "I'm always on the road â€” who manages the website for me?",
              answer: "We do. Our managed hosting service (Â£50/month) includes all updates, security, backups, and performance monitoring. You don't need to log in or touch anything â€” your site just works."
            },
            {
              question: "I've got an old website that doesn't bring in calls. Can you fix it?",
              answer: "Yes. We can refresh your existing site with modern design, better local SEO, and clear calls to action. We'll audit it first so you know exactly what needs to change."
            },
            {
              question: "How much does a plumber's website cost?",
              answer: "New websites start from Â£1,500. If you need a straightforward site with service pages and contact details, it may cost less. We quote fixed prices upfront with no surprises."
            },
            {
              question: "Will my Gas Safe registration and insurance details be on the site?",
              answer: "Yes. We make sure your credentials are clearly displayed â€” it's one of the first things customers look for. We also add trust signals like reviews and guarantees throughout the site."
            },
            {
              question: "I'm setting up my own plumbing business â€” should I get a website from the start?",
              answer: "Yes. A professional website helps you look established from day one, even while you build your client base. We can start with a focused site covering your services and area and expand as you grow."
            }


          ]}
        />

        <StatsBar
          stats={[
            { number: "15+", label: "Industries Served" },
            { number: "228+", label: "Sites Worked On" },
            { number: "10+", label: "Years Experience" },
            { number: "Â£50", label: "Per Month Managed Hosting" }


          ]}
        />

        <CTABanner
          title="Let's build your trade website"
          description="Get a free, no-obligation quote. We'll talk through your services, your target areas, and what your site needs to achieve â€” no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact/"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website/"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Electricians",
              description: "Specialist websites for electrical contractors and businesses.",
              href: "/websites-for-electricians/",
              tag: "Trade"
            },
            {
              title: "Websites for Builders",
              description: "Professional websites for builders and construction companies.",
              href: "/websites-for-builders/",
              tag: "Trade"
            },
            {
              title: "Websites for Roofers",
              description: "Professional roofing company websites.",
              href: "/websites-for-roofers/",
              tag: "Trade"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Full details of our managed hosting plans with daily backups and expert support.",
              href: "/managed-wordpress-hosting/",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Our full website design and development process â€” from first conversation to launch.",
              href: "/new-website/",
              tag: "Service"
            },
            {
              title: "Small Business Websites",
              description: "Affordable websites for small businesses and sole traders.",
              href: "/small-business-websites/",
              tag: "Service"
            },
            {
              title: "Existing Website Refreshes",
              description: "Modernise your existing site with improved UX, speed and mobile experience.",
              href: "/existing-website/",
              tag: "Website"
            },
            {
              title: "Website Support & Maintenance",
              description: "Ongoing updates, security, backups, and expert support for your WordPress site.",
              href: "/website-support/",
              tag: "Support"
            }          ]}
        />
      </main>
    </>
  );
}
