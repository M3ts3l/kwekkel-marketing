const steps = [
  {
    number: '1',
    title: 'Ouder maakt een account',
    description: 'Jij registreert je met e-mailadres en een PIN. Eenvoudig en snel.',
  },
  {
    number: '2',
    title: 'Kind krijgt een eigen eend',
    description: 'Kies een naam, avatar en PIN. Je kind logt in met alleen die twee dingen.',
  },
  {
    number: '3',
    title: 'Vriendjes toevoegen via QR',
    description:
      'Samen een QR-code scannen — in het echt, naast elkaar. Geen vreemden die zomaar binnenkomen.',
  },
  {
    number: '4',
    title: 'Jij houdt overzicht',
    description:
      'In je ouder-dashboard zie je signalen wanneer het nodig is. De rest is privé voor je kind.',
  },
]

export default function HoeHetWerkt() {
  return (
    <section
      className="section"
      id="hoe-het-werkt"
      style={{ backgroundColor: 'var(--wolk)' }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 800,
              color: 'var(--inkt)',
              marginBottom: 12,
            }}
          >
            In vier stappen klaar
          </h2>
          <p style={{ color: 'var(--grijs)', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>
            Van aanmelden tot veilig chatten met vriendjes — eenvoudig geregeld.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 32,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: 56,
                  fontWeight: 800,
                  color: 'var(--druif)',
                  lineHeight: 1,
                  opacity: 0.9,
                }}
              >
                {step.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: 19,
                  fontWeight: 800,
                  color: 'var(--inkt)',
                  margin: 0,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: 'var(--grijs)',
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
