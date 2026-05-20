import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { StatsBar } from "@/components/blocks/StatsBar";
import { ServicesGrid } from "@/components/blocks/ServicesGrid";
import { TestimonialBlock } from "@/components/blocks/TestimonialBlock";
import { CTABanner } from "@/components/blocks/CTABanner";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";

export default function Home() {
  return (
    <>
      <SEO 
        title="UX Sites | Managed WordPress Hosting & Web Design Shropshire" 
        description="Managed website hosting and WordPress support for UK businesses. Expert web design and hosting in Shropshire."
      />
      <main>
        <HeroBlock 
          tagline="Perfect for small/medium businesses"
          headline="Managed Website Hosting & WordPress Support for Businesses"
          subheadline="We offer managed website hosting and WordPress support for UK businesses — hosting, updates, security, performance, and expert help included — so you can focus on running your business while we keep your site secure, online, and performing well."
          primaryCta={{ text: "Managed Hosting", href: "/managed-wordpress-hosting" }}
          secondaryCta={{ text: "New Website", href: "/new-website" }}
          chips={["Managed Hosting", "Content updates", "Secure & Reliable", "Optimised speeds", "Expert Support", "Updates & Backups", "Website Analytics", "Uptime Monitoring"]}
        />
        
        <StatsBar 
          stats={[
            { number: "15+", label: "Industries Served" },
            { number: "10+", label: "Years Experience" },
            { number: "228+", label: "Sites worked on" },
            { number: "47,479", label: "Emails Received" }
          ]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From managed hosting to complete rebuilds, we offer precision-crafted solutions for businesses in Shropshire and across the UK.</p>
            </div>
            <ServicesGrid />
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  About UX Sites
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">10+ years optimising websites in Shropshire</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Not just another web developer. I have professionally worked as a designer, developer and UX analyst with Google-certified UX expertise, I know what turns visitors into customers.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Every website I create is informed by data, user research, and over a decade of experience across 15+ industries. No guesswork — just proven results.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center p-4 bg-card rounded-lg border border-border">
                    <span className="font-semibold">Google Mobile UX Certified</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-card rounded-lg border border-border">
                    <span className="font-semibold">Google Analytics Certified</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-50"></div>
                <div className="absolute inset-4 border border-primary/20 rounded-2xl rotate-3"></div>
                <div className="absolute inset-4 border border-primary/20 rounded-2xl -rotate-3"></div>
                <div className="absolute inset-4 bg-card rounded-2xl border border-border flex flex-col justify-center items-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4">UX</div>
                  <h3 className="text-xl font-bold mb-2">Built for Conversion</h3>
                  <p className="text-sm text-muted-foreground">Expertly crafted web experiences for forward-thinking businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialBlock 
          quote="Adam did a fantastic job upgrading an existing site — I was 'wowed' with a mock up he produced (knocked my socks off!) He really has an eye for making things look stunning and visually pleasing! Very pleased with the website he has produced for me and will be recommending him to my colleagues."
          name="Zahrah Aullybocus"
          date="Jan 5, 2026"
        />

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
      </main>
    </>
  );
}
