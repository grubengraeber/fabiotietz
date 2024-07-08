"use client"

import UnderConstruction from '@/app/components/under-construction';
import Technology from '@/app/data/technology'
import TechnologyType from '@/app/data/technology-type';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Tool() {
const { tool } = useParams();
const [actualTool, setActualTool] = useState<Technology | null>(null);
const router = useRouter();
const tools: Technology[] = [
  new Technology(
    "Dart",
    TechnologyType.PROGRAMMING_LANGUAGE,
    "https://dart.dev/",
    0.8,
  ), new Technology(
    'Flutter',
    TechnologyType.MOBILE_FRAMEWORK,
    "https://flutter.dev/",
    0.8
  ),
  new Technology(
    'Java',
    TechnologyType.PROGRAMMING_LANGUAGE,
    "https://www.java.com/",
    0.7
  ), 
  new Technology(
    'Spring',
    TechnologyType.BACKEND_FRAMEWORK,
    "https://spring.io/",
    0.9
  ),
  new Technology(
    'Typescript',
    TechnologyType.PROGRAMMING_LANGUAGE,
    'https://www.typescriptlang.org/',
    0.8
  ), 
  new Technology(
    'Nuxt',
    TechnologyType.WEB_FRAMEWORK,
    'https://nuxt.com/',
    0.6
  )
];

// TODO: if tool is in toolbox: show tool detail page, else redirect to last route (router.back())

useEffect(() => {
  const foundTool = tools.find((singleTool) => singleTool.name === tool)
  if (!foundTool) {
    router.back();
  } else {
    setActualTool(foundTool);
  }
}, [tool, router, tools])
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
