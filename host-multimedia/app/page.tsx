import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Clients from "../components/clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import BeforeAfterSlider from "../components/BeforeAfterSlider";

export default function Home() {
  return (
    <main className="bg-[#05050a] text-white overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* BEFORE AFTER SLIDER */}
      <BeforeAfterSlider />

      {/* CLIENTS */}
      <Clients />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}