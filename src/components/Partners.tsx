import { ArrowRight, Building, User, Globe2, Handshake } from "lucide-react";

const whoWeWorkWith = [
  {
    icon: User,
    label: "High Net-Worth Individuals",
    description:
      "Sophisticated investors seeking curated, asset-backed investment opportunities with structured, predictable returns.",
  },
  {
    icon: Building,
    label: "Institutional Investors",
    description:
      "Pension funds, family offices, and institutional capital seeking exposure to African real assets and alternative investments.",
  },
  {
    icon: Globe2,
    label: "Corporate Organizations",
    description:
      "Companies looking to deploy treasury capital into structured, income-generating investment products.",
  },
  {
    icon: Handshake,
    label: "Development Partners",
    description:
      "Development finance institutions and strategic partners aligned with building scalable financial infrastructure across Africa.",
  },
];

const opportunities = [
  "Structured investment products",
  "Real estate partnerships",
  "Capital raising and deployment",
  "Strategic collaborations",
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 bg-[#0D1117]">

      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[500px] bg-[#C9A96E]/03 rounded-full blur-[120px] pointer-events-none" />

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
                Partner With Us
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We Work{" "}
              <span className="gold-text font-semibold">With</span>
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/50"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              We partner with investors, organizations, and institutions who
              share our commitment to structured, disciplined, and impactful
              wealth creation across Africa and beyond.
            </p>
          </div>
        </div>

        {/* ── Who We Work With cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {whoWeWorkWith.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group border border-[#C9A96E]/12 hover:border-[#C9A96E]/35 bg-[#08080A]/60 p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top hover bar */}
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A96E] to-[#A07840] transition-all duration-500" />

              <div className="w-10 h-10 border border-[#C9A96E]/25 flex items-center justify-center mb-5 group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                <Icon size={17} className="text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300" />
              </div>
              <h3
                className="text-[19px] font-semibold text-white mb-3 leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {label}
              </h3>
              <div className="w-6 h-[1px] bg-[#C9A96E]/30 mb-4 group-hover:w-10 transition-all duration-300" />
              <p
                className="text-[13px] leading-[1.85] text-[#f0ede8]/50"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Opportunities + CTA row ── */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">

          {/* Opportunities block */}
          <div className="border border-[#C9A96E]/12 bg-[#08080A]/60 p-8">
            <p
              className="text-[11px] tracking-[0.28em] uppercase text-[#C9A96E]/70 mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Opportunities Include
            </p>
            <div className="grid grid-cols-1 gap-3">
              {opportunities.map((opp) => (
                <div key={opp} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C9A96E] shrink-0" />
                  <span
                    className="text-[14px] text-[#f0ede8]/65"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {opp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div className="relative border border-[#C9A96E]/20 bg-gradient-to-br from-[#C9A96E]/08 to-transparent p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96E]/06 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p
                className="text-[28px] md:text-[34px] font-light text-white leading-snug mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Ready to start a{" "}
                <span className="gold-text font-semibold">conversation</span>?
              </p>
              <p
                className="text-[14px] text-[#f0ede8]/50 mb-8"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                Reach out to explore how we can work together to structure
                opportunities aligned with your goals.
              </p>
            </div>
            <a
              href="mailto:info@commerceallianceholdings.com"
              className="btn-gold relative z-10 inline-flex items-center gap-3 text-[#08080A] font-semibold text-[13px] tracking-[0.15em] uppercase px-9 py-4 self-start"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Start a Conversation
              <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
