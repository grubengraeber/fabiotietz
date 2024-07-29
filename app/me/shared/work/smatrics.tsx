import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import Section from '../section'

function Smatrics() {
  return (
    <Section>
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Full-Stack Developer <small>(mostly backend)</small></CardTitle>
            <CardDescription>SMATRICS <small>10/2022 - 12/2023</small></CardDescription>
            <div className='w-full h-48 bg-gray-200 dark:bg-gray-800'>
                <img src='/logos/smatrics.jpg' alt='SMATRICS' className='w-full h-full object-cover' />
            </div>
        </CardHeader>
        <CardContent className='text-start'>
            <div className='flex flex-col space-y-4'>
                <p className='text-2xl'>Tasks:</p>
                <ul className='list-disc list-inside'>
                    <li>Developed a microservice in a team of 3 for roaming and authorization logic</li>
                    <li>Worked in an agile team managing 2 micro services and the integration between the two services</li>
                    <li>Mapped data and functionality between two different &apos;Open Charge Protocols&apos; used in the E-Mobility sector</li>
                </ul>
                <p className='text-2xl'>Technologies used:</p>
                <ul className='list-disc list-inside'>
                    <li>Java 17</li>
                    <li>Spring Boot 2.7</li>
                    <li>Maven</li>
                    <li>Keycloak</li>
                    <li>MariaDB</li>
                    <li>Redis</li>
                    <li>AWS</li>
                </ul>


            
            </div>
        </CardContent>
        <CardFooter className='text-center grid grid-cols-3'>
            <div>

            </div>
            <Link href='https://www.smatrics.com' target='_blank' className='text-center w-full'><Button className='text-center'>Visit SMATRICS</Button></Link>
        </CardFooter>
      </Card>
    </div>
    </Section>
  )
}

export default Smatrics
