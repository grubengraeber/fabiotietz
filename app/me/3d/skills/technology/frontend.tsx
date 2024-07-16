import React from 'react'
import SkillBase from '../base'
import SkillSubBase from '../sub-base'
import TechnologySkillBase from './technology-skill-base'

function FrontendSkills() {
    const frontendTechnologies = [
        {
            title: "Javascript", 
            level: 80
        },
        {
            title: "Typescript", 
            level: 80
        },
        {
            title: "React", 
            level: 75
        },
        {
            title: "Vue", 
            level: 70
        },
        {
            title: "Next.js", 
            level: 60
        },
        {
            title: "Nuxt", 
            level: 50
        },
    ]

  return (
    <div>
      {/* <SkillSubBase title='Frontend Technologies' items={frontendTechnologies} /> */}
      <TechnologySkillBase items={frontendTechnologies} label='Frontend' />
    </div>
  )
}

export default FrontendSkills
