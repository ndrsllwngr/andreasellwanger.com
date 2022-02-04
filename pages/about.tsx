import React from 'react'

import Head from 'next/head'

import Container from '@/components/container'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import { LogoCloud } from '@/components/old-logo-cloud'
import NavBar from '@/components/old-nav-bar'
import { ProjectCard } from '@/components/project-card'
import { SOCIAL_PROFILES } from '@/lib/constants'

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>Andreas Ellwanger — Software Engineer.</title>
        <meta name="author" content="Andreas Ellwanger – About" />
        <meta
          name="description"
          content="Andreas is a Software Engineer at Celonis and studies Computer Science at LMU Munich. He graduated in April 2018 at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction."
        />
      </Head>
      <Container className={'min-h-screen'}>
        <NavBar />
        <div className={'mt-10 flex-grow'}>
          <div className="mx-auto w-full max-w-7xl flex-row">
            <div
              className={
                'mb-8 inline-block border-b-4 border-slate-400 pb-2 text-2xl font-bold lg:text-4xl'
              }
            >
              About
            </div>
            <div className={'flex-grow'}>
              <div className="mx-auto flex max-w-7xl flex-col justify-between">
                <p className="font-sans text-lg">
                  Andreas is a postgraduate student, currently pursuing a Masters&apos; degree of
                  Computer Sciences at LMU Munich, Germany. In 2018 he studied abroad at Leiden
                  University, The Netherlands. He graduated in April 2018 at the LMU Munich with a
                  Bachelor of Science in Media Informatics and Human-Computer Interaction. In 2020
                  Andreas joined <AboutLink href="https://www.celonis.com/">Celonis</AboutLink>, the
                  market leader in Process Mining, as Junior Software Engineer in the Core - Event
                  Collection department. Before that, he worked remotely for a Berlin-based startup
                  called <AboutLink href="https://aiderly.de/">Aiderly</AboutLink> as a Full Stack
                  Developer / UX Researcher. Since 2018 he is part of the{' '}
                  <AboutLink href="https://tech.4germany.org/ueber-uns/">Tech4Germany</AboutLink>{' '}
                  fellowship, Germany’s first e-Government fellowship with Germany’s Chief of Staff
                  Prof. Helge Braun as a patron, working for three months as a UX Researcher as well
                  as a Frontend Developer for the German government in Berlin. Together with eight
                  other fellows, they worked on topics related to digitalisation and e-government.
                </p>
              </div>
            </div>
            <div className="container mx-auto flex max-w-7xl flex-col flex-wrap items-start justify-between py-16">
              <p className="mb-2 text-lg font-bold">Follow me</p>
              <ul className="ml-4 list-disc space-y-1 text-lg">
                {SOCIAL_PROFILES.map((socialProfile, i) => (
                  <li key={i}>
                    <a className="hover:text-blue-700" href={socialProfile.href}>
                      {socialProfile.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl flex-row">
          <Footer />
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage

const AboutLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a href={href} className="font-bold hover:text-blue-700">
      {children}
    </a>
  )
}
