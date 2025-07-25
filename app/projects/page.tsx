"use client"

import Project from '../data/project/project';
import Board from '../components/projects/kanban-board/board';
import { useEffect, useState, useCallback } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import LoadingAnimation from '../components/animation/loading/loading-animation';
import MapperService from '../service/MapperService';


// TODO: language
export default function ProjectsPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = useCallback(async () => {
    const mapperService = new MapperService();
    setIsLoading(true);
    const response = await fetch('/api/list/projects');
    const { data, error } = await response.json();

    if (error || !data) {
      toast.error('Failed to fetch projects');
      setIsLoading(false);
      router.push('/');
      return;
    }

    const mappedProjects = data.map((project: any) => mapperService.jsonToProject(project));

    setProjects(mappedProjects);
    
    setIsLoading(false);
  }, [router])

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects])


    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        {
          isLoading ?
            <LoadingAnimation />
          :
            <Board projects={projects} /> 
        }
      </div>
    )
    
}