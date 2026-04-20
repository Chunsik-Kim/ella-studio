# 엘라의 작업실 — 글 작성 가이드 (내부용)

> 내부 문서. 독자에게 노출되지 않음.
> 새 편 쓸 때 먼저 확인.

---

## 1. 새 편 작성 절차 (3단계)

1. `content/posts/_TEMPLATE.mdx` 를 복사 → `content/posts/<내-slug>.mdx`
2. **frontmatter 블록**(상단 `---` 사이)의 메타데이터 채우기
3. 본문 6단 구조 채우기

끝. 목록 카드·라우트·URL 전부 **자동 생성**.
- `posts.ts` 같은 다른 파일 수정 **불필요**
- 카테고리·순서·공개 여부 전부 **frontmatter로 제어**

---

## 2. Frontmatter 필드 (필수)

```yaml
---
title: "글 제목"
slug: my-new-post          # URL 경로 (소문자·하이픈)
category: setup            # setup | records | automation | guides | troubleshooting
episode: 4                 # 연재 순서 (같은 카테고리 내 숫자)
date: "2026-04-21"         # 발행일 YYYY-MM-DD
readingTime: "5분"
summary: "카드에 노출되는 한두 문장 요약"
# draft: true              # 공개 전에 주석 해제해두면 목록에 안 뜸
---
```

- **slug**: 파일명과 일치시키면 혼동 없음 (`my-new-post.mdx` ↔ `slug: my-new-post`)
- **episode**: 순서만 바꾸고 싶으면 이 숫자만 변경. 재배포하면 목록 순서 자동 재정렬
- **category**: 재분류 시 이 값만 변경. URL은 유지(slug 기준)

---

## 3. 본문 6단 구조 (고정)

1. `# 제목`
2. `> 리드` (한두 문장)
3. `## 배경`
4. `## 과정` (### 1~4 네 단계)
5. `## 배운 것` (**첫째**, **둘째**, **셋째**)
6. `## 다음 단계` (3가지 bullet + 마무리 한 문단)

끝에 `---` + `*엘라의 작업실 — AI 팀의 성장 스토리*` 푸터.

---

## 4. 문체·스타일 표준

- 친근체 "~거든요/~잖아요/~더라고요". 높임체 "~합니다" 금지
- **말 인용**은 큰따옴표 `"..."`, **파일·경로·명령어**는 백틱 `` ` ``
- 강조는 **bold** + 이모지. 색만으로 강조 X
- 불릿은 짧은 구문 위주. 긴 설명은 본문 문단으로

---

## 5. Callout 사용 (선택 — 글당 0~2개 권장)

```mdx
<Callout type="tip">팁 내용</Callout>
<Callout type="warning" title="주의">주의 내용</Callout>
<Callout type="quote">인상적인 인용</Callout>
<Callout type="info">일반 정보</Callout>
<Callout type="note">부가 메모</Callout>
```

---

## 6. 품질 자가 체크리스트 (push 전)

### 구조
- [ ] 6단 구조 모두 있음
- [ ] 분량 80~100줄

### 내용
- [ ] 구체 시점(YYYY-MM-DD)·수치·에피소드 최소 3개
- [ ] 시행착오·실패 공개 1회 이상
- [ ] 기술 용어 처음 등장 시 한 줄 부연

### 문체
- [ ] 친근체 일관
- [ ] 말 인용 큰따옴표, 경로 백틱 준수
- [ ] 오타·띄어쓰기 1회 검토

### Frontmatter
- [ ] title·slug·category·episode·date·summary 채움
- [ ] episode 번호 같은 카테고리 내 중복 없음
- [ ] slug·파일명 일치

### 배포 전
- [ ] `npm run build` 로컬 통과
- [ ] 프리뷰 URL로 렌더링 확인

---

## 7. 일괄 수정이 쉬워진 덕분에

- **순서 변경**: `episode` 숫자만 변경
- **카테고리 재분류**: `category` 필드만 변경 (URL 유지)
- **공개 보류**: `draft: true` 한 줄
- **스토리 틀 개편**: 해당 MDX 본문만 수정
- **템플릿 버전 업**: `_TEMPLATE.mdx` 수정 → 이후 글에 자동 반영

---

*작성: 클코 2026-04-20*
*업데이트: 템플릿·구조 변경 시*
