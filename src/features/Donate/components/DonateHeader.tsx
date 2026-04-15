import React from "react";

export const DonateHeader = () => {
  return (
    <div className="text-center space-y-5 mb-14 lg:mb-20">
      <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-100/60 rounded-full border border-amber-200">
        Support Our Mission
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-amber-700 via-teal-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
        Every Contribution Changes a Life
      </h2>

      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 via-teal-400 to-indigo-400 rounded-full" />

      <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
        Your support helps us provide shelter, food, healthcare, and education
        for elders and children in need.
      </p>
    </div>
  );
};
