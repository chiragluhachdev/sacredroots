"use server";

import connectToDatabase from '@/lib/db/connect';
import SiteSettings from '@/lib/db/models/SiteSettings';
import { revalidatePath } from 'next/cache';

export async function updateSiteSettings(formData: any) {
  try {
    await connectToDatabase();
    
    // Check if settings document exists
    let settings = await SiteSettings.findOne();
    
    if (settings) {
      // Update existing
      settings = await SiteSettings.findByIdAndUpdate(settings._id, formData, { new: true });
    } else {
      // Create new
      settings = new SiteSettings(formData);
      await settings.save();
    }
    
    revalidatePath('/', 'layout'); // Revalidate everything including RootLayout where maintenance mode is checked
    revalidatePath('/admin/content');
    revalidatePath('/admin/settings');
    
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update site settings:", error);
    return { success: false, error: error.message || "Failed to update settings" };
  }
}
