import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { BarChart3, Bug, Wrench, Target, CheckCircle2, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "GA4 Setup & Configuration",
    description: "Full Google Analytics 4 property setup — including events, conversions, user properties, and data streams configured correctly for your site."
  },
  {
    icon: Bug,
    title: "GA4 Troubleshooting & Fixes",
    description: "Double-counting? Missing data? Wrong attribution? We audit your GA4 setup and fix the issues so your data is accurate and trustworthy."
  },
  {
    icon: Wrench,
    title: "Google Tag Manager Setup",
    description: "GTM container creation with properly structured tags, triggers, and variables — clean enough that you can understand what's firing and why."
  },
  {
    icon: Target,
    title: "Conversion Tracking Audit",
    description: "Full audit of your existing conversion tracking — Google Ads, GA4 events, form tracking, phone call tracking — identifying gaps and fixing misconfigurations."
  },
  {
    icon: CheckCircle2,
    title: "Goal & Event Configuration",
    description: "Form submissions, button clicks, phone calls, scroll depth, video engagement — structured as meaningful events so you know what's actually driving results."
  },
  {
    icon: TrendingUp,
    title: "Reporting Dashboard Setup",
    description: "Custom GA4 dashboards and Looker Studio reports that show you the metrics that matter — not vanity numbers, but the data you can act on."
  }
];

const signs = [
  "Your GA4 numbers don't match what you expect from your business activity",
  "Google Ads shows clicks but you can't see which ones turned into leads",
  "You're seeing 'not set' or '(direct)' traffic dominating your reports",
  "Your bounce rate is suspiciously high or low",
  "Your previous analytics stopped working when Universal Analytics was shut down",
  "You've had multiple people 'set up tracking' and none of them agree on the numbers"
];

