import React from "react";

export const GalleryHeader = () => {
  return (
    <div className="text-center mb-14 lg:mb-20 space-y-5">
      <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-indigo-700/80 bg-indigo-100/40 rounded-full border border-indigo-200/50">
        Our Impact in Frames
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-800 via-teal-800 to-amber-800 bg-clip-text text-transparent leading-tight">
        Moments of Care & Hope
      </h2>

      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-400 via-teal-400 to-amber-400 rounded-full" />

      <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
        Every image tells a story of compassion, dignity, and transformation
        within our community.
      </p>
    </div>
  );
};
