"use client";

import Link from "next/link";

import { usePathname }
from "next/navigation";

import {
  FaChartPie,
  FaEnvelope,
  FaImages,
  FaCog,
  FaCommentDots,
} from "react-icons/fa";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <FaChartPie />,
  },

  {
    name: "Messages",
    href: "/admin/messages",
    icon: <FaEnvelope />,
  },

  {
    name: "Feedback",
    href: "/admin/feedback",
    icon: <FaCommentDots />,
  },

  {
    name: "Portfolio",
    href: "/admin/portfolio",
    icon: <FaImages />,
  },

  {
    name: "Settings",
    href: "/admin/settings",
    icon: <FaCog />,
  },
];

export default function Sidebar() {

  const pathname =
    usePathname();

  return (

    <aside
      className="
        relative
        h-screen
        w-[260px]
        border-r
        border-white/10
        bg-[#070b17]/90
        backdrop-blur-3xl
        px-6
        py-8
        flex
        flex-col
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[250px]
          h-[250px]
          bg-purple-500/10
          blur-[120px]
          rounded-full
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[250px]
          h-[250px]
          bg-blue-500/10
          blur-[120px]
          rounded-full
        "
      ></div>

      {/* LOGO */}

      <div className="relative z-10">

        <h1
          className="
            text-4xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          InsideHost
        </h1>

        <p
          className="
            text-gray-500
            text-sm
            mt-2
          "
        >
          Premium Admin Panel
        </p>

      </div>

      {/* NAVIGATION */}

      <div
        className="
          relative
          z-10
          mt-14
          flex
          flex-col
          gap-3
        "
      >

        {links.map((link) => {

          const active =
            pathname ===
            link.href;

          return (

            <Link
              key={link.name}
              href={link.href}
              className={`
                group
                relative
                overflow-hidden
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300
                font-medium

                ${
                  active
                    ? `
                      bg-gradient-to-r
                      from-purple-500
                      to-blue-500
                      text-white
                      shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                    `
                    : `
                      text-gray-400
                      hover:bg-white/[0.05]
                      hover:text-white
                    `
                }
              `}
            >

              {/* HOVER GLOW */}

              {!active && (

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-r
                    from-purple-500/10
                    to-blue-500/10
                  "
                ></div>
              )}

              {/* ICON */}

              <span
                className="
                  relative
                  z-10
                  text-lg
                "
              >
                {link.icon}
              </span>

              {/* TEXT */}

              <span
                className="
                  relative
                  z-10
                "
              >
                {link.name}
              </span>

            </Link>
          );
        })}

      </div>

      {/* FOOTER */}

      <div
        className="
          relative
          z-10
          mt-auto
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-5
          "
        >

          <p
            className="
              text-sm
              text-gray-400
              leading-relaxed
            "
          >
            InsideHost Multimedia
            & Creative Branding
            Dashboard.
          </p>

          <div
            className="
              mt-5
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-gradient-to-r
                from-purple-500
                to-blue-500
                flex
                items-center
                justify-center
                font-bold
              "
            >
              I
            </div>

            <div>

              <h4
                className="
                  font-semibold
                "
              >
                InsideHost
              </h4>

              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Admin Access
              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}