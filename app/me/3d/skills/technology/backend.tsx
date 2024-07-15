import React from 'react'
import SkillBase from '../base'
import SkillSubBase from '../sub-base'

function BackendSkills() {
    const backendTechnologies = [
        {
            title: "Java", 
            level: 80
        },
        {
            title: "Python", 
            level: 75
        },
        {
            title: "Spring Boot", 
            level: 60
        },
        {
            title: "Flask", 
            level: 40
        },
        {
            title: "Django", 
            level: 60
        },
    ]
    
  return (
    <div>
      <SkillSubBase title='Backend Technologies' items={backendTechnologies} />
    </div>
  )
}

export default BackendSkills
