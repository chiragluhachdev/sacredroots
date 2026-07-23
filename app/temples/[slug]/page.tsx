import React from 'react';
import { notFound } from 'next/navigation';
import connectToDatabase from '@/lib/db/connect';
import Temple from '@/lib/db/models/Temple';
import { TempleHero } from '@/components/temple/TempleHero';
import { TempleOverview } from '@/components/temple/TempleOverview';
import { TempleGallery } from '@/components/temple/TempleGallery';
import { TempleLocation } from '@/components/temple/TempleLocation';
import { RelatedTemples } from '@/components/temple/RelatedTemples';

export default async function TempleDetailsPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  await connectToDatabase();
  
  const templeDoc = await Temple.findOne({ slug: params.slug }).lean();
  
  if (!templeDoc) {
    notFound();
  }
  
  // Create a safe, serializable object
  const temple = JSON.parse(JSON.stringify(templeDoc));

  return (
    <div className="flex flex-col w-full bg-[#FAF9F6] min-h-screen">
      <TempleHero data={temple} />
      
      {/* Main Content Area */}
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 py-10 md:py-16">
        <TempleOverview data={temple} />
      </div>

      {/* Full Bleed Sections */}
      <TempleGallery images={temple.gallery} />
      
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-12 py-10 md:py-16 space-y-16">
        <TempleLocation location={temple.location} name={temple.name} />
        <RelatedTemples temples={temple.related} />
      </div>
    </div>
  );
}
