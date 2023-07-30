import "./globals.css";

import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { caveat, fraunces, inter } from "@/lib/fonts";
import { ReactNode } from "react";

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
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full js-focus-visible">
      <body
        className={cn(
          `${inter.variable} ${caveat.variable} ${fraunces.variable} antialiased font-sans flex h-full flex-col overflow-y-scroll`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
