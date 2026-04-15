import React from "react";
import { ArrowRight } from "lucide-react";

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  iconColor: string;
}

export const ServicesCard = ({
  title,
  description,
  icon: Icon,
  gradient,
  iconColor,
}: ServicesCardProps) => {
  return (
    <div className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${gradient}`}
      >
        <Icon className={`${iconColor}`} size={26} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:gap-3 transition-all duration-300 cursor-pointer">
        Discover how we help
        <ArrowRight size={16} />
      </div>

      {/* Bottom gradient bar */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${gradient}`}
      />
    </div>
  );
};