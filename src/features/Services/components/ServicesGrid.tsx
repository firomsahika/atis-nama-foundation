import React from "react";
import { HeartHandshake, Stethoscope, Baby } from "lucide-react";
import { ServicesCard } from "./ServicesCard";

const services = [
  {
    title: "Nutritional & Shelter Assistance",
    description:
      "Balanced nutrition and dignified, comfortable living spaces that nurture wellbeing and restore a true sense of home.",
    icon: HeartHandshake,
    gradient: "from-teal-50/80 via-emerald-50/60 to-teal-100/40",
    iconColor: "text-teal-600",
  },
  {
    title: "Healthcare & Medical Support",
    description:
      "Regular check-ups, compassionate care, specialist access and reliable medication — preserving health and dignity.",
    icon: Stethoscope,
    gradient: "from-indigo-50/80 via-blue-50/60 to-indigo-100/40",
    iconColor: "text-indigo-600",
  },
  {
    title: "Child Development & Orphan Support",
    description:
      "Supporting vulnerable children without family through quality education, emotional care, nutrition, shelter, and holistic development opportunities.",
    icon: Baby,
    gradient: "from-amber-50/80 via-orange-50/60 to-amber-100/40",
    iconColor: "text-amber-700",
  },
];

export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <ServicesCard key={i} {...service} />
      ))}
    </div>
  );
};