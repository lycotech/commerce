import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const markets = [
  {
    country: "Nigeria",
    flag: "🇳🇬",
    status: "Primary Market",
    detail: "Headquarters in Abuja. Active real estate and asset management operations across Lagos, Ogun State, Osogbo, and the FCT.",
    active: true,
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    status: "International Presence",
    detail: "Strategic partnerships and investor relations across the UK market, serving diaspora investors and institutional partners.",
    active: true,
  },
  {
    country: "United States",
    flag: "🇺🇸",
    status: "International Presence",
    detail: "Engagement with US-based institutional capital and diaspora investors seeking Africa-focused investment exposure.",
    active: true,
  },
];

export default function GeographicFocus() {
  return (
    <section id="geographic-focus" className="relative py-28 bg-[#08080A] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-08">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="World map globe"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#08080A]/92" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Geographic Focus
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Where We{" "}
              <span className="gold-text font-semibold">Operate</span>
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/50"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Rooted in Nigeria with a growing international footprint —
              we serve investors locally and globally, with a long-term vision
              to expand across Africa and global markets.
            </p>
          </div>
        </div>

        {/* ── Market cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {markets.map((market) => (
            <div
              key={market.country}
              className="group relative border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 bg-[#0D1117]/80 p-8 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover top bar */}
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A96E] to-[#A07840] transition-all duration-500" />

              {/* Flag + status */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[36px] leading-none">{market.flag}</span>
                <span
                  className="text-[9px] tracking-[0.25em] uppercase border border-[#C9A96E]/25 text-[#C9A96E]/70 px-3 py-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {market.status}
                </span>
              </div>

              {/* Country */}
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={13} className="text-[#C9A96E]/60 shrink-0" />
                <h3
                  className="text-[26px] font-semibold text-white leading-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {market.country}
                </h3>
              </div>

              <div className="w-6 h-[1px] bg-[#C9A96E]/35 mb-4 group-hover:w-12 transition-all duration-300" />

              <p
                className="text-[13px] leading-[1.85] text-[#f0ede8]/50"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                {market.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── Expansion note ── */}
        <div className="border border-[#C9A96E]/12 bg-[#0D1117]/60 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[#C9A96E]/60 mb-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Long-Term Vision
            </p>
            <p
              className="text-[20px] font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Expanding across{" "}
              <span className="gold-text font-semibold">Africa</span> and{" "}
              <span className="gold-text font-semibold">global markets</span> —
              building wealth infrastructure wherever opportunity exists.
            </p>
          </div>
          <a
            href="#partners"
            className="btn-outline-gold shrink-0 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase px-7 py-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Partner With Us
            <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
