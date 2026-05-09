"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Image Imports
import feeding1 from "../../../../public/assets/feeding/feed1.png";
import feeding2 from "../../../../public/assets/feeding/feed2.png";
import feeding3 from "../../../../public/assets/feeding/feed3.png";
import feeding4 from "../../../../public/assets/feeding/feed4.png";
import feeding5 from "../../../../public/assets/feeding/feed5.png";
import feeding6 from "../../../../public/assets/feeding/feed6.png";

const orphanProjects = [
  {
    id: 1,
    title: "Weekly Feeding Program for 180 Orphans",
    description:
      "Provided nutritious meals, milk, and supplements to orphaned children every week in Nekemte and surrounding areas.",
    image: feeding1,
    date: "MARCH 2025",
    impact: "180 Children Fed Monthly",
  },
  {
    id: 2,
    title: "Back-to-School Nutrition & Supplies",
    description:
      "Distributed balanced food packages along with school materials to support academic performance of vulnerable children.",
    image: feeding2,
    date: "FEB 2025",
    impact: "245 Children Supported",
  },
  {
    id: 3,
    title: "Emergency Food Relief for Orphanages",
    description:
      "Delivered emergency food aid to three orphanages during the dry season shortage to prevent malnutrition.",
    image: feeding3,
    date: "JAN 2025",
    impact: "320 Orphans",
  },
  {
    id: 4,
    title: "Weekly Feeding Program for 180 Orphans",
    description:
      "Provided nutritious meals, milk, and supplements to orphaned children every week in Nekemte and surrounding areas.",
    image: feeding4,
    date: "MARCH 2025",
    impact: "180 Children Fed Monthly",
  },
  {
    id: 5,
    title: "Back-to-School Nutrition & Supplies",
    description:
      "Distributed balanced food packages along with school materials to support academic performance of vulnerable children.",
    image: feeding5,
    date: "FEB 2025",
    impact: "245 Children Supported",
  },
  {
    id: 6,
    title: "Emergency Food Relief for Orphanages",
    description:
      "Delivered emergency food aid to three orphanages during the dry season shortage to prevent malnutrition.",
    image: feeding6,
    date: "JAN 2025",
    impact: "320 Orphans",
  },
];

export const Feeding = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Minimalist Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px] bg-teal-500" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 uppercase">
              Nutritional Support
            </span>
          </div>
          <h2 className="text-3xl  md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Nourishing Bodies,{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              Empowering Futures
            </span>
            .
          </h2>
          <p className="text-slate-500 mt-4 text-[13.5px] max-w-lg leading-relaxed font-medium">
            We are dedicated to eradicating childhood hunger among orphans by
            providing consistent, nutritious meals and essential care.
          </p>
        </div>

        {/* Stylish Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {orphanProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Minimized Cinematic Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 shadow-sm border border-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Floating Date Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-slate-100">
                    <p className="text-[9px] font-bold text-slate-800 tracking-widest">
                      {project.date}
                    </p>
                  </div>
                </div>

                {/* Depth Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
              </div>

              {/* Content Area */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-bold text-[15px] text-slate-900 leading-snug group-hover:text-amber-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-amber-50 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <p className="text-slate-500 text-[12.5px] leading-relaxed mb-5 font-medium line-clamp-2">
                  {project.description}
                </p>

                {/* Impact Badge - Amber Theme */}
                <div className="flex items-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-amber-700 bg-amber-50 px-3 py-1.5 rounded-md border border-amber-100/50">
                    {project.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
