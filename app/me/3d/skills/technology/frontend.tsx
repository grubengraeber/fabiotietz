import React from 'react'
import SkillBase from '../base'
import SkillSubBase from '../sub-base'

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
      <SkillSubBase title='Frontend Technologies' items={frontendTechnologies} />
    </div>
  )
}

export default FrontendSkills
