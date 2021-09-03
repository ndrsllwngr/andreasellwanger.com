import React from 'react'
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { Layout } from '@/components/layout'
import { HtmlHead } from '@/components/html-head'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { BlogPreview } from '@/components/blog-preview'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import {PanelHome} from "@/components/panel-home";

const LandingPage = () => {
  return (
    <Layout>
      <HtmlHead />
      <Header />
      <PanelHome />
      {/*<Hero />*/}
      <BlogPreview />
    </Layout>
  )
}

export default LandingPage
