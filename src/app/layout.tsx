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
  openGraph: {
    title: "Commerce Alliance Holdings Limited",
    description: "We Build the Infrastructure That Powers Wealth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#08080A] text-[#f0ede8]">
        {children}
      </body>
    </html>
  );
}
