import React from "react";
import { ProjectHeader } from "@/features/Projects/components/ProjectHeader";
import { HomesBuilt } from "@/features/Projects/components/HomesBuilt";
import { Feeding } from "@/features/Projects/components/Feeding";
import { ProjectsCTA } from "@/features/Projects/components/ProjectsCTA";

const Page = () => {
  return (
    <div>
      <ProjectHeader />
      <HomesBuilt />
      <Feeding />
      <ProjectsCTA />
    </div>
  );
};

export default Page;
