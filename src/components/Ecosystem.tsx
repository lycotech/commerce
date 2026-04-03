import Image from "next/image";
import { BarChart3, Smartphone, Building2, ExternalLink } from "lucide-react";

const entities = [
  {
    icon: BarChart3,
    name: "Invest-Trust Asset Management Limited",
    abbr: "ITAML",
    role: "SEC Licensed Fund/Portfolio Manager",
    description:
      "An SEC licensed fund and portfolio management firm providing portfolio management, wealth advisory, and structured investment products for individuals, corporates, and institutions.",
    highlight: ["Portfolio Management", "Wealth Advisory", "Structured Investment Products"],
    serves: "Individuals · Corporates · Institutions",
    website: "https://investtrustasset.com",
    websiteLabel: "investtrustasset.com",
  },
  {
    icon: Smartphone,
    name: "Pennyvest Financial Services Limited",
    abbr: null,
    role: "Digital Investment Platform",
    description:
      "A digital investment platform democratizing access to wealth creation through fractional ownership, real estate investments, and income-generating assets.",
    highlight: ["Fractional Ownership", "Real Estate Investments", "Income-Generating Assets"],
    serves: "Retail Investors · Mass Market",
    website: "https://pennyvest.io",
    websiteLabel: "pennyvest.io",
  },
  {
    icon: Building2,
    name: "Commerce Alliance Project Solutions Limited",
    abbr: "CAPS",
    role: "Project & Real Asset Solutions",
    description:
      "Focused on real estate development, asset acquisition, and structured property investments designed to deliver consistent returns and capital appreciation.",
    highlight: ["Real Estate Development", "Asset Acquisition", "Structured Property Investments"],
    serves: "Developers · Institutional Partners",
    website: null,
    websiteLabel: null,
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A96E]/04 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Ecosystem
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              An Integrated{" "}
              <span className="gold-text font-semibold">Wealth Ecosystem</span>
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/50"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              We operate through a growing network of specialized subsidiaries —
              each purpose-built to serve a distinct segment of the investment
              landscape, unified under one strategic holding structure.
            </p>
          </div>
        </div>

        {/* ── Entity cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {entities.map((entity) => {
            const Icon = entity.icon;
            return (
              <div
                key={entity.name}
                className="group relative border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 bg-gradient-to-b from-[#111318]/90 to-[#08080A]/90 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                {/* Top accent bar — fills on hover */}
                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A96E] to-[#A07840] transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col flex-1">

                  {/* Icon + Role */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 border border-[#C9A96E]/25 flex items-center justify-center group-hover:border-[#C9A96E]/55 transition-colors duration-300 shrink-0">
                      <Icon size={16} className="text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300" />
                    </div>
                    <span
                      className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E]/60"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {entity.role}
                    </span>
                  </div>

                  {/* Name + Abbr */}
                  <h3
                    className="text-[22px] font-semibold text-white leading-snug mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {entity.name}
                  </h3>
                  {entity.abbr && (
                    <span
                      className="text-[11px] tracking-[0.2em] text-[#C9A96E]/50 mb-4 block"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      ({entity.abbr})
                    </span>
                  )}

                  <div className="w-8 h-[1px] bg-[#C9A96E]/35 mb-5 mt-2 group-hover:w-16 transition-all duration-300" />

                  {/* Description */}
                  <p
                    className="text-[14px] leading-[1.85] text-[#f0ede8]/55 mb-6 flex-1"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                  >
                    {entity.description}
                  </p>

                  {/* Service tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {entity.highlight.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[0.1em] border border-[#C9A96E]/20 text-[#C9A96E]/65 px-3 py-1"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Serves line + website link */}
                  <div className="border-t border-[#C9A96E]/10 pt-4 flex items-center justify-between gap-3">
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase text-[#f0ede8]/30"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Serves: {entity.serves}
                    </span>
                    {entity.website && (
                      <a
                        href={entity.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors duration-200 shrink-0 group/link"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        <span>{entity.websiteLabel}</span>
                        <ExternalLink
                          size={10}
                          className="opacity-60 group-hover/link:opacity-100 transition-opacity"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Closing line ── */}
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
