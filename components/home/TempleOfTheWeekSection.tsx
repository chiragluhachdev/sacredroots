"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Landmark, Calendar, User, Mountain } from 'lucide-react';
import { templeOfTheWeek } from '@/lib/data/home';
import { TempleIcon } from '@/components/icons/TempleIcons';

export function TempleOfTheWeekSection() {
  return (
    <section className="bg-[#FAF9F6] w-full py-20 md:py-32 relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <TempleIcon name="shiva-temples" className="h-4 w-4 text-[#D4A24C]" />
            <span className="text-[#D4A24C] text-sm font-bold tracking-[0.2em] uppercase">
              Temple of the Week
            </span>
            <div className="h-[1px] w-12 bg-[#D4A24C]/40"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111827] leading-[1.1]">
            Experience the Divine at <br className="hidden md:block" />
            <span className="text-[#0B4D3B]">{templeOfTheWeek.name}</span>
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 items-stretch rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#E8E1D3]">
          
          {/* Image Side (Left) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-full">
            <div className="absolute inset-0 bg-[#0B4D3B]/20 mix-blend-overlay z-10"></div>
            <img 
              src={templeOfTheWeek.imageUrl} 
              alt={templeOfTheWeek.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Quick Tag */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
              <MapPin className="w-4 h-4 text-[#D4A24C]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#0B4D3B]">
                {templeOfTheWeek.state}
              </span>
            </div>
          </div>

          {/* Content Side (Right) */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#0B4D3B" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl text-[#111827] mb-6">
                A Spiritual Journey to the Himalayas
              </h3>
              
              <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                {templeOfTheWeek.overview}
              </p>

              {/* Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10 pb-10 border-b border-[#E8E1D3]">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#8C8273] uppercase">Deity</span>
                  <div className="flex items-center gap-2 text-[#111827] font-medium">
                    <TempleIcon name="shiva-temples" className="w-4 h-4 text-[#D4A24C]" />
                    {templeOfTheWeek.facts.deity}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#8C8273] uppercase">Architecture</span>
                  <div className="flex items-center gap-2 text-[#111827] font-medium">
                    <Landmark className="w-4 h-4 text-[#D4A24C]" />
                    {templeOfTheWeek.facts.architecture}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#8C8273] uppercase">Built By</span>
                  <div className="flex items-center gap-2 text-[#111827] font-medium">
                    <User className="w-4 h-4 text-[#D4A24C]" />
                    {templeOfTheWeek.facts.builtBy}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#8C8273] uppercase">Era</span>
                  <div className="flex items-center gap-2 text-[#111827] font-medium">
                    <Calendar className="w-4 h-4 text-[#D4A24C]" />
                    {templeOfTheWeek.facts.era}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#8C8273] uppercase">Elevation</span>
                  <div className="flex items-center gap-2 text-[#111827] font-medium">
                    <Mountain className="w-4 h-4 text-[#D4A24C]" />
                    {templeOfTheWeek.facts.elevation}
                  </div>
                </div>
              </div>

              {/* History Snippet */}
              <div className="mb-10">
                <span className="text-[11px] font-bold tracking-widest text-[#8C8273] uppercase block mb-3">Sacred History</span>
                <p className="text-[#6B7280] italic font-serif leading-relaxed">
                  "{templeOfTheWeek.history}"
                </p>
              </div>

              {/* CTA */}
              <Link 
                href={`/temples/${templeOfTheWeek.slug}`}
                className="inline-flex items-center justify-center gap-3 bg-[#0B4D3B] text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-[#D4A24C] transition-all duration-300 group shadow-xl hover:shadow-[#D4A24C]/20"
              >
                <span>Explore Full Details</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
