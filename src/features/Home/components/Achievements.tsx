import React from "react";
import { Award, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import achievement1 from "../../../../public/assets/achievement1.png";
import achievement2 from "../../../../public/assets/achievement2.png";
import achievement3 from "../../../../public/assets/achievement3.png";
import achievement4 from "../../../../public/assets/achievement4.png";
import acheivement5 from "../../../../public/assets/acheivement5.png";
import achievement6 from "../../../../public/assets/achievement6.png";
import achievement7 from "../../../../public/assets/achievement7.png";
import achievement8 from "../../../../public/assets/achievement8.png";

// Replace these with your actual achievement image paths
const achievements = [
  {
    title: "Community Excellence Award",
    description:
      "Recognized by the Regional Bureau for outstanding service in elder care and shelter management.",
    icon: Award,
    image: achievement1,
    gradient: "from-teal-50/80 via-emerald-50/60 to-teal-100/40",
    iconColor: "text-teal-600",
    accent: "bg-gradient-to-br from-teal-400/10 to-emerald-400/5",
  },
  {
    title: "Health Impact Certification",
    description:
      "Certified for maintaining high-standard medical support and nutritional programs for vulnerable groups.",
    icon: ShieldCheck,
    image: achievement2,
    gradient: "from-indigo-50/80 via-blue-50/60 to-indigo-100/40",
    iconColor: "text-indigo-600",
    accent: "bg-gradient-to-br from-indigo-400/10 to-blue-400/5",
  },
  {
    title: "Outstanding Leadership",
    description:
      "Awarded to our coordination team for excellence in bridging generational gaps through youth-elder programs.",
    icon: Star,
    image: achievement3,
    gradient: "from-amber-50/80 via-orange-50/60 to-amber-100/40",
    iconColor: "text-amber-700",
    accent: "bg-gradient-to-br from-amber-400/10 to-orange-400/5",
  },
  {
    title: "Humanitarian Partner 2025",
    description:
      "Recognized as a key humanitarian partner by international organizations for our local impact.",
    icon: Users,
    image: achievement4,
    gradient: "from-rose-50/80 via-pink-50/60 to-rose-100/40",
    iconColor: "text-rose-600",
    accent: "bg-gradient-to-br from-rose-400/10 to-pink-400/5",
  },
  {
    title: "Humanitarian Partner 2025",
    description:
      "Recognized as a key humanitarian partner by international organizations for our local impact.",
    icon: Users,
    image: acheivement5,
    gradient: "from-rose-50/80 via-pink-50/60 to-rose-100/40",
    iconColor: "text-rose-600",
    accent: "bg-gradient-to-br from-rose-400/10 to-pink-400/5",
  },
  {
    title: "Humanitarian Partner 2025",
    description:
      "Recognized as a key humanitarian partner by international organizations for our local impact.",
    icon: Users,
    image: achievement6,
    gradient: "from-rose-50/80 via-pink-50/60 to-rose-100/40",
    iconColor: "text-rose-600",
    accent: "bg-gradient-to-br from-rose-400/10 to-pink-400/5",
  },
  {
    title: "Humanitarian Partner 2025",
    description:
      "Recognized as a key humanitarian partner by international organizations for our local impact.",
    icon: Users,
    image: achievement7,
    gradient: "from-rose-50/80 via-pink-50/60 to-rose-100/40",
    iconColor: "text-rose-600",
    accent: "bg-gradient-to-br from-rose-400/10 to-pink-400/5",
  },
  {
    title: "Humanitarian Partner 2025",
    description:
      "Recognized as a key humanitarian partner by international organizations for our local impact.",
    icon: Users,
    image: achievement8,
    gradient: "from-rose-50/80 via-pink-50/60 to-rose-100/40",
    iconColor: "text-rose-600",
    accent: "bg-gradient-to-br from-rose-400/10 to-pink-400/5",
  },
];

export const Achievements = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-tr from-gray-50 via-white to-indigo-50/30 overflow-hidden">
      {/* Dreamy background orbs - Matching CoreServices */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 top-20 w-[500px] h-[500px] bg-indigo-300/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-teal-300/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20 space-y-5">
          <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-indigo-700/80 bg-indigo-100/40 rounded-full border border-indigo-200/50">
            Our Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-800 via-teal-800 to-amber-800 bg-clip-text text-transparent leading-tight">
            Milestones of Appreciation
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-400 via-teal-400 to-amber-400 rounded-full" />
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
            Every certificate represents a life changed and a promise kept to
            our community.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-5 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Image Container - The "Certificate" showcase */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {/* Using a standard img tag here, but switch to <Image /> for Next.js */}
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Icon Badge overlapping the image */}
                  <div
                    className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg z-20 flex items-center justify-center`}
                  >
                    <Icon size={20} className={item.iconColor} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Glassy accent bar */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${item.gradient}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
