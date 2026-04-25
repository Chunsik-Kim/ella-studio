import Link from 'next/link'
import { getPostsByCategory } from '../../content/posts'

export default function AutomationPage() {
  const items = getPostsByCategory('automation')
  return (
    <main>
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">자동화 구축기</div>
          <h1>OpenClaw · ACP · Claude Code</h1>
          <p>AI 팀을 실제로 어떻게 구성하고 굴렸는지 — 구축 과정을 그대로 남겨요.</p>
        </div>
        {items.length === 0 ? (
          <div className="empty-hint">아직 준비 중이에요. 곧 채워질 거예요.</div>
        ) : (
          <div className="posts-grid">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/automation/${p.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article className="post-card">
                  <div className="post-meta">
                    <span className="cat-badge cat-badge--automation">🛠 자동화 구축기</span>
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
