import type { MDXComponents } from 'mdx/types'
import { Callout } from './components/Callout'
import { Tldr } from './components/Tldr'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // MDX에서 바로 사용 가능
    Callout, // <Callout type="tip|warning|quote|info|note">...</Callout>
    Tldr,    // <Tldr>...</Tldr>  — 글 상단 요약 박스
    // h1~h3·p·blockquote·code 등 기본 요소 스타일은 globals.css의 .site-wrap ... 이 관리
    ...components,
  }
}
