import Link from 'next/link'
import { getPostsByCategory } from '../../content/posts'

export default function SetupPage() {
  const items = getPostsByCategory('setup')
  return (
    <main>
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">작업실 세우기</div>
          <h1>처음 세팅하고 구조 잡은 이야기</h1>
          <p>엘라의 작업실이 어떻게 시작됐는지 — 처음 세팅하고 방향 잡은 과정을 모아뒀어요.</p>
        </div>
        {items.length === 0 ? (
          <div className="empty-hint">아직 준비 중이에요. 곧 채워질 거예요.</div>
        ) : (
          <div className="posts-grid">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/setup/${p.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article className="post-card">
                  <div className="post-meta">
                    <span className="cat-badge cat-badge--setup">🪟 작업실 세우기</span>
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
