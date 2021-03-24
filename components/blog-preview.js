import React from 'react'
import { PropTypes } from 'prop-types'
import Link from 'next/link'

const BlogEntry = ({ date, title, link, external = false }) => {
  if (external) {
    return (
      <a href={link}>
        <span className="font-mono mr-10">{date}</span>
        <span className="font-sans">{title} ↖</span>
      </a>
    )
  }
  return (
    <Link href={link}>
      <a>
        <span className="font-mono mr-10">{date}</span>
        <span className="font-sans">{title}</span>
      </a>
    </Link>
  )
}

BlogEntry.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  external: PropTypes.bool,
}

export const BlogPreview = () => {
  return (
    <div className="container mx-auto px-4 flex-col justify-center">
      <div className="bg-black dark:bg-white rounded-md p-6">
        <div className="flex flex-col justify-center">
          <h2 className="uppercase text-white dark:text-black font-medium tracking-wide mb-4">
            Recently published
          </h2>
          <ul className="text-white dark:text-black">
          <li>
              <BlogEntry
                link="/"
                title="Added link to StackOverflow"
                date="2021-03-24"
              />
            </li>
            <li>
              <BlogEntry
                link="/projects"
                title="Released first version of /projects page"
                date="2020-10-01"
              />
            </li>
            <li>
              <BlogEntry
                link="https://github.com/ndrsllwngr/"
                title="Published more projects on GitHub"
                date="2020-09-30"
                external
              />
            </li>
            <li>
              <BlogEntry
                link="https://dl.acm.org/doi/10.1145/3213526.3213529"
                title="Axis- plus Content-based Control for Camera Drones: Design and Evaluation of User Interface Concepts"
                date="2018-06-10"
                external
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
