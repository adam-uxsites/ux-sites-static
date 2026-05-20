import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { motion } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";

const careFeatures = [
  "WordPress core updates (tested before applied)",
  "Plugin and theme updates",
  "Daily off-site cloud backups",
  "Security scanning and monitoring",
  "Uptime monitoring — every minute",
  "Performance checks and optimisation",
  "Malware scanning and removal",
  "SSL certificate monitoring and renewal",
  "Broken link monitoring",
  "Content update requests",
  "Monthly site health report",
  "Priority email support"
];

const withoutCare = [
  "A plugin update breaks your layout — you don't notice for weeks",
  "Your site gets hacked via an outdated plugin vulnerability",
  "Your SSL certificate expires — browsers show 'Not Secure' warnings",
  "Your hosting backup fails silently — you have nothing to restore from",
  "Your site goes down on a weekend — nobody is watching",
  "A bot injects spam content — Google penalises your search rankings"
];

export default function WebsiteSupport() {
  return (
    <>
      <SEO
        title="WordPress Website Support & Care Plans | UX Sites Shropshire"
        description="Professional WordPress website support and care plans for Shropshire businesses. Regular updates, security monitoring, backups, and expert support to keep your site running perfectly."
      />
      <main>
        <HeroBlock
          tagline="Protect your digital investment"
          headline="WordPress Support & Website Care Plans"
          subheadline="Your website is a business asset — it needs ongoing attention to stay secure, current, and performing well. Our care plans ensure you're never left dealing with a hacked, broken, or outdated site."
          primaryCta={{ text: "Discuss a Care Plan", href: "/contact" }}
          secondaryCta={{ text: "View Hosting Plans", href: "/managed-wordpress-hosting" }}
          chips={["Security Monitoring", "Plugin Updates", "Daily Backups", "Uptime Monitoring", "Content Updates"]}
        />

        {/* What happens without support */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">What Happens Without Ongoing Support</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  WordPress sites left unmanaged don't just stay the same — they deteriorate. Software gets out of date. Vulnerabilities pile up. And eventually, something goes wrong at the worst possible time.
                </p>
                <div className="space-y-4">
                  {withoutCare.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-6">With a Care Plan</h3>
                <div className="space-y-3">
                  {careFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="What Our Support Covers"
          subtitle="Every care plan client gets the same thorough attention. Here's what that looks like in practice."
          benefits={[
            {
              title: "Core, Plugin & Theme Updates",
              description: "Updates are reviewed and applied carefully — we don't just click 'update all'. Compatibility is checked first, and we can roll back instantly if anything causes a problem."
            },
            {
              title: "Daily Off-Site Cloud Backups",
              description: "Automated backups every day, stored in secure off-site cloud storage and retained for 30 days. If anything goes wrong, we can restore to a clean state within the hour."
            },
            {
              title: "Continuous Security Monitoring",
              description: "Active scanning for malware, unauthorised file changes, brute-force login attempts, and known vulnerabilities — caught before they cause damage."
            },
            {
              title: "Uptime Monitoring (Every Minute)",
              description: "If your site goes down, we know before you do. Checks run from multiple locations every 60 seconds, and we act immediately on any downtime."
            },
            {
              title: "Performance Checks",
              description: "Regular speed tests and Core Web Vitals monitoring to ensure your site continues to load quickly as content grows and plugins are added."
            },
            {
              title: "SSL Certificate Management",
              description: "SSL certificates are monitored and renewed automatically well before expiry. Your visitors will never see a 'Not Secure' warning on your site."
            },
            {
              title: "Content Update Requests",
              description: "Need to change some text, update a photo, or update your contact details? Just email us. Simple content changes are handled promptly at no extra charge."
            },
            {
              title: "Monthly Health Report",
              description: "A clear, readable monthly report covering uptime, security scan results, updates applied, performance scores, and any actions taken during the month."
            },
            {
              title: "Priority Email Support",
              description: "Questions answered by someone who actually knows your site — not a generic helpdesk. Priority response times for care plan clients."
            }
          ]}
        />

        {/* Who is it for */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Is a Care Plan Right for You?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Website support plans work best for businesses where the website is genuinely important to how they operate — not just a brochure that never changes.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-7 bg-background border border-border rounded-2xl">
                <h3 className="font-bold text-lg mb-4">A good fit if you...</h3>
                <ul className="space-y-3">
                  {[
                    "Get enquiries or leads through your website",
                    "Don't have in-house technical WordPress expertise",
                    "Have experienced a security issue or downtime before",
                    "Update your content regularly (or want to)",
                    "Are in an industry where credibility matters",
                    "Value your time more than DIY maintenance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 bg-background border border-border rounded-2xl">
                <h3 className="font-bold text-lg mb-4">You might not need it if...</h3>
                <ul className="space-y-3">
                  {[
                    "You have a technical team managing WordPress in-house",
                    "Your site is a static HTML site (not WordPress)",
                    "Your website is rarely updated and serves no business function",
                    "You're actively migrating away from your current platform"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-muted-foreground shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FAQBlock
          faqs={[
            {
              question: "How is a care plan different from managed hosting?",
              answer: "Managed hosting includes all the care plan services plus the hosting infrastructure itself — servers, bandwidth, SSL, and uptime. A care plan can apply to a WordPress site on any host where we have access. If you're on our managed hosting, care plan services are included automatically."
            },
            {
              question: "Can you support a site that wasn't built by you?",
              answer: "Yes. We work with WordPress sites built by other developers. We'll review the site first to understand its setup, flag any immediate concerns, and let you know if anything needs addressing before we take it on."
            },
            {
              question: "What if something goes wrong while I'm on a care plan?",
              answer: "That's exactly what the plan is for. If your site is hacked, breaks after an update, or goes down unexpectedly, we deal with it immediately as part of your plan — no emergency call-out charges."
            },
            {
              question: "How do content update requests work?",
              answer: "Just email us what you need changing — plain English, no technical knowledge required. 'Please change the phone number to 01743 000 111' or 'Can you swap the hero image to this attached photo?' We turn around straightforward changes quickly."
            },
            {
              question: "Do I need to give you access to my website?",
              answer: "Yes — we need admin-level WordPress access and (where applicable) hosting control panel access. We handle all credentials securely and only access your site when actively working on it."
            }
          ]}
        />

        <CTABanner
          title="Give your website the attention it deserves"
          description="A properly maintained WordPress site is more secure, faster, and more effective. Get in touch to discuss a care plan for your business."
          buttonText="Discuss a Care Plan"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
