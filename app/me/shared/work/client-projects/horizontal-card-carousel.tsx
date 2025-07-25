import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import HorizontalCard from './horizontal-card'
import { ClientProject } from '../client-projects'

function HorizontalCardCarousel({projects} : {projects: ClientProject[]}) {
    
  return (
    <div>
        <h1 className='text-4xl font-bold'>Client Projects - TIETZ Innovations</h1>
        <Carousel className="max-w-xs" opts={{ loop: true }}>
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className='flex justify-center items-center'>
            <div className="p-1">
              <HorizontalCard 
              mobile={false}
              projectDescription={project.projectDescription} 
              projectName={project.projectName} 
              projectTitle={project.projectTitle} 
              projectUrl={project.projectUrl} 
              projectImageUrl={project.imageUrl} 
              projectStartAndEndTime={project.startAndEndDate}
              projectId={project.projectId} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default HorizontalCardCarousel 