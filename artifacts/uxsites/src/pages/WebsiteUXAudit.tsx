import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Search, MousePointer, FileText, BarChart3, Lightbulb, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const auditPhases = [
  {
    number: "01",
    icon: BarChart3,
    title: "Data Analysis",
    description: "We review your analytics data â€” user flows, drop-off points, page performance, device breakdowns, and conversion paths â€” to identify where visitors are getting stuck or leaving."
  },
  {
    number: "02",
    icon: MousePointer,
    title: "Behaviour Analysis",
    description: "Using session recordings, heatmaps, and click tracking, we see exactly how users interact with your site. Where do they click? Where do they hesitate? Where do they leave?"
  },
  {
    number: "03",
    icon: FileText,
    title: "Heuristic Review",
    description: "A systematic evaluation of your site against UX best practices â€” navigation clarity, information architecture, form design, mobile usability, accessibility, and conversion path logic."
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Recommendations Report",
    description: "A clear, prioritised report of issues found and specific recommendations â€” ranked by impact and effort. You'll know exactly what to fix and in what order."
  }
];

const findings = [
  "Users aren't completing your contact forms â€” and you don't know why",
  "Visitors leave your site within seconds (high bounce rate on key pages)",
  "Mobile users behave differently from desktop but your site treats them the same",
  "Your navigation structure confuses people â€” they can't find what they need",
  "Your conversion funnel has a clear drop-off point you haven't identified",
  "Page load speed is hurting user experience and your search rankings"
];

