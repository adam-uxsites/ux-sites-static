import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { TrendingUp, Smartphone, Zap, ShieldCheck, BarChart2, Wrench } from "lucide-react";

const improvements = [
  {
    icon: Smartphone,
    title: "Mobile Experience Overhaul",
    description: "Rebuild the mobile experience from scratch with a genuine mobile-first approach  -  not just a shrunken desktop layout. Properly sized text, touch-friendly controls, and fast load times on 4G/5G."
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description: "Target Core Web Vitals improvements: image compression and WebP conversion, server-side caching, CSS/JS minification and deferral, database cleanup. Load time reductions of 60-70% are common."
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Improvements",
    description: "Analyse where users drop off, improve calls to action, restructure page layouts for clearer user journeys, add trust signals and social proof. Focused on turning more existing traffic into enquiries."
  },
  {
    icon: ShieldCheck,
    title: "Security Hardening",
    description: "Full security audit, malware scan, removal of outdated or vulnerable plugins, login security improvements, and a clean baseline to move forward from  -  whether you're keeping your current host or moving."
  },
  {
    icon: BarChart2,
    title: "Analytics & Tracking Setup",
    description: "Set up or fix Google Analytics 4 with proper goal and conversion tracking, connect Search Console, review current data for insights, and establish a baseline for measuring improvement."
  },
  {
    icon: Wrench,
    title: "CMS & Editor Improvements",
    description: "If your current site is difficult to update, we restructure the editor experience so content management is straightforward. This often means moving away from complex page builders to a cleaner approach."
  }
];

const auditCovers = [
  "Page load speed across desktop and mobile",
  "Core Web Vitals scores (LCP, INP, CLS)",
  "Mobile usability and responsiveness",
  "Security vulnerabilities and software versions",
  "SEO technical health (meta, schema, sitemap)",
  "Google Search Console data (if available)",
  "Conversion paths and calls to action",
  "Plugin audit  -  bloat, conflicts, outdated",
  "Current hosting performance",
  "Accessibility basics"
];

