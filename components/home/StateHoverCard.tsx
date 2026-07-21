"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Landmark } from 'lucide-react';
import { type StateData } from '@/lib/data/states';
import Link from 'next/link';

interface StateHoverCardProps {
  stateData: StateData;
}

export function StateHoverCard({ stateData }: StateHoverCardProps) {
  const [displayedData, setDisplayedData] = useState<StateData>(stateData);
  const [isFading, setIsFading] = useState(false);

  // Handle smooth fading transition between states
  useEffect(() => {
    if (stateData.id !== displayedData.id) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setDisplayedData(stateData);
        setIsFading(false);
      }, 150); // fade out half of the 250ms transition
      return () => clearTimeout(timer);
    }
  }, [stateData, displayedData.id]);

  return (
    <div className="relative bg-[#FAF9F6] p-3 sm:p-4 md:p-5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] border border-[#D4A24C]/20 w-full max-w-[260px] sm:max-w-[320px] z-30 overflow-hidden backdrop-blur-sm">
      {/* Premium Top Highlight */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4A24C] to-transparent opacity-60" />
      
      <div 
        className={`transition-opacity duration-300 ease-out flex flex-col items-center text-center h-full ${isFading ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Header */}
        <h3 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] text-[#0B4D3B] leading-tight mb-1.5">
          {displayedData.name}
        </h3>
        
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <span className="w-6 sm:w-8 h-[1px] bg-[#D4A24C]/40" />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4A24C] whitespace-nowrap">
            {displayedData.templeCount > 0 ? `${displayedData.templeCount} Temples` : 'Coming Soon'}
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-[#D4A24C]/40" />
        </div>

        {/* Featured Temple (Editorial Style) */}
        {displayedData.featuredTemple && (
          <div className="hidden sm:flex w-full pt-3 sm:pt-4 border-t border-[#D4A24C]/15 flex-col items-center mb-4 sm:mb-5">
            <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-[#8C8273] uppercase mb-1.5">Featured Shrine</span>
            <div className="flex items-center justify-center gap-2 text-[12px] sm:text-[14px] font-medium text-[#111827]">
              <span className="text-center leading-snug">{displayedData.featuredTemple}</span>
            </div>
          </div>
        )}

        {displayedData.comingSoon && !displayedData.featuredTemple && (
          <div className="hidden sm:flex w-full pt-3 sm:pt-4 border-t border-[#D4A24C]/15 flex-col items-center mb-4 sm:mb-5 text-center text-[#8C8273] text-[11px] sm:text-[13px] italic font-serif">
            Curating sacred heritage...
          </div>
        )}

        {/* Minimalist Editorial CTA */}
        <div className="mt-auto w-full">
          <Link 
            href={`/states/${displayedData.slug}`}
            className="group flex items-center justify-center w-full gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-bold text-[#0B4D3B] transition-colors duration-300 hover:text-[#D4A24C]"
          >
            <span>Begin Journey</span>
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
