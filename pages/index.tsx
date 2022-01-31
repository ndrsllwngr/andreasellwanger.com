import React from 'react'

import Head from 'next/head'

import Container from '@/components/container'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import NavBar from '@/components/old-nav-bar'
import PanelHome from '@/components/old-panel.home'
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
        <Container className={'min-h-screen'}>
          {/*<Intro />*/}
          <NavBar />
          {/* <RecentWork /> */}
          {/* <LogoCloud /> */}
          <div className={'flex-grow'}>
            <PanelHome />
          </div>
          <Footer />
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
