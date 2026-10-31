import { useState, useEffect } from 'react'
import { person } from '../data'

const LINES = [
  { prompt: '~/sudheer', cmd: 'focus', out: 'Shopify · e-commerce operations · AI automation' },
  { prompt: '~/sudheer', cmd: 'build', out: 'APIs · validated workflows · human approval' },
  { prompt: '~/sudheer', cmd: 'collaborate', out: 'Agency delivery · white-label · integrations' },
]
function Terminal() {
  const [lineIdx, setLineIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState('typing')
  useEffect(() => {
    const current = LINES[lineIdx]
    let timer
    if (phase === 'typing') {
      if (typed.length < current.cmd.length) timer = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 55)
      else timer = setTimeout(() => setPhase('output'), 280)
    } else if (phase === 'output') timer = setTimeout(() => setPhase('pause'), 900)
    else timer = setTimeout(() => { setTyped(''); setPhase('typing'); setLineIdx(i => (i + 1) % LINES.length) }, 1800)
    return () => clearTimeout(timer)
  }, [typed, phase, lineIdx])
  return <div className="terminal">
    <div className="terminal-head"><span className="terminal-dot" style={{ background: '#ff5f57' }} /><span className="terminal-dot" style={{ background: '#febc2e' }} /><span className="terminal-dot" style={{ background: '#28c840' }} /><span style={{ marginLeft: 10, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748b' }}>sudheer · workflow studio</span></div>
    <div className="terminal-body">
      {LINES.slice(0, lineIdx).map((l, i) => <div key={i} style={{ marginBottom: 10 }}><div><span style={{ color: '#34d399' }}>➜</span>{' '}<span style={{ color: '#22d3ee' }}>{l.prompt}</span>{' '}<span style={{ color: '#e2e8f0' }}>{l.cmd}</span></div><div style={{ color: '#94a3b8', paddingLeft: 20 }}>{l.out}</div></div>)}
      <div><span style={{ color: '#34d399' }}>➜</span>{' '}<span style={{ color: '#22d3ee' }}>{LINES[lineIdx].prompt}</span>{' '}<span style={{ color: '#e2e8f0' }}>{typed}</span><span className="cursor" /></div>
      {phase !== 'typing' && <div style={{ color: '#94a3b8', paddingLeft: 20, marginTop: 4 }}>{LINES[lineIdx].out}</div>}
    </div>
  </div>
}
const FLOATERS = [
  { label: 'Shopify', color: '#34d399', top: '-18px', left: '-40px', delay: '0s' },
  { label: 'AI / LLMs', color: '#a78bfa', top: '22%', right: '-60px', delay: '1.2s' },
  { label: 'APIs', color: '#22d3ee', bottom: '28%', left: '-52px', delay: '2s' },
  { label: 'n8n', color: '#fbbf24', bottom: '-14px', right: '10%', delay: '2.8s' },
  { label: 'Python', color: '#22d3ee', top: '42%', left: '-30px', delay: '0.6s' },
]
export default function Hero() {
  return <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 100px' }}>
    {[{ top: '8%', left: '3%', color: '#22d3ee', size: 520 }, { top: '55%', right: '2%', color: '#a78bfa', size: 440 }, { top: '30%', left: '55%', color: '#34d399', size: 320 }].map((o, i) => <div key={i} className="float" style={{ position: 'absolute', borderRadius: '50%', width: o.size, height: o.size, background: `radial-gradient(circle, ${o.color}12, transparent 70%)`, top: o.top, left: o.left, right: o.right, pointerEvents: 'none' }} />)}
    <div className="hero-grid" style={{ maxWidth: 1200, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 72, alignItems: 'center' }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#111633', border: '1px solid #22d3ee33', borderRadius: 999, padding: '6px 16px', marginBottom: 28 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px #34d399' }} /><span style={{ fontSize: '0.78rem', color: '#cbd5e1', fontFamily: 'var(--font-mono)' }}>{person.status}</span></div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#64748b', marginBottom: 14 }}>E-commerce · Shopify · AI</div>
        <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: 20, letterSpacing: '-0.025em' }}><span style={{ color: '#e2e8f0' }}>Sudheer </span><span className="gradient-text-cyan">Bishnoi</span></h1>
        <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: '#cbd5e1', maxWidth: 560, lineHeight: 1.6, marginBottom: 14 }}>{person.tagline}</p>
        <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>{person.sub}</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}><button className="btn-primary" onClick={() => document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' })}>Explore selected work <span>→</span></button><a href={`mailto:${person.email}`} className="btn-ghost">Discuss a project</a></div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px dashed #1e2a4a' }}>{['Shopify & e-commerce', 'AI workflow automation', 'API integrations', 'Agency partnerships'].map(item => <span key={item} className="chip">{item}</span>)}</div>
      </div>
      <div className="hero-right" style={{ position: 'relative', marginTop: '-80px' }}><Terminal />{FLOATERS.map((f, i) => <div key={i} className="chip float-slow" style={{ position: 'absolute', top: f.top, left: f.left, right: f.right, bottom: f.bottom, animationDelay: f.delay, borderColor: `${f.color}55`, color: f.color, background: `${f.color}10` }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: f.color }} />{f.label}</div>)}</div>
    </div>
    <div className="scroll-indicator"><span>SCROLL</span><div className="scroll-mouse" /></div>
    <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; } .hero-right { margin-top: 12px !important; } }`}</style>
  </section>
}