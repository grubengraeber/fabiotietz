import React from 'react'
import Section from '../section'
import Languages from './others/languages'
import Technology from './technology/technology'
import OtherSkills from './others/others'

function Skills() {
  return (
    <Section>
      <h1 className='text-6xl font-extrabold leading-snug'>
            Skills
            <br />
            </h1>
    <div className='space-y-8'>
      <Technology />
      <OtherSkills />
    </div>
    </Section>
  )
}

export default Skills
