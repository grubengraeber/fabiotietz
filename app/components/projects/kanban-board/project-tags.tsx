"use client"

import Technology from '@/app/data/technology/technology'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import React from 'react'

function ProjectTags({items, color} : { items: Technology[], color: string}) {
const router = useRouter();
  return (
    <div>
        {items.map((technology, index) => {
            return (<Badge key={index} className={`mx-0.5 bg-${color} text-black border-black-1`} onClick={() => router.push(`/tools/${technology.name}`)} >#{technology.name}</Badge>)
        })}
    </div>
  )
}

export default ProjectTags
