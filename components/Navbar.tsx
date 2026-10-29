"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-brown-800 text-cream-100 md:block">
        <div className="container-x flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href={siteConfig.phoneHref} className="hover:text-white">
              📞 {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              ✉️ {siteConfig.email}
            </a>
          </div>
          <p>📍 {siteConfig.address}</p>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`border-b border-brown-100 bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
        aria-label="Main navigation"
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* Replace this circle with your logo: <Image src="/logo.png" ... /> */}
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brown-700 font-display text-2xl font-bold text-cream-100">
              E
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold text-brown-800">
                {siteConfig.name}
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-brown-500">
                P.O.Box KJ 221 Kumasi Ghana.
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive(link.href)
                      ? "bg-cream-200 text-brown-800"
                      : "text-brown-700 hover:bg-cream-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/admissions" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brown-800 hover:bg-cream-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`grid overflow-hidden border-t border-brown-100 bg-white transition-all duration-300 lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-t-0 opacity-0"
          }`}
        >
          <div className="min-h-0">
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                      isActive(link.href)
                        ? "bg-cream-200 text-brown-800"
                        : "text-brown-700 hover:bg-cream-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/admissions" className="btn-primary w-full">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
