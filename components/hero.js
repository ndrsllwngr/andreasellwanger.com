import React from 'react'

export const Hero = () => {
  return (
    <section className="container max-w-5xl mx-auto my-12 py-16 px-4 flex flex-col justify-center">
      <h1 className="font-bold text-4xl md:text-hero tracking-wide font-mono uppercase leading-tight md:leading-tight dark:text-white">
        Andreas is a Software Engineer at{' '}
        <a
          // className="bg-clip-text text-transparent bg-gradient-to-r from-celonis to-gray-100 dark:to-black hover:to-celonis dark:hover:to-celonis"
          className="text-gray-700 dark:text-gray-400 hover:text-my-blue dark:hover:text-celonis hover:underline"
          href="https://www.celonis.com"
        >
          Celonis
        </a>{' '}
        and studies Computer Science at{' '}
        <a
          className="text-gray-700 dark:text-gray-400 hover:text-my-blue dark:hover:text-celonis hover:underline"
          href="https://www.uni-muenchen.de/"
        >
          LMU Munich
        </a>
        .
      </h1>
      <p className="font-normal font-sans uppercase tracking-wide mt-6 dark:text-white">
        Munich, Germany
      </p>
    </section>
  )
}
