import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85"
          alt="City skyline"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Very dark overlay with gold tint */}
        <div className="absolute inset-0 bg-[#08080A]/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/08 via-transparent to-transparent" />
      </div>

      {/* Radial glow at center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-[#C9A96E]/06 rounded-full blur-[100px]" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-[#C9A96E]/25" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-[#C9A96E]/25" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
          <span
            className="text-[11px] tracking-[0.35em] uppercase text-[#C9A96E]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            The Future Is Structured
          </span>
          <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
        </div>

        {/* Headline */}
        <h2
          className="text-4xl md:text-5xl lg:text-[64px] font-light text-white leading-[1.08] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          The Future of Wealth{" "}
          <span className="gold-text font-semibold">is Structured</span>.
        </h2>

        {/* Subtext */}
        <p
          className="text-[15px] leading-[1.85] text-[#f0ede8]/55 max-w-xl mx-auto mb-12"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
        >
          Join us in building a more accessible, transparent, and scalable
          investment ecosystem.
        </p>

        {/* CTA */}
        <a
          href="mailto:info@commercealliance.com"
          className="btn-gold inline-flex items-center gap-3 text-[#08080A] font-semibold text-[13px] tracking-[0.2em] uppercase px-12 py-5"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Partner With Commerce Alliance
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
