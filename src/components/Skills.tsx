import FadeUp from './FadeUp'

const rows = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'Go', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS (Tailwind, BOLT)', 'SQL', 'RISC-V Assembly'],
    reverse: false,
  },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'Spring Boot (Data JPA, WebClient, WebFlux)', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase/Firestore', 'AWS', 'Google Cloud (BigQuery, Vertex AI)', 'Redis', 'Elasticsearch'],
    reverse: true,
  },
  {
    label: 'Frontend & Systems',
    items: ['React', 'Next.js', 'Chrome Extensions (MV3)', 'TensorFlow', 'PyTorch', 'Docker', 'CI/CD', 'Git', 'Bash', 'Linux', 'Render', 'Vercel', 'pytest', 'Jest'],
    reverse: false,
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <FadeUp>
        <div className="section-header">
          <div className="section-eyebrow">Technical Skills</div>
          <div className="section-title">Stack</div>
        </div>
      </FadeUp>
      <FadeUp delay={1}>
        <div className="marquee-section">
          {rows.map((row) => {
            const doubled = [...row.items, ...row.items]
            return (
              <div key={row.label}>
                <div className="marquee-row-label">{row.label}</div>
                <div className="marquee-row">
                  <div className={`marquee-track${row.reverse ? ' reverse' : ''}`}>
                    {doubled.map((item, i) => (
                      <span key={i} className="m-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </FadeUp>
    </section>
  )
}
