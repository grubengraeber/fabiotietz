import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

function HorizontalCard({ projectTitle, projectName, projectDescription, projectUrl, projectImageUrl, projectStartAndEndTime, projectId, mobile }: { projectTitle: string, projectName: string, projectDescription: string, projectUrl: string, projectImageUrl: string, projectStartAndEndTime: string, projectId: string, mobile: boolean }) {
  return (
    <div>
        <div id={projectId} className='my-10 h-16'/>
      <Card >
        <CardHeader>
            <CardTitle>{projectTitle}</CardTitle>
            <CardDescription>{projectName} <small>{projectStartAndEndTime}</small></CardDescription>
        </CardHeader>
        <div className='w-full h-48 bg-gray-200 dark:bg-gray-800'>
            <img src={projectImageUrl} alt={projectName} className='w-full h-full object-cover' />
        </div>
        <CardContent>
            <p>{projectDescription}</p>
        </CardContent>
        <CardFooter>
            <Link href={projectUrl} target={projectUrl === '' ? '' : '_blank'}><Button>Visit {projectName}</Button></Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default HorizontalCard 