import React from 'react'
import Section from '../../../section'
import FrontendSkillsMobile from './frontend-mobile'
import BackendSkillsMobile from './backend-mobile'
import MobileSkillsMobile from './mobile-mobile'
import DatabaseSkillsMobile from './database-mobile'

function TechnologyMobile() {
  return (
    <Section>
      <div>

      <h1 className='text-6xl font-extrabold leading-snug'>Technology</h1>
    <div className='space-y-4'>
      <FrontendSkillsMobile />
      <br />
      <BackendSkillsMobile />
      <br />
      <MobileSkillsMobile />
      <br />
      <DatabaseSkillsMobile />
      <br />
    </div>
      </div>
    </Section>
  )
}

export default TechnologyMobile
