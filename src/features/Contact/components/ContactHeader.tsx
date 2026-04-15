import React from "react";

export const ContactHeader = () => {
  return (
    <div className="text-center space-y-5 mb-14 lg:mb-20">
      <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-indigo-700/80 bg-indigo-100/40 rounded-full border border-indigo-200/50">
        Get in Touch
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-800 via-teal-800 to-amber-700 bg-clip-text text-transparent leading-tight">
        We’re Here to Help & Listen
      </h2>

      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-400 via-teal-400 to-amber-400 rounded-full" />

      <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
        Whether you want to support, request help, or collaborate — we are
        always open to meaningful connections that bring hope to our community.
      </p>
    </div>
  );
};
