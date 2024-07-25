import React from 'react'
import { motion } from "framer-motion"

type SkillItem = {
    title: string,
    level: number
}

function SkillSubBase({title, items}: {title: string, items: SkillItem[]}) {
  return (
    <motion.div whileInView={'visible'}>
      <h3 className='text-4xl font-semibold'>{title}</h3>
      <div className='mt-8 space-y-4'>
        {items.map((item, index) => (
            <div key={index}>
                <motion.h4
                initial={{ opacity: 0}}
                variants={{
                  visible: {
                  opacity: 1,
                  transition: {
                    duration: 1, 
                    delay: 1 + index * 0.2
                  }
                  }
                }}
                className='text-lg font-bold text-gray-800 dark:text-gray-400'>{item.title}</motion.h4>
                <div className='h-2 w-full bg-gray-200 dark:bg-gray-900 rounded-full mt-2'>
                    <motion.div initial={{
                      scaleX: 0,
                      originX: 0
                    }} 
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2
                        } 
                      }
                    }}
                    className='h-full bg-emerald-500 rounded-full' style={{ width: `${item.level}%`}} />
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillSubBase
