import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 'mac-portfolio',
    title: 'Mac-Styled Portfolio',
    description: 'A fully interactive macOS-inspired portfolio featuring a desktop environment, dock, draggable windows, and authentic UI components. Built with React and GSAP.',
    tags: ['React', 'GSAP', 'CSS', 'macOS UI'],
    live: 'https://my-mac-os-portfolio-xi.vercel.app/',
    repo: 'https://github.com/haseebjaved4212/My-MacOs-Portfolio.git',
    accent: '#7c3aed',
    emoji: '🖥️',
    size: 'large',
  },
  {
    id: 'ai-enhancer',
    title: 'AI Image Enhancer',
    description: 'An AI-powered web app that upscales and enhances images using machine learning. Clean UI with real-time processing and before/after comparison.',
    tags: ['AI', 'JavaScript', 'Canvas API'],
    live: 'https://haseebjaved4212.github.io/AI-Powered-Image-Enhancer/',
    repo: 'https://github.com/haseebjaved4212/AI-Powered-Image-Enhancer.git',
    accent: '#06b6d4',
    emoji: '✨',
    size: 'small',
  },
  {
    id: 'fashique',
    title: 'FashiQue',
    description: 'A modern e-commerce fashion store with product listings, cart management, and a sleek checkout flow. Responsive and performance-optimised.',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    live: 'https://fashi-que.vercel.app/',
    repo: 'https://github.com/haseebjaved4212/FashiQue.git',
    accent: '#ffb784',
    emoji: '👗',
    size: 'small',
  },
]

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const isLarge = project.size === 'large'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
      className={`glass project-card ${isLarge ? 'project-large' : 'project-small'}`}
    >
      {/* Accent top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${project.accent}, transparent)`,
        zIndex: 2,
      }} />

      {/* Preview area */}
      <div
        className="project-preview"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.accent}22 0%, var(--surface-lowest) 70%)` }}
      >
        {isLarge && (
          <div className="browser-chrome">
            <div className="browser-bar">
              {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
              ))}
              <div style={{ flex: 1, height: 12, background: 'rgba(255,255,255,0.05)', borderRadius: 4, margin: '0 8px' }} />
            </div>
            <div style={{ flex: 1, padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[80, 60, 90, 40].map((w, i) => (
                <div key={i} style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: `${w}%` }} />
              ))}
            </div>
          </div>
        )}
        <span className={`project-emoji ${isLarge ? 'project-emoji-large' : ''}`}>{project.emoji}</span>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tags">
          {project.tags.map(t => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>

        <div className="project-btns">
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="btn-glow primary project-btn"
            style={{ background: project.accent }}
          >
            <FiExternalLink /> Live Demo
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer"
            className="btn-glow secondary project-btn"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref: headRef, inView: headIn } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="projects-section">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Selected Projects</h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', marginTop: '0.875rem' }}>
            A few highlights from my portfolio of live, production-ready projects.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 5rem 1.25rem;
          background: var(--surface-low);
        }

        /* Desktop: 3-col bento */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .project-card {
          padding: 0;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .project-large { grid-column: span 2; }
        .project-small { grid-column: span 1; }

        .project-preview {
          position: relative;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .browser-chrome {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: 72%;
          height: 78%;
          background: rgba(255,255,255,0.03);
          border-radius: 0.625rem;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .browser-bar {
          padding: 6px 10px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .project-emoji {
          font-size: 2.75rem;
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.1));
          z-index: 1;
          position: static;
        }
        .project-emoji-large {
          position: absolute;
          right: 28px;
          font-size: 3.5rem;
        }

        .project-content {
          padding: 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--on-surface);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .project-desc {
          font-size: 0.845rem;
          color: var(--on-surface-variant);
          line-height: 1.65;
          margin-bottom: 0.875rem;
          flex: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1rem;
        }

        .project-tag {
          padding: 0.18rem 0.6rem;
          background: var(--surface-highest);
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--on-surface-variant);
        }

        .project-btns {
          display: flex;
          gap: 0.625rem;
          flex-wrap: wrap;
        }

        .project-btn {
          font-size: 0.78rem;
          padding: 0.55rem 1.1rem;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.875rem;
          }
          .project-large {
            grid-column: 1 / -1;
          }
          .project-small {
            grid-column: span 1;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .projects-section {
            padding: 4rem 1rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .project-large,
          .project-small {
            grid-column: 1 !important;
          }
          .project-preview {
            height: 130px;
          }
          .browser-chrome {
            width: 80%;
            height: 75%;
          }
          .project-emoji-large {
            right: 16px;
            font-size: 2.75rem;
          }
          .project-title {
            font-size: 1rem;
          }
          .project-desc {
            font-size: 0.825rem;
          }
          .project-btn {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}
