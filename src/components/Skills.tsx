import FadeUp from './FadeUp'

const rows = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'Go', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'RISC-V Assembly'],
  },
  {
    label: 'Frameworks & Databases',
    items: ['React', 'Next.js', 'Express.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Redis', 'Elasticsearch', 'DynamoDB'],
  },
  {
    label: 'Cloud & Infrastructure',
    items: ['AWS (Lambda, CodeBuild, EventBridge, Bedrock, S3, IAM)', 'GCP (BigQuery, Vertex AI)', 'Docker'],
  },
  {
    label: 'AI & Systems',
    items: ['PyTorch', 'TensorFlow', 'LLM Evaluation', 'SMT Solvers (Z3, cvc5)', 'REST APIs', 'CI/CD', 'Distributed Systems'],
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
