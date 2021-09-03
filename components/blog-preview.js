import React from 'react'
import {PropTypes} from 'prop-types'
import Link from 'next/link'

const BlogEntry = ({date, title, link, isExternal = false, isLink = false}) => {
  if (!isLink) {
    return (
      <>
        <span className="font-mono mr-10">{date}</span>
        <span className="font-sans">{title}</span>
      </>
    )
  }
  if (isExternal) {
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

const blogEntries = [
  {
    id: 1,
    title: 'Updated website',
    link: '/',
    date: '2021-09-03',
    isLink: false,
    isExternal: false,
  },
  {
    id: 2,
    title: 'Published more projects on GitHub',
    link: 'https://github.com/ndrsllwngr/',
    date: '2020-09-30',
    isLink: true,
    isExternal: true,
  },
  {
    id: 3,
    title: 'Axis- plus Content-based Control for Camera Drones: Design and Evaluation of User Interface Concepts',
    link: 'https://dl.acm.org/doi/10.1145/3213526.3213529',
    date: '2018-06-10',
    isLink: true,
    isExternal: true,
  },
]

export const BlogPreview = () => {
  return (
    <div className="flex flex-row flex-wrap container items-center justify-center max-w-7xl mx-auto mt-7">
      <ListWithDividers items={blogEntries}/>
    </div>
  )
}

const ListWithDividers = ({items = []}) => {
  return (
    <ul role="list" className="divide-y divide-black w-full sm:px-6 lg:px-8 ">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          <BlogEntry link={item.link} title={item.title} date={item.date} isExternal={item.isExternal}
                     isLink={item.isLink}/>
        </li>
      ))}
    </ul>
  )
}

