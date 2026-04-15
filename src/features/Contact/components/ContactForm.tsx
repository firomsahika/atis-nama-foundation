"use client";

import React from "react";

export const ContactForm = () => {
  return (
    <form className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5">
      <div>
        <label className="text-sm text-gray-600">Full Name</label>
        <input
          type="text"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Message</label>
        <textarea
          rows={5}
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-semibold hover:scale-[1.02] transition"
      >
        Send Message
      </button>
    </form>
  );
};
