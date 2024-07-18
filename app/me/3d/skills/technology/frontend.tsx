import React from 'react'
import TechnologySkillBase from './technology-skill-base'
import TechnologySkill from '../data/TechnologySkill'

function FrontendSkills() {
    const frontendTechnologies: TechnologySkill[] = [
        new TechnologySkill(
            "Javascript", 
            80,
            "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            "/tools/javascript",
            new Date(2012, 9, 1)
        ),
        new TechnologySkill(
            "Typescript", 
            80,
            "https://www.typescriptlang.org/",
            "https://web-forward.de/wp-content/uploads/2020/06/typescript-rand.jpg",
            "/tools/typescript",
            new Date(2022, 9, 1)
        ),
        new TechnologySkill(
            "React", 
            75,
            "https://react.dev/",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            "/tools/react",
            new Date(2022, 4, 1)
        ),
        new TechnologySkill(
            "Vue", 
            70,
            "https://vuejs.org/",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfm0xppmJGg4BtEZA3GeHCBHojz2-f0hIxw&s",
            "/tools/vue",
            new Date(2023, 12, 1)
        ),
        new TechnologySkill(
            "Next.js", 
            60,
            "https://nextjs.org/",
            "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
            "/tools/next-js",
            new Date(2024, 2, 1)
        ),
        new TechnologySkill(
            "Nuxt", 
            50,
            "https://nuxt.com/",
            "https://cp.drunomics.com/files/styles/bounding_box_1600x1000/public/2022-12/icon-green-square.png?itok=9VmSTOtM",
            "/tools/nuxt",
            new Date(2024, 4, 1)
        ),
    ]

  return (
    <div>
      {/* <SkillSubBase title='Frontend Technologies' items={frontendTechnologies} /> */}
      <TechnologySkillBase items={frontendTechnologies} label='Frontend' />
    </div>
  )
}

export default FrontendSkills
