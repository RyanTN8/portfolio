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
    dates: 'August 2026 - Present',
    company: 'Amazon Web Services',
    badge: { label: 'Currently', incoming: true },
    role: 'Software Engineering Intern',
    bullets: [
      <>Software Engineering Intern in the Automated Reasoning Group, developing software for AI and automated reasoning systems.</>,
    ],
  },
  {
    dates: 'June 2026 - August 2026',
    company: 'Genuine Parts Company',
    //badge: { label: 'Currently', incoming: true },
    role: 'Software Engineering Intern',
    bullets: [
      <>Built a 360° view customer intelligence platform and <strong>Elasticsearch</strong> service integrating cross-domain data aggregation.</>,
      <>Rearchitected the data retrieval pipeline, parallelizing <strong>14+ independent BigQuery workloads</strong> with multithreading and asynchronous execution, reducing end-to-end search latency by <strong>98% (210s to 23s)</strong>.</>,
      <>Designed a multi-tier <strong>Redis caching layer</strong>, accelerating lookups from <strong>2s → 100ms</strong> and reducing BigQuery compute costs by <strong>80%</strong>.</>,
      <>Optimized frontend performance through concurrent data fetching, progressive rendering, hover prefetching, and compressed API responses, reducing time-to-first-content from <strong>23s to 2s</strong> and eliminating <strong>blocking UI behavior</strong>.</>,
    ],
  },
  {
    dates: 'Jan 2026 – May 2026',
    company: 'LearnHaus AI',
    role: 'Technical Lead',
    bullets: [
      <>Shipped the company's first <strong>LLM evaluation platform</strong>, leading a team of <strong>9 engineers</strong>, standardizing benchmarking across <strong>4+ frontier models</strong> and unblocking model selection, regression testing, and prompt iteration for ML and product teams.</>,
      <>Designed and shipped three integrated workflows—scoring playground, human-vs-model comparison, and dataset-level pattern analysis—with unified side-by-side diffing, compressing iteration cycles from <strong>2–3 days to under 2 hours (95% reduction)</strong>.</>,
      <>Engineered statistical diffing and analytics tooling (MAE, variance, correlation, clustering) that surfaced <strong>12+ scoring biases</strong> across <strong>1K+ production outputs</strong>, directly informing model retraining and evaluation priorities.</>,
    ],
  },
  {
    dates: 'Nov 2025 – Present',
    company: 'UC Berkeley',
    role: 'Teaching Assistant — Full-Stack Development',
    bullets: [
      <>Instructed <strong>100+ students/semester</strong> across lectures and office hours on React, Node/Express, Flask/Django, MongoDB, SQL, Firebase, and DevOps, supporting debugging and full-stack project development.</>,
      <>Engineered course infrastructure at scale: authored <strong>20+ pytest/Jest autograders</strong> for React components, REST endpoints, and auth flows; built a submission platform for <strong>2,000+ assignments</strong>; shipped a ticketing system and <strong>15+ automation scripts</strong>.</>,
    ],
  },
  {
    dates: 'Sep 2025 – Dec 2025',
    company: 'Newrium Foundation',
    role: 'Software Engineering Intern',
    bullets: [
      <>Shipped <strong>15+ production-ready responsive UI components</strong> using TypeScript, React, and Next.js.</>,
      <>Architected <strong>MySQL schemas</strong> storing <strong>100+ entries</strong> and built a <strong>Node.js email pipeline</strong> with SQL task queues.</>,
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
