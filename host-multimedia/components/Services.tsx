"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaCamera,
  FaVideo,
  FaCube,
  FaPenNib,
  FaBullhorn,
  FaChartLine,
  FaRocket,
  FaUsers,
  FaSearch,
  FaGlobe,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";

/* ================= SERVICES DATA ================= */

const creativeContent = [
  {
    icon: <FaCamera />,
    title: "Photo Editing",
    desc: "High-end retouching, cinematic color grading and premium visual enhancement.",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    desc: "Cinematic reels, YouTube edits, ads and storytelling visuals.",
  },
  {
    icon: <FaCube />,
    title: "Package Design",
    desc: "Luxury packaging designs that elevate your brand identity.",
  },
  {
    icon: <FaPenNib />,
    title: "Logo Design",
    desc: "Modern, minimal and memorable logos for powerful branding.",
  },
];

const performanceMarketing = [
  {
    icon: <FaBullhorn />,
    title: "Social Media Ads",
    desc: "High-converting campaigns for Instagram, Facebook and YouTube.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth Strategy",
    desc: "Data-driven marketing strategies for rapid brand growth.",
  },
  {
    icon: <FaRocket />,
    title: "Brand Promotion",
    desc: "Powerful online promotion to maximize audience reach.",
  },
  {
    icon: <FaUsers />,
    title: "Audience Engagement",
    desc: "Creative campaigns that increase customer interaction.",
  },
];

const seoOptimization = [
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Improve website rankings and organic search visibility.",
  },
  {
    icon: <FaGlobe />,
    title: "Website SEO",
    desc: "Technical optimization for modern high-performing websites.",
  },
  {
    icon: <FaCode />,
    title: "Technical SEO",
    desc: "Advanced SEO structure and indexing optimization.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Optimization",
    desc: "Fast and responsive mobile experience for better rankings.",
  },
];

/* ================= COMPONENT ================= */

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-32
        px-6
        md:px-20
        bg-gradient-to-br
        from-[#050510]
        via-[#0d1020]
        to-[#050510]
        text-white
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">

        {/* TOP SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* TAG */}

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>

            <span className="text-sm tracking-[3px] uppercase text-white/80">
              Our Services
            </span>
          </div>

          {/* HEADING */}

          <h2 className="text-4xl md:text-6xl font-black leading-tight">

            Creative Solutions For{" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Modern Brands
            </span>
          </h2>

          {/* TEXT */}

          <p className="mt-8 text-gray-400 text-lg leading-relaxed">
            We help creators, startups and businesses build
            premium digital presence through modern visuals,
            branding and cinematic content experiences.
          </p>
        </motion.div>

        {/* ================= ROW 1 ================= */}

        <SectionHeading title="Creative Content" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

          {creativeContent.map((service, i) => (
            <TiltCard
              key={i}
              service={service}
              delay={i * 0.12}
              color={{
                border:
                  "from-purple-500/40 via-pink-500/20 to-blue-500/40",

                glow:
                  "from-purple-500/30 to-blue-500/30",

                icon:
                  "from-purple-500 via-pink-500 to-blue-500",

                line:
                  "from-purple-400/50 to-transparent",
              }}
            />
          ))}

        </div>

        {/* ================= ROW 2 ================= */}

        <SectionHeading title="Performance Marketing" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

          {performanceMarketing.map((service, i) => (
            <TiltCard
              key={i}
              service={service}
              delay={i * 0.12}
              color={{
                border:
                  "from-orange-500/40 via-red-500/20 to-yellow-500/40",

                glow:
                  "from-orange-500/30 to-red-500/30",

                icon:
                  "from-orange-500 via-red-500 to-yellow-500",

                line:
                  "from-orange-400/50 to-transparent",
              }}
            />
          ))}

        </div>

        {/* ================= ROW 3 ================= */}

        <SectionHeading title="SEO Optimization" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

          {seoOptimization.map((service, i) => (
            <TiltCard
              key={i}
              service={service}
              delay={i * 0.12}
              color={{
                border:
                  "from-green-500/40 via-emerald-500/20 to-cyan-500/40",

                glow:
                  "from-green-500/30 to-cyan-500/30",

                icon:
                  "from-green-500 via-emerald-500 to-cyan-500",

                line:
                  "from-green-400/50 to-transparent",
              }}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

/* ================= SECTION HEADING ================= */

function SectionHeading({ title }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-28 mb-4"
    >
      <h3 className="text-3xl md:text-4xl font-black">

        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {title}
        </span>

      </h3>

      <div className="mt-4 h-[2px] w-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
    </motion.div>
  );
}

/* ================= PREMIUM CARD ================= */

function TiltCard({ service, delay, color }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    ref.current!.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      scale(1.02)
    `;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        "rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{ once: true }}
      className="perspective-[1400px]"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className={`
          group
          relative
          rounded-[32px]
          p-[1.5px]
          bg-gradient-to-br
          ${color.border}
          transition-all
          duration-300
        `}
      >
        {/* GLOW */}

        <div
          className={`
            absolute
            -inset-3
            rounded-[35px]
            blur-3xl
            opacity-0
            group-hover:opacity-100
            bg-gradient-to-r
            ${color.glow}
            transition
            duration-500
          `}
        ></div>

        {/* CARD */}

        <div
          className="
            relative
            h-full
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.06]
            backdrop-blur-2xl
            p-8
            overflow-hidden
          "
        >
          {/* TOP LIGHT */}

          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          {/* ICON */}

          <div
            className={`
              relative
              w-20
              h-20
              rounded-3xl
              flex
              items-center
              justify-center
              text-4xl
              text-white
              mb-8
              bg-gradient-to-br
              ${color.icon}
              shadow-[0_20px_60px_rgba(168,85,247,0.35)]
              group-hover:scale-110
              group-hover:rotate-6
              transition-all
              duration-500
            `}
          >
            {service.icon}
          </div>

          {/* TITLE */}

          <h3 className="text-2xl font-bold text-white mb-4">
            {service.title}
          </h3>

          {/* DESC */}

          <p className="text-gray-400 leading-relaxed text-[15px]">
            {service.desc}
          </p>

          {/* BOTTOM LINE */}

          <div className="mt-8 flex items-center gap-3 font-medium">

            <span className="text-sm tracking-wide text-white/80">
              Insidehost.in ©
            </span>

            <div
              className={`
                flex-1
                h-[1px]
                bg-gradient-to-r
                ${color.line}
              `}
            ></div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}