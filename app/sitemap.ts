import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

  const routes = ['', '/about', '/blog', '/cv.pdf'].map((route) => ({
    url: `https://www.andreasellwanger.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  // const posts = allBlogs
  //   .sort((a, b) => {
  //     if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
  //       return -1;
  //     }
  //     return 1;
  //   })
  //   .map((post) => ({
  //     url: `https://www.andreasellwanger.com/blog/${post.slug}`,
  //     lastModified: post.publishedAt,
  //   }));

  return [
    ...routes,
    //...posts
  ];
}
