import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'

const links = [
  { label: 'About',    href: '#about'   },
  { label: 'Skills',   href: '#skills'  },
  { label: 'Projects', href: '#projects'},
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const logoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!logoRef.current) return
    gsap.fromTo(logoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  const navLinks = links.map((l, i) => (
    <motion.a
      key={l.href}
      href={l.href}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 * i + 0.4, duration: 0.5, ease: 'easeOut' }}
      onClick={() => setMenuOpen(false)}
      className="nav-link"
    >
      {l.label}
    </motion.a>
  ))

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(19,19,24,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(74,68,85,0.2)' : 'none',
        transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s',
      }}
    >
      {/* Logo */}
      <a
        ref={logoRef}
        href="#about"
        style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          textDecoration: 'none',
        }}
      >
        <div style={{
          width: 38, height: 38,
          borderRadius: '0.75rem',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: '1rem', color: '#fff',
          boxShadow: '0 0 18px rgba(124,58,237,0.45)',
        }}>HJ</div>
        <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--on-surface)', letterSpacing: '-0.01em' }}>
          Haseeb<span style={{ color: 'var(--primary-container)' }}>.</span>
        </span>
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="nav-desktop">
        {navLinks}
        <motion.a
          href="/My-CV.pdf"
          download
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="btn-glow primary"
          style={{ marginLeft: '0.75rem' }}
        >
          Download CV
        </motion.a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(v => !v)}
        className="nav-mobile-btn"
        aria-label="Toggle menu"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: '5px', padding: '0.5rem',
        }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 24, height: 2,
            background: 'var(--on-surface)', borderRadius: 2,
            transition: 'transform 0.3s',
          }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: 'absolute', top: '64px', left: 0, right: 0,
            background: 'rgba(19,19,24,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(74,68,85,0.25)',
            padding: '1.5rem 2rem',
            display: 'flex', flexDirection: 'column', gap: '1rem',
            zIndex: 99,
          }}
        >
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--on-surface)', textDecoration: 'none', fontWeight: 500 }}
            >{l.label}</a>
          ))}
          <a href="/My-CV.pdf" download className="btn-glow primary" style={{ width: 'fit-content' }}>
            Download CV
          </a>
        </motion.div>
      )}

      <style>{`
        /* ── Nav link: sliding underline ── */
        .nav-link {
          color: var(--on-surface-variant);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          position: relative;
          transition: color 0.25s ease;
          overflow: hidden;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%;
          width: 0; height: 2px;
          background: linear-gradient(90deg, var(--primary-container), var(--secondary));
          border-radius: 99px;
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .nav-link:hover {
          color: var(--on-surface);
        }
        .nav-link:hover::after {
          width: calc(100% - 1.5rem);
        }

        /* ── Logo glow ── */
        .nav-logo-icon {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .nav-logo-icon:hover {
          box-shadow: 0 0 28px rgba(124,58,237,0.7) !important;
          transform: rotate(-5deg) scale(1.08);
        }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
