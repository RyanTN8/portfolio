import FadeUp from './FadeUp'

interface Job {
  dates: string
  company: string
  location: string
  badge?: { label: string; incoming?: boolean }
  role: string
  bullets: (string | JSX.Element)[]
}

const jobs: Job[] = [
  {
    dates: 'Aug 2026 - Present',
    company: 'Amazon Web Services',
    location: 'Seattle, WA',
    badge: { label: 'Currently', incoming: true },
    role: 'Software Development Engineer Intern',
    bullets: [
      <>Cut release adoption time for Amazon Trusted Solver (ATS), a service that hosts SAT/SMT solvers, from <strong>5 days to 4 hours</strong> by building an SMT solver integration pipeline that automates <strong>95% of manual engineering work</strong>.</>,
      <>Designed and implemented a distributed release orchestration system using <strong>Step Functions, Lambda, and DynamoDB conditional writes</strong> so releases are claimed atomically, run safely in parallel, and recover automatically.</>,
      <>Built a regression detection engine using <strong>PAR-2 scoring</strong>, per-bundle performance analysis, and baseline-relative soundness checks that enforces <strong>4 fail-closed safety invariants</strong>, with zero unsafe approvals across a 198-test suite.</>,
      <>Integrated <strong>Amazon Bedrock LLMs</strong> into the release decision engine, automating <strong>over 85% of onboarding decisions</strong> with <strong>97.6% agreement</strong> against 42 scientist-reviewed release decisions.</>,
    ],
  },
  {
    dates: 'Jun 2026 - Aug 2026',
    company: 'Genuine Parts Company',
    location: 'Atlanta, GA',
    //badge: { label: 'Currently', incoming: true },
    role: 'Software Engineering Intern',
    bullets: [
      <>Built a customer intelligence platform and an <strong>Elasticsearch</strong> service that integrates customer data from multiple domains.</>,
      <>Cut end-to-end search latency by <strong>87% (23s to 3s)</strong> by rearchitecting the retrieval pipeline to run <strong>14+ independent BigQuery workloads in parallel</strong> with multithreading and asynchronous execution.</>,
      <>Reduced lookup time from <strong>3s to 100ms</strong> and BigQuery compute costs by <strong>80%</strong> with a multi-tier Redis caching layer.</>,
      <>Improved frontend responsiveness by reducing time-to-first-content from <strong>3s to 2s</strong> and eliminating blocking UI behavior through concurrent data fetching, progressive rendering, hover prefetching, and compressed API responses.</>,
    ],
  },
  {
    dates: 'Jan 2026 - May 2026',
    company: 'LearnHaus AI',
    location: 'Granite Bay, CA',
    role: 'Technical Lead',
    bullets: [
      <>Led <strong>9 engineers</strong> to design, build, and launch the company’s first LLM evaluation platform, standardizing benchmarking across <strong>4+ frontier models</strong> and reducing model evaluation cycles by <strong>95% (2–3 days to under 2 hours)</strong>.</>,
      <>Engineered evaluation and regression analysis tooling (MAE, variance, correlation, clustering), identifying <strong>12+ scoring biases</strong> across <strong>1K+ production outputs</strong> through scoring, human-model comparisons, and dataset-level analysis.</>,
    ],
  },
  {
    dates: 'Nov 2025 - May 2026',
    company: 'UC Berkeley',
    location: 'Berkeley, CA',
    role: 'Teaching Assistant - UC Berkeley',
    bullets: [
      <>Engineered course infrastructure supporting <strong>100+ students per semester</strong>, developing <strong>20+ pytest/Jest autograders</strong> for full-stack applications, a submission platform handling <strong>2,000+ assignments</strong>, and <strong>15+ automation scripts</strong>.</>,
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
                <div className="exp-location">{job.location}</div>
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
