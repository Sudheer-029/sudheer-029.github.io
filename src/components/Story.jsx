import { useRef, useEffect, useState } from 'react'
import { timeline } from '../data'
const colorMap = { cyan: '#22d3ee', emerald: '#34d399', violet: '#a78bfa' }
function TimelineItem({ item, index }) {
  const ref = useRef()
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.disconnect() } }, { threshold: 0.2 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  const c = colorMap[item.color]
  return <div ref={ref} style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 32, opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(30px)', transition: `opacity 0.6s ${index * 0.1}s, transform 0.6s ${index * 0.1}s` }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 4, alignSelf: 'stretch' }}><div style={{ width: 14, height: 14, borderRadius: '50%', background: c, boxShadow: `0 0 12px ${c}88`, zIndex: 1, flexShrink: 0 }} />{index < timeline.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(${c}66, transparent)`, marginTop: 4 }} />}</div>
    <div className="card" style={{ flex: 1, padding: '24px 28px' }}><div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}><span className="font-mono" style={{ fontSize: '0.75rem', color: c, background: `${c}15`, border: `1px solid ${c}33`, borderRadius: 999, padding: '2px 10px' }}>{item.year}</span><h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0' }}>{item.title}</h3></div><p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7 }}>{item.body}</p></div>
  </div>
}
export default function Story() {
  return <section id="story" style={{ padding: '120px 24px', maxWidth: 820, margin: '0 auto', position: 'relative' }}>
    <div style={{ position: 'relative', marginBottom: 72, paddingTop: 40 }}><span className="section-number">01</span><div style={{ position: 'relative', zIndex: 1 }}><div className="section-label" style={{ marginBottom: 14 }}>01 / Experience</div><h2 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Enterprise operations experience, <span className="gradient-text-cyan">automation mindset.</span></h2><p style={{ color: '#94a3b8', marginTop: 16, fontSize: '0.98rem', lineHeight: 1.7, maxWidth: 560 }}>A career combining enterprise operations experience with a growing focus on AI engineering, intelligent automation and reliable software systems.</p></div></div>
    {timeline.map((item, i) => <TimelineItem key={i} item={item} index={i} />)}
  </section>
}