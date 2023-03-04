import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Andreas Ellwanger",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased js-focus-visible dark">
      <body
        className={`${inter.variable} ${caveat.variable} font-sans flex h-full flex-col overflow-y-scroll bg-neutral-900 text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}