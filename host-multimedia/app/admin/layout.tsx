
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
        flex
        overflow-hidden
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.08),transparent_25%)]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_25%)]"></div>

      </div>

      {/* SIDEBAR */}

      <div
        className="
          fixed
          left-0
          top-0
          h-screen
          w-[260px]
          z-50
        "
      >
        <Sidebar />
      </div>

      {/* MAIN AREA */}

      <div
        className="
          flex-1
          ml-[260px]
          flex
          flex-col
          min-h-screen
        "
      >
        {/* TOPBAR */}

        <div className="sticky top-0 z-40">
          <Topbar />
        </div>

        {/* CONTENT */}

        <main
          className="
            flex-1
            px-8
            py-8
            md:px-10
            lg:px-12
            max-w-[1700px]
            w-full
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

