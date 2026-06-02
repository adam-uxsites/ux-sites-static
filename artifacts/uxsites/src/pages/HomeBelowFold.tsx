import { ServicesGrid } from "@/components/blocks/ServicesGrid";
import { CTABanner } from "@/components/blocks/CTABanner";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { WorkShowcase } from "@/components/blocks/WorkShowcase";
import { motion } from "framer-motion";
import { Quote, Star, Wrench, Briefcase, Sparkles, Coffee, ShoppingBag, Heart, Building2, ArrowRight, Activity } from "lucide-react";

export default function HomeBelowFold() {
  return (
    <>
      {/* Our Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From managed hosting to complete rebuilds, we offer precision-crafted solutions for businesses in Shropshire and across the UK.</p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Websites by Industry */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
              Websites by Industry
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tried &amp; Tested Across Multiple Industries</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build bespoke WordPress sites for every type of business  —  from tradespeople and retailers to professional firms and community organisations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { icon: Wrench, title: "Trades & Construction", desc: "Builders, electricians, plumbers and more", href: "/websites-for-builders" },
              { icon: Briefcase, title: "Professional Services", desc: "Solicitors, accountants, estate agents", href: "/websites-for-lawyers" },
              { icon: Sparkles, title: "Beauty & Personal Care", desc: "Hair salons, nail bars, tattoo studios", href: "/websites-for-hairdressers" },
              { icon: Coffee, title: "Food & Drink", desc: "Restaurants, cafes, takeaways, butchers", href: "/websites-for-restaurants" },
              { icon: ShoppingBag, title: "Retail & Home", desc: "Shops, jewellers, gardeners, cleaners", href: "/websites-for-retail-shops" },
              { icon: Heart, title: "Community & Education", desc: "Schools, charities, nursing homes", href: "/websites-for-schools" },
              { icon: Building2, title: "Business & Tech", desc: "Developers, manufacturers, SMEs", href: "/websites-for-developers" },
              { icon: Activity, title: "Health & Medical", desc: "Therapists, nursing homes, clinics", href: "/websites-for-nursing-homes" },
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <a
                  key={i}
                  href={cat.href}
                  className="group flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-primary/[0.02] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
                </a>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <a
              href="/small-business-websites"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all industries we serve <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* About + Testimonial */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About + Certs */}
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                About UX Sites
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">10+ years optimising websites in Shropshire</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Not just another web developer. I have professionally worked as a designer, developer and UX analyst with Google-certified UX expertise  -  I know what turns visitors into customers.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every website I create is informed by data, user research, and over a decade of experience across 15+ industries. No guesswork  -  just proven results.
              </p>
              {/* Google cert badges */}
              <div className="flex gap-5 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src="/google-mobile-cert.webp"
                    alt="Google Mobile UX Certified"
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-sm text-muted-foreground text-center leading-tight">Google Mobile UX<br/>Certified</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src="/google-analytics-cert.webp"
                    alt="Google Analytics Certified"
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-sm text-muted-foreground text-center leading-tight">Google Analytics<br/>Certified</span>
                </motion.div>
              </div>
            </div>

            {/* Right: Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                {/* Quote icon */}
                <Quote size={28} className="text-primary/30 mb-4" />
                <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-medium">
                  "Adam did a fantastic job upgrading an existing site  -  I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">ZA</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Zahrah Aullybocus</div>
                    <div className="text-sm text-muted-foreground">Jan 5, 2026 · Google Review</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WorkShowcase limit={3} />

      <BenefitsGrid 
        title="What's included on every website"
        benefits={[
          { title: "Analytics & Tracking", description: "GA4 & Hotjar integration for deep user insights." },
          { title: "Security & SSL", description: "Enterprise-grade security and encrypted connections." },
          { title: "Speed Optimization", description: "Lightning-fast load times for better conversions." },
          { title: "Mobile Responsive", description: "Flawless experiences across all devices." },
          { title: "Technical SEO", description: "Built from the ground up for search engine visibility." },
          { title: "User Experience Focus", description: "Data-driven design decisions that drive action." }
        ]}
      />

      <CTABanner 
        title="Ready to start your project?"
        description="Get in touch to discuss your website requirements. We'll provide a tailored quote based on your specific needs in Shropshire or nationwide."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />
    </>
  );
}
