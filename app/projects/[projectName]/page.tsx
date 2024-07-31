"use client"

import React from 'react'
import ProjectDetail from '../../components/projects/projects-detail-view';
import Project from '@/app/data/project';
import { ProjectStatus } from '@/app/data/project-status';
import { useParams } from 'next/navigation';
import Technology from '@/app/data/technology';
import TechnologyType from '@/app/data/technology-type';
import UnderConstruction from '@/app/components/under-construction';
import { NextPage } from 'next';

const projectData: Project[] = [
    // Example project data
    new Project(
      'ExampleProject1',
      'This is an example project.',
      '/path/to/banner.jpg',
      new Date(),
      ProjectStatus.PLANNED,
      [new Technology(
        "Dart",
        TechnologyType.PROGRAMMING_LANGUAGE,
        "https://dart.dev/",
        0.8,
      ), new Technology(
        'Flutter',
        TechnologyType.MOBILE_FRAMEWORK,
        "https://flutter.dev/",
        0.8
      )],
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
    <div className='container mx-auto p-4'>

      {/* <ProjectDetail project={project} /> */} {/* TODO */}
        <UnderConstruction />
    </div>
    )
}

export default ProjectDetailPage
