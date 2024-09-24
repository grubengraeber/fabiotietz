"use client"

import Project from '../data/project';
import { ProjectStatus } from '../data/project-status';
import Technology from '../data/technology';
import TechnologyType from '../data/technology-type';
import Board from '../components/projects/kanban-board/board';




// TODO: language
export default function ProjectsPage() {
  const projectData: Project[] = [
      new Project(
        "Portfolio Site",
        "My personal portfolio website.",
        "Here should be a longer text displayed on the project details page.",
        "https://thispersondoesnotexist.com",
        new Date("12.05.2024"),
        ProjectStatus.COMPLETED,
        [
          new Technology(
            "Next.js",
            TechnologyType.WEB_FRAMEWORK,
            "https://nextjs.org/",
            0.8
          ),
          new Technology(
            "Tailwind CSS",
            TechnologyType.FRONTEND_FRAMEWORK,
            "https://tailwindcss.com/",
            0.8
          ),
          new Technology(
            "TypeScript",
            TechnologyType.PROGRAMMING_LANGUAGE,
            "https://www.typescriptlang.org/",
            0.8
          ),
          new Technology(
            "Vercel",
            TechnologyType.HOSTING,
            "https://vercel.com/",
            0.7
          ),
        ],
        "https://blog.fabiotietz.com/portfolio",
        "https://fabiotietz.com",
        new Date("01.10.2024")
      ),
      new Project(
        "Sonar",
        "A tool for tracking deliveries and arrival times in realtime for businesses and their customers.",
        "Here should be a longer text displayed on the project details page.",
        "https://thispersondoesnotexist.com",
        new Date("01.08.2024"),
        ProjectStatus.IN_PROGRESS,
        [
          new Technology(
            "Next.js",
            TechnologyType.WEB_FRAMEWORK,
            "https://nextjs.org/",
            0.8
          ),
          new Technology(
            "Framer Motion",
            TechnologyType.FRONTEND_FRAMEWORK,
            "https://www.framer.com/motion/",
            0.7
          ),
          new Technology(
            "Supabase",
            TechnologyType.DATABASE,
            "https://supabase.io/",
            0.7
          ),
          new Technology(
            "Tailwind CSS",
            TechnologyType.FRONTEND_FRAMEWORK,
            "https://tailwindcss.com/",
            0.8
          ),
          new Technology(
            "TypeScript",
            TechnologyType.PROGRAMMING_LANGUAGE,
            "https://www.typescriptlang.org/",
            0.8
          ),
          new Technology(
            "Twilio",
            TechnologyType.API,
            "https://www.twilio.com/",
            0.7
          ),
          new Technology(
            "Vercel",
            TechnologyType.HOSTING,
            "https://vercel.com/",
            0.7
          ),
          new Technology(
            "React Native",
            TechnologyType.MOBILE_FRAMEWORK,
            "https://reactnative.dev/",
            0.8
          )
        ],
        "https://blog.fabiotietz.com/sonar",
        "https://sonar-app.net"
      ),
      new Project(
        "Freelytics",
        "An application for tracking and analyzing freelancing contracts.",
        "Here should be a longer text displayed on the project details page.",
        "https://thispersondoesnotexist.com",
        new Date("01.09.2024"),
        ProjectStatus.IN_PROGRESS,
        [
          new Technology(
            "React Native",
            TechnologyType.MOBILE_FRAMEWORK,
            "https://reactnative.dev/",
            0.8
          ),
          new Technology(
            "Expo",
            TechnologyType.MOBILE_FRAMEWORK,
            "https://expo.dev/",
            0.7
          ),
          new Technology(
            "Supabase",
            TechnologyType.DATABASE,
            "https://supabase.io/",
            0.8
          ),
        ],
        "https://blog.fabiotietz.com/freelytics",
        "https://freelytics-app.com",
      ),
      new Project(
        "Word",
        "A supporting app for a guessing game.",
        "Here should be a longer text displayed on the project details page.",
        "https://thispersondoesnotexist.com",
        new Date("23.09.2024"),
        ProjectStatus.IN_PROGRESS,
        [
          new Technology(
            "Next.js",
            TechnologyType.WEB_FRAMEWORK,
            "https://nextjs.org/",
            0.8
          ),
          new Technology(
            "Tailwind CSS",
            TechnologyType.FRONTEND_FRAMEWORK,
            "https://tailwindcss.com/",
            0.8
          ),
          new Technology(
            "TypeScript",
            TechnologyType.PROGRAMMING_LANGUAGE,
            "https://www.typescriptlang.org/",
            0.8
          ),
          new Technology(
            "Vercel",
            TechnologyType.HOSTING,
            "https://vercel.com/",
            0.7
          ),
        ],
        "https://blog.fabiotietz.com/word",
        "https://word.fabiotietz.com",
      )
    ];

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <Board projects={projectData} /> 
      </div>
    )
    
}