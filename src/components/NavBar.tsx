"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Heart, Menu, X } from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Support Request", href: "/support-request" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-2"
              : "bg-white border-b border-transparent py-4"
          }
        `}
      >
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* ================= LOGO ================= */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 via-teal-500 to-indigo-600 shadow-md group-hover:scale-105 transition-transform">
              <span className="text-base font-black text-white">A</span>
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-gray-900 transition-colors">
                ATIS NAMA
              </span>
              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-600">
                FOUNDATION
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    relative text-[13px] font-semibold transition-all duration-300
                    ${isActive ? "text-cyan-600" : "text-gray-600 hover:text-cyan-600"}
                  `}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ================= RIGHT SECTION ================= */}
          <div className="flex items-center gap-4">
            <Link
              href="/donate"
              className="hidden md:flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-cyan-600 transition-all active:scale-95"
            >
              Donate
              <Heart size={14} className="fill-white" />
            </Link>

            {/* MOBILE MENU TRIGGER - Always visible Gray/Black */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              className={`
                flex h-10 w-10 items-center justify-center rounded-lg border
                transition-all duration-300 lg:hidden
                ${
                  isScrolled
                    ? "bg-gray-50 border-gray-200 text-gray-900"
                    : "bg-gray-100 border-gray-200 text-gray-900"
                }
              `}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          ref={menuRef}
          className={`
            absolute right-0 top-0 h-full w-[280px] bg-white
            shadow-2xl transition-transform duration-500 ease-in-out
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <span className="font-bold text-gray-900 text-sm">
                  ATIS NAMA
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 bg-gray-100 rounded-lg text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                    pathname === link.href
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="p-5 border-t border-gray-200">
              <Link
                href="/donate"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 py-3 text-white text-sm font-bold shadow-lg"
              >
                <Heart size={16} />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
