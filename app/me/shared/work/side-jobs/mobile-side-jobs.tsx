import React from 'react'
import { Job } from '../sidejobs'
import HorizontalCard from './horizontal-card'

function MobileSideJobs({ jobs }: { jobs: Job[] }) {
  return (
    <>
            <h1 className='text-4xl font-bold'>Side Jobs</h1>
    {jobs.map((job: Job, index: number) => (
        <div key={index} className="p-1">
            <HorizontalCard 
            mobile={true}
            companyDescription={job.companyDescription} 
            companyName={job.companyName} 
            companyPostition={job.companyPostition} 
            companyUrl={job.companyUrl} 
            companyImageUrl={job.imageUrl} 
            companyStartAndEndTime={job.startAndEndDate}
            companyId={job.companyId} />
          </div>
      ))}
    </>
  )
}

export default MobileSideJobs
