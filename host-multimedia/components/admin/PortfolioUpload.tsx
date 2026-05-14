"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import {
  FiTrash2,
  FiImage,
  FiVideo,
} from "react-icons/fi";

interface PortfolioItem {
  _id?: string;
  id?: string;
  title: string;
  category: string;
  type: string;
  mediaUrl: string;
  description: string;
}

export default function PortfolioUpload() {

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState(
      "Premium cinematic creative crafted with futuristic visuals, luxury aesthetics and modern branding."
    );

  const [file, setFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const [portfolio, setPortfolio] =
    useState<PortfolioItem[]>([]);

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

      setPortfolio(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchPortfolio();

  }, []);

  /* UPLOAD */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!file) {

      toast.error(
        "Please select a file"
      );

      return;
    }

    try {

      setLoading(true);

      /* CLOUDINARY */

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      formData.append(
        "upload_preset",
        "insidehost"
      );

      const isVideo =
        file.type.startsWith(
          "video"
        );

      const cloudinaryUrl =
        isVideo
          ? `https://api.cloudinary.com/v1_1/dsm7k3ysu/video/upload`
          : `https://api.cloudinary.com/v1_1/dsm7k3ysu/image/upload`;

      const cloudinaryRes =
        await fetch(
          cloudinaryUrl,
          {
            method: "POST",
            body: formData,
          }
        );

      const cloudinaryData =
        await cloudinaryRes.json();

      if (
        !cloudinaryData.secure_url
      ) {

        throw new Error(
          "Cloudinary upload failed"
        );
      }

      /* SAVE TO DATABASE */

      const res = await fetch(
        "/api/portfolio",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title,

            category,

            description,

            mediaUrl:
              cloudinaryData.secure_url,

            type: isVideo
              ? "video"
              : "image",
          }),
        }
      );

      if (!res.ok) {

        throw new Error(
          "Database failed"
        );
      }

      toast.success(
        "Portfolio Uploaded 🚀"
      );

      setTitle("");

      setCategory("");

      setDescription(
        "Premium cinematic creative crafted with futuristic visuals, luxury aesthetics and modern branding."
      );

      setFile(null);

      setPreview("");

      fetchPortfolio();

    } catch (error) {

      console.log(error);

      toast.error(
        "Upload Failed"
      );

    } finally {

      setLoading(false);
    }
  };

  /* DELETE */

  const handleDelete = async (
    id: string
  ) => {

    if (!id) {

      toast.error(
        "Portfolio ID missing"
      );

      return;
    }

    try {

      const res = await fetch(
        `/api/portfolio/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await res.json();

      if (!res.ok) {

        throw new Error(
          data.error ||
          "Delete failed"
        );
      }

      toast.success(
        "Portfolio Deleted 🚀"
      );

      setPortfolio((prev) =>
        prev.filter(
          (item) =>
            (item._id || item.id) !== id
        )
      );

    } catch (error: any) {

      console.log(error);

      toast.error(
        error.message ||
        "Delete Failed"
      );
    }
  };

  return (

    <div className="space-y-14">

      {/* UPLOAD CARD */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-8
        "
      >

        {/* GLOW */}

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          <h2
            className="
              text-4xl
              font-black
              mb-10
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-blue-400
              bg-clip-text
              text-transparent
            "
          >
            Upload Portfolio
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >

            {/* TITLE */}

            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              required
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#0f172a]
                border
                border-white/10
                text-white
                outline-none
                focus:border-purple-500
              "
            />

            {/* CATEGORY */}

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              required
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#0f172a]
                border
                border-white/10
                text-white
                outline-none
                focus:border-purple-500
              "
            >

              <option value="">
                Select Category
              </option>

              <option value="Brand Logo">
                Brand Logo
              </option>

              <option value="Creative Poster">
                Creative Poster
              </option>

              <option value="YouTube Thumbnail">
                YouTube Thumbnail
              </option>

              <option value="Product Packaging">
                Product Packaging
              </option>

              <option value="Modern Logo">
                Modern Logo
              </option>

              <option value="Event Poster">
                Event Poster
              </option>

              <option value="Video Shoot">
                Video Shoot
              </option>

              <option value="Product Shoot">
                Product Shoot
              </option>

            </select>

            {/* DESCRIPTION */}

            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              rows={5}
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#0f172a]
                border
                border-white/10
                text-white
                outline-none
                resize-none
                focus:border-purple-500
              "
            />

            {/* FILE */}

            <label
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                w-full
                min-h-[240px]
                border-2
                border-dashed
                border-purple-500/40
                rounded-[28px]
                bg-[#0f172a]
                cursor-pointer
                hover:border-purple-400
                transition
                overflow-hidden
              "
            >

              <input
                type="file"
                accept="image/*,video/*"
                hidden
                onChange={(e) => {

                  const selected =
                    e.target.files?.[0];

                  if (!selected)
                    return;

                  setFile(selected);

                  setPreview(
                    URL.createObjectURL(
                      selected
                    )
                  );
                }}
              />

              {!preview ? (

                <div className="text-center px-6">

                  <div className="text-6xl mb-4">
                    🚀
                  </div>

                  <p className="text-xl font-semibold text-white">
                    Upload Image or Video
                  </p>

                  <p className="text-gray-400 mt-2">
                    Drag & Drop or Click
                  </p>

                </div>

              ) : file?.type.startsWith(
                "video"
              ) ? (

                <video
                  src={preview}
                  controls
                  className="
                    w-full
                    h-[350px]
                    object-cover
                  "
                />

              ) : (

                <img
                  src={preview}
                  alt="preview"
                  className="
                    w-full
                    h-[350px]
                    object-cover
                  "
                />

              )}

            </label>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
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
                font-bold
                shadow-[0_20px_60px_rgba(168,85,247,0.35)]
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >

              {loading
                ? "Uploading..."
                : "Upload Project"}

            </button>

          </form>

        </div>

      </motion.div>

      {/* UPLOADED PROJECTS */}

      <div>

        <h2
          className="
            text-4xl
            font-black
            mb-10
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          Uploaded Projects
        </h2>

        <div
          className="
            grid
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {portfolio.map((item) => (

            <motion.div
              key={item._id || item.id}
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
              "
            >

              {/* MEDIA */}

              <div className="relative">

                {item.type ===
                "image" ? (

                  <img
                    src={
                      item.mediaUrl
                    }
                    alt={item.title}
                    className="
                      w-full
                      h-[320px]
                      object-cover
                    "
                  />

                ) : (

                  <video
                    src={
                      item.mediaUrl
                    }
                    controls
                    className="
                      w-full
                      h-[320px]
                      object-cover
                      bg-black
                    "
                  />

                )}

                {/* TYPE */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
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
                  "
                >

                  {item.type ===
                  "image" ? (
                    <FiImage />
                  ) : (
                    <FiVideo />
                  )}

                  {item.type}

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-2
                  "
                >
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-2">
                  {item.category}
                </p>

                <p
                  className="
                    text-sm
                    text-gray-500
                    leading-relaxed
                    mb-6
                  "
                >
                  {item.description}
                </p>

                {/* DELETE */}

                <button
                  onClick={() =>
                    handleDelete(
                      item._id || item.id || ""
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

                  Delete Portfolio

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}