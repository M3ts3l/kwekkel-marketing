const features = [
  {
    icon: '🔒',
    title: 'Besloten & veilig',
    description:
      'Vriendjes toevoegen kan alleen door samen een QR-code te scannen. Een volwassen vreemde kan nooit zomaar contact maken.',
  },
  {
    icon: '👀',
    title: 'Toezicht zonder meelezen',
    description:
      'Jij ziet de signalen die ertoe doen: nieuwe contacten, meldingen, rusturen. De gesprekjes zelf zijn van je kind.',
  },
  {
    icon: '🦆',
    title: 'Speels, niet verslavend',
    description:
      'Een eigen eend-avatar, de Kwek!-ping en schermtijdlimieten die vanzelf stoppen. Blij zonder te verslaven.',
  },
]

export default function Features() {
  return (
    <section className="section" id="features" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'var(--font-baloo), Baloo 2, cursive',
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 800,
              color: 'var(--inkt)',
              marginBottom: 12,
            }}
          >
            Drie dingen die nergens samen voorkomen
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 20,
                padding: '36px 28px',
                boxShadow: '0 4px 24px rgba(43, 43, 64, 0.08)',
                border: '1px solid var(--mist)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 8px 32px rgba(43, 43, 64, 0.13)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 4px 24px rgba(43, 43, 64, 0.08)'
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 20, lineHeight: 1 }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-baloo), Baloo 2, cursive',
                  fontSize: 20,
                  fontWeight: 800,
                  color: 'var(--inkt)',
                  marginBottom: 10,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: 'var(--grijs)',
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
