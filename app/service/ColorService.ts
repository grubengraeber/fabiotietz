import Project from "../data/project/project";
import { ProjectStatus } from "../data/project/project-status";

class ColorService {

    backgroundForStatus(project: Project) {
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
      }
    
      textForStatus(project: Project) {
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
      }

      badgeForStatus(project: Project) {
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
    }
}

export default ColorService;