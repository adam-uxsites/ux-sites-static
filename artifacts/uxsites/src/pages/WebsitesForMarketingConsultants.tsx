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
import { Check, Target, Users, BarChart3 } from "lucide-react";

const includesItems = [
  "Clear offer pages that explain your methodology and approach",
  "Proof-led positioning with case studies and client results",
  "Service fit clarity so prospects self-qualify before contacting you",
  "Conversion-first contact flow with low-friction enquiry options"
];

const servicePages = [
  "Strategy & consulting page  -  your core methodology explained",
  "Channel-specific services  -  SEO, PPC, content, social, email",
  "Industry specialism pages  -  sector expertise with relevant proof",
  "Client results hub  -  case studies with measurable outcomes",
  "About page  -  team credentials, philosophy, and process",
  "Resources  -  guides, tools, and thought leadership"
];

const convertItems = [
  {
    icon: Target,
    title: "Clear positioning that filters for fit",
    description: "Prospects need to know immediately whether you're right for them. Explicit positioning reduces unqualified enquiries and attracts clients who understand your value."
  },
  {
    icon: Users,
    title: "Evidence that builds conviction",
    description: "Marketing buyers need to justify their choice. Case studies with real numbers, client testimonials, and proven methodologies give them the confidence to proceed."
  },
  {
    icon: BarChart3,
    title: "Low-friction conversion paths",
    description: "Senior marketers value their time. Clear next steps, straightforward contact forms, and the option to book calls directly reduce the friction between interest and action."
  }
];

export default function WebsitesForMarketingConsultants() {
  return (
    <>
      <SEO
        title="Websites for Marketing Consultants | UX Sites Shropshire"
        description="Build authority and attract qualified enquiries with a website positioned for your expertise. Marketing consultant websites designed to showcase results."
        url="https://uxsites.co.uk/websites-for-marketing-consultants/"
        schema={[
          serviceSchema({
            name: "Websites for Marketing Consultants",
            description: "Marketing consultant websites focused on positioning and pipeline. Build authority and attract qualified enquiries.",
            url: "https://uxsites.co.uk/websites-for-marketing-consultants/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Consultants", url: "https://uxsites.co.uk/websites-for-consultants/" },
            { name: "Marketing Consultant Websites", url: "https://uxsites.co.uk/websites-for-marketing-consultants/" },
          ]),
          faqSchema([
            {
              question: "What makes a marketing consultant website different?",
              answer: "Marketing consultants need websites that demonstrate their own marketing capability. The site itself must prove they understand lead generation, positioning, and conversion  -  not just describe it. Every page should function as a case study for their approach."
            },
            {
              question: "What pages does a marketing consultant typically need?",
              answer: "Core pages include a strategy overview, channel-specific service pages, industry specialism pages, a client results hub with case studies, an about page with credentials, and a resources section for thought leadership."
            },
            {
              question: "How do you make a marketing consultant site generate enquiries?",
              answer: "We focus on clear positioning that filters for fit, evidence that builds conviction, and low-friction conversion paths. Every page guides visitors toward a relevant next step without being pushy."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Marketing consultant websites"
          headline="Marketing Consultant Websites Focused on Positioning and Pipeline"
          subheadline="Marketing consultants need websites that present strategic capability clearly, demonstrate proof, and attract the right kind of enquiry."
          primaryCta={{ text: "Start Your Project", href: "/contact/" }}
          secondaryCta={{ text: "See Our Work", href: "/work/" }}
          chips={["Strategic Positioning", "Proof Led", "Qualified Leads", "Conversion Focused"]}
        />

        {/* What strong marketing consultant websites include */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What strong marketing consultant websites include</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Marketing consultants need sites that prove their expertise through structure, content, and user experience  -  not just by saying they're good at marketing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {includesItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-primary-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical marketing consultancy service pages */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Typical marketing consultancy service pages</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We structure marketing consultant sites around the services that generate the most qualified enquiries, with clear progression from interest to action.
                </p>
                <Link href="/new-website/" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {servicePages.map((item, i) => (
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
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What turns traffic into qualified enquiries */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What turns traffic into qualified enquiries</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Traffic is meaningless without conversion. Marketing consultant websites need deliberate design decisions that turn visitors into qualified leads.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {convertItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-8 bg-background border border-border rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <TestimonialBlock
          quote="Adam did a fantastic job upgrading an existing site  -  I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Small Business Owner"
        />

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
              question: "What makes a marketing consultant website different?",
              answer: "Marketing consultants need websites that demonstrate their own marketing capability. The site itself must prove they understand lead generation, positioning, and conversion  -  not just describe it. Every page should function as a case study for their approach."
            },
            {
              question: "What pages does a marketing consultant typically need?",
              answer: "Core pages include a strategy overview, channel-specific service pages, industry specialism pages, a client results hub with case studies, an about page with credentials, and a resources section for thought leadership."
            },
            {
              question: "How do you make a marketing consultant site generate enquiries?",
              answer: "We focus on clear positioning that filters for fit, evidence that builds conviction, and low-friction conversion paths. Every page guides visitors toward a relevant next step without being pushy."
            }


          ]}
        />

        <CTABanner
          title="Let's build your marketing consultant website"
          description="Get a free, no-obligation quote. We'll talk through your specialism, what your site needs to achieve, and how we can help  -  no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact/"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website/"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Consultants",
              description: "Specialist websites for consultants and professional services firms.",
              href: "/websites-for-consultants/",
              tag: "Hub"
            },
            {
              title: "Websites for Business Consultants",
              description: "Business consultant websites that turn expertise into enquiries.",
              href: "/websites-for-business-consultants/",
              tag: "Service"
            },
            {
              title: "Websites for Legal Consultants",
              description: "Legal consultant websites built for clarity and trust.",
              href: "/websites-for-legal-consultants/",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Full details of our website design and development process.",
              href: "/new-website/",
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
