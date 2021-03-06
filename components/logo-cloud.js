import React from 'react'
import { PropTypes } from 'prop-types'
import LogoAiderly from '@/assets/svg/logo-aiderly.svg'
import LogoCelonis from '@/assets/svg/logo-celonis.svg'
import LogoLmu from '@/assets/svg/logo-lmu.svg'
import LogoTech4Germany from '@/assets/svg/logo-tech4germany.svg'
import LogoLeiden from '@/assets/svg/logo-leiden.svg'

const Logo = ({ children, link, alt }) => {
  return (
    <div className="flex py-6 justify-center px-10 m-4">
      <a
        className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis w-32 h-32"
        href={link}
      >
        {children}
        <span className="sr-only">{alt || ''}</span>
      </a>
    </div>
  )
}

Logo.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  alt: PropTypes.string,
}

const MyLogos = [
  {
    logo: <LogoCelonis />,
    alt: 'Celonis',
    link: 'https://www.celonis.com/',
  },
  {
    logo: <LogoLmu />,
    alt: 'LMU Munich',
    link: 'https://www.uni-muenchen.de/',
  },
  {
    logo: <LogoAiderly />,
    alt: 'Aiderly GmbH',
    link: 'https://aiderly.de/',
  },
  {
    logo: <LogoTech4Germany />,
    alt: 'Tech4Germany',
    link: 'https://tech.4germany.org/',
  },
  {
    logo: <LogoLeiden />,
    alt: 'Leiden University',
    link: 'https://liacs.leidenuniv.nl/',
  },
]

export const LogoCloud = () => {
  return (
    <section className="container mx-auto py-16 px-4 sm:px-0 flex flex-col justify-center">
      <div className="flex flex-wrap justify-center">
        {MyLogos.map((logo, index) => (
          <Logo key={index} link={logo.link} alt={logo.alt}>
            {logo.logo}
          </Logo>
        ))}
      </div>
    </section>
  )
}
