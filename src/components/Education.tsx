import FadeUp from './FadeUp'

const courses = [
  'Data Structures & Algorithms',
  'Efficient Algorithms & Intractable Problems',
  'Computer Architecture',
  'Operating Systems',
  'Machine Learning',
  'Databases',
  'Discrete Math & Probability',
]

export default function Education() {
  return (
    <section id="education">
      <FadeUp>
        <div className="section-header">
          <div className="section-eyebrow">Academic Background</div>
          <div className="section-title">Education</div>
        </div>
      </FadeUp>
      <FadeUp delay={1}>
        <div className="edu-row">
          <div className="edu-left">
            <div className="edu-period">2023 – Dec 2027</div>
            <div className="edu-location">Berkeley, CA</div>
          </div>
          <div className="edu-right">
            <div className="edu-school">University of California, Berkeley</div>
            <div className="edu-degree">Computer Science</div>
            <div className="edu-items">
              <div className="edu-item">
                <strong>Scholarship Foundation Exceptional Leadership Scholarship</strong> Recipient
              </div>
              <div className="edu-item">
                <strong>Web Development Berkeley</strong> — President of Bootcamp Development &amp; Industry Developer
              </div>
            </div>
            <div className="course-row">
              {courses.map((c) => (
                <span key={c} className="ctag">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
