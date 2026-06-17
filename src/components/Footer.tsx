import Link from 'next/link'

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/aanmelden', label: 'Aanmelden' },
  { href: '#', label: 'Privacybeleid' },
  { href: '#', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1.5px solid var(--mist)',
        padding: '32px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}
          >
            <img
              src="/kwekkel-logo.svg"
              alt="Kwekkel logo"
              width={28}
              height={28}
              style={{ borderRadius: 7, display: 'block' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontWeight: 800,
                fontSize: 18,
                color: 'var(--druif)',
              }}
            >
              Kwekkel
            </span>
            <span style={{ fontSize: 13, color: 'var(--grijs)', fontWeight: 600 }}>
              — Gemaakt in Nederland
            </span>
          </Link>

          {/* Links */}
          <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="footer-link"
                style={{ fontSize: 13, fontWeight: 700, color: 'var(--grijs)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p style={{ margin: 0, fontSize: 13, color: 'var(--grijs)', fontWeight: 600 }}>
            © 2026 Kwekkel
          </p>
        </div>
      </div>
    </footer>
  )
}
