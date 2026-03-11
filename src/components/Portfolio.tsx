import { forwardRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Portfolio = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="section">
      <div className="container-custom">
        <h2 className="section-title">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
})

Portfolio.displayName = 'Portfolio'

export default Portfolio
