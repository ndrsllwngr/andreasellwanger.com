import React from 'react'

const HeroLink = ({children, href}) => {
  return (
    <a
      href={href}
      className="hover:bg-black hover:text-white rounded-md px-2 -mx-2 font-bold text-black"
    >
      {children}
    </a>
  )
}

export const Hero = () => {
  return (
    <section className="container max-w-5xl mx-auto my-12 py-16 px-4 flex flex-col justify-center">
      <h1 className="text-black font-bold text-4xl md:text-[4rem] tracking-wide font-sans uppercase leading-tight md:leading-tight">
        Andreas is a Software Engineer at{' '}
        <HeroLink
          href="https://www.celonis.com"
        >
          Celonis
        </HeroLink>{' '}
        and studies Computer Science at{' '}
        <HeroLink
          href="https://www.uni-muenchen.de/"
        >
          LMU Munich
        </HeroLink>
        .
      </h1>
      <p className="font-normal font-sans uppercase tracking-wide mt-6 text-white opacity-90">
        Munich, Germany
      </p>
    </section>
  )
}
