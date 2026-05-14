"use client";

import React from "react";

interface Props {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function DashboardCard({
  title,
  value,
  icon,
}: Props) {

  return (

    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
      "
    >

      {/* GLOW */}

      <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* CONTENT */}

      <div className="relative z-10">

        {/* ICON */}

        <div
          className="
            w-20
            h-20
            rounded-[26px]
            flex
            items-center
            justify-center
            text-3xl
            text-white
            bg-gradient-to-br
            from-purple-500
            via-pink-500
            to-blue-500
            shadow-[0_20px_60px_rgba(168,85,247,0.35)]
          "
        >
          {icon}
        </div>

        {/* TITLE */}

        <p
          className="
            mt-8
            text-gray-400
            uppercase
            tracking-[4px]
            text-sm
          "
        >
          {title}
        </p>

        {/* VALUE */}

        <h2
          className="
            mt-5
            text-6xl
            font-black
            text-white
          "
        >
          {value}
        </h2>

        {/* BOTTOM */}

        <div className="mt-8">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-gray-300 text-sm">
              Live Dashboard Data
            </span>

          </div>

          <div
            className="
              mt-4
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-blue-500
            "
          ></div>

        </div>

      </div>

    </div>
  );
}