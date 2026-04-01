import { MapPin, Mail, Phone } from "lucide-react";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "Who We Are", href: "#who-we-are" },
      { label: "Our Ecosystem", href: "#ecosystem" },
      { label: "What We Do", href: "#what-we-do" },
      { label: "Philosophy", href: "#philosophy" },
    ],
  },
  {
    heading: "Subsidiaries",
    links: [
      { label: "Pennyvest", href: "#ecosystem" },
      { label: "Invest-Trust Asset Management", href: "#ecosystem" },
    ],
  },
  {
    heading: "Engage",
    links: [
      { label: "Partner With Us", href: "#partners" },
      { label: "Institutional Investors", href: "#partners" },
      { label: "Strategic Partners", href: "#partners" },
      { label: "Contact", href: "mailto:info@commercealliance.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#C9A96E]/12">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span
                className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/60 block mb-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Commerce Alliance
              </span>
              <span
                className="text-[22px] font-semibold text-white"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Holdings Limited
              </span>
            </div>

            <p
              className="text-[13px] leading-[1.85] text-[#f0ede8]/45 mb-8 max-w-xs"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              A multi-sector investment holding company structuring access to
              real estate, financial markets, and institutional-grade
              opportunities across Africa.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A96E]/60 mt-[2px] shrink-0" />
                <p
                  className="text-[12px] leading-[1.7] text-[#f0ede8]/45"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  18th Floor, Western House
                  <br />
                  8/10 Broad Street, Lagos Island
                  <br />
                  Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#C9A96E]/60 shrink-0" />
                <a
                  href="mailto:info@commercealliance.com"
                  className="text-[12px] text-[#f0ede8]/45 hover:text-[#C9A96E] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  info@commercealliance.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9A96E]/60 shrink-0" />
                <span
                  className="text-[12px] text-[#f0ede8]/45"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  +234 XXX XXX XXXX
                </span>
              </div>
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
                      className="text-[13px] text-[#f0ede8]/45 hover:text-[#C9A96E] transition-colors duration-200"
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
          className="text-[11px] text-[#f0ede8]/25 tracking-[0.05em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Commerce Alliance Holdings Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1px] bg-[#C9A96E]/30" />
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]/40"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Structured Capital. Real Assets. Scalable Wealth.
          </span>
          <div className="w-4 h-[1px] bg-[#C9A96E]/30" />
        </div>
      </div>
    </footer>
  );
}
