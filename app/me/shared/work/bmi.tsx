import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import Section from '../section'
import Image from 'next/image'

function BMI() {
  return (
    <Section>
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Software Developer</CardTitle>
            <CardDescription>Ministry of Interior (BMI Vienna) <small>12/2023 - 05/2025</small></CardDescription>
            <div className='w-full h-48 bg-gray-200 dark:bg-gray-800 relative'>
                <Image src='/logos/bmi.jpg' alt='BMI Vienna' fill className='object-cover' />
            </div>
        </CardHeader>
        <CardContent className='text-start'>
            <div className='flex flex-col space-y-4'>
                <p className='text-2xl'>Tasks:</p>
                <ul className='list-disc list-inside'>
                    <li>Worked on internal projects as a Software Developer</li>
                    <li>Contributed to various internal software solutions and applications</li>
                    <li>Supported the ministry&apos;s digital infrastructure and operational needs</li>
                </ul>
            </div>
        </CardContent>
        <CardFooter className='text-center grid grid-cols-3'>
            <div>

            </div>
            <Link href='https://www.bmi.gv.at/' target='_blank' className='text-center w-full'><Button className='text-center'>Visit BMI</Button></Link>
        </CardFooter>
      </Card>
    </div>
    </Section>
  )
}

export default BMI 