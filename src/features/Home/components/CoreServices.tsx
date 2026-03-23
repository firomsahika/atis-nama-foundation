import React from "react";
import { Home, HeartPulse, Baby } from "lucide-react";

const coreServices = [
  {
    title: "Nutritional & Shelter Assistance",
    description:
      "Balanced nutrition and dignified, comfortable living spaces that nurture wellbeing and restore a true sense of home.",
    icon: Home,
    gradient: "from-teal-50/80 via-emerald-50/60 to-teal-100/40",
    iconColor: "text-teal-600",
    accent: "bg-gradient-to-br from-teal-400/10 to-emerald-400/5",
    numberColor: "text-teal-300/30",
  },
  {
    title: "Healthcare & Medical Support",
    description:
      "Regular check-ups, compassionate care, specialist access and reliable medication — preserving health and dignity.",
    icon: HeartPulse,
    gradient: "from-indigo-50/80 via-blue-50/60 to-indigo-100/40",
    iconColor: "text-indigo-600",
    accent: "bg-gradient-to-br from-indigo-400/10 to-blue-400/5",
    numberColor: "text-indigo-300/30",
  },
  {
    title: "Child Development & Orphan Support",
    description:
      "Supporting vulnerable children without family through quality education, emotional care, nutrition, shelter, and holistic development opportunities.",
    icon: Baby, // or import { Heart } from "lucide-react"
    gradient: "from-amber-50/80 via-orange-50/60 to-amber-100/40",
    iconColor: "text-amber-700",
    accent: "bg-gradient-to-br from-amber-400/10 to-orange-400/5",
    numberColor: "text-amber-300/30",
  },
];

export const CoreServices = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden">
      {/* Dreamy background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-indigo-300/5 rounded-full blur-3xl animate-pulse-slow delay-3000" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-amber-200/5 rounded-full blur-3xl animate-pulse-slow delay-6000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20 space-y-5">
          <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-teal-700/80 bg-teal-100/40 rounded-full border border-teal-200/50">
            Heart of Our Mission
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-teal-800 via-indigo-800 to-amber-800 bg-clip-text text-transparent leading-tight">
            Caring Hands. Connected Hearts.
          </h2>

          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-teal-400 via-indigo-400 to-amber-400 rounded-full" />

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Three harmonious pillars that nourish elders today while weaving
            stronger bonds for tomorrow.
          </p>
        </div>

        {/* Cards – slightly smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coreServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`
                  group relative
                  bg-white/25 backdrop-blur-2xl backdrop-saturate-180
                  rounded-3xl p-6 lg:p-7
                  border border-white/30 shadow-xl shadow-black/5
                  hover:shadow-2xl hover:shadow-teal-500/10
                  transition-all duration-500 ease-out
                  hover:-translate-y-4 hover:scale-[1.03]
                  overflow-hidden
                `}
              >
                {/* Subtle inner glow */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${service.accent}`}
                />

                {/* Small number */}
                <div
                  className={`
                    absolute -top-1 right-4 text-3xl lg:text-6xl font-black
                    ${service.numberColor} select-none pointer-events-none
                    opacity-40 group-hover:opacity-60 transition-opacity duration-500
                  `}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Smaller icon container */}
                <div
                  className={`
                    relative inline-flex items-center justify-center
                    w-8 h-8 lg:w-10 lg:h-10 rounded-2xl
                    bg-gradient-to-br ${service.gradient}
                    shadow-lg shadow-black/5
                    mb-5
                    group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl
                    transition-all duration-500 ease-out
                  `}
                >
                  <Icon
                    size={20}
                    className={`lg:size-26 stroke-[2] ${service.iconColor} group-hover:animate-pulse`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                {/* CTA */}
                <div
                  className="
                    mt-5 flex items-center gap-2 text-sm font-medium
                    text-teal-700/80 group-hover:text-teal-700
                    transition-all duration-400
                    opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                  "
                >
                  Discover how we help →
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
