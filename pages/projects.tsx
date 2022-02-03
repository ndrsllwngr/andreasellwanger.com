import React from 'react'

import Head from 'next/head'

import Container from '@/components/container'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import NavBar from '@/components/old-nav-bar'
import { getTable } from '@/lib/airtable'

const Projects = ({ projects }: { projects: Array<Project> }) => {
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
            {projects.map((project, i) => (
              <Project project={project} className="pb-10" key={i} />
            ))}
          </section>
        </div>
        <Footer />
      </Container>
    </Layout>
  )
}

const Project = ({ className, project }: { className: string; project: Project }) => {
  return (
    <section className={className}>
      <header>
        <h3 className="font-sans font-bold">
          <a className="inline-flex" href={project.fields.Link}>
            <span>{project.fields.Name} ↖</span>
          </a>
        </h3>
        <p className="font-sans opacity-90">
          {project.fields.Date} | {project.fields.Stack}
        </p>
      </header>
      <ul>
        <li className="mt-1 font-sans leading-normal">
          <span className="absolute -ml-3 -translate-y-px transform select-none font-bold sm:-ml-3">
            ›
          </span>
          {project.fields.Description}
        </li>
      </ul>
    </section>
  )
}

type Project = {
  id: string
  fields: {
    Description: string
    ID: number
    Link: string
    Name: string
    Stack: Array<string>
    Date: string
  }
}

export async function getStaticProps() {
  const projects: Array<Project> = await getTable('Projects', {
    sort: [{ field: 'Order', direction: 'asc' }],
  })

  return {
    props: {
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600, // In seconds
  }
}

export default Projects
