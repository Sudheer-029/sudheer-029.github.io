import { projects } from '../data'

const colorMap = { cyan: '#22d3ee', emerald: '#34d399', violet: '#a78bfa', pink: '#f472b6', amber: '#fbbf24' }

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 24px', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <div style={{ position: 'relative', marginBottom: 72, paddingTop: 40 }}>
        <span className="section-number">03</span>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>03 / On the side</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Open-source <span className="gradient-text-emerald">experiments.</span>
          </h2>
          <p style={{ color: '#94a3b8', marginTop: 16, fontSize: '0.98rem', lineHeight: 1.7, maxWidth: 560 }}>
            Weekend builds and hackathon projects — where I try new ideas before they show up at work.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {projects.map((p, i) => {
          const c = colorMap[p.color]
          return (
            <div key={i} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: '1.4rem' }}>{p.icon}</span>
                <h3 className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0' }}>{p.title}</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {p.tech.map((t, j) => (
                  <span key={j} style={{ fontSize: '0.7rem', color: c, background: `${c}15`, border: `1px solid ${c}33`, borderRadius: 999, padding: '2px 8px', fontFamily: 'var(--font-mono)' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener" style={{ fontSize: '0.8rem', color: c, border: `1px solid ${c}44`, borderRadius: 999, padding: '6px 14px', textDecoration: 'none', fontWeight: 600 }}>Live ↗</a>}
                {p.github && <a href={p.github} target="_blank" rel="noopener" style={{ fontSize: '0.8rem', color: '#94a3b8', border: '1px solid #1e2a4a', borderRadius: 999, padding: '6px 14px', textDecoration: 'none' }}>GitHub ↗</a>}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
