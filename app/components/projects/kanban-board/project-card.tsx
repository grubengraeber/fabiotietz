"use client"

import React from 'react';
import Link from 'next/link';
import Project from '@/app/data/project';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectTags from './project-tags';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: {project: Project}) => {
  return (
        <Card className='my-2'>
            <CardHeader>
      <img src={`${project.banner}`} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
            <CardTitle>
            {project.title}
            </CardTitle>
            </CardHeader>
            <CardContent>
            {project.content}
            </CardContent>
            <CardFooter className='grid grid-cols-1'>
        <Link href={`/projects/${project.title}`} className="text-blue-500 hover:underline mt-2 block" >
          Read more
        </Link>
        <div className='text-end'>
          <ProjectTags items={project.techStack} />
        </div>

            </CardFooter>
        </Card>
  );
};

export default ProjectCard;

/* 
<div className="flex items-center justify-center min-h-screen">
        <Card>
            <CardHeader>

            <CardTitle>
            Projects
            </CardTitle>
            </CardHeader>
            <CardContent>
                <Projects />
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    </div>
*/