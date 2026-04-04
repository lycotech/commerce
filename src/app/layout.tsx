import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
    "A multi-sector investment holding company structuring access to real estate, financial markets, and institutional-grade opportunities across Africa.",
  keywords: [
    "investment holding company",
    "real estate",
    "asset management",
    "Africa",
    "Pennyvest",
    "Invest-Trust",
    "structured finance",
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
    description: "We Build the Infrastructure That Powers Wealth.",
    url: "/",
    siteName: "Commerce Alliance Holdings",
    type: "website",
    images: [{ url: "/logo2.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commerce Alliance Holdings Limited",
    description: "We Build the Infrastructure That Powers Wealth.",
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
        {children}
      </body>
    </html>
  );
}
