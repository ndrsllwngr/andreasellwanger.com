"use client";

import { Header } from "@/components/Header";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function About() {
  return (
    <main className="p-6 pt-16">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-start-2 md:col-end-4 max-w-3xl text-transparent text-xl bg-clip-text bg-gradient-to-br from-gray-200 to-neutral-400">
          <Balancer as="p" className="pb-4">
            Andreas Ellwanger is a Software Engineer at{" "}
            <Link
              href={"https://www.celonis.com/"}
              className={"hover:text-[#5cfe50]"}
            >
              Celonis
            </Link>
            , the global leader in execution management. The company provides a
            modern way for businesses to run their processes using data and
            intelligence through the Celonis Execution Management System.
            Celonis pioneered the process mining category a decade ago by
            developing the ability to analyze processes and identify
            inefficiencies automatically. Andreas has been with the company
            since 2020, starting as a Junior Software Engineer before being
            promoted to his current role. In his time at Celonis, Andreas has
            worked on projects involving technologies such as Java, Spring Boot,
            TypeScript, Angular, Docker, and Kubernetes.
          </Balancer>
          <Balancer as="p" className="pb-4">
            Prior to joining Celonis, Andreas worked as a Full Stack Developer
            at Aiderly in Berlin, where he used technologies such as React,
            TypeScript, GraphQL, Apollo, and Hasura to design and develop new
            features and maintain existing ones. He also consulted on technology
            stack decisions and user flows and ensured compliance with
            accessibility standards.
          </Balancer>
          <Balancer as="p" className="pb-4">
            Andreas previously served as an Engineering-Fellow at Tech4Germany
            in Berlin as part of Germany&apos;s first e-Government fellowship
            program. In this role, he worked as a UX researcher and front-end
            developer for the German government for three months, collaborating
            with other fellows on projects related to digitalization and
            e-government.
          </Balancer>
          <Balancer as="p" className="pb-4">
            Andreas holds a B.Sc. in Media Informatics and a minor in
            Human-Computer Interaction from the Ludwig Maximilian University of
            Munich. He is pursuing an M.Sc. in Computer Science at the same
            institution. In addition to his professional experience and
            education, Andreas has received scholarships and grants, published a
            paper, given a presentation at a conference, and volunteered as a
            mentor.
          </Balancer>
          <p className="font-caveat text-3xl">&mdash; 2023</p>
        </div>
      </div>
    </main>
  );
}
