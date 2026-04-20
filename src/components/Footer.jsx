import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-copy">
        © {year} <span style={{ color: 'var(--primary)' }}>Haseeb Javed</span>
        <span className="footer-copy-sub"> — Crafted with React, GSAP &amp; ✨</span>
      </p>
      <div className="footer-icons">
        {[
          { icon: FiGithub,    url: 'https://github.com/haseebjaved4212' },
          { icon: FiTwitter,   url: 'https://x.com/Haseebjaved4212' },
          { icon: FiInstagram, url: 'https://www.instagram.com/haseeb_javed4212' },
          { icon: FiLinkedin,  url: 'https://www.linkedin.com/in/haseeb-javed-0332b3341' },
        ].map(({ icon: Icon, url }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label={url}
          >
            <Icon size={15} />
          </a>
        ))}
      </div>

      <style>{`
        .footer {
          border-top: 1px solid rgba(74,68,85,0.2);
          padding: 1.5rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: var(--surface-lowest);
          flex-wrap: wrap;
        }

        .footer-copy {
          font-size: 0.78rem;
          color: var(--on-surface-variant);
          line-height: 1.6;
        }

        .footer-icons {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .footer-icon-link {
          width: 34px;
          height: 34px;
          border-radius: 0.5rem;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--on-surface-variant);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .footer-icon-link:hover {
          background: rgba(124,58,237,0.2);
          color: var(--primary);
        }

        @media (max-width: 480px) {
          .footer {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.875rem;
            padding: 1.25rem 1rem;
          }
          .footer-copy-sub {
            display: block;
          }
        }
      `}</style>
    </footer>
  )
}
