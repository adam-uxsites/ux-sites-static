import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { StatsBar } from "@/components/blocks/StatsBar";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Shield, Scale, FileText, Search, MessageCircle, Lock } from "lucide-react";

const trustItems = [
  {
    icon: Scale,
    title: "Authority and credentials front and centre",
    description: "Legal clients need to know who they're trusting. We position qualifications, accreditations, and professional memberships prominently so credibility is established immediately."
  },
  {
    icon: FileText,
    title: "Complex services explained in plain language",
    description: "Legal concepts can be intimidating. We structure information so visitors understand their situation, the service you offer, and the process involved  -  without needing a law degree."
  },
  {
    icon: Search,
    title: "Clear signposting to the right service",
    description: "Clients often don't know which area of law applies to them. We build intuitive navigation and self-assessment paths that guide visitors to the correct service page."
  },
  {
    icon: MessageCircle,
    title: "Low-anxiety enquiry routes",
    description: "Contacting a legal advisor can feel high-stakes. We design enquiry flows that feel approachable, with clear expectations about what happens next and no pressure to commit."
  }
];

const legalAreas = [
  "Commercial law and contract advisory",
  "Property and conveyancing services",
  "Employment law for employers and individuals",
  "Family law and mediation services",
  "Corporate law and business structuring",
  "Immigration law and visa advisory"
];

export default function WebsitesForLegalConsultants() {
  return (
    <>
      <SEO
        title="Websites for Legal Consultants | UX Sites Shropshire"
        description="Legal consultant websites built for clarity, credibility, and client acquisition. Specialist pages that showcase your expertise and attract qualified enquiries."
        url="https://uxsites.co.uk/websites-for-legal-consultants/"
        schema={[
          serviceSchema({
            name: "Websites for Legal Consultants",
            description: "Legal consultant websites built for clarity and trust. Specialist pages for legal consultants and professional services.",
            url: "https://uxsites.co.uk/websites-for-legal-consultants/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Websites for Consultants", url: "https://uxsites.co.uk/websites-for-consultants/" },
            { name: "Legal Consultant Websites", url: "https://uxsites.co.uk/websites-for-legal-consultants/" },
          ]),
          faqSchema([
            {
              question: "What pages does a legal consultant website need?",
              answer: "Core pages include an overview of your practice areas, detailed service pages for each area of law, an about page with qualifications and experience, a testimonials or case studies section, and clear contact routes. We also recommend a resources or FAQ section for common legal questions."
            },
            {
              question: "How do legal consultant websites build trust with visitors?",
              answer: "Trust is built through clear positioning of qualifications and experience, transparent explanations of services and processes, testimonials from past clients, professional design, and secure contact methods. Every element should reassure potential clients that they're in safe hands."
            },
            {
              question: "Can clients book initial consultations through the site?",
              answer: "Yes. We typically include a consultation booking flow  -  either through a contact form with availability details or integrated calendar scheduling  -  so potential clients can take the next step with minimal friction."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Legal consultant websites"
          headline="Legal Consultant Websites Built for Clarity and Trust"
          subheadline="Legal consultants need websites that make complex services easy to understand, demonstrate authority, and guide visitors toward the right enquiry route."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Work", href: "/work" }}
          chips={["Trust First", "Clear Services", "Approachable", "Secure", "Qualified Leads"]}
        />

        {/* Built around how legal clients choose advisors */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built around how legal clients choose advisors</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Legal clients behave differently to other buyers. They're often stressed, unsure of the process, and highly sensitive to trust signals. Every design decision accounts for this.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {trustItems.map((item, i) => {
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

        {/* Areas of law this page structure supports */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Areas of law this page structure supports</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Whether you specialise in one area of law or offer a broad range of services, we build page structures that make each specialism clear, distinct, and easy to navigate.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Each practice area gets its own dedicated page with tailored content, relevant credentials, and a clear path to enquiry  -  so clients always land on the right page for their needs.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {legalAreas.map((item, i) => (
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

        {/* Example projects */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Example Projects
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal websites we've built</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Recent projects for legal consultants and professional services firms.
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
                  <Scale size={48} className="text-primary/20" />
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
                  <FileText size={48} className="text-primary/20" />
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

        {/* Keep your legal website secure and reliable */}
        <section className="py-24 bg-background border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                  Managed Hosting
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">Keep your legal website secure and reliable</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Legal websites handle sensitive enquiries and need to project absolute trustworthiness. Our managed hosting ensures your site stays secure, fast, and online  -  with proactive monitoring and expert support included.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From daily backups to real-time security scanning, we handle everything technical so you can focus on your clients.
                </p>
                <Link href="/managed-wordpress-hosting" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  Learn about managed hosting
                </Link>
              </div>
              <div className="grid gap-4">
                {[
                  { icon: Shield, title: "SSL encryption", detail: "All traffic encrypted with HTTPS" },
                  { icon: Lock, title: "Security monitoring", detail: "Real-time threat detection and prevention" },
                  { icon: Search, title: "Daily backups", detail: "Off-site backups with one-click restore" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
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
              question: "What pages does a legal consultant website need?",
              answer: "Core pages include an overview of your practice areas, detailed service pages for each area of law, an about page with qualifications and experience, a testimonials or case studies section, and clear contact routes. We also recommend a resources or FAQ section for common legal questions."
            },
            {
              question: "How do legal consultant websites build trust with visitors?",
              answer: "Trust is built through clear positioning of qualifications and experience, transparent explanations of services and processes, testimonials from past clients, professional design, and secure contact methods. Every element should reassure potential clients that they're in safe hands."
            },
            {
              question: "Can clients book initial consultations through the site?",
              answer: "Yes. We typically include a consultation booking flow  -  either through a contact form with availability details or integrated calendar scheduling  -  so potential clients can take the next step with minimal friction."
            }


          ]}
        />

        <CTABanner
          title="Let's build your legal consultant website"
          description="Get a free, no-obligation quote. We'll talk through your practice areas, what your site needs to achieve, and how we can help  -  no jargon, no pressure."
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
              title: "Managed WordPress Hosting",
              description: "Keep your legal website secure and reliable with managed hosting.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "New Website Design & Build",
              description: "Full details of our website design and development process.",
              href: "/new-website",
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
