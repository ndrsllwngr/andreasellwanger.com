import "./globals.css";

import { Caveat, Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: {
    default: "Andreas Ellwanger",
    template: "%s | Andreas Ellwanger",
  },
  description: "Software Engineer",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  manifest: "/site.webmanifest",
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full js-focus-visible dark">
      <body
        className={`${inter.variable} ${caveat.variable} antialiased font-sans flex h-full flex-col overflow-y-scroll bg-neutral-900 text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
