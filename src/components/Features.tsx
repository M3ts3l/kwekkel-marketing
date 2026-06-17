const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B3FB0" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    bg: 'var(--druif-l)',
    title: 'Besloten netwerk',
    description: 'Vrienden toevoegen kan alleen via QR-code, samen in dezelfde ruimte. Geen onbekenden mogelijk.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7a5200" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    bg: 'var(--zon-l)',
    title: 'Ouder-dashboard',
    description: 'Zie signalen, nieuwe contacten en rustmomenten. Toezicht zonder berichten te lezen.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E8C70" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    bg: 'var(--munt-l)',
    title: 'Schermtijdlimieten',
    description: 'Automatische begrenzingen ingebouwd. Geen eindeloos scrollen — Kwekkel gaat op tijd dicht.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7a5200" strokeWidth="2">
        <circle cx="12" cy="8" r="5"/>
        <path d="M3 21v-1a9 9 0 0118 0v1"/>
      </svg>
    ),
    bg: 'var(--zon-l)',
    title: 'Eigen Kwek!',
    description: 'Elk kind ontwerpt zijn eigen eend-avatar, de Kwek! — leuk, herkenbaar en zonder echte foto\'s.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06425e" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    bg: 'var(--lucht-l)',
    title: 'Videobellen',
    description: 'Bel veilig met vrienden via video. Met Kwekstem-stemfilters voor extra plezier.',
    plus: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D64A3D" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    bg: 'var(--koraal-l)',
    title: 'End-to-end versleuteld',
    description: 'Alle berichten zijn versleuteld. Ook wij kunnen ze niet lezen — zo hoort het.',
  },
]

export default function Features() {
  return (
    <section className="section" id="functies" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
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
            Functies
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
            Alles wat jouw kind nodig heeft.<br />
            <span style={{ color: 'var(--druif)' }}>Niets wat het niet nodig heeft.</span>
          </h2>
          <p style={{ color: 'var(--grijs)', fontSize: 17, maxWidth: 480, margin: '0 auto', fontWeight: 600, lineHeight: 1.75 }}>
            Kwekkel is ontworpen om niet verslavend te zijn — plezierig voor kinderen, gerust voor jou.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 18,
          }}
          className="features-grid"
        >
          {features.map((feat) => (
            <div
              key={feat.title}
              className="feature-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 20,
                padding: '26px',
                boxShadow: '0 6px 20px rgba(60,40,140,.07)',
                border: '1px solid var(--mist)',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: feat.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  flexShrink: 0,
                }}
              >
                {feat.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--inkt)',
                  margin: '0 0 6px',
                }}
              >
                {feat.title}
                {feat.plus && <span className="plus-badge">Plus</span>}
              </h3>
              <p style={{ color: 'var(--grijs)', fontSize: 14, lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
