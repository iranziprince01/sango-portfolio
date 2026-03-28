export interface ImpactMetric {
  id: string
  value: number
  suffix: string
  label: string
}

export interface CoreValue {
  id: string
  title: string
  description: string
  icon: 'shield' | 'community' | 'chart' | 'inclusive' | 'leaf'
}

export interface EducationItem {
  id: string
  institution: string
  credential: string
  detail: string
}

export interface SkillItem {
  id: string
  label: string
}

export interface ProjectItem {
  id: string
  title: string
  role: string
  description: string
  contributions: string[]
  ctaLabel: string
  ctaHref: string
  featured?: boolean
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: 'linkedin' | 'instagram' | 'youtube'
}

export interface ContactFormState {
  name: string
  email: string
  subject: string
  message: string
}
