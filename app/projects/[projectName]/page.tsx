"use client"

import React from 'react'
import Project from '@/app/data/project';
import { ProjectStatus } from '@/app/data/project-status';
import { useParams } from 'next/navigation';
import Technology from '@/app/data/technology';
import TechnologyType from '@/app/data/technology-type';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ProjectDetailView from '@/app/components/projects/projects-detail-view';

const projectData: Project[] = [
    // Example project data
    new Project(
      'ExampleProject1',
      "Description of ExampleProject1",
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

export default function ProjectDetailPage() {
  const params = useParams<{ projectName: string }>()
  const projectName = params.projectName;
  const project = projectData.find(p => p.title === projectName);

  return (
    <div className='container mx-auto p-4'>
      <Breadcrumb>
       <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{project?.title ?? "Not Found"}</BreadcrumbPage>
        </BreadcrumbItem>
       </BreadcrumbList>
      </Breadcrumb>

      {
        project ? 
        <div>
        <ProjectDetailView project={project} /> {/* TODO */}
        {/* <UnderConstruction /> */}
        </div>
      : 
      <div className='text-4xl justify-center flex'>Project not found</div>
      }

    </div>
    )
}
