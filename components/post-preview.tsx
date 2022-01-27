import Link from 'next/link'

import Avatar from '@/components/avatar'
import CoverImage from '@/components/cover-image'
import DateFormatter from '@/components/date-formatter'
import Author from '@/types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
