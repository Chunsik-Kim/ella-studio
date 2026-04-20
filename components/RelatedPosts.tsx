import Link from 'next/link'
import {
  getPostsByCategory,
  categoryLabel,
  type PostCategory,
} from '../content/posts'

export function RelatedPosts({
  category,
  currentSlug,
  max = 2,
}: {
  category: PostCategory
  currentSlug: string
  max?: number
}) {
  const siblings = getPostsByCategory(category).filter(
    (p) => p.slug !== currentSlug,
  )
  if (siblings.length === 0) return null

  // currentSlug의 인접 편 우선 (이전·다음), 없으면 앞에서부터
  const currentIndex = getPostsByCategory(category).findIndex(
    (p) => p.slug === currentSlug,
  )
  const ordered = getPostsByCategory(category)
  const related: typeof siblings = []
  if (currentIndex > 0) related.push(ordered[currentIndex - 1])
  if (currentIndex !== -1 && currentIndex < ordered.length - 1)
    related.push(ordered[currentIndex + 1])
  // 부족하면 siblings에서 채움
  for (const p of siblings) {
    if (related.length >= max) break
    if (!related.some((r) => r.slug === p.slug)) related.push(p)
  }
  const list = related.slice(0, max)

  return (
    <aside className="related-posts">
      <h3 className="related-title">같이 보면 좋은 편</h3>
      <div className="related-grid">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/${p.category}/${p.slug}`}
            className="related-card"
          >
            <div className="related-meta">
              <span className={`cat-badge cat-badge--${p.category}`}>
                {categoryLabel[p.category]}
              </span>
              <span className="related-date">{p.date}</span>
            </div>
            <h4>{p.title}</h4>
            <p>{p.summary}</p>
          </Link>
        ))}
      </div>
    </aside>
  )
}
