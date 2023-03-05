import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "components/mdx";
import { allBlogs } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import { Header } from "@/components/Header";
import { Grid } from "@/components/Grid";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  // const ogImage = image
  //   ? `https://leerob.io${image}`
  //   : `https://leerob.io/api/og?title=${title}`;

  return {
    title,
    description,
    // openGraph: {
    //   title,
    //   description,
    //   type: "article",
    //   publishedTime,
    //   url: `https://leerob.io/blog/${slug}`,
    //   images: [
    //     {
    //       url: ogImage,
    //     },
    //   ],
    // },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col grow">
      <main className="p-6 pt-16 grow">
        <Header />
        <Grid>
          <div className="md:col-start-2 md:col-end-4 max-w-3xl pb-4">
            <script type="application/ld+json">
              {JSON.stringify(post.structuredData)}
            </script>
            <h1 className="font-semibold text-2xl max-w-[650px]">
              <Balancer>{post.title}</Balancer>
            </h1>
          </div>
          {/*<div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">*/}
          {/*  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">*/}
          {/*    {post.publishedAt}*/}
          {/*  </div>*/}
          {/*  <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />*/}
          {/*</div>*/}
          <div className="md:col-start-2 md:col-end-4 max-w-3xl text-transparent text-xl bg-clip-text bg-gradient-to-br from-gray-200 to-neutral-400">
            <Mdx code={post.body.code} />
          </div>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
