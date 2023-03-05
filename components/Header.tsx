"use client";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { ScrambledText } from "@/components/ScrambledText";

export const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16">
      <div className="flex flex-col">
        <Link href={"./"} className="text-gray-200 font-[575] leading-5">
          Andreas Ellwanger
        </Link>
        <Separator
          className="bg-transparent data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-0"
          orientation="horizontal"
        />
        <p className="text-neutral-400 font-normal">
          <ScrambledText>Software Engineer</ScrambledText>
        </p>
      </div>
      <div className="md:col-span-2 flex flex-col">
        <p className="text-gray-200 font-[575] leading-5">Routes</p>
        <Separator
          className="bg-transparent data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-0"
          orientation="horizontal"
        />
        <nav className="flex flex-col">
          {ROUTES.map((route, index) => {
            return (
              <Link
                href={route.href}
                className="text-neutral-400 font-normal"
                key={index}
              >
                /{route.label}
              </Link>
            );
          })}
          {/* <a href="./cv.pdf" className="text-neutral-400 font-normal">
            /cv
          </a> */}
        </nav>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-200 font-[575] leading-5">Connect</p>
        <Separator
          className="bg-transparent data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-0"
          orientation="horizontal"
        />
        {CONNECT.map((connection, index) => {
          return (
            <Link
              href={connection.href}
              className="text-neutral-400 font-normal"
              key={index}
            >
              {connection.label} &#8599;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const ROUTES = [
  {
    label: "index",
    href: "/",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "blog",
    href: "/blog",
  },
  // {
  //   label: "colophon",
  //   href: "/colophon",
  // },
];

const CONNECT = [
  {
    label: "Twitter",
    href: "https://twitter.com/ndrsllwngr",
  },
  {
    label: "GitHub",
    href: "https://github.com/ndrsllwngr",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ellwanger",
  },
];
