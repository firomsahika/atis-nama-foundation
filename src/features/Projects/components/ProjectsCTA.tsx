import Link from "next/link";

export const ProjectsCTA = () => {
  return (
    <section className="relative py-24 lg:py-32 !bg-gradient-to-br from-teal-400/50 via-white to-teal-600/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-10 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8">
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-teal-200 text-sm font-medium tracking-widest">
            JOIN THE IMPACT
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-800 via-indigo-800 to-amber-800 bg-clip-text text-transparent leading-tight tracking-tight mb-8">
          Every Gift Builds
          <br />a Better Tomorrow
        </h2>

        <p className="text-md md:text-xl text-black max-w-3xl mx-auto leading-light mb-12">
          Your support helps us build more safe homes for elders, feed orphaned
          children, and create lasting change in communities across Ethiopia.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            href="/donate"
            className="group relative px-12 py-5 bg-white text-teal-950 font-semibold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Donate Now
              <span className="text-2xl transition-transform group-hover:rotate-12">
                ❤️
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>

          <Link
            href="/volunteer"
            className="px-12 py-5 border border-teal-400 hover:border-white text-black font-semibold text-lg rounded-2xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Become a Volunteer
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6 text-sm text-teal-200/70">
          <div className="flex items-center text-black gap-2">
            <span className="text-teal-400">✓</span>
            100% Transparent
          </div>
          <div className="flex text-black items-center gap-2">
            <span className="text-teal-400">✓</span>
            Tax Deductible
          </div>
          <div className="flex text-black items-center gap-2">
            <span className="text-teal-400">✓</span>
            Direct Impact
          </div>
          <div className="flex text-black items-center gap-2">
            <span className="text-teal-400">✓</span>
            Monitored Projects
          </div>
        </div>

        <p className="mt-10 text-black text-sm">
          Together, we can give hope, dignity, and a brighter future to those
          who need it most.
        </p>
      </div>
    </section>
  );
};
