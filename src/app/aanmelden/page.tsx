import type { Metadata } from 'next'
import WachtlijstForm from '@/components/WachtlijstForm'

export const metadata: Metadata = {
  title: 'Aanmelden voor de wachtlijst',
  description:
    'Zet je gezin op de wachtlijst voor Kwekkel. De eerste ouders krijgen vroege toegang tot de veilige chat- en bel-app voor kinderen.',
}

const badges = [
  { icon: '🇳🇱', label: 'Gemaakt in Nederland' },
  { icon: '🚫', label: 'Geen advertenties' },
  { icon: '👨‍👩‍👧‍👦', label: 'Per gezin, niet per kind' },
]

export default function AanmeldenPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: 'var(--druif)',
          padding: '72px 0 80px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div style={{ fontSize: 56, marginBottom: 20, lineHeight: 1 }}>🐥</div>
          <h1
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            Wees er als eerste bij
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 18,
              fontWeight: 600,
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            Meld je gezin aan voor de wachtlijst en krijg vroege toegang tot Kwekkel — de veilige chat-app voor je kind.
          </p>
        </div>
      </section>

      {/* Form sectie */}
      <section className="section" style={{ backgroundColor: 'var(--wolk)' }}>
        <div className="container">
          <div
            style={{
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            {/* Form card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 24,
                padding: '40px 36px',
                boxShadow: '0 8px 40px rgba(43, 43, 64, 0.10)',
                border: '1px solid var(--mist)',
                marginBottom: 24,
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: 22,
                  fontWeight: 800,
                  color: 'var(--inkt)',
                  margin: '0 0 24px',
                  textAlign: 'center',
                }}
              >
                Aanmelden voor wachtlijst
              </h2>
              <WachtlijstForm />
            </div>

            {/* Ondertekst */}
            <p
              style={{
                textAlign: 'center',
                color: 'var(--grijs)',
                fontSize: 13,
                fontWeight: 600,
                margin: '0 0 32px',
              }}
            >
              Geen spam · Geen dataverkoop · Altijd uitschrijven
            </p>

            {/* Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                justifyContent: 'center',
              }}
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    backgroundColor: '#ffffff',
                    border: '2px solid var(--mist)',
                    borderRadius: 40,
                    padding: '8px 18px',
                  }}
                >
                  <span style={{ fontSize: 18 }}>{badge.icon}</span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      color: 'var(--inkt)',
                    }}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
