import { ArrowRight, Building, User, Handshake, HardHat } from "lucide-react";

const partnerTypes = [
  {
    icon: Building,
    label: "Institutional Investors",
    description:
      "Pension funds, family offices, and institutional capital seeking structured access to real assets.",
  },
  {
    icon: User,
    label: "High Net Worth Individuals",
    description:
      "Sophisticated investors looking for curated, disciplined investment opportunities across asset classes.",
  },
  {
    icon: Handshake,
    label: "Strategic Partners",
    description:
      "Companies, advisors, and platforms aligned with our mission to expand access to wealth-building infrastructure.",
  },
  {
    icon: HardHat,
    label: "Developers & Operators",
    description:
      "Real estate developers and operators seeking structured capital partners for high-value projects.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Investors &amp; Partners
            </span>
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Work{" "}
            <span className="gold-text font-semibold">With Us</span>
          </h2>
        </div>

        {/* Partner type cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {partnerTypes.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group border border-[#C9A96E]/12 hover:border-[#C9A96E]/35 bg-[#08080A]/60 p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 border border-[#C9A96E]/25 flex items-center justify-center mb-5 group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                <Icon size={18} className="text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300" />
              </div>
              <h3
                className="text-[18px] font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {label}
              </h3>
              <div className="w-6 h-[1px] bg-[#C9A96E]/30 mb-4 group-hover:w-10 transition-all duration-300" />
              <p
                className="text-[13px] leading-[1.8] text-[#f0ede8]/50"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:info@commercealliance.com"
            className="btn-gold inline-flex items-center gap-3 text-[#08080A] font-semibold text-[13px] tracking-[0.15em] uppercase px-10 py-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Start a Conversation
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
