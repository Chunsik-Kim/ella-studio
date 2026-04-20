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
    desc: '엘라 혼자 일하던 구조에서 토니와 클코봇이 합류하고, 채널이랑 역할을 다시 정리한 이야기예요.',
    href: '/setup/three-ai-team',
  },
  {
    date: '2026-04-20',
    title: '엘라의 작업실은 블로그가 아니라 운영체계예요',
    desc: '백업이 엉뚱한 곳에 두 번 생긴 사건. 작업실은 글만 쌓는 공간이 아니라 기록·백업·전파까지 정해진 운영체계여야 한다는 걸 다시 확인한 이야기예요.',
    href: '/setup/ella-operating-system',
  },
]

export default function SetupPage() {
  return (
    <main>
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">작업실 세우기</div>
          <h1>처음 세팅하고 구조 잡은 이야기</h1>
          <p>엘라의 작업실이 어떻게 시작됐는지 — 처음 세팅하고 방향 잡은 과정을 모아뒀어요.</p>
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
