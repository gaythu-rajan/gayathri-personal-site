import type { ProfileInputs } from '../content/types'

export function ProjectsSection({ profile }: { profile: ProfileInputs }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <div className="grid">
          {profile.projects.map((p) => (
            <article key={p.name} className="card">
              <h3 className="cardTitle">{p.name}</h3>
              <p className="muted">{p.description}</p>
              <div className="tagRow" aria-label="Project technologies">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="linkRow">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    className="link"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

