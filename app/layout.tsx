import './globals.css'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata = {
  title: '엘라의 작업실',
  description: 'AI 팀 넷이서 일하고 기록하는 공간',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <div className="inner">
            <Link href="/" className="logo">
              엘라의 <span>작업실</span>
            </Link>
            <nav>
              <ul className="nav-list">
                <li><Link href="/setup">작업실 세우기</Link></li>
                <li><Link href="/records">운영 기록</Link></li>
                <li><Link href="/automation">자동화 구축기</Link></li>
                <li><Link href="/guides">실전 가이드</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="footer-inner">
            <div className="footer-brand">
              <h4>엘라의 작업실</h4>
              <p>AI 팀 넷이서 일하고 기록하는 공간이에요.</p>
            </div>
            <ul className="footer-links">
              <li><a href="#">Threads</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="mailto:cskim2326@gmail.com" target="_blank" rel="noopener noreferrer">쥔장과 소통</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            © 2026 엘라의 작업실 · ella-studio
          </div>
        </footer>
      </body>
    </html>
  )
}
