import { useState, useRef, useEffect } from 'react'
import { caseStudies } from '../data'

const colorMap = { cyan: '#22d3ee', emerald: '#34d399', violet: '#a78bfa', pink: '#f472b6', amber: '#fbbf24' }

function CaseCard({ cs }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(); const [vis, setVis] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.disconnect() } }, { threshold: 0.1 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  const c = colorMap[cs.color]
  return (
    <div ref={ref} className="card" style={{ padding: '28px', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.5s, transform 0.5s', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <span style={{ fontSize: '0.7rem', color: c, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{cs.tag}</span>
          <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e2e8f0', marginTop: 4 }}>
            <span style={{ marginRight: 8 }}>{cs.icon}</span>{cs.title}
          </h3>
          <p style={{ fontSize: '0.83rem', color: '#64748b', marginTop: 2 }}>{cs.subtitle}</p>
        </div>
        <span style={{ color: '#64748b', fontSize: '1.2rem', marginLeft: 16, flexShrink: 0, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'none' }}>↓</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }}>
        {cs.metrics.map((m, i) => (
          <div key={i} style={{ background: '#0c1029', borderRadius: 10, padding: '12px', textAlign: 'center', border: `1px solid ${c}22` }}>
            <div className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: c }}>{m.value}</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {open && (
        <div style={{ borderTop: '1px solid #1e2a4a', paddingTop: 20, marginTop: 8 }}>
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Problem</span>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: 4, lineHeight: 1.65 }}>{cs.problem}</p>
          </div>
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What I Built</span>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: 4, lineHeight: 1.65 }}>{cs.solution}</p>
          </div>
          <div style={{ marginBottom: cs.liveUrl ? 16 : 0 }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Outcome</span>
            <p style={{ color: '#e2e8f0', fontSize: '0.88rem', marginTop: 4, lineHeight: 1.65, fontWeight: 500 }}>{cs.outcome}</p>
          </div>
          {(cs.liveUrl || cs.githubUrl) && (
            <div style={{ display: 'flex', gap: 12 }}>
              {cs.liveUrl && <a href={cs.liveUrl} target="_blank" rel="noopener" onClick={e => e.stopPropagation()} style={{ padding: '8px 18px', borderRadius: 999, background: c, color: '#060918', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>Live Demo ↗</a>}
              {cs.githubUrl && <a href={cs.githubUrl} target="_blank" rel="noopener" onClick={e => e.stopPropagation()} style={{ padding: '8px 18px', borderRadius: 999, border: `1px solid ${c}44`, color: c, fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>GitHub ↗</a>}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Proof() {
  return (
    <section id="proof" style={{ padding: '120px 24px', maxWidth: 960, margin: '0 auto', position: 'relative' }}>
      <div style={{ position: 'relative', marginBottom: 72, paddingTop: 40 }}>
        <span className="section-number">02</span>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>02 / Selected work</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            A few things <span className="gradient-text-violet">I'm proud of.</span>
          </h2>
          <p style={{ color: '#94a3b8', marginTop: 16, fontSize: '0.98rem', lineHeight: 1.7, maxWidth: 560 }}>
            Tap any card for the problem, what I built, and what happened after it shipped.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {caseStudies.map(cs => <CaseCard key={cs.id} cs={cs} />)}
      </div>
    </section>
  )
}
