"use client"

import Project from '@/app/data/project'
import React from 'react'
import ProjectCard from './project-card'
import { ProjectStatus } from '@/app/data/project-status'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

function KanbanColumn({projects, status} : { projects: Project[], status: ProjectStatus}) {
  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-center'>
                {status}
            </CardTitle>
        </CardHeader>
        <CardContent>
        {projects.map(project => (
                <ProjectCard key={project.title} project={project} />
                ))}
        </CardContent>
        <CardFooter>
            Items: {projects.length}
        </CardFooter>
            </Card>
  )
}

export default KanbanColumn
