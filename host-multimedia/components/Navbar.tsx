"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ================= SCROLL EFFECT ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= SMOOTH SCROLL ================= */

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled
          ? "bg-[#050510]/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      {/* ================= NAVBAR ================= */}

      <div className="relative flex items-center justify-between px-6 md:px-16 py-5 overflow-hidden">

        {/* GLOW */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute -top-20 left-0 w-[320px] h-[320px] bg-purple-600/20 blur-[120px] rounded-full"></div>

          <div className="absolute -top-20 right-0 w-[320px] h-[320px] bg-blue-600/20 blur-[120px] rounded-full"></div>

        </div>

        {/* LOGO */}

        <button
          onClick={() => scrollToSection("#home")}
          className="relative z-10"
        >
          <h1
            className="
              text-[38px]
              md:text-[58px]
              font-[200]
              tracking-[-4px]
              lowercase
              text-white
              leading-[0.9]
              select-none
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            insidehost
          </h1>
        </button>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-14">

          {/* HOME */}
          <button
            onClick={() => scrollToSection("#home")}
            className="relative text-gray-300 hover:text-white text-[17px] font-medium tracking-wide transition-all duration-300 group"
          >
            Home

            <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* ABOUT */}
          <button
            onClick={() => scrollToSection("#about")}
            className="relative text-gray-300 hover:text-white text-[17px] font-medium tracking-wide transition-all duration-300 group"
          >
            About Us

            <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* SERVICES */}
          <button
            onClick={() => scrollToSection("#services")}
            className="relative text-gray-300 hover:text-white text-[17px] font-medium tracking-wide transition-all duration-300 group"
          >
            Services

            <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* PORTFOLIO */}
          <button
            onClick={() => scrollToSection("#portfolio")}
            className="relative text-gray-300 hover:text-white text-[17px] font-medium tracking-wide transition-all duration-300 group"
          >
            Featured Work

            <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </button>

        </div>

        {/* FEEDBACK BUTTON */}

        <div className="hidden md:flex items-center">

          <button
            onClick={() => scrollToSection("#feedback")}
            className="
              group
              relative
              overflow-hidden
              px-8
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-blue-500
              text-white
              font-semibold
              shadow-[0_15px_50px_rgba(99,102,241,0.35)]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <span className="relative z-10">
              Feedback →
            </span>

            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 bg-white/20 skew-x-12"></div>
          </button>

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl z-20"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="
            md:hidden
            bg-[#050510]/95
            backdrop-blur-2xl
            border-t
            border-white/10
            flex
            flex-col
            items-center
            gap-8
            py-10
          "
        >
          <button
            onClick={() => scrollToSection("#home")}
            className="text-gray-300 hover:text-white transition text-lg"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("#about")}
            className="text-gray-300 hover:text-white transition text-lg"
          >
            About Us
          </button>

          <button
            onClick={() => scrollToSection("#services")}
            className="text-gray-300 hover:text-white transition text-lg"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("#portfolio")}
            className="text-gray-300 hover:text-white transition text-lg"
          >
            Portfolio
          </button>

          <button
            onClick={() => scrollToSection("#feedback")}
            className="
              px-7
              py-3
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-blue-500
              text-white
              font-semibold
              shadow-lg
            "
          >
            Feedback →
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}