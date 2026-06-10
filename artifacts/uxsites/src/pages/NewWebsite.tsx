import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { StatsBar } from "@/components/blocks/StatsBar";
import { TestimonialBlock } from "@/components/blocks/TestimonialBlock";
import { RelatedPages } from "@/components/blocks/RelatedPages";
import { motion } from "framer-motion";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { Check } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business, your customers, and your goals. What do you want the website to achieve? Who are you trying to reach? What makes your business different? This shapes everything that follows.",
    detail: "1-2 hours of your time via call or in-person (Shropshire area)"
  },
  {
    number: "02",
    title: "UX Planning & Structure",
    description: "Before any design work begins, we map out the site structure, user journeys, and conversion paths. Where do visitors land? What do we need them to do next? What information do they need at each stage?",
    detail: "Wireframes and sitemap provided for your review"
  },
  {
    number: "03",
    title: "Bespoke Visual Design",
    description: "A custom design that reflects your brand, builds trust with your audience, and looks great on every device. You'll see initial designs and can provide feedback before we build anything.",
    detail: "Full page designs in desktop and mobile views"
  },
  {
    number: "04",
    title: "WordPress Development",
    description: "We build on WordPress with clean, efficient code  -  properly structured themes, minimal plugins, and a CMS that's genuinely easy for you to use. Speed and accessibility built in from day one.",
    detail: "Development on a private staging URL"
  },
  {
    number: "05",
    title: "Content Integration",
    description: "Your copy, images, and other content are integrated into the site. We can help with content structuring and guidance, or work with a copywriter if needed. Photography sourcing can also be arranged.",
    detail: "Content review and optimisation included"
  },
  {
    number: "06",
    title: "Testing & Launch",
    description: "Thorough testing across devices, browsers, and screen sizes. Speed optimisation, SEO technical setup, Google Analytics 4 and Search Console configuration, conversion tracking setup — then a smooth handover and launch.",
    detail: "Training session included so you can manage your site"
  }
];

const included = [
  "Custom design  -  no templates or page builders",
  "Mobile-first, fully responsive across all devices",
  "Technical SEO foundations (meta, schema, sitemap, Search Console)",
  "Google Analytics 4 with goal and conversion tracking",
  "Contact forms with spam protection",
  "SSL certificate and secure hosting setup",
  "Page speed optimisation from day one",
  "Image optimisation and compression",
  "WordPress training  -  you'll feel confident using your site",
  "1 month of post-launch support included",
  "Optional managed hosting from £50/month"
];

