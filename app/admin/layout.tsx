"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Map, 
  Image as ImageIcon, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Don't apply admin layout to the login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    // We would call a logout API here that clears the cookie
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Temples', href: '/admin/temples', icon: Map },
    { name: 'Site Content', href: '/admin/content', icon: ImageIcon },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F3F4F6] font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A1A14] text-white flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
          <Link href="/admin" className="font-serif text-xl font-bold tracking-wide">
            ISR Admin
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-[#D4A24C] text-[#0A1A14] font-semibold' : 'text-[#A3B3AA] hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-white/10 shrink-0">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#A3B3AA] hover:bg-white/5 hover:text-white transition-colors w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center text-sm text-gray-500 font-medium">
            <span>Admin</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 capitalize">
              {pathname === '/admin' ? 'Dashboard' : pathname.split('/').pop()}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="text-sm font-medium text-[#0B4D3B] hover:underline">
              View Live Site
            </Link>
            <div className="w-8 h-8 rounded-full bg-[#D4A24C] flex items-center justify-center text-[#0A1A14] font-bold text-sm">
              A
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </main>
      
    </div>
  );
}
