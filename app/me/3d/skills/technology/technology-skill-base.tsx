import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { CalendarDays } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@headlessui/react';

function TechnologySkillBase({items, label} : {items: {title: string, level: number, url: string, image: string, projects: string}[], label: string}) {
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

                <Link href={item.url} target='_blank'>
                <Avatar>
                  <AvatarImage src={item.image} />
                  <AvatarFallback>{item.title[0]}</AvatarFallback>
                </Avatar>
                </Link>
                <br />
                <Link href={item.projects}>Check out my related projects</Link> 
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-sm">Skill Level: {item.level}%</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Added Recently
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </motion.div>
    {/*
    TAKE 4
    <div className="relative">
      <h3 className="text-4xl font-semibold mb-4">{label}</h3>
      <div className="relative h-6 w-full bg-gray-200 dark:bg-gray-900 rounded-full overflow-hidden">
        {items.map((item, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <div
                className={`${colors[index % colors.length]} h-full`}
                style={{ width: `${item.level}%` }}
              ></div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>{item.title[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-sm">Skill Level: {item.level}%</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Added Recently
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div> */}
    {/* 
    TAKE 3
    <div className="relative">
      <h3 className="text-4xl font-semibold">{label}</h3>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-400">{item.title}</h4>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div
                className={`h-4 w-full ${colors[index % colors.length]} rounded-full mt-2`}
                style={{ width: `${item.level}%` }}
              ></div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>{item.title[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-sm">Skill Level: {item.level}%</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Added Recently
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div> */}
    {/* 
    TAKE 1
    <div className="relative">
      <h3 className="text-4xl font-semibold">{label}</h3>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-400">{item.title}</h4>
          <div
            className={`h-4 w-full ${colors[index % colors.length]} rounded-full mt-2`}
            style={{ width: `${item.level}%` }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          ></div>
          {hoveredItem === index && (
            <div className="absolute bg-white dark:bg-gray-800 p-2 rounded shadow-lg mt-2">
              <p className="text-gray-800 dark:text-gray-400 font-bold">{item.title}</p>
              <p className="text-gray-600 dark:text-gray-300">{item.level}%</p>
            </div>
          )}
        </div>
      ))}
    </div> */}
    {/* 
    TAKE 2
    <div>
      <h3 className='text-4xl font-semibold'>{label}</h3>
      {items.map((item) => (
        <>
        <h4 className='text-lg font-bold text-gray-800 dark:text-gray-400'>{item.title}</h4>
        <div className='h-4 w-full bg-gray-200 dark:bg-gray-900 rounded-full mt-2' style={{ width: `${item.level}%`}}>

        </div>
        </>
      ))}
    </div> */}
    </>
  )
}

export default TechnologySkillBase
