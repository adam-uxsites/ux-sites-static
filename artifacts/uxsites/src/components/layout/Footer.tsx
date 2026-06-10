import { Link } from "wouter";
import { EmailLink } from "@/components/ui/EmailLink";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1.5 group mb-4">
              <div className="bg-primary text-primary-foreground rounded-sm px-1.5 py-0.5 font-black text-xs tracking-tighter mb-2 leading-none">UX</div>
              <span className="font-bold text-2xl tracking-tight text-foreground">Sites</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Managed WordPress hosting and web design for businesses in Shropshire and across the UK.
            </p>
            <div className="text-sm font-semibold text-foreground">Based in St. Martins, Oswestry, Shropshire</div>
            <EmailLink email="hello@uxsites.co.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 block" />
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-sm">Services</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/managed-wordpress-hosting/" className="hover:text-primary transition-colors">Managed Hosting</Link></li>
              <li><Link href="/wordpress-care-plan/" className="hover:text-primary transition-colors">WordPress Care Plan</Link></li>
              <li><Link href="/wordpress-care-plan-pro/" className="hover:text-primary transition-colors">Care Plan Pro</Link></li>
              <li><Link href="/new-website/" className="hover:text-primary transition-colors">New Websites</Link></li>
              <li><Link href="/existing-website/" className="hover:text-primary transition-colors">Website Refreshes</Link></li>
              <li><Link href="/website-support/" className="hover:text-primary transition-colors">Support & Care</Link></li>
              <li><Link href="/instant-site-quote/" className="hover:text-primary transition-colors">Instant Quote</Link></li>
            </ul>
          </div>

          {/* WordPress Help */}
          <div>
            <h3 className="font-bold mb-4 text-sm">WordPress Guides</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/wordpress-help/" className="hover:text-primary transition-colors">All Help & Advice</Link></li>
              <li><Link href="/wordpress-help/wordpress-slow/" className="hover:text-primary transition-colors">Fix a Slow Site</Link></li>
              <li><Link href="/wordpress-help/wordpress-security/" className="hover:text-primary transition-colors">Security Guide</Link></li>
              <li><Link href="/wordpress-help/wordpress-maintenance/" className="hover:text-primary transition-colors">Maintenance Checklist</Link></li>
              <li><Link href="/common-wordpress-errors/" className="hover:text-primary transition-colors">Common Errors</Link></li>
              <li><Link href="/wordpress-care-plan/" className="hover:text-primary transition-colors">Care Plan</Link></li>
            </ul>
          </div>

          {/* CTA box */}
          <div>
            <div className="p-5 bg-background border border-border rounded-2xl">
              <div className="text-sm font-bold mb-2">Ready to start?</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Get in touch to discuss your project  -  no obligation, no hard sell.
              </p>
              <Link
                href="/contact/"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Tell us about your project
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-muted-foreground gap-4">
          <p>&copy; {new Date().getFullYear()} UX Sites. All rights reserved. Based in St. Martins, Oswestry, Shropshire.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 items-center">
            <Link href="/privacy-policy/" className="hover:text-primary transition-colors">Privacy</Link>
            <span className="text-border hidden sm:inline">•</span>
            <Link href="/terms-of-service/" className="hover:text-primary transition-colors">Terms</Link>
            <span className="text-border hidden sm:inline">•</span>
            <Link href="/sitemap/" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
