import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Target, Smartphone, MousePointerClick, PhoneCall, ShoppingCart, DollarSign, CheckCircle2, AlertTriangle } from "lucide-react";

const trackingMethods = [
  {
    icon: MousePointerClick,
    title: "Form Submission Tracking",
    description: "Know exactly which forms generate leads and where they come from — contact forms, quote requests, newsletter signups, and booking forms."
  },
  {
    icon: PhoneCall,
    title: "Phone Call Tracking",
    description: "Track calls from your website — clicks to call, click-to-call buttons, and call extensions — so you know which traffic generates phone enquiries."
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Tracking",
    description: "Full purchase tracking, add-to-cart events, product views, and revenue attribution — essential data for any WooCommerce or Shopify setup."
  },
  {
    icon: Smartphone,
    title: "Button Click & Engagement",
    description: "Track clicks on key buttons — Get a Quote, Book Now, Download — and engagement events like scroll depth, video plays, and PDF downloads."
  }
];

const issues = [
  "You're running Google Ads but can't see which clicks turn into leads or sales",
  "Your GA4 conversions don't match what you know is coming through",
  "You're guessing which channels (Google, Facebook, email, referrals) actually drive business",
  "You have no idea how many phone calls come from your website",
  "Your tracking has been set up by multiple people and you don't trust the numbers",
  "You're spending money on ads but can't calculate your cost per lead or ROAS"
];

