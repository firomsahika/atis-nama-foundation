"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Impact Feed", href: "/feed" },
    { name: "Services", href: "/services" },
    { name: "Galleries", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${
          isScrolled
            ? "py-2 backdrop-blur-xl bg-gradient-to-r from-teal-600/40 via-indigo-950/35 to-amber-950/25 border-b border-white/8 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.2)]"
            : "py-2 backdrop-blur-xl bg-gradient-to-r from-teal-600/40 via-indigo-950/35 to-amber-950/25 border-b border-white/8 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.2)]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-teal-400/50 rounded-xl"
        >
          <div
            className="
            w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-indigo-600
            flex items-center justify-center text-white font-extrabold text-xl
            shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-400
          "
          >
            A
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl lg:text-2xl tracking-tight text-white">
              ATIS NAMA
            </span>
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.45em] font-semibold text-white">
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-500/30 backdrop-blur-2xl rounded-full border border-white/10 px-1.5 py-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative px-5 py-2 text-sm t font-medium tracking-wide transition-all duration-300
                  rounded-full
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-teal-600/70 to-indigo-600/70 shadow-sm"
                      : "text-white hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Donate Button */}
        <div className="flex items-center">
          <Link
            href="/donate"
            className="
              px-7 py-2.5 text-sm font-semibold tracking-wider uppercase
              bg-gradient-to-r from-teal-600 to-indigo-600
              hover:from-teal-500 hover:to-indigo-500
              text-white rounded-full shadow-lg shadow-teal-900/30
              transition-all duration-400 hover:scale-[1.03] hover:shadow-xl
              active:scale-95
            "
          >
            Donate Now <Heart size={16} className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </header>
  );
};
