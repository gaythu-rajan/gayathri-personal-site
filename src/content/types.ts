export type ProfileLink = {
  label: string
  href: string
}

export type ExperienceItem = {
  company: string
  title: string
  period: string
  highlights: string[]
}

export type Project = {
  name: string
  description: string
  tags: string[]
  links: ProfileLink[]
}

export type ProfileInputs = {
  name: string
  role: string
  focus: string
  tagline: string
  email: string
  links: ProfileLink[]
  about: {
    paragraphs: string[]
    bullets: string[]
  }
  experience: ExperienceItem[]
  projects: Project[]
}

export type ProfileDerived = {
  generatedSummary?: string
}

export type Profile = {
  inputs: ProfileInputs
  derived?: ProfileDerived
}

