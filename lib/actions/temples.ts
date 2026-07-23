"use server";

import connectToDatabase from '@/lib/db/connect';
import Temple from '@/lib/db/models/Temple';
import { revalidatePath } from 'next/cache';

export async function createTemple(formData: any) {
  try {
    await connectToDatabase();
    const newTemple = new Temple(formData);
    await newTemple.save();
    revalidatePath('/admin/temples');
    revalidatePath('/temples');
    return { success: true, id: newTemple._id.toString() };
  } catch (error: any) {
    console.error("Failed to create temple:", error);
    return { success: false, error: error.message || "Failed to create temple" };
  }
}

export async function updateTemple(id: string, formData: any) {
  try {
    await connectToDatabase();
    await Temple.findByIdAndUpdate(id, formData, { new: true });
    revalidatePath('/admin/temples');
    revalidatePath(`/temples/${formData.slug}`);
    revalidatePath('/temples');
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update temple:", error);
    return { success: false, error: error.message || "Failed to update temple" };
  }
}

export async function deleteTemple(id: string) {
  try {
    await connectToDatabase();
    await Temple.findByIdAndDelete(id);
    revalidatePath('/admin/temples');
    revalidatePath('/temples');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: "Failed to delete temple" };
  }
}
