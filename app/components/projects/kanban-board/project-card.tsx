import React from 'react';
import Link from 'next/link';
import Project from '@/app/data/project';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: {project: Project}) => {
  return (
    /* bg-white p-4 rounded-lg shadow-md */
        <Card>
            <CardHeader>
      <img src={project.banner} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
            <CardTitle>
            {project.title}
            </CardTitle>
            </CardHeader>
            <CardContent>
            {project.content}
            </CardContent>
            <CardFooter>
        <Link href={`/projects/${project.title}`} className="text-blue-500 hover:underline mt-2 block" >
          Read more
        </Link>

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