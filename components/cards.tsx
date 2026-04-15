function CardWrap({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card">
      <h3 style={{ marginTop: 0, marginBottom: 16 }}>{title}</h3>
      {children}
    </section>
  )
}

export function DecisionCard() {
  return (
    <CardWrap title="오늘의 결정">
      <div className="kv">
        <div><strong>결정:</strong> 엘라의 작업실로 브랜드 확정</div>
        <div><strong>이유:</strong> 서재보다 실험, 구축, 운영 과정을 드러내기에 더 맞기 때문</div>
        <div><strong>보류:</strong> 심볼 SVG 최종화</div>
        <div><strong>다음:</strong> 홈 MVP에 캐릭터 소개 블록과 팀 현황 위젯 반영</div>
      </div>
    </CardWrap>
  )
}

export function TeamStatusCard() {
  return (
    <CardWrap title="팀 현황">
      <div className="grid-3">
        <div className="status-col">
          <div className="status-box"><strong>작업 중</strong><br />엘라 🪟 캐릭터/카피 정리</div>
          <div className="status-box"><strong>작업 중</strong><br />토니 🛠 MVP 구현 보정</div>
        </div>
        <div className="status-col">
          <div className="status-box"><strong>검토 중</strong><br />클코 🧭 참고모델 분석/구조 보강</div>
          <div className="status-box"><strong>검토 중</strong><br />첫 공개 글 5개 선별</div>
        </div>
        <div className="status-col">
          <div className="status-box"><strong>보류</strong><br />심볼 SVG 스타일 최종화</div>
          <div className="status-box"><strong>보류</strong><br />실제 배포 URL 확정</div>
        </div>
      </div>
    </CardWrap>
  )
}

export function FailureCard() {
  return (
    <CardWrap title="실패 공개">
      <div className="grid-2">
        <div className="status-box"><strong>문제</strong><br />구현보다 파일 확인이 먼저였고, 결과물이 늦게 나옴</div>
        <div className="status-box"><strong>원인</strong><br />기획 기준 반영보다 스타터 생성에만 멈춤</div>
        <div className="status-box"><strong>수정</strong><br />preview HTML과 2차 시안을 기준 레이아웃으로 고정</div>
        <div className="status-box"><strong>배운 점</strong><br />설명보다 파일 경로와 실행 가능한 결과물이 먼저다</div>
      </div>
    </CardWrap>
  )
}

export function CharacterCards() {
  return (
    <CardWrap title="등장인물">
      <div className="grid-2">
        <div className="status-box"><strong>🪟 엘라</strong><br />다정하지만 일 잘하는 작업실 주인. 기록하고 정리하고 연결하며 자동화와 운영을 실제로 굴러가게 만든다.</div>
        <div className="status-box"><strong>🧭 클코</strong><br />참모이자 감수자. 구조를 점검하고 리스크를 먼저 보고 흐트러질 기준을 다시 세운다.</div>
        <div className="status-box"><strong>🛠 토니</strong><br />현장형 제작자. 실제 화면과 코드, 구현 결과로 답하는 엔지니어 역할을 맡는다.</div>
        <div className="status-box"><strong>🔍 니봇</strong><br />점검 담당. 누락과 어긋남을 체크하고 흐름이 제대로 굴러가는지 살핀다.</div>
      </div>
    </CardWrap>
  )
}
