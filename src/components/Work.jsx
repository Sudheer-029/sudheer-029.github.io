import { work, smallerBuilds } from '../data'
import { accent, colors } from '../theme'
import { useReveal } from '../hooks'
import SectionHeader from './SectionHeader'

function LinkPill({ href, children, color, solid }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', borderRadius: 999, padding: '7px 16px',
        color: solid ? colors.bg : color, background: solid ? color : 'transparent', border: `1px solid ${solid ? color : `${color}55`}` }}>
      {children}
    </a>
  )
}

function Stack({ items, color }) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 6 }} aria-label="Tech stack">
      {items.map(t => (
        <li key={t} style={{ fontSize: '0.72rem', color, background: `${color}14`, border: `1px solid ${color}33`, borderRadius: 999, padding: '3px 10px', fontFamily: 'var(--font-mono)' }}>{t}</li>
      ))}
    </ul>
  )
}

const label = { fontSize: '0.72rem', color: colors.faint, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginBottom: 6 }

function CaseStudy({ item }) {
  const [ref, revealStyle] = useReveal()
  const c = accent[item.color]
  return (
    <article ref={ref} className="card" style={{ ...revealStyle, padding: 'clamp(22px, 3vw, 34px)', borderColor: `${c}2a` }}>
      <div style={{ fontSize: '0.72rem', color: c, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>{item.tag}</div>
      <h3 className="font-display" style={{ fontSize: '1.45rem', fontWeight: 700, color: colors.text, marginBottom: 10 }}>{item.title}</h3>
      <p style={{ display: 'inline-block', fontSize: '0.9rem', fontWeight: 600, color: c, background: `${c}12`, border: `1px solid ${c}33`, borderRadius: 8, padding: '6px 12px', marginBottom: 22 }}>{item.headline}</p>

      <div className="case-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)', gap: 32 }}>
        <div>
          <div style={label}>Problem</div>
          <p style={{ color: colors.body, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 18 }}>{item.problem}</p>
          <div style={label}>Result</div>
          <p style={{ color: colors.text, fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 500 }}>{item.result}</p>
        </div>
        <div>
          <div style={label}>What I built</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {item.built.map(b => (
              <li key={b} style={{ display: 'flex', gap: 10, fontSize: '0.9rem', color: colors.body, lineHeight: 1.65 }}>
                <span aria-hidden="true" style={{ color: c, flexShrink: 0 }}>→</span>{b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 26, paddingTop: 20, borderTop: `1px solid ${colors.border}` }}>
        <Stack items={item.stack} color={c} />
        {(item.liveUrl || item.githubUrl || item.diagramUrl) && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {item.liveUrl && <LinkPill href={item.liveUrl} color={c} solid>Live demo ↗</LinkPill>}
            {item.diagramUrl && <LinkPill href={item.diagramUrl} color={c}>Architecture ↗</LinkPill>}
            {item.githubUrl && <LinkPill href={item.githubUrl} color={c}>Code ↗</LinkPill>}
          </div>
        )}
      </div>
    </article>
  )
}

function SmallBuild({ item }) {
  return (
    <article className="card" style={{ padding: 22, display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '0.7rem', color: colors.faint, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{item.context}</div>
      <h4 className="font-display" style={{ fontSize: '1.02rem', fontWeight: 700, color: colors.text, marginBottom: 10 }}>{item.title}</h4>
      <p style={{ fontSize: '0.86rem', color: colors.muted, lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{item.desc}</p>
      <Stack items={item.stack} color={accent.cyan} />
      {(item.liveUrl || item.githubUrl) && (
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          {item.liveUrl && <LinkPill href={item.liveUrl} color={accent.cyan}>Live ↗</LinkPill>}
          {item.githubUrl && <LinkPill href={item.githubUrl} color={accent.cyan}>Code ↗</LinkPill>}
        </div>
      )}
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ padding: '96px 24px', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <SectionHeader number="01" label="Selected work" title="Things I've built" highlight="and shipped." gradient="violet"
        intro="Production systems first, then hackathon and open-source builds. For internal work I describe what it does, never how the company's systems are named." />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {work.map(item => <CaseStudy key={item.id} item={item} />)}
      </div>

      <h3 className="font-display" style={{ fontSize: '1.3rem', fontWeight: 700, color: colors.text, margin: '64px 0 20px' }}>More builds</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
        {smallerBuilds.map(item => <SmallBuild key={item.title} item={item} />)}
      </div>

      <style>{`@media (max-width: 760px) { .case-grid { grid-template-columns: 1fr !important; gap: 20px !important; } }`}</style>
    </section>
  )
}
