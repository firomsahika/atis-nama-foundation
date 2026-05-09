import React from "react";
import { GalleryGrid } from "@/features/Gallery/components/GalleryGrid";
import { GalleryHeader } from "@/features/Gallery/components/GalleryHeader";
import SlidingGallery from "@/features/Gallery/components/SlidingGallery";
import { GalleryHero } from "@/features/Gallery/components/GalleryHero";

const page = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-tr from-gray-50 via-white to-teal-50/30 overflow-hidden">
      {/* Soft background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-indigo-300/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <GalleryHero />
        <SlidingGallery />
        <GalleryHeader />
        <GalleryGrid />
      </div>
    </section>
  );
};

export default page;
