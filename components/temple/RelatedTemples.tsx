"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { TempleIcon } from '@/components/icons/TempleIcons';

interface RelatedTemplesProps {
  temples: any[];
}

export function RelatedTemples({ temples }: RelatedTemplesProps) {
  if (!temples || temples.length === 0) return null;

  return (
    <section className="border-t border-[#E8E1D3] pt-10 md:pt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <TempleIcon name="shakti-peethas" className="w-4 h-4 text-[#D4A24C]" />
            <span className="text-[#D4A24C] text-[11px] font-bold tracking-[0.2em] uppercase">Keep Exploring</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#111827]">Related Temples</h2>
        </div>
        <Link 
          href="/temples" 
          className="group flex items-center gap-2 text-[#0B4D3B] font-semibold text-[15px] border-b border-[#0B4D3B]/30 pb-1 hover:border-[#0B4D3B] transition-colors shrink-0"
        >
          View All Temples
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {temples.map((temple) => (
          <Link key={temple.id} href={`/temples/${temple.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8E1D3] hover:shadow-xl hover:shadow-[#0B4D3B]/5 transition-all duration-300">
            <div className="w-full h-[220px] relative overflow-hidden">
              <img 
                src={temple.imageUrl} 
                alt={temple.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 text-white/90 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#D4A24C]" />
                {temple.state}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-[#111827] group-hover:text-[#0B4D3B] transition-colors">
                {temple.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
