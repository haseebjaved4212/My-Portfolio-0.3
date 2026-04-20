import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiMail, FiCopy, FiCheck,
  FiGithub, FiTwitter, FiInstagram, FiLinkedin,
} from 'react-icons/fi'

const EMAIL = 'contactimhaseeb@gmail.com'

const socials = [
  { icon: FiGithub,    label: 'GitHub',       handle: '@haseebjaved4212',           url: 'https://github.com/haseebjaved4212',                                                color: '#e4e1e9' },
  { icon: FiTwitter,   label: 'Twitter / X',  handle: '@Haseebjaved4212',           url: 'https://x.com/Haseebjaved4212',                                                   color: '#4cd7f6' },
  { icon: FiInstagram, label: 'Instagram',    handle: '@haseeb_javed4212',          url: 'https://www.instagram.com/haseeb_javed4212?igsh=MTV0cWI2aHh2dDRmbw==',            color: '#e1306c' },
  { icon: FiLinkedin,  label: 'LinkedIn',     handle: 'in/haseeb-javed-0332b3341', url: 'https://www.linkedin.com/in/haseeb-javed-0332b3341',                               color: '#0a66c2' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silent
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div ref={ref} style={{ maxWidth: 860, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2.75rem' }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hi? Reach out via email or any of my socials.
          </p>
        </motion.div>

        {/* Email card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass email-card"
        >
          <div className="email-info">
            <div className="email-icon-wrap">
              <FiMail size={18} color="#fff" />
            </div>
            <div className="email-text-block">
              <p className="email-meta-label">Email</p>
              <p className="email-address">{EMAIL}</p>
            </div>
          </div>

          <motion.button
            onClick={handleCopy}
            whileTap={{ scale: 0.93 }}
            className="btn-glow copy-btn"
            style={{
              background: copied ? 'rgba(76,215,246,0.15)' : 'rgba(255,255,255,0.06)',
              color: copied ? 'var(--secondary)' : 'var(--on-surface-variant)',
              border: `1px solid ${copied ? 'rgba(76,215,246,0.3)' : 'rgba(74,68,85,0.4)'}`,
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? 'Copied!' : 'Copy'}
          </motion.button>
        </motion.div>

        {/* Socials grid */}
        <div className="socials-grid">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass social-card"
            >
              <div className="social-icon-wrap" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                <s.icon size={17} color={s.color} />
              </div>
              <div className="social-text">
                <p className="social-label">{s.label}</p>
                <p className="social-handle">{s.handle}</p>
              </div>
              <span className="social-arrow">→</span>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 5rem 1.25rem;
        }

        .contact-subtitle {
          color: var(--on-surface-variant);
          font-size: 0.95rem;
          margin-top: 0.875rem;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.65;
        }

        .email-card {
          padding: 1.5rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.875rem;
          margin-bottom: 1rem;
          background: rgba(124,58,237,0.06);
          flex-wrap: nowrap;
        }

        .email-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
          flex: 1;
          overflow: hidden;
        }

        .email-text-block {
          min-width: 0;
          overflow: hidden;
        }

        .email-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 0.875rem;
          background: linear-gradient(135deg, var(--primary-container), #06b6d4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 18px rgba(124,58,237,0.3);
          flex-shrink: 0;
        }

        .email-meta-label {
          font-size: 0.7rem;
          color: var(--on-surface-variant);
          margin-bottom: 0.15rem;
          white-space: nowrap;
        }

        .email-address {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--on-surface);
          overflow-wrap: anywhere;
          word-break: break-all;
          min-width: 0;
        }

        .copy-btn {
          white-space: nowrap;
        }

        /* Socials: 2-col */
        .socials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.875rem;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 1rem 1.125rem;
          text-decoration: none;
          background: rgba(255,255,255,0.02);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .social-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .social-text {
          min-width: 0;
          flex: 1;
        }

        .social-label {
          font-size: 0.75rem;
          color: var(--on-surface-variant);
          margin-bottom: 0.15rem;
        }

        .social-handle {
          font-size: 0.855rem;
          font-weight: 600;
          color: var(--on-surface);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .social-arrow {
          opacity: 0.3;
          flex-shrink: 0;
          font-size: 0.9rem;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .contact-section {
            padding: 4rem 1rem;
          }
          .email-card {
            padding: 1rem 1.1rem;
            gap: 0.625rem;
          }
          .email-address {
            font-size: 0.78rem;
          }
          .email-icon-wrap {
            width: 36px;
            height: 36px;
          }
          .socials-grid {
            grid-template-columns: 1fr;
            gap: 0.625rem;
          }
          .social-handle {
            font-size: 0.8rem;
          }
          .copy-btn {
            padding: 0.5rem 0.875rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 380px) {
          .email-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .copy-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
