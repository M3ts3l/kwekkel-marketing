import type { Metadata } from 'next'
import Link from 'next/link'
import Features from '@/components/Features'
import HoeHetWerkt from '@/components/HoeHetWerkt'
import Prijzen from '@/components/Prijzen'
import BlogPreview from '@/components/BlogPreview'

export const metadata: Metadata = {
  title: 'Kwekkel — Veilig chatten en bellen voor kinderen',
  description:
    'Kwekkel is de veilige chat- en bel-app voor kinderen van 6–11 jaar. Geen vreemden, geen advertenties, toezicht zonder meelezen. Gebouwd in Nederland.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: 'var(--druif)',
          padding: '80px 0 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blob */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.06)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: -120,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            pointerEvents: 'none',
          }}
        />

        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 40,
              alignItems: 'center',
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: 40,
                  padding: '6px 16px',
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 16 }}>🇳🇱</span>
                <span
                  style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: '0.04em',
                  }}
                >
                  Gemaakt in Nederland
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: 'clamp(32px, 5.5vw, 56px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  margin: '0 0 20px',
                  letterSpacing: '-0.5px',
                }}
              >
                Veilig kletsen en bellen — speciaal voor kinderen
              </h1>

              <p
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 19px)',
                  color: 'rgba(255,255,255,0.85)',
                  margin: '0 0 36px',
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                Geen vreemden. Geen advertenties. Toezicht zonder meelezen.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 14,
                  alignItems: 'center',
                }}
              >
                <Link href="/aanmelden" className="btn btn-koraal" style={{ fontSize: 17 }}>
                  Zet je op de wachtlijst 🐥
                </Link>
              </div>
            </div>

            {/* Logo illustration */}
            <div
              style={{
                flexShrink: 0,
                filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.20))',
              }}
              aria-hidden="true"
            >
              <img
                src="/kwekkel-logo.svg"
                alt=""
                style={{
                  width: 'clamp(120px, 16vw, 200px)',
                  height: 'clamp(120px, 16vw, 200px)',
                  borderRadius: 'clamp(24px, 3vw, 40px)',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            section > div > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Features */}
      <Features />

      {/* Hoe het werkt */}
      <HoeHetWerkt />

      {/* Prijzen */}
      <Prijzen />

      {/* Blog preview */}
      <BlogPreview />

      {/* CTA banner */}
      <section
        style={{
          backgroundColor: 'var(--druif)',
          padding: '80px 0',
        }}
      >
        <div className="container text-center">
          <h2
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: 16,
            }}
          >
            Klaar om je kind veilig te laten chatten?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 17,
              fontWeight: 600,
              maxWidth: 520,
              margin: '0 auto 36px',
            }}
          >
            Meld je gezin aan voor de wachtlijst. De eerste ouders krijgen vroege toegang.
          </p>
          <Link href="/aanmelden" className="btn btn-koraal" style={{ fontSize: 17 }}>
            Kom op de wachtlijst 🐥
          </Link>
        </div>
      </section>
    </>
  )
}
