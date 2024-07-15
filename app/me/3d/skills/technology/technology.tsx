import React from 'react'
import FrontendSkills from './frontend'
import BackendSkills from './backend'
import MobileSkills from './mobile'
import DatabaseSkills from './database'
import SkillBase from '../base'

function Technology() {
  return (
    <div className='space-y-4'>
        <SkillBase title='Technologies' items={[]} />
      <FrontendSkills />
      <br />
      <BackendSkills />
      <br />
      <MobileSkills />
      <br />
      <DatabaseSkills />
      <br />
    </div>
  )
}

export default Technology
