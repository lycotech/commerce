import Image from "next/image";
import { MapPin, TrendingUp, Calendar } from "lucide-react";

const projects = [
  {
    id: "01",
    location: "Ikoyi, Lagos",
    tag: "Premium Residential",
    description:
      "High-end residential development in one of Lagos' most prestigious addresses, delivering luxury living with strong rental yields and capital appreciation.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Luxury residential tower Ikoyi Lagos",
    status: "Active",
  },
  {
    id: "02",
    location: "Gbagada, Lagos",
    tag: "Mixed-Use Development",
    description:
      "A strategically positioned mixed-use development in Gbagada's growing commercial and residential corridor, structured for sustainable occupancy and returns.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Mixed-use apartment building Gbagada",
    status: "Active",
  },
  {
    id: "03",
    location: "Osogbo, Osun State",
    tag: "Residential Estate",
    description:
      "An affordable-to-mid-market residential estate expanding access to quality housing in Nigeria's emerging regional capitals, generating consistent yield.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Residential estate Osogbo",
    status: "Active",
  },
  {
    id: "04",
    location: "Ogun State, Nigeria",
    tag: "Quarry & Resources",
    description:
      "A fully operational quarry in Ogun State supplying aggregate and construction materials — a strategic real asset anchoring our infrastructure and real estate supply chain.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Quarry operations Ogun State Nigeria",
    status: "Operational",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 bg-[#0D1117] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#C9A96E]/04 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Real Estate Portfolio
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Over{" "}
              <span className="gold-text font-semibold">₦2 Billion</span>
              <br />
              in Real Assets
            </h2>
          </div>
          <div>
            <p
              className="text-[15px] leading-[1.85] text-[#f0ede8]/55"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Since 2020, Commerce Alliance has assembled a diversified real
              estate portfolio across strategic Nigerian markets — from premium
              Lagos addresses to emerging state capitals and industrial-grade
              resource assets.
            </p>

            {/* Portfolio summary bar */}
            <div className="flex flex-wrap gap-5 mt-6">
              {[
                { icon: Calendar, text: "Since 2020" },
                { icon: MapPin, text: "4 Locations" },
                { icon: TrendingUp, text: "₦2B+ Portfolio Value" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={13} className="text-[#C9A96E]/70" />
                  <span
                    className="text-[12px] tracking-[0.1em] text-[#f0ede8]/50"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden border border-[#C9A96E]/12 hover:border-[#C9A96E]/35 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden shrink-0">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                  unoptimized
                />
                {/* Dark + gold tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/40 to-[#0D1117]/90" />
                <div className="absolute inset-0 bg-[#C9A96E]/05" />

                {/* Status badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] px-2 py-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* ID watermark */}
                <span
                  className="absolute bottom-2 right-3 text-[52px] font-bold text-[#C9A96E]/08 leading-none select-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {project.id}
                </span>
              </div>

              {/* Content */}
              <div className="bg-[#111318] p-5 flex flex-col flex-1">
                <span
                  className="text-[9px] tracking-[0.25em] uppercase text-[#C9A96E]/60 mb-2 block"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.tag}
                </span>

                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={12} className="text-[#C9A96E] mt-[3px] shrink-0" />
                  <h3
                    className="text-[17px] font-semibold text-white leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {project.location}
                  </h3>
                </div>

                <div className="w-5 h-[1px] bg-[#C9A96E]/35 mb-3 group-hover:w-10 transition-all duration-300" />

                <p
                  className="text-[12px] leading-[1.8] text-[#f0ede8]/50 flex-1"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom emphasis line */}
        <div className="mt-14 border-t border-[#C9A96E]/10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[14px] text-[#f0ede8]/40 max-w-lg"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Every project is structurally engineered for yield, appreciation, and long-term sustainability — not speculation.
          </p>
          <a
            href="#partners"
            className="btn-outline-gold text-[11px] tracking-[0.2em] uppercase px-7 py-3 shrink-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Invest in Our Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
