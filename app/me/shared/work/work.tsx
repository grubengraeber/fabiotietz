import React from 'react'
import Section from '../section'
import Smatrics from './smatrics'

function Work() {
  return (
    <Section>
      <div>
        <h1 className='text-6xl font-extrabold leading-snug'>
            Previous work-fields
        </h1>
        <div>
          <div id='smatrics' className='my-10 h-28'/>
            <Smatrics />
          <div id='austrian-armed-forces' className='my-10'/>
            <h2 className='text-4xl font-extrabold leading-snug'>
              Military
            </h2>
          <div id='side-jobs' className='my-10'/>
            <h2 className='text-4xl font-extrabold leading-snug'>
              Side Jobs
            </h2>
            <div id='fitinn' className='my-10'/>
              <h3 className='text-2xl font-extrabold leading-snug'>
                Fitinn
              </h3>
            <div id='therme-wien' className='my-10'/>
              <h3 className='text-2xl font-extrabold leading-snug'>
                Therme Wien
              </h3>
            <div id='thurs' className='my-10'/>
              <h3 className='text-2xl font-extrabold leading-snug'>
                THURS
              </h3>
            <div id='sellinnx' className='my-10'/>
              <h3 className='text-2xl font-extrabold leading-snug'>
                Sellinx
              </h3>

            Work:
        - project_based
        - smatrics
        - fitinn
        - military
        - side_jobs
        </div>
      </div>
    </Section>
      
  )
}

export default Work
