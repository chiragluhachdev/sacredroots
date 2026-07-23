"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { upcomingFestivals } from '@/lib/data/home';
import { TempleIcon } from '@/components/icons/TempleIcons';

export function UpcomingFestivalsSection() {
  return (
    <section className="bg-white w-full py-20 md:py-32 relative overflow-hidden border-t border-[#E8E1D3]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-4">
              <TempleIcon name="sun-temples" className="h-4 w-4 text-[#D4A24C]" />
              <span className="text-[#D4A24C] text-sm font-bold tracking-[0.2em] uppercase">
                Sacred Calendar
              </span>
              <div className="h-[1px] w-12 bg-[#D4A24C]/40"></div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
              Upcoming <span className="text-[#0B4D3B]">Festivals</span>
            </h2>
            <p className="text-[#6B7280] text-lg mt-4 font-sans">
              Experience the vibrant spirituality and deep-rooted traditions of India's most significant temple festivals.
            </p>
          </div>
          
          <Link 
            href="/festivals" 
            className="group flex items-center gap-2 text-[#0B4D3B] font-semibold text-[15px] border-b border-[#0B4D3B]/30 pb-1 hover:border-[#0B4D3B] transition-colors shrink-0"
          >
            View Full Calendar
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {upcomingFestivals.map((festival, index) => (
            <div 
              key={festival.id} 
              className="group flex flex-col bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E8E1D3] hover:shadow-xl hover:shadow-[#0B4D3B]/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full h-[240px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0B4D3B]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src={festival.imageUrl} 
                  alt={festival.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm border border-white/20">
                  <CalendarDays className="w-3.5 h-3.5 text-[#D4A24C]" />
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#111827]">
                    {festival.date}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-[#111827] mb-4 group-hover:text-[#0B4D3B] transition-colors">
                  {festival.name}
                </h3>
                
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <TempleIcon name="shakti-peethas" className="w-4 h-4 text-[#D4A24C] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#4B5563] font-medium leading-snug">
                      {festival.temples}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4A24C]" />
                    <span className="text-[13px] text-[#6B7280] font-medium">
                      {festival.state}
                    </span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-auto pt-5 border-t border-[#E8E1D3]/60 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#D4A24C]">
                    Plan Your Visit
                  </span>
                  <Link href={`/festivals/${festival.slug}`} className="w-8 h-8 rounded-full bg-[#0B4D3B]/5 flex items-center justify-center group-hover:bg-[#0B4D3B] transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-[#0B4D3B] group-hover:text-white transition-colors duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
