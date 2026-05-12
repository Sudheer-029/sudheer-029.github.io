import { perspectives } from '../data'

const colorMap = { cyan: '#22d3ee', emerald: '#34d399', violet: '#a78bfa' }

export default function Perspectives() {
  return (
    <section id="connect" style={{ padding: '120px 24px', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <div style={{ position: 'relative', marginBottom: 72, paddingTop: 40 }}>
        <span className="section-number">05</span>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>05 / Depending on the lens</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Same person, <span className="gradient-text-violet">three angles.</span>
          </h2>
          <p style={{ color: '#94a3b8', marginTop: 16, fontSize: '0.98rem', lineHeight: 1.7, maxWidth: 560 }}>
            AI, eCommerce, or client-facing work — pick the version that fits what you're looking at.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 64 }}>
        {perspectives.map((p, i) => {
          const c = colorMap[p.color]
          return (
            <div key={i} className="card" style={{ padding: '28px', borderColor: `${c}22` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                <span className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: c }}>{p.role}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: 20, lineHeight: 1.5 }}>{p.headline}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {p.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    <span style={{ color: c, flexShrink: 0, marginTop: 2 }}>→</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <a href={p.resume} download style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: 10, border: `1px solid ${c}44`, color: c, fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = `${c}15`}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                Download {p.role} Resume ↓
              </a>
            </div>
          )
        })}
      </div>

      {/* Contact */}
      <div style={{ background: '#111633', border: '1px solid #1e2a4a', borderRadius: 20, padding: '48px 32px', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
        <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 8 }}>Good conversations welcome.</h3>
        <p style={{ color: '#64748b', marginBottom: 32, fontSize: '0.9rem' }}>Drop a note — I read everything.</p>
        <a href="mailto:sudheerdudi00@gmail.com"
          style={{ display: 'inline-block', padding: '14px 36px', borderRadius: 999, background: 'linear-gradient(135deg, #22d3ee, #a78bfa)', color: '#060918', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', marginBottom: 28 }}>
          sudheerdudi00@gmail.com
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          {[
            { label: 'LinkedIn', url: 'https://linkedin.com/in/sudheer-bishnoi', color: '#22d3ee' },
            { label: 'GitHub',   url: 'https://github.com/Sudheer-029',          color: '#a78bfa' },
          ].map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noopener"
              style={{ fontSize: '0.85rem', color: l.color, textDecoration: 'none', borderBottom: `1px solid ${l.color}44`, paddingBottom: 2 }}>
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

