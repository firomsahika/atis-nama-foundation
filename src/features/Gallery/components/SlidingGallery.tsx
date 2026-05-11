"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Image Imports (Keeping your existing imports)
import a from "../../../../public/assets/a.png";
import b from "../../../../public/assets/b.png";
import c from "../../../../public/assets/c.png";
import d from "../../../../public/assets/d.png";
import e from "../../../../public/assets/e.png";
import f from "../../../../public/assets/f.png";
import g from "../../../../public/assets/g.png";
import h from "../../../../public/assets/h.png";
import achievement1 from "../../../../public/assets/achievement1.png";
import achievement2 from "../../../../public/assets/achievement2.png";
import achievement3 from "../../../../public/assets/achievement3.png";
import achievement4 from "../../../../public/assets/achievement4.png";
import acheivement5 from "../../../../public/assets/acheivement5.png";
import achievement6 from "../../../../public/assets/achievement6.png";
import achievement7 from "../../../../public/assets/achievement7.png";
import achievement8 from "../../../../public/assets/achievement8.png";

interface ScrollImageProps {
  images: any[];
  direction?: "left" | "right";
}

const row1 = [
  a,
  achievement1,
  b,
  achievement2,
  c,
  achievement3,
  d,
  achievement4,
];
const row2 = [
  e,
  acheivement5,
  f,
  achievement6,
  g,
  achievement7,
  achievement8,
  h,
];

const ScrollImage = ({ images, direction = "left" }: ScrollImageProps) => (
  <div
    className="flex overflow-hidden gap-5 py-3 relative w-full"
    /* This creates the professional fade effect on the edges */
    style={{
      maskImage:
        "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
    }}
  >
    <motion.div
      animate={{
        x: direction === "left" ? [0, -1920] : [-1920, 0],
      }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-5 min-w-max"
    >
      {/* Triple the images for a truly seamless loop on larger screens */}
      {[...images, ...images, ...images].map((img, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100/10 flex-shrink-0 w-64 h-64 md:w-50 md:h-50"
        >
          <Image
            src={img}
            alt={`gallery-image-${i}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />

          {/* Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Subtle Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/10 via-transparent to-transparent transition-opacity duration-500" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default function SlidingGallery() {
  return (
    <section className="py-16 md:py-24 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Our <span className="text-cyan-600">Gallery</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ScrollImage images={row1} direction="left" />
        <ScrollImage images={row2} direction="right" />
      </div>

      {/* Bottom decorative text/cta */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm font-medium tracking-[0.2em] uppercase">
          Capturing Moments of Hope
        </p>
      </div>
    </section>
  );
}
