"use client";

import { motion } from "framer-motion";
import {
  FaPalette,
  FaVideo,
  FaBullhorn,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 px-6 md:px-20 bg-[#050510] text-white"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* SMALL TAG */}

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-[0_0_40px_rgba(168,85,247,0.15)]">

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>

            <span className="text-sm tracking-[3px] text-white/80 uppercase">
              About InsideHost
            </span>

          </div>

          {/* MAIN HEADING */}

          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] max-w-3xl">

            <span className="text-white">
              The Intersection of
            </span>

            <br />

            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Art & Strategy
            </span>

          </h2>

          {/* PARAGRAPH 1 */}

          <p className="mt-10 text-gray-300 text-lg md:text-xl leading-[2] max-w-3xl font-light">
            In an era where the digital landscape is saturated with
            noise, standing out requires more than just a presence —
            it requires a signature. Welcome to
            <span className="text-white font-semibold">
              {" "}InsideHost.in
            </span>,
            your comprehensive multimedia partner and creative
            marketing powerhouse. Based at the heart of digital
            innovation, we bridge the gap between raw imagination
            and professional execution.
          </p>

          {/* PARAGRAPH 2 */}

          <div className="mt-10 border-l border-purple-500/40 pl-6">

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
              Our Vision: Elevating Every Pixel
            </h3>

            <p className="text-gray-400 text-lg md:text-xl leading-[2] font-light max-w-3xl">
              At InsideHost, we believe that every brand has a story
              worth telling. Our mission is to ensure that story is
              told with unparalleled clarity, vibrant aesthetics,
              and strategic intent. Whether you are a solo content
              creator, a budding startup, or an established
              enterprise, we provide the creative fuel to propel
              your brand to the forefront of your industry.
            </p>

          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* MAIN CARD */}

          <div
            className="
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8
              shadow-[0_30px_120px_rgba(0,0,0,0.5)]
            "
          >
            {/* TOP IMAGE */}

            <div className="overflow-hidden rounded-[30px]">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Creative Studio"
                className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
              />

            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">

              {/* CARD 1 */}

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">

                <FaPalette className="text-purple-400 text-3xl mb-4" />

                <h3 className="text-xl font-bold">
                  Branding
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Premium visual identity design.
                </p>

              </div>

              {/* CARD 2 */}

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">

                <FaVideo className="text-pink-400 text-3xl mb-4" />

                <h3 className="text-xl font-bold">
                  Editing
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Cinematic video production & reels.
                </p>

              </div>

              {/* CARD 3 */}

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">

                <FaBullhorn className="text-blue-400 text-3xl mb-4" />

                <h3 className="text-xl font-bold">
                  Marketing
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Modern social media growth visuals.
                </p>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}