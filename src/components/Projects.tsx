import { useState } from 'react'
import FadeUp from './FadeUp'

interface Project {
  name: string
  subtitle: string
  desc: string
  metrics: (string | JSX.Element)[]
  stack: string[]
  link?: string
}

const projects: Project[] = [
  {
    name: 'Volare',
    subtitle: 'Review & Directory Service',
    desc: 'Full-stack AI travel platform using React/TypeScript and reactive Spring Boot WebFlux, integrating 3 external APIs for itinerary generation, flight aggregation, and restaurant discovery.',
    metrics: [
      <><strong>99%</strong> reduction in cache-hit latency (1ms vs. 400–600ms upstream)</>,
      <><strong>95%</strong> fewer redundant API calls during upstream failures</>,
      <>Automated CI/CD with <strong>Docker, GitHub Actions, Render, and Vercel</strong></>,
      <>Resolved production-critical <strong>Spring WebClient auth leak</strong>, eliminating 401 failures</>,
    ],
    stack: ['React', 'TypeScript', 'Spring Boot', 'WebFlux', 'Resilience4j', 'Docker', 'GitHub Actions'],
    link: 'https://volare-phi.vercel.app/',
  },
  {
    name: 'LockIn',
    subtitle: 'Chrome Extension',
    desc: 'Lightweight Chrome extension that removes YouTube Shorts and Instagram Reels across 5 layout variants using a debounced MutationObserver. Zero dependencies, zero network requests, no telemetry.',
    metrics: [
      <><strong>5.5KB</strong>, zero dependencies</>,
      <>Covers <strong>5 layout variants</strong> including A/B tests</>,
      <><strong>7 hand-tuned selectors</strong> with zero false positives</>,
      <>Passes <strong>Chrome Web Store</strong> remote code policy</>,
    ],
    stack: ['JavaScript', 'Chrome MV3', 'MutationObserver', 'CSS :has()'],
    link: 'https://github.com/RyanTN8/LockIn',
  },
  {
    name: 'HTTP Reverse Proxy',
    subtitle: 'Load Balancer',
    desc: 'Zero-dependency HTTP reverse proxy and load balancer in Go with multiple routing strategies, per-route backend pools, longest-prefix path matching, and production-grade fault tolerance.',
    metrics: [
      <>Round-robin, least-connections, and <strong>IP-hash sticky routing</strong></>,
      <><strong>Health-checked</strong> backend eviction and bounded retry-on-5xx across 3 replicas</>,
      <><strong>TLS termination</strong>, structured logging, and graceful shutdown</>,
    ],
    stack: ['Go', 'net/http/httputil'],
    link: 'https://github.com/RyanTN8/HTTP-Reverse-Proxy-Load-Balancer',
  },
  {
    name: 'Laser Tag',
    subtitle: 'Social Media Platform',
    desc: 'Campus social platform for event discovery and student engagement. Python FastAPI backend with real-time Firestore sync, Google OAuth, and media upload pipelines.',
    metrics: [
      <><strong>35+</strong> verified student accounts</>,
      <><strong>100+</strong> student-uploaded images</>,
      <><strong>35%</strong> engagement improvement from launch</>,
      <>Real-time data sync across all clients</>,
    ],
    stack: ['Python', 'FastAPI', 'React', 'Firebase', 'Firestore', 'Google OAuth', 'Firebase Storage'],
  },
]

function FlipCard({ p, index }: { p: Project; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip-card${flipped ? ' flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-inner">
        {/* Front */}
        <div className="flip-front">
          <div className="flip-num">0{index + 1}</div>
          <div className="flip-project-name">{p.name}</div>
          <div className="flip-project-sub">{p.subtitle}</div>
          <p className="flip-project-desc">{p.desc}</p>
          <div className="flip-hint">Hover to see details →</div>
        </div>

        {/* Back */}
        <div className="flip-back">
          <div className="flip-back-top">
            <div className="flip-back-label">Impact</div>
            <div className="flip-metrics">
              {p.metrics.map((m, i) => (
                <div key={i} className="flip-metric">{m}</div>
              ))}
            </div>
            <div className="flip-back-label">Stack</div>
            <div className="flip-tags">
              {p.stack.map((t) => (
                <span key={t} className="flip-tag">{t}</span>
              ))}
            </div>
          </div>
          {p.link && (
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="flip-link">
              {p.link.includes('github.com') ? 'View on GitHub' : 'Live Demo'}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <FadeUp>
        <div className="section-header">
          <div className="section-eyebrow">Selected Work</div>
          <div className="section-title">Projects</div>
        </div>
      </FadeUp>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <FadeUp key={p.name} delay={i + 1}>
            <FlipCard p={p} index={i} />
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
