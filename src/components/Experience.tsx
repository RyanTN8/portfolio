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
      <>Redesigned an existing <strong>11-state AWS workflow</strong> to automate SMT solver curation, replacing manual regression analysis, version isolation, and release integration, reducing release processing time by <strong>79% (2 weeks to 3 days)</strong>.</>,
      <>Built a <strong>safety-gated LLM decision engine</strong> and deterministic soundness gates, automating <strong>78% of release decisions</strong> with <strong>98.5% agreement</strong> against scientist-reviewed benchmarks and zero unsafe approvals across 198 tests.</>,
      <>Eliminated dependencies on a separate Lambda service by integrating solver-specific code generation, automated multi-package reviews, and recovery safeguards directly into the existing state machine, reducing <strong>95% of manual engineering</strong>.</>,
    ],
  },
  {
    dates: 'June 2026 - August 2026',
    company: 'Genuine Parts Company',
    //badge: { label: 'Currently', incoming: true },
    role: 'Software Engineering Intern',
    bullets: [
      <>Built a customer intelligence platform providing a 360° view of customers, alongside an <strong>Elasticsearch</strong> service integrating cross-domain data aggregation.</>,
      <>Rearchitected the data retrieval pipeline, parallelizing <strong>14+ independent BigQuery workloads</strong> with multithreading and asynchronous execution, reducing end-to-end search latency by <strong>86% (23s to 3s)</strong>.</>,
      <>Designed a multi-tier <strong>Redis caching layer</strong>, accelerating lookups from <strong>3s → 100ms</strong> and reducing BigQuery compute costs by <strong>80%</strong>.</>,
      <>Optimized frontend performance through concurrent data fetching, progressive rendering, hover prefetching, and compressed API responses, reducing time-to-first-content by <strong>33% (3s to 2s)</strong> and eliminating <strong>blocking UI behavior</strong>.</>,
    ],
  },
  {
    dates: 'Jan 2026 – May 2026',
    company: 'LearnHaus AI',
    role: 'Technical Lead',
    bullets: [
      <>Led <strong>9 engineers</strong> to build and launch the company's first <strong>LLM evaluation platform</strong>, standardizing benchmarking across <strong>4+ frontier models</strong> and reducing model evaluation cycles by <strong>95% (2–3 days to under 2 hours)</strong>.</>,
      <>Engineered evaluation and regression analysis tooling (MAE, variance, correlation, clustering), identifying <strong>12+ scoring biases</strong> across <strong>1K+ production outputs</strong> through scoring, human-model comparisons, and dataset-level analysis.</>,
    ],
  },
  {
    dates: 'Nov 2025 – Present',
    company: 'UC Berkeley',
    role: 'Teaching Assistant — Full-Stack Development',
    bullets: [
      <>Engineered course infrastructure supporting <strong>100+ students per semester</strong>, developing <strong>20+ pytest/Jest autograders</strong> for full-stack applications, a submission platform handling <strong>2,000+ assignments</strong>, and <strong>15+ automation scripts</strong>.</>,
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
