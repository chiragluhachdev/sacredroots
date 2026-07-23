"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Share2, Bookmark } from 'lucide-react';
import { TempleIcon } from '@/components/icons/TempleIcons';

interface TempleHeroProps {
  data: any;
}

export function TempleHero({ data }: TempleHeroProps) {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[500px] flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.heroImage} 
          alt={data.name}
          className="w-full h-full object-cover"
        />
        {/* Deep elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A14]/90 via-[#0A1A14]/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 pb-12 md:pb-16">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] text-white/70 font-medium mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/temples" className="hover:text-white transition-colors">Temples</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#D4A24C]">{data.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-[#D4A24C] text-[#0A1A14] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                {data.deity}
              </div>
              <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#D4A24C]" />
                {data.district}, {data.state}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] drop-shadow-lg">
              {data.name}
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 shrink-0">
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4A24C] text-white transition-colors backdrop-blur-md border border-white/20 hover:border-[#D4A24C]">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4A24C] text-white transition-colors backdrop-blur-md border border-white/20 hover:border-[#D4A24C]">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
