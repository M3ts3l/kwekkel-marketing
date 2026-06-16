import Link from 'next/link'

const gratisFeatures = [
  'Kern-chat met een paar contacten',
  'Eigen eend-avatar',
  'De Kwek!-ping',
  'Ouder-dashboard',
]

const plusFeatures = [
  'Alles van Gratis, plus:',
  '(Video)bellen',
  'Meer contacten & media',
  'Kwekstem-stemfilters',
  'Extra eend-items',
  'Uitgebreide schermtijd',
]

export default function Prijzen() {
  return (
    <section
      className="section"
      id="prijzen"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: 16 }}>
          <h2
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 800,
              color: 'var(--inkt)',
              marginBottom: 12,
            }}
          >
            Eerlijk en per gezin
          </h2>
          <p
            style={{
              color: 'var(--grijs)',
              fontSize: 17,
              maxWidth: 480,
              margin: '0 auto 48px',
            }}
          >
            Eén prijs voor het hele gezin. Geen losse kosten per kind.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            maxWidth: 760,
            margin: '0 auto',
          }}
        >
          {/* Gratis kaart */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 24,
              padding: '36px 32px',
              border: '2px solid var(--mist)',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontSize: 22,
                fontWeight: 800,
                color: 'var(--inkt)',
                margin: '0 0 4px',
              }}
            >
              Gratis
            </h3>
            <p
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: 'var(--inkt)',
                margin: '12px 0 24px',
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              }}
            >
              €0
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                flexGrow: 1,
              }}
            >
              {gratisFeatures.map((f) => (
                <li
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontSize: 15,
                    color: 'var(--grijs)',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: 'var(--munt)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/aanmelden" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
              Probeer gratis
            </Link>
          </div>

          {/* Plus kaart */}
          <div
            style={{
              backgroundColor: 'var(--druif-l)',
              borderRadius: 24,
              padding: '36px 32px',
              border: '2px solid var(--druif)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Badge */}
            <div
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                backgroundColor: 'var(--zon)',
                color: 'var(--inkt)',
                fontSize: 12,
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: 20,
                letterSpacing: '0.03em',
              }}
            >
              Meest gekozen
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                fontSize: 22,
                fontWeight: 800,
                color: 'var(--druif-d)',
                margin: '0 0 4px',
              }}
            >
              Kwekkel Plus
            </h3>
            <div style={{ margin: '12px 0 24px' }}>
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: 'var(--druif)',
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                }}
              >
                €3,99
              </span>
              <span style={{ fontSize: 15, color: 'var(--druif-d)', fontWeight: 600 }}>
                /mnd
              </span>
              <p
                style={{
                  margin: '4px 0 0',
                  fontSize: 13,
                  color: 'var(--druif-d)',
                  fontWeight: 700,
                }}
              >
                of €34,99/jaar (bespaar 2 maanden)
              </p>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                flexGrow: 1,
              }}
            >
              {plusFeatures.map((f, i) => (
                <li
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontSize: 15,
                    color: i === 0 ? 'var(--druif-d)' : 'var(--inkt)',
                    fontWeight: i === 0 ? 700 : 600,
                  }}
                >
                  {i !== 0 && (
                    <span style={{ color: 'var(--druif)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  )}
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/aanmelden"
              className="btn btn-koraal"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Kies Plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
