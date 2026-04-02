import { ShieldCheck, TrendingDown, BarChart2, Infinity } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    word: "Asset-Backed Investing",
    description: "Focus on real, income-generating assets",
  },
  {
    icon: TrendingDown,
    word: "Capital Preservation First",
    description: "Risk management before return maximization",
  },
  {
    icon: BarChart2,
    word: "Structured Returns",
    description: "Predictable, well-modeled investment outcomes",
  },
  {
    icon: Infinity,
    word: "Long-Term Value Creation",
    description: "Building wealth that outlives market cycles",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-28 overflow-hidden bg-[#0D1117]"
    >
      {/* Vertical gold line accent */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A96E]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Investment Philosophy
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Built on{" "}
              <span className="gold-text font-semibold">Structure</span>,{" "}
              Discipline,{" "}
              <br className="hidden md:block" />
              and{" "}
              <span className="gold-text font-semibold">Real Assets</span>.
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/55"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              We believe wealth is built on structure, discipline, and assets —
              not speculation. Our philosophy is anchored on four core
              principles that guide every decision we make.
            </p>
          </div>
        </div>

        {/* ── Pillars ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C9A96E]/10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.word}
                className="relative bg-[#0D1117] p-10 group hover:bg-[#111318] transition-colors duration-300 flex flex-col"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A96E] to-[#A07840] transition-all duration-500" />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-10 h-10 border border-[#C9A96E]/20 flex items-center justify-center mb-6 group-hover:border-[#C9A96E]/50 transition-colors duration-300">
                    <Icon size={18} className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300" />
                  </div>

                  {/* Pillar word */}
                  <h3
                    className="text-[26px] font-semibold text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {pillar.word}
                  </h3>

                  <div className="w-6 h-[1px] bg-[#C9A96E]/40 mb-4 group-hover:w-12 transition-all duration-300" />

                  <p
                    className="text-[14px] leading-[1.85] text-[#f0ede8]/50"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Power line ── */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="w-12 h-[1px] bg-[#C9A96E]/40 mx-auto mb-8" />
          <p
            className="text-[22px] md:text-[28px] font-light text-[#f0ede8]/80 leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            We are building a system where wealth creation is not accidental —{" "}
            <span className="text-[#C9A96E] font-semibold">it is structured</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
