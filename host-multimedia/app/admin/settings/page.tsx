"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [email, setEmail] = useState(
    "ishpreetsaluja2004@gmail.com"
  );

  const [password, setPassword] = useState(
    "insidehost123"
  );

  const handleSave = () => {
    alert("Settings Saved Successfully 🚀");
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-black text-white">
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Manage admin credentials and website settings.
        </p>
      </div>

      {/* CARD */}

      <div
        className="
          max-w-3xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
        "
      >

        <div className="space-y-6">

          {/* EMAIL */}

          <div>
            <label className="block mb-3 text-gray-300">
              Admin Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                text-white
                outline-none
              "
            />
          </div>

          {/* PASSWORD */}

          <div>
            <label className="block mb-3 text-gray-300">
              Admin Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                text-white
                outline-none
              "
            />
          </div>

          {/* BUTTON */}

          <button
            onClick={handleSave}
            className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-blue-500
              text-white
              font-semibold
              hover:scale-105
              transition
            "
          >
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}