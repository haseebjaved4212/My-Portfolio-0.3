import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'HTML5',       icon: '🌐', level: 'Expert',             category: 'Core' },
  { name: 'CSS3',        icon: '🎨', level: 'Expert',             category: 'Core' },
  { name: 'JavaScript',  icon: '⚡', level: 'Expert',             category: 'Core' },
  { name: 'TypeScript',  icon: '🔷', level: 'Advanced',           category: 'Core' },
  { name: 'React.js',    icon: '⚛️', level: 'Expert',             category: 'Framework' },
  { name: 'Next.js',     icon: '▲',  level: 'Advanced',           category: 'Framework' },
  { name: 'TailwindCSS', icon: '🌊', level: 'Expert',             category: 'Styling' },
  { name: 'Three.js',    icon: '🧊', level: 'Advanced',           category: 'Creative' },
  { name: 'GSAP',        icon: '🟢', level: 'Advanced',           category: 'Creative' },
  { name: 'Spline 3D',   icon: '🌀', level: 'Advanced',           category: 'Creative' },
  { name: 'Python',      icon: '🐍', level: 'Learning',           category: 'Backend' },
  { name: 'DevOps',      icon: '🔧', level: 'Strong Foundation',  category: 'Ops' },
  { name: 'Networking',  icon: '🔌', level: 'Strong Foundation',  category: 'Ops' },
  { name: 'AI / N8N',   icon: '🤖', level: 'Advanced',           category: 'AI' },
]

const levelColor = {
  'Expert':            'var(--primary-container)',
  'Advanced':          'var(--secondary-container)',
  'Strong Foundation': '#a15100',
  'Learning':          'rgba(255,255,255,0.12)',
}

const categories = [
  { id: 'main',     label: '⚛️ Frontend',       desktopCol: '1 / 3', items: skills.filter(s => ['Core','Framework','Styling'].includes(s.category)) },
  { id: 'creative', label: '🎨 Creative & 3D',   desktopCol: '3 / 4', items: skills.filter(s => s.category === 'Creative') },
  { id: 'ops',      label: '🔧 DevOps & Infra',  desktopCol: '1 / 2', items: skills.filter(s => s.category === 'Ops') },
  { id: 'backend',  label: '🐍 Backend',          desktopCol: '2 / 3', items: skills.filter(s => s.category === 'Backend') },
  { id: 'ai',       label: '🤖 AI Automation',    desktopCol: '3 / 4', items: skills.filter(s => s.category === 'AI') },
]

function SkillCard({ cat, index }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="glass skill-card"
      style={{ '--desktop-col': cat.desktopCol }}
    >
      <p className="skill-card-label">{cat.label}</p>
      <div className="skill-chips">
        {cat.items.map(skill => (
          <motion.span
            key={skill.name}
            whileHover={{ scale: 1.05, y: -2 }}
            className="skill-chip"
            style={{ borderLeftColor: levelColor[skill.level] || 'var(--secondary)' }}
            title={skill.level}
          >
            <span>{skill.icon}</span>
            {skill.name}
            {skill.level === 'Learning' && (
              <span className="skill-badge-learning">learning</span>
            )}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref: headRef, inView: headIn } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="skills-section">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headIn ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <p className="section-label">What I bring</p>
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="skills-subtitle">
          A versatile stack spanning frontend craftsmanship, 3D creativity, DevOps foundations, and AI automation.
        </p>
      </motion.div>

      <div className="skills-grid">
        {categories.map((cat, i) => <SkillCard key={cat.id} cat={cat} index={i} />)}
      </div>

      <style>{`
        .skills-section {
          padding: 5rem 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-subtitle {
          color: var(--on-surface-variant);
          font-size: 0.95rem;
          margin-top: 0.875rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Desktop: 3-col bento */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .skill-card {
          padding: 1.5rem;
          grid-column: var(--desktop-col);
          background: rgba(255,255,255,0.03);
        }

        .skill-card-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--secondary);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.38rem 0.8rem;
          background: var(--surface-highest);
          border-left: 2px solid var(--secondary);
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--on-surface);
          cursor: default;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .skill-badge-learning {
          font-size: 0.58rem;
          background: rgba(255,183,132,0.15);
          color: var(--tertiary);
          border-radius: 9999px;
          padding: 0.1rem 0.35rem;
          font-weight: 600;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.875rem;
          }
          .skill-card {
            grid-column: span 1 !important;
          }
          /* Make "Frontend" span full width on tablet */
          .skill-card:first-child {
            grid-column: 1 / -1 !important;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .skills-section {
            padding: 4rem 1rem;
          }
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .skill-card {
            grid-column: 1 !important;
            padding: 1.25rem;
          }
          .skill-chip {
            font-size: 0.75rem;
            padding: 0.32rem 0.65rem;
          }
          .skills-subtitle {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  )
}
