"use client"

import UnderConstruction from '@/app/components/under-construction';
import Technology from '@/app/data/technology/technology'
import TechnologyType from '@/app/data/technology/technology-type';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Technologies } from '@/app/technology/data/availableTechnologies';

function Tool() {
const { tool } = useParams();
const [actualTool, setActualTool] = useState<Technology | null>(null);
const router = useRouter();
const tools: Technology[] = Object.values(Technologies);
console.log(tools.length);

// TODO: if tool is in toolbox: show tool detail page, else redirect to last route (router.back())

useEffect(() => {
  const foundTool = tools.find((singleTool) => singleTool.name.toLocaleLowerCase() === tool)
  if (!foundTool) {
    router.back();
  } else {
    setActualTool(foundTool);
  }
}, [tool, router])
  return (
    <div className='container mx-auto p-4'>
    {/* <div className='flex justify-center'> */}
        {/* <Card className='w-3/4 text-center'>
          <CardHeader>
            <CardTitle>{actualTool?.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Type: </strong> {actualTool?.type}</p>
            {
              actualTool ?
              <Link href={actualTool?.resources} target='_blank'>Check out</Link>
              : null
            }
          </CardContent>
          <CardFooter>
            <p>
              <strong>Personal Score:</strong>
            </p>
          <Badge>{actualTool && actualTool.personalLikability * 100} /100</Badge>
          </CardFooter>
        </Card> */} {/* TODO */}
        {/* TODO: display all projects using this technology */}
        {/* TODO: display all blog posts mentioning this technology */}

        <UnderConstruction />
    {/* </div> */}
    </div>
  )
}

export default Tool
