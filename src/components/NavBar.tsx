"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Support Request", href: "/support-request" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            A
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg text-gray-900 tracking-tight">
              ATIS NAMA
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-teal-600/80 font-semibold">
              Foundation
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative text-sm font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-teal-700"
                      : "text-gray-600 hover:text-teal-600"
                  }
                `}
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-teal-500 to-indigo-500
                    transform transition-transform duration-300 origin-left
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Link
            href="/donate"
            className="
              px-5 py-2 text-sm font-semibold rounded-xl
              bg-gradient-to-r from-teal-600 to-indigo-600
              text-white shadow-sm
              hover:shadow-md hover:scale-[1.02]
              transition-all duration-300
              flex items-center gap-2
            "
          >
            Donate
            <Heart size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};
