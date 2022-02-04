import React from 'react'

import { Project } from '@/types/airtable'

const ProjectCard = ({ className, project }: { className: string; project: Project }) => {
  return (
    <a
      href={project.fields.link}
      className={`flex w-full flex-row rounded-lg border border-slate-400 p-6 transition-all delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-300 ${className}`}
    >
      <div className="flex w-full items-center justify-between space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium">{project.fields.name}</h3>
            <span className="inline-block flex-shrink-0 rounded-lg bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              {project.fields.stack}
            </span>
          </div>
          <p className="mt-1 truncate text-sm opacity-80">{project.fields.description}</p>
        </div>
      </div>
    </a>
  )
}

export { ProjectCard }
