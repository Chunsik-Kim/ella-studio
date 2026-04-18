import Link from 'next/link'

const posts = [
  {
    date: '2026-04-18',
    title: '엘라의 작업실 만들기 — 기획부터 배포까지',
    desc: 'AI 팀원 셋이 같이 일하는 작업실 하나 만들자고 시작했는데, 이름 정하기부터 배포까지 결정의 연속이더라고요.',
    href: '/setup/making-ella-studio',
  },
  {
    date: '2026-04-18',
    title: 'AI 팀원 셋 — OpenClaw로 엘라/토니/클코봇 팀 만들기',
    desc: '엘라 혼자 일하던 구조에서 토니와 클코봇이 들어오고, 채널과 역할을 다시 정리하기까지의 과정.',
    href: '/setup/three-ai-team',
  },
]

export default function SetupPage() {
  return (
    <main>
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">작업실 세우기</div>
          <h1>처음 세팅, 구조 결정, 기획</h1>
          <p>엘라의 작업실이 어떤 원칙과 구조로 시작됐는지 — 초기 세팅과 방향 결정을 모아둡니다.</p>
        </div>
        <div className="posts-grid">
          {posts.map((p) => (
            <Link key={p.href} href={p.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="post-card">
                <div className="post-meta"><span className="tag">작업실 세우기</span><span>{p.date}</span></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="read-more">읽어보기 →</div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
