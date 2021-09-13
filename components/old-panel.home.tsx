import React from 'react'

const PanelHome = () => {
  return (
    <div className="text-black">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-16">
        <div className="bg-hero relative lg:grid lg:grid-cols-2 lg:gap-4 px-4 sm:px-16">
          {/*<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"/>*/}
          <div className="relative pt-10 pb-12 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 px-4 sm:px-0 col-span-1">
            <div className="lg:self-center">
              <h2 className="text-3xl sm:text-4xl tracking-wide font-sans leading-tight md:leading-tight">
                Software Engineer at <HeroLink href="https://www.celonis.com">Celonis</HeroLink>{' '}
                working on{' '}
                <a
                  href="https://www.celonis.com/intelligent-business-cloud/event-collection"
                  className="hover:text-blue-700 font-bold"
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
    <a href={href} className="hover:text-blue-700 font-bold">
      {children}
    </a>
  )
}
