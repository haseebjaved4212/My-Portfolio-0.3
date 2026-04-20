import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Subtle parallax scroll-based section reveals
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(section, { opacity: 1, duration: 0.1 })
        },
      })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Persistent background radial */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.12) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
