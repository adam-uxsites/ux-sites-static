import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Shield, Zap, HardDrive, HeadphonesIcon, Coffee, Users, Building2, Store, ArrowRight } from "lucide-react";

const diffs = [
  { managed: "Someone else handles updates, security, and backups", standard: "You're responsible for everything beyond raw server space" },
  { managed: "Expert support that knows WordPress specifically", standard: "Generic support handling any platform  -  slow and scripted" },
  { managed: "Daily off-site backups with tested restoration", standard: "Backups are your problem  -  if you set them up at all" },
  { managed: "Performance optimisation built into the service", standard: "You get a server and hope it's fast enough" },
  { managed: "Fixed monthly price  -  everything included", standard: "Base price + extras for security, backups, SSL" },
  { managed: "Proactive monitoring  -  we fix things before you notice", standard: "Reactive  -  you notice a problem and then deal with it" },
];

const audiences = [
  {
    icon: Store,
    title: "Small Business Owners",
    description: "You run the business, not the website. You need your site to be secure, fast, and reliable  -  but you don't have time to manage it yourself. Managed hosting removes the technical burden entirely."
  },
  {
    icon: Users,
    title: "Solo Entrepreneurs & Freelancers",
    description: "Your website is your shop window. If it's down, slow, or showing a security warning, you're losing work. Managed hosting ensures your site makes the right impression, always."
  },
  {
    icon: Building2,
    title: "Professional Service Firms",
    description: "Accountants, solicitors, consultants  -  businesses where credibility matters and downtime costs real money. Managed hosting provides the reliability and security professional clients expect."
  },
  {
    icon: Coffee,
    title: "Anyone Who Values Their Time",
    description: "Even if you're technically capable of managing WordPress yourself, the question is whether your time is better spent on your business. For most people, the answer is yes  -  and managed hosting reflects that."
  }
];

