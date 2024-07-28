import React from 'react'
import Languages from './languages'
import Mediation from './mediation'
import Section from '../../section'

function OtherSkills() {
  return (
    <Section>
      <div>

      <h1 className='text-6xl font-extrabold leading-snug'>Other Skills</h1>
    <div className='space-y-4'>
      <Languages />
      <br />
      <Mediation />
    </div>
      </div>
    </Section>
  )
}

export default OtherSkills
