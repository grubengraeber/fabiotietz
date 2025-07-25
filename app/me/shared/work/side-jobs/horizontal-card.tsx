import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function HorizontalCard({ companyPostition, companyName, companyDescription, companyUrl, companyImageUrl, companyStartAndEndTime, companyId, mobile }: { companyPostition: string, companyName: string, companyDescription: string, companyUrl: string, companyImageUrl: string, companyStartAndEndTime: string, companyId: string, mobile: boolean }) {
  return (
    <div>
        <div id={companyId} className='my-10 h-16'/>
      <Card >
        <CardHeader>
            <CardTitle>{companyPostition}</CardTitle>
            <CardDescription>{companyName} <small>{companyStartAndEndTime}</small></CardDescription>
        </CardHeader>
        <div className='w-full h-48 bg-gray-200 dark:bg-gray-800 relative'>
            <Image src={companyImageUrl} alt={companyName} fill className='object-cover' />
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
