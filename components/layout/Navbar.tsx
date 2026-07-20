"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Leaf, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "All Temples", href: "/temples" },
    { name: "Jyotirlingas", href: "/temples?category=Jyotirlinga" },
    { name: "Char Dham", href: "/temples?category=Char Dham" },
    { name: "South India", href: "/temples?state=Tamil Nadu" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto relative flex h-20 items-center justify-between px-4 md:px-8">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-heading text-2xl font-semibold text-primary">Sacred Roots</span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Search & Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Desktop Search Toggle */}
          <div className="hidden md:flex items-center">
            <Link href="/#hero-search">
              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary hover:bg-secondary">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search Temples</span>
              </Button>
            </Link>
            
            <Link href="/temples" className="ml-4">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6">
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Search Icon (goes to list page) */}
          <Link href="/#hero-search" className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
              <Search className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger className="lg:hidden p-2 rounded-full text-foreground hover:bg-secondary transition-colors focus:outline-none">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 flex flex-col border-border bg-background">
              <div className="p-6 border-b border-border">
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Leaf className="h-4 w-4" />
                  </div>
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
