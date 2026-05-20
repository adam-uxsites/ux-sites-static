import { SEO } from "@/components/seo/SEO";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { CTABanner } from "@/components/blocks/CTABanner";

export default function WebsiteSupport() {
  return (
    <>
      <SEO 
        title="Website Support & Care Plans | UX Sites Shropshire" 
        description="Expert WordPress website support and care plans for businesses. Keeping your site secure, updated, and performing optimally."
      />
      <main>
        <HeroBlock 
          headline="Website Support & Care"
          subheadline="Don't let your website become a liability. Our care plans ensure your site remains secure, fast, and up-to-date while you focus on running your business."
          primaryCta={{ text: "Discuss Support Plans", href: "/contact" }}
          chips={["Security Scans", "Plugin Updates", "Uptime Monitoring"]}
        />

        <BenefitsGrid 
          title="What our support covers"
          benefits={[
            { title: "Core & Plugin Updates", description: "Safe, tested updates for WordPress core, themes, and plugins to prevent vulnerabilities." },
            { title: "Daily Cloud Backups", description: "Automated off-site backups ensure we can always restore your site if the worst happens." },
            { title: "24/7 Security Monitoring", description: "Active scanning for malware, brute force attacks, and unauthorized changes." },
            { title: "Uptime Monitoring", description: "We monitor your site every minute to ensure it's always accessible to your customers." },
            { title: "Performance Scans", description: "Regular speed tests to ensure your site continues to load quickly and convert visitors." },
            { title: "Expert Troubleshooting", description: "When things go wrong, you have a direct line to a WordPress expert, not a generic call center." }
          ]}
        />

        <CTABanner 
          title="Need peace of mind?"
          description="Protect your digital investment with professional WordPress support from a local Shropshire expert."
          buttonText="Get Protected"
          buttonHref="/contact"
        />
      </main>
    </>
  );
}
