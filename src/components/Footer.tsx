import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--inkt)',
        color: '#ffffff',
        padding: '56px 0 32px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                marginBottom: 12,
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
                  color: '#ffffff',
                }}
              >
                Kwekkel
              </span>
            </Link>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 240,
              }}
            >
              Veilig kletsen en bellen voor kinderen van 6–11 jaar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontSize: 16,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 16,
              }}
            >
              Links
            </h3>
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/aanmelden', label: 'Aanmelden' },
                { href: 'https://app.kwekkel.app', label: 'Open de app', external: true },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="footer-link"
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 24,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              color: 'rgba(255,255,255,0.45)',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Gebouwd in Nederland · Geen advertenties · © 2026 Kwekkel
          </p>
        </div>
      </div>
    </footer>
  )
}
