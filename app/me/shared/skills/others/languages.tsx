import React from 'react'
import SkillBase from '../base/base'
import SkillSubBase from '../base/sub-base'

function Languages() {

    const languages = [
        {
            title: "  🇩🇪 Deutsch",
            level: 100
        },
        {
           title: "🇬🇧 English",
           level: 80
        },
        {
           title: "🇫🇷 Français",
           level: 60
        },
        {
           title: "🇪🇸 Español",
           level: 30
        },
        {
           title: "🇭🇷 Hrvatski",
           level: 10
        }
    ]
  return (
    <div>
        <SkillSubBase items={languages} title='Languages' />
      {/* <h2 className='text-5xl font-bold'>Languages</h2>
      <div className='mt-8 space-y-4'>
        {languages.map((language, index) => (
            <div key={index}>
                <h3 className='text-xl font-bold text-gray-800 dark:text-gray-400'>{language.title}</h3>
                <div className='h-2 w-full bg-gray-200 dark:bg-gray-900 rounded-full mt-2'>
                    <div className='h-full bg-emerald-500 rounded-full' style={{ width: `${language.level}%`}} />
                </div>
            </div>
        ))}
      </div> */}
    </div>
  )
}

export default Languages
