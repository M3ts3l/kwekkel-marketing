const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4B3FB0" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
    iconBg: 'var(--druif-l)',
    numBg: 'var(--druif)',
    numColor: '#fff',
    number: '1',
    title: 'Ouder maakt een account',
    description: 'Jij registreert je met e-mailadres en een PIN. Eenvoudig en snel.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a5200" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5"/>
        <path d="M3 21v-1a9 9 0 0118 0v1"/>
      </svg>
    ),
    iconBg: 'var(--zon-l)',
    numBg: 'var(--zon)',
    numColor: 'var(--inkt)',
    number: '2',
    title: 'Kind krijgt een eigen eend',
    description: 'Kies een naam, avatar en PIN. Je kind logt in met alleen die twee dingen.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a5200" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 3v18M3 9h18"/>
      </svg>
    ),
    iconBg: 'var(--zon-l)',
    numBg: 'var(--koraal)',
    numColor: '#fff',
    number: '3',
    title: 'Vriendjes toevoegen via QR',
    description: 'Samen een QR-code scannen — in het echt, naast elkaar. Geen vreemden die zomaar binnenkomen.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0E8C70" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    iconBg: 'var(--munt-l)',
    numBg: 'var(--munt)',
    numColor: '#fff',
    number: '4',
    title: 'Jij houdt overzicht',
    description: 'In je ouder-dashboard zie je signalen wanneer het nodig is. De rest is privé voor je kind.',
  },
]

export default function HoeHetWerkt() {
  return (
    <section className="section" id="hoe-het-werkt" style={{ backgroundColor: 'var(--wolk)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
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
            Hoe werkt het?
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
            In vier stappen klaar
          </h2>
          <p style={{ color: 'var(--grijs)', fontSize: 17, maxWidth: 480, margin: '0 auto', fontWeight: 600 }}>
            Van aanmelden tot veilig chatten met vriendjes — eenvoudig geregeld.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }}
          className="steps-grid"
        >
          {steps.map((step) => (
            <div key={step.number} style={{ textAlign: 'center' }}>
              <div className="step-icon-wrap">
                <div className="step-icon" style={{ background: step.iconBg }}>
                  {step.icon}
                </div>
                <div className="step-num" style={{ background: step.numBg, color: step.numColor }}>
                  {step.number}
                </div>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--inkt)',
                  margin: '0 0 8px',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--grijs)',
                  fontWeight: 600,
                  lineHeight: 1.75,
                  margin: '0 auto',
                  maxWidth: 200,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
