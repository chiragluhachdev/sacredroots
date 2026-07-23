"use client";

import React, { useState, useEffect } from 'react';
import { updateSiteSettings } from '@/lib/actions/settings';

export default function ClientForm({ initialData }: { initialData: any }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    heroTitle: initialData?.hero?.title || "Discover India's Sacred Architecture",
    heroSubtitle: initialData?.hero?.subtitle || "A premium directory of temples, heritage, and spirituality.",
    heroBg: initialData?.hero?.backgroundImageUrl || "/thebgimg.png",
    mission: initialData?.footer?.mission || "Dedicated to preserving, documenting, and celebrating the profound spiritual heritage and architectural marvels of temples across India.",
    contactEmail: initialData?.footer?.contactEmail || "contact@sacredroots.in",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const dbPayload = {
      hero: {
        title: formData.heroTitle,
        subtitle: formData.heroSubtitle,
        backgroundImageUrl: formData.heroBg,
      },
      footer: {
        mission: formData.mission,
        contactEmail: formData.contactEmail,
        facebookUrl: "#",
        twitterUrl: "#",
        instagramUrl: "#",
        youtubeUrl: "#",
      }
    };

    const res = await updateSiteSettings(dbPayload);
    if (res.success) {
      setSuccess('Site settings updated successfully and homepage revalidated.');
    } else {
      setError(res.error || 'Update failed');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Site Content Manager</h1>
        <p className="text-gray-500 mt-2">Manage the homepage hero section, footer, and global text.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200">{error}</div>}
        {success && <div className="bg-green-50 text-green-600 p-4 rounded-xl border border-green-200">{success}</div>}

        {/* Hero Section */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Hero Section (Homepage)</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Main Heading</label>
            <input type="text" name="heroTitle" value={formData.heroTitle} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subheading</label>
            <input type="text" name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Background Image URL</label>
            <input type="text" name="heroBg" value={formData.heroBg} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" placeholder="/thebgimg.png or https://..." />
            <p className="text-xs text-gray-500 mt-2">Provide an absolute URL (https://...) or a relative path to a file in the public folder.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Footer Settings</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand Mission Statement</label>
            <textarea name="mission" value={formData.mission} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4D3B]" />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="px-8 py-3 rounded-lg font-medium bg-[#0B4D3B] text-white hover:bg-[#0A1A14] disabled:opacity-70 transition-colors shadow-lg"
        >
          {loading ? 'Saving Changes...' : 'Save & Publish Global Changes'}
        </button>

      </form>
    </div>
  );
}
