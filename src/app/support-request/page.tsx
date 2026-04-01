import React from "react";
import Header from "../../features/SupportRequest/components/Header";
import { SupportRequestForm } from "@/features/SupportRequest/components/SupportRequestForm";
import { SupportCTA } from "@/features/SupportRequest/components/SupportCTA";

const page = () => {
  return (
    <div>
      <Header />
      <SupportRequestForm />
      <SupportCTA />
    </div>
  );
};

export default page;
