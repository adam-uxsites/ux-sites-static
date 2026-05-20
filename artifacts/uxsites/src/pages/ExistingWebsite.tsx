import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";

export default function ExistingWebsite() {
  return (
    <>
      <SEO 
        title="Website Refreshes & Rebuilds | UX Sites Shropshire" 
        description="Modernize your existing website with improved UX, faster load times, and better conversion rates. Expert redesigns in Shropshire."
      />
      <main>
        <HeroBlock 
          headline="Website Refreshes & Rebuilds"
          subheadline="Is your current website slow, outdated, or failing to convert? We modernize existing sites to improve performance, user experience, and search rankings."
          primaryCta={{ text: "Get a Site Audit", href: "/contact" }}
          chips={["UX Improvements", "Speed Optimization", "Replatforming"]}
        />

        <BenefitsGrid 
          title="Signs you need a refresh"
          benefits={[
            { title: "Poor Mobile Experience", description: "If your site isn't perfectly optimized for phones, you're losing over 50% of your potential customers." },
            { title: "Slow Load Times", description: "Pages that take longer than 3 seconds to load suffer massive bounce rates and lower Google rankings." },
            { title: "Low Conversion Rates", description: "Getting traffic but no leads? A UX audit and redesign can fix broken funnels." },
            { title: "Outdated Aesthetics", description: "An old-looking website damages credibility and makes prospects turn to competitors." },
            { title: "Hard to Update", description: "If you can't easily change text or add posts without breaking things, it's time for a modern setup." },
            { title: "Security Warnings", description: "Not secure warnings or frequent malware issues require a fundamental rebuild." }
          ]}
        />

        <CTABanner 
          title="Turn your liability into an asset"
          description="Let's analyze your current site and create a roadmap to turn it into a high-performing lead generator."
          buttonText="Contact Us Today"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
