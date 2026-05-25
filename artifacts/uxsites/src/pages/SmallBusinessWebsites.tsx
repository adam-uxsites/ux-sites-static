import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { TestimonialBlock } from "@/components/blocks/TestimonialBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { serviceSchema, breadcrumbSchema } from "@/lib/schemas";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, X, Wrench, Briefcase, Sparkles, Coffee, ShoppingBag, Heart, Building2 } from "lucide-react";

export default function SmallBusinessWebsites() {
  return (
    <>
      <SEO
        title="Websites for Small Businesses | UX Sites  -  Professional & Affordable"
        description="Professional small business websites that actually generate enquiries. Custom WordPress design, mobile-first, SEO foundations  -  from a Google UX Certified designer. Based in Shropshire."
        url="https://uxsites.co.uk/small-business-websites"
        schema={[
          serviceSchema({
            name: "Websites for Small Businesses",
            description: "Custom WordPress websites for small and medium businesses. Clear messaging, conversion-focused design, mobile-first, SEO foundations, and training included. Based in Shropshire.",
            url: "https://uxsites.co.uk/small-business-websites",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "New Website", url: "https://uxsites.co.uk/new-website" },
            { name: "Small Business Websites", url: "https://uxsites.co.uk/small-business-websites" },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Built for small businesses that mean business"
          headline="Websites That Work as Hard as You Do"
          subheadline="Small businesses deserve professional websites  -  not cheap templates that look like every competitor. We build bespoke WordPress sites for small and medium businesses that generate real enquiries, build genuine credibility, and are easy to manage yourself."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See What's Included", href: "#included" }}
          chips={["From £1,500", "No Templates", "Conversion Focused", "Easy to Manage", "Mobile First"]}
        />

        {/* Problem framing */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Small Businesses Often Get  -  and What They Actually Need</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-background border border-border rounded-2xl">
                <h3 className="font-bold text-lg mb-5 text-muted-foreground">What they often end up with</h3>
                <ul className="space-y-3">
                  {[
                    "A template that looks identical to competitors",
                    "Built on Wix or Squarespace  -  limited and hard to scale",
                    "No SEO foundations  -  invisible to Google",
                    "Looks fine on desktop, broken on mobile",
                    "Impossible to update without breaking things",
                    "Contact form buried on page 4",
                    "No analytics  -  no idea if it's working",
                    "Cheap hosting that goes down regularly"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-background border border-primary/30 rounded-2xl">
                <h3 className="font-bold text-lg mb-5">What they actually need</h3>
                <ul className="space-y-3">
                  {[
                    "A distinctive design that reflects their brand",
                    "WordPress  -  powerful, flexible, and yours to own",
                    "Technical SEO built in from day one",
                    "Genuinely excellent on mobile  -  where customers are",
                    "A CMS they can actually use confidently",
                    "Clear calls to action that drive enquiries",
                    "Google Analytics 4 with conversion tracking",
                    "Reliable managed hosting with expert support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section id="included" className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Every Small Business Website Includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  No stripped-down "starter" packages. Every website we build for small businesses gets the same professional foundations  -  because cutting corners on a small business site is where the real cost is hidden.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We've built websites for 228+ businesses across 15+ industries. We know what works, and we build it in from the start.
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  Want to know how SEO helps small businesses get found? Read our{" "}
                  <a href="/blog/small-business-seo-guide" className="text-primary font-bold hover:underline">small business SEO guide</a>.
                </p>
                <Link href="/new-website" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  See our full website process
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  { title: "Custom design", detail: "Bespoke to your brand  -  not a template" },
                  { title: "Mobile-first build", detail: "Perfect on phones, tablets and desktop" },
                  { title: "Local SEO setup", detail: "Rank for your location and service keywords" },
                  { title: "Google Analytics 4", detail: "With goal and conversion tracking configured" },
                  { title: "Contact forms", detail: "With spam protection and email notifications" },
                  { title: "SSL certificate", detail: "HTTPS secured from day one" },
                  { title: "Speed optimisation", detail: "Image compression, caching, and clean code" },
                  { title: "WordPress CMS", detail: "Edit your own content with confidence" },
                  { title: "Training included", detail: "Handover session so you can manage your site" },
                  { title: "1 month post-launch support", detail: "We're available for any questions or fixes" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                      </div>
                      <span className="font-semibold text-sm">{item.title}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Honest about cost */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Honest About What It Costs</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We don't publish fixed prices because every small business has different needs  -  the number of pages, whether you need ecommerce, how much content creation support you need.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  What we can tell you: most small business websites we build are in the range of <strong className="text-foreground">£1,500-£4,000</strong>, depending on scope. We quote accurately before starting, and there are no surprise add-ons at the end.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  After launch, ongoing hosting and maintenance is available from <strong className="text-foreground">£50/month</strong>  -  covering everything so you never have to worry about the technical side.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity">
                  Get a free quote
                </Link>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-background border border-border rounded-2xl">
                  <h3 className="font-bold mb-3">Typical Small Business Website</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Pages (5-8 pages)</span><span>Included</span></div>
                    <div className="flex justify-between"><span>Custom design</span><span>Included</span></div>
                    <div className="flex justify-between"><span>Mobile responsive</span><span>Included</span></div>
                    <div className="flex justify-between"><span>SEO setup</span><span>Included</span></div>
                    <div className="flex justify-between"><span>Analytics setup</span><span>Included</span></div>
                    <div className="flex justify-between"><span>Contact form</span><span>Included</span></div>
                    <div className="flex justify-between"><span>Training session</span><span>Included</span></div>
                    <div className="flex justify-between border-t border-border pt-2 mt-2 font-bold text-foreground"><span>Starting from</span><span>£1,500</span></div>
                  </div>
                </div>
                <div className="p-6 bg-background border border-border rounded-2xl">
                  <h3 className="font-bold mb-3">Ongoing (Optional)</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Managed hosting + support</span><span>£50/month</span></div>
                    <div className="flex justify-between"><span>Annual plan (save £100)</span><span>£500/year</span></div>
                    <div className="flex justify-between"><span>Domain registration (.co.uk)</span><span>~£12/year</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Why Small Businesses Choose UX Sites"
          benefits={[
            { title: "No Middlemen", description: "You work directly with the person building your site. No project managers, no offshore teams, no lost-in-translation briefs." },
            { title: "10+ Years Experience", description: "Over a decade building websites for small businesses across 15+ industries  -  we understand what works and what doesn't." },
            { title: "Google UX Certified", description: "Formal UX training from Google means every design decision is based on how users actually behave, not how we think they do." },
            { title: "WordPress  -  Not a Closed Platform", description: "Your site is yours. Built on WordPress, you can take it anywhere. No platform lock-in, no subscription needed to keep it functional." },
            { title: "Shropshire Based, UK Focused", description: "Local expertise for Shropshire businesses; remote capability for clients across England, Scotland and Wales." },
            { title: "Honest Advice", description: "We'll tell you if you don't need something, or if a different approach would serve you better. Long-term relationships matter more than upsells." }
          ]}
        />

        <TestimonialBlock
          quote="Adam did a fantastic job upgrading an existing site  -  I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Small Business Owner"
        />

        <FAQBlock
          faqs={[
            {
              question: "How long does a small business website take?",
              answer: "Most small business sites (5-10 pages) take 4-6 weeks from the initial briefing to launch. The timeline depends largely on how quickly content and feedback are provided  -  we'll give you a clear project schedule upfront."
            },
            {
              question: "Can I update the website myself after launch?",
              answer: "Yes  -  that's a core part of what we build. WordPress is designed for non-technical users to manage content, and we include a training session so you feel genuinely confident doing it."
            },
            {
              question: "Is WordPress right for my small business?",
              answer: "For most small businesses, yes. WordPress is flexible, widely supported, and you fully own your site  -  unlike Wix or Squarespace, which lock your content into their platform. It's the most used CMS in the world for good reason."
            },
            {
              question: "Do I need to provide the content?",
              answer: "You'll need to provide the core information about your business. We structure and present it effectively. If you need copywriting support, we can discuss that as part of the project."
            },
            {
              question: "What's included in the £50/month hosting?",
              answer: "Everything: hosting, SSL, daily backups, security monitoring, WordPress updates, performance optimisation, and content update requests. Full details on our managed hosting page."
            }
          ]}
        />

        {/* Websites by Industry */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Websites by Industry</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our small business websites are tailored to your specific trade or profession  —  not generic templates.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {[
                { icon: Wrench, title: "Trades & Construction", desc: "Builders, electricians, plumbers", href: "/websites-for-builders" },
                { icon: Briefcase, title: "Professional Services", desc: "Solicitors, accountants, agents", href: "/websites-for-lawyers" },
                { icon: Sparkles, title: "Beauty & Personal Care", desc: "Hair salons, nail bars, tattoos", href: "/websites-for-hairdressers" },
                { icon: Coffee, title: "Food & Drink", desc: "Restaurants, cafes, takeaways", href: "/websites-for-restaurants" },
                { icon: ShoppingBag, title: "Retail & Home", desc: "Shops, gardeners, cleaners", href: "/websites-for-retail-shops" },
                { icon: Heart, title: "Community & Education", desc: "Schools, charities, care homes", href: "/websites-for-schools" },
                { icon: Building2, title: "Business & Tech", desc: "Developers, manufacturers, SMEs", href: "/websites-for-developers" },
              ].map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <a
                    key={i}
                    href={cat.href}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-primary/[0.02] transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{cat.title}</h3>
                      <p className="text-xs text-muted-foreground truncate">{cat.desc}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner
          title="Let's build your small business a website that works"
          description="Get a free, no-obligation quote. We'll talk through what you need, what it involves, and what it'll cost  -  no jargon, no pressure."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
          secondaryButtonText="See Our Process"
          secondaryButtonHref="/new-website"
        />

        <RelatedPages
          title="Related Services & Guides"
          pages={[
            {
              title: "New Website Design & Build",
              description: "Full details of our website design and development process  -  from first conversation to launch.",
              href: "/new-website",
              tag: "Service"
            },
            {
              title: "Web Design Shropshire",
              description: "Local web design for Shropshire businesses  -  in-person meetings available.",
              href: "/web-design-shropshire",
              tag: "Related"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Keep your new site secure and fast with managed hosting from £50/month.",
              href: "/managed-wordpress-hosting",
              tag: "Service"
            },
            {
              title: "Website Refreshes & Rebuilds",
              description: "Already have a site that isn't performing? We modernise and improve existing websites.",
              href: "/existing-website",
              tag: "Service"
            },
            {
              title: "5 Signs Your Website Needs a Rebuild",
              description: "How to know when your current website is costing your business more than it's worth.",
              href: "/blog/5-signs-your-website-needs-a-rebuild",
              tag: "Blog"
            },
            {
              title: "WordPress Maintenance Service",
              description: "Post-launch: keep your site updated, secure, and running smoothly.",
              href: "/wordpress-maintenance",
              tag: "Related"
            }
          ]}
        />
      </main>
    </>
  );
}
