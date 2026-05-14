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

        setClients(data);

      } catch (error) {

        console.log(error);
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
        py-28
        px-6
        md:px-20
        overflow-hidden
        bg-gradient-to-br
        from-[#0f0f1a]
        via-[#1a1a2e]
        to-[#0f172a]
        text-white
      "
    >

      {/* BG */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-20">

        {/* LEFT */}

        <div>

          <p className="text-purple-400 font-semibold mb-3 tracking-[3px] uppercase">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black leading-tight mb-12">
            We Create <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Premium Experiences
            </span>

          </h2>

          <div className="space-y-5">

            {whyChoose.map(
              (
                item,
                i
              ) => (

                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="relative group"
                >

                  <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/40 to-blue-500/40 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition"></div>

                  <div className="relative flex items-center gap-5 p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10">

                    <div className="text-white p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-xl">
                      {item.icon}
                    </div>

                    <div>

                      <h4 className="font-semibold text-lg">
                        {item.title}
                      </h4>

                      <p className="text-gray-400 mt-1 text-sm">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>
              )
            )}

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="flex justify-between items-center mb-8">

            <div>

              <p className="text-purple-400 font-semibold tracking-[3px] uppercase mb-2">
                Client Reviews
              </p>

              <h2 className="text-4xl font-black">
                Our Happy Clients
              </h2>

            </div>

            <div className="flex gap-3">

              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/10"
              >
                ←
              </button>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/10"
              >
                →
              </button>

            </div>

          </div>

          {/* CARDS */}

          <div className="grid md:grid-cols-3 gap-6">

            {clients
              .slice(
                index,
                index +
                  visibleCards
              )
              .map((c) => (

                <motion.div
                  key={c._id}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative group"
                >

                  <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/40 to-blue-500/40 rounded-3xl blur-xl opacity-50"></div>

                  <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 h-full">

                    <FaQuoteLeft className="text-purple-400 text-2xl mb-5" />

                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                      {c.review}
                    </p>

                    <h4 className="font-semibold text-lg">
                      {c.name}
                    </h4>

                  </div>

                </motion.div>
              ))}

          </div>

          {/* FORM */}

          <form
            onSubmit={
              handleSubmit
            }
            className="mt-10 relative group"
          >

            <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/40 to-blue-500/40 rounded-3xl blur-xl opacity-60"></div>

            <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10">

              <h3 className="text-2xl font-bold mb-6">
                Add Your Feedback
              </h3>

              <AnimatePresence>

                {message && (

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="mb-5 p-4 rounded-2xl bg-green-500/20 border border-green-400/30 text-green-300"
                  >
                    {message}
                  </motion.div>
                )}

              </AnimatePresence>

              {errorMessage && (

                <div className="mb-5 p-4 rounded-2xl bg-red-500/20 border border-red-400/30 text-red-300">
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
                className="w-full p-4 mb-4 rounded-2xl bg-white/10 border border-white/10 text-white"
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
                className="w-full p-4 mb-5 rounded-2xl bg-white/10 border border-white/10 text-white resize-none"
              />

              <button
                type="submit"
                disabled={
                  loading
                }
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500
                  via-pink-500
                  to-blue-500
                  text-white
                  font-semibold
                  text-lg
                "
              >

                {loading
                  ? "Submitting..."
                  : "Submit Feedback →"}

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}