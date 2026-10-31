import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Work from './components/Work'
import Story from './components/Story'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { colors } from './theme'

export default function App() {
  return (
    <div style={{ background: colors.bg, minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Story />
        <Skills />
        <Contact />
      </main>
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: '28px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: '0.76rem', color: colors.faint, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Sudheer Bishnoi
        </span>
      </footer>
    </div>
  )
}
