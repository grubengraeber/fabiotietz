import React, { ReactNode } from 'react'
import { motion } from "framer-motion"

function Section({children} : { children: ReactNode}) {
  return (
    <motion.section className=' w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-center justify-center' initial={{ opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0, transition: {
        duration: 1, delay: 0.6
    }}} >
    {children}
    </motion.section>
  )
}

export default Section
