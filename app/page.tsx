"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Grid } from "@/components/Grid";

export default function HomePage() {
  return (
    <div className="flex flex-col grow">
      <main className="p-6 pt-16 grow">
        <Header />
        <Grid className="pb-16">
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
              , designing and building both performant and user-friendly
              systems, developing a platform that helps companies optimize their
              business processes.
            </Balancer>
          </div>
        </Grid>
        <Grid className="pb-8">
          <div className="md:col-start-2 md:col-end-4 max-w-3xl">
            <h1 className="text-lg font-[575]">Experience ↓</h1>
          </div>
        </Grid>
        <Grid className="text-transparent text-xl bg-clip-text bg-gradient-to-br from-gray-200 to-neutral-400">
          {JOBS.map((job) => (
            <div className={"col-span-4"} key={job.id}>
              <Grid className={"border-t border-neutral-700 py-6"}>
                <Link
                  className="text-gray-200 text-base font-[575] hover:underline hover:decoration-gray-200"
                  href={job.link}
                >
                  {job.company}
                </Link>
                <div className="flex flex-col space-y-1 md:col-start-2 md:col-span-2">
                  <div className="w-full flex flex-col max-w-3xl">
                    <h2 className="text-base text-gray-200 pb-4 pt-4 md:pt-0">
                      {job.description}
                    </h2>
                    <p className={"text-sm text-neutral-400"}>{job.tags}</p>
                  </div>
                </div>
                <div
                  className={
                    "flex flex-col text-sm text-neutral-400 pt-4 md:pt-0"
                  }
                >
                  <p>
                    {new Date(job.startDate).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "2-digit",
                    })}{" "}
                    &mdash;{" "}
                    {job.endDate
                      ? new Date(job.endDate).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "2-digit",
                        })
                      : "Now"}
                  </p>
                </div>
              </Grid>
            </div>
          ))}
        </Grid>
      </main>
      <Footer />
    </div>
  );
}

const JOBS = [
  {
    id: "celonis-1",
    company: "Celonis",
    startDate: "2020-01-01",
    endDate: null,
    title: "Software Engineer",
    description:
      "Software Engineer (IC2) designing and building both performant and user-friendly systems, developing a platform that helps companies optimize their business processes.",
    link: "https://www.celonis.com/",
    tags: "Java, Spring, RabbitMQ, PostgreSQL, K8s, TypeScript, Angular",
  },
  {
    id: "aiderly-1",
    company: "Aiderly",
    startDate: "2018-12-01",
    endDate: "2019-11-01",
    title: "Full Stack Developer",
    description:
      "Full Stack Developer developing and designing new features and maintaining existing ones, consulting on technology stack decisions and user flows and ensuring compliance with accessibility standards.",
    link: "https://web.archive.org/web/20200331103857/https://aiderly.de/",
    tags: "TypeScript, React, GraphQL, Apollo, Hasura, PostgreSQL",
  },
  {
    id: "tech4germany-1",
    company: "Tech4Germany",
    startDate: "2018-08-01",
    endDate: "2018-10-01",
    title: "Engineering Fellow",
    description:
      "Engineering Fellow working as a UX researcher and front-end developer for the German government for three months, collaborating with other fellows on projects related to digitalization and e-government",
    link: "https://digitalservice.bund.de/fellowships/tech4germany/",
    tags: "JavaScript, Vue, HTML, Figma, gulp.js, Sass, UX",
  },
];
