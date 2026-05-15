"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, HeartHandshake } from "lucide-react";

import achievement8 from "../../../../public/assets/achievement8.jpg";
import laughing from "../../../../public/assets/laughing.jpg";
import mana from "../../../../public/assets/mana.png";

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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07111d]">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <Image
            key={index}
            src={achievement8}
            alt="Hero background"
            fill
            priority={index === 0}
            className={`object-cover transition-all duration-[1800ms] ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          />
        ))}

        {/* overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111d]/90 via-[#07111d]/40 to-[#07111d]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:70px_70px]" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:py-0">
        <div className="flex w-full flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md md:px-5 md:py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/90 md:text-sm">
                Compassion • Care • Community
              </span>
            </div>

            {/* heading */}
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-4xl">
              A Home Of Compassion
              <br />
              <span className="bg-gradient-to-r font-bolder from-cyan-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
                ATIS NAMA Foundation
              </span>
            </h1>

            {/* text */}
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-lg">
              ATIS NAMA provides shelter, dignity, care, and emotional support
              for elders and children in need creating a safe community where
              every life matters and every story finds hope again.
            </p>

            {/* buttons */}
            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/projects" className="w-full sm:w-auto">
                <button className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95">
                  Explore Projects
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>

              <Link href="/gallery" className="w-full sm:w-auto">
                <button className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 active:scale-95">
                  <Play
                    size={18}
                    className="fill-white transition-transform duration-300 group-hover:scale-110"
                  />
                  See Our Story
                </button>
              </Link>
            </div>

            {/* stats */}
            <div className="mt-12 grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3 md:mt-14 md:gap-4 lg:max-w-xl">
              {[
                { number: "500+", label: "Lives Helped" },
               
                { number: "8+", label: "Years" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-lg md:p-5 lg:text-left"
                >
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {item.number}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50 md:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD (Hidden on Mobile/Tablet, visible on LG) */}
          <div className="relative mt-16 hidden lg:flex justify-center lg:mt-0">
            <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl shadow-2xl">
              <div className="relative h-[420px] overflow-hidden rounded-[24px]">
                <Image
                  src={images[current]}
                  alt="Community"
                  fill
                  className="object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* floating badge */}
                <div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-xl border border-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-white">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Community Care
                    </h4>
                    <p className="text-[10px] text-white/70 font-medium">
                      Supporting lives
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                    ATIS NAMA FOUNDATION
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white leading-tight">
                    Building a future filled with dignity and hope.
                  </h3>
                </div>
              </div>

              {/* indicators */}
              <div className="mt-5 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-500 ${
                      i === current
                        ? "h-1.5 w-8 rounded-full bg-white"
                        : "h-1.5 w-1.5 rounded-full bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 md:bottom-8 lg:flex">
        <span className="text-[10px] tracking-[0.3em] font-bold">SCROLL</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-white/50 to-transparent md:h-12" />
      </div>
    </section>
  );
};
