import React from 'react'
import Section from '../section'
import { motion } from 'framer-motion'
import Hlw10 from './hlw10'
import Codecool from './codecool'

function Education({mobile}: {mobile: boolean}) {
  return (
    <motion.section className='w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-center justify-center' initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0, transition: {
      duration: 1, delay: 0.6
  }}} >
    <div className='mt-16 mb-16'>
        <h1 className='text-6xl font-extrabold leading-snug my-10'>
        Education
        </h1>
        <Hlw10 mobile={mobile} />
        <Codecool mobile={mobile} />
      </div>
    </motion.section>
  )
}

export default Education
