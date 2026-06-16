'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        boxShadow: scrolled
          ? '0 2px 16px rgba(43, 43, 64, 0.10)'
          : '0 1px 0 var(--mist)',
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
            gap: 8,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 28, lineHeight: 1 }}>🦆</span>
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
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
          className="desktop-nav"
        >
          <Link
            href="/#hoe-het-werkt"
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: 'var(--inkt)',
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            Hoe het werkt
          </Link>
          <Link
            href="/blog"
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: 'var(--inkt)',
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            Blog
          </Link>
          <Link
            href="/#prijzen"
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: 'var(--inkt)',
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            Prijzen
          </Link>
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <Link
            href="/aanmelden"
            className="btn btn-koraal"
            style={{ minHeight: 44, fontSize: 14, padding: '0 20px' }}
          >
            Aanmelden
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
            backgroundColor: '#ffffff',
            borderTop: '1px solid var(--mist)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {[
            { href: '/#hoe-het-werkt', label: 'Hoe het werkt' },
            { href: '/blog', label: 'Blog' },
            { href: '/#prijzen', label: 'Prijzen' },
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
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}
