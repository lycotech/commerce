import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.commerceallianceholdings.com"),
  title: "Commerce Alliance Holdings Limited",
  description:
    "Commerce Alliance Holdings Limited is a multi-sector investment holding company in Nigeria structuring access to real estate development, asset management, and institutional-grade financial opportunities across Africa. Home of Pennyvest and Invest-Trust Asset Management.",
  keywords: [
    // Brand & Company
    "Commerce Alliance Holdings",
    "Commerce Alliance Holdings Limited",
    "CAHL",
    "Pennyvest",
    "Pennyvest Financial Services",
    "Invest-Trust Asset Management",
    "Invest-Trust Asset Management Limited",
    "ITAML",
    "Adeniran Adewole",

    // Core Business
    "investment holding company Nigeria",
    "multi-sector investment group Africa",
    "asset management Nigeria",
    "structured investment products",
    "institutional investment Africa",
    "alternative investments Nigeria",
    "private investment group Nigeria",
    "African investment holding company",

    // Real Estate
    "real estate investment Nigeria",
    "real estate development Nigeria",
    "property investment Abuja",
    "real estate Ikoyi",
    "real estate Gbagada",
    "affordable housing Nigeria",
    "residential estate Nigeria",
    "fractional real estate investment",
    "real estate asset management",
    "property development West Africa",

    // Financial Services & Wealth
    "wealth management Nigeria",
    "wealth advisory Africa",
    "portfolio management Nigeria",
    "SEC licensed fund manager Nigeria",
    "digital investment platform Nigeria",
    "fractional ownership investment",
    "income-generating assets Nigeria",
    "capital management Africa",
    "generational wealth Africa",
    "institutional-grade investment",
    "family office Africa",
    "pension fund investment Africa",
    "diaspora investment Nigeria",
    "diaspora real estate Nigeria",

    // Structured Finance
    "structured finance Nigeria",
    "asset-backed investment",
    "capital solutions Africa",
    "treasury investment Nigeria",
    "financial infrastructure Africa",

    // Geography
    "investment company Abuja",
    "investment firm Lagos",
    "Ogun State real estate",
    "Osogbo real estate",
    "FCT investment",
    "pan-Africa investment",
    "Nigeria financial markets",
    "West Africa investment",

    // Broad Discovery
    "best investment company Nigeria",
    "top asset managers Nigeria",
    "real estate investment trust Nigeria",
    "how to invest in Nigeria real estate",
    "structured wealth solutions Africa",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo2.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo2.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Commerce Alliance Holdings Limited",
    description:
      "We Build the Infrastructure That Powers Wealth. A multi-sector investment holding company structuring real estate, asset management, and capital solutions across Nigeria and Africa.",
    url: "/",
    siteName: "Commerce Alliance Holdings",
    type: "website",
    images: [{ url: "/logo2.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commerce Alliance Holdings Limited",
    description:
      "We Build the Infrastructure That Powers Wealth. Real estate, asset management, and structured investment solutions across Africa.",
    images: ["/logo2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Commerce Alliance Holdings Limited",
    url: "https://www.commerceallianceholdings.com",
    logo: "https://www.commerceallianceholdings.com/logo2.png",
    description:
      "A multi-sector investment holding company structuring access to real estate, financial markets, and institutional-grade opportunities across Africa.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "ade@commerceallianceholdings.com",
      contactType: "Customer Service",
    },
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#08080A] text-[#f0ede8]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9XDDK7NL0W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9XDDK7NL0W');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
