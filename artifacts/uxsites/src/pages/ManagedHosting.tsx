import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { PricingBlock } from "@/components/blocks/PricingBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { CTABanner } from "@/components/blocks/CTABanner";

export default function ManagedHosting() {
  return (
    <>
      <SEO 
        title="Managed WordPress Hosting | UX Sites Shropshire" 
        description="Managed WordPress hosting from £50/month. Everything included: security, backups, performance, updates and expert support. Based in Shropshire."
      />
      <main>
        <HeroBlock 
          headline="Managed WordPress Hosting"
          subheadline="Everything included, nothing to worry about. We handle hosting, security, backups, performance, updates and expert support so you can focus on your business."
          primaryCta={{ text: "Get Started", href: "/contact" }}
          chips={["From £50/month", "99.9% Uptime", "Daily Backups", "SSL Included"]}
        />

        <PricingBlock 
          plans={[
            {
              title: "Monthly",
              price: "£50",
              period: "month",
              description: "Perfect for flexible rolling support",
              features: [
                "Professional Managed Hosting",
                "Automatic daily backups",
                "Security monitoring & Malware protection",
                "Performance optimization",
                "Email & plugin support",
                "SSL certificate",
                "Google Analytics setup",
                "Content update requests"
              ],
              ctaText: "Choose Monthly",
              ctaHref: "/contact?plan=monthly"
            },
            {
              title: "Annual",
              price: "£500",
              period: "year",
              description: "Save £100 with an annual commitment",
              features: [
                "All Monthly features included",
                "Priority support queue",
                "Annual performance review",
                "Free site migration",
                "2 months free",
                "SSL certificate included forever",
                "Speed optimisation guarantee",
                "Content update requests"
              ],
              ctaText: "Choose Annual",
              ctaHref: "/contact?plan=annual",
              popular: true
            }
          ]}
        />

        <FAQBlock 
          faqs={[
            {
              question: "What is managed WordPress hosting?",
              answer: "Unlike standard hosting where you're left to manage everything yourself, managed WordPress hosting means we take care of the technical heavy lifting. We handle updates, security, speed optimization, and backups, ensuring your site runs smoothly at all times."
            },
            {
              question: "How is it different from normal hosting?",
              answer: "Normal hosting (like GoDaddy or Bluehost) just gives you server space. If your site breaks or gets hacked, it's your responsibility to fix it. Our managed hosting includes proactive monitoring, regular maintenance, and expert support whenever you need it."
            },
            {
              question: "Can I move my existing site?",
              answer: "Yes! We offer free site migration with our annual plan, or for a small fee on the monthly plan. We handle the entire transfer process to ensure zero downtime."
            },
            {
              question: "What if I need changes to my site?",
              answer: "Both plans include simple content update requests. Just email us what needs changing (like text, images, or business hours) and we'll take care of it for you."
            },
            {
              question: "Is there a setup fee?",
              answer: "There are no setup fees for new websites built by us. If we're migrating an existing site on a monthly plan, there may be a one-off migration fee. Annual plans include free migration."
            }
          ]}
        />

        <CTABanner 
          title="Ready for hassle-free hosting?"
          description="Join businesses across Shropshire and the UK who trust UX Sites to keep their websites secure, fast, and online."
          buttonText="Sign Up Now"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
