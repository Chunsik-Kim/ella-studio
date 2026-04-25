import { notFound } from 'next/navigation'
import { getPostMeta, getPostsByCategory } from '../../../content/posts'
import { PostLayout } from '../../../components/PostLayout'

export function generateStaticParams() {
  return getPostsByCategory('records').map((p) => ({ slug: p.slug }))
}

export default async function RecordsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostMeta(slug)
  if (!post || post.category !== 'records' || post.draft) notFound()

  const { default: Post } = await import(`../../../content/posts/${slug}.mdx`)

  return (
    <PostLayout
      category={post.category}
      slug={post.slug}
      date={post.date}
      readingTime={post.readingTime}
    >
      <Post />
    </PostLayout>
  )
}
