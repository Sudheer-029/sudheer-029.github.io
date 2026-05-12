import { useState, useEffect, useRef } from 'react'
import { person, stats } from '../data'

function CountUp({ target, suffix, duration = 2000 }) {
  const [val, setVal] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      observer.disconnect()
      const start = Date.now()
      const isFloat = String(target).includes('.')
      const tick = () => {
        const p = Math.min((Date.now() - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        const cur = isFloat ? (target * ease).toFixed(1) : Math.floor(target * ease)
        setVal(cur)
        if (p < 1) requestAnimationFrame(tick)
        else setVal(isFloat ? target.toFixed(1) : target)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ─── Typing terminal ──────────────────────────────────────────── */
const LINES = [
  { prompt: '~/sudheer', cmd: 'whoami', out: 'Sudheer Bishnoi · AI Ops Specialist @ Amazon' },
  { prompt: '~/sudheer', cmd: 'cat focus.md', out: 'AI tooling · RAG · MCP · catalog automation' },
  { prompt: '~/sudheer', cmd: 'ls recent/', out: 'mcp-server/  rag-bedrock/  electaguide/' },
]

function Terminal() {
  const [lineIdx, setLineIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState('typing') // typing → output → pause → next

  useEffect(() => {
    const current = LINES[lineIdx]
    let timer
    if (phase === 'typing') {
      if (typed.length < current.cmd.length) {
        timer = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 55)
      } else {
        timer = setTimeout(() => setPhase('output'), 280)
      }
    } else if (phase === 'output') {
      timer = setTimeout(() => setPhase('pause'), 900)
    } else if (phase === 'pause') {
      timer = setTimeout(() => {
        setTyped('')
        setPhase('typing')
        setLineIdx((i) => (i + 1) % LINES.length)
      }, 1800)
    }
    return () => clearTimeout(timer)
  }, [typed, phase, lineIdx])

  const shown = LINES.slice(0, lineIdx)

  return (
    <div className="terminal">
      <div className="terminal-head">
        <span className="terminal-dot" style={{ background: '#ff5f57' }} />
        <span className="terminal-dot" style={{ background: '#febc2e' }} />
        <span className="terminal-dot" style={{ background: '#28c840' }} />
        <span style={{ marginLeft: 10, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748b' }}>
          sudheer@amazon — zsh
        </span>
      </div>
      <div className="terminal-body">
        {shown.map((l, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div>
              <span style={{ color: '#34d399' }}>➜</span>{' '}
              <span style={{ color: '#22d3ee' }}>{l.prompt}</span>{' '}
              <span style={{ color: '#e2e8f0' }}>{l.cmd}</span>
            </div>
            <div style={{ color: '#94a3b8', paddingLeft: 20 }}>{l.out}</div>
          </div>
        ))}
        <div>
          <span style={{ color: '#34d399' }}>➜</span>{' '}
          <span style={{ color: '#22d3ee' }}>{LINES[lineIdx].prompt}</span>{' '}
          <span style={{ color: '#e2e8f0' }}>{typed}</span>
          <span className="cursor" />
        </div>
        {phase !== 'typing' && (
          <div style={{ color: '#94a3b8', paddingLeft: 20, marginTop: 4 }}>{LINES[lineIdx].out}</div>
        )}
      </div>
    </div>
  )
}

/* ─── Floating tech chips around the terminal ──────────────────── */
const FLOATERS = [
  { label: 'Claude', color: '#a78bfa', top: '-18px', left: '-40px', delay: '0s' },
  { label: 'AWS Bedrock', color: '#fbbf24', top: '22%', right: '-60px', delay: '1.2s' },
  { label: 'MCP', color: '#22d3ee', bottom: '28%', left: '-52px', delay: '2s' },
  { label: 'RAG', color: '#34d399', bottom: '-14px', right: '10%', delay: '2.8s' },
  { label: 'Python', color: '#22d3ee', top: '42%', left: '-30px', delay: '0.6s' },
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 100px',
      }}
    >
      {/* Background orbs */}
      {[
        { top: '8%',  left: '3%',  color: '#22d3ee', size: 520, delay: '0s' },
        { top: '55%', right: '2%', color: '#a78bfa', size: 440, delay: '2s' },
        { top: '30%', left: '55%', color: '#34d399', size: 320, delay: '4s' },
      ].map((o, i) => (
        <div
          key={i}
          className="float"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color}12, transparent 70%)`,
            top: o.top,
            left: o.left,
            right: o.right,
            animationDelay: o.delay,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div
        style={{
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
          gap: 72,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* ── LEFT ── */}
        <div>
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#111633',
              border: '1px solid #22d3ee33',
              borderRadius: 999,
              padding: '6px 16px',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#34d399',
                boxShadow: '0 0 10px #34d399',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }}
            />
            <span style={{ fontSize: '0.78rem', color: '#cbd5e1', fontFamily: 'var(--font-mono)' }}>
              {person.status}
            </span>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#64748b', marginBottom: 14 }}>
            Hi — I'm
          </div>

          {/* Name */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 20,
              letterSpacing: '-0.025em',
            }}
          >
            <span style={{ color: '#e2e8f0' }}>Sudheer </span>
            <span className="gradient-text-cyan">Bishnoi</span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#cbd5e1',
              maxWidth: 560,
              lineHeight: 1.6,
              marginBottom: 14,
            }}
          >
            {person.tagline}
          </p>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#64748b',
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            {person.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse the work
              <span>→</span>
            </button>
            <a href={`mailto:${person.email}`} className="btn-ghost">
              Say hello
            </a>
          </div>

          {/* Inline micro-stats */}
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', paddingTop: 28, borderTop: '1px dashed #1e2a4a' }}>
            {stats.map((s, i) => {
              const colors = ['#a78bfa', '#22d3ee', '#34d399', '#fbbf24', '#f472b6']
              return (
                <div key={i}>
                  <div
                    className="font-display"
                    style={{ fontSize: '1.5rem', fontWeight: 700, color: colors[i], lineHeight: 1 }}
                  >
                    <CountUp target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 6, fontFamily: 'var(--font-mono)' }}>
                    {s.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div style={{ position: 'relative', marginTop: '-120px' }} className="hero-right">
          <Terminal />

          {/* Floating tech chips */}
          {FLOATERS.map((f, i) => (
            <div
              key={i}
              className="chip float-slow"
              style={{
                position: 'absolute',
                top: f.top,
                left: f.left,
                right: f.right,
                bottom: f.bottom,
                animationDelay: f.delay,
                borderColor: `${f.color}55`,
                color: f.color,
                background: `${f.color}10`,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: f.color }} />
              {f.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-mouse" />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
          .hero-right { margin-top: 12px; }
        }
      `}</style>
    </section>
  )
}

