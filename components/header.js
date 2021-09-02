import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Page = ({ title, href }) => {
  const router = useRouter()
  return (
    <Link href={href}>
      <a
        className={`font-medium text-lg text-white opacity-90 hover:opacity-100 ml-5 py-1 sm:py-0 ${
          router.pathname === href
            ? 'underline'
            : 'no-underline'
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
    <header className="bg-my-grey-2">
      <div className="flex flex-row flex-wrap container items-center justify-between mx-auto my-12 px-4">
        <div>
          <Link href="/">
            {/* <a className="text-black dark:text-white">●</a> */}
            <a className="group font-medium text-white font-sans text-lg py-1 sm:py-0">
              Andreas Ellwanger <span className="font-normal opacity-90 group-hover:opacity-100">— (Junior) Software Engineer</span>
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
