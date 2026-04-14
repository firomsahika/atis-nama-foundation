// components/ServicesCTA.tsx
import React from "react";

export default function ServicesCTA() {
  return (
    <section className="bg-white py-16 border-t">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to transform your charity operations?
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Get a free demo and see how our platform can save you time and
          increase your impact.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-colors"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
}
