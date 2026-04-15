import Link from "next/link";
import { Mail, Globe, HeartHandshake } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-gray-50 via-white to-teal-50/30 border-t border-gray-200 overflow-hidden">
      {/* Soft background orbs (consistent with your design system) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 bottom-10 w-[400px] h-[400px] bg-teal-300/5 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-indigo-300/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 lg:py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                A
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-gray-900 tracking-tight">
                  ATIS NAMA
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-teal-600/80 font-semibold">
                  Foundation
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md font-light">
              We nurture dignity for elders, empower children, and build
              stronger communities through care, education, and sustainable
              support systems.
            </p>

            {/* Social / Contact */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-teal-50 transition"
              >
                <Globe size={16} className="text-teal-600" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-indigo-50 transition"
              >
                <Mail size={16} className="text-indigo-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/projects"
                  className="hover:text-teal-600 transition"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-600 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-teal-600 transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">
              Resources
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-indigo-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-indigo-600 transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="hover:text-indigo-600 transition"
                >
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="hover:text-indigo-600 transition"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} ATIS NAMA Foundation
          </p>

          <div className="flex items-center gap-6">
            <Link href="/careers" className="hover:text-teal-600 transition">
              Careers
            </Link>
            <Link href="/offices" className="hover:text-teal-600 transition">
              Offices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
