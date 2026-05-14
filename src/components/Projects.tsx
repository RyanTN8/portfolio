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
    desc: 'Full-stack travel platform aggregating real-time flights, restaurants, and reviews with AI-powered itinerary generation. Built on a Java and Spring Boot backend with React frontend.',
    metrics: [
      <><strong>50+ active users</strong></>,
      <><strong>&lt;500ms</strong> average backend response time</>,
      <><strong>38%</strong> improvement in search coverage</>,
      <><strong>50%</strong> reduction in user input steps</>,
    ],
    stack: ['Java', 'Spring Boot', 'React', 'OpenAI API', 'Yelp API', 'Amadeus API', 'Spring WebClient'],
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
