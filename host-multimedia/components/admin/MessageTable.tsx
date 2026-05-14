const messages = [
  {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    message: "Need logo design for my startup.",
    date: "10 May 2026",
  },

  {
    name: "Aman Singh",
    email: "aman@gmail.com",
    message: "Need cinematic reel editing.",
    date: "11 May 2026",
  },

  {
    name: "Karan",
    email: "karan@gmail.com",
    message: "Need social media management.",
    date: "12 May 2026",
  },
];

export default function MessageTable() {
  return (
    <div
      className="
        overflow-x-auto
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
      "
    >

      <table className="w-full text-left">

        {/* HEAD */}

        <thead
          className="
            border-b
            border-white/10
            bg-white/[0.03]
          "
        >
          <tr>

            <th className="p-5 text-gray-300">
              Name
            </th>

            <th className="p-5 text-gray-300">
              Email
            </th>

            <th className="p-5 text-gray-300">
              Message
            </th>

            <th className="p-5 text-gray-300">
              Date
            </th>

          </tr>
        </thead>

        {/* BODY */}

        <tbody>

          {messages.map((msg, i) => (
            <tr
              key={i}
              className="border-b border-white/5"
            >

              <td className="p-5 font-medium">
                {msg.name}
              </td>

              <td className="p-5 text-gray-300">
                {msg.email}
              </td>

              <td className="p-5 text-gray-300">
                {msg.message}
              </td>

              <td className="p-5 text-gray-400">
                {msg.date}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}