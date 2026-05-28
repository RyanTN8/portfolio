import { useState } from 'react'
import FadeUp from './FadeUp'

const icons: Record<string, JSX.Element> = {
  Volare: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  LockIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
  'HTTP Reverse Proxy': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  'Laser Tag': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
}

interface Project {
  name: string
  subtitle: string
  desc: string
  metrics: (string | JSX.Element)[]
  stack: string[]
  link?: string
  linkLabel?: string
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
    link: 'https://chromewebstore.google.com/detail/lockin-restoring-your-att/pejnoenpchgfjcjhpmlgddoademgljmg?utm_source=item-share-cb',
    linkLabel: 'Download Extension',
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
          <div className="flip-top-row">
            <div className="flip-num">0{index + 1}</div>
            {icons[p.name] && <div className="flip-icon">{icons[p.name]}</div>}
          </div>
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
                <div key={i} className="flip-metric"><span>{m}</span></div>
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
              {p.linkLabel ?? (p.link.includes('github.com') ? 'View on GitHub' : 'Live Demo')}
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
