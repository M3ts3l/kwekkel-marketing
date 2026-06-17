import Link from 'next/link'

const gratisFeatures = [
  'Veilig kletsen met vrienden',
  'Eigen Kwek!-avatar',
  'QR-code vriendentoevoeging',
  'Ouder-dashboard',
  'Tot 5 contacten',
]

const plusFeatures = [
  'Alles van Gratis',
  '(Video)bellen met vrienden',
  'Kwekstem-stemfilters',
  'Meer contacten & media',
  'Extra eend-items',
  'Prioriteitsondersteuning',
]

export default function Prijzen() {
  return (
    <section className="section" id="prijzen" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 12 }}>
          <div
            style={{
              fontWeight: 800,
              color: 'var(--druif)',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              fontSize: 12.5,
              fontFamily: 'var(--font-nunito), Nunito, sans-serif',
              marginBottom: 8,
            }}
          >
            Prijzen
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--inkt)',
              marginBottom: 10,
            }}
          >
            Altijd gratis te starten
          </h2>
          <p style={{ color: 'var(--grijs)', fontSize: 17, maxWidth: 480, margin: '0 auto 48px', fontWeight: 600 }}>
            Upgrade naar Kwekkel Plus voor videobellen, Kwekstem-filters en meer contacten.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
            maxWidth: 820,
            margin: '0 auto',
          }}
          className="pricing-grid"
        >
          {/* Gratis */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 24,
              padding: '32px',
              border: '2px solid var(--mist)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: 'var(--inkt)',
                margin: '0 0 6px',
              }}
            >
              Kwekkel Gratis
            </h3>
            <div style={{ marginBottom: 4 }}>
              <span style={{ fontFamily: 'var(--font-baloo), Baloo 2, cursive', fontSize: '2.8rem', fontWeight: 800, color: 'var(--inkt)', lineHeight: 1 }}>€0</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--grijs)' }}>/maand</span>
            </div>
            <p style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--grijs)', margin: '0 0 22px' }}>
              Voor altijd gratis — geen creditcard nodig
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1 }}>
              {gratisFeatures.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, fontWeight: 700, color: 'var(--inkt)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16C098" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/aanmelden" className="btn btn-ghost" style={{ width: '100%', borderRadius: 14 }}>
              Op de wachtlijst
            </Link>
          </div>

          {/* Plus */}
          <div
            style={{
              backgroundColor: 'var(--druif)',
              borderRadius: 24,
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 12px 36px rgba(106,90,224,.32)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -13,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--koraal)',
                color: '#fff',
                borderRadius: 999,
                padding: '4px 16px',
                fontSize: 12,
                fontWeight: 800,
                whiteSpace: 'nowrap',
              }}
            >
              Meest gekozen
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#fff',
                margin: '0 0 6px',
              }}
            >
              Kwekkel Plus
            </h3>
            <div style={{ marginBottom: 4 }}>
              <span style={{ fontFamily: 'var(--font-baloo), Baloo 2, cursive', fontSize: '2.8rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>€3,99</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>/maand</span>
            </div>
            <p style={{ fontSize: 12.5, fontWeight: 700, color: 'rgba(255,255,255,0.8)', margin: '0 0 22px' }}>
              of €34,99/jaar — <span style={{ color: 'var(--zon)' }}>bespaar €12,89</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1 }}>
              {plusFeatures.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/aanmelden" className="btn btn-koraal" style={{ width: '100%', borderRadius: 14 }}>
              Op de wachtlijst
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
