import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import Section from '../section'

function AustrianArmedForces() {
  return (
      <Section>
        <div className='mb-10'>
      <Card className='mt-64'>
        <CardHeader>
            <CardTitle>Wachtmeister <small>Sergeant (OR-5)</small></CardTitle>
            <CardDescription>Austrian Armed Forces <small>03/2017 - 02/2022</small></CardDescription>
            <div className='w-full h-48 bg-gray-200 dark:bg-gray-800'>
                <img src='/logos/bundesheer.jpg' alt='Bundesheer' className='w-full h-full object-cover' />
            </div>
        </CardHeader>
        <CardContent className='text-start pl-10'>
            <div className='flex flex-col space-y-4'>
                <p className='text-2xl'>Tasks:</p>
                <ul className='list-disc list-inside'>
                    <li>Operated and maintained advanced communication systems, ensuring seamless connectivity during missions</li>
                    <li>Training in leading a team of soldiers, managing daily operations and mission planning</li>
                    <li>Trained new recruits and peers in military protocols, equipment usage, and tactical strategies</li>
                    <li>Provided first aid and medical assistance during missions and training exercises</li>
                    <li>Completed rigorous survival training to prepare for various hostile environments</li>
                </ul>
                <p className='text-2xl'>Skills gained:</p>
                <ul className='list-disc list-outside [&_ul]:list-[revert] space-y-4'>
                    <li>
                        <p>Communication Systems</p>
                        <ul className='list-disc list-inside'>
                            <li>Proficiency in various communication technologies and equipment</li>
                            <li>Effective troubleshooting and problem-solving in high-pressure situations</li>
                            <li>Ensuring secure and encrypted lines of communication</li>
                        </ul>
                    </li>
                    <li>
                        <p>Leadership and Training</p>
                        <ul className='list-disc list-inside'>
                            <li>Strong leadership and decision-making abilities</li>
                            <li>Strategic thinking and planning</li>
                            <li>Conflict resolution and team-building techniques</li>
                            <li>Adaptability and quick response to changing circumstances</li>
                        </ul>
                    </li>
                    <li>
                        <p>Training Others</p>
                        <ul className='list-disc list-inside'>
                            <li>Instructional and mentorship skills</li>
                            <li>Development of training programs and materials</li>
                            <li>Assessment and feedback delivery</li>
                            <li>Patience and effective communication to ensure understanding and skill acquisition</li>
                        </ul>
                    </li>
                    <li>
                        <p>Medical Training</p>
                        <ul className='list-disc list-inside'>
                            <li>Emergency medical response and first aid</li>
                            <li>Knowledge of battlefield medicine and trauma care</li>
                            <li>Ability to remain calm and effective under stress</li>
                            <li>Understanding of medical protocols and procedures</li>
                        </ul>
                    </li>
                    <li>Survival Training
                        <ul className='list-disc list-inside'>
                            <li>Survival techniques in diverse environments</li>
                            <li>Resourcefulness and improvisation</li>
                            <li>Physical and mental resilience</li>
                            <li>Navigation and orienteering skills</li>
                            <li>Building shelters, finding food and water, and basic survival tactics</li>
                        </ul>
                    </li>
                </ul>            
            </div>
        </CardContent>
        <CardFooter className='text-center grid grid-cols-3'>
            <div>

            </div>
            <Link href='https://bundesheer.at' target='_blank' className='text-center w-full'><Button className='text-center'>Visit Austrian Armed Forces</Button></Link>
        </CardFooter>
      </Card>
    </div>
    </Section>
  )
}

export default AustrianArmedForces
