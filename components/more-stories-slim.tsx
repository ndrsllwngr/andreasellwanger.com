import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStoriesSlim = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="text-left">
        {posts.map((post, i) => (
          <div key={i} className="pb-3 mb-3 md:pb-6 md:mb-6 border-b">
            <a
              className="md:flex justify-between md:flex-gap-x-16 hover:text-blue-400 transition-colors"
              href={`posts/${post.slug}`}
            >
              <h2>{post.title}</h2>
              <time dateTime={post.date} className="text-gray-300 text-base mt-1">
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
