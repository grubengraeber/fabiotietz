import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Added from './added';
import TechnologySkill from '../../data/TechnologySkill';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

function TechnologySkillBaseMobile({items, label } : {items: TechnologySkill[], label: string }) {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];
    const totalLevel = items.reduce((acc, item) => acc + item.level, 0);

  return (
    <>
    <motion.div className="relative" whileInView={'visible'}>
      <h3 className="text-4xl font-semibold mb-4">{label}</h3>
      <div className="relative h-6 w-full bg-gray-200 dark:bg-gray-900 rounded-full overflow-hidden">
        {items.map((item, index) => (
            <Dialog key={index}>
                <DialogTrigger asChild>
                    {/* TODO: Animate the click on the following div to be visually seeable like a click animation */}


                    <motion.div

                    className={`inline-block h-full ${colors[index % colors.length]} `}
                    style={{ width: `${(item.level / totalLevel) * 100}%` }}
                    initial={{
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
                    animate={{ width: `${(item.level / totalLevel) * 100}%` }}
                    whileTap={{ scale: 0.8 }}

                    ></motion.div>
                </DialogTrigger>

                <DialogContent className='w-4/5'>
                <DialogHeader>
                    <DialogTitle className='grid grid-cols-2'>
                    <Avatar className='text-start'>
                  <AvatarImage src={item.image} />
                  <AvatarFallback>{item.title[0]}</AvatarFallback>
                </Avatar>
                    <Link href={item.url} target='_blank' className='inline-flex space-x-2 text-end'>
                  <h4 className="text-lg font-semibold justify-center align-middle content-center">{item.title}</h4>
                </Link>
                    </DialogTitle>
                    <DialogDescription>Click title to open the official documentation</DialogDescription>
                </DialogHeader>
                <div className="flex justify-between space-x-4">
                <div>
                <div className='my-4' />
                <Link href={item.projects}>Check out my related projects</Link> 
                </div>
                <div className="space-y-1">
                  <p className="text-sm">Skill Level: {item.level}%</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <Added date={item.added} />
                  </div>
                </div>
              </div>
                </DialogContent>
            </Dialog>
            
        ))}
      </div>
    </motion.div>
    </>
  )
}

export default TechnologySkillBaseMobile
