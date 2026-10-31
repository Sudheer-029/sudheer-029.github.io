import { timeline } from '../data'
import { accent, colors } from '../theme'
import { useReveal } from '../hooks'
import SectionHeader from './SectionHeader'

function TimelineItem({ item, last }) {
  const [ref, revealStyle] = useReveal(0.2)
  const c = accent[item.color]
  return (
    <li ref={ref} style={{ ...revealStyle, display: 'flex', alignItems: 'flex-start', gap: 22, marginBottom: last ? 0 : 24 }}>
      <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 6, alignSelf: 'stretch' }}>
        <div style={{ width: 13, height: 13, borderRadius: '50%', background: c, boxShadow: `0 0 12px ${c}88` }} />
        {!last && <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(${c}66, transparent)`, marginTop: 4 }} />}
      </div>
      <div className="card" style={{ flex: 1, padding: '22px 26px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
          <h3 className="font-display" style={{ fontSize: '1.08rem', fontWeight: 700, color: colors.text }}>{item.title}</h3>
          <span style={{ fontSize: '0.88rem', color: colors.muted }}>· {item.org}</span>
        </div>
        <div className="font-mono" style={{ fontSize: '0.75rem', color: c, marginBottom: 10 }}>{item.period}</div>
        <p style={{ fontSize: '0.9rem', color: colors.muted, lineHeight: 1.7 }}>{item.body}</p>
      </div>
    </li>
  )
}

export default function Story() {
  return (
    <section id="experience" style={{ padding: '96px 24px', maxWidth: 860, margin: '0 auto', position: 'relative' }}>
      <SectionHeader number="02" label="Experience" title="Operations depth," highlight="automation focus." gradient="cyan"
        intro="Five years inside Amazon's catalog operations taught me where manual work hides. Now I automate it for clients." />
      <ol style={{ listStyle: 'none' }}>
        {timeline.map((item, i) => <TimelineItem key={item.period} item={item} last={i === timeline.length - 1} />)}
      </ol>
    </section>
  )
}
