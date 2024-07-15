import React from 'react'
import SkillBase from '../base'
import SkillSubBase from '../sub-base'

function MobileSkills() {
    const mobileTechnologies = [
        {
            title: "Dart", 
            level: 80
        },
        {
            title: "Flutter", 
            level: 40
        },
        {
            title: "Swift", 
            level: 20
        },
        {
            title: "React Native", 
            level: 15
        }
    ]

  return (
    <div>
        <SkillSubBase items={mobileTechnologies} title='Mobile Technologies' />
    </div>
  )
}

export default MobileSkills
