import React from 'react'
import Section from '../../shared/section'
import Technology from '../../shared/skills/technology/technology'
import OtherSkills from '../../shared/skills//others/others'

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
