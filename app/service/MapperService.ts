import Project from "../data/project";

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
}

export default MapperService;