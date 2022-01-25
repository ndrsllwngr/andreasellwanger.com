import Post from '@/types/post'

type Props = {
  posts: Post[]
}

const MoreStoriesSlim = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="text-left">
        {posts.map((post, i) => (
          <div key={i} className="mb-3 border-b pb-3 md:mb-6 md:pb-6">
            <a
              className="md:flex-gap-x-16 justify-between transition-colors hover:text-blue-400 md:flex"
              href={`posts/${post.slug}`}
            >
              <h2>{post.title}</h2>
              <time dateTime={post.date} className="mt-1 text-base text-gray-300">
                {new Date(post.date).getDate()}/{new Date(post.date).getMonth()}/
                {new Date(post.date).getFullYear()}
              </time>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoreStoriesSlim
