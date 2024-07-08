import { ProjectStatus } from "./project-status";
import Technology from "./technology";

class Project {
    title: string;
    content: string;
    banner: string;
    startDate: Date;
    status: ProjectStatus;
    techStack: Technology[];
    endDate?: Date;
    blogPost?: string;
    url?: string;
    

    constructor(title: string, content: string, banner: string, startDate: Date, status: ProjectStatus, techStack: Technology[], blogPost?: string, url?: string, endDate?: Date) {
        this.title = title;
        this.content = content;
        this.banner = banner;
        this.startDate = startDate;
        this.status = status;
        this.techStack = techStack;
        this.endDate = endDate;
        this.blogPost = blogPost;
        this.url = url;
    }
}

export default Project;