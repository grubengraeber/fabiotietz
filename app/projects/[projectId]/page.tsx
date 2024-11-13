"use client"

import React, { useEffect, useState } from 'react'
import Project from '@/app/data/project/project';
import { useParams} from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ProjectDetailView from '@/app/components/projects/projects-detail-view';
import LoadingAnimation from '@/app/components/animation/loading/loading-animation';
import MapperService from '@/app/service/MapperService';

export default function ProjectDetailPage({params}: {params: {projectId: string}}) {
  const projectId = params.projectId;

  const mapperService = new MapperService();
  
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProject();
  }, [])


  const fetchProject = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/projects/${projectId}`);
    const { data, error } = await response.json();

    if (error || !data) {
      setIsLoading(false);
      return;
    }

    const mappedProject = mapperService.jsonToProject(data);
    setProject(mappedProject);
    setIsLoading(false);
  }

  return (
    <div className='container mx-auto p-4'>
      <Breadcrumb>
       <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{isLoading ? "Loading..." : project?.title ?? "Not Found"}</BreadcrumbPage>
        </BreadcrumbItem>
       </BreadcrumbList>
      </Breadcrumb>

      {
      isLoading ?
        <LoadingAnimation />
      :
         project ? 
        <div>
          <ProjectDetailView project={project} />
        </div>
      : 
        <div className='text-4xl justify-center flex'>Project not found</div>
      }
    </div>
    )
}
