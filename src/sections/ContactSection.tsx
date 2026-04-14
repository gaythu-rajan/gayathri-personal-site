import type { ProfileInputs } from '../content/types'

export function ContactSection({ profile }: { profile: ProfileInputs }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="sectionTitle">Contact</h2>
        <p className="prose">
          If you’d like to connect, email me at{' '}
          <a className="link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
        <div className="linkRow">
          {profile.links.map((l) => (
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
      </div>
    </section>
  )
}

