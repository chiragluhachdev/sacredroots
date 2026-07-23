"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Settings } from 'lucide-react';

interface MaintenanceGateProps {
  isMaintenance: boolean;
  children: React.ReactNode;
}

export function MaintenanceGate({ isMaintenance, children }: MaintenanceGateProps) {
  const pathname = usePathname();

  // If not in maintenance mode, or if we are in the admin panel, render normally
  if (!isMaintenance || pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  // Otherwise, show maintenance screen
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1A14] text-white p-6 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="maintenancePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0,20 Q10,0 20,20 T40,20" fill="none" stroke="#D4A24C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#maintenancePattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg text-center gap-6">
        <div className="w-20 h-20 bg-[#D4A24C]/20 rounded-full flex items-center justify-center mb-4 border border-[#D4A24C]/30 animate-pulse">
          <Settings className="w-10 h-10 text-[#D4A24C]" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide">
          Under Maintenance
        </h1>
        
        <p className="text-[#A3B3AA] text-lg leading-relaxed">
          Indian Sacred Roots is currently undergoing scheduled maintenance to improve your experience. We will be back online shortly.
        </p>
        
        <div className="mt-8 border-t border-white/10 pt-8 w-full">
          <p className="text-sm text-[#A3B3AA]">
            Thank you for your patience and devotion.
          </p>
        </div>
      </div>
    </div>
  );
}
