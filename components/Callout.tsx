import type { ReactNode } from 'react'

export type CalloutType = 'tip' | 'warning' | 'quote' | 'info' | 'note'

const defaultTitle: Record<CalloutType, string> = {
  tip: '💡 TIP',
  warning: '⚠️ 주의',
  quote: '“ 인용',
  info: 'ℹ️ 참고',
  note: '📝 메모',
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType
  title?: string
  children: ReactNode
}) {
  const label = title ?? defaultTitle[type]
  return (
    <aside className={`callout callout--${type}`}>
      {label && <span className="callout-title">{label}</span>}
      {children}
    </aside>
  )
}
