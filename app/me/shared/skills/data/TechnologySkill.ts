class TechnologySkill {
    title: string;
    level: number;
    url: string;
    image: string;
    projects: string;
    added: Date;

    constructor(title: string, level: number, url: string, image: string, projects: string, added: Date) {
        this.title = title;
        this.level = level;
        this.url = url;
        this.image = image;
        this.projects = projects;
        this.added = added;
    }
}

export default TechnologySkill;