import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block card group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-tertiary uppercase tracking-wide">
          {project.category}
        </span>
        <span className={`badge ${project.status === 'live' ? 'badge-live' : 'badge-coming-soon'}`}>
          {project.status === 'live' ? 'Live' : 'Coming Soon'}
        </span>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-1 group-hover:opacity-80 transition-opacity">
        {project.name}
      </h3>
      <p className="text-sm font-medium text-accent mb-3" style={{ color: 'var(--color-accent)' }}>
        {project.tagline}
      </p>
      <p className="text-lead text-sm mb-4">{project.description}</p>
      <span className="text-sm font-medium inline-flex items-center gap-2" style={{ color: 'var(--color-accent)' }}>
        View Project
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  )
}

export default ProjectCard
