import Project from "../data/project/project";
import { projects } from "../projects/data/actual-projects";

class ProjectService {
    allProjects = projects;

    getProjects(): Project[] {
        return this.allProjects;
    }

    getProject(projectId: string): Project | undefined {
        return this.allProjects.find(p => p.id === projectId);
    }

}

export default ProjectService;