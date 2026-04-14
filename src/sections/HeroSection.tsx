import type { ProfileInputs } from '../content/types'

const profileImageUrl = `${import.meta.env.BASE_URL}profile.jpeg`

export function HeroSection({ profile }: { profile: ProfileInputs }) {
  return (
    <section id="top" className="section heroSection" aria-label="Intro">
      <div className="container heroGrid">
        <div className="heroText">
          <p className="eyebrow">
            {profile.role} • {profile.focus}
          </p>
          <h1 className="heroTitle">{profile.name}</h1>
          <p className="heroSubtitle">
            {profile.tagline}
          </p>

          <div className="heroCtas">
            <a className="button primary" href="#contact">
              Contact
            </a>
            <a className="button subtle" href="#projects">
              View projects
            </a>
          </div>

          <div className="heroLinks" aria-label="Primary links">
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
            <a className="link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <div className="heroMedia">
          <img
            className="profileImage"
            src={profileImageUrl}
            alt="Profile"
            width={200}
            height={200}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

