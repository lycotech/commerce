const pillars = [
  {
    word: "Access",
    description:
      "Investment opportunities should not be restricted by barriers of entry.",
  },
  {
    word: "Trust",
    description:
      "Transparency, governance, and compliance are foundational.",
  },
  {
    word: "Structure",
    description:
      "Every opportunity must be engineered for sustainability.",
  },
  {
    word: "Scale",
    description: "We build platforms that grow beyond individuals.",
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
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Philosophy
            </span>
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Built on{" "}
            <span className="gold-text font-semibold">Structure</span>.{" "}
            Driven by{" "}
            <span className="gold-text font-semibold">Vision</span>.
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C9A96E]/10">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.word}
              className="relative bg-[#0D1117] p-10 group hover:bg-[#111318] transition-colors duration-300"
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 text-[80px] font-bold text-[#C9A96E]/04 leading-none select-none"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <h3
                  className="text-[40px] font-semibold gold-text mb-4 leading-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {pillar.word}
                </h3>
                <div className="w-6 h-[1px] bg-[#C9A96E]/40 mb-5 group-hover:w-12 transition-all duration-300" />
                <p
                  className="text-[14px] leading-[1.85] text-[#f0ede8]/55"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Power line */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
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
