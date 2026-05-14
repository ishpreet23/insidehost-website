"use client";

import { motion } from "framer-motion";

/* ================= HERO ================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-28 px-6 md:px-20 bg-gradient-to-br from-[#070710] via-[#0f0f1a] to-[#05050a] text-white"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[200px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/20 blur-[200px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[180px] rounded-full"></div>

      {/* ================= GRID ================= */}

      <div className="relative z-10 grid md:grid-cols-2 gap-4 items-center w-full">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[650px]"
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-[0_0_40px_rgba(168,85,247,0.25)]">

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.9)]"></div>

            <span className="text-sm tracking-[3px] text-white/90">
              WELCOME TO INSIDEHOST
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl xl:text-[92px] font-black leading-[0.92]">

            We Design <br />

            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Visuals
            </span>

            <br />

            That Speak
          </h1>

          {/* TEXT */}
          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            We craft premium branding experiences through
            creative design, cinematic visuals, content strategy
            and modern digital storytelling.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-5 flex-wrap">

            <a href="#portfolio">
              <button className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold text-lg shadow-[0_20px_60px_rgba(99,102,241,0.35)] hover:scale-105 transition duration-300">

                <span className="relative z-10">
                  View Portfolio →
                </span>

                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 bg-white/20 skew-x-12"></div>
              </button>
            </a>

            <a href="#contact">
              <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white text-lg font-semibold hover:scale-105 transition duration-300">
                Contact Us
              </button>
            </a>

          </div>

          {/* STATS */}
          <div className="flex gap-14 mt-16 flex-wrap">

            <div>
              <h3 className="text-4xl font-bold text-white">
                120+
              </h3>

              <p className="text-gray-400 text-base mt-2">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                50+
              </h3>

              <p className="text-gray-400 text-base mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                4.8★
              </h3>

              <p className="text-gray-400 text-base mt-2">
                Client Rating
              </p>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden md:flex justify-end items-end h-[920px]"
        >
          {/* BIG GLOW */}
          <div className="absolute right-0 w-[900px] h-[900px] bg-gradient-to-r from-purple-500/25 via-pink-500/15 to-blue-500/25 blur-[200px] rounded-full"></div>

          {/* FULL SIZE GIRL IMAGE */}
          <img
            src="/girl-image.png"
            alt="InsideHost Designer"
            className="
              relative
              z-10
              w-[950px]
              lg:w-[1100px]
              xl:w-[1250px]
              max-w-none
              object-contain
              drop-shadow-[0_30px_120px_rgba(168,85,247,0.45)]
              select-none
              pointer-events-none
              translate-x-16
            "
          />
        </motion.div>

      </div>
    </section>
  );
}