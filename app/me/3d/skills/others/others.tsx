import React from 'react'
import Languages from './languages'
import Mediation from './mediation'
import SkillBase from '../base'
import Section from '../../section'

function OtherSkills() {
  return (
    <Section>
      <h1 className='text-6xl font-extrabold leading-snug'>Other Skills</h1>
    <div className='space-y-4'>
        <SkillBase title='Other Skills' items={[]} />
      <Languages />
      <br />
      <Mediation />
    </div>
    </Section>
  )
}

export default OtherSkills
