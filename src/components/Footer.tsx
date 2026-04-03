import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "Who We Are", href: "#who-we-are" },
      { label: "Our Ecosystem", href: "#ecosystem" },
      { label: "Our Edge", href: "#our-edge" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Philosophy", href: "#philosophy" },
    ],
  },
  {
    heading: "Leadership",
    links: [
      { label: "Founder & CEO", href: "#founder" },
      { label: "Vision & Mission", href: "#vision-mission" },
      { label: "Geographic Focus", href: "#geographic-focus" },
    ],
  },
  {
    heading: "Subsidiaries",
    links: [
      { label: "Invest-Trust Asset Management (ITAML)", href: "https://investtrustasset.com", external: true },
      { label: "Pennyvest Financial Services Limited", href: "https://pennyvest.io", external: true },
      { label: "Commerce Alliance Project Solutions (CAPS)", href: "#ecosystem", external: false },
    ],
  },
  {
    heading: "Engage",
    links: [
      { label: "Partner With Us", href: "#partners" },
      { label: "Institutional Investors", href: "#partners" },
      { label: "High Net-Worth Individuals", href: "#partners" },
      { label: "Contact Us", href: "mailto:info@commerceallianceholdings.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#C9A96E]/12">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/logo2.png"
                alt="Commerce Alliance Holdings Limited"
                width={160}
                height={64}
                className="object-contain object-left"
              />
            </div>

            <p
              className="text-[13px] leading-[1.85] text-[#f0ede8]/40 mb-8 max-w-xs"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              A multi-sector investment holding company structuring access to
              real estate, financial markets, and institutional-grade
              opportunities across Africa and global markets.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A96E]/60 mt-[2px] shrink-0" />
                <p
                  className="text-[12px] leading-[1.75] text-[#f0ede8]/40"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  5th Floor, Katsina House
                  <br />
                  Ralph Shodeinde, Central Area
                  <br />
                  Abuja, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#C9A96E]/60 shrink-0" />
                <a
                  href="mailto:info@commerceallianceholdings.com"
                  className="text-[12px] text-[#f0ede8]/40 hover:text-[#C9A96E] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  info@commerceallianceholdings.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9A96E]/60 shrink-0" />
                <a
                  href="tel:+2348022226387"
                  className="text-[12px] text-[#f0ede8]/40 hover:text-[#C9A96E] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  +234 802 2226 387
                </a>
              </div>
            </div>

            {/* Est. badge */}
            <div className="mt-8 inline-flex items-center gap-2 border border-[#C9A96E]/15 px-4 py-2">
              <div className="w-1 h-1 rounded-full bg-[#C9A96E]" />
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]/50"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Est. 2020
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/70 mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[12px] text-[#f0ede8]/40 hover:text-[#C9A96E] transition-colors duration-200 leading-relaxed block"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A96E]/08 px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-[11px] text-[#f0ede8]/22 tracking-[0.05em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Commerce Alliance Holdings Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1px] bg-[#C9A96E]/25" />
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]/35"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Structured Capital. Real Assets. Scalable Wealth.
          </span>
          <div className="w-4 h-[1px] bg-[#C9A96E]/25" />
        </div>
      </div>
    </footer>
  );
}
