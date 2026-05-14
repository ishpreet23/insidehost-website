"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

interface MessageType {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function RecentMessages() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");

      const data = await res.json();

      setMessages(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE MESSAGE
  const deleteMessage = async (id: string) => {
    try {
      setDeletingId(id);

      const res = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessages((prev) =>
          prev.filter((msg) => msg._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
        p-8
      "
    >
      {/* TITLE */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Recent Messages
        </h2>

        <p className="text-gray-400 mt-2">
          Latest contact form submissions.
        </p>
      </div>

      {/* LOADING */}

      {loading && (
        <p className="text-gray-400">
          Loading messages...
        </p>
      )}

      {/* EMPTY */}

      {!loading && messages.length === 0 && (
        <p className="text-gray-400">
          No messages found.
        </p>
      )}

      {/* LIST */}

      <div className="space-y-5">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="
              p-5
              rounded-2xl
              border
              border-white/10
              bg-white/5
              hover:border-purple-500/30
              transition-all
            "
          >
            {/* TOP */}

            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">
                  {msg.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {msg.email}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* BADGE */}

                <span
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    bg-gradient-to-r
                    from-purple-500
                    to-blue-500
                  "
                >
                  New
                </span>

                {/* DELETE BUTTON */}

                <button
                  onClick={() => deleteMessage(msg._id)}
                  disabled={deletingId === msg._id}
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-red-500/10
                    border
                    border-red-500/20
                    flex
                    items-center
                    justify-center
                    text-red-400
                    hover:bg-red-500/20
                    transition-all
                    cursor-pointer
                    disabled:opacity-50
                  "
                >
                  {deletingId === msg._id ? (
                    <span className="text-xs">
                      ...
                    </span>
                  ) : (
                    <Trash2 size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* MESSAGE */}

            <p className="text-gray-300 leading-relaxed">
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}