import React from 'react';
import connectToDatabase from '@/lib/db/connect';
import SiteSettings from '@/lib/db/models/SiteSettings';
import SettingsForm from './SettingsForm';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  await connectToDatabase();
  const settings = await SiteSettings.findOne().lean();

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Platform Settings</h1>
        <p className="text-gray-500 mt-2">Configure advanced features and maintenance controls.</p>
      </div>

      <SettingsForm initialData={settings ? JSON.parse(JSON.stringify(settings)) : null} />
    </div>
  );
}
