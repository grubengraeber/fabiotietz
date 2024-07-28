import React from 'react'
import Section from '../section'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

    function Hlw10() {
    const educationCategories = [
        { id: 'cooking', label: 'Cooking', startAndEndTime: '09/2011 - 06/2015', description: `
            Cooking was a key part of my school education and I learned a lot about food preparation and culinary arts. The skills I learned here are still very useful to me today.

            Here are some of the skills I learned:
            `, imageUrl: 'https://kochrezepte.de/wp-content/uploads/2022/07/shutterstock_1827161642-scaled.jpg', skills: ['culinary arts', 'food preparation', 'working in a team', 'working with deadlines'] },
        { id: 'service', label: 'Service', startAndEndTime: '09/2011 - 06/2015', description: `
            Serving customers was a big part of my school education and I learned a lot about customer service and communication. These skills are still very useful to me today.

            Here are some of the skills I learned:
            `, imageUrl: 'https://b1759693.smushcdn.com/1759693/wp-content/uploads/2017/10/waiter-decanting-wine.jpg?lossy=1&strip=1&webp=1', skills: ['customer service', 'communication', 'handling complaints', 'attention to detail', 'staying nice and detached in stressful situations'] },
        { id: 'media-informatics', label: 'Media Informatics', startAndEndTime: '09/2011 - 06/2016', description: `
            Media Informatics was a big part of my school education and I learned a lot about web development, user interface design, and 3d-rendering. These skills are still very useful to me today.

            Here are some of the skills I learned:
            `, imageUrl: 'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-03T173153_959.jpg', skills: ['learning new technologies', 'learning the basics of coding', 'web development', 'user interface design', 'creating something asthetically pleasing', '3d-rendering', 'handling frustration', 'photo-editing', 'video-editing', 'audio-editing'] },
        { id: 'economics', label: 'Economics', startAndEndTime: '09/2011 - 06/2016', description: `
            Economics was a big part of my school education and I learned a lot about financial analysis, business management, and accounting. These skills are still very useful to me today.

            Here are some of the skills I learned:
            `, imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*7b5INz5MLUF-yn9GKwq5Tg.jpeg', skills: ['financial analysis', 'business management', 'accounting', 'crafting businessplans', 'setting priorities'] },
    ];
  return (
    <Section>
        <Link className='my-10' href='https://www.hlw10.at/' target='_blank'><Button>HLW 10 - School education <small>(2011-2016)</small></Button></Link>
        <div className="grid grid-cols-2 gap-4">
            {educationCategories.map((category) => (
                <Card id={category.id} key={category.id}>
                    <CardHeader>
                        <CardTitle>{category.label}</CardTitle>
                        <CardDescription>{category.startAndEndTime}</CardDescription>
                        <div className='w-full h-48 bg-gray-200 dark:bg-gray-800'>
                            <img src={category.imageUrl} alt={category.label} className='w-full h-full object-cover' />
                        </div>
                        </CardHeader>
                    <CardContent>
                        <section>
                            {category.description}
                        </section>
                    <div className="flex flex-wrap">
                        {category.skills.map((skill) => (
                            <Badge key={skill} className="mr-2 mb-2">{skill}</Badge>
                            ))}
                    </div>
                        </CardContent>
                        </Card>
            ))}
        </div>
    </Section>
  )
}

export default Hlw10
