"use client";

import { motion } from "framer-motion";

/* ================= HERO ================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        pt-24
        lg:pt-28
        px-5
        sm:px-8
        md:px-12
        xl:px-20
        2xl:px-32
        bg-gradient-to-br
        from-[#070710]
        via-[#0f0f1a]
        to-[#05050a]
        text-white
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-pink-500/10 blur-[180px] rounded-full"></div>

      {/* ================= MAIN GRID ================= */}

      <div className="relative z-10 grid lg:grid-cols-2 gap-6 xl:gap-10 items-center w-full">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[760px]"
        >
          {/* TAG */}

          <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-7 shadow-[0_0_40px_rgba(168,85,247,0.25)]">

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.9)]"></div>

            <span className="text-[10px] sm:text-sm tracking-[2px] sm:tracking-[3px] text-white/90">
              WELCOME TO INSIDEHOST
            </span>

          </div>

          {/* HEADING */}

          <h1
            className="
              font-black
              leading-[0.9]
              text-[42px]
              sm:text-[54px]
              md:text-[64px]
              lg:text-[72px]
              xl:text-[84px]
              2xl:text-[105px]
            "
          >
            We Design <br />

            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Visuals
            </span>

            <br />

            That Speak
          </h1>

          {/* TEXT */}

          <p
            className="
              mt-7
              text-gray-400
              leading-relaxed
              max-w-2xl
              text-[16px]
              sm:text-[18px]
              md:text-[19px]
              xl:text-[22px]
              2xl:text-[26px]
            "
          >
            We craft premium branding experiences through
            creative design, cinematic visuals, content strategy
            and modern digital storytelling.
          </p>

          {/* BUTTONS */}

          <div className="mt-9 flex gap-4 flex-wrap">

            <a href="#portfolio">

              <button
                className="
                  group
                  relative
                  overflow-hidden
                  px-7
                  py-4
                  sm:px-9
                  sm:py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500
                  via-pink-500
                  to-blue-500
                  text-white
                  font-semibold
                  text-[15px]
                  sm:text-[17px]
                  xl:text-[19px]
                  shadow-[0_20px_60px_rgba(99,102,241,0.35)]
                  hover:scale-105
                  transition
                  duration-300
                "
              >

                <span className="relative z-10">
                  View Portfolio →
                </span>

                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 bg-white/20 skew-x-12"></div>

              </button>

            </a>

            <a href="#contact">

              <button
                className="
                  px-7
                  py-4
                  sm:px-9
                  sm:py-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:bg-white/10
                  text-white
                  text-[15px]
                  sm:text-[17px]
                  xl:text-[19px]
                  font-semibold
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                Contact Us
              </button>

            </a>

          </div>

          {/* STATS */}

          <div className="flex gap-10 sm:gap-14 mt-14 flex-wrap">

            <div>

              <h3 className="text-[42px] xl:text-[48px] 2xl:text-[62px] font-bold text-white">
                120+
              </h3>

              <p className="text-gray-400 text-sm sm:text-base xl:text-lg mt-2">
                Projects Completed
              </p>

            </div>

            <div>

              <h3 className="text-[42px] xl:text-[48px] 2xl:text-[62px] font-bold text-white">
                50+
              </h3>

              <p className="text-gray-400 text-sm sm:text-base xl:text-lg mt-2">
                Happy Clients
              </p>

            </div>

            <div>

              <h3 className="text-[42px] xl:text-[48px] 2xl:text-[62px] font-bold text-white">
                4.8★
              </h3>

              <p className="text-gray-400 text-sm sm:text-base xl:text-lg mt-2">
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
          className="
            relative
            hidden
            lg:flex
            justify-end
            items-end
            w-full
            h-[700px]
            xl:h-[850px]
            2xl:h-[1050px]
          "
        >
          {/* BIG GLOW */}

          <div
            className="
              absolute
              right-[-40px]
              bottom-[-20px]
              w-[700px]
              h-[700px]
              xl:w-[900px]
              xl:h-[900px]
              2xl:w-[1150px]
              2xl:h-[1150px]
              bg-gradient-to-r
              from-purple-500/25
              via-pink-500/15
              to-blue-500/25
              blur-[220px]
              rounded-full
            "
          ></div>

          {/* GIRL IMAGE */}

          <img
            src="/girl-image.png"
            alt="InsideHost Designer"
            className="
              relative
              z-10
              w-[650px]
              xl:w-[850px]
              2xl:w-[1100px]
              max-w-none
              h-auto
              object-contain
              drop-shadow-[0_30px_120px_rgba(168,85,247,0.45)]
              select-none
              pointer-events-none
              translate-x-4
            "
          />

        </motion.div>

      </div>
    </section>
  );
}