import React from 'react'

import { motion } from 'framer-motion'

import { Project } from '@/types/airtable'

const ProjectCard = ({ className, project }: { className: string; project: Project }) => {
  return (
    <motion.a
      href={project.fields.link}
      whileHover={{
        y: -4,
        transition: { duration: 0.25 },
        transitionTimingFunction: 'spring(1 100 10 10)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      className={`flex w-full flex-row rounded-lg border border-gray-200 bg-white p-6 ${className}`}
    >
      <div className="flex w-full items-center justify-between space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium">{project.fields.name}</h3>
            <span className="inline-block flex-shrink-0 rounded-lg bg-gray-100 px-2 py-0.5 text-xs font-semibold uppercase text-gray-700">
              {project.fields.stack}
            </span>
          </div>
          <p className="mt-1 truncate text-sm opacity-80">{project.fields.description}</p>
        </div>
      </div>
    </motion.a>
  )
}

export { ProjectCard }
