import React from 'react'
import TechnologySkillBase from './technology-skill-base'
import TechnologySkill from '../data/TechnologySkill'

function DatabaseSkills() {
    const databases: TechnologySkill[] = [
        new TechnologySkill(
          "PostgreSQL",
          70,
          "https://www.postgresql.org/",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmnFYeOmmAlNV9_ZTu5cYgS2L55Q1pt9QyA&s",
          "/tools/postgresql",
          new Date(2022, 3, 1)
        ),
        new TechnologySkill(
          "MariaDB",
          50,
          "https://mariadb.org/",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFAjlEuDjItFZtWktqqMv6-fxq73LikOsig&s",
          "/tools/maria-db",
          new Date(2022, 9, 1)
        ),
        new TechnologySkill(
          "Firestore",
          40,
          "https://firebase.google.com/docs/firestore",
          "https://raw.githubusercontent.com/jovotech/jovo-marketplace/master/thumbnails/jovo-db-firestore.png",
          "/tools/firestore",
          new Date(2022, 6, 1)
        ),
        new TechnologySkill(
          "Redis",
          40,
          "https://redis.io/",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbuTCnPv7wAsOzmJ8x24tK7Wgbz6SfccUKQ&s",
          "/tools/redis",
          new Date(2022, 9, 1)
        ),
    ]
  return (
    <div>
      {/* <SkillSubBase title='Databases' items={databases} /> */}
      <TechnologySkillBase items={databases} label='Database' />
    </div>
  )
}

export default DatabaseSkills
