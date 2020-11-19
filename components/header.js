import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ThemeChanger } from '@/components/theme-changer'

const Page = ({ title, href }) => {
  const router = useRouter()
  return (
    <Link href={href}>
      <a
        className={`text-lg hover:text-my-blue dark:hover:text-celonis ml-5 py-1 sm:py-0 ${
          router.pathname === href
            ? 'text-my-blue dark:text-celonis'
            : 'text-gray-800 dark:text-gray-300'
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
      <div className="flex flex-row flex-wrap container items-center justify-between mx-auto my-12 px-4">
        <div>
          <Link href="/">
            {/* <a className="text-black dark:text-white">●</a> */}
            <a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis font-sans text-lg py-1 sm:py-0">
              ⌘
            </a>
          </Link>
          <a
            class="w-full ml-4 sm:w-auto flex-none bg-gray-900 dark:bg-white hover:bg-my-blue dark:hover:bg-celonis text-white dark:text-black text-lg leading-6 font-semibold py-2 px-3 rounded-xl"
            href="/cv.pdf"
          >
            Curriculum vitae
          </a>
        </div>
        <nav className="flex flex-col sm:flex-row flex-wrap justify-end items-center">
          {/* <Page href="/recognition" title="Recognition" /> */}
          <Page href="/projects" title="Projects" />
          <Page href="/blog" title="Blog" />
          <Page href="/about" title="About" />
          <ThemeChanger />
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}
