// components/ServicesHeader.tsx
import React from "react";

export default function ServicesHeader() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Powerful, easy-to-use tools designed to help charities efficiently
          manage housing projects, food distribution, donors, and impact.
        </p>
      </div>
    </section>
  );
}
