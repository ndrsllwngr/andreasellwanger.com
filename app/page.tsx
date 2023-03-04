"use client";

import { Header } from "@/components/Header";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="p-6 pt-16">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
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
        {/* <section className="col-span-4 grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-start-2 md:col-end-4 max-w-3xl">
            <h2 className="text-lg font-[575]">Experience &not;</h2>
          </div>
          <ul className="col-span-4">
            {JOBS.map((job, index) => {
              return (
                <li className="border-neutral-700 border-t" key={index}>
                  <h3>{job.company}</h3>
                  <p>{job.description}</p>
                  <p>{job.tags}</p>
                  <p>
                    {new Date(job.startDate).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "2-digit",
                    })}
                    &mdash;{" "}
                    {job.endDate
                      ? new Date(job.endDate).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "2-digit",
                        })
                      : "Now"}
                  </p>
                </li>
              );
            })}
          </ul>
        </section> */}
      </div>
    </main>
  );
}

const JOBS = [
  {
    company: "Celonis",
    startDate: "2020-01-01",
    endDate: null,
    title: "Software Engineer",
    description: "tbd",
    link: "https://www.celonis.com/",
    tags: "Java, Spring, RabbitMQ, PostgreSQL, K8s, TypeScript, Angular",
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
