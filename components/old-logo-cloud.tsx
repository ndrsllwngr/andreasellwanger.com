import React from 'react'

const Logo = ({
  children,
  link,
  alt,
  path,
  name,
}: {
  children: JSX.Element
  link: string
  alt: string
  path: string
  name: string
}) => {
  return (
    <div className="flex py-6 justify-center px-10 m-4">
      <a className="text-black hover:text-my-blue w-32 h-32" href={link}>
        <img src={path} alt={`${name} icon`} />
        <span className="sr-only">{alt || ''}</span>
      </a>
    </div>
  )
}

const MyLogos = [
  {
    logo: '/assets/svg/logo-celonis.svg',
    alt: 'Celonis',
    link: 'https://www.celonis.com/',
  },
  {
    logo: '/assets/svg/logo-lmu.svg',
    alt: 'LMU Munich',
    link: 'https://www.uni-muenchen.de/',
  },
  {
    logo: '/assets/svg/logo-aiderly.svg',
    alt: 'Aiderly GmbH',
    link: 'https://aiderly.de/',
  },
  {
    logo: '/assets/svg/logo-tech4germany.svg',
    alt: 'Tech4Germany',
    link: 'https://tech.4germany.org/',
  },
  {
    logo: '/assets/svg/logo-leiden.svg',
    alt: 'Leiden University',
    link: 'https://liacs.leidenuniv.nl/',
  },
]

export const LogoCloud = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center">
      <div className="flex flex-wrap justify-center">
        {MyLogos.map((logo, index) => (
          <Logo key={index} link={logo.link} alt={logo.alt} name={logo.alt} path={logo.logo} />
        ))}
      </div>
    </section>
  )
}
