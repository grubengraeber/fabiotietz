import React from 'react'
import Languages from './languages'
import Mediation from './mediation'
import SkillBase from '../base'

function OtherSkills() {
  return (
    <div className='space-y-4'>
        <SkillBase title='Other Skills' items={[]} />
      <Languages />
      <br />
      <Mediation />
    </div>
  )
}

export default OtherSkills
