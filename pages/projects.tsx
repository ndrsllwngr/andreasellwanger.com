import React from 'react'

import Head from 'next/head'

import Container from '@/components/container'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import NavBar from '@/components/old-nav-bar'
import { PROJECTS } from '@/lib/constants'

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
      <Container className={'min-h-screen'}>
        <NavBar />
        <div className={'flex-grow'}>
          <section className="container mx-auto flex max-w-7xl flex-col items-start px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="mb-12 font-sans text-lg font-bold leading-tight tracking-wide md:text-4xl">
              <span className="opacity-90">Passion projects and fun little experiments</span>
            </h1>
            {PROJECTS.map((project, i) => (
              <Project {...project} className="pb-10" key={i} />
            ))}
          </section>
        </div>
        <Footer />
      </Container>
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
          <li key={i} className="mt-1 font-sans leading-normal">
            <span className="absolute -ml-3 -translate-y-px transform select-none font-bold sm:-ml-3">
              ›
            </span>
            {text}
          </li>
        ))}
      </ul>
    </section>
  )
}
