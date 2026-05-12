import { skills } from '../data'

const colorMap = { cyan: '#22d3ee', emerald: '#34d399', violet: '#a78bfa', amber: '#fbbf24' }

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 24px', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <div style={{ position: 'relative', marginBottom: 72, paddingTop: 40 }}>
        <span className="section-number">04</span>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>04 / Toolkit</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            What I reach for <span className="gradient-text-cyan">day to day.</span>
          </h2>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
        {skills.map((s, i) => {
          const c = colorMap[s.color]
          return (
            <div key={i} className="card" style={{ padding: '24px' }}>
              <h3 className="font-display" style={{ fontSize: '0.9rem', fontWeight: 700, color: c, marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.items.map((item, j) => (
                  <span key={j} style={{ fontSize: '0.78rem', color: '#cbd5e1', background: '#0c1029', border: '1px solid #1e2a4a', borderRadius: 6, padding: '4px 10px' }}>{item}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
