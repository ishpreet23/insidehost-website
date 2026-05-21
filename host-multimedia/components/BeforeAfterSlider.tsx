"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {

  const containerRef =
    useRef<HTMLDivElement>(null);

  const [sliderPosition, setSliderPosition] =
    useState(50);

  const [dragging, setDragging] =
    useState(false);

  /* IMAGES */

  const beforeImage =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2200&auto=format&fit=crop";

  const afterImage =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2200&auto=format&fit=crop&sat=40&contrast=25&brightness=105";

  /* GALLERY */

  const galleryImages = [

    {
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
      title:
        "Luxury Fashion Retouch",
    },

    {
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
      title:
        "Premium Color Grading",
    },

    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop",
      title:
        "AI Portrait Enhancement",
    },

    {
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1600&auto=format&fit=crop",
      title:
        "Skin Retouching",
    },

    {
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
      title:
        "Luxury Beauty Edit",
    },

  ];

  /* HANDLE SLIDER */

  const updateSlider =
    (clientX: number) => {

      if (!containerRef.current)
        return;

      const rect =
        containerRef.current.getBoundingClientRect();

      const x =
        clientX - rect.left;

      const percentage =
        (x / rect.width) * 100;

      setSliderPosition(
        Math.max(
          0,
          Math.min(100, percentage)
        )
      );
    };

  return (

    <section
      className="
        relative
        py-28
        overflow-hidden
        bg-[#030712]
      "
    >

      {/* PREMIUM BG */}

      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full"></div>

      {/* ROTATING LIGHT */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
        className="
          absolute
          top-[12%]
          left-[18%]
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-purple-500/10
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="
          absolute
          bottom-[5%]
          right-[15%]
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-blue-500/10
        "
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.03]"></div>

      <div className="relative z-10">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20 px-6"
        >

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-7
              py-3
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              mb-8
            "
          >

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>

            <span
              className="
                uppercase
                tracking-[4px]
                text-sm
                text-white/70
              "
            >
              INSIDEHOST AI EDIT
            </span>

          </div>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >

            Before{" "}

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-pink-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              vs
            </span>{" "}

            After

          </h2>

          <p
            className="
              mt-6
              text-lg
              text-gray-400
              max-w-3xl
              mx-auto
            "
          >
            Premium cinematic editing,
            AI retouching and luxury
            enhancement by InsideHost.
          </p>

        </motion.div>

        {/* SLIDER */}

        <motion.div
          ref={containerRef}
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            w-[95%]
            max-w-[950px]
            mx-auto
            h-[520px]
            rounded-[42px]
            overflow-hidden
            border
            border-white/10
            bg-black
            shadow-[0_20px_120px_rgba(168,85,247,0.25)]
            select-none
          "
          onMouseMove={(e) => {

            if (dragging) {

              updateSlider(
                e.clientX
              );
            }
          }}
          onMouseUp={() =>
            setDragging(false)
          }
          onMouseLeave={() =>
            setDragging(false)
          }
          onTouchMove={(e) => {

            if (dragging) {

              updateSlider(
                e.touches[0]
                  .clientX
              );
            }
          }}
          onTouchEnd={() =>
            setDragging(false)
          }
        >

          {/* AFTER IMAGE */}

          <img
            src={afterImage}
            alt="After"
            draggable={false}
            className="
              absolute
              inset-0
              w-full
              h-full
              pointer-events-none
            "
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />

          {/* BEFORE IMAGE */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
            "
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >

            <img
              src={beforeImage}
              alt="Before"
              draggable={false}
              className="
                absolute
                inset-0
                w-full
                h-full
                pointer-events-none
              "
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />

          </div>

      
      {/* SLIDER WRAPPER */}

<div
  className="
    absolute
    top-0
    bottom-0
    z-40
  "
  style={{
    left: `${sliderPosition}%`,
    transform: "translateX(-50%)",
  }}
>

  {/* DARK GLOW 

  <div
    className="
      absolute
      top-0
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[150px]
      pointer-events-none
    "
    style={{
      background:
        "linear-gradient(to right, transparent, rgba(0,0,0,0.45), rgba(0,0,0,0.75), rgba(0,0,0,0.45), transparent)",
      filter: "blur(14px)",
    }}
  />
*/}
  {/* SLIDER LINE */}

  <div
    className="
      absolute
      top-0
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[3px]
      bg-white
    "
  >

    <div className="absolute inset-0 bg-white blur-md opacity-80"></div>

  </div>

  {/* CENTER BUTTON WRAPPER */}

  <div
    className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
    "
  >

    {/* SLIDER BUTTON */}

    <motion.div
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: 1.08,
      }}
      onMouseDown={() =>
        setDragging(true)
      }
      onTouchStart={() =>
        setDragging(true)
      }
      className="
        relative
        w-16
        h-16
        rounded-full
        cursor-ew-resize
        flex
        items-center
        justify-center
      "
    >

      {/* OUTER GLOW RING */}

      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-br
          from-purple-500
          via-pink-500
          to-blue-500
          blur-md
          opacity-80
          animate-pulse
        "
      />

      {/* GLASS BUTTON */}

      <div
        className="
          relative
          w-full
          h-full
          rounded-full
          border
          border-white/20
          bg-white/10
          backdrop-blur-2xl
          flex
          items-center
          justify-center
          overflow-hidden
          shadow-[0_0_40px_rgba(168,85,247,0.45)]
        "
      >

        {/* INNER SHINE */}

        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-gradient-to-br
            from-white/30
            to-transparent
          "
        />

        {/* ICON */}

        <div
          className="
            relative
            flex
            items-center
            gap-[2px]
          "
        >

          <span className="text-white text-sm font-black">
            ◀
          </span>

          <span className="text-white text-sm font-black">
            ▶
          </span>

        </div>

      </div>

    </motion.div>

  </div>

</div>
          {/* LABELS */}

          <div
            className="
              absolute
              top-6
              left-6
              z-20
              px-6
              py-3
              rounded-full
              bg-black/40
              backdrop-blur-xl
              border
              border-white/10
              text-sm
              font-bold
              tracking-[3px]
            "
          >
            BEFORE
          </div>

          <div
            className="
              absolute
              top-6
              right-6
              z-20
              px-6
              py-3
              rounded-full
              bg-black/40
              backdrop-blur-xl
              border
              border-white/10
              text-sm
              font-bold
              tracking-[3px]
            "
          >
            AFTER
          </div>

        </motion.div>

        {/* TEXT */}

        <div className="mt-24 text-center mb-14 px-6">

          <h3
            className="
              text-4xl
              md:text-6xl
              font-black
              mb-5
            "
          >

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-pink-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              These Are InsideHost Edits
            </span>

          </h3>

          <p
            className="
              text-gray-400
              text-lg
              max-w-3xl
              mx-auto
            "
          >
            Luxury cinematic edits,
            AI enhancement and premium
            futuristic visuals crafted
            by InsideHost.
          </p>

        </div>

        {/* FULL WIDTH GALLERY */}

        <div className="relative w-full overflow-hidden">

          {/* FADE LEFT */}

          <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none"></div>

          {/* FADE RIGHT */}

          <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none"></div>

          <motion.div
            animate={{
              x: [
                "0%",
                "-50%",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear",
            }}
            className="
              flex
              gap-8
              w-max
              px-4
            "
          >

            {[...galleryImages, ...galleryImages]
              .map(
                (
                  item,
                  index
                ) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                    relative
                    w-[85vw]
                    sm:w-[420px]
                    h-[260px]
                    rounded-[32px]
                    overflow-hidden
                    border
                    border-white/10
                    bg-white/[0.04]
                    shrink-0
                    shadow-[0_10px_60px_rgba(168,85,247,0.18)]
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      to-transparent
                    "
                  ></div>

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                    "
                  >

                    <p
                      className="
                        text-white
                        text-xl
                        font-bold
                      "
                    >
                      {item.title}
                    </p>

                  </div>

                </motion.div>

              ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}