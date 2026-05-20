import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-primary text-primary-foreground rounded-lg px-2.5 py-1 font-black text-xl tracking-tighter group-hover:bg-primary/90 transition-colors">UX</div>
              <span className="font-bold text-xl tracking-tight">Sites</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Precision-crafted web design and managed WordPress hosting for businesses in Shropshire and across the UK. Data-driven, conversion-focused, and built to last.
            </p>
            <div className="text-sm font-semibold text-foreground">
              Based in Shrewsbury, Shropshire
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/managed-wordpress-hosting" className="hover:text-primary transition-colors">Managed WordPress Hosting</Link></li>
              <li><Link href="/website-support" className="hover:text-primary transition-colors">Website Support</Link></li>
              <li><Link href="/new-website" className="hover:text-primary transition-colors">New Websites</Link></li>
              <li><Link href="/existing-website" className="hover:text-primary transition-colors">Website Refreshes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="mailto:hello@uxsites.co.uk" className="hover:text-primary transition-colors">hello@uxsites.co.uk</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Start a project</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UX Sites. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>10+ Years Experience</span>
            <span className="text-border">•</span>
            <span>100% Client Satisfaction</span>
            <span className="text-border">•</span>
            <span>4-6 Weeks Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
