import { Building2, TrendingUp, Briefcase, Layers } from "lucide-react";

const pillars = [
  { icon: Building2, label: "Real Estate" },
  { icon: TrendingUp, label: "Asset Management" },
  { icon: Briefcase, label: "Investment Advisory" },
  { icon: Layers, label: "Structured Finance" },
];

export default function TrustStrip() {
  return (
    <section id="trust" className="relative bg-[#0D1117] border-y border-[#C9A96E]/12 py-14">
      {/* Subtle top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Tagline */}
        <p
          className="text-center text-[11px] tracking-[0.4em] uppercase text-[#C9A96E]/60 mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Structured Capital. Real Assets. Scalable Wealth.
        </p>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {pillars.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 border border-[#C9A96E]/10 hover:border-[#C9A96E]/30 bg-[#08080A]/40 transition-all duration-300 group"
            >
              <Icon
                size={22}
                className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300"
              />
              <span
                className="text-[12px] tracking-[0.2em] uppercase text-[#f0ede8]/50 group-hover:text-[#f0ede8]/80 transition-colors duration-300 text-center"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
    </section>
  );
}
