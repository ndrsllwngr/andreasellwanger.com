"use client";

import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="sticky top-0 isolate z-10 flex items-center justify-center py-4 px-1 md:justify-between">
      <div></div>
      {/*<div className="relative flex rounded-lg border border-neutral-200 bg-white/70 p-1 shadow-md backdrop-blur-md">*/}
      {/*  <div className="absolute left-0 -z-10 h-7 rounded bg-neutral-200 backdrop-blur transition-[width,transform,opacity]" />*/}
      {/*  <Link*/}
      {/*    href="/"*/}
      {/*    className="rounded py-1 px-2 text-sm transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 hover:text-neutral-900  text-neutral-900"*/}
      {/*  >*/}
      {/*    Andreas*/}
      {/*  </Link>*/}
      {/*</div>*/}
      <div className="hidden md:flex transition-opacity">
        <Link
          href="https://github.com/ndrsllwngr"
          target="_blank"
          className="rounded py-1 px-2 text-sm text-neutral-400 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 cursor-alias transition-colors hover:text-neutral-900 hover:underline"
        >
          GitHub
        </Link>
        <Link
          href="https://twitter.com/ndrsllwngr"
          target="_blank"
          className="rounded py-1 px-2 text-sm text-neutral-400 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 cursor-alias transition-colors hover:text-neutral-900 hover:underline"
        >
          Twitter
        </Link>
        <Link
          href="https://read.cv/ndrsllwngr"
          target="_blank"
          className="rounded py-1 px-2 text-sm text-neutral-400 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-neutral-900 cursor-alias transition-colors hover:text-neutral-900 hover:underline"
        >
          CV
        </Link>
      </div>
    </nav>
  );
};
