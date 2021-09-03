import React, {useRef} from "react";

export const PanelHome = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-16">
        <div className="bg-hero relative lg:grid lg:grid-cols-3 lg:gap-4 px-4 sm:px-16">
          {/*<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"/>*/}
          <div className="relative pt-10 pb-12 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 px-4 sm:px-0 col-span-2">
            <div className="lg:self-center">
              <h2 className="text-3xl sm:text-4xl tracking-wide font-sans leading-tight md:leading-tight">
               I am a Software Engineer at <HeroLink
                href="https://www.celonis.com"
              >
                Celonis
              </HeroLink> working on <a
                href="https://www.celonis.com/intelligent-business-cloud/event-collection"
                className="hover:text-blue-700 font-bold"
              >
                Event Collection
              </a>.
              </h2>
              <p className='mt-4 text-lg leading-6'>Furthermore, I am currently writing my Master's thesis at the <a
                href="https://www.uni-muenchen.de/"
                className="hover:text-blue-700 font-bold"
              >
                LMU Munich
              </a>.</p>
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

const HeroLink = ({children, href}) => {
  return (
    <a
      href={href}
      className="hover:text-blue-700 font-bold"
    >
      {children}
    </a>
  )
}
