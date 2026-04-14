import React from "react";
import { ServiceCard } from "@/features/Services/components/ServiceCard";
import { ServicesCTA } from "@/features/Services/components/ServicesCTA";
import { ServicesHeader } from "@/features/Services/components/ServicesHeader";

const Page = () => {
  return (
    <div>
      <ServicesHeader />
      <ServiceCard />
      <ServicesCTA />
    </div>
  );
};

export default Page;
