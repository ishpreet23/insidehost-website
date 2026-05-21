"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaQuoteLeft,
  FaBolt,
  FaStar,
  FaDollarSign,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

interface FeedbackType {
  _id: string;
  name: string;
  review: string;
}

/* WHY CHOOSE */

const whyChoose = [
  {
    icon: <FaStar />,
    title: "Creative & Unique",
    desc: "Fresh ideas that make your brand stand out.",
  },

  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    desc: "Quick turnaround without compromising quality.",
  },

  {
    icon: <FaDollarSign />,
    title: "Affordable Pricing",
    desc: "Premium design at budget-friendly prices.",
  },

  {
    icon: <FaShieldAlt />,
    title: "Professional Quality",
    desc: "Pixel-perfect execution every time.",
  },

  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "We’re always here for your needs.",
  },
];

export default function Clients() {

  const [clients, setClients] =
    useState<FeedbackType[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      review: "",
    });

  const [message, setMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [index, setIndex] =
    useState(0);

  const visibleCards = 3;

  /* FETCH FEEDBACK */

  const fetchFeedback =
    async () => {

      try {

        const res =
          await fetch(
            "/api/feedback",
            {
              cache:
                "no-store",
            }
          );

        const data =
          await res.json();

        if (Array.isArray(data)) {

          setClients(data);

        } else if (
          Array.isArray(
            data.feedbacks
          )
        ) {

          setClients(
            data.feedbacks
          );

        } else if (
          Array.isArray(
            data.data
          )
        ) {

          setClients(
            data.data
          );

        } else {

          setClients([]);
        }

      } catch (error) {

        console.log(error);

        setClients([]);
      }
    };

  useEffect(() => {

    fetchFeedback();

  }, []);

  /* SLIDER */

  const next = () => {

    if (
      index +
        visibleCards <
      clients.length
    ) {

      setIndex(
        index +
          visibleCards
      );
    }
  };

  const prev = () => {

    if (
      index -
        visibleCards >=
      0
    ) {

      setIndex(
        index -
          visibleCards
      );
    }
  };

  /* SUBMIT */

  const handleSubmit =
    async (e: any) => {

      e.preventDefault();

      setMessage("");
      setErrorMessage("");

      if (
        !form.name ||
        !form.review
      ) {
        return;
      }

      try {

        setLoading(true);

        const res =
          await fetch(
            "/api/feedback",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify(
                {
                  name: form.name,
                  review:
                    form.review,
                }
              ),
            }
          );

        const data =
          await res.json();

        if (!res.ok) {

          setErrorMessage(
            data.error
          );

          return;
        }

        setMessage(
          "✅ Feedback submitted successfully!"
        );

        setForm({
          name: "",
          review: "",
        });

        fetchFeedback();

        setIndex(0);

        setTimeout(() => {

          setMessage("");

        }, 3000);

      } catch (error) {

        console.log(error);

        setErrorMessage(
          "Something went wrong"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <section
      id="feedback"
      className="
        relative
        py-32
        px-6
        md:px-20
        overflow-hidden
        bg-[#030712]
        text-white
      "
    >

      {/* BG LIGHTS */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.03]"></div>

      <div className="relative z-10">

        {/* TOP HEADER */}

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
          className="text-center mb-24"
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
              INSIDEHOST REVIEWS
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

            Clients Love{" "}

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
              Our Work
            </span>

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
            Premium editing, futuristic visuals and cinematic experiences trusted by brands and creators.
          </p>

        </motion.div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}

          <div>

            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-12">

              Why Brands Choose{" "}

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
                InsideHost
              </span>

            </h3>

            <div className="space-y-6">

              {whyChoose.map(
                (
                  item,
                  i
                ) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="
                      relative
                      group
                    "
                  >

                    <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-[30px] blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

                    <div
                      className="
                        relative
                        flex
                        items-center
                        gap-5
                        p-7
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.05]
                        backdrop-blur-2xl
                        overflow-hidden
                      "
                    >

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>

                      <div
                        className="
                          relative
                          w-16
                          h-16
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          text-2xl
                          bg-gradient-to-br
                          from-purple-500
                          via-pink-500
                          to-blue-500
                          shadow-[0_10px_40px_rgba(168,85,247,0.45)]
                        "
                      >
                        {item.icon}
                      </div>

                      <div className="relative">

                        <h4 className="font-bold text-xl mb-1">
                          {item.title}
                        </h4>

                        <p className="text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                )
              )}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            {/* TOP */}

            <div className="flex justify-between items-center mb-10">

              <div>

                <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-3">
                  Testimonials
                </p>

                <h3 className="text-4xl font-black">
                  Happy Clients
                </h3>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={prev}
                  className="
                    w-14
                    h-14
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    backdrop-blur-xl
                    hover:bg-white/10
                    transition
                    text-xl
                  "
                >
                  ←
                </button>

                <button
                  onClick={next}
                  className="
                    w-14
                    h-14
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    backdrop-blur-xl
                    hover:bg-white/10
                    transition
                    text-xl
                  "
                >
                  →
                </button>

              </div>

            </div>

            {/* CARDS */}

            <div className="grid md:grid-cols-3 gap-6">

              {(Array.isArray(clients)
                ? clients
                : []
              )
                .slice(
                  index,
                  index +
                    visibleCards
                )
                .map((c) => (

                  <motion.div
                    key={c._id}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    className="relative group"
                  >

                    <div className="absolute -inset-[2px] rounded-[30px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

                    <div
                      className="
                        relative
                        h-full
                        p-7
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.05]
                        backdrop-blur-2xl
                        overflow-hidden
                      "
                    >

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b from-purple-500/10 via-transparent to-blue-500/10"></div>

                      <FaQuoteLeft className="relative text-purple-400 text-3xl mb-6" />

                      <p className="relative text-gray-300 leading-relaxed mb-8 text-sm">
                        {c.review}
                      </p>

                      <div className="relative">

                        <h4 className="font-bold text-lg">
                          {c.name}
                        </h4>

                        <div className="flex gap-1 mt-3 text-yellow-400">
                          ⭐⭐⭐⭐⭐
                        </div>

                      </div>

                    </div>

                  </motion.div>
                ))}

            </div>

            {/* FORM */}

            <motion.form
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
              onSubmit={
                handleSubmit
              }
              className="
                relative
                mt-12
                group
              "
            >

              <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-[36px] blur-xl opacity-70"></div>

              <div
                className="
                  relative
                  p-8
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  backdrop-blur-3xl
                  overflow-hidden
                "
              >

                <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>

                <h3 className="relative text-3xl font-black mb-8">

                  Share Your Experience

                </h3>

                <AnimatePresence>

                  {message && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="relative mb-5 p-4 rounded-2xl bg-green-500/20 border border-green-400/30 text-green-300"
                    >
                      {message}
                    </motion.div>
                  )}

                </AnimatePresence>

                {errorMessage && (

                  <div className="relative mb-5 p-4 rounded-2xl bg-red-500/20 border border-red-400/30 text-red-300">
                    {errorMessage}
                  </div>
                )}

                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name:
                        e.target
                          .value,
                    })
                  }
                  className="
                    relative
                    w-full
                    p-5
                    mb-5
                    rounded-2xl
                    bg-[#0f172a]
                    border
                    border-white/10
                    text-white
                    outline-none
                    focus:border-purple-500
                  "
                />

                <textarea
                  rows={5}
                  placeholder="Write your feedback..."
                  value={form.review}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      review:
                        e.target
                          .value,
                    })
                  }
                  className="
                    relative
                    w-full
                    p-5
                    mb-6
                    rounded-2xl
                    bg-[#0f172a]
                    border
                    border-white/10
                    text-white
                    resize-none
                    outline-none
                    focus:border-purple-500
                  "
                />

                <button
                  type="submit"
                  disabled={
                    loading
                  }
                  className="
                    relative
                    w-full
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    via-pink-500
                    to-blue-500
                    text-white
                    font-bold
                    text-lg
                    shadow-[0_20px_60px_rgba(168,85,247,0.35)]
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  "
                >

                  {loading
                    ? "Submitting..."
                    : "Submit Feedback →"}

                </button>

              </div>

            </motion.form>

          </div>

        </div>

      </div>

    </section>
  );
}