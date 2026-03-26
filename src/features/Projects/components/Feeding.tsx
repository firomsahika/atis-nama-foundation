import Image from "next/image";
import { Heart } from "lucide-react";

import feeding1 from "../../../../public/assets/feeding/feed1.png";
import feeding2 from "../../../../public/assets/feeding/feed2.png";
import feeding3 from "../../../../public/assets/feeding/feed3.png";
import feeding4 from "../../../../public/assets/feeding/feed4.png";
import feeding5 from "../../../../public/assets/feeding/feed5.png";
import feeding6 from "../../../../public/assets/feeding/feed6.png";
import feeding7 from "../../../../public/assets/feeding/feed7.png";
import feeding8 from "../../../../public/assets/feeding/feed8.png";

const orphanProjects = [
  {
    id: 1,
    title: "Weekly Feeding Program for 180 Orphans",
    description:
      "Provided nutritious meals, milk, and supplements to orphaned children every week in Nekemte and surrounding areas.",
    image: feeding1,
    date: "March 2025",
    impact: "180 Children Fed Monthly",
  },
  {
    id: 2,
    title: "Back-to-School Nutrition & Supplies",
    description:
      "Distributed balanced food packages along with school materials to support academic performance of vulnerable children.",
    image: feeding2,
    date: "February 2025",
    impact: "245 Children Supported",
  },
  {
    id: 3,
    title: "Emergency Food Relief for Orphanages",
    description:
      "Delivered emergency food aid to three orphanages during the dry season shortage to prevent malnutrition.",
    image: feeding3,
    date: "January 2025",
    impact: "320 Orphans",
  },
  {
    id: 4,
    title: "Weekly Feeding Program for 180 Orphans",
    description:
      "Provided nutritious meals, milk, and supplements to orphaned children every week in Nekemte and surrounding areas.",
    image: feeding4,
    date: "March 2025",
    impact: "180 Children Fed Monthly",
  },
  {
    id: 5,
    title: "Back-to-School Nutrition & Supplies",
    description:
      "Distributed balanced food packages along with school materials to support academic performance of vulnerable children.",
    image: feeding5,
    date: "February 2025",
    impact: "245 Children Supported",
  },
  {
    id: 6,
    title: "Emergency Food Relief for Orphanages",
    description:
      "Delivered emergency food aid to three orphanages during the dry season shortage to prevent malnutrition.",
    image: feeding6,
    date: "January 2025",
    impact: "320 Orphans",
  },
];

export const Feeding = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Orphans Feeding & Care
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Nourishing bodies and brightening the futures of vulnerable
              children
            </p>
          </div>
        </div>

        {/* Projects Grid - Same beautiful style as HomesBuilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {orphanProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Date Badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-2xl text-xs font-medium text-gray-700 shadow-sm">
                  {project.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 pb-8">
                <h3 className="font-semibold text-xl leading-tight text-gray-900 mb-4 line-clamp-2 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-[15.2px] leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-block px-5 py-2 bg-amber-50 text-amber-700 text-sm font-medium rounded-2xl">
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
