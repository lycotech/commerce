import Image from "next/image";
import { CheckCircle } from "lucide-react";

const keyLines = [
  "We structure access, not just investments.",
  "We prioritize discipline over hype.",
  "We build for longevity, not trends.",
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Who We Are
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.1] text-white mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Holding Company{" "}
              <span className="gold-text font-semibold">Built for Scale</span>
            </h2>

            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/60 mb-5"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Commerce Alliance Holdings Limited provides strategic oversight
              and capital allocation across a growing ecosystem of financial and
              real asset platforms.
            </p>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/60 mb-10"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              We operate at the intersection of investment, infrastructure, and
              innovation — designing pathways that allow individuals and
              institutions to participate in opportunities traditionally reserved
              for a select few.
            </p>

            {/* Key lines */}
            <div className="flex flex-col gap-4">
              {keyLines.map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-[#C9A96E] mt-[2px] shrink-0"
                  />
                  <p
                    className="text-[14px] text-[#f0ede8]/75 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="relative hidden lg:block">
            <div className="relative h-[480px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85"
                alt="Aerial city at night"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#C9A96E]/05" />

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#C9A96E]/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#C9A96E]/50" />

              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#08080A]/85 backdrop-blur-sm border border-[#C9A96E]/20 p-6">
                <p
                  className="text-[11px] tracking-[0.25em] uppercase text-[#C9A96E] mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Our Mission
                </p>
                <p
                  className="text-[20px] font-light text-white leading-snug"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Structuring access to institutional-grade opportunities across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
