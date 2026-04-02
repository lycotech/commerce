import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhoWeAre from "@/components/WhoWeAre";
import Ecosystem from "@/components/Ecosystem";
import WhatWeDo from "@/components/WhatWeDo";
import Portfolio from "@/components/Portfolio";
import OurEdge from "@/components/OurEdge";
import Philosophy from "@/components/Philosophy";
import Founder from "@/components/Founder";
import VisionMission from "@/components/VisionMission";
import GeographicFocus from "@/components/GeographicFocus";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
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
      <Portfolio />
      <OurEdge />
      <Philosophy />
      <Founder />
      <VisionMission />
      <GeographicFocus />
      <WhyUs />
      <Partners />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
