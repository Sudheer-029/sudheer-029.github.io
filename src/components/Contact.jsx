import { person } from '../data'
import { colors } from '../theme'
import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 24px 120px', maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
      <SectionHeader number="04" label="Contact" title="Have a role" highlight="worth a move?" gradient="violet" />

      <div style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)' }}>
        <p style={{ color: colors.body, fontSize: '1rem', lineHeight: 1.75, maxWidth: 640, marginBottom: 22 }}>
          I'm happy at Acumen Operators and not actively looking. If you have an AI automation engineering role with real ownership, hard problems and an offer to match, I'm glad to hear about it.
        </p>
        <p style={{ color: colors.muted, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 30 }}>
          {person.workSetup}. {person.languages}.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          <a href={`mailto:${person.email}`} className="btn-primary">Get in touch <span aria-hidden="true">→</span></a>
          {person.cvUrl && <a href={person.cvUrl} className="btn-ghost" download>Download CV</a>}
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">LinkedIn ↗</a>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
        </div>
        <p style={{ color: colors.faint, fontSize: '0.82rem', marginTop: 22, fontFamily: 'var(--font-mono)' }}>{person.email}</p>
      </div>
    </section>
  )
}
