// components/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100 group">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      <a
        href="#contact"
        className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
      >
        Learn more
        <span className="text-lg">→</span>
      </a>
    </div>
  );
}
