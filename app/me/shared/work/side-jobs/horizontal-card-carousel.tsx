import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import HorizontalCard from './horizontal-card'

function HorizontalCardCarousel() {
    const jobs = [
        {
        companyPostition: 'Front Desk / Receptionist',
        startAndEndDate: '03/2022 - 05/2022',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7xA1Q508HoHEbcNleBsf4jpWMUDwf5DChA&s',
        companyName: 'Fitinn',
        companyDescription: `I worked as a Frontdesk Employee for Fitinn in Vienna, Austria.
        My responsibilities included checking in customers, answering questions and helping them with any upcoming difficulties in the gym.
        I also had to do some cleaning and maintenance work.
        
        Additionally I was responsible for the cash register and had to do some administrative work.`,
        companyUrl: 'https://www.fitinn.at',
        companyId: 'fitinn'
        },
        {
            companyPostition: 'Security / Bouncer',
            startAndEndDate: '10/2019 - 02/2020',
            imageUrl: 'https://cdn.join.com/61f000d89f170d0008ffd4e0/thurs-gmb-h-logo-xl.png',
            companyName: 'THURS GmbH',
            companyDescription: `
            I worked as a Security Guard for THURS GmbH in Vienna, Austria.
            My responsibilities included checking the age of customers, making sure no illegal substances were brought into the club and making sure everyone had a good time.
            
            I was active in the club scene in Vienna, including the following clubs:
            - Club O
            - Horst
            - INC.
            `,
            companyUrl: '',
            companyId: 'thurs'
            },
            {
                companyPostition: 'Promoter / Sample Distributor',
                startAndEndDate: '10/2017 - 04/2019',
                imageUrl: 'https://sellinnx.at/wp-content/uploads/2021/04/kleinohnerahm_Zeichenflaeche-1.png',
                companyName: 'Sellinnx',
                companyDescription: `
                I worked as a Promoter and Sample Distributor for Sellinnx in Vienna, Austria.
                My responsibilities included promoting products and distributing samples to potential customers.
                `,
                companyUrl: 'https://www.sellinnx.at',
                companyId: 'sellinnx'
                },
                {
                    companyPostition: 'Child Care / Youth Worker',
                    startAndEndDate: '03/2016 - 12/2019',
                    imageUrl: 'https://www.blackaustria.info/wp-content/uploads/2024/02/SFC-Logo-FB.png',
                    companyName: 'SFC Vienna',
                    companyDescription: `
                    The SFC Vienna (Schwarze Frauen Community) is an initiative of black female* individuals of different origins and nationalities, who promote and support self-confidence, self-determination, and self-organization of black women, children, and youth.
                    
                    I worked as a Child Care and Youth Worker for SFC Vienna in Vienna, Austria.
                    My responsibilities included taking care of children and teenagers, organizing activities and making sure everyone had a good time.
                    `,
                    companyUrl: 'https://www.schwarzefrauencommunity.at',
                    companyId: 'sfc'
                },
            {
            companyPostition: 'Chef / Service Staff / Barkeeper',
            startAndEndDate: '06/2014 - 09/2014',
            imageUrl:'https://i0.wp.com/www.austrian-mermaids.at/wp-content/uploads/2014/08/therme-wien-logo.jpg?fit=3613%2C1702&ssl=1',
            companyName: 'Therme Wien',
            companyDescription: `
            I worked as a Chef, Service Staff and Barkeeper for Therme Wien in Vienna, Austria.
            My responsibilities included preparing food, serving customers and mixing drinks.
    
            It was an internship necessary for my education at the time.
            `,
            companyUrl: 'https://www.thermewien.at',
            companyId: 'therme-wien'
            },
            ]
  return (
    <div className='mt-64'>
        <Carousel className="max-w-xs" opts={{ loop: true }}>
      <CarouselContent>
        {jobs.map((job, index) => (
          <CarouselItem key={index} className='flex justify-center items-center'>
            <div className="p-1">
              <HorizontalCard 
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
