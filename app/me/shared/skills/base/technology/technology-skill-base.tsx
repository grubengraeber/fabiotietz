import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { CalendarDays } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Added from './added';
import TechnologySkill from '../../data/TechnologySkill';

function TechnologySkillBase({items, label } : {items: TechnologySkill[], label: string }) {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];
    const totalLevel = items.reduce((acc, item) => acc + item.level, 0);


  return (
    <>
    <motion.div className="relative" whileInView={'visible'}>
      <h3 className="text-4xl font-semibold mb-4">{label}</h3>
      <div className="relative h-6 w-full bg-gray-200 dark:bg-gray-900 rounded-full overflow-hidden">
        {items.map((item, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <motion.div
                className={`inline-block h-full ${colors[index % colors.length]}`}
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
                /* transition={{ duration: 1 }} */
              ></motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div>

                <Link href={item.url} target='_blank' className='inline-flex space-x-2'>
                  <h4 className="text-lg font-semibold justify-center align-middle content-center">{item.title}</h4>
                <Avatar>
                  <AvatarImage src={item.image} />
                  <AvatarFallback>{item.title[0]}</AvatarFallback>
                </Avatar>
                </Link>
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
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </motion.div>
    </>
  )
}

export default TechnologySkillBase
