import FadeUp from './FadeUp'

const rows = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'Go', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS (Tailwind, BOLT)', 'SQL', 'RISC-V Assembly'],
  },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'Spring Boot (Data JPA, WebClient, WebFlux)', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase/Firestore', 'AWS', 'Google Cloud (BigQuery, Vertex AI)', 'Redis', 'Elasticsearch'],
  },
  {
    label: 'Frontend & Systems',
    items: ['React', 'Next.js', 'Vite', 'Chrome Extensions (MV3)', 'TensorFlow', 'PyTorch', 'Docker', 'CI/CD', 'Git', 'Bash', 'Linux', 'Render', 'Vercel', 'pytest', 'Jest'],
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
        <div className="skills-list">
          {rows.map((row, index) => {
            const repeatedItems = [...row.items, ...row.items]
            return (
              <article key={row.label} className="skill-group">
                <div className="skill-group-heading">
                  <span className="skill-group-index">0{index + 1}</span>
                  <div>
                    <h3>{row.label}</h3>
                  </div>
                </div>
                <div className="skill-marquee">
                  <div className={`skill-track${index % 2 ? ' reverse' : ''}`}>
                    {repeatedItems.map((item, itemIndex) => (
                      <span key={`${item}-${itemIndex}`} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </FadeUp>
    </section>
  )
}
