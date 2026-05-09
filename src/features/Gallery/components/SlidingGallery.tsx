"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Image Imports
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

// Define the type for the component props
interface ScrollImageProps {
  images: any[];
  direction?: "left" | "right";
}

// Organizing the imported images into two rows
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
  <div className="flex overflow-hidden gap-5 py-3">
    <motion.div
      animate={{ x: direction === "left" ? [0, -1500] : [-1500, 0] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex gap-5 min-w-max"
    >
      {[...images, ...images].map((img, i) => (
        <div
          key={i}
          className={`relative group overflow-hidden rounded-2xl shadow-md border border-white/5 flex-shrink-0
            ${i % 3 === 0 ? "w-60 h-60" : "w-60 h-60"}
          `}
        >
          <Image
            src={img}
            alt={`gallery-image-${i}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Your original design overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-teal-500/10 via-indigo-500/10 to-transparent transition" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default function SlidingGallery() {
  return (
    <section className=" py-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-800 via-teal-800 to-amber-800 bg-clip-text text-transparent leading-tight">
          Our Gallery
        </h2>
        <div className="h-1 w-20 bg-teal-500 rounded-full" />
      </div>

      <div className="flex flex-col gap-2">
        <ScrollImage images={row1} direction="left" />
        <ScrollImage images={row2} direction="right" />
      </div>
    </section>
  );
}
