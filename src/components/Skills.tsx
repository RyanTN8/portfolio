import FadeUp from './FadeUp'

const columns = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C / C++', 'SQL', 'HTML / CSS', 'RISC-V / x86 / MIPS'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Firebase / Firestore', 'Docker', 'REST APIs'],
  },
  {
    title: 'Frontend & Systems',
    items: ['React', 'Next.js', 'Tailwind CSS', 'TensorFlow', 'PyTorch', 'Git', 'Bash'],
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
