"use client";

import React, { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Landmark, MapPin } from 'lucide-react';
import { IndiaMap } from './IndiaMap';
import { StateHoverCard } from './StateHoverCard';
import { statesData } from '@/lib/data/states';
import { TempleIcon } from '@/components/icons/TempleIcons';

export function ExploreIndiaSection() {
  const [activeStateId, setActiveStateId] = useState<string>('in-tn'); // Default Tamil Nadu
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handleStateHover = useCallback((id: string) => {
    if (statesData[id]) {
      setActiveStateId(id);
    }
  }, []);

  const activeStateData = statesData[activeStateId] || statesData['in-tn'];

  return (
    <div className="relative">
      {/* Soft Vignette Overlay around the entire section */}
      <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_150px_rgba(250,249,246,0.8)] mix-blend-overlay"></div>
      
      <section className="bg-[#FAF9F6] w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
        
        {/* Subtle Compass in Top Right */}
      <div className="absolute top-20 right-16 md:top-28 md:right-32 lg:top-40 lg:right-40 xl:right-56 opacity-20 pointer-events-none hidden sm:block z-0">

        <Compass className="w-16 h-16 md:w-20 md:h-20 text-[#D4A24C] animate-[spin_240s_linear_infinite]" strokeWidth={0.5} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[#D4A24C] text-[8px] md:text-[10px] font-bold tracking-widest">N</div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-12 items-center lg:items-start">
          
          {/* LEFT SIDE: Content */}
          <div className="w-full lg:w-[42%] xl:w-[38%] flex flex-col justify-center">
            
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <TempleIcon name="shakti-peethas" className="h-4 w-4 text-[#D4A24C]" />
              <span className="text-[#D4A24C] text-sm font-bold tracking-[0.2em] uppercase">
                Explore India
              </span>
              <div className="h-[1px] w-12 bg-[#D4A24C]/40"></div>
            </div>
            
            {/* Heading */}
            <h2 className="font-heading text-5xl lg:text-[64px] font-bold text-[#111827] leading-[1.08] mb-6">
              Explore Temples <br className="hidden lg:block" />
              <span className="text-[#0B4D3B]">Across India</span>
            </h2>
            
            {/* Description */}
            <p className="font-sans text-lg text-[#4B5563] max-w-[500px] mb-10">
              From the Himalayas to Kanyakumari, discover sacred temples, ancient traditions, and timeless heritage across every state and union territory.
            </p>
            
            {/* Decorative Cross Divider */}
            <div className="flex items-center gap-4 mb-10 opacity-70">
              <div className="h-[1px] w-20 bg-[#D4A24C]/40"></div>
              <div className="relative flex items-center justify-center h-4 w-4">
                <div className="absolute h-full w-[1px] bg-[#D4A24C]"></div>
                <div className="absolute w-full h-[1px] bg-[#D4A24C]"></div>
                <div className="absolute h-2 w-2 rotate-45 bg-[#FAF9F6] border border-[#D4A24C]"></div>
              </div>
              <div className="h-[1px] w-20 bg-[#D4A24C]/40"></div>
            </div>

            {/* Statistics */}
            <div className="flex items-start gap-12 md:gap-20 mb-10">
              <div className="flex flex-col items-center text-center">
                <Landmark className="h-7 w-7 text-[#0B4D3B] mb-3" strokeWidth={1.5} />
                <div className="font-heading text-4xl md:text-[44px] font-medium text-[#111827] mb-2 leading-none">28</div>
                <div className="text-[13px] font-medium tracking-wide text-[#6B7280]">States & UTs</div>
              </div>
              <div className="h-24 w-[1px] bg-[#D4A24C]/20 mt-1"></div>
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-7 w-7 text-[#0B4D3B] mb-3" strokeWidth={1.5} />
                <div className="font-heading text-4xl md:text-[44px] font-medium text-[#111827] mb-2 leading-none">50,000+</div>
                <div className="text-[13px] font-medium tracking-wide text-[#6B7280]">Temples</div>
              </div>
            </div>

            {/* Helper Card */}
            <div className="bg-[#F4F0E6] rounded-2xl p-6 border border-[#E8E1D3] flex items-center gap-6 max-w-[450px]">
              <div className="h-[52px] w-[52px] rounded-full bg-[#0B4D3B] flex items-center justify-center shrink-0 border-[3px] border-[#0B4D3B] shadow-inner relative">
                <div className="absolute inset-1 border border-dashed border-white/30 rounded-full"></div>
                <Compass className="h-6 w-6 text-[#D4A24C]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-semibold text-[#0B4D3B] text-[15px] mb-1">Discover Your State</h4>
                <p className="text-[13px] text-[#4B5563] leading-[1.6]">
                  Hover over or select a state on the map to explore its sacred temples.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Map & Card */}
          <div className="w-full lg:w-[62%] flex flex-col md:flex-row items-center justify-center gap-4 relative min-h-[450px] md:min-h-[600px] lg:min-h-[700px]">

            <div className="w-full md:w-[60%] lg:w-[65%] shrink-0 z-20">
              <IndiaMap activeStateId={activeStateId} onStateHover={handleStateHover} cardRef={cardContainerRef} />
            </div>
            
            <div ref={cardContainerRef} className="w-full sm:w-auto md:w-[40%] lg:w-[35%] z-30 flex justify-end absolute right-0 lg:-right-4 xl:right-4 top-[75%] -translate-y-1/2 pointer-events-none">
              <div className="pointer-events-auto">
                <StateHoverCard stateData={activeStateData} /> 
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="mt-10 lg:mt-12 w-full flex justify-center relative z-20">
          <div className="w-full bg-[#F0EBE1]/60 border border-[#ECE8DF] rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#D4A24C]/20 flex items-center justify-center shrink-0">
                <TempleIcon name="sun-temples" className="h-5 w-5 md:h-6 md:w-6 text-[#D4A24C]" />
              </div>
              <div>
                <p className="text-[13px] md:text-[15px] text-[#4B5563]">Each state has a unique spiritual story.</p>
                <p className="text-[13px] md:text-[15px] font-medium text-[#111827]">Explore. Learn. Experience.</p>
              </div>
            </div>
            <Link 
              href="/states" 
              className="group flex items-center gap-2 text-[#0B4D3B] font-semibold text-[14px] md:text-[16px] border-b border-dashed border-[#0B4D3B]/40 pb-1 hover:border-[#0B4D3B] transition-colors"
            >
              Explore All States & UTs
              <ArrowRight className="h-4 w-4 transition-transform duration-250 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
