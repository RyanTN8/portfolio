import FadeUp from './FadeUp'

interface Job {
  dates: string
  company: string
  badge?: { label: string; incoming?: boolean }
  role: string
  bullets: (string | JSX.Element)[]
}

const jobs: Job[] = [
  {
    dates: 'Jun 2026',
    company: 'Genuine Parts Company',
    badge: { label: 'Incoming', incoming: true },
    role: 'Software Engineering Intern — AI Databases Team',
    bullets: [
      <>Joining the <strong>AI Databases Team</strong> to work on intelligent data infrastructure at scale.</>,
    ],
  },
  {
    dates: 'Jan 2026 – May 2026',
    company: 'LearnHaus AI',
    role: 'Technical Lead',
    bullets: [
      <>Led a team of <strong>9 engineers</strong> to design and launch an internal evaluation platform for a production <strong>LLM scoring system</strong>, enabling standardized benchmarking across 4+ LLMs.</>,
      <>Architected three evaluation workflows—interactive scoring playground, human-vs-model comparison, and dataset-level pattern analysis—reducing iteration time from <strong>2–3 days to under 2 hours (95% reduction)</strong>.</>,
      <>Built analytics tooling (MAE, variance, correlation, clustering) uncovering <strong>12+ previously undetected biases</strong> across 1K+ production scoring outputs.</>,
    ],
  },
  {
    dates: 'Sep 2025 – Dec 2025',
    company: 'Newrium Foundation',
    role: 'Software Engineering Intern',
    bullets: [
      <>Developed and shipped <strong>15+ responsive UI components</strong> using TypeScript, React, and Next.js, improving page load time and boosting mobile accessibility.</>,
      <>Designed relational schemas and optimized queries using <strong>MySQL</strong>, enabling efficient storage of 100+ entries and reducing query latency.</>,
      <>Built an automated <strong>email pipeline</strong> using Node.js and SQL task queues, sending weekly updates to subscribers.</>,
      <>Coordinated API contract design and testing with a <strong>10-person team</strong>, reducing integration errors.</>,
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <FadeUp>
        <div className="section-header">
          <div className="section-eyebrow">Career</div>
          <div className="section-title">Experience</div>
        </div>
      </FadeUp>
      <div className="exp-list">
        {jobs.map((job, i) => (
          <FadeUp key={job.company} delay={i + 1}>
            <div className="exp-row">
              <div className="exp-left">
                <div className="exp-dates">{job.dates}</div>
                <div className="exp-co">{job.company}</div>
                {job.badge && (
                  <div className={`exp-badge${job.badge.incoming ? ' incoming' : ''}`}>
                    {job.badge.label}
                  </div>
                )}
              </div>
              <div className="exp-right">
                <div className="exp-role">{job.role}</div>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
