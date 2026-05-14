import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Clients from "../components/clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#05050a] text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* NEW PREMIUM ABOUT SECTION */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* CLIENT FEEDBACK */}
      <Clients />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}