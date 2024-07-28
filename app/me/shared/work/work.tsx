import React from 'react'
import Section from '../section'
import Smatrics from './smatrics'
import AustrianArmedForces from './austrian-armed-forces'
import SideJobs from './sidejobs'

function Work() {
  return (
    <Section>
      <div className='mt-16'>
        <h1 className='text-6xl font-extrabold leading-snug'>
            Previous work-fields
        </h1>
        <div>
          <div id='smatrics' className='my-10 h-28'/>
            <Smatrics />
          <div id='austrian-armed-forces' className='my-10 h-28'/>
              <AustrianArmedForces />
          <div id='side-jobs' className='my-10'/>
            <SideJobs />
        </div>
      </div>
    </Section>
      
  )
}

export default Work
