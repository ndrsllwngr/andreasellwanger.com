import React from 'react';

import Head from 'next/head';

import Container from '@/components/container';
import Footer from '@/components/footer';
import Layout from '@/components/layout';
import NavBar from '@/components/old-nav-bar';
import { ProjectCard } from '@/components/project-card';
import { getTable } from '@/lib/airtable';
import { Project } from '@/types/airtable';

const Projects = ({ projects }: { projects: Array<Project> }) => {
  return (
    <Layout>
      <Head>
        <title>Andreas Ellwanger — Software Engineer.</title>
        <meta name="author" content="Andreas Ellwanger – Projects" />
        <meta
          name="description"
          content="Andreas is a Software Engineer at Celonis and studies Computer Science at LMU Munich. He graduated in April 2018 at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction."
        />
      </Head>
      <Container className={'min-h-screen'}>
        <NavBar />
        <div className={'mt-10 flex-grow'}>
          <div className="mx-auto w-full max-w-7xl flex-row">
            <div
              className={
                'mb-8 inline-block border-b-4 border-slate-400 pb-2 text-2xl font-bold lg:text-4xl'
              }
            >
              Projects
            </div>
            {projects.map((project, i) => (
              <ProjectCard project={project} className="mb-6 max-w-3xl" key={i} />
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl flex-row">
          <Footer />
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const projects: Array<Project> = await getTable('Projects', {
    sort: [{ field: 'order', direction: 'asc' }],
  });

  return {
    props: {
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600, // In seconds
  };
}

export default Projects;