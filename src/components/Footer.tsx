import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-indigo-950/95 to-teal-950/90 text-gray-200 overflow-hidden">
      {/* Very subtle decorative orbs – consistent with other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 bottom-20 w-[500px] h-[500px] bg-teal-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute right-0 top-10 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-3xl animate-pulse-slow delay-3000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Bio – glass card style */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="
                w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-indigo-600
                flex items-center justify-center text-white font-extrabold text-2xl
                shadow-lg shadow-teal-900/40
              ">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-black text-3xl lg:text-3.5xl tracking-tight text-white">
                  ATIS NAMA
                </span>
                <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-semibold text-teal-300/80">
                  Foundation
                </span>
              </div>
            </div>

            <p className="text-gray-300/90 leading-relaxed max-w-md text-base font-light">
              Dedicated to nurturing dignity for elders, bright futures for children, and strong intergenerational bonds through care, education, housing, and heritage preservation in Ethiopia.
            </p>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-teal-600/30 hover:border-teal-400/50 transition-all duration-300"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-lg text-teal-300">language</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-300"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-lg text-indigo-300">mail</span>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-teal-300 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300/90">
              <li>
                <Link href="/projects" className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Galleries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="font-semibold text-indigo-300 uppercase tracking-wider text-sm">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-300/90">
              <li>
                <Link href="/privacy" className="hover:text-indigo-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-indigo-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-indigo-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} ATIS NAMA Foundation. Nurturing dignity, hope, and intergenerational bonds.
          </p>

          <div className="flex gap-8">
            <Link href="/careers" className="hover:text-teal-300 transition-colors">
              Careers
            </Link>
            <Link href="/offices" className="hover:text-teal-300 transition-colors">
              Offices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};