"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "UNICEF",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOQoik4BHuwwXSmVcltZw1ax5pltjZEOJAg&s",
  },
  {
    name: "Red Cross",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1-TOoPr3uaVUqYLmPWtHSvo1K1oAXwaFIA&s",
  },
  {
    name: "Save the Children",
    logo: "https://icon2.cleanpng.com/20180510/bhq/kisspng-mary-s-living-and-giving-for-save-the-children-hum-5af3d32c585f87.245523301525928748362.jpg",
  },
  {
    name: "World Vision",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq6PcBt1tj3p13hW91RYmE3SrYFW4v9gnwQ&s",
  },
  {
    name: "Plan International",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgVnDQ26kIgqJRNUBQnA9rADQ20R5z9qYSg&s",
  },
  {
    name: "WHO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png",
  },
];

export const Partners = () => {
  // We triple the array to ensure there's no "gap" during the infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block px-5 py-3 text-xs font-semibold tracking-widest uppercase text-teal-700/80 bg-teal-100/40 rounded-full border border-teal-200/50">
            Our Global Network
          </span>
          <h2 className="text-3xl py-5  sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-teal-800 via-indigo-800 to-amber-800 bg-clip-text text-transparent leading-tight">
            Trusted by World-Class Organizations
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative mt-10">
          {/* Professional Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Framer Motion Wrapper */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-16 items-center flex-nowrap"
              animate={{
                x: ["0%", "-33.33%"], // Move by one third of the tripled array
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25, // Adjust speed here (higher = slower)
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="relative w-32 h-16 md:w-44 md:h-20 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Actively collaborating with 15+ international partners
          </div>
        </div>
      </div>
    </section>
  );
};
