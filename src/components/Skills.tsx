import FadeUp from './FadeUp'

const columns = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'Go', 'TypeScript', 'JavaScript', 'C / C++', 'SQL', 'HTML / CSS', 'Assembly (MIPS, x86, RISC-V)'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'Spring Boot', 'WebFlux', 'Resilience4j', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase / Firestore', 'Docker', 'AWS'],
  },
  {
    title: 'Frontend & Systems',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Chrome Extensions (MV3)', 'TensorFlow', 'PyTorch', 'CI/CD', 'Git', 'Linux', 'Bash', 'pytest', 'Jest'],
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
        <div className="skills-table">
          {columns.map((col) => (
            <div key={col.title} className="skill-col">
              <div className="skill-col-title">{col.title}</div>
              <div className="skill-list">
                {col.items.map((item) => (
                  <div key={item} className="skill-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
