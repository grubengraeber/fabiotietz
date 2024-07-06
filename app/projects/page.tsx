import { NextPage } from 'next'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Project from '../data/project';
import KanbanBoard from '../components/projects/kanban-board/kanban-board';
import { ProjectStatus } from '../data/project-status';
import { Technology } from '../data/technology';



const projectData: Project[] = [
    // Example project data
    new Project(
      'Example Project 1',
      'This is an example project 1.',
      'http://thispersondoesnotexist.com',
      new Date(),
      ProjectStatus.PLANNED,
      [Technology.JAVA, Technology.SPRING],
      'https://blog.example.com/1',
      'http://example.com/1'
    ),
    new Project(
      'Example Project 2',
      'This is an example project 2.',
      "https://random.imagecdn.app/500/150",
      new Date(),
      ProjectStatus.PLANNED,
      [Technology.TYPESCRIPT, Technology.NUXT],
      'https://blog.example.com/2',
      'https://example.com/2'
    ),
    // Add more projects as needed
  ];

// TODO: language
const ProjectsPage: NextPage = () => {

    return (
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <KanbanBoard projects={projectData} />
    </div>
    )
    
}

export default ProjectsPage