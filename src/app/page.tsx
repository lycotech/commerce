import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhoWeAre from "@/components/WhoWeAre";
import Ecosystem from "@/components/Ecosystem";
import WhatWeDo from "@/components/WhatWeDo";
import Philosophy from "@/components/Philosophy";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#08080A] min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <Ecosystem />
      <WhatWeDo />
      <Philosophy />
      <WhyUs />
      <Partners />
      <FinalCTA />
      <Footer />
    </main>
  );
}
