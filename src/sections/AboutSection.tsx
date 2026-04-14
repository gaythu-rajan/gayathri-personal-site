import type { Profile } from '../content/types'

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sectionTitle">About</h2>
        <div className="prose">
          {profile.derived?.generatedSummary ? <p>{profile.derived.generatedSummary}</p> : null}

          {profile.inputs.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          {profile.inputs.about.bullets.length ? (
            <ul>
              {profile.inputs.about.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}

