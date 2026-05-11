import { DonateHeader } from "@/features/Donate/components/DonateHeader";
import { DonateOptions } from "@/features/Donate/components/DonateOptions";
import { DonateForm } from "@/features/Donate/components/DonateForm";
import { DonateImpact } from "@/features/Donate/components/DonateImpact";
import { DonationAccounts } from "@/features/Donate/components/DonationAccount";

const page = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-tr from-gray-50 via-white to-amber-50/30 overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-amber-200/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-teal-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <DonateHeader />
        <DonationAccounts />

        {/*<DonateOptions />*/}

        {/*<div className="mt-12 max-w-2xl mx-auto">
          <DonateForm />
        </div>*/}

        <DonateImpact />
      </div>
    </section>
  );
};

export default page;
