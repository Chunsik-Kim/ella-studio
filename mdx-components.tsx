import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 style={{ fontSize: 36, marginBottom: 16 }} {...props} />,
    h2: (props) => <h2 style={{ fontSize: 28, marginTop: 32, marginBottom: 12 }} {...props} />,
    p: (props) => <p style={{ color: 'var(--subtext)', lineHeight: 1.7 }} {...props} />,
    ...components,
  }
}
