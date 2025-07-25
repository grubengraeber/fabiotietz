import React from 'react'
import HorizontalCardCarousel from './client-projects/horizontal-card-carousel'
import Section from '../section'
import MobileClientProjects from './client-projects/mobile-client-projects'

type ClientProject = {
  projectDescription: string
  projectName: string
  projectTitle: string
  projectUrl: string
  imageUrl: string
  startAndEndDate: string
  projectId: string
}

function ClientProjects({mobile}: {mobile: boolean}) {
  const projects = [
    {
      projectTitle: 'Software Developer',
      startAndEndDate: '08/2024',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRBYZhNvhjZQ8NVOcj0-5vE5tjKGIzEd2HWTiPPEuLfdkeZVKFQqTe6pY-0mIgB9Apw&usqp=CAU',
      projectName: 'Bladescape',
      projectDescription: `Automated image and stabilisator data extraction and export for further computation using Python.`,
      projectUrl: 'https://blade-scape.com',
      projectId: 'bladescape'
    },
    {
      projectTitle: 'Software Developer',
      startAndEndDate: '01/2025 - 08/2025',
      imageUrl: 'https://www.moderne-schiesslehre.de/media/image/75/f3/46/XSPECTER-Logo.png',
      projectName: 'XSPECTER',
      projectDescription: `Cross Platform mobile app development for an IoT app streaming from WiFi connected cameras and controlling a Bluetooth device including firmware updates, joystick controlling, mode switching, device info retrieval.`,
      projectUrl: 'https://xspecter.de',
      projectId: 'xspecter'
    },
    {
      projectTitle: 'Software Developer',
      startAndEndDate: '02/2025 - 12/2026',
      imageUrl: 'https://cdn0.erstegroup.com/content/dam/at/ebv/www_ebv-leasing_at/logos/AT-EBV_Special_screen_logo_RGB.png',
      projectName: 'Erste Bank Leasing',
      projectDescription: `Working on a big internal project on the frontend and on the backend for automating internal processes.`,
      projectUrl: 'https://www.ebv-leasing.at',
      projectId: 'erste-bank-leasing'
    },
    {
      projectTitle: 'Software Developer',
      startAndEndDate: '04/2025 - 01/2026',
      imageUrl: 'data:image/jpeg;base64,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',
      projectName: 'Guardians of Social Media',
      projectDescription: `Working on a platform for automating the day to day business for businesses and influencers.`,
      projectUrl: 'https://www.theguardians.at',
      projectId: 'guardians-of-social-media'
    }
  ]
  
  return (
    <Section>
        <div className='mb-16'>
          {
            mobile ?
            <MobileClientProjects projects={projects} />
            :
        <HorizontalCardCarousel projects={projects} />
          }
        </div>
    </Section>
  )
}

export default ClientProjects
export type { ClientProject } 