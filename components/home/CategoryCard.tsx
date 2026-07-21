import React from 'react';
import Link from 'next/link';
import { type Category } from '@/lib/data/categories';
import { TempleIcon } from '@/components/icons/TempleIcons';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className = "" }: CategoryCardProps) {
  return (
    <Link 
      href={`/temples?category=${category.slug}`} 
      className={`group flex flex-col items-center text-center bg-white rounded-2xl p-4 sm:p-6 lg:p-7 border border-[#ECE8DF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-[#0B4D3B] transition-all duration-300 cursor-pointer relative overflow-hidden ${className}`}
    >
      <div className="relative h-14 w-14 sm:h-[72px] sm:w-[72px] bg-[#0B4D3B] rounded-full flex items-center justify-center mb-3 sm:mb-4">
        {/* Faint mandala background */}
        <TempleIcon 
          name="mandala" 
          className="absolute inset-0 w-full h-full text-[#D4A24C] opacity-5 transition-transform duration-500 group-hover:rotate-12"
        />
        {/* Foreground icon */}
        <TempleIcon 
          name={category.icon} 
          className="h-6 w-6 sm:h-8 sm:w-8 text-[#D4A24C] relative z-10 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="font-heading text-lg sm:text-[26px] lg:text-[28px] font-semibold text-[#111827] mb-0 sm:mb-2 leading-snug">
        {category.title}
      </h3>
      
      <div className="hidden sm:block mt-auto">
        <p className="font-sans text-[14px] lg:text-[15px] leading-[1.6] text-[#6B7280] mb-0 line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
