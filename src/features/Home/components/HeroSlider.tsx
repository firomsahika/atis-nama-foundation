"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next";
import Hero from ".././../../../public/assets/laughing.png";

const slides = [
  {
    type: "Ergama",
    title: "ATIS NAMA FOUNDATION",
    subtitle: "Jaalala • Gara-Laafummaa • Amanamummaa",
    description:
      "Mana boqonnaa warra bara isaani guutuu boqonnaa hin argatinii, Iddoo aara galfii warra rooba fi Aduudhaan bara isaani fixani.",
    image: Hero,
  },
  {
    type: "Ergama",
    title: "ATIS NAMA FOUNDATION",
    subtitle: "Jaalala • Gara-Laafummaa • Amanamummaa",
    description:
      "Mana boqonnaa warra bara isaani guutuu boqonnaa hin argatinii, Iddoo aara galfii warra rooba fi Aduudhaan bara isaani fixani.",
    image: Hero,
  },
  {
    type: "Ergama",
    title: "ATIS NAMA FOUNDATION",
    subtitle: "Jaalala • Gara-Laafummaa • Amanamummaa",
    description:
      "Mana boqonnaa warra bara isaani guutuu boqonnaa hin argatinii, Iddoo aara galfii warra rooba fi Aduudhaan bara isaani fixani.",
    image: Hero,
  },
  // {
  //   type: "Mul'ata",
  //   title: "ተልዕኮ",
  //   subtitle: "እውቀት • ልምምድ • ታማኝነት",
  //   description:
  //     "በተለያዩ የሙያ መስኮችና ደረጃዎች በመደበኛ ና ኢመደበኛ ሥልጠና እንዲሁም በልምድ የሙያ ባለቤቶችን በአገር አቀፍ የሙያ ደረጃምደባ በተዘጋጀ የምዘና መሳሪያ ዕውቅና ባላቸዉ መዛኝ እና ምዘና ጣቢያ በመመዘን እና ብቃታቸውን  በምዘና በማረጋገጥ በ ሙያ ብቃት ተወዳዳሪ መሆን የሚችሉ ሙያተኞችን ወደ ሥራ ገበያው እንዲገቡ ማስቻል ነው፡፡",
  //   image: Hero,
  // },
  // {
  //   type: "ራዕይ",
  //   title: "ራዕይ",
  //   subtitle: "ፈጠራ • እድገት • የወደፊት",
  //   description: "በ2022 በሥራ ገበያው ተፈላጊና የሙያ ብቃቱ በምዘና የተረጋገጠ ብቁና በሀገር አቀፍም ሆነ በዓለም አቀፍ ደረጃ ተወዳዳሪ የሆነ ሙያተኛ በሁሉም ዘርፍ በብዛትና በጥራት ተፈጥሮ ማየት፡፡",
  //   image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
  // },
  // {
  //   type: "Tajaajila",
  //   title: "እሴቶች",
  //   subtitle: "ሥነ ምግባር • ጥራት • ማህበረሰብ",
  //   description:
  //     "ግልፀኝነት፣ ተጠያቂነት፣ ለለውጥ ዝግጁነት፣ የላቀ አገልግሎት መስጠት፣ በጥናትና ምርምር መመራት፣ ታማኝነት፣ ተወዳዳሪነት፣ ለህዝብ ተጠቃሚነት መትጋት፣ በእዉቀትና ክህሎት መመራት፡፡",
  //   image: Hero,
  // },
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-primary">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Robust Background Protection Layers */}
          <div className="absolute  inset-0 overflow-hidden">
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear ${
                idx === current ? "scale-110" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.image.src})` }}
            />
            {/* 1. Deep Brand Tint - increased opacity for text safety */}
            <div className="absolute inset-0 bg-teal-600/70 backdrop-blur-[0.4px]" />

            {/* 2. Heavy Left-to-Right Gradient for Text Area */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-blue-800/40 to-transparent" />

            {/* 3. Bottom Gradient for visual grounding */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center">
            <div className="max-w-4xl flex flex-col items-center text-center">
              <div className="overflow-hidden mb-5">
                <div
                  className={`flex items-center gap-3 transition-all duration-700 delay-300 ${
                    idx === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <div className="h-[2px] w-12 bg-white"></div>
                  <span className="text-blue-200 font-bold tracking-[0.5em] uppercase text-[12px] drop-shadow-md">
                    {slide.type} : {slide.subtitle}
                  </span>
                  <div className="h-[2px] w-14 bg-white"></div>
                </div>
              </div>

              <div className="overflow-hidden mb-6">
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-headline text-white leading-[1.10] tracking-tight transition-all duration-1000 delay-500 drop-shadow-2xl ${
                    idx === current ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {slide.title}
                </h1>
              </div>

              <div className="overflow-hidden mb-5">
                <p
                  className={`text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-700 drop-shadow-lg ${
                    idx === current
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.description}
                </p>
              </div>
              <div className="overflow-hidden mb-10">
                <p
                  className={`text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-700 drop-shadow-lg ${
                    idx === current
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  A resting place for those who have not found rest all their
                  days, A refuge for those who have spent their days in rain and
                  sun.
                </p>
              </div>

              <div
                className={`flex flex-col md:flex-row items-center  gap-5 transition-all duration-1000 delay-1000 ${
                  idx === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Link
                  href="/verify"
                  className="px-10 py-4 bg-white text-primary font-bold text-[14px] tracking-[0.2em] rounded-sm shadow-2xl hover:bg-blue-50 hover:-translate-y-1 transition-all active:scale-95 uppercase"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  className="px-10 py-4 border-2 border-white/40 text-white font-bold text-[14px] tracking-[0.2em] rounded-sm hover:bg-white/10 backdrop-blur-md hover:-translate-y-1 transition-all uppercase"
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Indicators */}
      <div className="absolute bottom-5 md:bottom-10  left-6  md:left-12 z-20 flex items-center gap-8">
        <div className="flex gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="group relative h-12 w-1.5 overflow-hidden rounded-full bg-white/20"
            >
              <div
                className={`absolute bottom-0 w-full bg-white transition-all duration-700 ease-out ${
                  idx === current ? "h-full" : "h-0 group-hover:h-2"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="text-white font-mono text-xs tracking-widest opacity-40">
          0{current + 1} &mdash; 0{slides.length}
        </div>
      </div>

      {/* Subtle Visual Accents */}
      <div className="absolute top-0 right-0 w-1/4 h-full pointer-events-none opacity-20 hidden lg:block">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/5 to-transparent" />
      </div>
    </div>
  );
};
