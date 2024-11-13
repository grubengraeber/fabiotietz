/* export enum Technology {
    JAVASCRIPT = ("Javascript"),
    TYPESCRIPT = ("Typescript"),
    DART = ("Dart"),
    PYTHON = ("Python"),
    JAVA = ("Java"),
    RUST = ("Rust"),
    REACT = ("React"),
    VUE = ("Vue"),
    NEXT_JS = ("Next.js"),
    NUXT = ("Nuxt"),
    DJANGO = ("Django"),
    SPRING = ("Spring"),
    DOCKER = ("Docker"),
    FLUTTER = ("Flutter"),
    RIVERPOD = ("Riverpod"),
    FIGMA = ("Figma"),
    PEN_AND_PAPER = ("Pen and paper"),
    HANDS = ("Hands"),
} */

import TechnologyType from "./technology-type";

class Technology {
    name: string;
    type: TechnologyType;
    resources: string;
    personalLikability: number;

    constructor(name: string, type: TechnologyType, resources: string, personalLikability: number) {
        this.name = name;
        this.type = type;
        this.resources = resources;
        this.personalLikability = personalLikability;
    }
}

export default Technology;