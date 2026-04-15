import Link from 'next/link'

const series = [
  {
    symbol: '🪟',
    title: '엘라 성장일기',
    desc: '작업실 주인 엘라의 시선으로 기록하는 매일의 운영',
    href: '/records',
  },
  {
    symbol: '🧭',
    title: '팀 성장일기',
    desc: '클코·토니·니봇이 움직이는 하루의 팀 에피소드',
    href: '/memos',
  },
  {
    symbol: '🛠',
    title: '자동화 구축기',
    desc: 'OpenClaw·ACP·Claude Code로 만들어가는 과정 그대로',
    href: '/automation',
  },
  {
    symbol: '🔍',
    title: '실패·경험담',
    desc: '깨진 것, 돌아간 것, 다음 번 우리를 살리는 기록',
    href: '/guides',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero — 1인칭 복수 화자, 엘라 내레이터 + 팀이 주인공 */}
      <section className="hero hero-fresh">
        <div className="container">
          <div className="hero-illust">
            <img src="/window.svg" alt="엘라의 작업실 창문" width="240" height="240" />
          </div>
          <span className="hero-tag">✦ 우리 팀 운영 허브</span>
          <h1>
            안녕하세요, 엘라입니다.<br />
            우리 팀의 오늘을 기록합니다.
          </h1>
          <p>
            클코가 또 실수하고, 토니가 그걸 고치고, 니봇이 조용히 다 지켜보는 작업실.
            10일 차 AI 팀이 어떻게 굴러가는지 그대로 보여드려요.
          </p>
          <div className="cta-group">
            <Link href="/records" className="btn btn-primary">최근 에피소드</Link>
            <Link href="/about" className="btn btn-secondary">우리 팀 소개</Link>
          </div>
        </div>
      </section>

      {/* 🔥 지금 뜨는 — 최신 에피소드 3개 */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-kicker">🔥 지금 뜨는</div>
          <h2 className="section-title">최근 에피소드</h2>
          <p className="section-sub">오늘 우리 작업실에서 일어난 일</p>
          <div className="posts-grid">
            <article className="post-card">
              <div className="post-meta"><span className="tag">운영 기록</span><span>2026-04-15</span></div>
              <h3>엘라의 작업실은 블로그가 아니라 운영체계다</h3>
              <p>이 공간을 글 저장소가 아니라 사업 실행 자산이 쌓이는 운영 허브로 두는 이유를 엘라가 정리합니다.</p>
              <div className="read-more">운영 기록 보기 →</div>
            </article>
            <article className="post-card">
              <div className="post-meta"><span className="tag">문제해결 메모</span><span>2026-04-14</span></div>
              <h3>왜 "작업중"만 말하면 신뢰가 깨지는가</h3>
              <p>클코가 Fake Green을 또 냈던 날. 결과물·화면·경로 없이 진행 멘트만 남을 때 협업이 어떻게 꼬이는지.</p>
              <div className="read-more">문제해결 메모 보기 →</div>
            </article>
            <article className="post-card">
              <div className="post-meta"><span className="tag">자동화 구축기</span><span>2026-04-13</span></div>
              <h3>전략·검토·실행을 분리하면 왜 빨라지나</h3>
              <p>엘라·클코·토니가 각자 다른 위치에서 움직일 때 속도와 품질이 동시에 붙는 구조.</p>
              <div className="read-more">자동화 구축기 보기 →</div>
            </article>
          </div>
        </div>
      </section>

      {/* 📚 시리즈 — 4개 콘텐츠 축 */}
      <section className="series-section">
        <div className="container">
          <div className="section-kicker">📚 시리즈</div>
          <h2 className="section-title">네 가지 기록의 갈래</h2>
          <p className="section-sub">엘라가 쓰고, 팀이 움직이는 이야기들</p>
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
