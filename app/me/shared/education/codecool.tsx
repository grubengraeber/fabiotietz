import React from 'react'
import Section from '../section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function Codecool() {
  const educationCategories = [
    { id: 'basics', label: 'Prog-Basics', startAndEndTime: '02/2022 - 04/2022', description: `
        In this module I learned the basics of programming. I learned how to write clean code, how to use loops and conditionals, and how to work in a team. I also learned about algorithms and data structures.

        Here are some of the skills I learned:
        `, skills: ['python', 'algorithms', 'datastructures', 'loops', 'conditionals', 'command line', 'teamwork'] 
      },
    { id: 'web', label: 'Web-Module', startAndEndTime: '04/2022 - 06/2022', description: `
        In this module I learned how to build web applications. I learned how to use HTML, CSS, and JavaScript to create websites. I also learned how to work with databases and how to use AJAX and the Fetch API.

        Here are some of the skills I learned:
        `, skills: ['javascript', 'unit-testing', 'jest', 'mockito', 'html', 'css', 'scrum', 'flask', 'postgreSQL', 'ajax', 'fetch-api'] 
      },
    { id: 'oop', label: 'OOP-Module', startAndEndTime: '06/2022 - 08/2022', description: `
        In this module I learned about object-oriented programming. I learned how to write clean code, how to use design patterns especially the SOLID principles, and how to work with databases. I also learned about testing and documentation.

        Here are some of the skills I learned:
        `, skills: ['java', 'web-sockets', 'java-fx', 'object orientation', 'documentation', 'junit', 'lombok', 'maven', 'gradle'] 
      },
    { id: 'advanced', label: 'Advanced-Module', startAndEndTime: '08/2022 - 10/2022', description: `
        In this module I learned about advanced topics in programming. I learned how to build microservices, how to work with reactive programming, and how to use cloud providers. I also learned about authentication providers and how to work with databases. In addition, I learned about requirements engineering and some popular frameworks and libraries.

        Here are some of the skills I learned:
        `, skills: ['react', 'spring', 'spring boot', 'hibernate', 'requirements engineering', 'microservices', 'reactive programming', 'authentication providers', 'cloud providers'] },
];
  return (
    <Section>
      <Link className='my-10' href='https://codecool.com/en/' target='_blank'><Button>Codecool Vienna (02/2022-10/2022)<small> Already closed in Vienna </small></Button></Link>
      <div className="grid grid-cols-2 gap-4">
            {educationCategories.map((category) => (
                <Card id={category.id} key={category.id}>
                    <CardHeader>
                        <CardTitle>{category.label}</CardTitle>
                        <CardDescription>{category.startAndEndTime}</CardDescription>
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

export default Codecool
