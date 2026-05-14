const stats = [
  { num: '95%', label: 'Iteration time reduction' },
  { num: '9', label: 'Engineers led' },
  { num: '4+', label: 'LLMs benchmarked' },
]

export default function Hero() {
  return (
    <section id="hero" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Available Jun 2026 &nbsp;·&nbsp; Incoming @ Genuine Parts Company
          </div>
          <h1 className="hero-name">
            Software
            <br />
            Engineer
          </h1>
          <p className="hero-desc">
            UC Berkeley CS. Full-stack engineering across distributed systems, LLM
            infrastructure, and production web applications. I build things that ship.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-solid">
              View Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Resume
            </a>
          </div>
        </div>

        <div className="hero-meta">
          {stats.map((s, i) => (
            <div key={s.label} style={{ display: 'contents' }}>
              <div className="hero-meta-item">
                <div className="hero-meta-num">{s.num}</div>
                <div className="hero-meta-label">{s.label}</div>
              </div>
              {i < stats.length - 1 && <div className="hero-meta-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
