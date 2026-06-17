'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      if (progRef.current) {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
        progRef.current.style.width = pct + '%'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div ref={progRef} className="scroll-prog" aria-hidden="true" />
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(245,244,252,0.90)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1.5px solid var(--mist)',
          boxShadow: scrolled ? '0 2px 16px rgba(43, 43, 64, 0.08)' : 'none',
          transition: 'box-shadow 0.25s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 68,
            gap: 24,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              src="/kwekkel-logo.svg"
              alt="Kwekkel logo"
              width={36}
              height={36}
              style={{ borderRadius: 8, display: 'block' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontWeight: 800,
                fontSize: 22,
                color: 'var(--druif)',
                letterSpacing: '-0.3px',
              }}
            >
              Kwekkel
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: 32 }}
            className="desktop-nav"
          >
            <Link href="/#functies" className="nav-link" style={{ fontWeight: 700, fontSize: 15, color: 'var(--inkt)' }}>
              Functies
            </Link>
            <Link href="/#hoe-het-werkt" className="nav-link" style={{ fontWeight: 700, fontSize: 15, color: 'var(--inkt)' }}>
              Hoe het werkt
            </Link>
            <Link href="/#prijzen" className="nav-link" style={{ fontWeight: 700, fontSize: 15, color: 'var(--inkt)' }}>
              Prijzen
            </Link>
            <Link href="/blog" className="nav-link" style={{ fontWeight: 700, fontSize: 15, color: 'var(--inkt)' }}>
              Blog
            </Link>
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <Link
              href="/aanmelden"
              className="btn btn-koraal"
              style={{ minHeight: 44, fontSize: 14, padding: '0 20px', borderRadius: 999 }}
            >
              Wachtlijst 🐥
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger"
              aria-label="Menu openen"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 6,
                color: 'var(--inkt)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div
            className="mobile-nav"
            style={{
              backgroundColor: 'rgba(245,244,252,0.98)',
              borderTop: '1px solid var(--mist)',
              padding: '16px 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {[
              { href: '/#functies', label: 'Functies' },
              { href: '/#hoe-het-werkt', label: 'Hoe het werkt' },
              { href: '/#prijzen', label: 'Prijzen' },
              { href: '/blog', label: 'Blog' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: 'var(--inkt)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--mist)',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/aanmelden"
              onClick={() => setMenuOpen(false)}
              className="btn btn-koraal"
              style={{ marginTop: 12, justifyContent: 'center' }}
            >
              Wachtlijst 🐥
            </Link>
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .hamburger { display: flex !important; }
          }
        `}</style>
      </header>
    </>
  )
}
