import { notFound } from 'next/navigation'
import { getPostMeta, getPostsByCategory } from '../../../content/posts'
import { PostLayout } from '../../../components/PostLayout'

export function generateStaticParams() {
  return getPostsByCategory('automation').map((p) => ({ slug: p.slug }))
}

export default async function AutomationPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostMeta(slug)
  if (!post || post.category !== 'automation' || post.draft) notFound()

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
