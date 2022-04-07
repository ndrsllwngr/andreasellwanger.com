import React from 'react';

const Logo = ({
  link,
  alt,
  path,
  name,
}: {
  link: string;
  alt: string;
  path: string;
  name: string;
}) => {
  return (
    <div className="m-4 flex justify-center py-6 px-10">
      <a className="h-32 w-32 text-white opacity-80 hover:opacity-100" href={link}>
        <img src={path} alt={`${name} icon`} />
        <span className="sr-only">{alt || ''}</span>
      </a>
    </div>
  );
};

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
];

export const LogoCloud = () => {
  return (
    <section className="container mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center">
        {MyLogos.map((logo, index) => (
          <Logo key={index} link={logo.link} alt={logo.alt} name={logo.alt} path={logo.logo} />
        ))}
      </div>
    </section>
  );
};
