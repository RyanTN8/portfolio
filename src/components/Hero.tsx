import { useEffect, useState } from 'react'

const roles = ['Software Engineer', 'Full-Stack Developer', 'Systems Builder', 'ML Engineer']

const lines = [
  { tokens: [{ t: 'const', c: 'tk-kw' }, { t: ' ryan ', c: 'tk-plain' }, { t: '=', c: 'tk-op' }, { t: ' {', c: 'tk-plain' }] },
  { tokens: [{ t: '  role', c: 'tk-key' }, { t: ': ', c: 'tk-plain' }, { t: '"full-stack engineer"', c: 'tk-str' }, { t: ',', c: 'tk-plain' }] },
  { tokens: [{ t: '  school', c: 'tk-key' }, { t: ': ', c: 'tk-plain' }, { t: '"UC Berkeley"', c: 'tk-str' }, { t: ',', c: 'tk-plain' }] },
  { tokens: [{ t: '  major', c: 'tk-key' }, { t: ': ', c: 'tk-plain' }, { t: '"computer science"', c: 'tk-str' }, { t: ',', c: 'tk-plain' }] },
  { tokens: [{ t: '  stack', c: 'tk-key' }, { t: ': [', c: 'tk-plain' }, { t: '"Go"', c: 'tk-str' }, { t: ', ', c: 'tk-plain' }, { t: '"Java"', c: 'tk-str' }, { t: ', ', c: 'tk-plain' }, { t: '"Python"', c: 'tk-str' }, { t: ', ', c: 'tk-plain' }, { t: '"TS"', c: 'tk-str' }, { t: '],', c: 'tk-plain' }] },
  { tokens: [{ t: '  status', c: 'tk-key' }, { t: ': ', c: 'tk-plain' }, { t: '"available jun 2026"', c: 'tk-str' }] },
  { tokens: [{ t: '}', c: 'tk-plain' }] },
]

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)

  const fullText = (lineIdx: number) =>
    lines[lineIdx].tokens.map((tk) => tk.t).join('')

  useEffect(() => {
    if (visibleLines >= lines.length) { setDone(true); return }
    const target = fullText(visibleLines).length
    if (charIdx < target) {
      const id = setTimeout(() => setCharIdx((c) => c + 1), 28)
      return () => clearTimeout(id)
    } else {
      const id = setTimeout(() => {
        setVisibleLines((l) => l + 1)
        setCharIdx(0)
      }, 60)
      return () => clearTimeout(id)
    }
  }, [visibleLines, charIdx])

  const renderLine = (lineIdx: number, partial?: number) => {
    const tks = lines[lineIdx].tokens
    let remaining = partial ?? Infinity
    return tks.map((tk, i) => {
      if (remaining <= 0) return null
      const shown = tk.t.slice(0, remaining)
      remaining -= tk.t.length
      return <span key={i} className={tk.c}>{shown}</span>
    })
  }

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="tb-dot" style={{ background: '#ff5f57' }} />
        <span className="tb-dot" style={{ background: '#ffbd2e' }} />
        <span className="tb-dot" style={{ background: '#28c840' }} />
        <span className="tb-filename">ryan.ts</span>
      </div>
      <div className="terminal-body">
        {lines.map((_, i) => {
          if (i < visibleLines) return <div key={i} className="t-line">{renderLine(i)}</div>
          if (i === visibleLines) return (
            <div key={i} className="t-line">
              {renderLine(i, charIdx)}
              {!done && <span className="t-cursor" />}
            </div>
          )
          return null
        })}
        {done && <span className="t-cursor" />}
      </div>
    </div>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Available Jun 2026 &nbsp;·&nbsp; Incoming @ Genuine Parts Company
          </div>
          <h1 className="hero-name">Ryan<br />Nguyen</h1>
          <div className="hero-role-line">
            <span key={roleIdx} className="word-cycle">{roles[roleIdx]}</span>
          </div>
          <p className="hero-desc">
            UC Berkeley Computer Science Student. Full-stack engineering across distributed systems, LLM
            infrastructure, and production web applications. I build things that ship.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-solid">View Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Resume</a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  )
}
