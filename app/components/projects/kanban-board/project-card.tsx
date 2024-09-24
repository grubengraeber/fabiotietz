"use client"

import React from 'react';
import Link from 'next/link';
import Project from '@/app/data/project';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectTags from './project-tags';
import { ProjectStatus } from '@/app/data/project-status';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: {project: Project}) => {
  
  const backgroundForStatus = () => {
    switch (project.status) {
      case ProjectStatus.IN_PROGRESS:
      case ProjectStatus.TESTING:
        return 'bg-yellow-100';
      case ProjectStatus.COMPLETED:
      case ProjectStatus.DEPLOYED:
      case ProjectStatus.LAUNCHED:
        return 'bg-green-100';
      case ProjectStatus.PLANNED:
      case ProjectStatus.ON_HOLD:
        return 'bg-blue-100';
      case ProjectStatus.MAINTENANCE:
        return 'bg-orange-100';
      default:
        return 'bg-gray-100';
    }
  };

  const textForStatus = () => {
    switch (project.status) {
      case ProjectStatus.IN_PROGRESS:
      case ProjectStatus.TESTING:
        return 'text-yellow-800';
      case ProjectStatus.COMPLETED:
      case ProjectStatus.DEPLOYED:
      case ProjectStatus.LAUNCHED:
        return 'text-green-800';
      case ProjectStatus.PLANNED:
      case ProjectStatus.ON_HOLD:
        return 'text-blue-800';
      case ProjectStatus.MAINTENANCE:
        return 'text-orange-800';
      default:
        return 'text-gray-800';
    }
  };

  const badgeForStatus = () => {
    switch (project.status) {
      case ProjectStatus.IN_PROGRESS:
      case ProjectStatus.TESTING:
        return 'yellow';
      case ProjectStatus.COMPLETED:
      case ProjectStatus.DEPLOYED:
      case ProjectStatus.LAUNCHED:
        return 'green';
      case ProjectStatus.PLANNED:
      case ProjectStatus.ON_HOLD:
        return 'blue';
      case ProjectStatus.MAINTENANCE:
        return 'orange';
      default:
        return 'gray';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
    >
      <Link href={`/projects/${project.id}`}>
        <Card className={`my-2 ${backgroundForStatus()} ${textForStatus()}`}>
            <CardHeader>
                <Image src={project.bannerLight} alt={project.title} width={150} height={150} className="w-full object-cover rounded-t-lg" /> {/* h-40 */}
                <CardTitle>
                  {project.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
              {project.description}
            </CardContent>
            <CardFooter className='grid grid-cols-1'>
              <div className='text-end'>
                <ProjectTags items={project.techStack} color={badgeForStatus()} />
              </div>
            </CardFooter>
        </Card>
        </Link>
      </motion.div>
  );
};

export default ProjectCard;