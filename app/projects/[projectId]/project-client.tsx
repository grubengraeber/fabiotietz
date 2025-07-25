"use client";

import React, { useEffect, useState, useCallback } from 'react'
import Project from '@/app/data/project/project';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ProjectDetailView from '@/app/components/projects/projects-detail-view';
import LoadingAnimation from '@/app/components/animation/loading/loading-animation';
import MapperService from '@/app/service/MapperService';

interface ProjectClientProps {
  projectId: string;
}

export default function ProjectClient({ projectId }: ProjectClientProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProject = useCallback(async () => {
    const mapperService = new MapperService();
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
  }, [projectId])

  useEffect(() => {
    fetchProject();
  }, [fetchProject])

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
  );
} 