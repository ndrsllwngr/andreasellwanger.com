import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Page = ({ title, href }) => {
  const router = useRouter()
  return (
    <Link href={href}>
      <a
        className={`text-lg text-black hover:text-blue-700 opacity-70 hover:opacity-100 ml-5 py-1 ${
          router.pathname === href
            ? 'underline'
            : ''
        }`}
      >
        {title}
      </a>
    </Link>
  )
}

export const Header = () => {
  // const router = useRouter()
  return (
    <header className="">
      <div className="flex flex-row flex-wrap container items-center justify-between mx-auto max-w-7xl px-4 sm:px-0 py-4">
        <div>
          <Link href="/">
            {/* <a className="text-black dark:text-white">●</a> */}
            <a className="group font-medium text-black font-sans text-lg py-1 sm:py-0 hover:text-blue-700">
              Andreas Ellwanger <span className="font-normal opacity-70 group-hover:opacity-100 inline-block md:inline">— (Junior) Software Engineer</span>
            </a>
          </Link>
        </div>
        <nav className="flex flex-col sm:flex-row flex-wrap justify-end items-center">
          {/* <Page href="/recognition" title="Recognition" /> */}
          <Page href="/projects" title="Projects" />
          <Page href="/about" title="About" />
          {/* <Page href="/blog" title="Blog" />
          <Page href="/about" title="About" /> */}
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}
