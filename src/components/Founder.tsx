import Image from "next/image";
import { CheckCircle, GraduationCap, Briefcase } from "lucide-react";

const focuses = [
  "Expanding access to investment opportunities",
  "Building asset-backed financial products",
  "Creating platforms that enable wealth creation at scale",
];

export default function Founder() {
  return (
    <section id="founder" className="relative py-28 bg-[#08080A] overflow-hidden">
      {/* Subtle dark background */}
      <div className="absolute inset-0 bg-[#08080A]" />

      {/* Gold ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[500px] bg-[#C9A96E]/04 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Portrait side ── */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="relative h-[520px] w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/ceo.jpeg"
                alt="Adeniran Adewole — Group Chief Executive, Commerce Alliance Holdings Limited"
                fill
                className="object-cover object-[center_15%]"
                priority
              />
              {/* Subtle bottom fade to blend into name card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-[#08080A]/10 to-transparent" />
              {/* Very light gold atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#C9A96E]/06" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#C9A96E]/50" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#C9A96E]/50" />

              {/* Name card */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#08080A]/90 backdrop-blur-sm border-t border-[#C9A96E]/20 p-5">
                <p
                  className="text-[22px] font-semibold text-white leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Adeniran Adewole
                </p>
                <p
                  className="text-[11px] tracking-[0.18em] uppercase text-[#C9A96E]/80 mt-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Group Chief Executive Officer
                </p>
                <p
                  className="text-[11px] tracking-[0.1em] text-[#f0ede8]/35 mt-[2px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Commerce Alliance Holdings Limited
                </p>
              </div>
            </div>

            {/* Credentials strip */}
            <div className="grid grid-cols-2 gap-3 mt-3 max-w-md mx-auto lg:mx-0">
              <div className="bg-[#0D1117] border border-[#C9A96E]/12 p-4 flex items-start gap-3">
                <GraduationCap size={15} className="text-[#C9A96E]/60 mt-[2px] shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.1em] text-[#C9A96E]/70 uppercase mb-1" style={{ fontFamily: "var(--font-inter)" }}>Education</p>
                  <p className="text-[12px] text-[#f0ede8]/55 leading-snug" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>MSc Finance, Rome Business School</p>
                </div>
              </div>
              <div className="bg-[#0D1117] border border-[#C9A96E]/12 p-4 flex items-start gap-3">
                <Briefcase size={15} className="text-[#C9A96E]/60 mt-[2px] shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.1em] text-[#C9A96E]/70 uppercase mb-1" style={{ fontFamily: "var(--font-inter)" }}>Background</p>
                  <p className="text-[12px] text-[#f0ede8]/55 leading-snug" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>Estate Management & Capital Markets</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bio side ── */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Founder & Group Chief Executive
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-[52px] font-light text-white leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Leading with{" "}
              <span className="gold-text font-semibold">Vision</span>,<br />
              Building with{" "}
              <span className="gold-text font-semibold">Purpose</span>
            </h2>

            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/60 mb-5"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Adeniran Adewole is a finance and real estate professional with
              experience spanning asset management, capital markets, and
              structured investments.
            </p>

            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/60 mb-5"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              He leads Commerce Alliance with a clear vision: to build one of
              Africa's most trusted and scalable financial ecosystems. With a
              background in Estate Management and a Master's degree in Finance
              from the Rome Business School, he has played key roles across
              investment and financial institutions — including serving as a{" "}
              <span className="text-[#f0ede8]/80">Non-Executive Director</span>{" "}
              within Nigeria's mortgage banking sector.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-[#C9A96E]/20 to-transparent my-8" />

            {/* Leadership focus */}
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[#C9A96E]/70 mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Under His Leadership
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {focuses.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#C9A96E] mt-[3px] shrink-0" />
                  <p
                    className="text-[14px] text-[#f0ede8]/65 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="border-l-2 border-[#C9A96E]/50 pl-5">
              <p
                className="text-[18px] md:text-[22px] font-light text-[#f0ede8]/70 leading-snug italic"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                "To build one of Africa's most trusted and scalable financial ecosystems."
              </p>
              <p
                className="text-[11px] tracking-[0.15em] uppercase text-[#C9A96E]/50 mt-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                — Adeniran Adewole, Group CEO
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
