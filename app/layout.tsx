import type { Metadata } from "next";
import { Footer } from "@/modules/layout/footer";
import { inter, bauhaus, cocogoose, moderniz, stretchPro } from "@/lib/font";
import SmoothScrollProvider from "@/components/canvas/smooth-scroll";

import { Navbar } from "@/modules/layout/header";
import "./globals.css";

const siteUrl = "https://arafat-man-portfolio.vercel.app/";
const siteTitle = "Man Arafat | Software Developer";
const siteDescription =
  "Explore my projects and experience as a junior software developer who's curious and enjoys learning new things.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Man Arafat" }],
  keywords: [
    "software developer",
    "portfolio",
    "API developer",
    "Tean Collaborator",
    "Man Arafat",
  ],
  creator: "Man Arafat",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
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
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


// testing