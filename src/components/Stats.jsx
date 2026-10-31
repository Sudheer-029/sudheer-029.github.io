import { stats } from '../data'
import { accent, colors } from '../theme'

export default function Stats() {
  return (
    <section aria-label="Results at a glance" style={{ padding: '0 24px', maxWidth: 1200, margin: '-40px auto 0', position: 'relative', zIndex: 1 }}>
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 }}>
        {stats.map(s => (
          <div key={s.value} style={{ background: colors.card, border: `1px solid ${accent[s.color]}33`, borderRadius: 14, padding: '20px 20px 18px' }}>
            <div className="font-display" style={{ fontSize: 'clamp(1.5rem, 2.4vw, 1.9rem)', fontWeight: 700, color: accent[s.color], lineHeight: 1.1, marginBottom: 8 }}>{s.value}</div>
            <div style={{ fontSize: '0.82rem', color: colors.muted, lineHeight: 1.5 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
