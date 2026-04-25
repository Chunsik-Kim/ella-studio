import Link from 'next/link'
import { getPostsByCategory } from '../../content/posts'

export default function GuidesPage() {
  const items = getPostsByCategory('guides')
  return (
    <main>
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">실전 가이드</div>
          <h1>바로 써먹는 체크리스트</h1>
          <p>도구 비교, 설정 팁, 체크리스트, 반복 작업 템플릿 — 정리해둔 참고 자료예요.</p>
        </div>
        {items.length === 0 ? (
          <div className="empty-hint">아직 준비 중이에요. 곧 채워질 거예요.</div>
        ) : (
          <div className="posts-grid">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/guides/${p.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article className="post-card">
                  <div className="post-meta">
                    <span className="cat-badge cat-badge--guides">📋 실전 가이드</span>
                    <span>{p.date}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="read-more">읽어보기 →</div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
