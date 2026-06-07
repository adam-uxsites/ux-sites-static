import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Nav() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

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
        <DropdownMenuContent sideOffset={14} className="w-[42rem] bg-card border-border p-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2 px-2">Support &amp; Hosting</div>
              <div className="flex flex-col gap-0.5">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/managed-wordpress-hosting" className="w-full">Managed Hosting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/wordpress-care-plan" className="w-full">Site Care Plan</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/wordpress-care-plan-pro" className="w-full flex items-center gap-2">Site Care Plan <span className="text-[10px] font-bold text-black bg-green-400 rounded px-1 py-0.5 leading-none">Pro</span></Link>
                </DropdownMenuItem>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2 px-2">Website Design</div>
              <div className="flex flex-col gap-0.5">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/new-website" className="w-full">New Website</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/existing-website" className="w-full">Existing Website</Link>
                </DropdownMenuItem>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2 px-2">Analytics &amp; UX</div>
              <div className="flex flex-col gap-0.5">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/google-analytics-setup" className="w-full">Google Analytics Setup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/conversion-tracking-setup" className="w-full">Conversion Tracking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/website-ux-audit" className="w-full">Website UX Audit</Link>
                </DropdownMenuItem>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/case-studies" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/case-studies') ? 'text-primary' : 'text-foreground'}`}>
        Case Studies
      </Link>
      <Link href="/blog" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/blog') ? 'text-primary' : 'text-foreground'}`}>
        Blog
      </Link>
      <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}>
        About
      </Link>
    </>);

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
            Get in touch
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
        <div className="md:hidden border-b border-border bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link href="/managed-wordpress-hosting" className="text-base font-medium py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>Managed Hosting</Link>

          {/* Services accordion */}
          <div className="border-b border-border/50">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground"
            >
              Services
              <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-3 pb-3 animate-in slide-in-from-top-1 duration-200">
                <div>
                  <div className="text-sm font-medium text-muted-foreground/70 mb-1.5 pl-4">Support &amp; Hosting</div>
                  <div className="flex flex-col gap-1.5 pl-4">
                    <Link href="/managed-wordpress-hosting" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Managed Hosting</Link>
                    <Link href="/wordpress-care-plan" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Site Care Plan</Link>
                    <Link href="/wordpress-care-plan-pro" className="text-base font-medium inline-flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>Site Care Plan <span className="text-[10px] font-bold text-black bg-green-400 rounded px-1 py-0.5 leading-none">Pro</span></Link>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground/70 mb-1.5 pl-4">Website Design</div>
                  <div className="flex flex-col gap-1.5 pl-4">
                    <Link href="/new-website" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>New Website</Link>
                    <Link href="/existing-website" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Existing Website</Link>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground/70 mb-1.5 pl-4">Analytics &amp; UX</div>
                  <div className="flex flex-col gap-1.5 pl-4">
                    <Link href="/google-analytics-setup" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Google Analytics Setup</Link>
                    <Link href="/conversion-tracking-setup" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Conversion Tracking</Link>
                    <Link href="/website-ux-audit" className="text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Website UX Audit</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="text-base font-medium py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
          <Link href="/blog" className="text-base font-medium py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="/about" className="text-base font-medium py-2 mb-4" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-bold shadow hover:bg-primary/90" onClick={() => setIsMobileMenuOpen(false)}>
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
