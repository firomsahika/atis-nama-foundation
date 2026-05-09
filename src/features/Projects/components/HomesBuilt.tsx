"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Image Imports
import home1 from "../../../../public/assets/homesbuilt/home1.png";
import home2 from "../../../../public/assets/homesbuilt/home2.png";
import home3 from "../../../../public/assets/homesbuilt/home3.png";
import home4 from "../../../../public/assets/homesbuilt/home4.png";
import home5 from "../../../../public/assets/homesbuilt/home5.png";
import home6 from "../../../../public/assets/homesbuilt/home6.png";

const homeProjects = [
  {
    id: 1,
    title: "Safe Home for Elder Widow - Nekemte",
    description:
      "Constructed a fully furnished two-room house with kitchen and sanitation facility for an elderly widow.",
    image: home1,
    date: "MARCH 2025",
    impact: "1 Family • Dignified Living",
  },
  {
    id: 2,
    title: "Renovation of 12 Elder Homes",
    description:
      "Roof repair, painting, and clean water access provided to 12 vulnerable elderly households.",
    image: home2,
    date: "FEB 2025",
    impact: "12 Households",
  },
  {
    id: 3,
    title: "New Shelter for 3 Orphan Families",
    description:
      "Built emergency shelter with solar lighting for families who lost their homes.",
    image: home3,
    date: "JAN 2025",
    impact: "3 Families",
  },
  {
    id: 4,
    title: "Safe Home for Elder Widow - Nekemte",
    description:
      "Constructed a fully furnished two-room house with kitchen and sanitation facility for an elderly widow.",
    image: home4,
    date: "MARCH 2025",
    impact: "1 Family • Dignified Living",
  },
  {
    id: 5,
    title: "Renovation of 12 Elder Homes",
    description:
      "Roof repair, painting, and clean water access provided to 12 vulnerable elderly households.",
    image: home5,
    date: "FEB 2025",
    impact: "12 Households",
  },
  {
    id: 6,
    title: "New Shelter for 3 Orphan Families",
    description:
      "Built emergency shelter with solar lighting for families who lost their homes.",
    image: home6,
    date: "JAN 2025",
    impact: "3 Families",
  },
];

export const HomesBuilt = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Minimalist Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px] bg-teal-500" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-teal-600 uppercase">
              Housing Initiatives
            </span>
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl font-light text-slate-900 tracking-tight leading-tight">
            Building Hope,{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              One Home
            </span>{" "}
            at a Time.
          </h2>
          <p className="text-slate-500 mt-4 text-[13.5px] max-w-lg leading-relaxed font-medium">
            Our mission is to provide more than just shelter—we provide
            security, dignity, and a foundation for a better future.
          </p>
        </div>

        {/* Professional Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {homeProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Minimized Image Container with Custom Aspect Ratio */}
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 shadow-sm border border-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Minimalist Date Badge Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-slate-100">
                    <p className="text-[9px] font-bold text-slate-800 tracking-widest">
                      {project.date}
                    </p>
                  </div>
                </div>

                {/* Subtle Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
              </div>

              {/* Content Area */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-bold text-[15px] text-slate-900 leading-snug group-hover:text-teal-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-teal-50 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <p className="text-slate-500 text-[12.5px] leading-relaxed mb-5 font-medium line-clamp-2">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="flex items-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-teal-600 bg-teal-50/70 px-3 py-1.5 rounded-md border border-teal-100/50">
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
