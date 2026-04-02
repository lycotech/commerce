import { Globe, Link2, Smartphone, ShieldCheck } from "lucide-react";

const edges = [
  {
    icon: Globe,
    title: "Institutional Thinking, Local Execution",
    description:
      "We apply global best practices within local market realities — bridging the gap between world-class investment standards and on-the-ground African execution.",
  },
  {
    icon: Link2,
    title: "Integrated Ecosystem",
    description:
      "From capital sourcing to asset deployment — all within one structure. Every subsidiary connects seamlessly to deliver end-to-end investment solutions.",
  },
  {
    icon: Smartphone,
    title: "Technology-Driven Access",
    description:
      "We simplify complex investments through digital platforms, making institutional-grade opportunities accessible to a broader base of investors.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    description:
      "Built on a foundation aligned with regulatory standards and investor protection — transparency and accountability are non-negotiable.",
  },
];

export default function OurEdge() {
  return (
    <section id="our-edge" className="relative py-28 bg-[#08080A] overflow-hidden">
      {/* Ambient gold glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[#C9A96E]/04 rounded-full blur-[110px] pointer-events-none" />

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
                Our Edge
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What Sets Us{" "}
              <span className="gold-text font-semibold">Apart</span>
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/50"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Commerce Alliance is designed differently — from structure to
              execution. Here is what distinguishes us from conventional
              investment operators in the market.
            </p>
          </div>
        </div>

        {/* ── Edge cards ── */}
        <div className="grid sm:grid-cols-2 gap-6">
          {edges.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative border border-[#C9A96E]/12 hover:border-[#C9A96E]/35 bg-[#0D1117]/60 p-9 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A96E]/04 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top sweep bar */}
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A96E] to-[#A07840] transition-all duration-500" />

              <div className="relative z-10 flex gap-6">
                {/* Icon box */}
                <div className="shrink-0 w-12 h-12 border border-[#C9A96E]/20 flex items-center justify-center group-hover:border-[#C9A96E]/50 transition-colors duration-300 mt-1">
                  <Icon
                    size={20}
                    className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className="text-[24px] font-semibold text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {title}
                  </h3>
                  <div className="w-6 h-[1px] bg-[#C9A96E]/35 mb-4 group-hover:w-12 transition-all duration-300" />
                  <p
                    className="text-[14px] leading-[1.85] text-[#f0ede8]/50"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
