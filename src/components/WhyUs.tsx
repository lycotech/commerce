import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#08080A]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=85"
          alt="City sunrise skyline"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Heavy dark + gold tint overlay */}
        <div className="absolute inset-0 bg-[#08080A]/88" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/06 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="section-line" />
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Why Commerce Alliance
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.1] mb-10"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Why We{" "}
            <span className="gold-text font-semibold">Exist</span>
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-5 mb-14">
            <p
              className="text-[16px] leading-[1.9] text-[#f0ede8]/65"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Africa is filled with opportunity, but access remains fragmented
              and inefficient.
            </p>
            <p
              className="text-[16px] leading-[1.9] text-[#f0ede8]/65"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Commerce Alliance exists to bridge that gap — by connecting
              capital to real assets and creating structured pathways for wealth
              creation.
            </p>
          </div>

          {/* Closing punch */}
          <div className="border-l-2 border-[#C9A96E] pl-8 space-y-2">
            <p
              className="text-[24px] md:text-[30px] font-light text-white leading-snug"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We are not participants in the market.
            </p>
            <p
              className="text-[24px] md:text-[30px] font-semibold gold-text leading-snug"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We are architects of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
