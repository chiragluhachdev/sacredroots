import React from 'react';
import { TempleForm } from '@/components/admin/TempleForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function NewTemplePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/temples" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-4">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Temples
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Add New Temple</h1>
        <p className="text-gray-500 mt-2">Create a new premium temple listing for the platform.</p>
      </div>
      
      <TempleForm />
    </div>
  );
}
