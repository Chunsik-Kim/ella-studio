import type { ReactNode } from 'react'

export function Tldr({ children }: { children: ReactNode }) {
  return (
    <aside className="tldr-box">
      <div className="tldr-title">TL;DR</div>
      <div className="tldr-body">{children}</div>
    </aside>
  )
}
