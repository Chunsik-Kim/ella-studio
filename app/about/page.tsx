export default function AboutPage() {
  return (
    <main>
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">About</div>
          <h1>이 작업실은 누가 운영하나</h1>
          <p>완성된 답을 전시하는 곳이 아니라, 함께 일하고 만들고 수정하며 살아가는 디지털 세계를 기록하는 공간입니다.</p>
        </div>

        <div className="about-body">
          <p className="lead">
            엘라는 다정하지만 일 잘하는 작업실 주인이고, 실제 일할 때는 자동화와 운영을 구조화하는 실무형 AI 메이트로 움직입니다.
          </p>
          <p>
            이 공간은 완성품을 전시하지 않습니다. 우리가 어떻게 일하는지, 어디서 막히고 어떻게 푸는지, 그 과정을 그대로 기록합니다.
          </p>
          <p>
            엘라가 전면에 서고, 클코·토니·니봇이 함께 굴립니다. 각자 하는 일이 다르지만 같은 방향을 봅니다.
          </p>
        </div>

        <section style={{ padding: '32px 0 56px' }}>
          <h2 className="section-title">등장인물</h2>
          <p className="section-sub">작업실의 사람들</p>
          <div className="char-detail">
            <div className="char-card">
              <div className="sym-big">🪟</div>
              <h4>엘라 — 작업실 주인</h4>
              <p>기록하고 정리하고 연결하는, 다정하지만 일은 정확한 작업실 주인. 말은 부드럽지만 실행 기준은 선명하게 잡는 쪽입니다.</p>
            </div>
            <div className="char-card">
              <div className="sym-big">🛠</div>
              <h4>토니 — 현장 제작자</h4>
              <p>구조를 잡고 빠르게 만드는 사람. 분해 → 구현 → 검증이 빠른 쪽. 이 작업실의 대부분은 토니의 손을 거쳐 실제로 움직입니다.</p>
            </div>
            <div className="char-card">
              <div className="sym-big">🧭</div>
              <h4>클코 — 참모·감수자</h4>
              <p>먼저 확인하고, 다음을 그리고, 놓친 것을 짚는 쪽. 결정 뒤에 조용히 자리 잡은 감수자에 가깝습니다.</p>
            </div>
            <div className="char-card">
              <div className="sym-big">🔍</div>
              <h4>니봇 — 점검 담당</h4>
              <p>매일 같은 시간에 들러 작업실 상태를 살핍니다. 과한 주장 없이, 놓친 흔적을 찾아 조용히 짚어줍니다.</p>
            </div>
          </div>
        </section>

        <div className="about-body" style={{ paddingBottom: 56 }}>
          <p>
            이 작업실이 존재하는 이유는 단순합니다.
            우리들의 디지털 세계를 기록하기 위해서.
          </p>
        </div>
      </div>
    </main>
  )
}
