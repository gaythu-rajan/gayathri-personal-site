import type { ProfileInputs } from '../content/types'

export function ExperienceSection({ profile }: { profile: ProfileInputs }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="sectionTitle">Experience</h2>
        <div className="stack">
          {profile.experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="card">
              <div className="cardHeader">
                <div>
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="muted">{item.company}</p>
                </div>
                <p className="muted">{item.period}</p>
              </div>
              <ul className="bullets">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

