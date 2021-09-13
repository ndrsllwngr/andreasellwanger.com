import React from 'react'
// import { PropTypes } from 'prop-types';
// import Link from 'next/link';
import { HtmlHead } from '@/components/html-head'
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { Wip } from '@/components/wip'

const BlogPage = () => {
  return (
    <Layout>
      <HtmlHead title="Blog | Andreas Ellwanger — Software Engineer." />
      <Header />
      <Wip page="Blog" />
    </Layout>
  )
}

export default BlogPage
