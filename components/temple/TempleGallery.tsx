"use client";

import React from 'react';
import { Camera } from 'lucide-react';

interface TempleGalleryProps {
  images: string[];
}

export function TempleGallery({ images }: TempleGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full bg-[#111827] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-4 h-4 text-[#D4A24C]" />
            <span className="text-[#D4A24C] text-[11px] font-bold tracking-[0.2em] uppercase">Visual Journey</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white">Sacred Architecture</h2>
        </div>
      </div>
      
      {/* Scrollable Gallery for simplicity, but looks premium with hidden scrollbars */}
      <div className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
        <div className="flex gap-4 md:gap-8 px-5 sm:px-8 md:px-12 w-max">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-xl shadow-2xl ${
                i % 2 === 0 ? 'w-[280px] h-[380px] md:w-[400px] md:h-[550px]' : 'w-[320px] h-[320px] md:w-[450px] md:h-[450px] mt-0 md:mt-12'
              }`}
            >
              <img 
                src={img} 
                alt={`Temple Gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
