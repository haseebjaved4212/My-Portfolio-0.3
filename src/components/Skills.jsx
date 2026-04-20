import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  // Core Web
  { name: 'HTML5',         icon: '🌐', level: 'Expert',     category: 'Core' },
  { name: 'CSS3',          icon: '🎨', level: 'Expert',     category: 'Core' },
  { name: 'JavaScript',    icon: '⚡', level: 'Expert',     category: 'Core' },
  { name: 'TypeScript',    icon: '🔷', level: 'Advanced',   category: 'Core' },
  // Frameworks
  { name: 'React.js',      icon: '⚛️', level: 'Expert',     category: 'Framework' },
  { name: 'Next.js',       icon: '▲',  level: 'Advanced',   category: 'Framework' },
  { name: 'TailwindCSS',   icon: '🌊', level: 'Expert',     category: 'Styling' },
  // Creative
  { name: 'Three.js',      icon: '🧊', level: 'Advanced',   category: 'Creative' },
  { name: 'GSAP',          icon: '🟢', level: 'Advanced',   category: 'Creative' },
  { name: 'Spline 3D',     icon: '🌀', level: 'Advanced',   category: 'Creative' },
  // Backend / Ops
  { name: 'Python',        icon: '🐍', level: 'Learning',   category: 'Backend' },
  { name: 'DevOps',        icon: '🔧', level: 'Strong Foundation', category: 'Ops' },
  { name: 'Networking',    icon: '🔌', level: 'Strong Foundation', category: 'Ops' },
  { name: 'AI / N8N',      icon: '🤖', level: 'Advanced',   category: 'AI' },
]

const levelColor = {
  'Expert':             'var(--primary-container)',
  'Advanced':           'var(--secondary-container)',
  'Strong Foundation':  '#a15100',
  'Learning':           'rgba(255,255,255,0.12)',
}

const categories = [
  {
    id: 'main',
    label: '⚛️ Frontend',
    cols: '1 / 3',
    items: skills.filter(s => ['Core', 'Framework', 'Styling'].includes(s.category)),
  },
  {
    id: 'creative',
    label: '🎨 Creative & 3D',
    cols: '3 / 4',
    items: skills.filter(s => s.category === 'Creative'),
  },
  {
    id: 'ops',
    label: '🔧 DevOps & Infra',
    cols: '1 / 2',
    items: skills.filter(s => s.category === 'Ops'),
  },
  {
    id: 'backend',
    label: '🐍 Backend',
    cols: '2 / 3',
    items: skills.filter(s => s.category === 'Backend'),
  },
  {
    id: 'ai',
    label: '🤖 AI Automation',
    cols: '3 / 4',
    items: skills.filter(s => s.category === 'AI'),
  },
]

function SkillCard({ cat, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="glass"
      style={{
        padding: '1.75rem',
        gridColumn: cat.cols,
        background: 'rgba(255,255,255,0.03)',
      }}
    >
      <p style={{
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
        color: 'var(--secondary)', marginBottom: '1.25rem', textTransform: 'uppercase',
      }}>
        {cat.label}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {cat.items.map(skill => (
          <motion.span
            key={skill.name}
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 0.9rem',
              background: 'var(--surface-highest)',
              borderLeft: `2px solid ${levelColor[skill.level] || 'var(--secondary)'}`,
              borderRadius: '0.5rem',
              fontSize: '0.82rem', fontWeight: 500,
              color: skill.level === 'Learning' ? 'var(--on-surface-variant)' : 'var(--on-surface)',
              cursor: 'default', transition: 'all 0.2s ease',
              position: 'relative',
            }}
            title={skill.level}
          >
            <span>{skill.icon}</span>
            {skill.name}
            {skill.level === 'Learning' && (
              <span style={{
                fontSize: '0.6rem', background: 'rgba(255,183,132,0.15)',
                color: 'var(--tertiary)', borderRadius: '9999px',
                padding: '0.1rem 0.4rem', fontWeight: 600,
              }}>learning</span>
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
    <section id="skills" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      {/* Heading */}
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headIn ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <p className="section-label">What I bring</p>
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p style={{
          color: 'var(--on-surface-variant)', fontSize: '1rem', marginTop: '1rem',
          maxWidth: 500, margin: '1rem auto 0',
        }}>
          A versatile stack spanning frontend craftsmanship, 3D creativity, DevOps foundations, and AI automation.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.25rem',
      }} className="skills-grid">
        {categories.map((cat, i) => (
          <SkillCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > * { grid-column: 1 !important; }
        }
      `}</style>
    </section>
  )
}
