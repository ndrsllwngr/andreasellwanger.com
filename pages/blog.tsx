import Head from 'next/head';

import Container from '@/components/container';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import MoreStoriesSlim from '@/components/more-stories-slim';
import { CMS_NAME } from '@/lib/constants';
import { getAllDocs } from '@/lib/docs';
import Post from '@/types/post';

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.meta.title}
              coverImage={heroPost.meta.coverImage}
              date={heroPost.meta.date}
              author={heroPost.meta.author}
              slug={heroPost.slug}
              excerpt={heroPost.meta.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStoriesSlim posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllDocs();

  return {
    props: { allPosts },
  };
};
