import { useEffect, useRef, useCallback } from "react";
import { motion } from 'framer-motion'
import gsap from "gsap";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const tech = [
  "React.js",
  "Next.js",
  "Three.js",
  "GSAP",
  "TypeScript",
  "TailwindCSS",
  "N8N",
];

/* ── Letter-split animated name ─────────────────────────────── */
const NAME = "Haseeb Javed";
const LETTER_COLORS = [
  "#d2bbff",
  "#4cd7f6",
  "#ffb784",
  "#a78bfa",
  "#34d399",
  "#f472b6",
];

function AnimatedName() {
  const nameRef = useRef(null);

  useEffect(() => {
    const letters = nameRef.current?.querySelectorAll(".name-letter");
    if (!letters) return;
    gsap.to(letters, {
      WebkitTextFillColor: (i) => LETTER_COLORS[i % LETTER_COLORS.length],
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, []);

  return (
    <h1
      ref={nameRef}
      className="hero-name"
      style={{ cursor: "default", userSelect: "none" }}
    >
      {NAME.split("").map((char, i) => (
        <span
          key={i}
          className="name-letter"
          style={{
            display: "inline-block",
            WebkitTextFillColor: "transparent",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

/* ── Shimmer role text ───────────────────────────────────────── */
function ShimmerRole() {
  return (
    <p className="hero-role shimmer-text">
      Frontend Developer &amp; Creative Coder
    </p>
  );
}

/* ── Main Hero ───────────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const textRef = useRef(null);
  const spotlightRef = useRef(null);

  /* GSAP orbs + text entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orb1Ref.current, {
        y: -40,
        x: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orb2Ref.current, {
        y: 30,
        x: -25,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
      gsap.to(orb3Ref.current, {
        y: -20,
        x: 15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
      const els = textRef.current?.querySelectorAll("[data-gsap]");
      if (els?.length) {
        gsap.fromTo(
          els,
          { y: 32 },
          {
            y: 0,
            stagger: 0.1,
            duration: 0.75,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  /* Cursor spotlight */
  const handleMouseMove = useCallback((e) => {
    if (!spotlightRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.background = "transparent";
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor spotlight layer */}
      <div
        ref={spotlightRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.1s ease",
        }}
      />

      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          ref={orb1Ref}
          style={{
            position: "absolute",
            top: "10%",
            left: "60%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          ref={orb2Ref}
          style={{
            position: "absolute",
            top: "50%",
            left: "70%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          ref={orb3Ref}
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(74,68,85,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,68,85,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="hero-grid" style={{ position: "relative", zIndex: 1 }}>
        {/* Text column */}
        <div ref={textRef} className="hero-text">
          {/* Badge */}
          <div data-gsap style={{ marginBottom: "1.25rem" }}>
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Available for Work
            </span>
          </div>

          <div data-gsap>
            <p className="hero-greeting">
              Hi there <span className="wave-emoji">👋</span> I'm
            </p>
          </div>

          {/* Animated name */}
          <div data-gsap>
            <AnimatedName />
          </div>

          {/* Shimmer role */}
          <div data-gsap>
            <ShimmerRole />
          </div>

          {/* Description */}
          <div data-gsap>
            <p className="hero-desc">
              I craft immersive digital experiences with cutting-edge
              technologies. Passionate about beautiful UI, 3D interactions, and
              AI automation, turning ideas into pixel-perfect reality.
            </p>
          </div>

          {/* CTAs */}
          <div data-gsap className="hero-cta">
            <a
              href="/My-CV.pdf"
              download
              className="btn-glow primary shine-btn"
            >
              <FiDownload /> Download CV
            </a>
            <a href="#projects" className="btn-glow secondary">
              View Projects <FiArrowRight />
            </a>
          </div>

          {/* Tech chips */}
          <div data-gsap>
            <p
              style={{
                fontSize: "0.72rem",
                color: "var(--on-surface-variant)",
                marginBottom: "0.65rem",
                opacity: 0.6,
                letterSpacing: "0.1em",
              }}
            >
              WORKING WITH
            </p>
            <div className="hero-tech-chips">
              {tech.map((t) => (
                <span key={t} className="lume-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="hero-avatar"
          style={{ position: "relative" }}
        >
          <div className="glass avatar-card">
            <div className="avatar-circle">HJ</div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "var(--on-surface)",
              }}
            >
              Haseeb Javed
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--on-surface-variant)",
                marginTop: "0.25rem",
              }}
            >
              Frontend Developer
            </p>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="avatar-badge-top"
            >
              ✦ React &amp; Next.js
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="avatar-badge-bottom"
            >
              ⬡ Three.js &amp; GSAP
            </motion.div>
          </div>
          <div className="avatar-ring" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="scroll-indicator"
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-line"
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(124,58,237,0.8); }
          50% { opacity: 0.4; box-shadow: 0 0 3px rgba(124,58,237,0.3); }
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .wave-emoji {
          display: inline-block;
          animation: wave 1.2s ease-in-out infinite;
          transform-origin: 70% 70%;
          margin: 0 0.2em;
        }

        /* ── Shimmer animation ── */
        @keyframes shimmer-sweep {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          position: relative;
          background-size: 400% auto;
          transition: background-image 0.4s ease;
        }
        .shimmer-text:hover {
          background: linear-gradient(
            90deg,
            var(--primary) 0%,
            #4cd7f6 25%,
            #ffb784 50%,
            var(--primary) 75%,
            #4cd7f6 100%
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-sweep 2s linear infinite;
        }

        /* ── Shine button ── */
        @keyframes shine-sweep {
          0%   { left: -80%; }
          60%  { left: 120%; }
          100% { left: 120%; }
        }
        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
          content: '';
          position: absolute;
          top: -50%; left: -80%;
          width: 60%; height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-20deg);
          animation: shine-sweep 2.5s ease infinite;
        }

        /* ── Name gradient (always on) ── */
        .hero-name {
          font-size: clamp(2.4rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, #e4e1e9 30%, #d2bbff 70%, #4cd7f6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          display: block;
        }
        .name-letter {
          display: inline-block;
          will-change: transform, color;
          transition: none;
        }

        /* ── Badge ── */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.35rem 0.9rem; border-radius: 9999px;
          background: rgba(124,58,237,0.12); border: 1px solid rgba(124,58,237,0.3);
          color: var(--primary); font-size: 0.78rem; font-weight: 600;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .hero-badge:hover {
          background: rgba(124,58,237,0.22);
          border-color: rgba(124,58,237,0.6);
          box-shadow: 0 0 16px rgba(124,58,237,0.3);
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #7c3aed;
          box-shadow: 0 0 8px rgba(124,58,237,0.8);
          display: inline-block;
          animation: pulse 2s ease-in-out infinite;
        }

        /* ── Layout ── */
        .hero-section {
          min-height: 100vh; display: flex; align-items: center;
          position: relative; overflow: hidden; padding: 5.5rem 1.25rem 4rem;
        }
        .hero-grid {
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr auto;
          gap: 3rem; align-items: center;
        }
        .hero-greeting {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          color: var(--on-surface-variant); font-weight: 500; margin-bottom: 0.4rem;
        }
        .hero-role {
          font-size: clamp(1rem, 3vw, 1.65rem);
          color: var(--primary); font-weight: 700;
          margin-bottom: 1.25rem; letter-spacing: -0.01em; cursor: default;
        }
        .hero-desc {
          font-size: 0.95rem; color: var(--on-surface-variant);
          line-height: 1.75; max-width: 520px; margin-bottom: 2rem;
        }
        .hero-cta { display: flex; flex-wrap: wrap; gap: 0.875rem; margin-bottom: 2.25rem; }
        .hero-tech-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; }

        /* ── Avatar ── */
        .avatar-card {
          width: 260px; height: 300px; overflow: visible;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          position: relative; background: rgba(124,58,237,0.08);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .avatar-card:hover {
          box-shadow: 0 0 60px rgba(124,58,237,0.25);
          border-color: rgba(124,58,237,0.5) !important;
        }
        .avatar-circle {
          width: 110px; height: 110px; border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          display: flex; align-items: center; justify-content: center;
          font-size: 2.25rem; font-weight: 900; color: #fff;
          box-shadow: 0 0 40px rgba(124,58,237,0.5);
          margin-bottom: 1rem;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .avatar-card:hover .avatar-circle {
          box-shadow: 0 0 60px rgba(124,58,237,0.8);
          transform: scale(1.05);
        }
        .avatar-badge-top {
          position: absolute; top: 16px; right: -14px;
          background: linear-gradient(135deg, rgba(124,58,237,0.9), rgba(124,58,237,0.7));
          backdrop-filter: blur(10px); border: 1px solid rgba(124,58,237,0.5);
          border-radius: 0.75rem; padding: 0.35rem 0.65rem;
          font-size: 0.68rem; font-weight: 700; color: #ede0ff; white-space: nowrap;
          transition: box-shadow 0.3s ease;
        }
        .avatar-badge-top:hover { box-shadow: 0 0 20px rgba(124,58,237,0.6); }
        .avatar-badge-bottom {
          position: absolute; bottom: 36px; left: -18px;
          background: rgba(6,182,212,0.15); backdrop-filter: blur(10px);
          border: 1px solid rgba(6,182,212,0.4);
          border-radius: 0.75rem; padding: 0.35rem 0.65rem;
          font-size: 0.68rem; font-weight: 700; color: var(--secondary); white-space: nowrap;
          transition: box-shadow 0.3s ease;
        }
        .avatar-badge-bottom:hover { box-shadow: 0 0 20px rgba(6,182,212,0.5); }
        .avatar-ring {
          position: absolute; inset: -20px; border-radius: 2rem;
          border: 1px solid rgba(124,58,237,0.15); pointer-events: none;
          transition: border-color 0.4s ease;
        }
        .avatar-card:hover ~ .avatar-ring, .hero-avatar:hover .avatar-ring {
          border-color: rgba(124,58,237,0.35);
        }

        /* ── Scroll indicator ── */
        .scroll-indicator {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
        }
        .scroll-indicator span {
          font-size: 0.65rem; color: var(--on-surface-variant); opacity: 0.45; letter-spacing: 0.15em;
        }
        .scroll-line {
          width: 1.5px; height: 28px;
          background: linear-gradient(to bottom, var(--primary-container), transparent);
          border-radius: 99px;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section { padding: 5rem 1rem 3.5rem; align-items: flex-start; padding-top: 5.5rem; }
          .hero-grid { grid-template-columns: 1fr; gap: 0; }
          .hero-avatar { display: none !important; }
          .hero-name { font-size: clamp(2.4rem, 11vw, 3.5rem); }
          .hero-role { font-size: clamp(0.95rem, 4vw, 1.2rem); }
          .hero-desc { font-size: 0.9rem; margin-bottom: 1.75rem; }
          .hero-cta { gap: 0.75rem; margin-bottom: 1.75rem; }
          .hero-cta .btn-glow { font-size: 0.85rem; padding: 0.6rem 1.2rem; }
        }
        @media (max-width: 400px) {
          .hero-name { font-size: 2.25rem; }
          .hero-cta { flex-direction: column; }
          .hero-cta .btn-glow { text-align: center; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
