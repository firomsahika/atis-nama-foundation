"use client"; // Important if using Next.js App Router

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Home,
  Heart,
  HeartPulse,
  Building2, // for houses built
  UsersRound, // for children supported
} from "lucide-react";

const stats = [
  {
    title: "Houses Built & Renovated",
    value: 240,
    suffix: "+",
    icon: Building2,
    gradient: "from-teal-50/80 via-emerald-50/60 to-teal-100/40",
    iconColor: "text-teal-600",
    accent: "bg-gradient-to-br from-teal-400/10 to-emerald-400/5",
  },
  {
    title: "Children Supported with Education & Care",
    value: 580,
    suffix: "+",
    icon: Heart,
    gradient: "from-amber-50/80 via-orange-50/60 to-amber-100/40",
    iconColor: "text-amber-700",
    accent: "bg-gradient-to-br from-amber-400/10 to-orange-400/5",
  },
  {
    title: "Elders Receiving Medical & Nutritional Aid",
    value: 360,
    suffix: "+",
    icon: HeartPulse,
    gradient: "from-indigo-50/80 via-blue-50/60 to-indigo-100/40",
    iconColor: "text-indigo-600",
    accent: "bg-gradient-to-br from-indigo-400/10 to-blue-400/5",
  },
  {
    title: "Families Helped with Emergency Support",
    value: 1200,
    suffix: "+",
    icon: UsersRound,
    gradient: "from-teal-50/80 via-emerald-50/60 to-teal-100/40",
    iconColor: "text-teal-600",
    accent: "bg-gradient-to-br from-teal-400/10 to-emerald-400/5",
  },
];

export const ImpactStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // start animating when 30% visible
    triggerOnce: true, // animate only once
  });

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden">
      {/* Same dreamy background orbs as Core Services */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-indigo-300/5 rounded-full blur-3xl animate-pulse-slow delay-3000" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-amber-200/5 rounded-full blur-3xl animate-pulse-slow delay-6000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20 space-y-5">
          <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-teal-700/80 bg-teal-100/40 rounded-full border border-teal-200/50">
            Our Real Impact
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-teal-800 via-indigo-800 to-amber-800 bg-clip-text text-transparent leading-tight">
            Changing Lives Every Day
          </h2>

          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-teal-400 via-indigo-400 to-amber-400 rounded-full" />

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Thanks to your support, ATIS NAMA Foundation continues to build
            homes, nurture children, care for elders, and bring hope to
            communities in need.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
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
                  text-center
                `}
              >
                {/* Subtle hover glow */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${stat.accent}`}
                />

                {/* Icon */}
                <div
                  className={`
                    mx-auto mb-5 inline-flex items-center justify-center
                    w-8 h-14 lg:w-10 lg:h-10 rounded-2xl
                    bg-gradient-to-br ${stat.gradient}
                    shadow-lg shadow-black/5
                    group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl
                    transition-all duration-500 ease-out
                  `}
                >
                  <Icon
                    size={24}
                    className={`lg:size-32 stroke-[2] ${stat.iconColor} group-hover:animate-pulse`}
                  />
                </div>

                {/* Animated Number */}
                <div className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-2">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      enableScrollSpy={false} // we control via inView
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </div>

                {/* Title */}
                <h3 className="text-base lg:text-md font-sm text-gray-700  leading-relaxed font-light">
                  {stat.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
