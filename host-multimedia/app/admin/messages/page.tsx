
import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

export default async function MessagesPage() {
  await connectDB();

  const messages = await Message.find()
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div>

      {/* TOP */}

      <div className="mb-10">

        <h1 className="text-4xl font-black text-white">
          Contact Messages
        </h1>

        <p className="text-gray-400 mt-3">
          All website contact form submissions.
        </p>

      </div>

      {/* TABLE */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          overflow-hidden
        "
      >

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="border-b border-white/10 bg-white/[0.03]">

              <tr>

                <th className="p-6 text-sm font-semibold text-gray-300">
                  Name
                </th>

                <th className="p-6 text-sm font-semibold text-gray-300">
                  Email
                </th>

                <th className="p-6 text-sm font-semibold text-gray-300">
                  Message
                </th>

              </tr>

            </thead>

            <tbody>

              {messages.map((msg: any) => (
                <tr
                  key={msg._id}
                  className="border-b border-white/5 hover:bg-white/[0.03] transition"
                >

                  <td className="p-6 text-white font-medium">
                    {msg.name}
                  </td>

                  <td className="p-6 text-gray-300">
                    {msg.email}
                  </td>

                  <td className="p-6 text-gray-400 max-w-[500px]">
                    {msg.message}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

