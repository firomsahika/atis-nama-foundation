"use client";

import React from "react";
import Link from "next/link";
import { Heart, Home, Users, HeartPulse } from "lucide-react";
import a from "../../../../public/assets/a.png";
import b from "../../../../public/assets/b.png";
import c from "../../../../public/assets/c.png";
import d from "../../../../public/assets/d.png";
import e from "../../../../public/assets/e.png";
import f from "../../../../public/assets/f.png";
import g from "../../../../public/assets/g.png";
import h from "../../../../public/assets/h.png";

// Placeholder images (replace with your real ones from public/ or CMS)
// Use different aspect ratios for true masonry feel
const projects = [
  {
    id: 1,
    title: "New Home Built for Elder Widow",
    description: "Safe shelter with modern kitchen in Nekemte area",
    image: a, // e.g. tall vertical
    aspect: "aspect-[4/5]",
    category: "Housing",
    icon: Home,
  },
  {
    id: 2,
    title: "School Supplies for 45 Orphans",
    description: "Back-to-school support & books distribution",
    image: b, // wider
    aspect: "aspect-[3/2]",
    category: "Child Development",
    icon: Heart,
  },
  {
    id: 3,
    title: "Medical Aid Campaign Success",
    description: "Raised funds for 12 elders' surgeries",
    image: c, // square
    aspect: "aspect-square",
    category: "Health Support",
    icon: HeartPulse,
  },
  {
    id: 4,
    title: "Community Food Distribution Day",
    description: "Feeding 200 families during drought",
    image: d, // tall
    aspect: "aspect-[2/3]",
    category: "Emergency Aid",
    icon: Users,
  },
  {
    id: 5,
    title: "Renovated Shelter for 3 Families",
    description: "Roof repair & clean water access",
    image: e, // wide
    aspect: "aspect-[5/3]",
    category: "Housing",
    icon: Home,
  },
  {
    id: 6,
    title: "School Supplies for 45 Orphans",
    description: "Weekly classes for vulnerable children",
    image: f, // vertical
    aspect: "aspect-[3/4]",
    category: "Child Development",
    icon: Heart,
  },
  {
    id: 7,
    title: "New Home Built for Elder Widow",
    description: "Safe shelter with modern kitchen in Nekemte area",
    image: g, // e.g. tall vertical
    aspect: "aspect-[4/5]",
    category: "Housing",
    icon: Home,
  },
  {
    id: 8,
    title: "New Home Built for Elder Widow",
    description: "Safe shelter with modern kitchen in Nekemte area",
    image: h, // e.g. tall vertical
    aspect: "aspect-[4/5]",
    category: "Housing",
    icon: Home,
  },

  // Add 6–12+ more real images for better flow
];

export const Projects = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden">
      {/* Dreamy orbs – consistent with previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-indigo-300/5 rounded-full blur-3xl animate-pulse-slow delay-3000" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-amber-200/5 rounded-full blur-3xl animate-pulse-slow delay-6000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20 space-y-5">
          <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-teal-700/80 bg-teal-100/40 rounded-full border border-teal-200/50">
            Our Projects in Action
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-teal-800 via-indigo-800 to-amber-800 bg-clip-text text-transparent leading-tight">
            Transforming Lives, One Project at a Time
          </h2>

          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-teal-400 via-indigo-400 to-amber-400 rounded-full" />

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            From building safe homes and feeding orphans to supporting health
            needs and nurturing futures — see the real impact of your
            generosity.
          </p>
        </div>

        {/* Masonry Gallery – irregular & aesthetic */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 sm:gap-6 lg:gap-8 space-y-5 sm:space-y-6 lg:space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                group relative break-inside-avoid
                rounded-2xl overflow-hidden
                shadow-xl shadow-black/5
                hover:shadow-2xl hover:shadow-teal-500/15
                transition-all duration-500 ease-out
                hover:-translate-y-2
                cursor-pointer
              `}
            >
              {/* Image with aspect ratio wrapper */}
              <div className={`relative ${project.aspect}`}>
                <img
                  src={project.image.src}
                  alt={project.title}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                  loading="lazy"
                />

                {/* Overlay gradient + caption on hover */}
                <div
                  className="
                  absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                />

                {/* Caption content */}
                <div
                  className="
                  absolute bottom-0 left-0 right-0 p-5
                  translate-y-6 group-hover:translate-y-0
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  text-white
                "
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <project.icon size={18} className="text-teal-300" />
                    <span className="text-xs font-medium uppercase tracking-wider text-teal-200/90">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional "View More" button */}
        <div className="text-center mt-12 lg:mt-16">
          <Link href="/projects">
            <button
              className="
              inline-flex items-center gap-2 px-8 py-4
              bg-gradient-to-r from-teal-600 to-indigo-600
              hover:from-teal-700 hover:to-indigo-700
              text-white font-semibold rounded-full
              shadow-lg shadow-teal-500/20
              transition-all duration-300 hover:scale-105 hover:shadow-xl
            "
            >
              Load More Projects
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
