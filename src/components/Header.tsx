"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        overlay
          ? "border-transparent bg-transparent"
          : "border-b border-slate-200 bg-white/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo light={overlay} />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? overlay
                    ? "text-cyan-300"
                    : "text-cyan-700"
                  : overlay
                    ? "text-gray-200 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Start Your Project</Button>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 md:hidden ${
            overlay
              ? "text-gray-200 hover:bg-white/10 hover:text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className={`border-t px-4 py-4 md:hidden ${
            overlay ? "border-white/10 bg-black/80 backdrop-blur-xl" : "border-slate-200 bg-white"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  pathname === link.href
                    ? overlay
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "bg-cyan-50 text-cyan-700"
                    : overlay
                      ? "text-gray-200 hover:bg-white/10 hover:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className={`mt-3 border-t pt-3 ${overlay ? "border-white/10" : "border-slate-200"}`}>
              <Button href="/contact" className="w-full">
                Start Your Project
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
