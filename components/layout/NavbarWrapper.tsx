"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';

export function NavbarWrapper() {
  const pathname = usePathname();
  
  if (pathname.startsWith('/admin')) {
    return null;
  }
  
  return <Navbar />;
}
