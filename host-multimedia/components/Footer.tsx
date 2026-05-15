"use client";

import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaArrowUp,
  FaCheckCircle,
  FaGlobe,
  FaCamera,
  FaVideo,
  FaCube,
  FaPenNib,
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";

export default function Footer() {

  // ================= WHATSAPP =================

  const whatsappNumber = "916284845078";

 const whatsappMessage = encodeURIComponent(
  "Hi, \nI’m looking for Digital Marketing services for my business \n\nI need help with:\n• Social Media Marketing \n• SEO \n• Google/Facebook Ads \n• Lead Generation \n• Online Branding \n\nI came across InsideHost and would like to know more about your services and pricing. Please share the details "
);

  return (

    <footer
      className="
        relative
        overflow-hidden
        bg-[#030712]
        text-white
        pt-24
        pb-10
        px-6
        md:px-16
      "
    >

      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_30%)]"></div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* TOP LIGHT */}

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP GRID */}

        <div
          className="
            grid
            lg:grid-cols-[1.3fr_0.8fr_1fr]
            gap-12
            items-start
          "
        >

          {/* BRAND SECTION */}

          <div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                text-5xl
                md:text-6xl
                font-black
                leading-none
                bg-gradient-to-r
                from-purple-400
                via-pink-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              InsideHost
            </motion.h2>

            <p
              className="
                mt-7
                text-gray-400
                leading-relaxed
                max-w-[470px]
                text-lg
              "
            >
              We craft cinematic visuals, futuristic branding and premium
              digital experiences that elevate your business into a luxury
              modern brand.
            </p>

            {/* SOCIALS */}

            <div className="flex flex-wrap gap-5 mt-10">

              {[
                {
                  icon: <FaInstagram />,
                  color: "from-pink-500 to-purple-500",
                  link: "https://instagram.com",
                },

                {
                  icon: <FaLinkedin />,
                  color: "from-blue-500 to-cyan-500",
                  link: "#",
                },

                {
                  icon: <FaWhatsapp />,
                  color: "from-green-500 to-emerald-500",
                  link: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                },

                {
                  icon: <FaTelegram />,
                  color: "from-sky-500 to-blue-500",
                  link: "#",
                },
              ].map((item, i) => (

                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{
                    scale: 1.12,
                    y: -6,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    relative
                    w-16
                    h-16
                    rounded-[24px]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    bg-gradient-to-br
                    ${item.color}
                    shadow-[0_15px_50px_rgba(168,85,247,0.35)]
                    overflow-hidden
                  `}
                >

                  <div className="absolute inset-0 bg-white/10"></div>

                  <span className="relative z-10">
                    {item.icon}
                  </span>

                </motion.a>
              ))}

            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="lg:pl-6">

            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-5">

              {[
                "Home",
                "Services",
                "Portfolio",
                "Contact",
              ].map((item, i) => (

                <motion.li
                  key={i}
                  whileHover={{
                    x: 6,
                  }}
                >

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="
                      text-gray-400
                      hover:text-white
                      transition-all
                      duration-300
                      text-lg
                    "
                  >
                    {item}
                  </a>

                </motion.li>
              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >
              Services
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {[
                {
                  icon: <FaCamera />,
                  title: "Photo Editing",
                  color:
                    "from-purple-500/20 to-pink-500/20 border-purple-500/20",
                },

                {
                  icon: <FaVideo />,
                  title: "Video Editing",
                  color:
                    "from-blue-500/20 to-cyan-500/20 border-blue-500/20",
                },

                {
                  icon: <FaCube />,
                  title: "Package Design",
                  color:
                    "from-orange-500/20 to-yellow-500/20 border-orange-500/20",
                },

                {
                  icon: <FaPenNib />,
                  title: "Logo Design",
                  color:
                    "from-pink-500/20 to-rose-500/20 border-pink-500/20",
                },

                {
                  icon: <FaBullhorn />,
                  title: "Social Ads",
                  color:
                    "from-red-500/20 to-orange-500/20 border-red-500/20",
                },

                {
                  icon: <FaChartLine />,
                  title: "Growth",
                  color:
                    "from-yellow-500/20 to-orange-500/20 border-yellow-500/20",
                },

                {
                  icon: <FaSearch />,
                  title: "SEO",
                  color:
                    "from-green-500/20 to-emerald-500/20 border-green-500/20",
                },

                {
                  icon: <FaMobileAlt />,
                  title: "Mobile",
                  color:
                    "from-cyan-500/20 to-blue-500/20 border-cyan-500/20",
                },
              ].map((item, i) => (

                <motion.div
                  key={i}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className={`
                    group
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-2xl
                    border
                    bg-gradient-to-r
                    ${item.color}
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    cursor-pointer
                    min-h-[74px]
                  `}
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-base
                      text-white
                      bg-white/10
                      border
                      border-white/10
                      shrink-0
                    "
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">

                    <h4
                      className="
                        text-white
                        font-semibold
                        text-[13px]
                        leading-tight
                        group-hover:text-purple-200
                        transition
                      "
                    >
                      {item.title}
                    </h4>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

        {/* WHATSAPP CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mt-20
            group
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              -inset-[2px]
              rounded-[40px]
              bg-gradient-to-r
              from-green-500/30
              via-emerald-500/20
              to-cyan-500/30
              blur-3xl
              opacity-70
              group-hover:opacity-100
              transition
              duration-700
            "
          ></div>

          {/* CARD */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-3xl
              p-8
              lg:p-10
            "
          >

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div
              className="
                grid
                lg:grid-cols-[auto_1fr_auto]
                gap-8
                items-center
              "
            >

              {/* ICON */}

              <div
                className="
                  w-28
                  h-28
                  rounded-[32px]
                  flex
                  items-center
                  justify-center
                  text-5xl
                  bg-gradient-to-br
                  from-green-500
                  to-emerald-400
                  shadow-[0_20px_60px_rgba(34,197,94,0.45)]
                "
              >
                <FaWhatsapp />
              </div>

              {/* CONTENT */}

              <div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                    text-green-400
                    text-sm
                    font-semibold
                  "
                >

                  <FaGlobe />

                  ONLINE SUPPORT 24/7

                </div>

                <h3
                  className="
                    text-4xl
                    lg:text-5xl
                    font-black
                    leading-tight
                  "
                >
                  Chat With
                  <span
                    className="
                      bg-gradient-to-r
                      from-green-400
                      to-cyan-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {" "}InsideHost
                  </span>
                </h3>

                <p
                  className="
                    text-gray-400
                    mt-5
                    text-lg
                    leading-relaxed
                    max-w-[700px]
                  "
                >
                  Need premium branding, luxury visuals, cinematic editing
                  or futuristic designs? Connect directly with our creative
                  team instantly on WhatsApp.
                </p>

                {/* FEATURES */}

                <div className="flex flex-wrap gap-5 mt-7">

                  {[
                    "Fast Replies",
                    "Instant Discussion",
                    "Premium Support",
                  ].map((item, i) => (

                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-2xl
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                      "
                    >

                      <FaCheckCircle className="text-green-400" />

                      <span className="text-sm">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* BUTTON */}

              <motion.a
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                  px-10
                  py-5
                  rounded-[24px]
                  bg-gradient-to-r
                  from-green-500
                  via-emerald-500
                  to-cyan-500
                  text-white
                  text-lg
                  font-bold
                  shadow-[0_20px_60px_rgba(34,197,94,0.35)]
                  whitespace-nowrap
                "
              >

                <FaWhatsapp className="text-2xl" />

                Start Chat

              </motion.a>

            </div>

          </div>

        </motion.div>

        {/* BOTTOM */}

        <div
          className="
            border-t
            border-white/10
            mt-16
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          <p
            className="
              text-gray-500
              text-sm
              text-center
              md:text-left
            "
          >
            © 2026 InsideHost Multimedia & Creative Marketing Company.
            All rights reserved.
          </p>

          {/* SCROLL BUTTON */}

          <motion.button
            whileHover={{
              scale: 1.12,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              w-16
              h-16
              rounded-[24px]
              flex
              items-center
              justify-center
              bg-gradient-to-r
              from-purple-500
              to-blue-500
              shadow-[0_15px_50px_rgba(168,85,247,0.4)]
            "
          >
            <FaArrowUp />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}