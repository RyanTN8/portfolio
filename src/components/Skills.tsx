import FadeUp from './FadeUp'

const rows = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'Go', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'HTML / CSS', 'Assembly (MIPS, x86, RISC-V)'],
    reverse: false,
  },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'Spring Boot', 'WebFlux', 'Resilience4j', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Firestore', 'Docker', 'AWS', 'Google Cloud', 'BigQuery', 'Vertex AI', 'REST APIs'],
    reverse: true,
  },
  {
    label: 'Frontend & Systems',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Chrome Extensions (MV3)', 'TensorFlow', 'PyTorch', 'CI/CD', 'Git', 'Linux', 'Bash', 'pytest', 'Jest', 'Render', 'Vercel'],
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
