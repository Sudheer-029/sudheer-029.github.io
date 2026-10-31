import { skills } from '../data'
import { accent, colors } from '../theme'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '96px 24px', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <SectionHeader number="03" label="Toolkit" title="What I reach for" highlight="day to day." gradient="emerald" />
      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18 }}>
        {skills.map(s => (
          <div key={s.title} className="card" style={{ padding: 24 }}>
            <h3 className="font-display" style={{ fontSize: '0.88rem', fontWeight: 700, color: accent[s.color], marginBottom: 14, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.title}</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {s.items.map(item => (
                <li key={item} style={{ fontSize: '0.78rem', color: colors.body, background: colors.bgAlt, border: `1px solid ${colors.border}`, borderRadius: 6, padding: '4px 10px' }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) { .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
