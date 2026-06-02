import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Nav() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location === path;

  const NavLinks = () => (
    <>
      <Link href="/managed-wordpress-hosting" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/managed-wordpress-hosting') ? 'text-primary' : 'text-foreground'}`}>
        Managed Hosting
      </Link>
      
          <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-foreground outline-none">
          Services <ChevronDown size={14} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 bg-card border-border">
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/wordpress-care-plan" className="w-full">WordPress Care Plan</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/wordpress-care-plan-pro" className="w-full">Care Plan Pro</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/new-website" className="w-full">New Website</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/existing-website" className="w-full">Existing Website</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/website-support" className="w-full">Website Support</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/instant-site-quote" className="w-full">Get a Quote</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/wordpress-help" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/wordpress-help') ? 'text-primary' : 'text-foreground'}`}>
        WordPress Help
      </Link>

      <Link href="/blog" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/blog') ? 'text-primary' : 'text-foreground'}`}>
        Blog
      </Link>
      <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}>
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 group">
          <div className="bg-primary text-primary-foreground rounded-sm px-1.5 py-0.5 font-black text-xs tracking-tighter mb-2 leading-none">UX</div>
          <span className="font-bold text-2xl tracking-tight text-foreground">Sites</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow hover:bg-primary/90 transition-colors">
            Tell us about your project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <Link href="/managed-wordpress-hosting" className="text-base font-medium py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>Managed Hosting</Link>
          <div className="py-2 border-b border-border/50">
            <div className="text-base font-medium mb-2 text-muted-foreground">Services</div>
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/wordpress-care-plan" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>WordPress Care Plan</Link>
              <Link href="/wordpress-care-plan-pro" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Care Plan Pro</Link>
              <Link href="/new-website" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>New Website</Link>
              <Link href="/existing-website" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Existing Website</Link>
              <Link href="/website-support" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Website Support</Link>
              <Link href="/instant-site-quote" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
            </div>
          </div>
          <div className="py-2 border-b border-border/50">
            <div className="text-base font-medium mb-2 text-muted-foreground">WordPress Help</div>
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/wordpress-help" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>All Guides</Link>
              <Link href="/wordpress-help/wordpress-slow" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Slow WordPress Site</Link>
              <Link href="/wordpress-help/wordpress-security" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>WordPress Security</Link>
              <Link href="/wordpress-help/wordpress-maintenance" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Maintenance Checklist</Link>
            </div>
          </div>
          <Link href="/blog" className="text-base font-medium py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-base font-medium py-2 mb-4" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-bold shadow hover:bg-primary/90" onClick={() => setIsMobileMenuOpen(false)}>
            Tell us about your project
          </Link>
        </div>
      )}
    </header>
  );
}
