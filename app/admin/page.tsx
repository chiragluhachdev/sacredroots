import React from 'react';
import connectToDatabase from '@/lib/db/connect';
import Temple from '@/lib/db/models/Temple';
import { Users, Map, MousePointerClick, Calendar } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  await connectToDatabase();
  
  const totalTemples = await Temple.countDocuments();
  const recentTemples = await Temple.find().sort({ createdAt: -1 }).limit(5);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome to the Indian Sacred Roots control panel.</p>
        </div>
        <Link 
          href="/admin/temples/new"
          className="bg-[#0B4D3B] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#0A1A14] transition-colors"
        >
          + Add New Temple
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Temples</p>
              <h3 className="text-2xl font-bold text-gray-900">{totalTemples}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Unique Visitors (Mock)</p>
              <h3 className="text-2xl font-bold text-gray-900">24,593</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
              <MousePointerClick className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Page Views (Mock)</p>
              <h3 className="text-2xl font-bold text-gray-900">142k</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Upcoming Festivals</p>
              <h3 className="text-2xl font-bold text-gray-900">4</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Temples Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-900">Recently Added Temples</h2>
          <Link href="/admin/temples" className="text-sm font-medium text-[#0B4D3B] hover:underline">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-white text-xs uppercase tracking-wider text-gray-500 font-semibold">
                <th className="px-6 py-4">Temple Name</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Deity</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {recentTemples.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No temples added yet. Click "Add New Temple" to get started.
                  </td>
                </tr>
              ) : (
                recentTemples.map((temple) => (
                  <tr key={temple._id.toString()} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{temple.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{temple.slug}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {temple.district}, {temple.state}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {temple.deity}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link 
                        href={`/admin/temples/${temple._id}/edit`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Edit
                      </Link>
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
