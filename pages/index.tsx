import React from 'react'

import Head from 'next/head'

import Container from '@/components/container'
import Layout from '@/components/layout'
import OldFooter from '@/components/old-footer'
import { LogoCloud } from '@/components/old-logo-cloud'
import NavBar from '@/components/old-nav-bar'
import PanelHome from '@/components/old-panel.home'
import RecentWork from '@/components/recent-work'
import { SOCIAL_PROFILES } from '@/lib/constants'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Andreas Ellwanger — Software Engineer.</title>
          <meta name="author" content="Andreas Ellwanger" />
          <meta
            name="description"
            content="Andreas is a Software Engineer at Celonis and studies Computer Science at LMU Munich. He graduated in April 2018 at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction."
          />
        </Head>
        <Container>
          {/*<Intro />*/}
          <NavBar />
          <RecentWork />
          <LogoCloud />
          <PanelHome />
          <div className="container mx-auto flex max-w-7xl flex-row flex-wrap items-center justify-between px-4 py-16 sm:px-6 lg:px-8">
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
              Prof. Helge Braun as a patron, working for three months as a UX Researcher as well as
              a Frontend Developer for the German government in Berlin. Together with eight other
              fellows, they worked on topics related to digitalisation and e-government.
            </p>
          </div>
          {/*<LogoCloud />*/}
          <div className="container mx-auto flex max-w-7xl flex-col flex-wrap items-start justify-between px-4 py-16 sm:px-6 lg:px-8">
            <p className="mb-2 text-lg font-bold">Follow me</p>
            <ul className="ml-4 list-disc space-y-1 text-lg">
              {SOCIAL_PROFILES.map((socialProfile, i) => (
                <li key={i}>
                  <a className="text-black hover:text-blue-700" href={socialProfile.href}>
                    {socialProfile.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <OldFooter />
        </Container>
      </Layout>
    </>
  )
}

export default Index

const AboutLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a href={href} className="font-bold hover:text-blue-700">
      {children}
    </a>
  )
}
