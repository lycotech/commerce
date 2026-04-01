import Image from "next/image";
import { ArrowRight } from "lucide-react";

const entities = [
  {
    tag: "01",
    name: "Pennyvest",
    role: "Technology Platform",
    description:
      "A technology-driven platform enabling access to fractional real estate and curated investment opportunities.",
    highlight: "Fractional Real Estate · Curated Investments",
  },
  {
    tag: "02",
    name: "Invest-Trust Asset Management Limited",
    role: "Licensed Asset Manager",
    description:
      "A licensed asset management company providing structured investment solutions across fixed income, equities, and alternative assets.",
    highlight: "Fixed Income · Equities · Alternatives",
  },
  {
    tag: "03",
    name: "Commerce Alliance (Core)",
    role: "Strategic Engine",
    description:
      "The strategic engine — responsible for capital allocation, deal structuring, and execution across the ecosystem.",
    highlight: "Capital Allocation · Deal Structuring · Execution",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-28 overflow-hidden bg-[#0D1117]">
      {/* Background image — abstract network */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          alt="Abstract technology network"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-transparent to-[#0D1117]" />
      </div>

      {/* Gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A96E]/04 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Ecosystem
            </span>
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            An Integrated{" "}
            <span className="gold-text font-semibold">Wealth Ecosystem</span>
          </h2>
        </div>

        {/* Entity cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {entities.map((entity) => (
            <div
              key={entity.tag}
              className="group relative border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 bg-gradient-to-b from-[#111318]/80 to-[#08080A]/80 backdrop-blur-sm p-8 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Tag */}
              <span
                className="text-[60px] font-bold text-[#C9A96E]/06 absolute top-4 right-6 leading-none select-none"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {entity.tag}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <span
                  className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-3 block"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {entity.role}
                </span>

                <h3
                  className="text-[22px] font-semibold text-white mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {entity.name}
                </h3>

                <div className="w-8 h-[1px] bg-[#C9A96E]/40 mb-4 group-hover:w-16 transition-all duration-300" />

                <p
                  className="text-[14px] leading-[1.8] text-[#f0ede8]/55 mb-6"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {entity.description}
                </p>

                <p
                  className="text-[11px] tracking-[0.1em] text-[#C9A96E]/70"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {entity.highlight}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="text-center border-t border-[#C9A96E]/10 pt-10">
          <p
            className="text-[15px] text-[#f0ede8]/50 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            We connect capital to opportunity —{" "}
            <span className="text-[#C9A96E]">efficiently</span>,{" "}
            <span className="text-[#C9A96E]">transparently</span>, and{" "}
            <span className="text-[#C9A96E]">at scale</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
