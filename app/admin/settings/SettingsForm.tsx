"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateSiteSettings } from '@/lib/actions/settings';

export default function SettingsForm({ initialData }: { initialData: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [isMaintenance, setIsMaintenance] = useState(initialData?.maintenanceMode || false);

  const handleToggle = async () => {
    setLoading(true);
    setSuccess('');
    
    const newValue = !isMaintenance;
    setIsMaintenance(newValue);

    const res = await updateSiteSettings({ maintenanceMode: newValue });
    
    if (res.success) {
      setSuccess(`Maintenance mode is now ${newValue ? 'ON' : 'OFF'}.`);
      router.refresh();
    } else {
      // Revert if failed
      setIsMaintenance(!newValue);
    }
    
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      {success && <div className="bg-green-50 text-green-600 p-4 rounded-xl border border-green-200">{success}</div>}
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Maintenance Mode</h2>
          <p className="text-gray-500 mt-1 max-w-xl">
            When enabled, all public pages will redirect to a maintenance screen. You will still be able to access the admin panel.
          </p>
        </div>
        
        <button 
          onClick={handleToggle}
          disabled={loading}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B4D3B] focus:ring-offset-2 ${
            isMaintenance ? 'bg-red-500' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              isMaintenance ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
        <h2 className="text-lg font-bold text-red-800 mb-2">Danger Zone</h2>
        <p className="text-red-600 text-sm mb-4">Actions here are destructive and cannot be easily reversed.</p>
        <button className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors">
          Purge Cache (Coming Soon)
        </button>
      </div>
    </div>
  );
}
