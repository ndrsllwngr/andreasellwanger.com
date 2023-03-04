import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-6 pt-16 grid grid-cols-1 md:grid-cols-4 gap-16">
      <p className="md:col-start-2 md:col-end-4 max-w-3xl text-neutral-400 font-normal">
        Built with{" "}
        <Link href={"https://nextjs.org/"} className={"hover:text-white"}>
          Next.js
        </Link>
        ,{" "}
        <Link href={"https://mdxjs.com/"} className={"hover:text-white"}>
          MDX
        </Link>
        ,{" "}
        <Link href={"https://tailwindcss.com/"} className={"hover:text-white"}>
          Tailwind
        </Link>{" "}
        and{" "}
        <Link href={"https://vercel.com/"} className={"hover:text-white"}>
          Vercel
        </Link>
      </p>
    </footer>
  );
};
