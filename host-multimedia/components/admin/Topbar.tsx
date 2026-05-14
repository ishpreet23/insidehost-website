"use client";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import {
  FaSignOutAlt,
  FaCrown,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Topbar() {

  const router = useRouter();

  /* LOGOUT */

  const handleLogout = () => {

    Cookies.remove("admin");

    router.push(
      "/insidehost-secret-admin-access-2026"
    );
  };

  return (

    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-[#050816]/80
        backdrop-blur-3xl
        overflow-hidden
      "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.12),transparent_30%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(59,130,246,0.12),transparent_30%)]"></div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>

      <div
        className="
          relative
          z-10
          px-6
          md:px-10
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* LEFT */}

        <div className="flex items-center gap-5">

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="
              relative
              p-[2px]
              rounded-3xl
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-blue-500
              shadow-[0_10px_40px_rgba(168,85,247,0.35)]
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-3xl
                bg-[#0f172a]
                flex
                items-center
                justify-center
                text-2xl
                font-black
                text-white
              "
            >
              IH
            </div>

          </motion.div>

          <div>

            <div className="flex items-center gap-3">

              <h1
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  bg-gradient-to-r
                  from-purple-400
                  via-pink-400
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                Welcome Back
              </h1>

              <span className="text-3xl">
                👋
              </span>

            </div>

            <p
              className="
                text-gray-400
                text-sm
                mt-1
              "
            >
              InsideHost Premium Admin Panel
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              border
              border-yellow-500/20
              bg-yellow-500/10
              text-yellow-300
              text-sm
              font-semibold
              backdrop-blur-xl
            "
          >

            <FaCrown />

            Premium Admin

          </div>

          {/* LOGOUT */}

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={handleLogout}
            className="
              group
              relative
              overflow-hidden
              px-6
              py-3.5
              rounded-2xl
              bg-gradient-to-r
              from-red-500
              via-pink-500
              to-orange-500
              text-white
              font-semibold
              flex
              items-center
              gap-3
              shadow-[0_15px_50px_rgba(239,68,68,0.35)]
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-white/10
                opacity-0
                group-hover:opacity-100
                transition
              "
            ></div>

            <FaSignOutAlt className="relative z-10 text-lg" />

            <span className="relative z-10">
              Logout
            </span>

          </motion.button>

        </div>

      </div>

    </header>
  );
}