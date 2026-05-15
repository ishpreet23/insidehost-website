"use client";

import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

import {
  FiTrash2,
  FiMessageSquare,
} from "react-icons/fi";

interface FeedbackType {
  _id: string;
  name: string;
  review: string;
}

export default function FeedbackPage() {

  const [feedback,
    setFeedback] =
    useState<
      FeedbackType[]
    >([]);

  const [loading,
    setLoading] =
    useState(true);

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

        /* FIX */

        setFeedback(
          Array.isArray(data)
            ? data
            : []
        );

      } catch (error) {

        console.log(error);

        setFeedback([]);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchFeedback();

  }, []);

  /* DELETE */

  const handleDelete =
    async (id: string) => {

      try {

        const res =
          await fetch(
            `/api/feedback/${id}`,
            {
              method:
                "DELETE",
            }
          );

        const data =
          await res.json();

        if (!res.ok) {

          throw new Error(
            data.error
          );
        }

        toast.success(
          "Feedback Deleted"
        );

        setFeedback(
          (prev) =>
            prev.filter(
              (item) =>
                item._id !== id
            )
        );

      } catch (error: any) {

        console.log(error);

        toast.error(
          error.message
        );
      }
    };

  return (

    <section
      className="
        min-h-screen
        bg-[#030712]
        text-white
        p-8
      "
    >

      {/* TITLE */}

      <div className="mb-12">

        <p
          className="
            uppercase
            tracking-[4px]
            text-purple-400
            font-semibold
            mb-3
          "
        >
          Admin Panel
        </p>

        <h1
          className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          Client Feedback
        </h1>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="flex justify-center py-32">

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
        feedback.length === 0 && (

        <div
          className="
            text-center
            py-32
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
          "
        >

          <FiMessageSquare
            className="
              text-6xl
              mx-auto
              mb-6
              text-purple-400
            "
          />

          <h2
            className="
              text-3xl
              font-bold
              mb-3
            "
          >
            No Feedback Yet
          </h2>

          <p className="text-gray-400">
            User feedback will appear here
          </p>

        </div>
      )}

      {/* FEEDBACK GRID */}

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >

        {feedback.map(
          (item) => (

          <motion.div
            key={item._id}
            whileHover={{
              y: -8,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-7
            "
          >

            {/* GLOW */}

            <div
              className="
                absolute
                top-0
                right-0
                w-[160px]
                h-[160px]
                bg-purple-500/10
                blur-[90px]
                rounded-full
              "
            ></div>

            {/* CONTENT */}

            <div className="relative z-10">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-5
                "
              >

                <h3
                  className="
                    text-2xl
                    font-black
                  "
                >
                  {item.name}
                </h3>

                <FiMessageSquare
                  className="
                    text-purple-400
                    text-2xl
                  "
                />

              </div>

              <p
                className="
                  text-gray-300
                  leading-relaxed
                  mb-8
                "
              >
                {item.review}
              </p>

              {/* DELETE */}

              <button
                onClick={() =>
                  handleDelete(
                    item._id
                  )
                }
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-red-500/20
                  border
                  border-red-500/30
                  hover:bg-red-500
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-semibold
                  text-white
                "
              >

                <FiTrash2 />

                Delete Feedback

              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}