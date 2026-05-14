"use client";

const subscribers = [
  {
    id: 1,
    email: "alex@gmail.com",
    date: "10 May 2026",
  },
  {
    id: 2,
    email: "insidehost@gmail.com",
    date: "11 May 2026",
  },
  {
    id: 3,
    email: "client@gmail.com",
    date: "12 May 2026",
  },
];

export default function SubscriberTable() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <table className="w-full text-left text-white">
        <thead className="bg-white/10 text-gray-300">
          <tr>
            <th className="p-5">#</th>
            <th className="p-5">Email</th>
            <th className="p-5">Date</th>
          </tr>
        </thead>

        <tbody>
          {subscribers.map((sub) => (
            <tr
              key={sub.id}
              className="border-t border-white/10 hover:bg-white/5 transition"
            >
              <td className="p-5">{sub.id}</td>
              <td className="p-5">{sub.email}</td>
              <td className="p-5">{sub.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}