import FadeUp from './FadeUp'

interface Project {
  name: string
  subtitle: string
  desc: string
  metrics: (string | JSX.Element)[]
  stack: string[]
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

export default function Projects() {
  return (
    <section id="projects">
      <FadeUp>
        <div className="section-header">
          <div className="section-eyebrow">Selected Work</div>
          <div className="section-title">Projects</div>
        </div>
      </FadeUp>
      <div className="projects-list">
        {projects.map((p, i) => (
          <FadeUp key={p.name} delay={i + 1}>
            <div className="project-row">
              <div className="project-left">
                <div className="project-name">{p.name}</div>
                <div className="project-subtitle">{p.subtitle}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-metrics">
                  {p.metrics.map((m, j) => (
                    <div key={j} className="metric">{m}</div>
                  ))}
                </div>
              </div>
              <div className="project-right">
                <div className="project-stack-label">Stack</div>
                <div className="project-tags">
                  {p.stack.map((tag) => (
                    <span key={tag} className="ptag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
