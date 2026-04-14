import { useEffect, useMemo, useState } from 'react'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { getProfile } from './content/getProfile'
import type { Profile } from './content/types'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'

function App() {
  const navItems = useMemo(
    () => [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
    [],
  )

  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    void (async () => {
      const p = await getProfile()
      setProfile(p)
    })()
  }, [])

  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="siteHeader">
        <div className="container headerInner">
          <a className="brand" href="#top" aria-label="Home">
            <span className="brandDot" aria-hidden="true" />
            <span className="brandText">Profile</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} className="navLink" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="headerActions">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main id="main">
        {profile ? (
          <>
            <HeroSection profile={profile.inputs} />
            <AboutSection profile={profile} />
            <ExperienceSection profile={profile.inputs} />
            <ProjectsSection profile={profile.inputs} />
            <ContactSection profile={profile.inputs} />
          </>
        ) : (
          <section className="section">
            <div className="container">
              <p className="muted">Loading…</p>
            </div>
          </section>
        )}
      </main>

      <footer className="siteFooter">
        <div className="container footerInner">
          <span className="muted">
            © {new Date().getFullYear()} {profile?.inputs.name ?? 'Your Name'}
          </span>
          <a className="muted" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
