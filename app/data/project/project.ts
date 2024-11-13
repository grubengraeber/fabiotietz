import Technology from "../technology/technology";
import { ProjectStatus } from "./project-status";

class Project {
    id: string;
    title: string;
    description: string;
    content: string;
    bannerLight: string;
    bannerDark: string;
    startDate: Date;
    status: ProjectStatus;
    techStack: Technology[];
    endDate?: Date;
    blogPost?: string;
    url?: string;
    

    constructor(id: string,title: string, description: string, content: string, bannerLight: string, bannerDark: string, startDate: Date, status: ProjectStatus, techStack: Technology[], blogPost?: string, url?: string, endDate?: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.bannerLight = bannerLight;
        this.bannerDark = bannerDark;
        this.startDate = startDate;
        this.status = status;
        this.techStack = techStack;
        this.endDate = endDate;
        this.blogPost = blogPost;
        this.url = url;
    }
}

export default Project;