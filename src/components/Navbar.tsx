"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Our Ecosystem", href: "#ecosystem" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
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
          ? "bg-[#08080A]/95 backdrop-blur-md border-b border-[#C9A96E]/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]/70 font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Commerce Alliance
          </span>
          <span
            className="text-[18px] font-semibold tracking-[0.05em] text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Holdings Limited
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] tracking-[0.15em] uppercase text-[#f0ede8]/60 hover:text-[#C9A96E] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#partners"
          className="hidden lg:block btn-gold text-[11px] tracking-[0.2em] uppercase font-medium text-[#08080A] px-6 py-3 rounded-none"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Partner With Us
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
