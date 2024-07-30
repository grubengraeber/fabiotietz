import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import HorizontalCard from './horizontal-card'
import { Job } from '../sidejobs'

function HorizontalCardCarousel({jobs} : {jobs: Job[]}) {
    
  return (
    <div>
        <h1 className='text-4xl font-bold'>Side Jobs</h1>
        <Carousel className="max-w-xs" opts={{ loop: true }}>
      <CarouselContent>
        {jobs.map((job, index) => (
          <CarouselItem key={index} className='flex justify-center items-center'>
            <div className="p-1">
              <HorizontalCard 
              mobile={false}
              companyDescription={job.companyDescription} 
              companyName={job.companyName} 
              companyPostition={job.companyPostition} 
              companyUrl={job.companyUrl} 
              companyImageUrl={job.imageUrl} 
              companyStartAndEndTime={job.startAndEndDate}
              companyId={job.companyId} />
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
