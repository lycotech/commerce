import { Eye, Target, CheckCircle } from "lucide-react";

const missionPoints = [
  "Accessible",
  "Transparent",
  "Asset-backed",
  "Performance-driven",
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="relative py-28 bg-[#0D1117] overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A96E]/08 to-transparent pointer-events-none hidden lg:block" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A96E]/03 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section label ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Vision & Mission
            </span>
            <div className="w-8 h-[1px] bg-[#C9A96E]/50" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Where We Are{" "}
            <span className="gold-text font-semibold">Going</span>
          </h2>
        </div>

        {/* ── Two columns ── */}
        <div className="grid lg:grid-cols-2 gap-px bg-[#C9A96E]/10">

          {/* Vision */}
          <div className="group bg-[#0D1117] hover:bg-[#111318] transition-colors duration-300 p-12 relative overflow-hidden">
            {/* Hover accent */}
            <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A96E] to-[#A07840] transition-all duration-500" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-[#C9A96E]/25 flex items-center justify-center group-hover:border-[#C9A96E]/55 transition-colors duration-300">
                <Eye size={20} className="text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300" />
              </div>
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]/70"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Vision
              </span>
            </div>

            <h3
              className="text-[32px] md:text-[38px] font-light text-white leading-[1.2] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              To become a{" "}
              <span className="gold-text font-semibold">leading African investment group</span>{" "}
              recognized for building financial systems.
            </h3>

            <div className="w-8 h-[1px] bg-[#C9A96E]/35 mb-6" />

            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/55"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              We are building financial systems that enable individuals and
              institutions to create, grow, and preserve wealth — across
              generations and across borders.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-[#0D1117] hover:bg-[#111318] transition-colors duration-300 p-12 relative overflow-hidden">
            {/* Hover accent */}
            <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9A96E] to-[#A07840] transition-all duration-500" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-[#C9A96E]/25 flex items-center justify-center group-hover:border-[#C9A96E]/55 transition-colors duration-300">
                <Target size={20} className="text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300" />
              </div>
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]/70"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Mission
              </span>
            </div>

            <h3
              className="text-[32px] md:text-[38px] font-light text-white leading-[1.2] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              To structure and deliver investment opportunities that{" "}
              <span className="gold-text font-semibold">truly perform</span>.
            </h3>

            <div className="w-8 h-[1px] bg-[#C9A96E]/35 mb-6" />

            <p
              className="text-[14px] text-[#f0ede8]/50 mb-6"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Every opportunity we bring to market must be:
            </p>

            <div className="grid grid-cols-2 gap-3">
              {missionPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-[#C9A96E] shrink-0" />
                  <span
                    className="text-[14px] text-[#f0ede8]/65"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
