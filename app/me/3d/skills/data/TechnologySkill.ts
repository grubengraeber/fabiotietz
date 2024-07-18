class TechnologySkill {
    title: string;
    level: number;
    url: string;
    image: string;
    projects: string;

    constructor(title: string, level: number, url: string, image: string, projects: string) {
        this.title = title;
        this.level = level;
        this.url = url;
        this.image = image;
        this.projects = projects;
    }
}

export default TechnologySkill;