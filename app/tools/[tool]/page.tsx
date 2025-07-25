import UnderConstruction from '@/app/components/under-construction';
import Technology from '@/app/data/technology/technology'
import TechnologyType from '@/app/data/technology/technology-type';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { Technologies } from '@/app/technology/data/availableTechnologies';

function Tool({params}: {params: {tool: string}}) {
  const tools: Technology[] = Object.values(Technologies);
  const foundTool = tools.find((singleTool) => singleTool.name.toLowerCase() === params.tool);

  if (!foundTool) {
    return (
      <div className='container mx-auto p-4'>
        <div className='text-4xl justify-center flex'>Tool not found</div>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <UnderConstruction />
    </div>
  );
}

export async function generateStaticParams() {
    const tools = Object.values(Technologies);
    return tools.map((tool) => ({
        tool: tool.name.toLowerCase(),
    }));
}

export default Tool
