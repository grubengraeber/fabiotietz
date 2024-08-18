"use client"

import Project from '../data/project';
import KanbanBoard from '../components/projects/kanban-board/kanban-board';
import { ProjectStatus } from '../data/project-status';
import Technology from '../data/technology';
import TechnologyType from '../data/technology-type';
import UnderConstruction from '../components/under-construction';




// TODO: language
export default function ProjectsPage() {
  const projectData: Project[] = [
      // Example project data
      new Project(
        'ExampleProject1',
        'This is an example project 1.',
        'http://thispersondoesnotexist.com',
        new Date(),
        ProjectStatus.PLANNED,
        [new Technology(
          'Java',
          TechnologyType.PROGRAMMING_LANGUAGE,
          "https://www.java.com/",
          0.7
        ), 
        new Technology(
          'Spring',
          TechnologyType.BACKEND_FRAMEWORK,
          "https://spring.io/",
          0.9
        )
      ],
        'https://blog.example.com/1',
        'http://example.com/1'
      ),
      new Project(
        'ExampleProject2',
        'This is an example project 2.',
        "https://random.imagecdn.app/500/150",
        new Date(),
        ProjectStatus.PLANNED,
        [new Technology(
          'Typescript',
          TechnologyType.PROGRAMMING_LANGUAGE,
          'https://www.typescriptlang.org/',
          0.8
        ), 
        new Technology(
          'Nuxt',
          TechnologyType.WEB_FRAMEWORK,
          'https://nuxt.com/',
          0.6
        )
      ],
        'https://blog.example.com/2',
        'https://example.com/2'
      ),
      // Add more projects as needed
    ];

    return (
        <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <KanbanBoard projects={projectData} /> */} {/* TODO */}
      <UnderConstruction />
    </div>
    )
    
}