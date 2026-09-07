import { lazy, Suspense } from 'react'
const HeroPrism = lazy(() => import('./HeroPrism'))

export default function Hero() {
  return (
    <section id="hero" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Available Summer 2027 &nbsp;·&nbsp; Incoming @ Amazon Web Services
          </div>
          <h1 className="hero-name">Ryan<br />Nguyen</h1>
          <p className="hero-desc">
            UC Berkeley Computer Science Student. Full-stack engineering across distributed systems, LLM
            infrastructure, and production web applications.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-outline">View Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-solid">Resume</a>
          </div>
        </div>
        <Suspense fallback={<div className="hero-prism" aria-hidden="true" />}>
          <HeroPrism />
        </Suspense>
      </div>
    </section>
  )
}
