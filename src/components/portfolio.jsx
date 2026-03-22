import React, { useState, useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════
   INLINE STYLES — "Black Forge" Design System
   ═══════════════════════════════════════════════════════ */

const colors = {
  bgDeep: '#0a0a0a',
  bgSurface: '#111111',
  bgCard: '#161616',
  accent: '#FF5500',
  accentGlow: '#FF7733',
  accentDark: '#CC3300',
  textPrimary: '#F0F0F0',
  textSecondary: '#888888',
  border: '#222222',
  borderAccent: 'rgba(255,85,0,0.2)',
};

const fonts = {
  display: "'Bebas Neue', sans-serif",
  heading: "'Syne', sans-serif",
  body: "'DM Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

/* ═══ DATA ═══ */

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  {
    id: 1, title: 'GoodHome', featured: true,
    description: 'Family communication platform — real-time messaging, media sharing, group isolation',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel'],
    github: 'https://github.com/sathwik324', live: '#',
  },
  {
    id: 2, title: 'AI Chatbot', featured: false,
    description: 'Conversational AI assistant with NLP pipeline and modern chat UI',
    tech: ['Python', 'React', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/sathwik324', live: '#',
  },
  {
    id: 3, title: 'Movie Recommendation System', featured: false,
    description: 'Content-based ML recommender using TF-IDF and cosine similarity',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Streamlit'],
    github: 'https://github.com/sathwik324', live: '#',
  },

];

const skillGroups = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML/CSS', 'Vite'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'FastAPI'] },
  { title: 'AI / ML', skills: ['Python', 'scikit-learn', 'Pandas', 'OpenAI'] },
  { title: 'Tools', skills: ['Git', 'Vercel', 'VS Code', 'Postman'] },
];

const row1Skills = [
  { label: 'React', icon: '⚛️' }, { label: 'JavaScript', icon: '🟨' },
  { label: 'Node.js', icon: '🟩' }, { label: 'Python', icon: '🐍' },
  { label: 'MongoDB', icon: '🍃' }, { label: 'Express', icon: '🚂' },
  { label: 'HTML/CSS', icon: '🎨' }, { label: 'FastAPI', icon: '⚡' },
  { label: 'Git', icon: '🔀' }, { label: 'Vite', icon: '⚡' },
];

const row2Skills = [
  { label: 'scikit-learn', icon: '🤖' }, { label: 'Pandas', icon: '🐼' },
  { label: 'OpenAI', icon: '🧠' }, { label: 'Vercel', icon: '▲' },
  { label: 'Java', icon: '☕' }, { label: 'TensorFlow', icon: '🔶' },
  { label: 'SQL', icon: '💾' }, { label: 'REST APIs', icon: '🔗' },
  { label: 'Postman', icon: '📬' }, { label: 'VS Code', icon: '💻' },
];



/* ═══ HOOKS ═══ */

function useIntersection(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return [ref, isVisible];
}



/* ═══ SVG ICONS ═══ */

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

/* ═══ CSS KEYFRAMES (injected once) ═══ */

const styleTag = document.createElement('style');
styleTag.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
  body { font-family: ${fonts.body}; background: ${colors.bgDeep}; color: ${colors.textPrimary}; line-height: 1.6; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  ul, ol { list-style: none; }
  button { cursor: pointer; border: none; background: none; font-family: inherit; color: inherit; }
`;
if (!document.querySelector('#portfolio-styles')) {
  styleTag.id = 'portfolio-styles';
  document.head.appendChild(styleTag);
}

/* ═══════════════════════════════════════════════════════
   PORTFOLIO COMPONENT
   ═══════════════════════════════════════════════════════ */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: colors.bgDeep, minHeight: '100vh' }}>
      {/* ——— NAVBAR ——— */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ——— HERO ——— */}
      <Hero />

      <Divider />

      {/* ——— ABOUT ——— */}
      <About />

      <Divider />

      {/* ——— PROJECTS ——— */}
      <Projects />

      <Divider />

      {/* ——— SKILLS ——— */}
      <Skills />

      <Divider />

      {/* ——— CONTACT ——— */}
      <Contact />

      {/* ——— FOOTER ——— */}
      <Footer />
    </div>
  );
}

/* ═══ DIVIDER ═══ */
function Divider() {
  return <hr style={{ width: '100%', height: 1, background: colors.border, border: 'none', margin: 0 }} />;
}

/* ═══ CONTAINER ═══ */
const containerStyle = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 24px',
  width: '100%',
};

/* ═══ SECTION HEADER ═══ */
function SectionHeader({ counter, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 48 }}>
      <span style={{ fontFamily: fonts.display, fontSize: '1.2rem', color: colors.accent, letterSpacing: 2 }}>{counter}</span>
      <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(2rem, 5vw, 3rem)', color: colors.textPrimary, letterSpacing: 2 }}>{title}</h2>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: 72,
        display: 'flex', alignItems: 'center',
        background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.border}`,
      }}>
        <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="https://github.com/sathwik324" style={{ fontFamily: fonts.display, fontSize: '2rem', color: colors.accent, letterSpacing: 2 }}>Portfolio</a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 32 }} className="nav-desktop">
            {navLinks.map(l => (
              <li key={l.href}>
                <NavLink href={l.href}>{l.label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger-btn"
            style={{ display: 'none', flexDirection: 'column', gap: 5, zIndex: 1001 }}
          >
            <span style={{
              display: 'block', width: 24, height: 2, background: colors.textPrimary,
              transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 24, height: 2, background: colors.textPrimary,
              transition: 'all 0.3s', opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 24, height: 2, background: colors.textPrimary,
              transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,10,10,0.97)', zIndex: 999,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: fonts.display, fontSize: '2rem', color: colors.textPrimary, letterSpacing: 4, transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = colors.accent}
              onMouseLeave={e => e.target.style.color = colors.textPrimary}
            >{l.label}</a>
          ))}
        </div>
      )}

      {/* Responsive style for hamburger */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: fonts.body, fontSize: '0.9rem', color: hovered ? colors.textPrimary : colors.textSecondary,
        position: 'relative', padding: '4px 0', transition: 'color 0.3s', letterSpacing: 0.5, display: 'inline-block',
      }}
    >
      {children}
      <span style={{
        position: 'absolute', bottom: 0, left: 0, height: 2, background: colors.accent,
        width: hovered ? '100%' : 0, transition: 'width 0.3s',
      }} />
    </a>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 72,
    }}>
      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none', zIndex: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      }} />

      <div style={{ ...containerStyle, position: 'relative', zIndex: 1 }} className="hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{
            fontFamily: fonts.mono, fontSize: '0.85rem', color: colors.accent,
            letterSpacing: 2, textTransform: 'uppercase',
            animation: 'fadeUp 0.6s ease forwards 0.1s', opacity: 0,
          }}>
            AI Engineer &amp; WEB Developer
          </span>

          <h1 style={{
            fontFamily: fonts.display, fontSize: 'clamp(4rem, 10vw, 7rem)',
            lineHeight: 0.95, color: colors.textPrimary, letterSpacing: 4,
            animation: 'fadeUp 0.6s ease forwards 0.2s', opacity: 0,
          }}>SATHWIK</h1>

          <p style={{
            fontFamily: fonts.body, fontSize: '1.1rem', color: colors.textSecondary,
            maxWidth: 480, lineHeight: 1.7,
            animation: 'fadeUp 0.6s ease forwards 0.3s', opacity: 0,
          }}>
            Building modern web applications and intelligent systems — from
            pixel-perfect interfaces to production ML pipelines.
          </p>

          <div style={{
            display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap',
            animation: 'fadeUp 0.6s ease forwards 0.4s', opacity: 0,
          }}>
            <CtaButton href="#projects" variant="primary">View Projects <ArrowIcon /></CtaButton>
            <CtaButton href="https://github.com/sathwik324" variant="secondary" external>
              <GithubIcon size={18} /> GitHub
            </CtaButton>
          </div>
        </div>

        {/* Code card */}
        <div style={{
          background: colors.bgCard, border: `1px solid ${colors.border}`, borderRadius: 8,
          padding: 32, fontFamily: fonts.mono, fontSize: '0.85rem', lineHeight: 1.8,
          color: colors.textSecondary,
          boxShadow: `0 0 0 1px rgba(255,85,0,0.08), 0 16px 48px rgba(0,0,0,0.4)`,
          animation: 'fadeUp 0.6s ease forwards 0.5s', opacity: 0,
        }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c940', display: 'block' }} />
          </div>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            <code>
              <span style={{ color: '#c792ea' }}>const</span>{' '}
              <span style={{ color: '#82aaff' }}>sathwik</span>{' '}
              <span style={{ color: '#89ddff' }}>= {'{'}</span>{'\n'}
              {'  '}<span style={{ color: '#82aaff' }}>role</span>:{' '}
              <span style={{ color: '#c3e88d' }}>"Full Stack Developer"</span>,{'\n'}
              {'  '}<span style={{ color: '#82aaff' }}>focus</span>:{' '}
              <span style={{ color: '#c3e88d' }}>"AI/ML + Web"</span>,{'\n'}
              {'  '}<span style={{ color: '#82aaff' }}>stack</span>:{' '}
              <span style={{ color: '#89ddff' }}>[</span>
              <span style={{ color: '#c3e88d' }}>"React"</span>,{' '}
              <span style={{ color: '#c3e88d' }}>"Node"</span>,{' '}
              <span style={{ color: '#c3e88d' }}>"Python"</span>
              <span style={{ color: '#89ddff' }}>]</span>,{'\n'}
              {'  '}<span style={{ color: '#82aaff' }}>passion</span>:{' '}
              <span style={{ color: '#c3e88d' }}>"Building cool stuff 🚀"</span>,{'\n'}
              <span style={{ color: '#89ddff' }}>{'}'}</span>;{'\n'}
              {'\n'}
              <span style={{ color: '#546e7a' }}>{'// Open to collaborate →'}</span>
            </code>
          </pre>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-top: 40px;
            padding-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
}

