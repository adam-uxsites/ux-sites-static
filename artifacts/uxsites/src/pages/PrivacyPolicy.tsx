import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { EmailLink } from "@/components/ui/EmailLink";
import { motion } from "framer-motion";
import { breadcrumbSchema, webPageSchema } from "@/lib/schemas";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        noindex
        title="Privacy Policy | UX Sites"
        description="UX Sites privacy policy explains how we collect, use, and protect your personal information when you use our website."
        url="https://uxsites.co.uk/privacy-policy/"
        schema={[
          webPageSchema({ name: "Privacy Policy", description: "UX Sites privacy policy explaining how we collect, use, and protect your personal data.", url: "https://uxsites.co.uk/privacy-policy/" }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Privacy Policy", url: "https://uxsites.co.uk/privacy-policy/" },
          ]),
        ]}
      />
      <main>
        <section className="pt-32 pb-16 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground mb-10">Effective Date: 14th January 2025</p>
            </motion.div>
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
              <p>This Privacy Policy describes how UX Sites ("we", "us", "our") collects, uses, and protects your personal information when you use our website uxsites.co.uk.</p>

              <Section number="1" title="Information We Collect">
                <p>When you use our website, we may collect:</p>
                <p className="font-bold mt-4">Information you provide to us via our contact/quote form:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Details of your enquiry</li>
                </ul>
                <p className="font-bold mt-4">Information collected automatically:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website</li>
                  <li>Other analytical data collected via Google Analytics 4 and Google Tag Manager</li>
                </ul>
              </Section>

              <Section number="2" title="How We Use Your Information">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Respond to your enquiry and provide a quote</li>
                  <li>Communicate with you about your request</li>
                  <li>Monitor and improve our website's performance</li>
                  <li>Analyse website usage to enhance user experience</li>
                </ul>
                <p className="mt-4">We will not sell or rent your personal information to third parties.</p>
              </Section>

              <Section number="3" title="Legal Basis for Processing">
                <p>Under the UK GDPR, our legal bases for processing your personal data are:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Consent</strong> &mdash; When you voluntarily submit your details through our contact form.</li>
                  <li><strong>Legitimate interests</strong> &mdash; To monitor and improve our website and respond to enquiries.</li>
                </ul>
              </Section>

              <Section number="4" title="Data Sharing">
                <p>We may share your data with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Service providers who assist in website hosting, analytics, and email communications (e.g., Google Analytics, WordPress hosting provider).</li>
                  <li>Authorities or regulators where required by law.</li>
                </ul>
                <p className="mt-4">We do not share your personal information for marketing purposes with third parties.</p>
              </Section>

              <Section number="5" title="Cookies and Tracking Technologies">
                <p>We use cookies and similar technologies for analytics and website performance monitoring. You can manage your cookie preferences through your browser settings.</p>
              </Section>

              <Section number="6" title="Data Retention">
                <p>We will retain your personal information for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Respond to and manage your enquiry</li>
                  <li>Comply with legal obligations</li>
                  <li>Maintain business records</li>
                </ul>
                <p className="mt-4">Contact form submissions are generally kept for up to 12 months unless required for ongoing business or legal reasons.</p>
              </Section>

              <Section number="7" title="Data Security">
                <p>We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, misuse, or alteration.</p>
              </Section>

              <Section number="8" title="Your Rights">
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw your consent (where applicable)</li>
                </ul>
                <p className="mt-4">To exercise your rights, please <EmailLink email="admin@uxsites.co.uk">contact us</EmailLink>.</p>
              </Section>

              <Section number="9" title="Third-Party Links">
                <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of these websites.</p>
              </Section>

              <Section number="10" title="Contact Us">
                <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
                <p className="mt-2">UX Sites<br />Email: <EmailLink email="admin@uxsites.co.uk" /></p>
              </Section>
            </div>
          </div>
        </section>
        <CTABanner
          title="Have a question about privacy?"
          description="If you'd like to know more about how we handle your data, get in touch and we'll be happy to explain."
          buttonText="Contact Us"
          buttonHref="/contact/"
        />
      </main>
    </>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-4">{number}. {title}</h2>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </div>
  );
}
