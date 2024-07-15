import React from 'react'
import SkillBase from '../base'
import SkillSubBase from '../sub-base'

function DatabaseSkills() {
    const databases = [
        {
            title: "PostgreSQL", 
            level: 70
        },
        {
            title: "MariaDB", 
            level: 50
        },
        {
            title: "Firestore", 
            level: 40
        },
        {
            title: "Redis", 
            level: 40
        },
    ]
  return (
    <div>
      <SkillSubBase title='Databases' items={databases} />
    </div>
  )
}

export default DatabaseSkills
