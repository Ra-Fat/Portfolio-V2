import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const bauhaus = localFont({
  src: "../fonts/BAUHS93.ttf",
  variable: "--font-bauhaus",
  display: "swap",
});

export const cocogoose = localFont({
  src: "../fonts/Cocogoose Pro Regular Trial.ttf",
  variable: "--font-cocogoose",
  display: "swap",
});

export const moderniz = localFont({
  src: "../fonts/Moderniz.woff2",
  variable: "--font-moderniz",
  display: "swap",
});

export const stretchPro = localFont({
  src: "../fonts/StretchPro.otf",
  variable: "--font-stretch-pro",
  display: "swap",
});