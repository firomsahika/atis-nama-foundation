"use client";

import React from "react";
import { motion } from "framer-motion";

export const ProjectHeader = () => {
  return (
    /* We use !important styles via Tailwind to force the background if global CSS is interfering */
    <section className="relative pt-32 pb-24 w-full !bg-gradient-to-br from-teal-400/50 via-white to-teal-600/30 overflow-hidden">
      {/* 1. THE "ATIS NAMA" WATERMARK */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full flex justify-center select-none pointer-events-none z-0">
        <h2
          className="text-[15vw] font-black leading-none uppercase tracking-tighter opacity-[0.04] text-teal-900"
          style={{ WebkitTextStroke: "1px currentColor", fill: "transparent" }}
        >
          ATIS NAMA
        </h2>
      </div>

      {/* 2. GLOWING ORBS - These help verify if the background is working */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px] translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-5 py-2 text-xs font-bold tracking-widest uppercase text-teal-700 bg-teal-100/50 rounded-full border border-teal-200/50">
              Our Global Footprint
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline font-semibold text-4xl md:text-8xl text-slate-900 leading-[1.05] tracking-tight mb-8"
          >
            Transforming Lives <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              One Project at a Time
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-amber-500/40"
                viewBox="0 0 400 20"
                fill="none"
              >
                <path
                  d="M5 15Q100 5 200 15T395 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-slate-600 text-lg md:text-xl font-light leading-relaxed"
          >
            Witness the physical manifestation of our promise to the Oromo
            community through housing, food security, and emergency relief.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
