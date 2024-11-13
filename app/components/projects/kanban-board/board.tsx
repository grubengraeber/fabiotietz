import Project from '@/app/data/project/project'
import React from 'react'
import ProjectCard from './project-card'

function Board({ projects }: { projects: Project[] }) {
  return (
    <div className='grid lg:grid-cols-5 max-md:gird-cols-1 gap-5'>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
        ))}
    </div>
  )
}

export default Board
