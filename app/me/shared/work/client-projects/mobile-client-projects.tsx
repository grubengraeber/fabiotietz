import React from 'react'
import { ClientProject } from '../client-projects'
import HorizontalCard from './horizontal-card'

function MobileClientProjects({ projects }: { projects: ClientProject[] }) {
  return (
    <>
            <h1 className='text-4xl font-bold'>Client Projects - TIETZ Innovations</h1>
    {projects.map((project: ClientProject, index: number) => (
        <div key={index} className="p-1">
            <HorizontalCard 
            mobile={true}
            projectDescription={project.projectDescription} 
            projectName={project.projectName} 
            projectTitle={project.projectTitle} 
            projectUrl={project.projectUrl} 
            projectImageUrl={project.imageUrl} 
            projectStartAndEndTime={project.startAndEndDate}
            projectId={project.projectId} />
          </div>
      ))}
    </>
  )
}

export default MobileClientProjects 