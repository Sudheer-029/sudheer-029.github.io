import { useState, useEffect } from 'react'

const links = [
  { label: 'Path',     id: 'story' },
  { label: 'Work',     id: 'proof' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Contact',  id: 'connect' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const y = window.scrollY + 120
      let current = ''
      for (const l of links) {
        const el = document.getElementById(l.id)
        if (el && el.offsetTop <= y) current = l.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? 'rgba(6,9,24,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid #1e2a4a' : '1px solid transparent',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-display"
          style={{ fontSize: '1rem', fontWeight: 700, color: '#22d3ee', letterSpacing: '-0.01em', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Back to top"
        >
          SB<span style={{ color: '#a78bfa' }}>.</span>
        </button>

        {/* Desktop nav */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: 32 }}>
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          <span style={{ width: 22, height: 2, background: menuOpen ? '#22d3ee' : '#94a3b8', borderRadius: 2, transition: 'transform 0.25s, opacity 0.25s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: menuOpen ? '#22d3ee' : '#94a3b8', borderRadius: 2, transition: 'opacity 0.25s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: 22, height: 2, background: menuOpen ? '#22d3ee' : '#94a3b8', borderRadius: 2, transition: 'transform 0.25s, opacity 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4, borderTop: '1px solid #1e2a4a' }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              onClick={() => scrollTo(l.id)}
              style={{ textAlign: 'left', padding: '10px 0', fontSize: '1rem' }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
