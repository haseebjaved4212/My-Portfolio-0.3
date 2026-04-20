import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid rgba(74,68,85,0.2)',
      padding: '2rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      maxWidth: '100%',
      background: 'var(--surface-lowest)',
    }}>
      <p style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)' }}>
        © {year} <span style={{ color: 'var(--primary)' }}>Haseeb Javed</span> — Crafted with React, GSAP & ✨
      </p>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {[
          { icon: FiGithub,    url: 'https://github.com/haseebjaved4212' },
          { icon: FiTwitter,   url: 'https://x.com/Haseebjaved4212' },
          { icon: FiInstagram, url: 'https://www.instagram.com/haseeb_javed4212' },
          { icon: FiLinkedin,  url: 'https://www.linkedin.com/in/haseeb-javed-0332b3341' },
        ].map(({ icon: Icon, url }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer"
            style={{
              width: 36, height: 36, borderRadius: '0.625rem',
              background: 'rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--on-surface-variant)',
              transition: 'all 0.2s ease', textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(124,58,237,0.2)'
              e.currentTarget.style.color = 'var(--primary)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.color = 'var(--on-surface-variant)'
            }}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </footer>
  )
}
