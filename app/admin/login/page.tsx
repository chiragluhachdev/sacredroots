"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TempleIcon } from '@/components/icons/TempleIcons';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (data.success) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-[#E8E1D3]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#0B4D3B]/10 flex items-center justify-center mb-4">
            <TempleIcon name="shiva-temples" className="w-8 h-8 text-[#0B4D3B]" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#111827]">Admin Access</h1>
          <p className="text-[#6B7280] text-sm mt-2">Sign in to manage Indian Sacred Roots</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#4B5563]">Master Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#D1D5DB] focus:border-[#0B4D3B] focus:ring-1 focus:ring-[#0B4D3B] outline-none transition-all"
              placeholder="Enter password (default: admin123)"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#0B4D3B] text-white py-3 rounded-xl font-semibold hover:bg-[#0A1A14] transition-colors disabled:opacity-70"
          >
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
