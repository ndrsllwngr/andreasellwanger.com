import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Grid } from "@/components/Grid";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  return (
    <div className="flex flex-col grow">
      <main className="p-6 pt-16 grow">
        <Header />
        <Grid className="pb-16">
          <div className="md:col-start-2 md:col-end-4 max-w-3xl pb-4">
            <h1 className="text-2xl font-[575] mb-2">Blog</h1>
            <p className="text-lg text-neutral-400">
              Strong opinions, loosely held.
            </p>
          </div>
        </Grid>
        <Grid className="text-transparent text-xl bg-clip-text bg-gradient-to-br from-gray-200 to-neutral-400">
          {/* {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <div className={"col-span-4"} key={post.slug}>
                <Grid className={"border-t border-neutral-700 py-6"}>
                  <div className="flex flex-col space-y-1 md:col-start-2 md:col-span-2">
                    <div className="w-full flex flex-col max-w-3xl">
                      <Link
                        className={
                          "text-lg text-gray-200 pb-4 underline decoration-neutral-700 hover:decoration-white"
                        }
                        href={`/blog/${post.slug}`}
                      >
                        <h2>{post.title}</h2>
                      </Link>
                      <p className={"text-base text-neutral-400"}>
                        {post.summary}
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      "flex flex-col text-sm text-neutral-400 md:col-start-1 md:col-span-1 md:row-start-1 pt-4 md:pt-0 md:leading-7"
                    }
                  >
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </div>
                </Grid>
              </div>
            ))} */}
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
