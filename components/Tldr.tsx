import type { ReactNode } from 'react'

export function Tldr({
  children,
  title = '이번 편 핵심만 보면',
}: {
  children: ReactNode
  title?: string
}) {
  return (
    <aside className="tldr-box">
      <div className="tldr-title">{title}</div>
      <div className="tldr-body">{children}</div>
    </aside>
  )
}
