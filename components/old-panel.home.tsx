import React from 'react'

const PanelHome = () => {
  return (
    <div className="text-black">
      <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
        <div className="relative bg-hero px-4 sm:px-16 lg:grid lg:grid-cols-2 lg:gap-4">
          {/*<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"/>*/}
          <div className="relative col-span-1 px-4 pt-10 pb-12 sm:px-0 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20">
            <div className="lg:self-center">
              <h2 className="font-sans text-3xl leading-tight tracking-wide sm:text-4xl md:leading-tight">
                Software Engineer at <HeroLink href="https://www.celonis.com">Celonis</HeroLink>{' '}
                working on{' '}
                <a
                  href="https://www.celonis.com/intelligent-business-cloud/event-collection"
                  className="font-bold hover:text-blue-700"
                >
                  Event Collection
                </a>
                .
              </h2>
              <p className="mt-4 text-lg leading-6">Previously Aiderly and Tech4Germany.</p>
            </div>
          </div>
          {/*<div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">*/}
          {/*  <img*/}
          {/*    className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"*/}
          {/*    src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"*/}
          {/*    alt="App screenshot"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}

export default PanelHome

const HeroLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a href={href} className="font-bold hover:text-blue-700">
      {children}
    </a>
  )
}