export default function GoogleAnalyticsSetup() {
  return (
    <>
      <SEO
        title="Google Analytics 4 Setup & Troubleshooting | UX Sites"
        description="GA4 setup, troubleshooting, and support from a Google UX Certified analyst. Proper tracking configuration, accurate data, and reports you can actually use."
        url="https://uxsites.co.uk/google-analytics-setup/"
        schema={[
          serviceSchema({
            name: "Google Analytics 4 Setup & Troubleshooting",
            description: "Professional GA4 setup, troubleshooting, and support — including Google Tag Manager configuration, conversion tracking, and custom reporting dashboards.",
            url: "https://uxsites.co.uk/google-analytics-setup/",
            category: "Analytics",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Google Analytics 4 Setup", url: "https://uxsites.co.uk/google-analytics-setup/" },
          ]),
          faqSchema([
            { question: "How is this different from the GA4 setup my web developer already did?", answer: "Many developers install GA4 by copy-pasting a tracking code or using a plugin — which gives you basic pageview data but nothing useful. We configure events, conversions, and goals properly so you can actually see which channels and actions drive results." },
            { question: "Can you fix GA4 if it's been set up wrong?", answer: "Yes — this is one of the most common things we deal with. We audit your existing setup, identify what's broken or missing, and fix it. We'll also explain what was wrong and how to avoid it happening again." },
            { question: "Do I need Google Tag Manager as well?", answer: "Not necessarily, but for most businesses we recommend it. GTM gives you more control over tracking without editing your theme code. We'll advise on the best setup for your specific situation." },
            { question: "How long does a GA4 setup take?", answer: "A standard setup with basic events and conversions takes 1-2 days. More complex setups — multiple domains, custom events, integration with Google Ads — may take longer. We'll give you a clear timeline." },
            { question: "Will I understand the reports afterwards?", answer: "Yes. We set up a dashboard that shows your key metrics clearly, and we explain what each number means and why it matters. You don't need to be an analytics expert to understand your data." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Analytics that actually tell you what's working"
          headline="Google Analytics 4 Setup & Troubleshooting"
          subheadline="GA4 is powerful, but only if it's set up properly. Most businesses have tracking that's broken, incomplete, or configured by someone who didn't understand what they were doing. We fix that."
          primaryCta={{ text: "Get a Free GA4 Review", href: "/free-ga4-review/" }}
          secondaryCta={{ text: "About Our Analytics Experience", href: "/about/" }}
          chips={["GA4 Setup", "GTM Configuration", "Conversion Tracking", "Data Audits", "Reporting Dashboards"]}
        />

        {/* What we offer */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="text-center mb-14">
              <h2 className="heading-section mb-4">GA4 Services We Offer</h2>
              <p className="subhead-section">
                From initial setup to troubleshooting an existing configuration — we handle the full range of GA4 work.
              </p>
            </div>
            <div className="grid-cards-3">
              {services.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="card-base card-hover p-7"
                  >
                    <div className="card-icon-box mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="heading-card mb-2">{item.title}</h3>
                    <p className="body-card">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Signs you need help */}
        <section className="section-padding section-alt">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">Signs Your GA4 Needs Professional Attention</h2>
              <p className="subhead-section">
                If any of these sound familiar, your analytics data isn't trustworthy — and that means your decisions aren't either.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {signs.map((item, i) => (
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

        {/* Why this matters */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="grid-split">
              <div>
                <h2 className="heading-section mb-6">Why Proper Analytics Setup Matters</h2>
                <p className="body-lg mb-6">
                  If your analytics data is wrong, every decision you make based on it is wrong too. You're allocating budget to channels that might be underperforming, or missing opportunities because you can't see what's working.
                </p>
                <p className="body-lg mb-6">
                  We bring 10+ years of analytics experience — including hands-on GA4 work, Google Tag Manager configuration, and conversion tracking across dozens of business types. We know what good tracking looks like because we've fixed a lot of bad setups.
                </p>
                <p className="body-lg mb-8">
                  Every setup we do includes testing and verification. You'll know your data is accurate because we prove it.
                </p>
              </div>
              <div className="card-base p-7">
                <h3 className="heading-card mb-4">Our Analytics Approach</h3>
                <ul className="space-y-3">
                  {[
                    "Understand what business decisions the data needs to inform",
                    "Audit current setup for gaps, errors, and misconfigurations",
                    "Implement clean tracking with meaningful event structures",
                    "Verify everything works — test conversions, check data flow",
                    "Set up a dashboard you can actually understand and use",
                    "Explain what everything means — no jargon, no mysteries"
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
          title="What You Get When We Set Up Your Analytics"
          benefits={[
            { title: "Accurate Data", description: "No double-counting, no missing events, no mysterious 'direct' traffic — just reliable numbers you can trust." },
            { title: "Meaningful Conversions", description: "Form submissions, phone calls, and key actions tracked properly so you know what's driving results." },
            { title: "Clean GTM Setup", description: "If we use Tag Manager, it's structured properly — you'll understand what's firing and why." },
            { title: "Custom Dashboards", description: "A Looker Studio or GA4 dashboard that shows the metrics that actually matter to your business." },
            { title: "Google Ads Integration", description: "Conversion tracking connected to Google Ads so you can optimise campaigns based on real data." },
            { title: "Ongoing Support Available", description: "Need adjustments later? Our support plans cover analytics changes as part of your monthly development time." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "How is this different from the GA4 setup my web developer already did?",
              answer: "Many developers install GA4 by copy-pasting a tracking code or using a plugin — which gives you basic pageview data but nothing useful. We configure events, conversions, and goals properly so you can actually see which channels and actions drive results."
            },
            {
              question: "Can you fix GA4 if it's been set up wrong?",
              answer: "Yes — this is one of the most common things we deal with. We audit your existing setup, identify what's broken or missing, and fix it. We'll also explain what was wrong and how to avoid it happening again."
            },
            {
              question: "Do I need Google Tag Manager as well?",
              answer: "Not necessarily, but for most businesses we recommend it. GTM gives you more control over tracking without editing your theme code. We'll advise on the best setup for your specific situation."
            },
            {
              question: "Will I understand the reports afterwards?",
              answer: "Yes. We set up a dashboard that shows your key metrics clearly, and we explain what each number means and why it matters. You don't need to be an analytics expert to understand your data."
            },
            {
              question: "How do you verify the tracking is working?",
              answer: "We use GA4 DebugView, GTM preview mode, and real-time reporting to verify every event fires correctly before we finish. We also provide documentation of what's been set up so you can verify it yourself."
            }
          ]}
        />

        <CTABanner
          title="Not sure if your analytics is set up right?"
          description="Get in touch and we'll do a free initial review of your GA4 setup. We'll tell you what's working, what isn't, and what needs fixing."
          buttonText="Get a Free GA4 Review"
          buttonHref="/free-ga4-review/"
        />

        <RelatedPages
          pages={[
            { title: "Conversion Tracking Setup", href: "/conversion-tracking-setup/", description: "Proper conversion tracking for Google Ads, forms, and phone calls" },
            { title: "Website UX Audit", href: "/website-ux-audit/", description: "Data-driven UX analysis to improve your site's performance" },
            { title: "Managed WordPress Hosting", href: "/managed-wordpress-hosting/", description: "Everything included in our managed hosting plans" },
            { title: "WordPress Care Plan", href: "/wordpress-care-plan/", description: "Ongoing development, updates & priority support" },
            { title: "New Website", href: "/new-website/", description: "Custom WordPress websites built for your business" },
            { title: "About UX Sites", href: "/about/", description: "10+ years analytics & UX experience" }
          ]}
        />
      </main>
    </>
  );
}
