"use client";

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface TempleLocationProps {
  location: any;
  name: string;
}

export function TempleLocation({ location, name }: TempleLocationProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-4 h-4 text-[#D4A24C]" />
        <span className="text-[#D4A24C] text-[11px] font-bold tracking-[0.2em] uppercase">Location</span>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#111827] mb-6">Getting There</h2>
          <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
            {location.address}
          </p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + location.address)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E1D3] text-[#0B4D3B] px-6 py-3 rounded-full font-semibold hover:bg-[#FAF9F6] transition-colors w-max shadow-sm"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
        
        <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-lg bg-gray-100 relative">
          <iframe 
            src={location.mapEmbedUrl} 
            className="absolute inset-0 w-full h-full border-0" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
