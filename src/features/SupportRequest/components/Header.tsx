// app/support-request/page.tsx
export default function Header() {
  return (
    <>
      {/* Beautiful Header */}
      <section className="relative h-[75vh] min-h-[620px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-950 via-indigo-950 to-amber-950">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/support-hero.jpg"
            alt="Support Request"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8">
            <span className="text-teal-300">❤️</span>
            <span className="text-teal-200 uppercase tracking-[0.4em] text-sm font-semibold">
              Community Help
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Submit a Support Request
          </h1>

          <p className="text-xl md:text-2xl text-teal-100/90 max-w-3xl mx-auto">
            If you know someone in need — an elder without shelter, a child
            without family, or anyone facing hardship — please tell us. We will
            reach out with care and support.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-teal-200/70 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm">Scroll to submit request</span>
          <span className="text-2xl">↓</span>
        </div>
      </section>
    </>
  );
}
