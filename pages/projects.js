import React from 'react'
import { HtmlHead } from '@/components/html-head'
import { Layout } from '@/components/layout'
import { Project } from '@/components/project'
import { Footer } from '@/components/footer'
import {NavBar} from "@/components/navbar";

const myProjects = [
  {
    title: 'ffp',
    url: 'https://github.com/ndrsllwngr/ffp',
    date: '2020',
    stack: 'Haskell',
    list: [
      'Minesweepskell - a fun(ctional) Web Minesweeper written in Haskell',
      'Join other players on their game either to view them playing or to play together',
    ],
  },
  {
    title: 'hll-prolog',
    url: 'https://github.com/ndrsllwngr/hll-prolog',
    date: '2019/20',
    stack: 'Prolog',
    list: [
      'Testing Interaction Scenarios - Classified Information System (CIS)',
      'Different clearance levels, which get assigned to documents and users (topsecret, secret, confidential, restricted, official, unclassified)',
      'Based on their clearance level users can perform different actions and access documents',
    ],
  },
  {
    title: 'aceai',
    url: 'https://github.com/ndrsllwngr/aceai',
    date: '2019/20',
    stack: 'JavaScript',
    list: [
      'Improve your posture with BodyPose',
      'Course: Affective Computing / Empathic Artificial Intelligence',
    ],
  },
  {
    title: 'ios',
    url: 'https://github.com/ndrsllwngr/ios',
    date: '2019/20',
    stack: 'Swift',
    list: ['SpotUp - explore at ease.'],
  },
  {
    title: 'hll-rust',
    url: 'https://github.com/ndrsllwngr/hll-rust',
    date: '2018/19',
    stack: 'Rust',
    list: ['Chord is a protocol and algorithm for a peer-to-peer distributed hash table'],
  },
  {
    title: 'zoll-auktion.de',
    url: 'https://github.andreasellwanger.com/zoll-auktion.de/',
    date: '2018',
    stack: 'CSS HTML JavaScript',
    list: ['Tech4Germany project'],
  },
  {
    title: 'hll-scala',
    url: 'https://github.com/ndrsllwngr/hll-scala',
    date: '2017/18',
    stack: 'Scala',
    list: ['YouTube Party Mode - written in Scala(.js).'],
  },
  {
    title: 'DichteFideleLurche',
    url: 'https://github.com/ndrsllwngr/DichteFideleLurche',
    date: '2016/17',
    stack: 'Java',
    list: ['The Settlers of Catan in Java', 'Practical course software engineering (main project)'],
  },
  {
    title: 'FideleForste',
    url: 'https://github.com/ndrsllwngr/FideleForste',
    date: '2016/17',
    stack: 'Java',
    list: ['Conway\rs Game of Life', 'Practical course software engineering (pre-project)'],
  },
]

const ProjectsPage = () => {
  return (
    <Layout>
      <HtmlHead title="Projects | Andreas Ellwanger — Software Engineer." />
      <NavBar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 px-4 flex flex-col justify-center py-16">
        <h1 className="font-bold text-lg md:text-4xl tracking-wide leading-tight font-sans mb-12">
          <span className="text-black opacity-90">Passion projects and fun little experiments</span>
        </h1>
        {myProjects.map((project, i) => (
          <Project {...project} css="pb-10" key={i} />
        ))}
      </section>
      <Footer />
    </Layout>
  )
}

export default ProjectsPage
