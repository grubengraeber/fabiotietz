"use client"

import React from 'react';
import Link from 'next/link';
import Project from '@/app/data/project/project';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectTags from './project-tags';
import { ProjectStatus } from '@/app/data/project/project-status';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ColorService from '@/app/service/ColorService';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: {project: Project}) => {
  
  const colorService = new ColorService();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
    >
      <Link href={`/projects/${project.id}`}>
        <Card className={`my-2 ${colorService.backgroundForStatus(project)} ${colorService.textForStatus(project)} ${project.status === ProjectStatus.CANCELLED ? 'opacity-50' : ''}`}>
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
                <ProjectTags items={project.techStack} color={colorService.badgeForStatus(project)} />
              </div>
            </CardFooter>
        </Card>
        </Link>
      </motion.div>
  );
};

export default ProjectCard;