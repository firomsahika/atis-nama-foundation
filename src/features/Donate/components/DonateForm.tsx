"use client";

import React from "react";

export const DonateForm = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 space-y-5">
      <div>
        <label className="text-sm text-gray-600">Full Name</label>
        <input
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Amount (USD)</label>
        <input
          type="number"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none"
          placeholder="Enter amount"
        />
      </div>

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-teal-600 text-white font-semibold hover:scale-[1.02] transition">
        Donate Now ❤️
      </button>

      <p className="text-xs text-gray-500 text-center">
        Secure donations • Transparent usage • Real impact
      </p>
    </div>
  );
};