export default function NewWebsite() {
  return (
    <>
      <SEO
        title="Custom WordPress Website Design & Build | UX Sites Shropshire"
        description="Custom WordPress websites built to generate enquiries. Data-driven design, mobile-first & SEO-ready — from a Google UX Certified developer. Based in Shropshire, serving the UK."
        url="https://uxsites.co.uk/new-website/"
        schema={[
          serviceSchema({
            name: "New Website Design & Build",
            description: "Bespoke WordPress website design and development for small and medium businesses. Custom design, mobile-first, SEO foundations, Google Analytics 4, and training included. Starting from £1,500.",
            url: "https://uxsites.co.uk/new-website/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "New Website", url: "https://uxsites.co.uk/new-website/" },
          ]),
          faqSchema([
            { question: "How long does a new website take?", answer: "Most small-to-medium business websites take 4-6 weeks from the initial briefing to launch. Larger or more complex sites may take 8-10 weeks. The timeline depends significantly on how quickly client content and feedback are provided  -  we'll give you a clear project schedule at the start." },
            { question: "Do I need to provide my own content?", answer: "You'll need to provide the core information about your business  -  services, contact details, key messages, any existing brand materials. We structure and present it effectively. If you need help writing copy, we can discuss that as part of the brief, or recommend a copywriter." },
            { question: "Will I be able to update my website myself?", answer: "Yes. WordPress is built for non-technical users to manage content. We set up your site properly and include a training session so you feel confident making text changes, adding pages, writing blog posts, and managing your media library." },
            { question: "Do you work with businesses outside Shropshire?", answer: "Yes  -  we work with businesses across the UK. The entire project can be managed remotely via video calls, email, and shared design tools. For Shropshire and West Midlands clients, in-person meetings are available." },
            { question: "What platform do you build on?", answer: "We build on WordPress using custom themes  -  not Elementor, WPBakery, or other page builders. This produces faster, more maintainable sites that don't rely on third-party subscriptions to function." },
            { question: "What happens after the site launches?", answer: "Every new website includes one month of post-launch support. After that, we recommend one of our care or managed hosting plans to keep the site secure and maintained. You're not obligated, but most clients find it worthwhile." },
          ]),
        ]}
      />
      <main>
        <HeroBlock
          tagline="Custom websites built to convert"
          headline="A Website That Actually Works for Your Business"
          subheadline="Not a template. Not a page builder dragged into shape. A precision-crafted WordPress website designed around your customers, your goals, and your brand  -  built by a Google-certified UX expert with 10+ years of experience across 15+ industries."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          secondaryCta={{ text: "See Our Process", href: "#process" }}
          chips={["Bespoke Design", "Mobile First", "SEO Optimised", "Google UX Certified", "Conversion Tracking", "WordPress"]}
        />

        <StatsBar
          stats={[
            { number: "228+", label: "Sites Delivered", sub: "Across 15+ industries" },
            { number: "10+", label: "Years Experience", sub: "In web design & UX" },
            { number: "4-6", label: "Week Delivery", sub: "Typical project timeline" },
            { number: "100%", label: "Client Satisfaction", sub: "Across all projects" }
          ]}
        />

        {/* What you get */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Every New Website Includes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  No hidden extras, no upselling extras you should have had from the start. Every website we build includes a complete set of professional foundations.
                </p>
                <ul className="space-y-3">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary-foreground" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5">
                <div className="p-6 bg-card border border-border rounded-2xl">
                  <h3 className="font-bold mb-3">What About Pricing?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    New websites are quoted based on your specific requirements  -  the number of pages, complexity of functionality, and whether content creation support is needed.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Most small business websites start from around £1,500 for a compact, well-designed site. Larger sites with more pages, custom functionality, or e-commerce are quoted accordingly.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thinking about selling online? Read our comparison of{" "}
                    <a href="/blog/shopify-vs-woocommerce-uk" className="text-primary font-bold hover:underline">Shopify vs WooCommerce for UK businesses</a>.
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-2xl">
                  <h3 className="font-bold mb-3">What About Ongoing Costs?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    After launch, your site will need hosting and ideally ongoing maintenance. We recommend our managed hosting plan (£50/month or £500/year) which covers everything.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Domain registration is typically £10-15/year for a .co.uk domain.
                  </p>
                </div>
                <div className="p-6 bg-card border border-primary/30 rounded-2xl">
                  <h3 className="font-bold mb-3">Industries We've Worked In</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Legal", "Property", "Health & Beauty", "Construction", "Ecommerce", "Manufacturing", "Education", "Logistics", "Events", "Finance", "Healthcare", "B2B"].map((ind, i) => (
                      <span key={i} className="text-sm border border-border px-2.5 py-1 rounded-md text-muted-foreground">{ind}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How a New Website Project Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A clear, structured process so you always know what's happening, what's next, and when your site will be ready.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="grid md:grid-cols-[80px_1fr] gap-6 p-7 bg-background border border-border rounded-2xl"
                >
                  <div className="text-4xl font-black text-primary/40 leading-none pt-1">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                    <div className="text-sm text-muted-foreground border border-border rounded-md px-3 py-1.5 inline-block">
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BenefitsGrid
          title="Why UX Sites  -  Not Just Another Web Developer"
          subtitle="10+ years of professional experience as a designer, developer, and UX analyst  -  applied to every project."
          benefits={[
            {
              title: "Google UX Certified",
              description: "Formal UX training and certification from Google means every design decision is grounded in how users actually think and behave  -  not just what looks nice."
            },
            {
              title: "Data-Driven Approach",
              description: "Designs informed by user research, analytics data, and conversion principles  -  not guesswork or personal preference. Every layout decision has a reason."
            },
            {
              title: "WordPress Specialist",
              description: "Deep WordPress expertise means your site is built properly  -  clean code, minimal plugins, and a CMS you'll actually find easy to use."
            },
            {
              title: "15+ Industries Experience",
              description: "Having worked across legal, healthcare, construction, ecommerce, B2B and more, we understand what works for different audiences and business types."
            },
            {
              title: "SEO Built In From Day One",
              description: "Technical SEO isn't an afterthought. Site structure, meta data, schema markup, page speed, and Search Console setup are part of every build."
            },
            {
              title: "Conversion Tracking Included",
              description: "GA4 with goal and conversion tracking configured as standard. You'll know where your leads come from from day one."
            },
            {
              title: "Shropshire-Based, Available",
              description: "Based in Shropshire  -  available for in-person meetings for local clients, and fully remote-capable for businesses across the UK."
            }
          ]}
        />

        <TestimonialBlock
          quote="Adam did a fantastic job upgrading an existing site  -  I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="January 2026"
          role="Client"
        />

        <FAQBlock
          faqs={[
            {
              question: "How long does a new website take?",
              answer: "Most small-to-medium business websites take 4-6 weeks from the initial briefing to launch. Larger or more complex sites may take 8-10 weeks. The timeline depends significantly on how quickly client content and feedback are provided  -  we'll give you a clear project schedule at the start."
            },
            {
              question: "Do I need to provide my own content?",
              answer: "You'll need to provide the core information about your business  -  services, contact details, key messages, any existing brand materials. We structure and present it effectively. If you need help writing copy, we can discuss that as part of the brief, or recommend a copywriter."
            },
            {
              question: "Will I be able to update my website myself?",
              answer: "Yes. WordPress is built for non-technical users to manage content. We set up your site properly and include a training session so you feel confident making text changes, adding pages, writing blog posts, and managing your media library."
            },
            {
              question: "Do you work with businesses outside Shropshire?",
              answer: "Yes  -  we work with businesses across the UK. The entire project can be managed remotely via video calls, email, and shared design tools. For Shropshire and West Midlands clients, in-person meetings are available."
            },
            {
              question: "What platform do you build on?",
              answer: "We build on WordPress using custom themes  -  not Elementor, WPBakery, or other page builders. This produces faster, more maintainable sites that don't rely on third-party subscriptions to function."
            },
            {
              question: "What happens after the site launches?",
              answer: "Every new website includes one month of post-launch support. After that, we recommend one of our care or managed hosting plans to keep the site secure and maintained. You're not obligated, but most clients find it worthwhile."
            }
          ]}
        />

        <CTABanner
          title="Ready to build something remarkable?"
          description="Get in touch to discuss your project. We'll have a straightforward conversation about what you need, what's possible, and what it's likely to cost  -  no hard sell, no obligation."
          buttonText="Start the Conversation"
          buttonHref="/contact"
        />

        <RelatedPages
          title="Explore the New Website Cluster"
          pages={[
            {
              title: "Web Design Shropshire",
              description: "Local web design for businesses in Shrewsbury, Telford, and across Shropshire  -  in-person meetings available.",
              href: "/web-design-shropshire",
              tag: "Local"
            },
            {
              title: "Websites for Small Businesses",
              description: "Specifically tailored website solutions for small and growing UK businesses.",
              href: "/small-business-websites",
              tag: "Small Business"
            },
            {
              title: "Managed WordPress Hosting",
              description: "Keep your new site secure and performing with managed hosting from £50/month.",
              href: "/managed-wordpress-hosting",
              tag: "Hosting"
            },
            {
              title: "Website Support & Care Plans",
              description: "Post-launch: ongoing updates, security, backups, and expert support.",
              href: "/website-support",
              tag: "Support"
            },
            {
              title: "5 Signs Your Website Needs a Rebuild",
              description: "How to know when your current website is costing you more than it's worth.",
              href: "/blog/5-signs-your-website-needs-a-rebuild",
              tag: "Blog"
            },
            {
              title: "Local SEO for Shropshire Businesses",
              description: "How to rank in local searches  —  practical steps that actually move the needle.",
              href: "/blog/local-seo-shropshire-businesses",
              tag: "Blog"
            },
            {
              title: "Website UX Audit",
              description: "Data-driven UX analysis to improve your site's performance and conversions.",
              href: "/website-ux-audit",
              tag: "Service"
            }
          ]}
        />
      </main>
    </>
  );
}
