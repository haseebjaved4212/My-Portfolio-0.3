import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

const tech = ['React.js', 'Next.js', 'Three.js', 'GSAP', 'TypeScript', 'TailwindCSS', 'N8N']

export default function Hero() {
  const containerRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const orb3Ref = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orb1Ref.current, { y: -40, x: 20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to(orb2Ref.current, { y: 30, x: -25, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
      gsap.to(orb3Ref.current, { y: -20, x: 15, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 })
      const els = textRef.current?.querySelectorAll('[data-gsap]')
      if (els && els.length) {
        // Start from y-offset only — opacity stays at 1 (set in CSS) so text is always visible
        gsap.fromTo(els,
          { y: 32 },
          { y: 0, stagger: 0.1, duration: 0.75, ease: 'power3.out', delay: 0.2 }
        )
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={containerRef}
      className="hero-section"
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
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(74,68,85,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,68,85,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        {/* Left — text */}
        <div ref={textRef} className="hero-text">
          {/* Badge */}
          <div data-gsap style={{ marginBottom: '1.25rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.35rem 0.9rem', borderRadius: '9999px',
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)',
              color: 'var(--primary)', fontSize: '0.78rem', fontWeight: 600,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
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
            <p className="hero-greeting">Hi there 👋 I'm</p>
          </div>

          {/* Name */}
          <div data-gsap>
            <h1 className="hero-name">
              Haseeb Javed
            </h1>
          </div>

          {/* Role */}
          <div data-gsap>
            <p className="hero-role">
              Frontend Developer &amp; Creative Coder
            </p>
          </div>

          {/* Description */}
          <div data-gsap>
            <p className="hero-desc">
              I craft immersive digital experiences with cutting-edge technologies.
              Passionate about beautiful UI, 3D interactions, and AI automation — turning ideas into pixel-perfect reality.
            </p>
          </div>

          {/* CTA buttons */}
          <div data-gsap className="hero-cta">
            <a href="/My-CV.pdf" download className="btn-glow primary">
              <FiDownload /> Download CV
            </a>
            <a href="#projects" className="btn-glow secondary">
              View Projects <FiArrowRight />
            </a>
          </div>

          {/* Tech chips */}
          <div data-gsap>
            <p style={{ fontSize: '0.72rem', color: 'var(--on-surface-variant)', marginBottom: '0.65rem', opacity: 0.6, letterSpacing: '0.1em' }}>
              WORKING WITH
            </p>
            <div className="hero-tech-chips">
              {tech.map(t => (
                <span key={t} className="lume-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Avatar card (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          className="hero-avatar"
          style={{ position: 'relative' }}
        >
          <div className="glass" style={{
            width: 260, height: 300, overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            background: 'rgba(124,58,237,0.08)',
          }}>
            <div style={{
              width: 110, height: 110, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.25rem', fontWeight: 900, color: '#fff',
              boxShadow: '0 0 40px rgba(124,58,237,0.5)',
              marginBottom: '1rem',
            }}>HJ</div>
            <p style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--on-surface)' }}>Haseeb Javed</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--on-surface-variant)', marginTop: '0.25rem' }}>Frontend Developer</p>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 16, right: -14,
                background: 'linear-gradient(135deg, rgba(124,58,237,0.9), rgba(124,58,237,0.7))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(124,58,237,0.5)',
                borderRadius: '0.75rem', padding: '0.35rem 0.65rem',
                fontSize: '0.68rem', fontWeight: 700, color: '#ede0ff',
                whiteSpace: 'nowrap',
              }}
            >✦ React &amp; Next.js</motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', bottom: 36, left: -18,
                background: 'rgba(6,182,212,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6,182,212,0.4)',
                borderRadius: '0.75rem', padding: '0.35rem 0.65rem',
                fontSize: '0.68rem', fontWeight: 700, color: 'var(--secondary)',
                whiteSpace: 'nowrap',
              }}
            >⬡ Three.js &amp; GSAP</motion.div>
          </div>

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
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}
      >
        <span style={{ fontSize: '0.65rem', color: 'var(--on-surface-variant)', opacity: 0.45, letterSpacing: '0.15em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1.5, height: 28,
            background: 'linear-gradient(to bottom, var(--primary-container), transparent)',
            borderRadius: 99,
          }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── Hero section layout ── */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 5.5rem 1.25rem 4rem;
        }

        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
        }

        .hero-name {
          font-size: clamp(2.4rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, #e4e1e9 30%, #d2bbff 70%, #4cd7f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-greeting {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          color: var(--on-surface-variant);
          font-weight: 500;
          margin-bottom: 0.4rem;
        }

        .hero-role {
          font-size: clamp(1rem, 3vw, 1.65rem);
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }

        .hero-desc {
          font-size: 0.95rem;
          color: var(--on-surface-variant);
          line-height: 1.75;
          max-width: 520px;
          margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.875rem;
          margin-bottom: 2.25rem;
        }

        .hero-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        /* ── Mobile overrides ── */
        @media (max-width: 768px) {
          .hero-section {
            padding: 5rem 1rem 3.5rem;
            align-items: flex-start;
            padding-top: 5.5rem;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .hero-avatar { display: none !important; }
          .hero-name { font-size: clamp(2.4rem, 11vw, 3.5rem); }
          .hero-role { font-size: clamp(0.95rem, 4vw, 1.2rem); }
          .hero-desc { font-size: 0.9rem; margin-bottom: 1.75rem; }
          .hero-cta { gap: 0.75rem; margin-bottom: 1.75rem; }
          .hero-cta .btn-glow { font-size: 0.85rem; padding: 0.6rem 1.2rem; }
          .hero-tech-chips { gap: 0.4rem; }
          .lume-chip { font-size: 0.75rem; padding: 0.3rem 0.7rem; }
        }

        @media (max-width: 400px) {
          .hero-name { font-size: 2.25rem; }
          .hero-cta { flex-direction: column; }
          .hero-cta .btn-glow { text-align: center; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
