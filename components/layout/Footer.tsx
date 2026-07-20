import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="font-heading text-xl font-semibold text-primary">Sacred Roots</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The definitive digital encyclopedia for discovering and experiencing India's ancient temple heritage.
            </p>
          </div>
          
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-foreground text-lg">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link href="/temples" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Temples</Link>
              <Link href="/temples?state=Tamil Nadu" className="text-sm text-muted-foreground hover:text-primary transition-colors">South India</Link>
              <Link href="/temples?category=Jyotirlinga" className="text-sm text-muted-foreground hover:text-primary transition-colors">Jyotirlingas</Link>
              <Link href="/temples?category=Char Dham" className="text-sm text-muted-foreground hover:text-primary transition-colors">Char Dham</Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-foreground text-lg">Resources</h4>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Festivals</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pilgrimage Planner</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-foreground text-lg">Connect</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join our newsletter to receive updates on ancient traditions and modern discoveries.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sacred Roots. Preserving heritage.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
