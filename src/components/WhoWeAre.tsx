import Image from "next/image";
import { CheckCircle } from "lucide-react";

const keyLines = [
  "We structure access, not just investments.",
  "We prioritize discipline over hype.",
  "We build for longevity, not trends.",
];

const approach = [
  "Deep local market understanding",
  "Global investment principles",
  "Strong governance and compliance culture",
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[#08080A]" />
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
          alt="City aerial night"
          fill
          className="object-cover object-left"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Text side ── */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Who We Are · Est. 2020
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.1] text-white mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Holding Company{" "}
              <span className="gold-text font-semibold">Built for Scale</span>
            </h2>

            {/* Para 1 — original */}
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/60 mb-5"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Founded in 2020, Commerce Alliance Holdings Limited is a holding
              company at the intersection of{" "}
              <span className="text-[#f0ede8]/80">finance</span>,{" "}
              <span className="text-[#f0ede8]/80">real assets</span>, and{" "}
              <span className="text-[#f0ede8]/80">technology</span> — providing
              strategic oversight and capital allocation across a growing
              ecosystem of financial and real asset platforms.
            </p>

            {/* Para 2 — merged new copy */}
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/60 mb-5"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              We exist to unlock access to structured investment opportunities,
              institutional-grade wealth solutions, and asset-backed growth
              across emerging markets.
            </p>

            {/* Para 3 — original portfolio context */}
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/60 mb-10"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Since inception, we have designed pathways that allow individuals
              and institutions to participate in opportunities traditionally
              reserved for a select few. Today, our real estate portfolio alone
              exceeds{" "}
              <span className="text-[#C9A96E] font-medium">₦2 billion</span>{" "}
              in value, with projects spanning Ikoyi, Gbagada, Osogbo, and a
              quarry operation in Ogun State.
            </p>

            {/* Our Approach — new bullet block */}
            <div className="mb-10">
              <p
                className="text-[11px] tracking-[0.25em] uppercase text-[#C9A96E]/70 mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Approach
              </p>
              <div className="flex flex-col gap-3">
                {approach.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-[#C9A96E] mt-[3px] shrink-0"
                    />
                    <p
                      className="text-[14px] text-[#f0ede8]/70 leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-[#C9A96E]/20 to-transparent mb-10" />

            {/* Principles — original key lines */}
            <div className="mb-10">
              <p
                className="text-[11px] tracking-[0.25em] uppercase text-[#C9A96E]/70 mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Principles
              </p>
              <div className="flex flex-col gap-3">
                {keyLines.map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-[#C9A96E] mt-[3px] shrink-0"
                    />
                    <p
                      className="text-[14px] text-[#f0ede8]/70 leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing punch line — new copy */}
            <div className="border-l-2 border-[#C9A96E]/50 pl-5">
              <p
                className="text-[17px] md:text-[20px] font-light text-[#f0ede8]/75 leading-snug mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                We are not just participants in the market —
              </p>
              <p
                className="text-[17px] md:text-[20px] font-semibold gold-text leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                we are building the infrastructure that powers it.
              </p>
            </div>
          </div>

          {/* ── Visual block ── */}
          <div className="relative hidden lg:block sticky top-28">
            <div className="relative h-[540px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85"
                alt="Aerial city at night"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#C9A96E]/05" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#C9A96E]/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#C9A96E]/50" />

              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#08080A]/88 backdrop-blur-sm border border-[#C9A96E]/20 p-6">
                <p
                  className="text-[11px] tracking-[0.25em] uppercase text-[#C9A96E] mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Track Record · Since 2020
                </p>
                <p
                  className="text-[20px] font-light text-white leading-snug"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Over ₦2 billion in real estate assets structured and
                  delivered across Nigeria.
                </p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[
                { value: "Est. 2020", label: "In Operation" },
                { value: "₦2B+", label: "Portfolio Value" },
                { value: "4", label: "Active Locations" },
                { value: "Pan‑Africa", label: "Market Reach" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#0D1117] border border-[#C9A96E]/12 p-4"
                >
                  <div
                    className="text-[22px] font-semibold text-[#C9A96E] leading-none mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.15em] uppercase text-[#f0ede8]/35"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
