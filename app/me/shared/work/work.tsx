import React from 'react'
import Section from '../section'
import Smatrics from './smatrics'
import AustrianArmedForces from './austrian-armed-forces'
import SideJobs from './sidejobs'
import { motion } from 'framer-motion'

function Work() {
  return (
    <motion.section className='w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-center justify-center' initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0, transition: {
      duration: 1, delay: 0.6
  }}} >
      <div className='mt-16'>
        <h1 className='text-6xl font-extrabold leading-snug'>
            Previous work-fields
        </h1>
        <div>
          <div id='austrian-armed-forces' className='my-10 h-28'/>
            <AustrianArmedForces />
          <div id='smatrics' className='my-10 h-28'/>
            <Smatrics />
          <div id='side-jobs' className='my-10 h-28'/>
            <SideJobs />
        </div>
      </div>
    </motion.section>
      
  )
}

export default Work
