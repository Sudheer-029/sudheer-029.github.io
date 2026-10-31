import { useEffect, useState } from 'react'
import { person } from '../data'
import { colors } from '../theme'
import { prefersReducedMotion } from '../hooks'

const LINES = [
  { cmd: 'focus', out: 'LLM agents · RAG · MCP · human-in-the-loop' },
  { cmd: 'stack', out: 'Python · TypeScript · FastAPI · AWS Bedrock' },
  { cmd: 'ship', out: 'evals · tests · CI/CD · production' },
]

function Line({ cmd, out, typed }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div>
        <span style={{ color: '#34d399' }}>➜</span>{' '}
        <span style={{ color: '#22d3ee' }}>~/sudheer</span>{' '}
        <span style={{ color: colors.text }}>{typed ?? cmd}</span>
        {typed !== undefined && <span className="cursor" />}
      </div>
      {out && <div style={{ color: colors.muted, paddingLeft: 20 }}>{out}</div>}
    </div>
  )
}

function Terminal() {
  const [reduced] = useState(prefersReducedMotion)
  const [lineIdx, setLineIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    if (reduced) return
    const current = LINES[lineIdx]
    let timer
    if (phase === 'typing') {
      if (typed.length < current.cmd.length) timer = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 60)
      else timer = setTimeout(() => setPhase('output'), 280)
    } else if (phase === 'output') {
      timer = setTimeout(() => setPhase('pause'), 900)
    } else {
      timer = setTimeout(() => {
        setTyped('')
        setPhase('typing')
        setLineIdx(i => (i + 1) % LINES.length)
      }, 1800)
    }
    return () => clearTimeout(timer)
  }, [typed, phase, lineIdx, reduced])

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal-head">
        <span className="terminal-dot" style={{ background: '#ff5f57' }} />
        <span className="terminal-dot" style={{ background: '#febc2e' }} />
        <span className="terminal-dot" style={{ background: '#28c840' }} />
        <span style={{ marginLeft: 10, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: colors.faint }}>sudheer · ~/work</span>
      </div>
      <div className="terminal-body">
        {reduced
          ? LINES.map(l => <Line key={l.cmd} {...l} />)
          : <>
              {LINES.slice(0, lineIdx).map(l => <Line key={l.cmd} {...l} />)}
              <Line cmd={LINES[lineIdx].cmd} typed={typed} out={phase !== 'typing' ? LINES[lineIdx].out : null} />
            </>}
      </div>
    </div>
  )
}

// Badges sit on the terminal's corners only, so they never cover its text.
const BADGES = [
  { label: 'Claude', color: '#a78bfa', top: '-16px', left: '-18px', delay: '0s' },
  { label: 'MCP', color: '#34d399', top: '-16px', right: '24px', delay: '1.2s' },
  { label: 'AWS Bedrock', color: '#fbbf24', bottom: '-16px', right: '-8px', delay: '2.4s' },
]

export default function Hero() {
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 96px' }}>
      {[{ top: '8%', left: '3%', color: '#22d3ee', size: 520 }, { top: '55%', right: '2%', color: '#a78bfa', size: 440 }].map((o, i) => (
        <div key={i} className="float" aria-hidden="true" style={{ position: 'absolute', borderRadius: '50%', width: o.size, height: o.size, background: `radial-gradient(circle, ${o.color}12, transparent 70%)`, top: o.top, left: o.left, right: o.right, pointerEvents: 'none' }} />
      ))}

      <div className="hero-grid" style={{ maxWidth: 1200, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)', gap: 72, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: colors.card, border: '1px solid #22d3ee33', borderRadius: 999, padding: '6px 16px', marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px #34d399' }} />
            <span style={{ fontSize: '0.78rem', color: colors.body, fontFamily: 'var(--font-mono)' }}>{person.status}</span>
          </div>

          <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: 12, letterSpacing: '-0.025em' }}>
            <span style={{ color: colors.text }}>Sudheer </span><span className="gradient-text-cyan">Bishnoi</span>
          </h1>
          <p className="font-display" style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', color: '#22d3ee', fontWeight: 600, marginBottom: 20 }}>{person.role}</p>

          <p style={{ fontSize: 'clamp(1.02rem, 1.6vw, 1.18rem)', color: colors.body, maxWidth: 580, lineHeight: 1.6, marginBottom: 14 }}>{person.tagline}</p>
          <p style={{ fontSize: '0.95rem', color: colors.muted, maxWidth: 580, lineHeight: 1.7, marginBottom: 34 }}>{person.sub}</p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
            <button className="btn-primary" onClick={scrollToWork}>See my work <span aria-hidden="true">→</span></button>
            <a href={`mailto:${person.email}`} className="btn-ghost">Email me</a>
            {person.cvUrl && <a href={person.cvUrl} className="btn-ghost" download>Download CV</a>}
          </div>

          <div className="hero-chips" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingTop: 22, borderTop: `1px dashed ${colors.border}` }}>
            <span className="chip">{person.availability}</span>
            <span className="chip">{person.languages}</span>
          </div>
        </div>

        <div className="hero-right" style={{ position: 'relative' }}>
          <Terminal />
          {BADGES.map(b => (
            <div key={b.label} className="chip float-slow" aria-hidden="true" style={{ position: 'absolute', top: b.top, left: b.left, right: b.right, bottom: b.bottom, animationDelay: b.delay, borderColor: `${b.color}55`, color: b.color, background: '#0c1029' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: b.color }} />{b.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 48px !important; }
          .hero-chips .chip { white-space: normal; }
          .hero-right { margin: 0 8px; }
        }
      `}</style>
    </section>
  )
}
