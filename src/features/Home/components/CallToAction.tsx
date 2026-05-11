import React from "react";

export const CallToAction = () => {
  return (
    <section className="py-20 my-10 md:my-20 max-w-6xl mx-auto bg-gradient-to-r from-teal-600 to-indigo-600 rounded-4xl text-white text-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

      <div className="max-w-4xl  mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
          Let's be a bridge for generations; change the lives of elders and
          children together.
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
          By strengthening the love and care between elders and children, let's
          be a constant support for our fellow citizens in need.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Services CTA */}
          <a
            href="/projects"
            className="px-12 py-5 bg-white text-[#1e4356] font-bold text-[11px] tracking-[0.3em] uppercase rounded-sm
        hover:bg-blue-50 transition-all shadow-xl active:scale-95"
          >
            See Projects
          </a>

          {/* Contact CTA */}
          <a
            href="/donate"
            className="px-12 py-5 border border-white/50 text-white font-bold text-[11px] tracking-[0.3em] uppercase rounded-sm
        hover:bg-white/10 transition-all active:scale-95"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};
