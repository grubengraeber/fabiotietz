import React from 'react'
import Section from './section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from "framer-motion"


function About() {

  return (
    <Section>
        <div className='text-start'>

        <h1 className='text-6xl font-extrabold leading-snug'>
            Hey, I'm
            <br />
            <span className='bg-black dark:bg-white px-1 italic text-white dark:text-black'>Fabio TIETZ</span>
        </h1>
        <div className='text-lg text-gray-600 mt-4'>
            <motion.p className='text-gray-800 dark:text-gray-200' initial={{ opacity: 0, y: 25}}
            whileInView={{ opacity: 1, y: 0, 
                }}
                transition={
                    {duration: 1, delay: 1.5}
                }
            >I'm a Software Developer</motion.p>
            <motion.p initial={{ opacity: 0, y: 25}}
            whileInView={{ opacity: 1, y: 0, 
                }}
                transition={
                    {duration: 1, delay: 2}
                }>Let me know if I can help you with something.</motion.p>
            <br />
            <Link href={'/contact'}>
            <motion.div initial={{ opacity: 0, y: 25}}
            whileInView={{ opacity: 1, y: 0, 
                }}
                transition={
                    {duration: 1, delay: 2.5}
                }>

            <Button className='bg-emerald-600'>
                Contact Me
            </Button>
                </motion.div>
            </Link>
        </div>
        </div>
        </Section>
  )
}

export default About
