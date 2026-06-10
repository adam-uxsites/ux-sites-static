import { SEO } from "@/components/seo/SEO";
import { CTABanner } from "@/components/blocks/CTABanner";
import { motion } from "framer-motion";
import { breadcrumbSchema, webPageSchema } from "@/lib/schemas";

export default function TermsOfService() {
  return (
    <>
      <SEO
        noindex
        title="Terms of Service | UX Sites"
        description="UX Sites terms of service  -  clear, straightforward terms covering quotes, payments, intellectual property, and project delivery for web design and managed hosting clients."
        url="https://uxsites.co.uk/terms-of-service/"
        schema={[
          webPageSchema({ name: "Terms of Service", description: "UX Sites terms of service covering quotes, payments, intellectual property, and project delivery.", url: "https://uxsites.co.uk/terms-of-service/" }),
          breadcrumbSchema([
            { name: "Home", url: "https://uxsites.co.uk/" },
            { name: "Terms of Service", url: "https://uxsites.co.uk/terms-of-service/" },
          ]),
        ]}
      />
      <main>
        <section className="pt-32 pb-16 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
              <p className="text-muted-foreground mb-10">Effective date: 14th January 2025</p>
            </motion.div>
            <div className="space-y-8 text-muted-foreground">
              <p className="leading-relaxed">Welcome to UX Sites. By requesting a quote or working with me, you agree to the terms below. I've kept these clear and straightforward so we're both on the same page from the start.</p>

              <Section number="1" title="Who You're Working With">
                <p>UX Sites is run by me, Adam Clifton, a UK-based freelance web designer & developer.</p>
              </Section>

              <Section number="2" title="What I Do">
                <p>I design and build websites for clients. I'll help you set up your own hosting and can provide maintenance on an ad-hoc basis if needed. If you require other services such as marketing, I have a network of trusted professionals I can connect you with.</p>
              </Section>

              <Section number="3" title="Quotes & Payments">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Quotes are free and non-binding  -  they're just an outline of what I can do and the estimated cost.</li>
                  <li>If you decide to go ahead, payment terms are:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>25% upfront (non-refundable) to start work</li>
                      <li>25% upon design approval before development begins</li>
                      <li>50% on completion before the final site is handed over</li>
                    </ul>
                  </li>
                  <li>Payments can be made via the method agreed between us.</li>
                </ul>
              </Section>

              <Section number="4" title="Providing Content">
                <p>You will need to provide all text, images, and other materials beyond the structure and general outline of the website and its pages. If content isn't provided in a timely manner, the site may be delivered with placeholder text/images.</p>
              </Section>

              <Section number="5" title="Your Responsibility for Materials">
                <p>You confirm that any content, images, or files you give me:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Are owned by you, or you have permission to use them</li>
                  <li>Don't infringe anyone else's rights</li>
                  <li>If someone makes a claim about the content you have provided, you shall be liable.</li>
                </ul>
              </Section>

              <Section number="6" title="Intellectual Property & Ownership">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All design, code, and related project materials remain my property until the final payment is made.</li>
                  <li>Once you've paid in full, you get full rights to use, modify, and maintain your website as you wish.</li>
                </ul>
              </Section>

              <Section number="7" title="Warranty & Support">
                <ul className="list-disc pl-6 space-y-2">
                  <li>You get a 30-day bug fix warranty after delivery. If something doesn't work as agreed, I will fix it free of charge within that time.</li>
                  <li>This doesn't cover changes you've made, third-party updates, or new features outside the agreed project scope.</li>
                </ul>
              </Section>

              <Section number="8" title="Liability">
                <p>I can't be held responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Downtime or issues caused by your hosting provider</li>
                  <li>Loss of data</li>
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>My total liability will never be more than the amount you've paid me for the project.</li>
                </ul>
              </Section>

              <Section number="9" title="Termination">
                <p>Either of us may end the project at any time before completion.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>If you cancel:</strong> After paying the 25% deposit, I'll invoice for the work completed up to that point and deliver what has been done. The deposit is non-refundable in this case.</li>
                  <li><strong>If I cancel:</strong> You'll be refunded all amounts you've paid to date, including the 25% deposit.</li>
                </ul>
              </Section>

              <Section number="10" title="Governing Law">
                <p>These terms are governed by English law and any disputes will be handled by the courts of England and Wales.</p>
              </Section>

              <Section number="11" title="Contact">
                <p>If you have any questions about these terms, please get in touch:</p>
                <p className="mt-2">Email: admin@uxsites.co.uk</p>
              </Section>
            </div>
          </div>
        </section>
        <CTABanner
          title="Ready to get started?"
          description="If you're happy with the terms, get in touch and we'll talk about your project."
          buttonText="Get a Quote"
          buttonHref="/contact"
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
