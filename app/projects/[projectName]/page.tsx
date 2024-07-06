"use client"

import React from 'react'
import ProjectDetail from '../../components/projects/projects-detail-view';
import Project from '@/app/data/project';
import { ProjectStatus } from '@/app/data/project-status';
import { useParams } from 'next/navigation';
import { Technology } from '@/app/data/technology';

const projectData: Project[] = [
    // Example project data
    new Project(
      'ExampleProject1',
      'This is an example project.',
      '/path/to/banner.jpg',
      new Date(),
      ProjectStatus.PLANNED,
      [Technology.DART, Technology.FLUTTER],
      'https://blog.example.com',
      'https://example.com'
    ),
  ];

function ProjectDetailPage() {
  const params = useParams<{ projectName: string }>()
  const projectName = params.projectName;
  const project = projectData.find(p => p.title === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

    return (
        <ProjectDetail project={project} />
    )
}

export default ProjectDetailPage
