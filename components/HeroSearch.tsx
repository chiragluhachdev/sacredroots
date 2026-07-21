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
    <form onSubmit={handleSearch} className="mt-8 md:mt-10 w-full max-w-2xl relative shadow-2xl rounded-full">
      <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
        <Search className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-gray-600" />
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
        className="block w-full pl-10 sm:pl-12 pr-8 py-3 sm:py-3.5 text-sm sm:text-[15px] rounded-full border border-transparent bg-[#EBE9E0] text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none scroll-mt-32 placeholder:text-gray-500 shadow-inner"
        placeholder="Search by temple, deity, city, or state..."
      />
      <button type="submit" className="absolute inset-y-1.5 right-1.5 px-3.5 sm:px-8 bg-[#0B4D3B] hover:bg-[#0B4D3B]/90 text-white text-xs sm:text-sm font-medium rounded-full transition-colors flex items-center justify-center">
        Search
      </button>
    </form>
  );
}
