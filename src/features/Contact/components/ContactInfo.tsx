import React from "react";

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-gray-900">📍 Our Location</h3>
        <p className="text-gray-600 mt-2">
          Addis Ababa, Ethiopia <br />
          Serving communities across Oromia region
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-gray-900">📞 Phone</h3>
        <p className="text-gray-600 mt-2">+251 9XX XXX XXX</p>
      </div>

      <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-lg font-semibold text-gray-900">📧 Email</h3>
        <p className="text-gray-600 mt-2">contact@atisnama.org</p>
      </div>
    </div>
  );
};
