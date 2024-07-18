import React from 'react'
import TechnologySkillBase from './technology-skill-base'
import TechnologySkill from '../data/TechnologySkill'

function BackendSkills() {
    const backendTechnologies: TechnologySkill[] = [
        new TechnologySkill(
            "Java", 
            80,
            "https://www.java.com/",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2tEi3labYWSv9nHowb8JXue6pOLMtGsCwA&s",
            "/tools/java",
            new Date(2021, 6, 1)
        ),
        new TechnologySkill(
            "Python", 
            75,
            "https://www.python.org/",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
            "/tools/python",
            new Date(2022, 1, 1)
        ),
        new TechnologySkill(
            "Spring Boot", 
            60,
            "https://spring.io/projects/spring-boot",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s",
            "/tools/spring-boot",
            new Date(2022, 6, 1)
        ),
        new TechnologySkill(
            "Flask", 
            40,
            "https://flask.palletsprojects.com/en/3.0.x/",
            "https://blog.appseed.us/content/images/2024/01/cover-flask.jpg",
            "/tools/flask",
            new Date(2022, 3, 1)
            ),
        new TechnologySkill(
            "Django", 
            60,
            "https://www.djangoproject.com/",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAscmwLjP7dB0dPS7GV9GhE5H47U1bmkfmmg&s",
            "/tools/django",
            new Date(2023, 12, 1)
        ),
    ]
    
  return (
    <div>
      {/* <SkillSubBase title='Backend Technologies' items={backendTechnologies} /> */}
        <TechnologySkillBase label='Backend Technology' items={backendTechnologies} />
    </div>
  )
}

export default BackendSkills