export default function WhatIsMgdHosting() {
  return (
    <>
      <SEO
        title="What Is Managed WordPress Hosting? | UX Sites"
        description="New to managed WordPress hosting? A beginner-friendly guide explaining what it is, how it differs from shared hosting, and whether it's right for your business."
        url="https://uxsites.co.uk/what-is-managed-wordpress-hosting/"
        schema={[
          serviceSchema({
            name: "Managed WordPress Hosting Explained",
            description: "A beginner-friendly guide to understanding managed WordPress hosting, how it differs from standard hosting, who needs it, and why it matters for business websites.",
            url: "https://uxsites.co.uk/what-is-managed-wordpress-hosting/",
            category: "WordPress Hosting",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Managed WordPress Hosting", url: "https://uxsites.co.uk/managed-wordpress-hosting/" },
            { name: "What Is Managed WordPress Hosting?", url: "https://uxsites.co.uk/what-is-managed-wordpress-hosting/" },
          ]),
          faqSchema([
            { question: "What is managed WordPress hosting?", answer: "Managed WordPress hosting is a service where the hosting provider takes care of all technical aspects of running a WordPress site  -  including security, updates, backups, performance, and support  -  so you can focus on your business." },
            { question: "How is managed hosting different from regular hosting?", answer: "Regular hosting provides server space and leaves everything else to you. Managed hosting includes proactive security monitoring, automatic backups, WordPress updates, performance optimisation, and expert support as part of the service." },
            { question: "Do I need technical skills for managed hosting?", answer: "No  -  that's the point. Managed hosting is designed for people who want their website to work without needing to manage the technical side. Everything is handled for you." },
            { question: "Is managed hosting only for large websites?", answer: "No. Managed hosting is valuable for any website where reliability, security, and your time matter. Small business sites benefit just as much as large ones  -  sometimes more, because small business owners have less time to deal with technical issues." },
            { question: "How much does managed WordPress hosting cost?", answer: "Managed WordPress hosting typically costs £20-£100/month depending on the provider and what's included. Our managed hosting starts at £50/month with everything included  -  backups, security, updates, performance optimisation, and support." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Beginner-friendly guide"
          headline="What Is Managed WordPress Hosting?"
          subheadline="A beginner-friendly guide to understanding managed WordPress hosting and how it differs from traditional hosting solutions."
          primaryCta={{ text: "Get Managed Hosting", href: "/contact" }}
          secondaryCta={{ text: "Compare vs Shared Hosting", href: "/managed-wordpress-hosting-vs-shared-hosting" }}
          chips={["Beginner Guide", "Plain English", "No Jargon", "Comparisons", "Who Needs It"]}
        />

        {/* The simple explanation */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Simple Explanation</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Imagine you own a shop. Standard hosting is like renting an empty retail unit. You get the space, but everything else is down to you  -  you fit the lights, install the security system, clean the windows, restock the shelves, and stand behind the counter waiting for customers.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Managed WordPress hosting is like renting a fully-fitted, staffed shop. The lights are on, the security system is active, the shelves are stocked, and there's someone managing the day-to-day operations. You just need to show up and do business.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  In technical terms: managed hosting gives you a WordPress-optimised server environment where the hosting company takes responsibility for keeping your site secure, updated, backed up, and running fast. You don't need to log into a control panel, configure a firewall, or check whether your backups are working.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The key difference is <strong>who owns the worry</strong>. With standard hosting, you own all the worry. With managed hosting, that's the provider's job.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it differs */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Differs From Standard Hosting</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every difference between managed and standard hosting comes down to one thing: who takes responsibility.
              </p>
            </div>
            <div className="space-y-4">
              {diffs.map((diff, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="grid md:grid-cols-2 gap-4 p-6 bg-background border border-border rounded-2xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-primary-foreground" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-primary mb-1 block">Managed</span>
                      <p className="text-sm text-foreground font-medium">{diff.managed}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5 border border-border">
                      <span className="text-sm font-bold text-muted-foreground">✕</span>
                    </div>
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Standard</span>
                      <p className="text-sm text-muted-foreground">{diff.standard}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who needs it */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Needs Managed WordPress Hosting?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Managed hosting isn't right for everyone. Here's who benefits most.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {audiences.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-8 bg-card border border-border rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who doesn't need it */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-8 bg-background border border-border rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Who Doesn't Need Managed Hosting</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Managed hosting isn't for everyone. You probably don't need it if:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "You genuinely enjoy managing WordPress and running server updates",
                  "Your site is a personal blog with no business consequences if it's down",
                  "You're a developer who runs dozens of sites as a business model",
                  "You have reliable technical support in-house"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-6 leading-relaxed">
                If none of those describe you  -  and especially if your website matters to your business  -  managed hosting is worth serious consideration.
              </p>
            </div>
          </div>
        </section>

        <FAQBlock
          title="Managed Hosting  -  Common Questions"
          faqs={[
            {
              question: "What is managed WordPress hosting?",
              answer: "Managed WordPress hosting is a service where the hosting provider takes full responsibility for the technical operation of your WordPress site. This includes security monitoring, automatic backups, WordPress updates, performance optimisation, and expert support. You get a website that works without needing to manage the technical side."
            },
            {
              question: "How is managed hosting different from regular hosting?",
              answer: "Regular hosting provides server space and little else. You're responsible for updates, security, backups, and performance. Managed hosting includes all of that as part of the service. The core difference is who owns the responsibility for keeping your site secure and working."
            },
            {
              question: "Do I need technical skills to use managed hosting?",
              answer: "No  -  that's the entire point. Managed hosting is designed for people who want their website to work without needing to know how it works. You don't need to touch a control panel, run an update, or check a backup log. Everything is handled for you."
            },
            {
              question: "Is managed hosting only for large websites?",
              answer: "Not at all. In fact, small business owners often benefit most from managed hosting because they have the least time to deal with technical issues. A hacked or broken site can be devastating for a small business  -  managed hosting significantly reduces that risk."
            },
            {
              question: "How much does managed WordPress hosting cost?",
              answer: "Managed WordPress hosting typically ranges from £20 to £100 per month depending on the provider and what's included. Our managed hosting starts at £50/month with everything included  -  backups, security, updates, performance optimisation, CDN, SSL, and expert support. There are no hidden costs or upsells."
            }
          ]}
        />

        <CTABanner
          title="Ready to stop worrying about your website?"
          description="Managed WordPress hosting from £50/month  -  everything included, nothing to manage."
          buttonText="Get Started"
          buttonHref="/contact"
          secondaryButtonText="What's Included"
          secondaryButtonHref="/whats-included-managed-wordpress-hosting"
        />

        <RelatedPages
          title="Learn More About Managed Hosting"
          pages={[
            {
              title: "Managed WordPress Hosting  -  Full Details",
              description: "Everything included, pricing, and how it works. Our complete managed hosting service explained.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "What's Included in Managed Hosting",
              description: "Full breakdown of every feature and service included in managed WordPress hosting plans.",
              href: "/whats-included-managed-wordpress-hosting",
              tag: "Guide"
            },
            {
              title: "Managed vs Shared Hosting",
              description: "Honest comparison of managed and shared hosting  -  costs, features, and real-world differences.",
              href: "/managed-wordpress-hosting-vs-shared-hosting",
              tag: "Comparison"
            },
            {
              title: "Managed Hosting for Small Businesses",
              description: "Is managed hosting worth it for small businesses? ROI analysis and cost comparison.",
              href: "/managed-hosting-small-businesses",
              tag: "Guide"
            },
            {
              title: "Managed WordPress Hosting Shropshire",
              description: "Local managed hosting expertise for Shropshire and West Midlands businesses.",
              href: "/wordpress-hosting-shropshire",
              tag: "Local"
            },
            {
              title: "WordPress Security Monitoring",
              description: "How we proactively protect your WordPress site from security threats and vulnerabilities.",
              href: "/wordpress-security",
              tag: "Security"
            }
          ]}
        />
      </main>
    </>
  );
}
