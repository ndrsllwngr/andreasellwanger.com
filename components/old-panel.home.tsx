import React from 'react'

const PanelHome = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="mx-auto w-full max-w-7xl flex-row">
        <div className="relative bg-hero px-4 sm:px-16 lg:grid lg:grid-cols-2 lg:gap-4">
          {/*<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"/>*/}
          <div className="relative col-span-1 px-4 pt-10 pb-12 sm:px-0 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20">
            <div className="lg:self-center">
              <h2 className="font-sans text-3xl leading-tight tracking-wide sm:text-4xl md:leading-tight">
                Software Engineer at <HeroLink href="https://www.celonis.com">Celonis</HeroLink>{' '}
                working on{' '}
                <a
                  href="https://www.celonis.com/intelligent-business-cloud/event-collection"
                  className="font-bold opacity-80 hover:opacity-100"
                >
                  Event Collection
                </a>
                .
              </h2>
              <p className="mt-4 text-lg leading-6">Previously Aiderly and Tech4Germany.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelHome

const HeroLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a href={href} className="font-bold opacity-80 hover:opacity-100">
      {children}
    </a>
  )
}
