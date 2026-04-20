import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiMail, FiCopy, FiCheck,
  FiGithub, FiTwitter, FiInstagram, FiLinkedin,
} from 'react-icons/fi'

const EMAIL = 'contactimhaseeb@gmail.com'

const socials = [
  {
    icon: FiGithub,
    label: 'GitHub',
    handle: '@haseebjaved4212',
    url: 'https://github.com/haseebjaved4212',
    color: '#e4e1e9',
  },
  {
    icon: FiTwitter,
    label: 'Twitter / X',
    handle: '@Haseebjaved4212',
    url: 'https://x.com/Haseebjaved4212',
    color: '#4cd7f6',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    handle: '@haseeb_javed4212',
    url: 'https://www.instagram.com/haseeb_javed4212?igsh=MTV0cWI2aHh2dDRmbw==',
    color: '#e1306c',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    handle: 'in/haseeb-javed-0332b3341',
    url: 'https://www.linkedin.com/in/haseeb-javed-0332b3341',
    color: '#0a66c2',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <section id="contact" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', marginTop: '1rem', maxWidth: 440, margin: '1rem auto 0' }}>
            Have a project in mind or just want to say hi? Reach out via email or any of my socials.
          </p>
        </motion.div>

        {/* Email card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass"
          style={{
            padding: '2rem 2.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem',
            background: 'rgba(124,58,237,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: 48, height: 48, borderRadius: '1rem',
              background: 'linear-gradient(135deg, var(--primary-container), #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(124,58,237,0.35)',
              flexShrink: 0,
            }}>
              <FiMail size={20} color="#fff" />
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: '0.2rem' }}>Email</p>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--on-surface)' }}>{EMAIL}</p>
            </div>
          </div>

          <motion.button
            onClick={handleCopy}
            whileTap={{ scale: 0.94 }}
            className="btn-glow"
            style={{
              background: copied ? 'rgba(76,215,246,0.15)' : 'rgba(255,255,255,0.06)',
              color: copied ? 'var(--secondary)' : 'var(--on-surface-variant)',
              border: `1px solid ${copied ? 'rgba(76,215,246,0.3)' : 'rgba(74,68,85,0.4)'}`,
              transition: 'all 0.3s ease',
            }}
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? 'Copied!' : 'Copy Email'}
          </motion.button>
        </motion.div>

        {/* Socials grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem',
        }} className="socials-grid">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass"
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem', textDecoration: 'none',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: '0.875rem',
                background: `${s.color}18`,
                border: `1px solid ${s.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <s.icon size={18} color={s.color} />
              </div>
              <div>
                <p style={{ fontSize: '0.82rem', color: 'var(--on-surface-variant)', marginBottom: '0.15rem' }}>
                  {s.label}
                </p>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--on-surface)' }}>
                  {s.handle}
                </p>
              </div>
              <div style={{ marginLeft: 'auto', opacity: 0.3 }}>→</div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 620px) {
          .socials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
