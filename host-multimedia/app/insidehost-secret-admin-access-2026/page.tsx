"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

export default function SecretAdminLogin() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // CHANGE THIS PASSWORD
    if (password === "ishpreetaryan@0415") {
      Cookies.set("admin", "true", {
        expires: 1,
      });

      router.push("/admin");
    } else {
      setError("Wrong Secret Password");
    }
  };

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#060816]
        px-6
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* CARD */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.06]
          backdrop-blur-2xl
          p-10
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* ICON */}

        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-gradient-to-br
            from-purple-500
            to-blue-500
            flex
            items-center
            justify-center
            text-3xl
            text-white
            mx-auto
            mb-8
            shadow-lg
          "
        >
          <FaLock />
        </div>

        {/* TITLE */}

        <h1 className="text-4xl font-black text-center text-white mb-3">
          Secret Admin
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Restricted Access Portal
        </p>

        {/* FORM */}

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="password"
            placeholder="Enter Secret Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
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

          <button
            type="submit"
            className="
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
            "
          >
            Access Dashboard
          </button>

          {/* ERROR */}

          {error && (
            <div
              className="
                text-center
                py-4
                rounded-xl
                bg-red-500/10
                border
                border-red-500/20
                text-red-400
                font-medium
              "
            >
              {error}
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
}