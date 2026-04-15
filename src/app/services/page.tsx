import React from "react";
import { ServicesGrid } from "@/features/Services/components/ServicesGrid";
import { ServicesCTA } from "@/features/Services/components/ServicesCTA";
import { ServicesHeader } from "@/features/Services/components/ServicesHeader";

const Page = () => {
  return (
    <>
      <section className="relative py-16 lg:py-24 bg-gradient-to-tr from-gray-50 via-white to-teal-50/30 overflow-hidden">
        {/* Background orbs (same style as achievements) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-40 top-20 w-[500px] h-[500px] bg-indigo-300/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-teal-300/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ServicesHeader />
          <ServicesGrid />
        </div>
      </section>
      <ServicesCTA />
    </>
  );
};

export default Page;
