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
import { Check, ArrowRight } from "lucide-react";

const consultantCards = [
  {
    title: "Authority first, design second",
    description: "Consultants win on expertise, not aesthetics. We build sites where credibility, credentials, and clear thinking lead  -  supported by design that reinforces trust without getting in the way."
  },
  {
    title: "Complex services made easy to understand",
    description: "Consultancy offerings can be nuanced. We structure your services so potential clients quickly grasp what you do, who it's for, and what outcome they can expect."
  },
  {
    title: "Decision support for higher-value clients",
    description: "Senior buyers need evidence, not claims. We build case studies, outcome data, and comparison tools that help decision-makers justify their choice internally."
  },
  {
    title: "Lead quality over traffic volume",
    description: "Consultant sites don't need thousands of visitors  -  they need the right visitors. We optimise for qualified enquiries that match your ideal client profile."
  }
];

const includesItems = [
  "Clear service pages for each specialism",
  "Strong About page with credentials and experience",
  "Case studies with measurable outcomes",
  "Testimonials and trust markers throughout",
  "Simple enquiry flows with clear CTAs",
  "Resource pages and FAQs to support SEO"
];

const specialisms = [
  { name: "Legal Consultant Websites", href: "/websites-for-legal-consultants" },
  { name: "Business Consultant Websites", href: "/websites-for-business-consultants" },
  { name: "Marketing Consultant Websites", href: "/websites-for-marketing-consultants" }
];

export default function WebsitesForConsultants() {
  return (
    <>
      <SEO
        title="Websites for Consultants | UX Sites Shropshire"
        description="Specialist websites for consultants and professional services firms that turn expertise into enquiries. Build trust and attract better clients across the UK."
        url="https://uxsites.co.uk/websites-for-consultants/"
        schema={[
          serviceSchema({
            name: "Websites for Consultants",
            description: "Specialist websites for consultants and professional services firms. Build trust and generate better enquiries with a site built for your expertise.",
            url: "https://uxsites.co.uk/websites-for-consultants/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Consultants", url: "https://uxsites.co.uk/websites-for-consultants/" },
          ]),
          faqSchema([
            {
              question: "How is a consultant website different from a standard business site?",
              answer: "Consultant sites need to demonstrate expertise and build trust quickly. The focus is on credentials, case studies, and clear service explanations rather than broad marketing. Every element should support a senior decision-maker's evaluation process."
            },
            {
              question: "How long does a consultant website typically take to build?",
              answer: "Most consultant sites (6-12 pages) take 4-8 weeks from briefing to launch. The timeline depends on how much content needs to be developed  -  case studies and service descriptions often need more preparation."
            },
            {
              question: "Can I manage the site myself after launch?",
              answer: "Yes. We build on WordPress so you can update content, add case studies, and publish resources yourself. We include a training session and ongoing support options if needed."
            },
            {
              question: "Do you help with content and case study writing?",
              answer: "We structure and present your existing content effectively. If you need help writing service pages or case studies, we can recommend copywriters or discuss content support as part of the project scope."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Consultant websites that convert"
          headline="Websites for consultants and professional services firms"
          subheadline="If you are a consultant, your website should do more than look good. It should explain your expertise clearly, position your offer, and help potential clients contact you with confidence."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Authority Focused", "Trust First", "Lead Quality", "Clear Messaging", "Case Studies"]}
        />

        {/* Why consultants need a different type of website */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why consultants need a different type of website</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A template site designed for product businesses won't do justice to your expertise. Consultant websites need to work differently  -  because your clients make decisions differently.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {consultantCards.map((card, i) => (
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

        {/* What a consultant website typically includes */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a consultant website typically includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Every consultant we work with has different expertise, but successful consultant sites share a common structure.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We build each page around your specific services and audience, but the foundations remain consistent across every project.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {includesItems.map((item, i) => (
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

        {/* Example projects */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Example Projects
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultant websites we've built</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Recent projects for professional services and consultancy firms.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-amber-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#40ED8840 1px, transparent 1px), linear-gradient(90deg, #40ED8840 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                  <span className="text-4xl font-bold text-primary/20">KL</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Kingman Law</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">Professional legal consultancy website with clear service areas, structured case handling pages, and a streamlined enquiry process designed for client confidence.</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium px-2.5 py-1 rounded-full border bg-primary/10 text-primary border-primary/20">New Build</span>
                    <span className="text-sm text-muted-foreground">Legal</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-emerald-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#40ED8840 1px, transparent 1px), linear-gradient(90deg, #40ED8840 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                  <span className="text-4xl font-bold text-primary/20">CF</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Conveyancing Fairy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">Legal services website designed for clarity, with service breakdowns, transparent pricing, and an enquiry flow that makes it easy for clients to take the next step.</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium px-2.5 py-1 rounded-full border bg-primary/10 text-primary border-primary/20">New Build</span>
                    <span className="text-sm text-muted-foreground">Legal Services</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TestimonialBlock
          quote="Adam did a fantastic job upgrading an existing site  -  I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Small Business Owner"
        />

        {/* Consultant Websites by Specialism */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultant Websites by Specialism</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Different consulting disciplines need different page structures, messaging, and conversion strategies. We build specialist sites for each area.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {specialisms.map((item, i) => (
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
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      Specialist page structures and messaging tailored to {item.name.toLowerCase().replace(" websites", "")}.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <StatsBar
          stats={[
            { number: "15+", label: "Industries Served" },
            { number: "228+", label: "Sites Worked On" },
            { number: "10+", label: "Years Experience" },
            { number: "47,479", label: "Emails Received" }


          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "How is a consultant website different from a standard business site?",
              answer: "Consultant sites need to demonstrate expertise and build trust quickly. The focus is on credentials, case studies, and clear service explanations rather than broad marketing. Every element should support a senior decision-maker's evaluation process."
            },
            {
              question: "How long does a consultant website typically take to build?",
              answer: "Most consultant sites (6-12 pages) take 4-8 weeks from briefing to launch. The timeline depends on how much content needs to be developed  -  case studies and service descriptions often need more preparation."
            },
            {
              question: "Can I manage the site myself after launch?",
              answer: "Yes. We build on WordPress so you can update content, add case studies, and publish resources yourself. We include a training session and ongoing support options if needed."
            },
            {
              question: "Do you help with content and case study writing?",
              answer: "We structure and present your existing content effectively. If you need help writing service pages or case studies, we can recommend copywriters or discuss content support as part of the project scope."
            }


          ]}
        />

        <CTABanner
          title="Let's build your consultant website"
          description="Get a free, no-obligation quote. We'll talk through your specialism, what your site needs to achieve, and how we can help  -  no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Legal Consultants",
              description: "Specialist websites for legal consultants and professional services firms.",
              href: "/websites-for-legal-consultants",
              tag: "Service"
            },
            {
              title: "Websites for Business Consultants",
              description: "Business consultant websites that turn expertise into enquiries.",
              href: "/websites-for-business-consultants",
              tag: "Service"
            },
            {
              title: "Websites for Marketing Consultants",
              description: "Marketing consultant websites focused on positioning and pipeline.",
              href: "/websites-for-marketing-consultants",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Full details of our website design and development process  -  from first conversation to launch.",
              href: "/new-website",
              tag: "Service"
            },
            {
              title: "Work  -  Recent Projects",
              description: "See examples of websites we've built for consultants and professional services.",
              href: "/work",
              tag: "Portfolio"
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
            }
          ]}
        />
      </main>
    </>
  );
}
