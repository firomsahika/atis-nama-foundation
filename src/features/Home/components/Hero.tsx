"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import achievement8 from "../../../../public/assets/achievement8.jpg";
import laughing from "../../../../public/assets/laughing.jpg";
import mana from "../../../../public/assets/mana.png";
import c from "../../../../public/assets/c.png";

const images = [achievement8, laughing, mana];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Hero background"
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* 🔥 FINAL PROFESSIONAL GRADIENT SYSTEM */}

        {/* 1. Base readability layer */}
        <div className="absolute inset-0 bg-black/45" />

        {/* 2. Brand gradient (beauty layer) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/60 via-indigo-900/40 to-transparent" />

        {/* 3. Soft center focus (no blur, just depth) */}
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/90 bg-white/10 rounded-full border border-white/20">
          Compassion • Care • Community
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
          A Home of Compassion,
          <br />
          <span className="bg-gradient-to-r from-teal-300 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
            ATIS NAMA
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
          Providing shelter, care, and dignity for elders and children in need —
          building hope and restoring lives across our community.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Explore Projects
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
            How You Can Help
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
        ↓
      </div>
    </section>
  );
};
