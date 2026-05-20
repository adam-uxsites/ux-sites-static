import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";

export default function NewWebsite() {
  return (
    <>
      <SEO 
        title="New Website Design | UX Sites Shropshire" 
        description="Custom-designed, high-performance websites built to convert visitors into customers. Data-driven web design in Shropshire."
      />
      <main>
        <HeroBlock 
          headline="Precision-Built New Websites"
          subheadline="We build data-driven, conversion-focused websites for small and medium businesses. No templates, no guesswork — just proven results tailored to your brand."
          primaryCta={{ text: "Start Your Project", href: "/contact" }}
          chips={["Bespoke Design", "SEO Optimized", "Mobile First"]}
        />

        <BenefitsGrid 
          title="Our Design Process"
          benefits={[
            { title: "Discovery & Strategy", description: "We learn about your business, audience, and goals to build a strategy that drives results." },
            { title: "UX & Prototyping", description: "Creating wireframes and user journeys to ensure optimal flow and conversion rates." },
            { title: "Bespoke Visual Design", description: "Crafting a unique, modern aesthetic that elevates your brand and builds trust." },
            { title: "Development", description: "Clean, efficient coding on WordPress, prioritizing speed and accessibility." },
            { title: "Testing & QA", description: "Rigorous testing across devices, browsers, and screen sizes for a flawless experience." },
            { title: "Launch & Training", description: "Smooth deployment and training so you feel confident managing your new asset." }
          ]}
        />

        <CTABanner 
          title="Let's build something remarkable"
          description="Partner with a Google UX Certified expert to create a website that actually works for your business."
          buttonText="Request a Quote"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
