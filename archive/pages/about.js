import React from 'react'
import { HtmlHead } from '@/components/html-head'
import { Layout } from '@/components/layout'
import {About} from "@/components/about";
import {LogoCloud} from "@/components/logo-cloud";
import {NavBar} from "@/components/navbar";

const AboutPage = () => {
  return (
    <Layout>
      <HtmlHead title="About | Andreas Ellwanger — Software Engineer." />
      <NavBar />
      <About/>
      <LogoCloud />
    </Layout>
  )
}

export default AboutPage
