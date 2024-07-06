import React from 'react';

import Project from '@/app/data/project';
import ProjectCard from './project-card';
import { ProjectStatus } from '@/app/data/project-status';

interface KanbanBoardProps {
  projects: Project[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ projects }: {projects: Project[]}) => {
  const getStatusProjects = (status: ProjectStatus) => {
    return projects.filter(project => project.status === status);
  };

  const statuses = Object.values(ProjectStatus);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statuses.map(status => (
        <div key={status}>
          <h2 className="text-xl font-bold mb-2">{status}</h2>
          <div className="space-y-4">
            {getStatusProjects(status).map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;