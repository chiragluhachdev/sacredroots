import React from 'react';
import connectToDatabase from '@/lib/db/connect';
import SiteSettings from '@/lib/db/models/SiteSettings';
import ClientForm from './ClientForm';

export const dynamic = 'force-dynamic';

export default async function ContentManagerServer() {
  await connectToDatabase();
  const settings = await SiteSettings.findOne().lean();

  // If we have settings in DB, pass them to ClientForm, otherwise it uses defaults
  return <ClientForm initialData={settings ? JSON.parse(JSON.stringify(settings)) : null} />;
}
