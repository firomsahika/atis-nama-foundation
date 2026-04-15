import { ContactHeader } from "@/features/Contact/components/ContactHeader";
import { ContactInfo } from "@/features/Contact/components/ContactInfo";
import { ContactForm } from "@/features/Contact/components/ContactForm";

const page = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-tr from-gray-50 via-white to-teal-50/30 overflow-hidden">
      {/* soft background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-indigo-300/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
