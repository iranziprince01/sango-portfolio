import type {
  CoreValue,
  EducationItem,
  ImpactMetric,
  ProjectItem,
  SkillItem,
  SocialLink,
} from '../types'

export const impactMetrics: ImpactMetric[] = [
  { id: 'projects', value: 20, suffix: '+', label: 'Projects Delivered' },
  { id: 'delivery', value: 30, suffix: '%', label: 'Increase in On-Time Delivery' },
  { id: 'years', value: 4, suffix: '', label: 'Years of Experience' },
  { id: 'users', value: 1500, suffix: '+', label: 'Users Reached' },
]

export const coreValues: CoreValue[] = [
  {
    id: 'integrity',
    title: 'Integrity & accountability',
    description: 'Transparent commitments and disciplined follow-through.',
    icon: 'shield',
  },
  {
    id: 'community',
    title: 'Community-first design',
    description: 'Solutions shaped with users, not only for them.',
    icon: 'community',
  },
  {
    id: 'evidence',
    title: 'Evidence-driven action',
    description: 'Metrics and learning loops that inform better decisions.',
    icon: 'chart',
  },
  {
    id: 'inclusive',
    title: 'Inclusivity & dignity',
    description: 'Accessible processes and respectful service delivery.',
    icon: 'inclusive',
  },
  {
    id: 'sustainability',
    title: 'Sustainability & local empowerment',
    description: 'Building capacity and viability beyond a single grant cycle.',
    icon: 'leaf',
  },
]

export const education: EducationItem[] = [
  {
    id: 'asu',
    institution: 'Arizona State University',
    credential: 'MS Business Analytics · Expected Jan 2028',
    detail:
      'Focus on analytics for decision-making, forecasting, and impact measurement; applying quantitative methods to complex social and business contexts.',
  },
  {
    id: 'alu',
    institution: 'African Leadership University',
    credential: 'BS Entrepreneurial Leadership · First Class Honours',
    detail:
      'Entrepreneurship, leadership, and mission-driven venture building; projects linking theory to practice in African contexts.',
  },
  {
    id: 'ccr',
    institution: 'Collège du Christ-Roi',
    credential: 'High School · Top grade 73/73',
    detail: 'Strong academic foundation; discipline and curiosity that anchor professional growth.',
  },
]

export const skills: SkillItem[] = [
  { id: 'crm', label: 'CRM / MIS Systems' },
  { id: 'ai', label: 'AI-enabled workflows' },
  { id: 'ba', label: 'Business Analytics' },
  { id: 'curriculum', label: 'Curriculum Design' },
  { id: 'ops', label: 'Operations & Supply Chain' },
  { id: 'fin', label: 'Financial Modelling' },
  { id: 'proj', label: 'Project Coordination' },
  { id: 'me', label: 'Monitoring & Evaluation' },
]

export const languages = ['Kinyarwanda', 'Kiswahili', 'English', 'French'] as const

export const projects: ProjectItem[] = [
  {
    id: 'crise',
    title: 'C-RISE Group',
    role: 'Co-Founder',
    description:
      'Soap and skincare manufacturing combined with vocational training: production systems, training cohorts, and impact targets aligned with community outcomes.',
    contributions: [
      'Systems design for operations and training delivery',
      'Alignment of social goals with day-to-day execution',
    ],
    ctaLabel: 'Explore more',
    ctaHref:
      'https://docs.google.com/document/d/1sgpdVTIsfCH9yPY23Xa3elOFbsdp6DBf/edit?usp=sharing&ouid=114435200616058479423&rtpof=true&sd=true',
    featured: true,
  },
  {
    id: 'mindsafi',
    title: 'Mindsafi',
    role: 'Co-Founder & Customer Service Lead',
    description:
      'Mental wellness platform: CRM architecture, privacy-conscious onboarding, and a trusted user experience at scale.',
    contributions: [
      'CRM and service workflows',
      'Privacy-aware onboarding and CX leadership',
    ],
    ctaLabel: 'Visit website',
    ctaHref: 'https://www.mindsafi.com',
    featured: true,
  },
  {
    id: 'wetlands',
    title: 'Wetlands Protection Network',
    role: 'Research & workshops',
    description:
      'Research, workshops, and environmental stewardship connecting science with community action.',
    contributions: ['Field research', 'Stakeholder workshops'],
    ctaLabel: 'Get in touch',
    ctaHref: 'https://wetlandspn.wixsite.com/wetlands-protection',
  },
  {
    id: 'research',
    title: 'Academic Research Paper',
    role: 'Author / researcher',
    description:
      'Research themes spanning job creation, mental wellness, and education, linking evidence to practice.',
    contributions: ['Literature synthesis', 'Insight for practitioners'],
    ctaLabel: 'Discuss',
    ctaHref:
      'https://drive.google.com/file/d/1zhE6zCiYa45vK03c795xbanT9Qx4Wom7/view?usp=sharing',
  },
  {
    id: 'wv',
    title: 'World Vision · PAC Project',
    role: 'UPG Coach',
    description:
      'Coaching and programme support for households, translating programme design into measurable household impact.',
    contributions: ['Coaching', 'Field coordination'],
    ctaLabel: 'Connect',
    ctaHref:
      'https://rodirwanda.org.rw/kora-wigire-poverty-alleviation-coalition-project-in-rwanda',
  },
  {
    id: 'cyf',
    title: 'Code Your Future',
    role: 'Remote research & education access',
    description:
      'Remote research and pathways that expand education access for underserved learners.',
    contributions: ['Research support', 'Learning pathways'],
    ctaLabel: 'Collaborate',
    ctaHref: 'https://codeyourfuture.io/',
  },
  {
    id: 'mcn',
    title: 'Millennium Campus Network',
    role: 'Leadership & fellowship coordination',
    description:
      'Leadership, SDGs, and fellowship coordination, building networks for global citizenship.',
    contributions: ['Programme leadership', 'SDG-aligned initiatives'],
    ctaLabel: 'Learn more',
    ctaHref: 'https://www.millenniumfellows.org/fellow/2023/alu/sango-fati',
  },
]

export const socialLinks: SocialLink[] = [
  {
    id: 'li',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fati-sango',
    icon: 'linkedin',
  },
  {
    id: 'ig',
    label: 'Instagram',
    href: 'https://www.instagram.com/fatisango',
    icon: 'instagram',
  },
  {
    id: 'yt',
    label: 'YouTube',
    href: 'https://www.youtube.com/@fatisango',
    icon: 'youtube',
  },
]

/** Full-width / legacy hero asset (optional) */
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80'

/** Hero portrait (file in /public) */
export const HERO_PORTRAIT = '/sango.jpg'
