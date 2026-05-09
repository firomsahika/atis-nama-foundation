"use client";

import React from "react";
import { motion } from "framer-motion";

export const GalleryHero = () => {
  return (
    // Background changed to white
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden  py-10">
      {/* Background Decorative Elements - Adjusted opacity for light background */}
      <div className="absolute top-0 left-1/4 w-96 h-96  rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96  rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline - Adjusted text and background for readability on white */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-teal-600 uppercase bg-teal-50 border border-teal-100 rounded-full"
          >
            Visual Journey
          </motion.span>

          {/* Main Title - Text changed to Slate-900 (Dark) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Capturing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
              Moments
            </span>{" "}
            & Achievements
          </motion.h1>

          {/* Description - Text changed to Slate-600 (Gray) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Explore a curated collection of our milestones, community impact,
            and the technical excellence that defines our journey through
            innovation.
          </motion.p>

          {/* Optional CTA or Scroll Indicator - Adjusted gray levels and line colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10"
          >
            <div className="flex items-center justify-center gap-4 text-slate-400 text-sm uppercase tracking-widest">
              <span className="h-[1px] w-12 bg-slate-200" />
              Scroll to Explore
              <span className="h-[1px] w-12 bg-slate-200" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade - Changed from black to white to blend into the white background below */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
