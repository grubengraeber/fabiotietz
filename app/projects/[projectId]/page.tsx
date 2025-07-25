import React from 'react'
import ProjectClient from './project-client'
import { projects } from '@/app/projects/data/actual-projects';
export async function generateStaticParams() {
    return projects.map((project) => ({
        projectId: project.id,
    }));
}

async function ProjectDetailPage({params}: {params: {projectId: string}}) {
  const project = projects.find(p => p.id === params.projectId);

  if (!project) {
    return <ProjectClient projectId={params.projectId} />;
  }

  return <ProjectClient projectId={params.projectId} />;
}

export default ProjectDetailPage
