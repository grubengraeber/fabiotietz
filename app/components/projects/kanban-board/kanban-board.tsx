"use client"

import React from 'react';
import Project from '@/app/data/project';
import { ProjectStatus } from '@/app/data/project-status';
import KanbanColumn from './kanban-column';

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
          {
            getStatusProjects(status).length > 0 ?
            <KanbanColumn projects={getStatusProjects(status)} status={status} />
            : <></>
          }
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;