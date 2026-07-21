import React from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data/categories';
import { CategoryCard } from './CategoryCard';
import { ArrowRight } from 'lucide-react';
import { TempleIcon } from '@/components/icons/TempleIcons';

export function CategorySection() {
  return (
    <section className="bg-[#FAF9F6] w-full pt-8 pb-10 md:pt-10 md:pb-12 relative">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#D4A24C]/40"></div>
            <div className="flex flex-col items-center gap-1.5">
              <TempleIcon name="shakti-peethas" className="h-4 w-4 text-[#D4A24C]" />
              <span className="text-[#D4A24C] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                Explore by Category
              </span>
            </div>
            <div className="h-[1px] w-8 md:w-12 bg-[#D4A24C]/40"></div>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#111827] leading-tight mb-4">
            Explore by Category
          </h2>
          
          <p className="font-sans text-base md:text-[17px] lg:text-lg text-[#6B7280] max-w-[500px] mx-auto leading-relaxed">
            Discover temples, traditions, and sacred destinations across India's rich spiritual heritage.
          </p>
        </div>
        
        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              className={index >= 4 ? "hidden sm:flex" : "flex"} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <Link 
            href="/temples" 
            className="group inline-flex items-center text-[#0B4D3B] font-medium text-[15px] md:text-base relative pb-1"
          >
            Browse All Categories 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0B4D3B] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
