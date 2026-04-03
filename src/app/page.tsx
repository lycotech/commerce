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
import Preloader from "@/components/Preloader";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import GoldCursor from "@/components/GoldCursor";

export default function Home() {
  return (
    <>
      {/* Preloader — full screen countdown to 100% */}
      <Preloader />

      {/* Gold cursor — desktop only */}
      <GoldCursor />

      {/* Activates Intersection Observer for all [data-reveal] elements */}
      <ScrollRevealInit />

      <main className="bg-[#08080A] min-h-screen">
        <Navbar />

        {/* Hero — no reveal, visible immediately after preloader */}
        <Hero />

        {/* Every section below gets a scroll reveal */}
        <div data-reveal="fade-up">
          <TrustStrip />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <WhoWeAre />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <Ecosystem />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <WhatWeDo />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <Portfolio />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <OurEdge />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <Philosophy />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <Founder />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <VisionMission />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <GeographicFocus />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <WhyUs />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <Partners />
        </div>

        <div data-reveal="scale-up" data-delay="50">
          <FinalCTA />
        </div>

        <div data-reveal="fade-up" data-delay="50">
          <ContactForm />
        </div>

        <Footer />
      </main>
    </>
  );
}
