"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/temples`);
    } else {
      router.push(`/temples`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mt-8 md:mt-12 w-full max-w-2xl relative shadow-2xl rounded-full">
      <div className="absolute inset-y-0 left-0 pl-4 md:pl-6 flex items-center pointer-events-none">
        <Search className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
      </div>
      <input 
        id="hero-search"
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={(e) => {
          // Add a small delay to allow the keyboard to open before scrolling
          setTimeout(() => {
            e.target.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 300);
        }}
        className="block w-full pl-12 md:pl-16 pr-8 py-3.5 md:py-6 text-base md:text-lg rounded-full border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none scroll-mt-32" 
        placeholder="Search temples..."
      />
      <button type="submit" className="absolute inset-y-1.5 md:inset-y-2 right-1.5 md:right-2 px-5 md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base font-medium rounded-full transition-colors flex items-center justify-center">
        Search
      </button>
    </form>
  );
}
