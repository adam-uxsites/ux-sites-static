import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-primary text-primary-foreground rounded-lg px-2.5 py-1 font-black text-xl tracking-tighter group-hover:opacity-90 transition-opacity">UX</div>
              <span className="font-bold text-xl tracking-tight">Sites</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Managed WordPress hosting and web design for businesses in Shropshire and across the UK.
            </p>
            <div className="text-xs font-semibold text-foreground">Based in Shrewsbury, Shropshire</div>
            <a href="mailto:hello@uxsites.co.uk" className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block">
              hello@uxsites.co.uk
            </a>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-bold mb-4 text-sm">Managed Hosting</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/managed-wordpress-hosting" className="hover:text-primary transition-colors">Managed WordPress Hosting</Link></li>
              <li><Link href="/wordpress-hosting-shropshire" className="hover:text-primary transition-colors">Hosting in Shropshire</Link></li>
              <li><Link href="/wordpress-security" className="hover:text-primary transition-colors">WordPress Security</Link></li>
              <li><Link href="/wordpress-backup-recovery" className="hover:text-primary transition-colors">Backup & Recovery</Link></li>
              <li><Link href="/wordpress-maintenance" className="hover:text-primary transition-colors">WordPress Maintenance</Link></li>
            </ul>
          </div>

          {/* Web Design */}
          <div>
            <h3 className="font-bold mb-4 text-sm">Web Design</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/new-website" className="hover:text-primary transition-colors">New Websites</Link></li>
              <li><Link href="/web-design-shropshire" className="hover:text-primary transition-colors">Web Design Shropshire</Link></li>
              <li><Link href="/small-business-websites" className="hover:text-primary transition-colors">Small Business Websites</Link></li>
              <li><Link href="/existing-website" className="hover:text-primary transition-colors">Website Refreshes</Link></li>
              <li><Link href="/website-speed-optimisation" className="hover:text-primary transition-colors">Speed Optimisation</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-sm">Support</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/website-support" className="hover:text-primary transition-colors">Website Support & Care</Link></li>
              <li><Link href="/wordpress-maintenance" className="hover:text-primary transition-colors">WordPress Maintenance</Link></li>
              <li><Link href="/wordpress-security" className="hover:text-primary transition-colors">Security Monitoring</Link></li>
              <li><Link href="/work" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Guides</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CTA box */}
          <div>
            <div className="p-5 bg-background border border-border rounded-2xl">
              <div className="text-sm font-bold mb-2">Ready to start?</div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Get in touch to discuss your project — no obligation, no hard sell.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Tell us about your project
              </Link>
              <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between"><span>Managed Hosting</span><span className="text-foreground font-semibold">£50/month</span></div>
                <div className="flex justify-between"><span>Annual plan</span><span className="text-foreground font-semibold">£500/year</span></div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground gap-4">
          <p>&copy; {new Date().getFullYear()} UX Sites. All rights reserved. Based in Shrewsbury, Shropshire.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <span>10+ Years Experience</span>
            <span className="text-border hidden sm:inline">•</span>
            <span>228+ Sites Delivered</span>
            <span className="text-border hidden sm:inline">•</span>
            <span>100% Client Satisfaction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
