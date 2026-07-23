import React from 'react';
import Link from 'next/link';
import connectToDatabase from '@/lib/db/connect';
import Temple from '@/lib/db/models/Temple';
import { MapPin, Search, Edit, Trash2 } from 'lucide-react';
import { deleteTemple } from '@/lib/actions/temples';
import { DeleteButton } from '@/components/admin/DeleteButton';

export const dynamic = 'force-dynamic';

export default async function TemplesPage() {
  await connectToDatabase();
  const temples = await Temple.find().sort({ createdAt: -1 });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Temples Database</h1>
          <p className="text-gray-500 mt-2">Manage all the sacred temples listed on the platform.</p>
        </div>
        <Link 
          href="/admin/temples/new"
          className="bg-[#0B4D3B] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#0A1A14] transition-colors shrink-0"
        >
          + Add New Temple
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 bg-gray-50/50 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search temples by name, state, or deity..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4D3B]/20 focus:border-[#0B4D3B]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200 bg-white text-xs uppercase tracking-wider text-gray-500 font-semibold">
                <th className="px-6 py-4">Image & Temple Name</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Deity</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {temples.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <MapPin className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-lg font-medium text-gray-900 mb-1">No temples found</p>
                      <p className="mb-4">Get started by creating your first temple record.</p>
                      <Link 
                        href="/admin/temples/new"
                        className="text-[#0B4D3B] font-medium hover:underline"
                      >
                        Add New Temple
                      </Link>
                    </div>
                  </td>
                </tr>
              ) : (
                temples.map((temple) => (
                  <tr key={temple._id.toString()} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={temple.heroImage || '/placeholder.jpg'} 
                          alt={temple.name}
                          className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{temple.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5 font-mono">/{temple.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {temple.district}, {temple.state}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {temple.deity}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link 
                          href={`/admin/temples/${temple._id}/edit`}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <DeleteButton id={temple._id.toString()} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
