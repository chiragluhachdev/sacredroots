"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTemple, updateTemple } from '@/lib/actions/temples';

interface TempleFormProps {
  initialData?: any; // If provided, we are editing. Otherwise creating.
  templeId?: string;
}

export function TempleForm({ initialData, templeId }: TempleFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Flatten initial state for easy binding
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    slug: initialData?.slug || '',
    state: initialData?.state || '',
    district: initialData?.district || '',
    deity: initialData?.deity || '',
    heroImage: initialData?.heroImage || '',
    overview: initialData?.overview || '',
    history: initialData?.history || '',
    
    // Facts
    architecture: initialData?.facts?.architecture || '',
    builtBy: initialData?.facts?.builtBy || '',
    era: initialData?.facts?.era || '',
    timeTaken: initialData?.facts?.timeTaken || '',
    
    // Info
    timings: initialData?.info?.timings || '',
    entryFee: initialData?.info?.entryFee || '',
    dressCode: initialData?.info?.dressCode || '',
    bestTime: initialData?.info?.bestTime || '',
    
    // Arrays
    highlights: initialData?.highlights?.join('\n') || '',
    gallery: initialData?.gallery?.join('\n') || '',
    
    // Location
    address: initialData?.location?.address || '',
    mapEmbedUrl: initialData?.location?.mapEmbedUrl || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Transform flat state back into nested object for DB
    const dbPayload = {
      name: formData.name,
      slug: formData.slug.toLowerCase().replace(/\\s+/g, '-'), // auto slugify
      state: formData.state,
      district: formData.district,
      deity: formData.deity,
      heroImage: formData.heroImage,
      overview: formData.overview,
      history: formData.history,
      facts: {
        architecture: formData.architecture,
        builtBy: formData.builtBy,
        era: formData.era,
        timeTaken: formData.timeTaken,
      },
      info: {
        timings: formData.timings,
        entryFee: formData.entryFee,
        dressCode: formData.dressCode,
        bestTime: formData.bestTime,
      },
      location: {
        address: formData.address,
        mapEmbedUrl: formData.mapEmbedUrl,
      },
      // Split arrays by newline and trim
      highlights: formData.highlights.split('\\n').map((i: string) => i.trim()).filter((i: string) => i),
      gallery: formData.gallery.split('\\n').map((i: string) => i.trim()).filter((i: string) => i),
    };

    try {
      if (templeId) {
        const res = await updateTemple(templeId, dbPayload);
        if (res.success) {
          router.push('/admin/temples');
        } else {
          setError(res.error || 'Failed to update');
        }
      } else {
        const res = await createTemple(dbPayload);
        if (res.success) {
          router.push('/admin/temples');
        } else {
          setError(res.error || 'Failed to create');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200">
          {error}
        </div>
      )}

      {/* 1. Basic Info */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-6">1. Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Temple Name *</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug *</label>
            <input required type="text" name="slug" value={formData.slug} onChange={handleChange} placeholder="e.g. kedarnath-temple" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
            <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
            <input required type="text" name="district" value={formData.district} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Main Deity *</label>
            <input required type="text" name="deity" value={formData.deity} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image URL *</label>
            <input required type="text" name="heroImage" value={formData.heroImage} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
        </div>
      </div>

      {/* 2. Editorial Content */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-6">2. Editorial Content</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Overview (Short description) *</label>
            <textarea required name="overview" value={formData.overview} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Highlights (One per line)</label>
            <textarea name="highlights" value={formData.highlights} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" placeholder="UNESCO World Heritage Site..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Sacred History *</label>
            <textarea required name="history" value={formData.history} onChange={handleChange} rows={8} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]"></textarea>
          </div>
        </div>
      </div>

      {/* 3. Quick Facts & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-gray-900">3A. Quick Facts</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Architecture Style</label>
            <input type="text" name="architecture" value={formData.architecture} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Built By</label>
            <input type="text" name="builtBy" value={formData.builtBy} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Era</label>
            <input type="text" name="era" value={formData.era} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Taken</label>
            <input type="text" name="timeTaken" value={formData.timeTaken} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-gray-900">3B. Visitor Information</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Darshan Timings</label>
            <input type="text" name="timings" value={formData.timings} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Entry Fee</label>
            <input type="text" name="entryFee" value={formData.entryFee} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dress Code</label>
            <input type="text" name="dressCode" value={formData.dressCode} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Best Time to Visit</label>
            <input type="text" name="bestTime" value={formData.bestTime} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      {/* 4. Media & Location */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-6">4. Media & Location</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Image URLs (One per line)</label>
            <textarea name="gallery" value={formData.gallery} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" placeholder="https://..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Physical Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Google Maps Embed iframe URL</label>
            <input type="text" name="mapEmbedUrl" value={formData.mapEmbedUrl} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="https://www.google.com/maps/embed?pb=..." />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] flex justify-end gap-4 rounded-xl">
        <button 
          type="button" 
          onClick={() => router.back()}
          className="px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={loading}
          className="px-8 py-2.5 rounded-lg font-medium bg-[#0B4D3B] text-white hover:bg-[#0A1A14] disabled:opacity-70 transition-colors"
        >
          {loading ? 'Saving...' : templeId ? 'Update Temple' : 'Publish Temple'}
        </button>
      </div>

    </form>
  );
}
