import React from 'react';
import type { CategoryId } from '@/lib/data/categories';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: CategoryId | 'mandala';
}

export function TempleIcon({ name, className, ...props }: IconProps) {
  switch (name) {
    case 'mandala':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* A highly intricate, faint mandala background pattern */}
          <path d="M50 0C50 20 70 30 100 50C70 70 50 80 50 100C50 80 30 70 0 50C30 30 50 20 50 0Z" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          <path d="M15 15C35 15 45 35 50 50C45 35 35 15 15 15Z" stroke="currentColor" strokeWidth="0.5" />
          <path d="M85 15C65 15 55 35 50 50C55 35 65 15 85 15Z" stroke="currentColor" strokeWidth="0.5" />
          <path d="M15 85C35 85 45 65 50 50C45 65 35 85 15 85Z" stroke="currentColor" strokeWidth="0.5" />
          <path d="M85 85C65 85 55 65 50 50C55 65 65 85 85 85Z" stroke="currentColor" strokeWidth="0.5" />
          
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          
          {[...Array(12)].map((_, i) => (
            <path key={i} d={`M50 20 L55 10 L50 0 L45 10 Z`} fill="currentColor" opacity="0.5" transform={`rotate(${i * 30} 50 50)`} />
          ))}
          {[...Array(24)].map((_, i) => (
            <path key={i} d={`M50 15 L52 12 L50 9 L48 12 Z`} fill="currentColor" opacity="0.3" transform={`rotate(${i * 15} 50 50)`} />
          ))}
        </svg>
      );
      
    case 'jyotirlingas':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Shivling */}
          <path d="M6 16C6 16 4 16 4 18C4 20 6 20 6 20H18C18 20 20 20 20 18C20 16 18 16 18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 20V22M8 20V22M16 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Tripundra lines */}
          <line x1="10" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
      
    case 'shakti-peethas':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Lotus / Sri Yantra */}
          <path d="M12 22C12 22 7 18 7 12C7 8.5 9.5 6 12 4C14.5 6 17 8.5 17 12C17 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22C12 22 2 16 2 10C2 7 4.5 5 7 5C8.5 5 10.5 7 12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22C12 22 22 16 22 10C22 7 19.5 5 17 5C15.5 5 13.5 7 12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Inner Triangle */}
          <polygon points="12,11 9.5,15 14.5,15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
      
    case 'vaishnav-temples':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Shankh (Conch) / Tilak */}
          <path d="M12 3C8.5 3 6 6 6 10C6 14.5 12 21 12 21C12 21 18 14.5 18 10C18 6 15.5 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 14V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
      
    case 'shiva-temples':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Trishul */}
          <path d="M12 22V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 6L15 2H9L12 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 12L6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 12L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Small damaru */}
          <path d="M10 14L14 18M14 14L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
      
    case 'ganesha-temples':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Ganesha Outline */}
          <path d="M12 10C10 10 8 11.5 8 13.5C8 16 11 17 11 19C11 20 12.5 21 14 21C15 21 16 20 16 19M16 19V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 12C5.5 12 4 10 4 8C4 5 7 4 9 4C10 4 11 4.5 12 5.5C13 4.5 14 4 15 4C17 4 20 5 20 8C20 10 18.5 12 16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 10C9 10 8 7 12 7C16 7 15 10 15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Ears */}
          <path d="M4 8C2 8 1 10 1 12C1 14 3 15 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 8C22 8 23 10 23 12C23 14 21 15 19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
      
    case 'devi-temples':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Devi / Crown Outline */}
          <path d="M12 21C15.866 21 19 17.866 19 14C19 11 17 9 17 9C17 9 16 13 12 13C8 13 7 9 7 9C7 9 5 11 5 14C5 17.866 8.13401 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 11L7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 11L17 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Bindi */}
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      );
      
    case 'sun-temples':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Sun Motif */}
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.92896 4.92896L6.34317 6.34317" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17.6569 17.6569L19.0711 19.0711" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.92896 19.0711L6.34317 17.6569" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17.6569 6.34317L19.0711 4.92896" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Inner details */}
          <path d="M10 11.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 11.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11.5 14.5C11.5 14.5 12 15 12.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
      
    case 'murugan-temples':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          {/* Vel (Spear) */}
          <path d="M12 22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 2L15 10H9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 10C10 10 8 11.5 8 14C8 16 12 18 12 18C12 18 16 16 16 14C16 11.5 14 10 12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Crossbar */}
          <path d="M9 14H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
      
    default:
      return null;
  }
}
