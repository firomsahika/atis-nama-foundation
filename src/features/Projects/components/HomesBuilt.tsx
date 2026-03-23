"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Utensils, Droplets, Heart, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Importing your assets
import home1 from "../../../../public/assets/home1.png";
import home2 from "../../../../public/assets/home2.png";
import home3 from "../../../../public/assets/home3.png";
import home4 from "../../../../public/assets/home4.png";
import home5 from "../../../../public/assets/home5.png";
import home6 from "../../../../public/assets/home6.png";
import home7 from "../../../../public/assets/home7.png";
import home8 from "../../../../public/assets/home8.png";

const projectData = [
  {
    id: 1,
    title: "Dignified Housing",
    category: "Infrastructure",
    image: home1,
    size: "large",
    icon: Home,
    stats: "12+ Homes",
  },
  {
    id: 2,
    title: "Food Security",
    category: "Nutrition",
    image: home2,
    size: "small",
    icon: Utensils,
    stats: "5k Meals",
  },
  {
    id: 3,
    title: "Drought Relief",
    category: "Relief",
    image: home3,
    size: "small",
    icon: Droplets,
    stats: "15+ Areas",
  },
  {
    id: 4,
    title: "Education",
    category: "Youth",
    image: home4,
    size: "wide",
    icon: Heart,
    stats: "200+ Kids",
  },
  {
    id: 5,
    title: "Emergency Aid",
    category: "Health",
    image: home5,
    size: "small",
    icon: Heart,
    stats: "Daily",
  },
  {
    id: 6,
    title: "Community Hub",
    category: "Social",
    image: home6,
    size: "large",
    icon: Home,
    stats: "Active",
  },
  {
    id: 7,
    title: "Water Access",
    category: "Relief",
    image: home7,
    size: "small",
    icon: Droplets,
    stats: "New Wells",
  },
  {
    id: 8,
    title: "Shelter Care",
    category: "Infrastructure",
    image: home8,
    size: "wide",
    icon: Home,
    stats: "Ongoing",
  },
];

export const HomesBuilt = () => {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* The Informal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 auto-rows-[300px]">
          {projectData.map((project, index) => {
            const Icon = project.icon;

            // Logic for informal sizing
            const gridClasses =
              project.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : project.size === "wide"
                  ? "md:col-span-2 md:row-span-1"
                  : "md:col-span-1 md:row-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${gridClasses} group relative rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 shadow-xl shadow-teal-900/5`}
              >
                {/* Image Background */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Glass Overlay (Top) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {project.category}
                  </div>
                  <div className="p-2 bg-teal-500/80 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Bottom Content - Integrated into the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent flex flex-col justify-end p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-400/20 backdrop-blur-md flex items-center justify-center text-teal-300">
                      <Icon size={18} />
                    </div>
                    <span className="text-teal-200/80 text-xs font-bold uppercase tracking-wider">
                      {project.stats}
                    </span>
                  </div>
                  <h3 className="text-white text-xl lg:text-2xl font-black leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Interactive Inner Border on Hover */}
                <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-white/10 transition-all duration-500 rounded-[2rem] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
