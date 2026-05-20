"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FiPlay,
  FiImage,
  FiStar,
} from "react-icons/fi";

interface PortfolioType {
  _id: string;
  title: string;
  category: string;
  type: string;
  mediaUrl: string;
  description: string;
}

export default function WorksPage() {

  const [portfolio, setPortfolio] =
    useState<PortfolioType[]>([]);

  const [loading, setLoading] =
    useState(true);

  /* FETCH PORTFOLIO */

  const fetchPortfolio = async () => {

    try {

      const res = await fetch(
        "/api/portfolio",
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      if (Array.isArray(data)) {

        setPortfolio(data);

      } else {

        setPortfolio([]);
      }

    } catch (error) {

      console.log(error);

      setPortfolio([]);

    } finally {

      setLoading(false);
    }
  };

  /* AUTO REFRESH */

  useEffect(() => {

    fetchPortfolio();

    const interval =
      setInterval(() => {

        fetchPortfolio();

      }, 2000);

    return () =>
      clearInterval(interval);

  }, []);

  /* GROUP CATEGORY */

  const groupedPortfolio =
    portfolio.reduce(
      (
        acc: Record<
          string,
          PortfolioType[]
        >,
        item
      ) => {

        if (!acc[item.category]) {

          acc[item.category] = [];
        }

        acc[item.category].push(item);

        return acc;

      },
      {}
    );

  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030712]
        text-white
        py-32
        px-6
        md:px-20
      "
    >

      {/* BG */}

      <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.03]"></div>

      <div className="relative z-10">

        {/* HERO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-center
            max-w-6xl
            mx-auto
            mb-32
          "
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
              mb-10
            "
          >

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>

            <span
              className="
                uppercase
                tracking-[5px]
                text-sm
                text-white/70
              "
            >
              INSIDEHOST PORTFOLIO
            </span>

          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >

            Explore Our{" "}

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
              Creative Universe
            </span>

          </h1>

          <p
            className="
              mt-8
              text-lg
              text-gray-400
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Premium luxury branding,
            cinematic edits,
            futuristic visuals and
            modern creative experiences.
          </p>

        </motion.div>

        {/* LOADING */}

        {loading && (

          <div className="flex justify-center py-40">

            <div
              className="
                w-14
                h-14
                rounded-full
                border-4
                border-purple-500/20
                border-t-purple-500
                animate-spin
              "
            ></div>

          </div>

        )}

        {/* EMPTY */}

        {!loading &&
          portfolio.length === 0 && (

          <div
            className="
              text-center
              py-40
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
            "
          >

            <h2 className="text-4xl font-bold mb-4">
              No Portfolio Uploaded
            </h2>

            <p className="text-gray-400">
              Upload projects from admin panel
            </p>

          </div>

        )}

        {/* PORTFOLIO */}

        <div className="space-y-36">

          {Object.entries(groupedPortfolio)
            .map(
              (
                [category, items],
                sectionIndex
              ) => (

              <motion.div
                key={sectionIndex}
              >

                {/* CATEGORY */}

                <div className="mb-16">

                  <div className="flex items-center gap-4 mb-5">

                    <FiStar className="text-purple-400 text-2xl" />

                    <h2
                      className="
                        text-4xl
                        md:text-6xl
                        font-black
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
                        {category}
                      </span>

                    </h2>

                  </div>

                </div>

                {/* GRID */}

                <div
                  className="
                    grid
                    sm:grid-cols-2
                    xl:grid-cols-3
                    gap-10
                  "
                >

                  {items.map(
                    (
                      item,
                      index
                    ) => {

                      const optimizedVideo =
                        item.mediaUrl?.replace(
                          "/upload/",
                          "/upload/f_mp4,q_auto/"
                        );

                      return (

                        <motion.div
                          key={item._id}
                          initial={{
                            opacity: 0,
                            y: 50,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay:
                              index * 0.1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          whileHover={{
                            y: -10,
                          }}
                          className="
                            group
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/10
                            bg-white/[0.05]
                            backdrop-blur-2xl
                          "
                        >

                          {/* MEDIA */}

                          <div className="relative overflow-hidden">

                            {item.type?.toLowerCase() ===
                            "image" ? (

                              <img
                                src={
                                  item.mediaUrl
                                }
                                alt={item.title}
                                className="
                                  w-full
                                  h-[340px]
                                  object-cover
                                  group-hover:scale-110
                                  transition-all
                                  duration-700
                                "
                              />

                            ) : (

                              <video
                                controls
                                controlsList="nodownload"
                                playsInline
                                muted
                                preload="metadata"
                                crossOrigin="anonymous"
                                className="
                                  w-full
                                  h-[340px]
                                  object-cover
                                  bg-black
                                "
                              >
                                <source
                                  src={optimizedVideo}
                                  type="video/mp4"
                                />

                                Your browser does not support the video tag.
                              </video>

                            )}

                            {/* OVERLAY */}

                            <div
                              className="
                                absolute
                                inset-x-0
                                bottom-0
                                h-32
                                bg-gradient-to-t
                                from-black/80
                                to-transparent
                                pointer-events-none
                              "
                            ></div>

                            {/* TYPE */}

                            <div
                              className="
                                absolute
                                top-5
                                left-5
                                pointer-events-none
                                px-4
                                py-2
                                rounded-full
                                bg-black/40
                                backdrop-blur-xl
                                border
                                border-white/10
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-white
                              "
                            >

                              {item.type?.toLowerCase() ===
                              "image" ? (
                                <FiImage />
                              ) : (
                                <FiPlay />
                              )}

                              {item.type}

                            </div>

                          </div>

                          {/* CONTENT */}

                          <div className="p-7">

                            <h3
                              className="
                                text-2xl
                                font-bold
                                mb-3
                              "
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
                                text-sm
                                text-purple-300
                                mb-3
                              "
                            >
                              {item.category}
                            </p>

                            <p
                              className="
                                text-gray-400
                                leading-relaxed
                                text-sm
                              "
                            >
                              {item.description}
                            </p>

                          </div>

                        </motion.div>

                      );
                    })}

                </div>

              </motion.div>
            ))}

        </div>

      </div>

    </section>
  );
}