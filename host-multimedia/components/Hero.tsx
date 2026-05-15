"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Star,
  Gem,
  Zap,
  Target,
} from "lucide-react";

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
        xl:px-16
        2xl:px-24
        bg-[#050510]
        text-white
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_30%)]"></div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      {/* ================= MAIN GRID ================= */}

      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-2
          gap-10
          xl:gap-16
          items-center
          w-full
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-[700px]
          "
        >
          {/* TAG */}

          <div
            className="
              inline-flex
              items-center
              gap-3

              px-5
              py-3

              rounded-full

              border
              border-white/10

              bg-white/[0.04]

              backdrop-blur-xl

              mb-7

              shadow-[0_0_40px_rgba(168,85,247,0.15)]
            "
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400"></div>

            <span className="text-[11px] tracking-[4px] text-white/90">
              WELCOME TO INSIDEHOST
            </span>
          </div>

          {/* HEADING */}

          <h1
            className="
              font-black
              leading-[0.9]

              text-[58px]
              sm:text-[72px]
              md:text-[82px]
              xl:text-[92px]
              2xl:text-[108px]
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
              mt-8

              text-gray-400

              leading-[1.8]

              max-w-[720px]

              text-[17px]
              xl:text-[20px]
            "
          >
            We craft premium branding experiences through creative
            design, cinematic visuals, content strategy and modern
            digital storytelling.
          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex gap-5 flex-wrap">

            <a href="#portfolio">

              <button
                className="
                  group
                  relative
                  overflow-hidden

                  px-10
                  py-5

                  rounded-2xl

                  bg-gradient-to-r
                  from-purple-500
                  via-pink-500
                  to-blue-500

                  text-white
                  font-semibold

                  text-lg

                  shadow-[0_20px_80px_rgba(99,102,241,0.4)]

                  hover:scale-105

                  transition-all
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
                  px-10
                  py-5

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  backdrop-blur-xl

                  hover:bg-white/[0.08]

                  text-white
                  font-semibold

                  text-lg

                  transition-all
                  duration-300
                "
              >
                Contact Us
              </button>

            </a>

          </div>

          {/* STATS */}

          <div
            className="
              mt-14

              flex
              flex-wrap

              gap-8
              xl:gap-12
            "
          >
            {/* STAT */}

            <div className="flex items-center gap-4">

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-gradient-to-br
                  from-purple-500/20
                  to-pink-500/10

                  border
                  border-purple-500/20

                  flex
                  items-center
                  justify-center
                "
              >
                <Briefcase className="w-7 h-7 text-purple-400" />
              </div>

              <div>
                <h3 className="text-5xl font-bold">120+</h3>

                <p className="text-gray-400 mt-1 text-lg">
                  Projects Completed
                </p>
              </div>

            </div>

            <div className="w-px h-20 bg-white/10 hidden xl:block"></div>

            {/* STAT */}

            <div className="flex items-center gap-4">

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-gradient-to-br
                  from-pink-500/20
                  to-purple-500/10

                  border
                  border-pink-500/20

                  flex
                  items-center
                  justify-center
                "
              >
                <Users className="w-7 h-7 text-pink-400" />
              </div>

              <div>
                <h3 className="text-5xl font-bold">50+</h3>

                <p className="text-gray-400 mt-1 text-lg">
                  Happy Clients
                </p>
              </div>

            </div>

            <div className="w-px h-20 bg-white/10 hidden xl:block"></div>

            {/* STAT */}

            <div className="flex items-center gap-4">

              <div
                className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-gradient-to-br
                  from-blue-500/20
                  to-purple-500/10

                  border
                  border-blue-500/20

                  flex
                  items-center
                  justify-center
                "
              >
                <Star className="w-7 h-7 text-blue-400" />
              </div>

              <div>
                <h3 className="text-5xl font-bold">4.8★</h3>

                <p className="text-gray-400 mt-1 text-lg">
                  Client Rating
                </p>
              </div>

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
            justify-center
            items-center
            w-full
          "
        >
          {/* MAIN PREMIUM CARD */}

          <div
            className="
              relative

              w-full

              max-w-[760px]

              rounded-[42px]

              border
              border-purple-500/20

              bg-gradient-to-br
              from-[#1b1530]/95
              via-[#161127]/95
              to-[#0f1020]/95

              backdrop-blur-3xl

              overflow-hidden

              p-8
              xl:p-10

              shadow-[0_0_80px_rgba(168,85,247,0.18)]
            "
          >
            {/* OUTER GLOW */}

            <div
              className="
                absolute
                inset-0

                rounded-[42px]

                border
                border-white/5
              "
            ></div>

            {/* DOTS */}

            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:22px_22px]"></div>

            {/* BADGE */}

            <div
              className="
                relative
                z-10

                inline-flex
                items-center
                gap-2

                px-5
                py-3

                rounded-full

                border
                border-purple-500/30

                bg-purple-500/10

                text-white/90

                text-xs

                tracking-[3px]

                backdrop-blur-xl
              "
            >
              ✦ CREATIVE DESIGN STUDIO
            </div>

            {/* IMAGE SECTION */}

            <div
              className="
                relative

                flex
                justify-center
                items-center

                pt-6
              "
            >
              {/* CLEAN GLOW BEHIND GIRL */}

              <div
                className="
                  absolute

                  w-[320px]
                  h-[320px]

                  xl:w-[420px]
                  xl:h-[420px]

                  rounded-full

                  bg-gradient-to-r
                  from-pink-500/30
                  via-purple-500/25
                  to-blue-500/30

                  blur-[90px]

                  opacity-90
                "
              ></div>

              {/* RING */}

              <div
                className="
                  absolute

                  w-[380px]
                  h-[380px]

                  xl:w-[480px]
                  xl:h-[480px]

                  rounded-full

                  border
                  border-purple-400/20
                "
              ></div>

              {/* IMAGE */}

              <img
                src="/girl-image.png"
                alt="InsideHost Designer"
                className="
                  relative
                  z-10

                  w-full

                  max-w-[300px]
                  xl:max-w-[400px]

                  h-auto
                  object-contain

                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]

                  select-none
                  pointer-events-none
                "
              />
            </div>

            {/* TEXT */}

            <div
              className="
                relative
                z-10

                text-center

                mt-2
              "
            >
              <h3
                className="
                  font-black

                  text-[42px]
                  xl:text-[54px]

                  leading-tight

                  bg-gradient-to-r
                  from-pink-400
                  via-purple-300
                  to-blue-400

                  bg-clip-text
                  text-transparent
                "
              >
                Why We Design
              </h3>

              <p
                className="
                  mt-5

                  text-gray-300

                  leading-[1.7]

                  max-w-[620px]

                  mx-auto

                  text-[18px]
                  xl:text-[22px]
                "
              >
                Great design is more than aesthetics —
                it’s about creating experiences that connect,
                communicate and convert.
              </p>
            </div>

            {/* DIVIDER */}

            <div className="relative z-10 h-px w-full bg-white/10 my-10"></div>

            {/* FEATURES */}

            <div
              className="
                relative
                z-10

                grid
                grid-cols-3

                gap-5
              "
            >
              {/* CARD */}

              <div
                className="
                  rounded-3xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  p-5

                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-pink-500/20
                    to-purple-500/10

                    border
                    border-pink-500/20

                    flex
                    items-center
                    justify-center

                    mb-5
                  "
                >
                  <Gem className="w-7 h-7 text-pink-400" />
                </div>

                <h4 className="text-white font-bold text-[20px]">
                  Premium Quality
                </h4>

                <p className="text-gray-400 mt-3 leading-relaxed text-[16px]">
                  High-end visuals crafted with precision and creativity.
                </p>
              </div>

              {/* CARD */}

              <div
                className="
                  rounded-3xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  p-5

                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-purple-500/20
                    to-blue-500/10

                    border
                    border-purple-500/20

                    flex
                    items-center
                    justify-center

                    mb-5
                  "
                >
                  <Zap className="w-7 h-7 text-purple-400" />
                </div>

                <h4 className="text-white font-bold text-[20px]">
                  Fast Delivery
                </h4>

                <p className="text-gray-400 mt-3 leading-relaxed text-[16px]">
                  Quick turnaround without compromising on quality.
                </p>
              </div>

              {/* CARD */}

              <div
                className="
                  rounded-3xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  p-5

                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-blue-500/20
                    to-purple-500/10

                    border
                    border-blue-500/20

                    flex
                    items-center
                    justify-center

                    mb-5
                  "
                >
                  <Target className="w-7 h-7 text-blue-400" />
                </div>

                <h4 className="text-white font-bold text-[20px]">
                  Strategic Impact
                </h4>

                <p className="text-gray-400 mt-3 leading-relaxed text-[16px]">
                  Designs that drive engagement and deliver results.
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}