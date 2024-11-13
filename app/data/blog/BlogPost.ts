import Technology from "../technology/technology";

class BlogPost {
    slug: string;
    date: Date;
    title: string;
    content: string;
    bannerImage: string;
    video?: string;
    sources?: string[];
    technologies?: Technology[];
    projectName?: string;

    constructor({ slug, date, title, content, bannerImage, video, sources, technologies, projectName }:{
        slug: string, 
        date: Date,
        title: string, 
        content: string, 
        bannerImage: string, 
        video?: string, 
        sources?: string[], 
        technologies?: Technology[],
        projectName?: string
    }) {
        this.slug = slug;
        this.date = date;
        this.title = title;
        this.content = content;
        this.bannerImage = bannerImage;
        this.video = video;
        this.sources = sources;
        this.technologies = technologies;
        this.projectName = projectName;
    }
}

export default BlogPost;