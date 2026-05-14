import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import "@fontsource/josefin-sans/300.css";

import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InsideHost",
  description: "Premium Multimedia Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >

      <body
        className="
          min-h-full
          bg-[#050816]
          overflow-x-hidden
        "
      >

        {/* PREMIUM TOASTER */}

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#111827",
              color: "#fff",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "16px",
            },
          }}
        />

        {children}

      </body>

    </html>
  );
}