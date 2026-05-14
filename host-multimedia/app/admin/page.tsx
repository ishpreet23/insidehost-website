"use client";

import { useEffect, useState } from "react";

import {
  FaEnvelope,
  FaFolderOpen,
  FaImages,
  FaArrowUp,
  FaEye,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import DashboardCard from "@/components/admin/DashboardCard";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

interface StatsType {
  totalMessages: number;
  totalProjects: number;
  totalPortfolio: number;
}

export default function AdminPage() {

  const [stats, setStats] =
    useState<StatsType>({
      totalMessages: 0,
      totalProjects: 0,
      totalPortfolio: 0,
    });

  const [loading, setLoading] =
    useState(true);

  /* CHART DATA */

  const analyticsData = [
    {
      name: "Mon",
      users: 120,
    },
    {
      name: "Tue",
      users: 210,
    },
    {
      name: "Wed",
      users: 170,
    },
    {
      name: "Thu",
      users: 290,
    },
    {
      name: "Fri",
      users: 430,
    },
    {
      name: "Sat",
      users: 380,
    },
    {
      name: "Sun",
      users: 520,
    },
  ];

  /* FETCH STATS */

  useEffect(() => {

    const fetchStats =
      async () => {

        try {

          const res =
            await fetch(
              "/api/stats"
            );

          const data =
            await res.json();

          setStats(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchStats();

  }, []);

  return (

    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
        p-6
        md:p-10
        overflow-hidden
        relative
      "
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* HEADER */}

      <div className="relative z-10 mb-12">

        <div className="flex items-center gap-5">

          <div
            className="
              w-20
              h-20
              rounded-[28px]
              bg-gradient-to-br
              from-purple-500
              via-pink-500
              to-blue-500
              flex
              items-center
              justify-center
              text-3xl
              shadow-[0_20px_60px_rgba(168,85,247,0.35)]
            "
          >
            <FaChartLine />
          </div>

          <div>

            <h1
              className="
                text-5xl
                md:text-6xl
                font-black
                leading-none
              "
            >
              Dashboard
              <br />
              Analytics
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              InsideHost Premium Admin Overview
            </p>

          </div>

        </div>

      </div>

      {/* STATS CARDS */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          mb-10
        "
      >

        <DashboardCard
          title="Total Messages"
          value={
            loading
              ? "..."
              : stats.totalMessages.toString()
          }
          icon={<FaEnvelope />}
        />

        <DashboardCard
          title="Projects"
          value={
            loading
              ? "..."
              : stats.totalProjects.toString()
          }
          icon={<FaFolderOpen />}
        />

        <DashboardCard
          title="Portfolio Items"
          value={
            loading
              ? "..."
              : stats.totalPortfolio.toString()
          }
          icon={<FaImages />}
        />

      </div>

      {/* ANALYTICS SECTION */}

      <div
        className="
          relative
          z-10
          grid
          xl:grid-cols-3
          gap-8
        "
      >

        {/* CHART */}

        <div
          className="
            xl:col-span-2
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
            p-8
            overflow-hidden
            relative
          "
        >

          {/* GLOW */}

          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full"></div>

          {/* HEADER */}

          <div className="relative z-10 flex items-center justify-between mb-10">

            <div>

              <h2 className="text-3xl font-black">
                Website Reach
              </h2>

              <p className="text-gray-400 mt-2">
                Weekly user activity analytics
              </p>

            </div>

            <div
              className="
                px-4
                py-2
                rounded-2xl
                bg-green-500/10
                border
                border-green-500/20
                text-green-400
                flex
                items-center
                gap-2
              "
            >

              <FaArrowUp />

              +24%

            </div>

          </div>

          {/* CHART */}

          <div className="h-[350px] relative z-10">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={analyticsData}
              >

                <defs>

                  <linearGradient
                    id="colorUsers"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#a855f7"
                      stopOpacity={0.8}
                    />

                    <stop
                      offset="95%"
                      stopColor="#3b82f6"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1f2937"
                />

                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#a855f7"
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                  strokeWidth={4}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* SIDE STATS */}

        <div className="space-y-8">

          {/* USERS */}

          <div
            className="
              rounded-[34px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-3xl
              p-8
              relative
              overflow-hidden
            "
          >

            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 blur-[100px] rounded-full"></div>

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p className="text-gray-400">
                  Total Visitors
                </p>

                <h2 className="text-6xl font-black mt-3">
                  12K
                </h2>

              </div>

              <div
                className="
                  w-20
                  h-20
                  rounded-[28px]
                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                <FaUsers />
              </div>

            </div>

          </div>

          {/* VIEWS */}

          <div
            className="
              rounded-[34px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-3xl
              p-8
              relative
              overflow-hidden
            "
          >

            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-pink-500/10 blur-[100px] rounded-full"></div>

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p className="text-gray-400">
                  Portfolio Views
                </p>

                <h2 className="text-6xl font-black mt-3">
                  8.4K
                </h2>

              </div>

              <div
                className="
                  w-20
                  h-20
                  rounded-[28px]
                  bg-gradient-to-br
                  from-pink-500
                  to-orange-500
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                <FaEye />
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}