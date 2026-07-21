"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ArrowRight, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "All Temples", href: "/temples" },
    { name: "Jyotirlingas", href: "/temples?category=Jyotirlinga" },
    { name: "Char Dham", href: "/temples?category=Char Dham" },
    { name: "South India", href: "/temples?state=Tamil Nadu" },
    { name: "States", href: "/temples", hasDropdown: true },
    { name: "Deities", href: "/temples", hasDropdown: true },
  ];

  return (
    <nav className={`w-full z-50 transition-colors duration-300 ${isHome ? 'absolute top-0 bg-transparent border-none' : 'sticky top-0 bg-background/90 backdrop-blur-md border-b border-border'}`}>
      <div className="relative flex h-16 sm:h-18 w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        
        {/* Left Side: Logo — compact circular emblem + wordmark */}
        <div className="flex items-center">
          <Link href="/" aria-label="Sacred Roots — home" className="flex items-center gap-1.5 transition-opacity hover:opacity-90">
            <span className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full bg-[#FBF8F2] ring-1 ring-black/10 shadow-sm">
              <Image
                src="/chirag.png"
                alt="Sacred Roots"
                fill
                sizes="52px"
                preload
                className="object-contain p-0.36"
              />
            </span>
            <span className={`font-heading text-2xl sm:text-2xl font-medium ${isHome ? 'text-white' : 'text-primary'}`}>Sacred Roots</span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`flex items-center gap-1 text-sm font-medium transition-colors ${isHome ? 'text-white/90 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}>
              {link.name}
              {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
            </Link>
          ))}
        </div>

        {/* Right Side: Search & Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Desktop Search Toggle */}
          <div className="hidden md:flex items-center">
            <Link href="/#hero-search">
              <Button variant="ghost" size="icon" className={`rounded-full h-10 w-10 ${isHome ? 'text-white hover:bg-white/10' : 'text-muted-foreground hover:text-primary hover:bg-secondary'}`}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search Temples</span>
              </Button>
            </Link>
            
            <Link href="/temples" className="ml-6">
              <Button className="rounded-full bg-[#0B4D3B] text-white hover:bg-[#0B4D3B]/90 font-medium px-6 py-5 text-sm h-10 shadow-lg">
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Search Icon (goes to list page) */}
          <Link href="/#hero-search" className="md:hidden">
            <Button variant="ghost" size="icon" className={`rounded-full ${isHome ? 'text-white' : 'text-muted-foreground'}`}>
              <Search className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger className={`lg:hidden p-2 rounded-full transition-colors focus:outline-none ${isHome ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-secondary'}`}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 flex flex-col border-border bg-background">
              <div className="p-6 border-b border-border">
                <SheetTitle className="flex items-center gap-2.5">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#FBF8F2] ring-1 ring-black/10">
                    <Image
                      src="/chirag.png"
                      alt="Sacred Roots"
                      fill
                      sizes="40px"
                      className="object-contain p-0.36"
                    />
                  </span>
                  <span className="font-heading text-xl font-semibold text-primary">Sacred Roots</span>
                </SheetTitle>
              </div>
              
              <div className="flex flex-col py-6 px-6 gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-heading font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto p-6 border-t border-border bg-secondary/50">
                <Link href="/temples" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base">
                    Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
}