export default function WebsiteUXAudit() {
  return (
    <>
      <SEO
        title="Website UX Audit & Analysis | UX Sites â€” Improve Conversions"
        description="Data-driven UX audit for your website â€” identify friction points, understand user behaviour, and get a prioritised action plan to improve conversions and user experience."
        url="https://uxsites.co.uk/website-ux-audit/"
        schema={[
          serviceSchema({
            name: "Website UX Audit",
            description: "Professional website UX audit and analysis â€” combining analytics data, user behaviour tracking, and usability expertise to identify friction points and improve conversion rates.",
            url: "https://uxsites.co.uk/website-ux-audit/",
            category: "UX",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Website UX Audit", url: "https://uxsites.co.uk/website-ux-audit/" },
          ]),
          faqSchema([
            { question: "How long does a UX audit take?", answer: "Most audits are completed within 1-2 weeks, depending on the size and complexity of the site. You'll receive a full report with findings and recommendations." },
            { question: "Do I need analytics already installed?", answer: "Not necessarily. If you have GA4 and heatmap data available, we use it. If not, we can install tracking first as part of the audit process." },
            { question: "What's included in the recommendations report?", answer: "Every issue found is documented with evidence, impact assessment, and a specific recommendation. Recommendations are prioritised by expected impact and implementation effort so you know what to tackle first." },
            { question: "Can you implement the changes you recommend?", answer: "Yes. Through our managed hosting, care plans, or separate development work, we can implement the UX improvements we identify. Many clients prefer this as it ensures recommendations are actioned properly." },
            { question: "Is this only for WordPress sites?", answer: "We specialise in WordPress, but the UX audit itself is platform-agnostic. We review the user experience regardless of what your site is built on." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="It's in the name â€” UX"
          headline="Website UX Audit â€” Find Out Why Visitors Aren't Converting"
          subheadline="Most websites lose 70-90% of visitors without a trace. A UX audit reveals exactly where people get stuck, what confuses them, and what to fix â€” prioritised by impact."
          primaryCta={{ text: "Book a UX Audit", href: "/contact/" }}
          secondaryCta={{ text: "How We Analyse UX", href: "#process" }}
          chips={["Data Analysis", "Heatmaps & Recordings", "Conversion Review", "Prioritised Report", "Actionable Fixes"]}
        />

        {/* What we analyse */}
        <section className="section-padding-lg bg-background" id="process">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">How We Audit Your Website's UX</h2>
              <p className="subhead-section">
                A combination of data analysis, user behaviour research, and usability expertise â€” giving you a complete picture of what's working and what isn't.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {auditPhases.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card-base card-hover p-7 flex gap-5"
                  >
                    <div className="hidden md:flex flex-col items-center">
                      <div className="card-icon-box">
                        <Icon size={20} className="text-primary" />
                      </div>
                      {i < auditPhases.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-3" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-muted-foreground/50 tracking-wider">{phase.number}</span>
                        <h3 className="heading-card">{phase.title}</h3>
                      </div>
                      <p className="body-card">{phase.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Signs */}
        <section className="section-padding section-alt">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">Does Your Website Need a UX Audit?</h2>
              <p className="subhead-section">
                If any of these sound familiar, your user experience is costing you enquiries and sales.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {findings.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why UX matters */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="grid-split">
              <div>
                <h2 className="heading-section mb-6">Why UX Analysis is in Our Name</h2>
                <p className="body-lg mb-6">
                  Most web designers build websites based on what looks good. We build based on what works â€” because years of analysing user behaviour data has shown us that good looking doesn't always mean effective.
                </p>
                <p className="body-lg mb-6">
                  Before founding UX Sites, I worked as a UX Analyst â€” running user testing sessions, analysing behaviour data, optimising conversion funnels, and implementing tracking to measure real outcomes. That experience shapes every website we build and every recommendation we make.
                </p>
                <p className="body-lg mb-8">
                  A UX audit applies that same analytical approach to your existing site â€” identifying the friction points that are losing you visitors, and giving you a clear, prioritised plan to fix them.
                </p>
                <Link
                  href="/about/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  More about our UX background <ArrowRight size={15} className="ml-2" />
                </Link>
              </div>
              <div className="card-base p-7">
                <h3 className="heading-card mb-4">What You'll Get from a UX Audit</h3>
                <ul className="space-y-3">
                  {[
                    "Clear understanding of how users actually behave on your site",
                    "Specific, evidence-backed issues â€” not vague 'improve the UX' advice",
                    "Prioritised recommendations ranked by expected impact",
                    "Heatmap and session recording insights (where available)",
                    "Analytics data interpreted in context of user behaviour",
                    "A roadmap for improvements â€” whether you do them or we do"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="What a UX Audit Unlocks for Your Business"
          benefits={[
            { title: "Higher Conversion Rates", description: "Fix the friction points that are losing you customers. Small UX improvements often deliver significant conversion uplifts." },
            { title: "Better ROI from Existing Traffic", description: "Before spending more on advertising, make sure your current visitors can convert. A UX audit often pays for itself." },
            { title: "Customer Behaviour Insights", description: "Understand what your visitors actually want â€” not what you assume they want. Data removes the guesswork." },
            { title: "Prioritised Action Plan", description: "Not a vague report â€” you'll know exactly what to fix and in what order, ranked by impact and effort." },
            { title: "Mobile Experience Review", description: "If your mobile users are struggling, you're losing the majority of your traffic. We identify mobile-specific issues." },
            { title: "Accessibility Check", description: "Basic accessibility review included â€” ensuring your site works for all users, not just some." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "I already have Google Analytics â€” doesn't that tell me what's happening?",
              answer: "GA4 tells you what users do (which pages they visit, where they drop off) but not why. A UX audit combines analytics data with behaviour research â€” heatmaps, session recordings, and usability testing â€” to explain the reasons behind the numbers."
            },
            {
              question: "How long does a UX audit take?",
              answer: "Most audits take 1-2 weeks depending on site complexity. You'll receive a full report with findings, evidence, and prioritised recommendations."
            },
            {
              question: "Do I need to give you access to my site?",
              answer: "We need access to your Google Analytics, and potentially your WordPress admin if we're installing heatmap tracking. Everything is read-only unless we agree on implementation work."
            },
            {
              question: "Can you implement the changes you recommend?",
              answer: "Yes. Through our care plans, hosting, or separate development work, we can implement the UX improvements. Many clients prefer this as it ensures recommendations are actioned correctly."
            },
            {
              question: "How is this different from what you do when building a new website?",
              answer: "For new sites, we apply UX principles during the design and build process. For existing sites, we audit what's there â€” identifying specific problems and recommending fixes. Both approaches are informed by the same UX analysis background."
            }
          ]}
        />

        <CTABanner
          title="Ready to find out what's costing you conversions?"
          description="Get in touch and we'll discuss a UX audit for your website. Free initial consultation â€” we'll tell you if an audit is the right move."
          buttonText="Book a Free Consultation"
          buttonHref="/contact/"
        />

        <RelatedPages
          pages={[
            { title: "Google Analytics 4 Setup", href: "/google-analytics-setup/", description: "GA4 setup, troubleshooting, and custom reporting" },
            { title: "Conversion Tracking Setup", href: "/conversion-tracking-setup/", description: "Proper conversion tracking to measure what matters" },
            { title: "Managed WordPress Hosting", href: "/managed-wordpress-hosting/", description: "Everything included in our managed hosting plans" },
            { title: "New Website", href: "/new-website/", description: "Custom WordPress websites built with UX principles" },
            { title: "Existing Website Refreshes", href: "/existing-website/", description: "Modernise your existing site for better performance" },
            { title: "About UX Sites", href: "/about/", description: "10+ years analytics & UX experience" }
          ]}
        />
      </main>
    </>
  );
}
