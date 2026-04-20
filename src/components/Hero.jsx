import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

const tech = ['React.js', 'Next.js', 'Three.js', 'GSAP', 'TypeScript', 'TailwindCSS', 'N8N']

export default function Hero() {
  const containerRef = useRef(null)
  const orb1Ref     = useRef(null)
  const orb2Ref     = useRef(null)
  const orb3Ref     = useRef(null)
  const textRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // floating orbs
      gsap.to(orb1Ref.current, {
        y: -40, x: 20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })
      gsap.to(orb2Ref.current, {
        y: 30, x: -25, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1,
      })
      gsap.to(orb3Ref.current, {
        y: -20, x: 15, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2,
      })

      // text entrance
      const els = textRef.current?.querySelectorAll('[data-gsap]')
      if (els) {
        gsap.fromTo(els,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out', delay: 0.3 }
        )
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 2rem 4rem',
      }}
    >
      {/* Background ambient radials */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div ref={orb1Ref} style={{
          position: 'absolute', top: '10%', left: '60%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          filter: 'blur(1px)',
        }} />
        <div ref={orb2Ref} style={{
          position: 'absolute', top: '50%', left: '70%',
          width: 350, height: 350, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        }} />
        <div ref={orb3Ref} style={{
          position: 'absolute', top: '20%', left: '15%',
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(74,68,85,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,68,85,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div
        style={{
          maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1,
          display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <div ref={textRef}>
          {/* Badge */}
          <div data-gsap style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: '9999px',
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)',
              color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#7c3aed',
                boxShadow: '0 0 8px rgba(124,58,237,0.8)',
                display: 'inline-block',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Available for Work
            </span>
          </div>

          {/* Greeting */}
          <div data-gsap>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--on-surface-variant)',
              fontWeight: 500, marginBottom: '0.5rem',
            }}>Hi there 👋 I'm</p>
          </div>

          {/* Name */}
          <div data-gsap>
            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 900, letterSpacing: '-0.03em',
              lineHeight: 1, marginBottom: '0.25rem',
              background: 'linear-gradient(135deg, #e4e1e9 30%, #d2bbff 70%, #4cd7f6 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Haseeb Javed
            </h1>
          </div>

          {/* Role */}
          <div data-gsap>
            <p style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
              color: 'var(--primary)',
              fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.01em',
            }}>
              Frontend Developer &amp; Creative Coder
            </p>
          </div>

          {/* Description */}
          <div data-gsap>
            <p style={{
              fontSize: '1rem', color: 'var(--on-surface-variant)',
              lineHeight: 1.75, maxWidth: 540, marginBottom: '2.5rem',
            }}>
              I craft immersive digital experiences with cutting-edge technologies.
              Passionate about beautiful UI, 3D interactions, and AI automation — turning ideas into pixel-perfect reality.
            </p>
          </div>

          {/* CTA buttons */}
          <div data-gsap style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <a href="/My-CV.pdf" download className="btn-glow primary" style={{ fontSize: '0.95rem' }}>
              <FiDownload /> Download CV
            </a>
            <a href="#projects" className="btn-glow secondary" style={{ fontSize: '0.95rem' }}>
              View Projects <FiArrowRight />
            </a>
          </div>

          {/* Tech ticker */}
          <div data-gsap style={{ overflow: 'hidden', position: 'relative' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: '0.75rem', opacity: 0.6 }}>
              WORKING WITH
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {tech.map(t => (
                <span key={t} className="lume-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          className="hero-avatar"
          style={{ position: 'relative' }}
        >
          <div className="glass" style={{
            width: 280, height: 320, overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            background: 'rgba(124,58,237,0.08)',
          }}>
            {/* Avatar placeholder with initials */}
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem', fontWeight: 900, color: '#fff',
              boxShadow: '0 0 40px rgba(124,58,237,0.5)',
              marginBottom: '1rem',
            }}>HJ</div>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--on-surface)' }}>Haseeb Javed</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', marginTop: '0.25rem' }}>Frontend Developer</p>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 16, right: -16,
                background: 'linear-gradient(135deg, rgba(124,58,237,0.9), rgba(124,58,237,0.7))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(124,58,237,0.5)',
                borderRadius: '0.75rem', padding: '0.4rem 0.75rem',
                fontSize: '0.7rem', fontWeight: 700, color: '#ede0ff',
                whiteSpace: 'nowrap',
              }}
            >✦ React & Next.js</motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', bottom: 40, left: -20,
                background: 'rgba(6,182,212,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6,182,212,0.4)',
                borderRadius: '0.75rem', padding: '0.4rem 0.75rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--secondary)',
                whiteSpace: 'nowrap',
              }}
            >⬡ Three.js & GSAP</motion.div>
          </div>

          {/* Decorative ring */}
          <div style={{
            position: 'absolute', inset: -20, borderRadius: '2rem',
            border: '1px solid rgba(124,58,237,0.15)',
            pointerEvents: 'none',
          }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--on-surface-variant)', opacity: 0.5, letterSpacing: '0.15em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1.5, height: 32, background: 'linear-gradient(to bottom, var(--primary-container), transparent)',
            borderRadius: 99,
          }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar { display: none; }
        }
      `}</style>
    </section>
  )
}
