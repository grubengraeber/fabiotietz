import React from 'react'
import Section from '../../section'
import SkillBase from '../base/base'
import FrontendSkills from './frontend'
import BackendSkills from './backend'
import MobileSkills from './mobile'
import DatabaseSkills from './database'

function Technology() {
  return (
    <Section>
      <h1 className='text-6xl font-extrabold leading-snug'>Technology</h1>
    <div className='space-y-4'>
        <SkillBase title='' items={[]} />
      <FrontendSkills />
      <br />
      <BackendSkills />
      <br />
      <MobileSkills />
      <br />
      <DatabaseSkills />
      <br />
    </div>
    </Section>
  )
}

export default Technology
