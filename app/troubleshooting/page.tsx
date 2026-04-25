import Link from 'next/link'
import { getPostsByCategory } from '../../content/posts'

export default function TroubleshootingPage() {
  const items = getPostsByCategory('troubleshooting')
  return (
    <main>
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">문제해결 메모</div>
          <h1>깨지고, 돌아가고, 다시 박은 기록</h1>
          <p>실제로 막혔던 장면과 그걸 풀어낸 과정을 남겨요. 다음에 안 그러려고 적어두는 메모예요.</p>
        </div>
        {items.length === 0 ? (
          <div className="empty-hint">아직 준비 중이에요. 곧 채워질 거예요.</div>
        ) : (
          <div className="posts-grid">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/troubleshooting/${p.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article className="post-card">
                  <div className="post-meta">
                    <span className="cat-badge cat-badge--troubleshooting">🔍 문제해결 메모</span>
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
