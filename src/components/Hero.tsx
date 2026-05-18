import { useEffect, useRef, useState } from 'react'

const roles = ['Software Engineer', 'Full-Stack Developer', 'Systems Builder', 'ML Engineer']

const rawStats = [
  { end: 95, suffix: '%', label: 'Iteration time reduction' },
  { end: 9,  suffix: '',  label: 'Engineers led' },
  { end: 4,  suffix: '+', label: 'LLMs benchmarked' },
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1200
        const startTime = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setVal(Math.round(eased * end))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="hero-meta-num">
      {val}{suffix}
    </div>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length)
    }, 2800)
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
            <span key={roleIdx} className="word-cycle">
              {roles[roleIdx]}
            </span>
          </div>
          <p className="hero-desc">
            UC Berkeley CS. Full-stack engineering across distributed systems, LLM
            infrastructure, and production web applications. I build things that ship.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-solid">View Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Resume
            </a>
          </div>
        </div>

        <div className="hero-meta">
          {rawStats.map((s, i) => (
            <div key={s.label} style={{ display: 'contents' }}>
              <div className="hero-meta-item">
                <CountUp end={s.end} suffix={s.suffix} />
                <div className="hero-meta-label">{s.label}</div>
              </div>
              {i < rawStats.length - 1 && <div className="hero-meta-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
