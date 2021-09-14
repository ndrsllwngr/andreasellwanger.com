import React from 'react'
import Head from 'next/head'

import Container from '@/components/container'
import Layout from '@/components/layout'
import { SOCIAL_PROFILES } from '@/lib/constants'
import NavBar from '@/components/old-nav-bar'
import PanelHome from '@/components/old-panel.home'
import OldFooter from '@/components/old-footer'

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
          <PanelHome />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap container items-center justify-between py-16">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-wrap container items-start justify-between py-16">
            <p className="text-lg font-bold mb-2">Follow me</p>
            <ul className="list-disc text-lg space-y-1 ml-4">
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
    <a href={href} className="hover:text-blue-700 font-bold">
      {children}
    </a>
  )
}
