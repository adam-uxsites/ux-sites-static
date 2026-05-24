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
import { Check, Briefcase, LineChart, Target, Users } from "lucide-react";

const buyerNeeds = [
  {
    icon: Briefcase,
    title: "Services grouped by business need",
    description: "Decision-makers think in terms of problems, not service categories. We structure your services around the business outcomes clients care about  -  growth, efficiency, strategy, transformation."
  },
  {
    icon: LineChart,
    title: "Clear consulting framework",
    description: "Clients need to understand how you work before they commit. We present your methodology, process, and engagement model clearly so prospects can visualise working with you."
  },
  {
    icon: Target,
    title: "Proof and outcomes",
    description: "Business buyers are risk-averse. Case studies with measurable results, client testimonials, and relevant credentials give them the confidence to proceed."
  },
  {
    icon: Users,
    title: "Enquiry paths for qualified leads",
    description: "Not all enquiries are equal. We build clear routes for serious prospects to get in touch  -  with enough information available upfront that conversations start on the right foot."
  }
];

const serviceAreas = [
  "Strategy and growth advisory  -  market entry, scaling, strategic planning",
  "Operations and process improvement  -  efficiency, systems, transformation",
  "Financial advisory and business modelling  -  forecasting, restructuring, valuation",
  "People and organisational development  -  leadership, culture, change management",
  "Sales and revenue consulting  -  pipeline, pricing, go-to-market strategy",
  "Digital transformation  -  technology strategy, implementation, adoption"
];

const convertItems = [
  {
    title: "Authority that justifies your fees",
    description: "Premium-priced consultants need websites that visibly justify their rates. Credentials, thought leadership, client logos, and proven methodologies communicate value before the first conversation."
  },
  {
    title: "Clarity that reduces friction",
    description: "If a prospect can't quickly understand what you do and whether it's relevant, they leave. Clear service descriptions, defined outcomes, and transparent process overviews reduce bounce and increase qualified contact."
  },
  {
    title: "Confidence that starts the conversation",
    description: "The goal of a business consultant site isn't to close a sale  -  it's to start a conversation. Every page should build enough confidence that a prospect feels comfortable picking up the phone."
  }
];

export default function WebsitesForBusinessConsultants() {
  return (
    <>
      <SEO
        title="Websites for Business Consultants | UX Sites Shropshire"
        description="Business consultant websites that turn expertise into enquiries. Position yourself as an authority, showcase your methodology, and attract the right clients."
        url="https://uxsites.co.uk/websites-for-business-consultants"
        schema={[
          serviceSchema({
            name: "Websites for Business Consultants",
            description: "Business consultant websites that turn expertise into enquiries. Specialist pages for business advisors and advisory firms.",
            url: "https://uxsites.co.uk/websites-for-business-consultants",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Consultants", url: "https://uxsites.co.uk/websites-for-consultants" },
            { name: "Business Consultant Websites", url: "https://uxsites.co.uk/websites-for-business-consultants" },
          ]),
          faqSchema([
            {
              question: "What pages does a business consultant website need?",
              answer: "Core pages include a services overview, individual service pages for each consulting area, an about page with credentials and methodology, case studies with measurable outcomes, and a clear contact page. We also recommend a resources section for thought leadership content."
            },
            {
              question: "How do business consultant websites generate enquiries?",
              answer: "By building authority through case studies and credentials, providing clarity around services and process, and making it easy for serious prospects to start a conversation. The goal is to give decision-makers enough confidence to reach out."
            },
            {
              question: "Should I include pricing on my business consultant website?",
              answer: "It depends on your consulting model. Some consultants publish day rates or package prices to qualify leads upfront. Others prefer to discuss pricing after understanding the prospect's needs. We can build either approach."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Business consultant websites"
          headline="Business Consultant Websites That Turn Expertise Into Enquiries"
          subheadline="Business consultants need websites that make services, process, and outcomes crystal clear to decision-makers."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Authority Led", "Outcome Focused", "Clear Process", "Qualified Leads", "Trust Signals"]}
        />

        {/* What business consultancy buyers need to see */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What business consultancy buyers need to see</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Business decision-makers evaluate consultants differently. They need to understand expertise, approach, and fit before they'll invest time in a conversation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {buyerNeeds.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="p-8 bg-background border border-border rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Typical business consultancy service pages */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Typical business consultancy service pages</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We build service pages that speak directly to the business problem being solved  -  not just a list of what you offer. Each page explains the issue, your approach, and what success looks like.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {serviceAreas.map((item, i) => (
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

        {/* What helps business consultant sites convert */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What helps business consultant sites convert</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Business consultancy buyers make considered decisions. Your website needs to address the rational and emotional factors that drive their choice.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {convertItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-8 bg-background border border-border rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
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
              question: "What pages does a business consultant website need?",
              answer: "Core pages include a services overview, individual service pages for each consulting area, an about page with credentials and methodology, case studies with measurable outcomes, and a clear contact page. We also recommend a resources section for thought leadership content."
            },
            {
              question: "How do business consultant websites generate enquiries?",
              answer: "By building authority through case studies and credentials, providing clarity around services and process, and making it easy for serious prospects to start a conversation. The goal is to give decision-makers enough confidence to reach out."
            },
            {
              question: "Should I include pricing on my business consultant website?",
              answer: "It depends on your consulting model. Some consultants publish day rates or package prices to qualify leads upfront. Others prefer to discuss pricing after understanding the prospect's needs. We can build either approach."
            }


          ]}
        />

        <CTABanner
          title="Let's build your business consultant website"
          description="Get a free, no-obligation quote. We'll talk through your consulting specialism, what your site needs to achieve, and how we can help  -  no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website"
        />

        <RelatedPages
          title="Related Services"
          pages={[
            {
              title: "Websites for Consultants",
              description: "Specialist websites for consultants and professional services firms.",
              href: "/websites-for-consultants",
              tag: "Hub"
            },
            {
              title: "Websites for Legal Consultants",
              description: "Legal consultant websites built for clarity and trust.",
              href: "/websites-for-legal-consultants",
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
              description: "Full details of our website design and development process.",
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
            }          ]}
        />
      </main>
    </>
  );
}
