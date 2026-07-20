"use client";

import { useState, useMemo } from "react";
import { temples } from "@/lib/data/temples";
import { TempleCard } from "@/components/TempleCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function TemplesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Extract unique states and categories for filters
  const states = ["All", ...Array.from(new Set(temples.map((t) => t.state))).sort()];
  const categories = ["All", ...Array.from(new Set(temples.map((t) => t.category))).sort()];

  // Filter temples based on search and selected filters
  const filteredTemples = useMemo(() => {
    return temples.filter((temple) => {
      const matchesSearch = 
        temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.mainDeity.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesState = selectedState === "All" || temple.state === selectedState;
      const matchesCategory = selectedCategory === "All" || temple.category === selectedCategory;

      return matchesSearch && matchesState && matchesCategory;
    });
  }, [searchQuery, selectedState, selectedCategory]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-secondary">
      {/* Page Header */}
      <div className="bg-background border-b border-border py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Explore Temples</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Discover the rich heritage and spiritual significance of temples across the Indian subcontinent.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar (Desktop) */}
          <aside className={`lg:w-1/4 flex-shrink-0 ${isFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-28 space-y-8 bg-background p-6 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center justify-between lg:hidden">
                <h3 className="font-heading font-semibold text-lg">Filters</h3>
                <button onClick={() => setIsFiltersOpen(false)}>
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* State Filter */}
              <div>
                <h3 className="font-medium text-foreground mb-4">State</h3>
                <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {states.map((state) => (
                    <label key={state} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="state" 
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                        checked={selectedState === state}
                        onChange={() => setSelectedState(state)}
                      />
                      <span className={`text-sm ${selectedState === state ? 'text-primary font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {state}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-medium text-foreground mb-4">Category</h3>
                <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category" 
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                      />
                      <span className={`text-sm ${selectedCategory === category ? 'text-primary font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col gap-8">
            
            {/* Search and Mobile Filter Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-background p-2 rounded-full border border-border shadow-sm">
              <div className="relative w-full flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={(e) => {
                    setTimeout(() => {
                      e.target.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 300);
                  }}
                  className="block w-full pl-12 pr-4 py-3 rounded-full bg-transparent border-none focus:ring-0 text-foreground placeholder:text-muted-foreground outline-none scroll-mt-24" 
                  placeholder="Search temples, deities, or cities..."
                />
              </div>
              <button 
                onClick={() => setIsFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors w-full sm:w-auto justify-center"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm font-medium">
                Showing <span className="text-foreground">{filteredTemples.length}</span> temples
              </p>
            </div>

            {/* Grid */}
            {filteredTemples.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTemples.map((temple) => (
                  <TempleCard key={temple.id} temple={temple} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-background rounded-2xl border border-border border-dashed">
                <Search className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground">No temples found</h3>
                <p className="text-muted-foreground mt-2 max-w-md">
                  We couldn't find any temples matching your current search and filter criteria. Try adjusting them.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedState("All");
                    setSelectedCategory("All");
                  }}
                  className="mt-6 px-6 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-full font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
