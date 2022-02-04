import React, { useEffect } from 'react'

import { Project } from '@/types/airtable'

export const ProjectCard = ({ className, project }: { className: string; project: Project }) => {
  useEffect(() => {
    console.log({ project })
  }, [project])

  return (
    <section className={className}>
      <header>
        <h3 className="font-sans font-bold">
          <a className="inline-flex" href={project.fields.link}>
            <span>{project.fields.name} ↖</span>
          </a>
        </h3>
        <p className="font-sans opacity-90">
          {project.fields.date} | {project.fields.stack}
        </p>
      </header>
      <ul>
        <li className="mt-1 font-sans leading-normal">
          <span className="absolute -ml-3 -translate-y-px transform select-none font-bold sm:-ml-3">
            ›
          </span>
          {project.fields.description}
        </li>
      </ul>
    </section>
  )
}
