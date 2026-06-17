import type { Metadata } from 'next'
import Features from '@/components/Features'
import HoeHetWerkt from '@/components/HoeHetWerkt'
import Prijzen from '@/components/Prijzen'
import BlogPreview from '@/components/BlogPreview'
import QuickSignup from '@/components/QuickSignup'

export const metadata: Metadata = {
  title: 'Kwekkel — Veilig kletsen en bellen voor kinderen',
  description:
    'Kwekkel is een besloten chat- en belapp voor kinderen van 6 tot 11 jaar. Geen vreemden. Geen advertenties. Toezicht zonder meelezen. Nu in beta — zet je op de wachtlijst!',
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '100px 0 72px',
          background: `
            radial-gradient(ellipse 70% 50% at 60% 40%, rgba(106,90,224,0.09) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(255,194,60,0.08) 0%, transparent 60%),
            var(--wolk)
          `,
        }}
      >
        <div className="container">
          <div className="hero-grid">

            {/* Left: tekst + formulier */}
            <div>
              <div className="beta-pill" style={{ marginBottom: 20 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7a5200" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Nu in beta — schrijf je in voor vroege toegang
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  margin: '0 0 18px',
                  color: 'var(--inkt)',
                  letterSpacing: '-0.5px',
                }}
              >
                Veilig kletsen<br />en bellen voor<br />
                <span style={{ color: 'var(--druif)' }}>jouw kind</span>
              </h1>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--grijs)',
                  fontWeight: 600,
                  maxWidth: 460,
                  lineHeight: 1.8,
                  margin: '0 0 28px',
                }}
              >
                Kwekkel is een besloten chat- en belapp voor kinderen van 6 tot 11 jaar.{' '}
                <strong style={{ color: 'var(--inkt)' }}>Geen vreemden. Geen advertenties.</strong>{' '}
                Toezicht voor ouders, zonder meelezen.
              </p>

              <QuickSignup />

              {/* Social proof */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginTop: 18,
                  fontSize: 14,
                  color: 'var(--grijs)',
                  fontWeight: 700,
                }}
              >
                <div style={{ display: 'flex' }}>
                  {(['👩', '👨', '👩', '👨'] as const).map((emoji, i) => (
                    <span
                      key={i}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        border: '2.5px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        marginLeft: i === 0 ? 0 : -8,
                        background: 'var(--druif-l)',
                      }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
                <span>
                  Al meer dan{' '}
                  <strong style={{ color: 'var(--inkt)' }}>1.200 ouders</strong> staan op de lijst
                </span>
              </div>
            </div>

            {/* Right: telefoon-mockup */}
            <div className="hero-phone">
              <div style={{ position: 'relative', padding: '20px 80px' }}>
                <div className="float-anim">
                  {/* Telefoon */}
                  <div
                    style={{
                      background: 'var(--inkt)',
                      border: '3px solid #3d3b55',
                      borderRadius: 44,
                      padding: 14,
                      boxShadow: '0 32px 72px rgba(43,43,64,.22), 0 0 0 1px rgba(255,255,255,0.04)',
                      width: 250,
                    }}
                  >
                    <div
                      style={{
                        background: 'var(--wolk)',
                        borderRadius: 32,
                        overflow: 'hidden',
                        aspectRatio: '9 / 18',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {/* Statusbalk */}
                      <div style={{ padding: '11px 14px 5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--wolk)' }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--inkt)' }}>9:41</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
                            <rect x="0" y="2.5" width="2" height="6.5" rx="1" fill="#2B2B40"/>
                            <rect x="3" y="1.5" width="2" height="7.5" rx="1" fill="#2B2B40"/>
                            <rect x="6" y="0" width="2" height="9" rx="1" fill="#2B2B40"/>
                            <rect x="9" y="0" width="2" height="9" rx="1" fill="#2B2B40" opacity=".25"/>
                          </svg>
                          <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                            <rect x="0" y="0" width="9" height="6.5" rx="1.5" stroke="#2B2B40" strokeWidth="1.2"/>
                            <rect x="1" y="1" width="6" height="4.5" rx="0.5" fill="#16C098"/>
                            <rect x="9.5" y="2" width="1" height="2.5" rx="0.5" fill="#2B2B40"/>
                          </svg>
                        </div>
                      </div>

                      {/* Chat header */}
                      <div style={{ padding: '7px 14px 10px', borderBottom: '1.5px solid var(--mist)', background: '#fff', display: 'flex', alignItems: 'center', gap: 9 }}>
                        <div style={{ width: 34, height: 34, background: 'var(--druif-l)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🦊</div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-baloo), Baloo 2, cursive', fontSize: 13, fontWeight: 700, color: 'var(--inkt)' }}>Lars</div>
                          <div style={{ fontSize: 10, color: 'var(--munt)', fontWeight: 700 }}>● Online</div>
                        </div>
                      </div>

                      {/* Berichten */}
                      <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--wolk)', overflow: 'hidden' }}>
                        <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                          <div style={{ background: '#fff', borderRadius: '16px 16px 16px 4px', padding: '8px 12px', fontSize: 11, fontWeight: 600, color: 'var(--inkt)', boxShadow: '0 2px 8px rgba(60,40,140,.07)', lineHeight: 1.45 }}>
                            Hé! Ga je mee spelen? 🎮
                          </div>
                          <div style={{ fontSize: 9, color: 'var(--grijs)', marginTop: 2, paddingLeft: 4, fontWeight: 700 }}>Lars · 14:32</div>
                        </div>
                        <div style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
                          <div style={{ background: 'var(--druif)', borderRadius: '16px 16px 4px 16px', padding: '8px 12px', fontSize: 11, fontWeight: 600, color: '#fff', lineHeight: 1.45 }}>
                            Ja! Om 4 uur! ⚽
                          </div>
                          <div style={{ fontSize: 9, color: 'var(--grijs)', marginTop: 2, textAlign: 'right', paddingRight: 4, fontWeight: 700 }}>Jij · 14:33</div>
                        </div>
                        <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                          <div style={{ background: '#fff', borderRadius: '16px 16px 16px 4px', padding: '8px 12px', fontSize: 11, fontWeight: 600, color: 'var(--inkt)', boxShadow: '0 2px 8px rgba(60,40,140,.07)', lineHeight: 1.45 }}>
                            Top! Tot dan 👋
                          </div>
                          <div style={{ fontSize: 9, color: 'var(--grijs)', marginTop: 2, paddingLeft: 4, fontWeight: 700 }}>Lars · 14:33</div>
                        </div>
                        {/* Versleuteld-indicator */}
                        <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'var(--munt-l)', borderRadius: 999, padding: '4px 12px' }}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E8C70" strokeWidth="2.5">
                              <rect x="3" y="11" width="18" height="11" rx="2"/>
                              <path d="M7 11V7a5 5 0 0110 0v4"/>
                            </svg>
                            <span style={{ fontSize: 9, color: 'var(--munt-d)', fontWeight: 800 }}>Versleuteld</span>
                          </span>
                        </div>
                      </div>

                      {/* Invoerveld */}
                      <div style={{ padding: '8px 10px', background: '#fff', borderTop: '1.5px solid var(--mist)' }}>
                        <div style={{ background: 'var(--wolk)', border: '1.5px solid var(--mist)', borderRadius: 22, padding: '7px 12px', fontSize: 10, fontWeight: 600, color: 'var(--grijs)' }}>
                          Typ een berichtje…
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zwevend kaartje links */}
                <div style={{ position: 'absolute', left: 0, top: 76, background: '#fff', borderRadius: 14, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 6px 20px rgba(60,40,140,.12)', minWidth: 148 }}>
                  <div style={{ width: 32, height: 32, background: 'var(--munt-l)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E8C70" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-baloo), Baloo 2, cursive', fontSize: 11, fontWeight: 700, color: 'var(--munt-d)' }}>Veilig netwerk</div>
                    <div style={{ fontSize: 9, color: 'var(--grijs)', fontWeight: 700 }}>Alleen vrienden</div>
                  </div>
                </div>

                {/* Zwevend kaartje rechts */}
                <div style={{ position: 'absolute', right: 0, bottom: 100, background: '#fff', borderRadius: 14, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 6px 20px rgba(60,40,140,.12)', minWidth: 136 }}>
                  <div style={{ width: 32, height: 32, background: 'var(--zon-l)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7a5200" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-baloo), Baloo 2, cursive', fontSize: 11, fontWeight: 700, color: '#7a5200' }}>Schermtijd</div>
                    <div style={{ fontSize: 9, color: 'var(--grijs)', fontWeight: 700 }}>Automatisch begrensd</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────── */}
      <div style={{ background: 'var(--druif-l)', borderTop: '1.5px solid var(--mist)', borderBottom: '1.5px solid var(--mist)' }}>
        <div className="trust-inner">
          <div className="trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4B3FB0" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Geen vreemden
          </div>
          <div className="trust-sep"/>
          <div className="trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4B3FB0" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            Geen advertenties
          </div>
          <div className="trust-sep"/>
          <div className="trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4B3FB0" strokeWidth="2.5"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            Ouders lezen niet mee
          </div>
          <div className="trust-sep"/>
          <div className="trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4B3FB0" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Gemaakt in Nederland
          </div>
          <div className="trust-sep"/>
          <div className="trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4B3FB0" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            End-to-end versleuteld
          </div>
        </div>
      </div>

      {/* ── Features, Stappen, Prijzen, Blog ─────────── */}
      <Features />
      <HoeHetWerkt />
      <Prijzen />
      <BlogPreview />

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--druif) 0%, var(--druif-d) 100%)',
          padding: '88px 0',
          color: '#fff',
        }}
      >
        <div className="container text-center">
          <svg width="68" height="68" viewBox="0 0 64 64" aria-hidden="true" style={{ margin: '0 auto 20px' }}>
            <circle cx="30" cy="35" r="20" fill="#FFC23C"/>
            <path d="M30 15 c1 -6 8 -7 10 -3 c-3 1 -6 4 -6 8 z" fill="#FFC23C"/>
            <circle cx="25" cy="30" r="3.6" fill="#2B2B40"/>
            <circle cx="26.3" cy="28.7" r="1.1" fill="#fff"/>
            <path d="M45 31 c10 0 13 4 13 6.5 c0 2.5 -3 6.5 -13 6.5 c-4 -4.5 -4 -8.5 0 -13 z" fill="#FF6F61"/>
          </svg>
          <h2
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 800,
              color: '#fff',
              margin: '0 0 12px',
            }}
          >
            Klaar voor vroege toegang?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.05rem',
              fontWeight: 600,
              maxWidth: 500,
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Kwekkel is nu in beta. Schrijf je in en ontvang als eerste een uitnodiging zodra de app beschikbaar is.
          </p>
          <div style={{ maxWidth: 560, margin: '28px auto 0', textAlign: 'left' }}>
            <QuickSignup variant="dark" />
          </div>
          <p style={{ marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 700 }}>
            Geen spam. Uitschrijven kan altijd.
          </p>
        </div>
      </section>
    </>
  )
}
