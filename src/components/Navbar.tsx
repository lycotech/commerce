"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Edge", href: "#our-edge" },
  { label: "Leadership", href: "#founder" },
  { label: "Partner", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08080A]/96 backdrop-blur-md border-b border-[#C9A96E]/10 py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#" className="flex items-center shrink-0" aria-label="Commerce Alliance Holdings Limited">
          <Image
            src="/logo2.png"
            alt="Commerce Alliance Holdings Limited"
            width={155}
            height={62}
            className="object-contain object-left"
            priority
          />
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] tracking-[0.15em] uppercase text-[#f0ede8]/55 hover:text-[#C9A96E] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── CTA ── */}
        <a
          href="#partners"
          className="hidden lg:block btn-gold text-[11px] tracking-[0.2em] uppercase font-medium text-[#08080A] px-6 py-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Partner With Us
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0D1117]/98 backdrop-blur-md border-t border-[#C9A96E]/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-[0.15em] uppercase text-[#f0ede8]/70 hover:text-[#C9A96E] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partners"
            className="btn-gold text-center text-[11px] tracking-[0.2em] uppercase font-medium text-[#08080A] px-6 py-3 mt-2"
            style={{ fontFamily: "var(--font-inter)" }}
            onClick={() => setMenuOpen(false)}
          >
            Partner With Us
          </a>
        </div>
      )}
    </header>
  );
}
