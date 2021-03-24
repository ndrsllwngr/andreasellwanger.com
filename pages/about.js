import React from 'react'
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { HtmlHead } from '@/components/html-head'
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { Wip } from '@/components/wip'

const AboutPage = () => {
  return (
    <Layout>
      <HtmlHead title="About | Andreas Ellwanger — Software Engineer." />
      <Header />
      <Wip page="About" />
    </Layout>
  )
}

export default AboutPage
