import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { getSocialData } from '@/lib/getSocialData'
import Balancer from 'react-wrap-balancer'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About({ socialData }) {
  return (
    <>
      <Head>
        <title>About - Andreas Ellwanger</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover grayscale filter dark:bg-zinc-800"
                placeholder={'blur'}
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <Balancer
              as="h1"
              className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            >
              I’m Andreas Ellwanger. I work on Data Integration at Celonis as
              Software Engineer.
            </Balancer>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Andreas is a postgraduate student, currently pursuing a
                Masters&apos; degree of Computer Sciences at LMU Munich,
                Germany. In 2018 he studied abroad at Leiden University, The
                Netherlands. He graduated in April 2018 at the LMU Munich with a
                Bachelor of Science in Media Informatics and Human-Computer
                Interaction. In 2020 Andreas joined Celonis, the market leader
                in Process Mining, as Junior Software Engineer in the Core -
                Event Collection department. Before that, he worked remotely for
                a Berlin-based startup called Aiderly as a Full Stack Developer
                / UX Researcher.
              </p>
              <p>
                Since 2018 he is part of the Tech4Germany fellowship, Germany’s
                first e-Government fellowship with Germany’s Chief of Staff
                Prof. Helge Braun as a patron, working for three months as a UX
                Researcher as well as a Frontend Developer for the German
                government in Berlin. Together with eight other fellows, they
                worked on topics related to digitalisation and e-government.
              </p>
            </div>
          </div>
          <div className="flex flex-grow items-end lg:row-span-2 lg:pl-20">
            <ul role="list">
              <SocialLink href={socialData?.twitter?.href} icon={TwitterIcon}>
                Follow on {socialData?.twitter?.name}
              </SocialLink>
              <SocialLink
                href={socialData?.instagram?.href}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on {socialData?.instagram?.name}
              </SocialLink>
              <SocialLink
                href={socialData?.github?.href}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on {socialData?.github?.name}
              </SocialLink>
              <SocialLink
                href={socialData?.linkedin?.href}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on {socialData?.linkedin?.name}
              </SocialLink>
              <SocialLink
                href={socialData?.email?.href}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {socialData?.email?.name}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const socialData = await getSocialData()
  return {
    props: { socialData },
  }
}
