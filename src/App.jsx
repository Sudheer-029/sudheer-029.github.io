import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Proof from './components/Proof'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Perspectives from './components/Perspectives'

export default function App() {
  return (
    <div style={{ background: '#060918', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Nav />
      <Hero />
      <Story />
      <Proof />
      <Projects />
      <Skills />
      <Perspectives />
      <footer style={{ borderTop: '1px solid #1e2a4a', padding: '28px 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: '0.76rem', color: '#475569', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Sudheer Bishnoi · Made in Bengaluru
        </span>
      </footer>
    </div>
  )
}