export default function ExistingWebsite() {
  return (
    <>
      <SEO
        title="Website Refresh & Rebuild | UX Sites Shropshire"
        description="Transform your existing WordPress site into a high-performance asset. Design refresh, speed optimisation, mobile improvements, SEO and conversion tweaks  -  free audit included."
        url="https://uxsites.co.uk/existing-website"
        schema={[
          serviceSchema({
            name: "Website Refresh & Rebuild",
            description: "Modernise your existing WordPress website  -  performance optimisation, mobile experience improvements, design refresh, SEO, and conversion rate improvements. Free site audit included.",
            url: "https://uxsites.co.uk/existing-website",
            category: "Website Redesign",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Existing Website", url: "https://uxsites.co.uk/existing-website" },
          ]),
          faqSchema([
            {
              question: "Can you work on a site that wasn't built by you?",
              answer: "Yes  -  the majority of our refresh and rebuild work is on sites built by other developers. We review the codebase first and let you know our assessment before committing to a scope of work."
            },
            {
              question: "Will my site need to go offline during the work?",
              answer: "No. We work on a staging (development) copy of your site first. Your live site continues to run normally throughout. We only switch over once the new version is fully tested and approved."
            },
            {
              question: "How long does a refresh or rebuild take?",
              answer: "A focused performance and design refresh can take 2-3 weeks. A more substantial redesign or full rebuild typically takes 4-8 weeks depending on scope. We give you a clear timeline before starting."
            },
            {
              question: "What if I also need new content?",
              answer: "We can work with your existing content, help you restructure and improve it, or bring in a copywriter if more substantial writing is needed. Photography sourcing is also something we can help arrange."
            },
            {
              question: "Do I need to move hosting for a refresh?",
              answer: "Not necessarily. If your current hosting is adequate and you want to stay with them, we can work with that. If poor hosting is contributing to your performance problems  -  which it often is  -  we'll tell you honestly and discuss the options."
            }
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Turn your website into an asset"
          headline="Website Refreshes & Rebuilds That Actually Deliver"
          subheadline="Is your site slow, outdated, or simply not generating the enquiries it should? We modernise existing WordPress sites  -  improving performance, design, user experience, and conversions without necessarily starting from scratch."
          primaryCta={{ text: "Get a Free Site Audit", href: "/contact" }}
          secondaryCta={{ text: "See What We Fix", href: "#improvements" }}
          chips={["Performance Fix", "Mobile Experience", "UX Improvements", "SEO", "Conversion Optimisation"]}
        />

        {/* Problem / consequence framing */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: "60%+",
                  context: "of web traffic is now on mobile devices",
                  point: "If your site isn't excellent on mobile  -  not just functional, genuinely good  -  you're failing the majority of your visitors."
                },
                {
                  stat: "32%",
                  context: "bounce rate increase from 1s to 3s load time",
                  point: "Visitors who leave before your page loads haven't seen your services, read your copy, or had the chance to contact you."
                },
                {
                  stat: "50ms",
                  context: "time for a first trust impression",
                  point: "An outdated-looking website communicates something about your business  -  even if the reality is entirely different."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-background border border-border rounded-2xl"
                >
                  <div className="text-4xl font-black text-primary mb-2">{item.stat}</div>
                  <div className="text-sm font-semibold text-muted-foreground mb-4">{item.context}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free audit */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">We Start With a Free Site Audit</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Before recommending anything, we audit your current site properly. This gives us both a clear, honest picture of what's working, what isn't, and what the realistic options are.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  The audit takes a few days and results in a written summary you keep  -  whether you work with us or not. No obligation.
                </p>
                <div className="p-6 bg-card border border-primary/30 rounded-2xl">
                  <p className="text-sm font-bold mb-2">What the free audit covers:</p>
                  <p className="text-sm text-muted-foreground">Just share your website URL and we'll take it from there.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {auditCovers.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Refresh vs rebuild */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Refresh or Full Rebuild?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Not every project needs a ground-up rebuild. Here's how we think about it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-4">A refresh makes sense when...</h3>
                <ul className="space-y-3">
                  {[
                    "The site structure and content are fundamentally sound",
                    "The main issues are performance and visual design",
                    "The WordPress theme can be updated or replaced without a full rebuild",
                    "Budget is a significant constraint",
                    "The content management setup works well"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-4">A full rebuild makes sense when...</h3>
                <ul className="space-y-3">
                  {[
                    "The site has deep structural or architectural problems",
                    "It's built on an obsolete platform or heavily customised page builder",
                    "The brand and positioning have changed significantly",
                    "The business has grown and the site no longer reflects it",
                    "Security issues are too embedded to resolve without starting clean"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">→</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="improvements">
          <BenefitsGrid
            title="What We Typically Improve"
            subtitle="The most common areas where existing sites underperform  -  and where the right intervention has the biggest impact."
            benefits={improvements.map(item => ({ title: item.title, description: item.description }))}
          />
        </section>

        <FAQBlock
          faqs={[
            {
              question: "Can you work on a site that wasn't built by you?",
              answer: "Yes  -  the majority of our refresh and rebuild work is on sites built by other developers. We review the codebase first and let you know our assessment before committing to a scope of work."
            },
            {
              question: "Will my site need to go offline during the work?",
              answer: "No. We work on a staging (development) copy of your site first. Your live site continues to run normally throughout. We only switch over once the new version is fully tested and approved."
            },
            {
              question: "How long does a refresh or rebuild take?",
              answer: "A focused performance and design refresh can take 2-3 weeks. A more substantial redesign or full rebuild typically takes 4-8 weeks depending on scope. We give you a clear timeline before starting."
            },
            {
              question: "What if I also need new content?",
              answer: "We can work with your existing content, help you restructure and improve it, or bring in a copywriter if more substantial writing is needed. Photography sourcing is also something we can help arrange."
            },
            {
              question: "Do I need to move hosting for a refresh?",
              answer: "Not necessarily. If your current hosting is adequate and you want to stay with them, we can work with that. If poor hosting is contributing to your performance problems  -  which it often is  -  we'll tell you honestly and discuss the options."
            }
          ]}
        />

        <CTABanner
          title="Let's see what your site is actually doing"
          description="Get a free, honest site audit  -  no obligation, no sales pitch. We'll tell you what's working, what isn't, and what your realistic options are."
          buttonText="Request a Free Audit"
          buttonHref="/contact"
        />

        <RelatedPages
          title="Explore the Website Refresh Cluster"
          pages={[
            {
              title: "Website Speed Optimisation",
              description: "Diagnose and fix the root causes of slow load times  -  Core Web Vitals, images, caching, and hosting.",
              href: "/website-speed-optimisation",
              tag: "Performance"
            },
            {
              title: "WordPress Security Monitoring",
              description: "Security issues often explain poor performance  -  we scan, protect, and harden your site.",
              href: "/wordpress-security",
              tag: "Security"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Post-refresh: keep your updated site maintained, secure, and performing well.",
              href: "/wordpress-maintenance",
              tag: "Maintenance"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Move to hosting built for WordPress  -  the fastest way to improve baseline performance.",
              href: "/managed-wordpress-hosting",
              tag: "Hosting"
            },
            {
              title: "Websites for Small Businesses",
              description: "Need a full rebuild? We build custom WordPress sites tailored to small businesses.",
              href: "/small-business-websites",
              tag: "Web Design"
            },
            {
              title: "5 Signs Your Website Needs a Rebuild",
              description: "When a refresh isn't enough  -  the five clear indicators of a site that needs replacing.",
              href: "/blog/5-signs-your-website-needs-a-rebuild",
              tag: "Blog"
            }
          ]}
        />
      </main>
    </>
  );
}
