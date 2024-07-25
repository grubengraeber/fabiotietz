import React from 'react'
import Section from '../section'

function Work() {
  return (
    <Section>
      <div>

        <h1 className='text-6xl font-extrabold leading-snug'>
            These where my fields of work so far:
        </h1>
        <div>
          <div id='smatrics'>
            <h2 className='text-4xl font-extrabold leading-snug'>
              Smatrics
            </h2>
          </div>
          <div id='austrian-armed-forces'>
            <h2 className='text-4xl font-extrabold leading-snug'>
              Military
            </h2>
          </div>
          <div id='side-jobs'>
            <h2 className='text-4xl font-extrabold leading-snug'>
              Side Jobs
            </h2>
            <div id='fitinn'>
              <h3 className='text-2xl font-extrabold leading-snug'>
                Fitinn
              </h3>
            </div>
            <div id='therme-wien'>
              <h3 className='text-2xl font-extrabold leading-snug'>
                Therme Wien
              </h3>
            </div>
            <div id='thurs'>
              <h3 className='text-2xl font-extrabold leading-snug'>
                THURS
              </h3>
            </div>
            <div id='sellinnx'>
              <h3 className='text-2xl font-extrabold leading-snug'>
                Sellinx
              </h3>
            </div>
          </div>

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
