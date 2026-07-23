"use client";

import React from 'react';
import { Clock, IndianRupee, Sun, CheckCircle2 } from 'lucide-react';
import { TempleIcon } from '@/components/icons/TempleIcons';

interface TempleOverviewProps {
  data: any;
}

export function TempleOverview({ data }: TempleOverviewProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      
      {/* Left Column: Overview & History */}
      <div className="w-full lg:w-[65%] flex flex-col gap-10">
        
        {/* Overview */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B4D3B] mb-4">About the Temple</h2>
          <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
            {data.overview}
          </p>
          
          <ul className="space-y-4">
            {data.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#D4A24C]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A24C]" />
                </div>
                <span className="text-[#111827] text-[15px] leading-relaxed font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-[#E8E1D3]" />

        {/* History */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B4D3B] mb-4">Sacred History</h2>
          <p className="text-[#4B5563] text-lg leading-relaxed font-serif italic text-justify">
            "{data.history}"
          </p>
        </section>
      </div>

      {/* Right Column: Information Cards */}
      <div className="w-full lg:w-[35%] flex flex-col gap-6 sticky top-32">
        
        {/* Quick Facts Card */}
        <div className="bg-white rounded-2xl border border-[#E8E1D3] p-6 shadow-xl shadow-[#0B4D3B]/5">
          <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#D4A24C] mb-6 flex items-center gap-2">
            <TempleIcon name="sun-temples" className="w-4 h-4" />
            Quick Facts
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center border-b border-[#F4F0E6] pb-4">
              <span className="text-[#6B7280] text-sm">Architecture</span>
              <span className="text-[#111827] font-medium text-sm text-right">{data.facts.architecture}</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#F4F0E6] pb-4">
              <span className="text-[#6B7280] text-sm">Built By</span>
              <span className="text-[#111827] font-medium text-sm text-right">{data.facts.builtBy}</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#F4F0E6] pb-4">
              <span className="text-[#6B7280] text-sm">Era</span>
              <span className="text-[#111827] font-medium text-sm text-right">{data.facts.era}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#6B7280] text-sm">Time Taken</span>
              <span className="text-[#111827] font-medium text-sm text-right">{data.facts.timeTaken}</span>
            </div>
          </div>
        </div>

        {/* Visitor Info Card */}
        <div className="bg-[#0B4D3B] text-[#FAF9F6] rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <TempleIcon name="shakti-peethas" className="w-32 h-32 text-[#D4A24C]" />
          </div>
          <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#D4A24C] mb-6 relative z-10">
            Visitor Information
          </h3>
          <div className="flex flex-col gap-5 relative z-10">
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#D4A24C] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-[#A3B3AA] uppercase tracking-wider mb-1">Darshan Timings</span>
                <span className="text-sm font-medium leading-relaxed">{data.info.timings}</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IndianRupee className="w-5 h-5 text-[#D4A24C] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-[#A3B3AA] uppercase tracking-wider mb-1">Entry Fee</span>
                <span className="text-sm font-medium leading-relaxed">{data.info.entryFee}</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-[#D4A24C] flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#D4A24C]"></div>
              </div>
              <div>
                <span className="block text-[11px] text-[#A3B3AA] uppercase tracking-wider mb-1">Dress Code</span>
                <span className="text-sm font-medium leading-relaxed">{data.info.dressCode}</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Sun className="w-5 h-5 text-[#D4A24C] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-[#A3B3AA] uppercase tracking-wider mb-1">Best Time to Visit</span>
                <span className="text-sm font-medium leading-relaxed">{data.info.bestTime}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
