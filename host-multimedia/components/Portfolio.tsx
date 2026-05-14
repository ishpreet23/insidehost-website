"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    category: "Graphic Design",
    title: "Menu Design",
    description:
      "Modern and visually engaging menu designs that enhance customer experience and reflect your brand identity.",
    image: "/Menu Design.jpeg",
  },

  {
    id: 2,
    category: "Web Dev",
    title: "Website Development",
    description:
      "Fast, responsive, and professional websites designed to grow your online presence.",
    image: "/Website Development.jpg.jpeg",
  },

  {
    id: 3,
    category: "Branding & Identity",
    title: "Brand Logo",
    description:
      "Creative and memorable logo designs that build strong brand recognition.",
    image: "\Soft Green Minimalist Fabric Brand Logo.jpg",
  },

  {
    id: 4,
    category: "Photography & Production",
    title: "Product Shoot",
    description:
      "High-quality product photography crafted to showcase your products professionally.",
    image: "/Product Shoot.jpg.jpeg",
  },

  {
    id: 5,
    category: "Designing & Branding",
    title: "Merchandise Printing",
    description:
      "Premium custom merchandise printing for businesses, brands, and creators.",
    image: "/Merchandise Printing.jpg.jpeg",
  },

  {
    id: 6,
    category: "Advertising Design",
    title: "Creative Posters",
    description:
      "Eye-catching poster designs made for promotions, events, and brand campaigns.",
    image: "/Creative Posters.jpg.jpeg",
  },

  {
    id: 7,
    category: "Digital Media & Content",
    title: "Youtube Content Creation",
    description:
      "Professional YouTube content solutions including editing, thumbnails, and branding.",
    image: "/Youtube Thumbnail.png",
  },

  {
    id: 8,
    category: "Social Media Design",
    title: "Social Media Creatives",
    description:
      "Engaging social media designs that boost brand visibility and audience engagement.",
    image: "/Social Media Creatives.jpg.jpeg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        relative
        py-32
        px-6
        md:px-20
        overflow-hidden
        bg-[#060816]
        text-white
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10">

        {/* TOP SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          {/* MINI TAG */}

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-8">

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>

            <span className="uppercase tracking-[4px] text-sm text-white/70">
              Portfolio Showcase
            </span>

          </div>

          {/* TITLE */}

          <h2 className="text-5xl md:text-7xl font-black leading-tight">

            Featured{" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Works
            </span>

          </h2>

          {/* TEXT */}

          <p className="mt-8 text-lg leading-relaxed text-gray-400">
            Explore our premium creative projects crafted with
            cinematic visuals, luxury branding and modern digital aesthetics.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-24 items-stretch">

          {projects.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative h-full"
            >

              {/* OUTER GLOW */}

              <div className="absolute -inset-[2px] rounded-[34px] bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 opacity-0 blur-2xl group-hover:opacity-100 transition duration-700"></div>

              {/* CARD */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.06]
                  backdrop-blur-2xl
                  h-full
                  flex
                  flex-col
                "
              >

                {/* TOP LIGHT */}

                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-80
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* DARK OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                  {/* CATEGORY */}

                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-xs tracking-wide text-white">
                    {item.category}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-6 text-left flex flex-col flex-1">

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition duration-300 min-h-[64px]">
                    {item.title}
                  </h3>

                  {/* UNIQUE DESCRIPTION */}

                  <p className="text-gray-400 text-sm leading-relaxed min-h-[90px]">
                    {item.description}
                  </p>

                  {/* PUSH BOTTOM */}

                  <div className="mt-auto pt-6 flex items-center gap-3">

                    <span className="text-sm text-purple-300 font-medium">
                      ©Insidehost.in 
                    </span>

                    <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-400/50 to-transparent"></div>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* VIEW MORE BUTTON */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mt-24"
        >

          <Link href="/works">

            <button
              className="
                group
                relative
                overflow-hidden
                px-12
                py-5
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                via-pink-500
                to-blue-500
                text-white
                text-lg
                font-semibold
                shadow-[0_20px_60px_rgba(168,85,247,0.35)]
                hover:scale-105
                hover:shadow-[0_25px_80px_rgba(168,85,247,0.5)]
                transition-all
                duration-500
                cursor-pointer
              "
            >

              {/* BUTTON GLOW */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10"></div>

              {/* BUTTON CONTENT */}

              <span className="relative z-10 flex items-center gap-3">

                View More Works

                <span className="group-hover:translate-x-1 transition duration-300">
                  →
                </span>

              </span>

            </button>

          </Link>

        </motion.div>

      </div>
    </section>
  );
}