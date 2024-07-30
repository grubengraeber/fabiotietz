import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

function HorizontalCard({ companyPostition, companyName, companyDescription, companyUrl, companyImageUrl, companyStartAndEndTime, companyId, mobile }: { companyPostition: string, companyName: string, companyDescription: string, companyUrl: string, companyImageUrl: string, companyStartAndEndTime: string, companyId: string, mobile: boolean }) {
  return (
    <div>
        <div id={companyId} className='my-10 h-16'/>
      <Card className={mobile ? '' : 'mt-64'}>
        <CardHeader>
            <CardTitle>{companyPostition}</CardTitle>
            <CardDescription>{companyName} <small>{companyStartAndEndTime}</small></CardDescription>
        </CardHeader>
        <div className='w-full h-48 bg-gray-200 dark:bg-gray-800'>
            <img src={companyImageUrl} alt={companyName} className='w-full h-full object-cover' />
        </div>
        <CardContent>
            <p>{companyDescription}</p>
        </CardContent>
        <CardFooter>
            <Link href={companyUrl} target={companyUrl === '' ? '' : '_blank'}><Button>Visit {companyName}</Button></Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default HorizontalCard
