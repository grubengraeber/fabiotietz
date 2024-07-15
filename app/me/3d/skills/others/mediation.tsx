import React from 'react'
import SkillSubBase from '../sub-base'

function Mediation() {

  const mediationSkills: {title: string, level: number}[] = [
    {
      title: "Training",
      level: 60
    },
    {
      title: "Experience",
      level: 20
    },
  ]

  return (
    <div>
      <SkillSubBase title='Peer Mediation' items={mediationSkills} />
    </div>
  )
}

export default Mediation
