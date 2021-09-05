import React from 'react'
import {Layout} from '@/components/layout'
import {HtmlHead} from '@/components/html-head'
import {PanelHome} from "@/components/panel-home";
import {NavBar} from "@/components/navbar";
import {Footer} from "@/components/footer";

const socialProfileList = [
  {
    name: "Email",
    href: "mailto:contact@andreasellwanger.com",
  },
  {
    name: "LinkedIn",
    href: "https://de.linkedin.com/in/ellwanger/en/",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ndrsllwngr/",
  },
  {
    name: "GitHub",
    href: "https://github.com/ndrsllwngr",
  },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/story/7640933",
  },
];

const AboutLink = ({children, href}) => {
  return (
    <a
      href={href}
      className="hover:text-blue-700 font-bold"
    >
      {children}
    </a>
  )
}

const LandingPage = () => {
  return (
    <Layout>
      <HtmlHead/>
      <NavBar/>
      <PanelHome/>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap container items-center justify-between py-16">
        <p className="font-sans text-lg">
          Andreas is a postgraduate student, currently pursuing a Masters&apos; degree of Computer Sciences at LMU
          Munich, Germany. In 2018 he studied abroad at Leiden University, The Netherlands. He graduated in April 2018
          at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction. In 2020
          Andreas joined <AboutLink href="https://www.celonis.com/">Celonis</AboutLink>, the market leader in Process
          Mining, as Junior Software Engineer in the Core - Event
          Collection department. Before that, he worked remotely for a Berlin-based startup called <AboutLink
          href="https://aiderly.de/">Aiderly</AboutLink> as a
          Full Stack Developer / UX Researcher. Since 2018 he is part of the <AboutLink
          href="https://tech.4germany.org/ueber-uns/">Tech4Germany</AboutLink> fellowship, Germany’s first
          e-Government fellowship with Germany’s Chief of Staff Prof. Helge Braun as a patron, working for three months
          as a UX Researcher as well as a Frontend Developer for the German government in Berlin. Together with eight
          other fellows, they worked on topics related to digitalisation and e-government.
        </p>
      </div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-wrap container items-start justify-between py-16">
        <p className="text-lg font-bold mb-2">Follow me</p>
        <ul className="list-disc text-lg space-y-1 ml-4">
          {socialProfileList.map((socialProfile, i) => (
            <li key={i}>
              <a className="text-black hover:text-blue-700" href={socialProfile.href}>
                {socialProfile.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </Layout>
  )
}

export default LandingPage
