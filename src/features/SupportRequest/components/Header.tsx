export default function Header() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-tr from-gray-50 via-white to-teal-50/30 overflow-hidden">
      {/* Soft background orbs (consistent with services) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 top-10 w-[400px] h-[400px] bg-indigo-300/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        {/* Badge */}
        <span className="inline-block px-5 py-1.5 text-xs font-semibold tracking-widest uppercase text-teal-700/80 bg-teal-100/40 rounded-full border border-teal-200/50">
          Community Support
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-teal-800 via-indigo-800 to-amber-800 bg-clip-text text-transparent leading-tight">
          Submit a Support Request
        </h1>

        {/* Divider */}
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-teal-400 via-indigo-400 to-amber-400 rounded-full" />

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
          If you know someone in need — an elder without shelter, a child
          without family, or anyone facing hardship — share their situation with
          us. We will respond with care, dignity, and support.
        </p>
      </div>
    </section>
  );
}
