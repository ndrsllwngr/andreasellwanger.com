import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
import PostTitle from '@/components/post-title';
import { CMS_NAME } from '@/lib/constants';
import { getAllDocs, getDocBySlug } from '@/lib/docs';
import markdownToHtml from '@/lib/markdownToHtml';
import PostType from '@/types/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.meta.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.meta.ogImage.url} />
                <link
                  href={`https://unpkg.com/prism-themes@1.6.0/themes/prism-vsc-dark-plus.css`}
                  rel="stylesheet"
                />
              </Head>
              <PostHeader
                title={post.meta.title}
                coverImage={post.meta.coverImage}
                date={post.meta.date}
                author={post.meta.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getDocBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllDocs();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
