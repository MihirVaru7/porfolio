import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Bhushan Kumkar - Video Editor | VFX | 3D Artist",
  description:
    "19-year-old aspiring filmmaker specializing in video editing, VFX, and 3D design. Professional portfolio showcasing creative visual storytelling.",
  keywords:
    "video editor, VFX artist, 3D artist, filmmaker, Mumbai, India, Premiere Pro, After Effects, Blender",
  authors: [{ name: "Shubham Bhushan Kumkar" }],
  openGraph: {
    title: "Shubham Bhushan Kumkar - Video Editor | VFX | 3D Artist",
    description:
      "Professional portfolio of a 19-year-old filmmaker specializing in video editing, VFX, and 3D design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
