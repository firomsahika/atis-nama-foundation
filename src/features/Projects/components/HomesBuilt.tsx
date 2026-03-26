import Image from "next/image";
import { Home } from "lucide-react";

import home1 from "../../../../public/assets/homesbuilt/home1.png";
import home2 from "../../../../public/assets/homesbuilt/home2.png";
import home3 from "../../../../public/assets/homesbuilt/home3.png";
import home4 from "../../../../public/assets/homesbuilt/home4.png";
import home5 from "../../../../public/assets/homesbuilt/home5.png";
import home6 from "../../../../public/assets/homesbuilt/home6.png";
import home7 from "../../../../public/assets/homesbuilt/home7.png";
import home8 from "../../../../public/assets/homesbuilt/home8.png";

const homeProjects = [
  {
    id: 1,
    title: "Safe Home for Elder Widow - Nekemte",
    description:
      "Constructed a fully furnished two-room house with kitchen and sanitation facility for an elderly widow.",
    image: home1,
    date: "March 2025",
    impact: "1 Family • Dignified Living",
  },
  {
    id: 2,
    title: "Renovation of 12 Elder Homes",
    description:
      "Roof repair, painting, and clean water access provided to 12 vulnerable elderly households.",
    image: home2,
    date: "February 2025",
    impact: "12 Households",
  },
  {
    id: 3,
    title: "New Shelter for 3 Orphan Families",
    description:
      "Built emergency shelter with solar lighting for families who lost their homes.",
    image: home3,
    date: "January 2025",
    impact: "3 Families",
  },
  {
    id: 4,
    title: "Safe Home for Elder Widow - Nekemte",
    description:
      "Constructed a fully furnished two-room house with kitchen and sanitation facility for an elderly widow.",
    image: home4,
    date: "March 2025",
    impact: "1 Family • Dignified Living",
  },
  {
    id: 5,
    title: "Renovation of 12 Elder Homes",
    description:
      "Roof repair, painting, and clean water access provided to 12 vulnerable elderly households.",
    image: home5,
    date: "February 2025",
    impact: "12 Households",
  },
  {
    id: 6,
    title: "New Shelter for 3 Orphan Families",
    description:
      "Built emergency shelter with solar lighting for families who lost their homes.",
    image: home6,
    date: "January 2025",
    impact: "3 Families",
  },
];

export const HomesBuilt = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          {/*<div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Home className="w-8 h-8 text-white" />
          </div>*/}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Homes Built & Renovated
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Providing dignity through safe and comfortable shelter
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {homeProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
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
                <h3 className="font-semibold text-xl leading-tight text-gray-900 mb-4 line-clamp-2 group-hover:text-teal-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-[15.2px] leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-block px-5 py-2 bg-teal-50 text-teal-700 text-sm font-medium rounded-2xl">
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
