import React from 'react'

type SkillItem = {
    title: string,
    level: number
}

function SkillBase({title, items}: {title: string, items: SkillItem[]}) {
  return (
    <div>
      <h2 className='text-5xl font-bold'>{title}</h2>
      <div className='mt-8 space-y-4'>
        {items.map((item, index) => (
            <div key={index}>
                <h3 className='text-xl font-bold text-gray-800 dark:text-gray-400'>{item.title}</h3>
                <div className='h-2 w-full bg-gray-200 dark:bg-gray-900 rounded-full mt-2'>
                    <div className='h-full bg-emerald-500 rounded-full' style={{ width: `${item.level}%`}} />
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SkillBase
