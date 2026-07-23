"use client";

import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { deleteTemple } from '@/lib/actions/temples';

export function DeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this temple? This action cannot be undone.")) {
      setLoading(true);
      await deleteTemple(id);
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={loading}
      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
      title="Delete"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
