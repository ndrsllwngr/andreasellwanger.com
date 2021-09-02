import React from 'react'

const AboutLink = ({children, href}) => {
  return (
    <a
      href={href}
      className="hover:bg-black rounded-md p-1 -m-1 font-bold"
    >
      {children}
    </a>
  )
}

export const About = () => {
  return (
    <div>
      <div className="container max-w-2xl mx-auto pb-16 px-4 flex flex-col justify-center">
        <p className="font-sans text-white text-lg">
          My name is Andreas Ellwanger. I am a postgraduate student, currently pursuing a Masters&apos; degree of
          Computer Sciences at LMU Munich, Germany. In 2018 I studied abroad at Leiden University,
          The Netherlands. I graduated in April 2018 at the LMU Munich with a Bachelor of Science in
          Media Informatics and Human-Computer Interaction. In 2020 I joined{' '}
          <AboutLink href="https://www.celonis.com/">Celonis 🦄</AboutLink>, the market leader in Process Mining, as Junior
          Software Engineer in the Core - Event
          Collection department. Before that, I worked remotely for a Berlin-based startup called{' '}
          <AboutLink href="https://aiderly.de/">Aiderly</AboutLink>{' '}
          as a Full Stack Developer / UX Researcher. Since 2018 I am part of the{' '}
          <AboutLink href="https://tech.4germany.org/ueber-uns/">Tech4Germany</AboutLink>{' '}
          fellowship, Germany’s first e-Government fellowship with Germany’s Chief of Staff Prof.
          Helge Braun as a patron, working for three months as a UX Researcher as well as a Frontend
          Developer for the German government in Berlin. Together with eight other fellows, we
          worked on topics related to digitalisation and e-government.
        </p>
      </div>
      <div className="container max-w-2xl mx-auto pb-16 px-4 flex flex-col justify-center">
        <a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6" href="mailto:contact@andreasellwanger.com">
          Email
        </a>
        <a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://de.linkedin.com/in/ellwanger/en/">
          LinkedIn
        </a>
        <a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://twitter.com/ndrsllwngr/">
          Twitter
        </a>
        <a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://github.com/ndrsllwngr">
          GitHub
        </a>
        <a className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-6 h-6 ml-5" href="https://stackoverflow.com/users/story/7640933">
          StackOverflow
        </a>
      </div>
    </div>
  )
}