function CtaButton({ href, variant, children, external }) {
  const [hovered, setHovered] = useState(false);
  const isPrimary = variant === 'primary';
  const baseStyle = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '14px 32px', fontFamily: fonts.body, fontWeight: 500,
    fontSize: '0.95rem', borderRadius: 6, transition: 'all 0.3s',
    transform: hovered ? 'translateY(-2px)' : 'none',
  };
  const style = isPrimary
    ? { ...baseStyle, background: hovered ? colors.accentDark : colors.accent, color: colors.bgDeep }
    : { ...baseStyle, background: 'transparent', color: hovered ? colors.accent : colors.textPrimary, border: `1px solid ${hovered ? colors.accent : colors.border}` };

  return (
    <a href={href} style={style}
      target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >{children}</a>
  );
}

/* ═══════════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════════ */

function About() {
  const [ref, isVisible] = useIntersection();
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div style={containerStyle}>
        <SectionHeader counter="01" title="ABOUT" />
        <div ref={ref} className="about-grid" style={{
          opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <div>
            <h3 style={{ fontFamily: fonts.heading, fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, color: colors.textPrimary, marginBottom: 20, lineHeight: 1.3 }}>
              I build things for the web — and teach machines to think.
            </h3>
            <p style={{ fontFamily: fonts.body, fontSize: '1rem', color: colors.textSecondary, lineHeight: 1.8 }}>
              I'm Sathwik, a Computer Science student passionate about full-stack
              development and artificial intelligence. I love turning complex
              problems into clean, user-friendly interfaces. When I'm not
              coding, I'm exploring machine learning research, solving DSA
              problems, or building side projects that push my limits.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {skillGroups.map(g => (
              <div key={g.title}>
                <h3 style={{ fontFamily: fonts.heading, fontSize: '0.85rem', fontWeight: 600, color: colors.accent, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>{g.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {g.skills.map(s => <Chip key={s}>{s}</Chip>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 40px; } }
      `}</style>
    </section>
  );
}

function Chip({ children }) {
  const [h, setH] = useState(false);
  return (
    <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', padding: '8px 14px',
        background: colors.bgCard, border: `1px solid ${h ? colors.accent : colors.border}`,
        borderRadius: 6, fontFamily: fonts.body, fontSize: '0.82rem',
        color: h ? colors.textPrimary : colors.textSecondary, transition: 'all 0.3s',
      }}
    >{children}</span>
  );
}

/* ═══════════════════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════════════════ */

function Projects() {
  const [ref, isVisible] = useIntersection();
  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div style={containerStyle}>
        <SectionHeader counter="02" title="PROJECTS" />
        <div ref={ref} className="projects-grid" style={{
          opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
      <style>{`
        .projects-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
        .project-featured { grid-column: span 2; }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .project-featured { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project }) {
  const [h, setH] = useState(false);
  return (
    <div className={project.featured ? 'project-featured' : ''}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: colors.bgCard, border: `1px solid ${h ? colors.accent : colors.border}`,
        borderRadius: 8, padding: 32, display: 'flex', flexDirection: 'column', gap: 16,
        transition: 'all 0.3s',
        transform: h ? 'translateY(-4px)' : 'none',
        boxShadow: h ? '0 0 24px rgba(255,85,0,0.08)' : 'none',
      }}
    >
      {project.featured && (
        <span style={{ fontFamily: fonts.mono, fontSize: '0.7rem', color: colors.accent, textTransform: 'uppercase', letterSpacing: 2 }}>⚡ Featured Project</span>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ fontFamily: fonts.heading, fontSize: '1.3rem', fontWeight: 700, color: colors.textPrimary }}>{project.title}</h3>
        <div style={{ display: 'flex', gap: 12 }}>
          <IconLink href={project.github}><GithubIcon /></IconLink>
        </div>
      </div>
      <p style={{ fontFamily: fonts.body, fontSize: '0.95rem', color: colors.textSecondary, lineHeight: 1.6 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: '4px 12px', background: colors.bgSurface, border: `1px solid ${colors.border}`,
            borderRadius: 100, fontFamily: fonts.mono, fontSize: '0.72rem', color: colors.textSecondary,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function IconLink({ href, children }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ color: h ? colors.accent : colors.textSecondary, transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}
    >{children}</a>
  );
}

/* ═══════════════════════════════════════════════════════
   SKILLS (TICKER)
   ═══════════════════════════════════════════════════════ */

function Skills() {
  const [ref, isVisible] = useIntersection();
  return (
    <section id="skills" style={{ padding: '100px 0', overflow: 'hidden' }}>
      <div style={containerStyle}>
        <SectionHeader counter="03" title="SKILLS" />
      </div>
      <div ref={ref} style={{
        display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'scrollLeft 30s linear infinite' }}>
          <TickerTrack skills={row1Skills} />
          <TickerTrack skills={row1Skills} />
        </div>
        <div style={{ display: 'flex', width: 'max-content', animation: 'scrollRight 30s linear infinite' }}>
          <TickerTrack skills={row2Skills} />
          <TickerTrack skills={row2Skills} />
        </div>
      </div>
    </section>
  );
}

function TickerTrack({ skills }) {
  return (
    <div style={{ display: 'flex', gap: 12, paddingRight: 12 }}>
      {skills.map((s, i) => <SkillBadge key={i} icon={s.icon} label={s.label} />)}
    </div>
  );
}

function SkillBadge({ icon, label }) {
  const [h, setH] = useState(false);
  return (
    <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px',
        background: colors.bgCard, border: `1px solid ${h ? colors.accent : colors.border}`,
        borderRadius: 6, fontFamily: fonts.body, fontSize: '0.85rem',
        color: h ? colors.textPrimary : colors.textSecondary, whiteSpace: 'nowrap', transition: 'all 0.3s',
      }}
    >
      <span style={{ fontSize: '1.1rem' }}>{icon}</span> {label}
    </span>
  );
}



/* ═══════════════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════════════ */

function Contact() {
  const [ref, isVisible] = useIntersection();
  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div style={containerStyle}>
        <SectionHeader counter="04" title="CONTACT" />
        <div ref={ref} style={{
          textAlign: 'center', maxWidth: 600, margin: '0 auto',
          opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <h3 style={{ fontFamily: fonts.display, fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: colors.textPrimary, letterSpacing: 4, marginBottom: 16, lineHeight: 1.1 }}>
            LET'S BUILD SOMETHING
          </h3>
          <p style={{ fontFamily: fonts.body, fontSize: '1rem', color: colors.textSecondary, marginBottom: 32, lineHeight: 1.6 }}>
            Always open to new opportunities, collaborations, and interesting conversations. Drop me a line.
          </p>
          <EmailLink />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 40 }}>
            <SocialButton href="https://github.com/sathwik324"><GithubIcon size={20} /></SocialButton>
            <SocialButton href="https://linkedin.com/in/sathwik"><LinkedInIcon /></SocialButton>
            <SocialButton href="mailto:gajulasathwik23@gmail.com"><MailIcon /></SocialButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailLink() {
  const [h, setH] = useState(false);
  return (
    <a href="mailto:gajulasathwik23@gmail.com"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-block', fontFamily: fonts.heading, fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
        fontWeight: 600, color: colors.accent,
        borderBottom: h ? `2px solid ${colors.accent}` : '2px solid transparent',
        transition: 'border-color 0.3s',
      }}
    >gajulasathwik23@gmail.com</a>
  );
}

function SocialButton({ href, children }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48,
        border: `1px solid ${h ? colors.accent : colors.border}`, borderRadius: 6,
        color: h ? colors.accent : colors.textSecondary, transition: 'all 0.3s',
        transform: h ? 'translateY(-3px)' : 'none',
      }}
    >{children}</a>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer style={{ padding: '32px 0', borderTop: `1px solid ${colors.border}` }}>
      <div style={{ ...containerStyle, textAlign: 'center', fontFamily: fonts.body, fontSize: '0.82rem', color: colors.textSecondary, letterSpacing: 0.5 }}>
        © 2025 <span style={{ color: colors.accent }}>Sathwik</span> · Built with React · Deployed on Vercel
      </div>
    </footer>
  );
}
