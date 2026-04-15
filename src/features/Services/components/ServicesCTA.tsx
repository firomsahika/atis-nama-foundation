import React from "react";
import { ArrowRight, Heart } from "lucide-react";

export const ServicesCTA = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-teal-600 to-emerald-600" />

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
            <Heart size={28} className="text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Be the Reason Someone Smiles Today
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Your support helps us provide shelter, healthcare, and hope to those
          who need it most. Join us in making a lasting impact in our community.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <button className="group px-8 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            Donate Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-3 rounded-xl border border-white/40 text-white font-medium backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};