export default function ConversionTrackingSetup() {
  return (
    <>
      <SEO
        title="Google Ads Conversion Tracking Setup | UX Sites"
        description="Professional conversion tracking setup for Google Ads, GA4, and your website. Form tracking, phone call tracking, and ecommerce — so you know what's actually working."
        url="https://uxsites.co.uk/conversion-tracking-setup"
        schema={[
          serviceSchema({
            name: "Google Ads Conversion Tracking Setup",
            description: "Professional conversion tracking setup for Google Ads and GA4 — form submissions, phone calls, ecommerce purchases, button clicks, and custom events configured and verified.",
            url: "https://uxsites.co.uk/conversion-tracking-setup",
            category: "Analytics",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Conversion Tracking Setup", url: "https://uxsites.co.uk/conversion-tracking-setup" },
          ]),
          faqSchema([
            { question: "How long does conversion tracking setup take?", answer: "Most setups — form tracking, phone call tracking, and basic Google Ads conversion import — take 1-2 days. Ecommerce tracking or complex setups may take longer." },
            { question: "Do I need Google Analytics 4 first?", answer: "You need GA4 installed (we can do that too). We set up tracking within GA4 and import the conversions into Google Ads so you can optimise your campaigns." },
            { question: "Can you track offline conversions too?", answer: "In most cases, yes. If you can capture the data (lead source, date, value), we can import it back into Google Ads as offline conversions." },
            { question: "What if I'm not using Google Ads?", answer: "Conversion tracking is still valuable even without ads — it tells you which marketing channels and user actions drive results. We can set it up in GA4 regardless of ad spend." },
            { question: "How do I know the tracking is working?", answer: "We test every conversion action — submitting a test form, clicking tracked buttons, triggering events — and verify the data appears correctly in GA4 and Google Ads." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Know exactly where your leads come from"
          headline="Conversion Tracking Setup — Stop Guessing, Start Knowing"
          subheadline="If you can't see which clicks turn into customers, you're flying blind. We set up conversion tracking that actually works — form submissions, phone calls, purchases, and any action that matters to your business."
          primaryCta={{ text: "Audit My Current Tracking", href: "/contact" }}
          secondaryCta={{ text: "GA4 Setup Services", href: "/google-analytics-setup" }}
          chips={["Form Tracking", "Phone Call Tracking", "Google Ads Integration", "Ecommerce", "GA4 Events"]}
        />

        {/* Signs section */}
        <section className="section-padding section-alt">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">Does This Sound Familiar?</h2>
              <p className="subhead-section">
                If any of these ring true, your conversion tracking needs professional attention.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {issues.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl"
                >
                  <AlertTriangle size={16} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracking methods */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="section-header">
              <h2 className="heading-section mb-4">What We Can Track</h2>
              <p className="subhead-section">
                Almost any meaningful user action can be tracked. Here are the most common ones.
              </p>
            </div>
            <div className="grid-cards">
              {trackingMethods.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="card-base card-hover flex gap-5 p-7"
                  >
                    <div className="card-icon-box">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-card mb-2">{item.title}</h3>
                      <p className="body-card">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding-lg bg-background">
          <div className="section-wrap">
            <div className="grid-split">
              <div>
                <h2 className="heading-section mb-6">How Conversion Tracking Helps Your Business</h2>
                <p className="body-lg mb-6">
                  Without conversion tracking, you're making marketing decisions based on incomplete information. You might think Google Ads is working because you're getting clicks — but if those clicks don't turn into leads, you're wasting money.
                </p>
                <p className="body-lg mb-6">
                  With proper tracking, you know exactly which channels, campaigns, and keywords drive actual business results. You can calculate your true cost per lead, identify what's working, and scale confidently.
                </p>
                <p className="body-lg mb-8">
                  We bring 10+ years of experience debugging tracking setups and configuring conversion actions across dozens of industries. We know what good looks like because we've fixed a lot of bad.
                </p>
              </div>
              <div className="card-base p-7">
                <h3 className="heading-card mb-4">Our Setup Process</h3>
                <ul className="space-y-3">
                  {[
                    "Identify which user actions count as conversions for your business",
                    "Audit current tracking for gaps, errors, and misconfigurations",
                    "Implement events in GA4 and/or Google Tag Manager",
                    "Import conversions into Google Ads for campaign optimisation",
                    "Test every conversion action — we prove each one works",
                    "Provide documentation so you understand what's been set up"
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
          title="What You Get with Proper Conversion Tracking"
          benefits={[
            { title: "Know Your Real Cost Per Lead", description: "See exactly how much each lead costs across Google Ads, organic, social, and other channels." },
            { title: "Optimise Based on Data", description: "Stop guessing which campaigns work. Scale what drives conversions, cut what doesn't." },
            { title: "Form & Phone Call Visibility", description: "Track every lead source — online forms, phone calls, and offline conversions too." },
            { title: "Clean Google Ads Integration", description: "Conversion data flows into Google Ads automatically so Smart Bidding can optimise effectively." },
            { title: "Verified & Tested", description: "Every conversion action is tested and verified before we finish. No 'it should be working'." },
            { title: "Ongoing Support Available", description: "Need adjustments or new tracking later? Our support plans cover analytics changes." }
          ]}
        />

        <FAQBlock
          faqs={[
            {
              question: "How is this different from what my web developer already set up?",
              answer: "Many developers install basic page tracking but don't configure meaningful conversion events. We focus on the actions that actually matter to your business — form submissions, phone calls, purchases — and make sure they're tracked properly and connected to Google Ads."
            },
            {
              question: "Can you fix tracking that's been set up incorrectly?",
              answer: "Yes — this is probably the most common thing we deal with. We audit your current setup, identify what's broken, and fix it. We'll explain what was wrong so you understand the difference."
            },
            {
              question: "Do I need Google Tag Manager?",
              answer: "We recommend GTM for most businesses because it gives more flexibility. But we can set up tracking directly in GA4 or through your WordPress theme. We'll advise on the best approach."
            },
            {
              question: "How do you test that tracking is working?",
              answer: "We use GA4 DebugView and GTM preview mode to verify every event fires correctly. We also physically test each action — submitting a form, clicking a button — and check the data appears in both GA4 and Google Ads."
            },
            {
              question: "Can you track conversions on a site you didn't build?",
              answer: "Yes. We can add tracking to any WordPress site, and in most cases to sites built on other platforms too. We'll review your setup first to confirm what's possible."
            }
          ]}
        />

        <CTABanner
          title="Not sure if your tracking is working?"
          description="Get in touch and we'll audit your current conversion tracking setup. Free initial review — we'll tell you what's working and what needs fixing."
          buttonText="Get a Free Tracking Audit"
          buttonHref="/contact"
        />

        <RelatedPages
          pages={[
            { title: "Google Analytics 4 Setup", href: "/google-analytics-setup", description: "GA4 setup, troubleshooting, and custom reporting" },
            { title: "Website UX Audit", href: "/website-ux-audit", description: "Data-driven UX analysis to improve your site's performance" },
            { title: "Managed WordPress Hosting", href: "/managed-wordpress-hosting", description: "Everything included in our managed hosting plans" },
            { title: "WordPress Care Plan", href: "/wordpress-care-plan", description: "Ongoing development, updates & priority support" },
            { title: "New Website", href: "/new-website", description: "Custom WordPress websites built for your business" },
            { title: "About UX Sites", href: "/about", description: "10+ years analytics & UX experience" }
          ]}
        />
      </main>
    </>
  );
}
