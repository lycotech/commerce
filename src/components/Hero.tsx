import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85"
          alt="City skyline at night"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        {/* Dark overlay with gold tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/60 via-[#0a0700]/75 to-[#08080A]/95" />
        {/* Subtle gold atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A96E]/05 via-transparent to-transparent" />
      </div>

      {/* Floating gold particles */}
      <FloatingParticles />

      {/* Decorative left accent */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#C9A96E]/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="w-8 h-[1px] bg-[#C9A96E]" />
            <span
              className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Commerce Alliance Holdings Limited
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-light leading-[1.05] tracking-[-0.01em] text-white mb-6 animate-fade-in-up"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Building Africa's{" "}
            <br className="hidden sm:block" />
            <span className="gold-shimmer font-semibold">Financial</span> and{" "}
            <br className="hidden sm:block" />
            Real Asset{" "}
            <span className="gold-shimmer font-semibold">Infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base md:text-lg text-[#f0ede8]/65 leading-relaxed max-w-2xl mb-4 animate-fade-in-up delay-200"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Commerce Alliance Holdings Limited is a multi-sector investment
            group driving asset management, real estate development, and capital
            solutions across Nigeria and global markets.
          </p>

          {/* Second subtext line */}
          <p
            className="text-base md:text-lg text-[#f0ede8]/50 leading-relaxed max-w-2xl mb-3 animate-fade-in-up delay-300"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            We structure, deploy, and manage capital across opportunities that
            create long-term value, sustainable income, and generational wealth.
          </p>

          {/* Positioning line */}
          <p
            className="text-[12px] tracking-[0.12em] text-[#C9A96E]/70 mb-12 animate-fade-in-up delay-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A holding company for{" "}
            <span className="text-[#C9A96E]">Pennyvest</span> and{" "}
            <span className="text-[#C9A96E]">
              Invest-Trust Asset Management Limited
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            <a
              href="#ecosystem"
              className="btn-gold inline-flex items-center justify-center gap-2 text-[#08080A] font-semibold text-[13px] tracking-[0.15em] uppercase px-8 py-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore Our Ecosystem
              <ArrowRight size={15} />
            </a>
            <a
              href="#partners"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.15em] uppercase px-8 py-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Partner With Us
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-8 border-t border-[#C9A96E]/15 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in delay-700">
          {[
            { value: "Est. 2020", label: "Years in Operation" },
            { value: "₦2B+", label: "Real Estate Portfolio" },
            { value: "2", label: "Operating Subsidiaries" },
            { value: "Pan‑Africa", label: "Market Reach" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl md:text-3xl font-semibold text-[#C9A96E] mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[11px] tracking-[0.15em] uppercase text-[#f0ede8]/40"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f0ede8]/30 hover:text-[#C9A96E]/60 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
