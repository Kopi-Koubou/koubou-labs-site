import type { Project } from '../data/projects'

const statusStyles: Record<Project['status'], string> = {
  live: 'bg-green-100 text-green-800',
  beta: 'bg-amber-100 text-amber-800',
  'coming-soon': 'bg-orange-50 text-orange-700',
}

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
}

export default function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.url ? 'a' : 'div'
  const linkProps = project.url
    ? { href: project.url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...linkProps}
      className="block bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-stone-500">
          {project.category}
        </span>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-stone-900 mb-1">
        {project.name}
      </h3>
      <p className="text-sm font-medium text-orange-600 mb-3">
        {project.tagline}
      </p>
      <p className="text-base text-stone-500 leading-relaxed">
        {project.description}
      </p>
      {project.url && (
        <span className="inline-block mt-4 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition-colors">
          → View Project
        </span>
      )}
    </Wrapper>
  )
}
