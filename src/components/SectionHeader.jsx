import { colors } from '../theme'

export default function SectionHeader({ number, label, title, highlight, gradient = 'cyan', intro }) {
  return (
    <div style={{ position: 'relative', marginBottom: 56, paddingTop: 40 }}>
      <span className="section-number" aria-hidden="true">{number}</span>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label" style={{ marginBottom: 14 }}>{number} / {label}</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: colors.text, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          {title} {highlight && <span className={`gradient-text-${gradient}`}>{highlight}</span>}
        </h2>
        {intro && <p style={{ color: colors.muted, marginTop: 16, fontSize: '0.98rem', lineHeight: 1.7, maxWidth: 600 }}>{intro}</p>}
      </div>
    </div>
  )
}
