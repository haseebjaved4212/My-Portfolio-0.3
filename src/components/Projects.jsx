import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 'mac-portfolio',
    title: 'Mac-Styled Portfolio',
    description:
      'A fully interactive macOS-inspired portfolio featuring a desktop environment, dock, draggable windows, and authentic UI components. Built with React and GSAP.',
    tags: ['React', 'GSAP', 'CSS', 'macOS UI'],
    live: 'https://my-mac-os-portfolio-xi.vercel.app/',
    repo: 'https://github.com/haseebjaved4212/My-MacOs-Portfolio.git',
    accent: '#7c3aed',
    emoji: '🖥️',
    size: 'large', // spans 2 cols
  },
  {
    id: 'ai-enhancer',
    title: 'AI Image Enhancer',
    description:
      'An AI-powered web app that upscales and enhances images using machine learning. Clean UI with real-time processing and before/after comparison.',
    tags: ['AI', 'JavaScript', 'Canvas API', 'ML'],
    live: 'https://haseebjaved4212.github.io/AI-Powered-Image-Enhancer/',
    repo: 'https://github.com/haseebjaved4212/AI-Powered-Image-Enhancer.git',
    accent: '#06b6d4',
    emoji: '✨',
    size: 'small',
  },
  {
    id: 'fashique',
    title: 'FashiQue',
    description:
      'A modern e-commerce fashion store with product listings, cart management, and a sleek checkout flow. Responsive and performance-optimised.',
    tags: ['React', 'E-commerce', 'Next.js', 'TailwindCSS'],
    live: 'https://fashi-que.vercel.app/',
    repo: 'https://github.com/haseebjaved4212/FashiQue.git',
    accent: '#ffb784',
    emoji: '👗',
    size: 'small',
  },
]

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const isLarge = project.size === 'large'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="glass project-card"
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        padding: '0',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        minHeight: isLarge ? 340 : 300,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Accent glow top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${project.accent}, transparent)`,
        zIndex: 2,
      }} />

      {/* "Screen" preview area */}
      <div style={{
        position: 'relative',
        height: isLarge ? 180 : 150,
        background: `radial-gradient(ellipse at 30% 50%, ${project.accent}22 0%, var(--surface-lowest) 70%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Decorative browser chrome for large card */}
        {isLarge && (
          <div style={{
            position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)',
            width: '75%', height: '80%',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>
            {/* Browser chrome dots */}
            <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 6, alignItems: 'center' }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
              <div style={{ flex: 1, height: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 4, margin: '0 8px' }} />
            </div>
            <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[80,60,90,40].map((w, i) => (
                <div key={i} style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: `${w}%` }} />
              ))}
            </div>
          </div>
        )}
        {/* Emoji icon */}
        <span style={{
          fontSize: isLarge ? '4rem' : '3rem',
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))',
          zIndex: 1,
          position: isLarge ? 'absolute' : 'static',
          right: isLarge ? 40 : undefined,
        }}>{project.emoji}</span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: isLarge ? '1.35rem' : '1.1rem',
          fontWeight: 700, color: 'var(--on-surface)',
          marginBottom: '0.6rem', letterSpacing: '-0.01em',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.875rem', color: 'var(--on-surface-variant)',
          lineHeight: 1.7, marginBottom: '1rem', flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tags.map(t => (
            <span key={t} style={{
              padding: '0.2rem 0.65rem',
              background: 'var(--surface-highest)',
              borderRadius: '9999px',
              fontSize: '0.72rem', fontWeight: 500,
              color: 'var(--on-surface-variant)',
            }}>{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow primary"
            style={{ fontSize: '0.8rem', background: project.accent }}
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow secondary"
            style={{ fontSize: '0.8rem' }}
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>

      <style>{`
        .project-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
      `}</style>
    </motion.div>
  )
}

export default function Projects() {
  const { ref: headRef, inView: headIn } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" style={{
      padding: '6rem 2rem',
      background: 'var(--surface-low)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Selected Projects</h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', marginTop: '1rem' }}>
            A few highlights from my portfolio of live, production-ready projects.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }} className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
