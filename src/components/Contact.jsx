import { person } from '../data'
import { colors } from '../theme'
import SectionHeader from './SectionHeader'

const roles = [
  'AI Automation Engineer',
  'Applied AI / LLM Engineer',
  'AI Solutions Engineer',
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 24px 120px', maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
      <SectionHeader number="04" label="Contact" title="Hiring for" highlight="AI automation?" gradient="violet" />

      <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)' }}>
        <p style={{ color: colors.body, fontSize: '1rem', lineHeight: 1.75, maxWidth: 640, marginBottom: 22 }}>
          I'm looking for roles where I can take operational problems from manual to automated, and keep the result reliable once it is live.
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 22 }} aria-label="Roles I'm open to">
          {roles.map(r => <li key={r} className="chip" style={{ fontSize: '0.78rem' }}>{r}</li>)}
        </ul>
        <p style={{ color: colors.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 30 }}>
          {person.availability}. {person.languages}.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          <a href={`mailto:${person.email}`} className="btn-primary">Email me <span aria-hidden="true">→</span></a>
          {person.cvUrl && <a href={person.cvUrl} className="btn-ghost" download>Download CV</a>}
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">LinkedIn ↗</a>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
        </div>
        <p style={{ color: colors.faint, fontSize: '0.82rem', marginTop: 22, fontFamily: 'var(--font-mono)' }}>{person.email}</p>
      </div>
    </section>
  )
}
