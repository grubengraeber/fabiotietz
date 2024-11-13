import BlogPost from "../data/blog/BlogPost";
import Project from "../data/project/project";

class MapperService {
    jsonToProject(json: any): Project {
        return new Project(
            json.id,
            json.title,
            json.description,
            json.content,
            json.bannerLight,
            json.bannerDark,
            new Date(json.startDate),
            json.status,
            json.techStack,
            json.blogPost,
            json.url,
            json.endDate ? new Date(json.endDate) : undefined,
        )
    }

    jsonToBlog(json: any): BlogPost {
        return new BlogPost(
            {
                title: json.title,
                content: json.content,
                slug: json.slug,
                date: new Date(json.date),
                bannerImage: json.bannerImage,
                video: json.video,
                sources: json.sources,
                technologies: json.technologies,
                projectName: json.projectName,
            }
        )
    }
}

export default MapperService;