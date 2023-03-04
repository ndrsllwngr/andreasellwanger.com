"use client";

import { ScrambledText } from "@/components/ScrambledText";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="p-6 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="flex flex-col">
          <Link href={"./"} className="text-white font-[575] leading-5">
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
          <p className="text-white font-[575] leading-5">Routes</p>
          <Separator
            className="bg-transparent data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-0"
            orientation="horizontal"
          />
          <nav>
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
          </nav>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-[575] leading-5">Connect</p>
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
                {connection.label} ↗
              </Link>
            );
          })}
        </div>
        <div className="md:col-start-2 md:col-end-4 max-w-3xl">
          <Balancer className="text-transparent text-xl bg-clip-text bg-gradient-to-br from-gray-200 to-neutral-400">
            A detail-oriented software engineer interested in Java, Spring,
            TypeScript, React, and robust and scalable systems. Currently
            working at{" "}
            <Link
              href={"https://www.celonis.com/"}
              className={"hover:text-[#5cfe50]"}
            >
              Celonis
            </Link>
            , designing and building both performant and user-friendly systems,
            developing a platform that helps companies optimize their business
            processes.
          </Balancer>
        </div>
      </div>
    </main>
  );
}

const ROUTES = [
  {
    label: "index",
    href: "/",
  },
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

const JOBS = [
  {
    company: "Celonis",
    startDate: "2020-01-01",
    endDate: null,
    title: "Software Engineer (IC 2)",
    description: "tbd",
    link: "https://www.celonis.com/",
    tags: "Java, Spring, RabbitMQ, PostgreSQL, K8, TypeScript, Angular",
  },
  {
    company: "Aiderly",
    startDate: "2018-12-01",
    endDate: "2019-11-01",
    title: "Full Stack Developer",
    description: "tbd",
    link: "https://www.celonis.com/",
    tags: "TypeScript, React, GraphQL, Apollo, Hasura, PostgreSQL,",
  },
  {
    company: "Tech4Germany",
    startDate: "2018-08-01",
    endDate: "2018-10-01",
    title: "Engineering Fellow",
    description: "tbd",
    link: "https://www.celonis.com/",
    tags: "JavaScript, Vue, HTML, Figma, gulp.js, Sass, UX",
  },
];
