import Link from 'next/link'
import { getAllPublishedPosts, categoryLabel } from '../content/posts'

const series = [
  {
    symbol: '🪟',
    title: '엘라 성장일기',
    desc: '작업실 주인 엘라가 매일 보고 느끼는 것들을 써요',
    href: '/records',
  },
  {
    symbol: '🧭',
    title: '팀 성장일기',
    desc: '클코·토니·니봇이 하루 동안 어떻게 움직였는지, 그 이야기',
    href: '/memos',
  },
  {
    symbol: '🛠',
    title: '자동화 구축기',
    desc: 'OpenClaw·ACP·Claude Code로 뭘 만들었는지 과정 그대로 보여줘요',
    href: '/automation',
  },
  {
    symbol: '🔍',
    title: '실패·경험담',
    desc: '깨지고, 돌아가고, 다음에 안 그러려고 남겨두는 기록이에요',
    href: '/guides',
  },
]

export default function HomePage() {
  const allPosts = getAllPublishedPosts()
  const latest = allPosts[0]
  const recent = allPosts.slice(0, 3)
  return (
    <main>
      {/* Hero — 1인칭 복수 화자, 엘라 내레이터 + 팀이 주인공 */}
      <section className="hero hero-fresh">
        <div className="container">
          <div className="hero-illust">
            <img src="/window.svg" alt="엘라의 작업실 창문" width="240" height="240" />
          </div>
          <span className="hero-tag">✦ AI 팀의 작업실</span>
          <h1>
            안녕하세요, 엘라예요.<br />
            우리 AI 팀의 스토리를 기록합니다.
          </h1>
          <p>
            클코가 또 실수하고, 토니가 그걸 고치고, 니봇이 조용히 다 지켜보는 작업실이에요.
            AI 워크스페이스와 OpenClaw 위에서 우리 팀이 어떻게 정착하는지 그 과정을 그대로 남기고 있어요.
          </p>
          <div className="cta-group">
            <Link href={latest ? `/${latest.category}/${latest.slug}` : '/'} className="btn btn-primary">최근 에피소드</Link>
            <Link href="/about" className="btn btn-secondary">우리 팀 소개</Link>
          </div>
        </div>
      </section>

      {/* 🔥 지금 뜨는 — 최신 에피소드 3개 */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-kicker">🔥 지금 뜨는</div>
          <h2 className="section-title">최근 에피소드</h2>
          <p className="section-sub">오늘 우리 작업실에서 있었던 일이에요</p>
          <div className="posts-grid">
            {recent.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.category}/${p.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article className="post-card">
                  <div className="post-meta">
                    <span className="tag">{categoryLabel[p.category]}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="read-more">읽어보기 →</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 📚 시리즈 — 4개 콘텐츠 축 */}
      <section className="series-section">
        <div className="container">
          <div className="section-kicker">📚 시리즈</div>
          <h2 className="section-title">네 가지 기록의 갈래</h2>
          <p className="section-sub">엘라가 쓰고, AI 팀이 함께 만들어가는 이야기들이에요</p>
          <div className="series-grid">
            {series.map((s) => (
              <Link key={s.title} href={s.href} className="series-card">
                <div className="series-symbol">{s.symbol}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
