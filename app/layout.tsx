import type { Metadata } from "next";
import { inter, bauhaus, cocogoose, moderniz, stretchPro } from "@/lib/font";

import Navbar from "@/modules/layout/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Man Arafat | Software Developer",
  description:
    "Explore my projects, experiences, and passion for turning ideas into solutions that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bauhaus.variable} ${cocogoose.variable} ${moderniz.variable} ${stretchPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}