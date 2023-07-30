import { Caveat, Fraunces, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["WONK", "opsz"],
});
