export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  category: string
  status: 'live' | 'coming-soon' | 'beta'
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'tamago',
    name: 'Tamago',
    tagline: 'Duolingo for Cooking',
    description:
      'Voice-guided cooking app that turns meal prep into a game. Step-by-step voice instructions, streaks, achievements, and a kitchen that finally makes sense.',
    category: 'iOS App',
    status: 'coming-soon',
  },
]
