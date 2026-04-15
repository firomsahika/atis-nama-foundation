import React from "react";

export const ServicesHeader = () => {
  return (
    <div className="text-center mb-14 lg:mb-20 space-y-5">
      <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-teal-700/80 bg-teal-100/40 rounded-full border border-teal-200/50">
        Our Services
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-teal-800 via-indigo-800 to-amber-800 bg-clip-text text-transparent leading-tight">
        Compassion in Action
      </h2>

      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-teal-400 via-indigo-400 to-amber-400 rounded-full" />

      <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
        We provide holistic support that restores dignity, nurtures growth, and
        builds hope for vulnerable communities.
      </p>
    </div>
  );
};
