import type { ReactNode } from 'react'

export type PostCategory = 'setup' | 'records' | 'automation' | 'guides' | 'troubleshooting'

const categoryLabel: Record<PostCategory, string> = {
  setup: '작업실 세우기',
  records: '운영 기록',
  automation: '자동화 구축기',
  guides: '실전 가이드',
  troubleshooting: '문제해결',
}

const categoryEmoji: Record<PostCategory, string> = {
  setup: '🪟',
  records: '🧭',
  automation: '🛠',
  guides: '📗',
  troubleshooting: '🔍',
}

export function PostLayout({
  category = 'setup',
  date,
  readingTime,
  children,
}: {
  category?: PostCategory
  date?: string
  readingTime?: string
  children: ReactNode
}) {
  return (
    <main className="site-wrap">
      <article className="card">
        <div className="post-meta-bar">
          <span className={`cat-badge cat-badge--${category}`}>
            {categoryEmoji[category]} {categoryLabel[category]}
          </span>
          {date && (
            <>
              <span className="post-meta-dot">·</span>
              <span>{date}</span>
            </>
          )}
          {readingTime && (
            <>
              <span className="post-meta-dot">·</span>
              <span>📖 {readingTime}</span>
            </>
          )}
        </div>
        {children}
      </article>
    </main>
  )
}
