import React from 'react'
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { HtmlHead } from '@/components/html-head'
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { Wip } from '@/components/wip'
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
