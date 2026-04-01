import Image from "next/image";
import { Building2, TrendingUp, Lightbulb, Layers } from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: Building2,
    title: "Real Estate Investment & Development",
    body: "Since 2020, we have structured and executed high-value real estate opportunities with a portfolio exceeding ₦2 billion. Our projects span prime locations including Ikoyi, Gbagada, and Osogbo — complemented by a quarry operation in Ogun State, Nigeria.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Luxury high-rise building",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Asset Management",
    body: "Through regulated frameworks, we deploy capital across diversified asset classes with a focus on stability and growth.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Financial charts and data",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Investment Advisory",
    body: "We guide individuals and institutions in making disciplined, data-driven investment decisions.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Corporate boardroom meeting",
  },
  {
    number: "04",
    icon: Layers,
    title: "Structured Finance",
    body: "We design innovative financial solutions that unlock liquidity and enable scalable participation in real assets.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Modern glass office tower",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-28 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="section-line" />
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              What We Do
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our{" "}
            <span className="gold-text font-semibold">Focus Areas</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.number}
                className="group relative overflow-hidden border border-[#C9A96E]/12 hover:border-[#C9A96E]/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Dark + gold overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/50 to-[#08080A]/90" />
                  <div className="absolute inset-0 bg-[#C9A96E]/05" />

                  {/* Number */}
                  <span
                    className="absolute top-4 right-5 text-[64px] font-bold text-[#C9A96E]/10 leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {area.number}
                  </span>
                </div>

                {/* Text */}
                <div className="bg-[#0D1117] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={18} className="text-[#C9A96E]" />
                    <h3
                      className="text-[22px] font-semibold text-white"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {area.title}
                    </h3>
                  </div>
                  <div className="w-8 h-[1px] bg-[#C9A96E]/40 mb-4 group-hover:w-14 transition-all duration-300" />
                  <p
                    className="text-[14px] leading-[1.85] text-[#f0ede8]/55"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                  >
                    {area.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
