import React from 'react'
import { PROJECTS } from '@/lib/constants'
import Layout from '@/components/layout'
import Head from 'next/head'
import NavBar from '@/components/old-nav-bar'
import OldFooter from '@/components/old-footer'

const ProjectsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Andreas Ellwanger — Software Engineer.</title>
        <meta name="author" content="Andreas Ellwanger" />
        <meta
          name="description"
          content="Andreas is a Software Engineer at Celonis and studies Computer Science at LMU Munich. He graduated in April 2018 at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction."
        />
      </Head>
      <NavBar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 px-4 flex flex-col justify-center py-16">
        <h1 className="font-bold text-lg md:text-4xl tracking-wide leading-tight font-sans mb-12">
          <span className="text-black opacity-90">Passion projects and fun little experiments</span>
        </h1>
        {PROJECTS.map((project, i) => (
          <Project {...project} className="pb-10" key={i} />
        ))}
      </section>
      <OldFooter />
    </Layout>
  )
}

export default ProjectsPage

const Project = ({
  className,
  title,
  date,
  stack,
  url,
  list,
}: {
  className: string
  title: string
  date: string
  stack: string
  url: string
  list: string[]
}) => {
  return (
    <section className={className}>
      <header>
        <h3 className="font-sans font-bold">
          <a className="inline-flex" href={url}>
            <span>{title} ↖</span>
          </a>
        </h3>
        <p className="font-sans opacity-90">
          {date} | {stack}
        </p>
      </header>
      <ul>
        {list.map((text, i) => (
          <li key={i} className="mt-1 font-sans text-black leading-normal">
            <span className="absolute -ml-3 sm:-ml-3 select-none font-bold transform -translate-y-px">
              ›
            </span>
            {text}
          </li>
        ))}
      </ul>
    </section>
  )
}
