"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    setSuccess(null);

    try {

      /* ---------------- DATABASE SAVE ---------------- */

      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error("Database save failed");
      }

      /* ---------------- EMAILJS SEND ---------------- */

      await emailjs.send(
        "service_420e2y7",
        "template_c8qbhjp",
        {
          name: name,
          email: email,
          message: message,
        },
        "CjWcStAQUGkAYbNGf"
      );

      /* ---------------- SUCCESS ---------------- */

      setSuccess({
        type: "success",
        message: "Message Submitted Successfully 🚀",
      });

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccess(null);
      }, 4000);

    } catch (error) {

      setSuccess({
        type: "error",
        message: "Something went wrong ❌",
      });

      setTimeout(() => {
        setSuccess(null);
      }, 4000);

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-32
        px-6
        md:px-20
        bg-[#060816]
        text-white
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_30%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_30%)]"></div>

      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-8">

            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>

            <span className="uppercase tracking-[4px] text-sm text-white/70">
              Contact InsideHost
            </span>

          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">

            Have A Project{" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              In Mind?
            </span>

          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400 max-w-3xl mx-auto">
            Let’s create premium cinematic visuals and unforgettable
            digital experiences for your brand.
          </p>
        </motion.div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >

            {/* GLOW */}

            <div className="absolute -inset-[2px] rounded-[34px] bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

            {/* CARD */}

            <div
              className="
                relative
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-2xl
                p-10
                overflow-hidden
                h-full
              "
            >

              {/* TOP LIGHT */}

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

              <h3 className="text-3xl font-bold mb-3">
                Send Us A Message
              </h3>

              <p className="text-gray-400 mb-10">
                Your message will directly arrive in our database inbox.
              </p>

              {/* FORM */}

              <form
                onSubmit={sendEmail}
                className="space-y-6"
              >

                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-400
                    outline-none
                    focus:border-purple-500
                    transition
                  "
                />

                {/* EMAIL */}

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-400
                    outline-none
                    focus:border-blue-500
                    transition
                  "
                />

                {/* MESSAGE */}

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-400
                    outline-none
                    focus:border-pink-500
                    transition
                    resize-none
                  "
                />

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative
                    overflow-hidden
                    w-full
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
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                    cursor-pointer
                    disabled:opacity-70
                  "
                >

                  {/* BUTTON GLOW */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10"></div>

                  <span className="relative z-10 flex items-center justify-center gap-3">

                    {loading ? "Sending..." : "Send Message"}

                    <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />

                  </span>

                </button>

                {/* SUCCESS / ERROR MESSAGE */}

                <AnimatePresence>

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`
                        text-center
                        font-medium
                        rounded-xl
                        py-4
                        border
                        ${
                          success.type === "success"
                            ? "bg-green-500/10 border-green-500/30 text-green-400"
                            : "bg-red-500/10 border-red-500/30 text-red-400"
                        }
                      `}
                    >
                      {success.message}
                    </motion.div>
                  )}

                </AnimatePresence>

              </form>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >

            {/* GLOW */}

            <div className="absolute -inset-[2px] rounded-[34px] bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

            {/* CARD */}

            <div
              className="
                relative
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-2xl
                p-10
                h-full
                flex
                flex-col
                justify-between
              "
            >

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Let’s Connect
                </h3>

                <p className="text-gray-400 leading-relaxed mb-10">
                  Follow us and connect with InsideHost for premium
                  creative visuals and digital branding.
                </p>

                {/* SOCIALS */}

                <div className="flex flex-wrap gap-5">

                  {/* INSTAGRAM */}

                  <a
                    href="https://www.instagram.com/insidehost.in?igsh=ZmNvbW5tMzRybGhx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12, y: -5 }}
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        text-2xl
                        bg-gradient-to-br
                        from-pink-500
                        to-purple-500
                        shadow-lg
                      "
                    >
                      <FaInstagram />
                    </motion.div>
                  </a>

                  {/* LINKEDIN */}

                  <a
                    href="https://www.linkedin.com/company/insidehost-in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12, y: -5 }}
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        text-2xl
                        bg-gradient-to-br
                        from-blue-500
                        to-cyan-500
                        shadow-lg
                      "
                    >
                      <FaLinkedin />
                    </motion.div>
                  </a>

                  {/* FACEBOOK */}

                  <a
                    href="https://www.facebook.com/share/1DC66h7Gbt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12, y: -5 }}
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        text-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-indigo-600
                        shadow-lg
                      "
                    >
                      <FaFacebookF />
                    </motion.div>
                  </a>

                  {/* TELEGRAM */}

                  <a
                    href="https://t.me/insidehostmarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12, y: -5 }}
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        text-2xl
                        bg-gradient-to-br
                        from-sky-500
                        to-blue-500
                        shadow-lg
                      "
                    >
                      <FaTelegram />
                    </motion.div>
                  </a>

                </div>

              </div>

              {/* INFO */}

              <div className="mt-12 space-y-5">

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">
                    Email Address
                  </p>

                  <h4 className="text-lg font-semibold break-all">
                    INSIDEHOST.IN@GMAIL.COM
                  </h4>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">
                    Location
                  </p>

                  <h4 className="text-lg font-semibold">
                    LUDHIANA,PUNJAB
                  </h4>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}