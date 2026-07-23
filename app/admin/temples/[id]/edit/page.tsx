import React from 'react';
import { TempleForm } from '@/components/admin/TempleForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import connectToDatabase from '@/lib/db/connect';
import Temple from '@/lib/db/models/Temple';
import { notFound } from 'next/navigation';

export default async function EditTemplePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  await connectToDatabase();
  
  const temple = await Temple.findById(params.id).lean();
  
  if (!temple) {
    notFound();
  }

  // Convert MongoDB ObjectId to string before passing to client component
  const safeTemple = JSON.parse(JSON.stringify(temple));

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/temples" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-4">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Temples
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Temple</h1>
        <p className="text-gray-500 mt-2">Updating: <span className="font-semibold">{safeTemple.name}</span></p>
      </div>
      
      <TempleForm initialData={safeTemple} templeId={params.id} />
    </div>
  );
}
