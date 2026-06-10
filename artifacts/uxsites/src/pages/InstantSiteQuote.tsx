import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { breadcrumbSchema, serviceSchema } from "@/lib/schemas";
import { Calculator, Clock, CheckCircle, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "£689",
    description: "For simple brochure sites or landing pages",
    features: ["3-5 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "SSL certificate", "1 month support"],
  },
  {
    name: "Business",
    price: "£1,200",
    description: "For growing businesses that need more",
    features: ["5-8 pages", "Custom design & branding", "Mobile-first responsive", "Full SEO setup", "Analytics & tracking", "Contact forms & CTAs", "3 months support"],
    popular: true,
  },
  {
    name: "E-commerce",
    price: "From £2,500",
    description: "For online stores and product-based businesses",
    features: ["Product catalog setup", "Payment integration", "Shopping cart", "Inventory management", "SEO & analytics", "Mobile optimised", "6 months support"],
  },
];

export default function InstantSiteQuote() {
  return (
    <>
      <SEO
        title="Instant Website Quote | UX Sites"
        description="Instant website pricing with no callbacks. Get a transparent, fixed quote for your new website, redesign, or managed hosting  -  based on what you actually need."
        url="https://uxsites.co.uk/instant-site-quote/"
        schema={[
          serviceSchema({
            name: "Website Design & Development",
            description: "Professional website design and development services with transparent pricing. Starter sites from £689.",
            url: "https://uxsites.co.uk/instant-site-quote/",
            category: "Web Design",
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Instant Site Quote", url: "https://uxsites.co.uk/instant-site-quote/" },
          ]),
        ]}
      />
      <main>
        <section className="pt-32 pb-16 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground mb-8">
                <Calculator size={14} className="mr-2" />
                Instant pricing, no obligation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Instant Site Quote</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Know exactly what your website project will cost before you commit. No waiting for callbacks, no hidden fees  -  just clear, transparent pricing based on what you actually need.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold shadow hover:opacity-90 transition-opacity h-12"
              >
                Get Your Custom Quote
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Project Type</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Select the option that best matches what you need, and we'll give you a clear price upfront.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col p-8 rounded-2xl border ${
                    tier.popular ? "border-primary bg-card shadow-lg" : "border-border bg-background"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-2">{tier.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">What's Included in Every Project</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Custom design & branding",
                "Mobile responsive layout",
                "SEO optimisation",
                "Contact forms & CTAs",
                "Analytics setup",
                "SSL security",
                "Performance optimisation",
                "Content management system",
                "Post-launch support",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 p-4 bg-card border border-border rounded-xl text-sm"
                >
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Tell us what you need", desc: "Fill in a few details about your project  -  type, pages, features." },
                { step: "2", title: "Get your instant price", desc: "We'll calculate your quote based on your requirements. No hidden costs." },
                { step: "3", title: "We build your site", desc: "Once you're happy, we start building. Delivery in as little as 4 weeks." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready for a clear, instant quote?"
          description="No waiting for callbacks. No hidden fees. Just straightforward pricing for your website project."
          buttonText="Get Your Instant Quote"
          buttonHref="/contact/"
        />
      </main>
    </>
  );
}
