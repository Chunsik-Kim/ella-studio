import type { MDXComponents } from 'mdx/types'
import { Callout } from './components/Callout'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // MDX에서 바로 사용: <Callout type="tip">...</Callout>
    Callout,
    // h1~h3·p·blockquote·code 등 기본 요소 스타일은 globals.css의 .site-wrap ... 이 관리
    ...components,
  }
}
